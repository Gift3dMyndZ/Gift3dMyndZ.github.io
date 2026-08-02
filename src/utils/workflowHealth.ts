import type { WorkflowHealthState } from '../types/health';

export function normalizeWorkflowState(
  status: string | null | undefined,
  conclusion: string | null | undefined,
  workflowAvailable = true,
): WorkflowHealthState {
  if (!workflowAvailable) {
    return 'UNAVAILABLE';
  }

  if (!status) {
    return 'NO_WORKFLOW';
  }

  if (
    status === 'queued' ||
    status === 'in_progress' ||
    status === 'waiting' ||
    status === 'requested' ||
    status === 'pending'
  ) {
    return 'IN_PROGRESS';
  }

  if (status === 'completed' && conclusion === 'success') {
    return 'HEALTHY';
  }

  if (
    status === 'completed' &&
    conclusion &&
    conclusion !== 'success' &&
    conclusion !== 'neutral' &&
    conclusion !== 'skipped'
  ) {
    return 'FAILING';
  }

  return 'UNKNOWN';
}
