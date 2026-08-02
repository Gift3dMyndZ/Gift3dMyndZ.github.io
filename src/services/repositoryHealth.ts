import type { GitHubRepository } from '../types/github';
import type {
  LatestCommit,
  LatestRelease,
  LatestWorkflow,
  RepositoryHealth,
  WorkflowHealthState,
} from '../types/health';
import { calculateHealthScore } from '../utils/healthScore';
import { normalizeWorkflowState } from '../utils/workflowHealth';

const GITHUB_API = 'https://api.github.com';

const headers: HeadersInit = {
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
};

interface WorkflowRunResponse {
  total_count: number;
  workflow_runs: Array<{
    name: string;
    status: string;
    conclusion: string | null;
    head_branch: string;
    event: string;
    updated_at: string;
    html_url: string;
  }>;
}

interface CommitResponse {
  sha: string;
  html_url: string;
  commit: {
    message: string;
    author: {
      name: string;
    };
    committer: {
      date: string;
    };
  };
}

interface ReleaseResponse {
  tag_name: string;
  name: string | null;
  published_at: string;
  html_url: string;
  prerelease: boolean;
}

class RepositoryHealthRequestError extends Error {
  constructor(
    message: string,
    public readonly status: number,
  ) {
    super(message);
    this.name = 'RepositoryHealthRequestError';
  }
}

async function request<T>(
  path: string,
  allowNotFound = false,
): Promise<T | null> {
  const response = await fetch(`${GITHUB_API}${path}`, {
    headers,
  });

  if (allowNotFound && response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new RepositoryHealthRequestError(
      `GitHub request failed with status ${response.status}.`,
      response.status,
    );
  }

  return response.json() as Promise<T>;
}

async function fetchLatestCommit(
  fullName: string,
): Promise<LatestCommit | null> {
  const response = await request<CommitResponse[]>(
    `/repos/${fullName}/commits?per_page=1`,
  );

  const commit = response?.[0];

  if (!commit) {
    return null;
  }

  return {
    sha: commit.sha.slice(0, 7),
    message: commit.commit.message,
    committedAt: commit.commit.committer.date,
    author: commit.commit.author.name,
    url: commit.html_url,
  };
}

async function fetchLatestWorkflow(
  fullName: string,
): Promise<{
  workflow: LatestWorkflow | null;
  state: WorkflowHealthState;
}> {
  try {
    const response = await request<WorkflowRunResponse>(
      `/repos/${fullName}/actions/runs?per_page=1`,
    );

    const run = response?.workflow_runs[0];

    if (!run) {
      return {
        workflow: null,
        state: 'NO_WORKFLOW',
      };
    }

    return {
      workflow: {
        name: run.name,
        status: run.status,
        conclusion: run.conclusion,
        branch: run.head_branch,
        event: run.event,
        updatedAt: run.updated_at,
        url: run.html_url,
      },
      state: normalizeWorkflowState(
        run.status,
        run.conclusion,
      ),
    };
  } catch {
    return {
      workflow: null,
      state: 'UNAVAILABLE',
    };
  }
}

async function fetchLatestRelease(
  fullName: string,
): Promise<LatestRelease | null> {
  const release = await request<ReleaseResponse>(
    `/repos/${fullName}/releases/latest`,
    true,
  );

  if (!release) {
    return null;
  }

  return {
    tag: release.tag_name,
    name: release.name,
    publishedAt: release.published_at,
    url: release.html_url,
    prerelease: release.prerelease,
  };
}

export async function fetchRepositoryHealth(
  repository: GitHubRepository,
): Promise<RepositoryHealth> {
  const [commitResult, workflowResult, releaseResult] =
    await Promise.allSettled([
      fetchLatestCommit(repository.full_name),
      fetchLatestWorkflow(repository.full_name),
      fetchLatestRelease(repository.full_name),
    ]);

  const commit =
    commitResult.status === 'fulfilled'
      ? commitResult.value
      : null;

  const workflowResultValue =
    workflowResult.status === 'fulfilled'
      ? workflowResult.value
      : {
          workflow: null,
          state: 'UNAVAILABLE' as WorkflowHealthState,
        };

  const release =
    releaseResult.status === 'fulfilled'
      ? releaseResult.value
      : null;

  const score = calculateHealthScore({
    repository,
    latestCommitAt: commit?.committedAt ?? null,
    workflowState: workflowResultValue.state,
    hasRelease: Boolean(release),
  });

  return {
    repository: repository.full_name,
    commit,
    workflow: workflowResultValue.workflow,
    workflowState: workflowResultValue.state,
    release,
    deployment: null,
    score: score.score,
    state: score.state,
    reasons: score.reasons,
    checkedAt: new Date().toISOString(),
  };
}

export async function fetchFlagshipHealth(
  repositories: GitHubRepository[],
  flagshipRepositories: string[],
): Promise<RepositoryHealth[]> {
  const normalizedFlagships = new Set(
    flagshipRepositories.map(name => name.toLowerCase()),
  );

  const selectedRepositories = repositories.filter(
    repository =>
      normalizedFlagships.has(
        repository.full_name.toLowerCase(),
      ),
  );

  return Promise.all(
    selectedRepositories.map(fetchRepositoryHealth),
  );
}
