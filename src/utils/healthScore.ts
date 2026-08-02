import type {
  RepositoryHealthState,
  WorkflowHealthState,
} from '../types/health';
import type { GitHubRepository } from '../types/github';

interface HealthScoreInput {
  repository: GitHubRepository;
  latestCommitAt: string | null;
  workflowState: WorkflowHealthState;
  hasRelease: boolean;
}

export interface HealthScoreResult {
  score: number;
  state: RepositoryHealthState;
  reasons: string[];
}

const DAY_MS = 24 * 60 * 60 * 1000;

function ageInDays(value: string): number {
  return Math.max(
    0,
    Math.floor(
      (Date.now() - new Date(value).getTime()) / DAY_MS,
    ),
  );
}

function stateFromScore(
  score: number,
): RepositoryHealthState {
  if (score >= 85) return 'HEALTHY';
  if (score >= 65) return 'OPERATIONAL';
  if (score >= 40) return 'DEGRADED';
  return 'NEEDS_ATTENTION';
}

export function calculateHealthScore({
  repository,
  latestCommitAt,
  workflowState,
  hasRelease,
}: HealthScoreInput): HealthScoreResult {
  let score = 0;
  const reasons: string[] = [];

  if (latestCommitAt) {
    const commitAge = ageInDays(latestCommitAt);

    if (commitAge <= 30) {
      score += 25;
      reasons.push('Commit activity within 30 days');
    } else if (commitAge <= 120) {
      score += 15;
      reasons.push('Commit activity within 120 days');
    } else {
      reasons.push('No commit activity within 120 days');
    }
  } else {
    reasons.push('Commit information unavailable');
  }

  if (workflowState === 'HEALTHY') {
    score += 30;
    reasons.push('Latest workflow succeeded');
  } else if (workflowState === 'IN_PROGRESS') {
    score += 20;
    reasons.push('Workflow currently running');
  } else if (workflowState === 'NO_WORKFLOW') {
    score += 10;
    reasons.push('No workflow configured');
  } else if (workflowState === 'FAILING') {
    reasons.push('Latest workflow failed');
  } else {
    reasons.push('Workflow information unavailable');
  }

  if (hasRelease) {
    score += 15;
    reasons.push('Published release available');
  } else {
    reasons.push('No published release');
  }

  if (!repository.archived) {
    score += 10;
    reasons.push('Repository is active');
  }

  if (repository.license) {
    score += 10;
    reasons.push('License specified');
  } else {
    reasons.push('No license specified');
  }

  if (repository.description?.trim()) {
    score += 5;
    reasons.push('Description provided');
  }

  if (repository.topics.length > 0) {
    score += 5;
    reasons.push('Repository topics provided');
  }

  return {
    score,
    state: stateFromScore(score),
    reasons,
  };
}
