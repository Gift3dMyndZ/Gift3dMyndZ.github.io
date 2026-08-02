import type {
  GitHubProfile,
  GitHubRateLimit,
  GitHubRepository,
} from '../types/github';

const GITHUB_API = 'https://api.github.com';

const headers: HeadersInit = {
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
};

export class GitHubApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly rateLimitRemaining: number | null,
    public readonly rateLimitReset: number | null,
  ) {
    super(message);
    this.name = 'GitHubApiError';
  }
}

async function githubRequest<T>(path: string): Promise<T> {
  const response = await fetch(`${GITHUB_API}${path}`, { headers });

  if (!response.ok) {
    const remaining = response.headers.get('x-ratelimit-remaining');
    const reset = response.headers.get('x-ratelimit-reset');

    throw new GitHubApiError(
      `GitHub API request failed with status ${response.status}.`,
      response.status,
      remaining ? Number(remaining) : null,
      reset ? Number(reset) : null,
    );
  }

  return response.json() as Promise<T>;
}

export function fetchGitHubProfile(
  owner: string,
): Promise<GitHubProfile> {
  return githubRequest<GitHubProfile>(`/users/${owner}`);
}

export function fetchRepositories(
  owner: string,
): Promise<GitHubRepository[]> {
  return githubRequest<GitHubRepository[]>(
    `/users/${owner}/repos?per_page=100&sort=updated`,
  );
}

export async function fetchGitHubRateLimit(): Promise<GitHubRateLimit> {
  const response = await githubRequest<{
    resources: { core: GitHubRateLimit };
  }>('/rate_limit');

  return response.resources.core;
}
