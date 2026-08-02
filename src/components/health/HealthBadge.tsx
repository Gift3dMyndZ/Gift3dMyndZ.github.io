import {
  Activity,
  AlertTriangle,
  CircleHelp,
  CircleX,
  LoaderCircle,
  ShieldCheck,
} from 'lucide-react';
import type {
  RepositoryHealthState,
  WorkflowHealthState,
} from '../../types/health';

type HealthBadgeState =
  | RepositoryHealthState
  | WorkflowHealthState;

interface HealthBadgeProps {
  state: HealthBadgeState;
  label?: string;
}

function getBadgeClass(state: HealthBadgeState): string {
  switch (state) {
    case 'HEALTHY':
      return 'health-badge healthy';

    case 'OPERATIONAL':
      return 'health-badge operational';

    case 'IN_PROGRESS':
      return 'health-badge in-progress';

    case 'DEGRADED':
    case 'NO_WORKFLOW':
      return 'health-badge degraded';

    case 'FAILING':
    case 'NEEDS_ATTENTION':
      return 'health-badge failing';

    case 'UNAVAILABLE':
    case 'UNKNOWN':
    default:
      return 'health-badge unknown';
  }
}

function HealthBadgeIcon({
  state,
}: {
  state: HealthBadgeState;
}) {
  switch (state) {
    case 'HEALTHY':
      return <ShieldCheck aria-hidden="true" size={15} />;

    case 'OPERATIONAL':
      return <Activity aria-hidden="true" size={15} />;

    case 'IN_PROGRESS':
      return (
        <LoaderCircle
          aria-hidden="true"
          className="spin"
          size={15}
        />
      );

    case 'DEGRADED':
    case 'NO_WORKFLOW':
      return (
        <AlertTriangle aria-hidden="true" size={15} />
      );

    case 'FAILING':
    case 'NEEDS_ATTENTION':
      return <CircleX aria-hidden="true" size={15} />;

    case 'UNAVAILABLE':
    case 'UNKNOWN':
    default:
      return <CircleHelp aria-hidden="true" size={15} />;
  }
}

function formatState(state: HealthBadgeState): string {
  return state
    .toLowerCase()
    .split('_')
    .map(
      word =>
        word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join(' ');
}

export function HealthBadge({
  state,
  label,
}: HealthBadgeProps) {
  return (
    <span className={getBadgeClass(state)}>
      <HealthBadgeIcon state={state} />
      {label ?? formatState(state)}
    </span>
  );
}
