export type WorkflowHealthState =
  | 'HEALTHY'
  | 'IN_PROGRESS'
  | 'FAILING'
  | 'NO_WORKFLOW'
  | 'UNAVAILABLE'
  | 'UNKNOWN';

export type DeploymentState =
  | 'CHECKING'
  | 'LIVE'
  | 'WAKING'
  | 'DEGRADED'
  | 'UNAVAILABLE';

export type RepositoryHealthState =
  | 'HEALTHY'
  | 'OPERATIONAL'
  | 'DEGRADED'
  | 'NEEDS_ATTENTION'
  | 'UNKNOWN';

export interface LatestCommit {
  sha: string;
  message: string;
  committedAt: string;
  author: string;
  url: string;
}

export interface LatestWorkflow {
  name: string;
  status: string;
  conclusion: string | null;
  branch: string;
  event: string;
  updatedAt: string;
  url: string;
}

export interface LatestRelease {
  tag: string;
  name: string | null;
  publishedAt: string;
  url: string;
  prerelease: boolean;
}

export interface DeploymentHealth {
  provider: string;
  url: string;
  state: DeploymentState;
  statusCode: number | null;
  responseTimeMs: number | null;
  checkedAt: string;
}

export interface RepositoryHealth {
  repository: string;
  commit: LatestCommit | null;
  workflow: LatestWorkflow | null;
  workflowState: WorkflowHealthState;
  release: LatestRelease | null;
  deployment: DeploymentHealth | null;
  score: number;
  state: RepositoryHealthState;
  checkedAt: string;
}
