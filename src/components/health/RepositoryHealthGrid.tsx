import type { RepositoryHealth } from '../../types/health';
import { RepositoryHealthPanel } from './RepositoryHealthPanel';

interface RepositoryHealthGridProps {
  healthRecords: RepositoryHealth[];
  loading: boolean;
  error: Error | null;
  onRetry: () => void;
}

export function RepositoryHealthGrid({
  healthRecords,
  loading,
  error,
  onRetry,
}: RepositoryHealthGridProps) {
  if (loading) {
    return (
      <section className="repository-health-section">
        <div className="health-section-heading">
          <div>
            <p className="eyebrow">
              OPERATIONAL INTELLIGENCE
            </p>
            <h3>Flagship Repository Health</h3>
          </div>
        </div>

        <div
          className="dashboard-loading"
          aria-live="polite"
        >
          <p>
            Retrieving commit, workflow, and release
            telemetry...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="repository-health-section">
        <div className="health-section-heading">
          <div>
            <p className="eyebrow">
              OPERATIONAL INTELLIGENCE
            </p>
            <h3>Flagship Repository Health</h3>
          </div>
        </div>

        <div className="dashboard-state dashboard-error">
          <h3>Health telemetry is unavailable</h3>
          <p>{error.message}</p>

          <button
            className="button primary"
            type="button"
            onClick={onRetry}
          >
            Retry Health Check
          </button>
        </div>
      </section>
    );
  }

  if (healthRecords.length === 0) {
    return (
      <section className="repository-health-section">
        <div className="health-section-heading">
          <div>
            <p className="eyebrow">
              OPERATIONAL INTELLIGENCE
            </p>
            <h3>Flagship Repository Health</h3>
          </div>
        </div>

        <div className="dashboard-state">
          <h3>No flagship telemetry available</h3>
          <p>
            The configured flagship repositories were not
            found in the current public repository list.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="repository-health-section">
      <div className="health-section-heading">
        <div>
          <p className="eyebrow">
            OPERATIONAL INTELLIGENCE
          </p>
          <h3>Flagship Repository Health</h3>
          <p>
            Latest commit, GitHub Actions, release, and
            maintainability telemetry.
          </p>
        </div>
      </div>

      <div className="repository-health-grid">
        {healthRecords.map(health => (
          <RepositoryHealthPanel
            health={health}
            key={health.repository}
          />
        ))}
      </div>
    </section>
  );
}
