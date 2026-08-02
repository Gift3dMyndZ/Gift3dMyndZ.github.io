import { createElement } from 'react';
import {
  Clock3,
  ExternalLink,
  GitCommitHorizontal,
  GitPullRequest,
  Package,
  ShieldCheck,
} from 'lucide-react';
import type { RepositoryHealth } from '../../types/health';
import { HealthBadge } from './HealthBadge';

interface RepositoryHealthPanelProps {
  health: RepositoryHealth;
}

function formatDate(value: string): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(value));
}

function getRepositoryName(fullName: string): string {
  return fullName.split('/').at(-1) ?? fullName;
}

function createExternalLink(
  url: string,
  label: string,
) {
  return createElement(
    'a',
    {
      className: 'health-action',
      href: url,
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    label,
    createElement(ExternalLink, {
      'aria-hidden': true,
      size: 14,
    }),
  );
}

export function RepositoryHealthPanel({
  health,
}: RepositoryHealthPanelProps) {
  const workflowLabel = `CI: ${health.workflowState
    .toLowerCase()
    .replaceAll('_', ' ')}`;

  return (
    <article className="repository-health-panel">
      <header className="health-panel-header">
        <div>
          <p className="health-panel-label">
            FLAGSHIP HEALTH
          </p>

          <h3>{getRepositoryName(health.repository)}</h3>
        </div>

        <div
          className="health-score"
          aria-label={`Health score ${health.score} out of 100`}
        >
          <strong>{health.score}</strong>
          <span>/ 100</span>
        </div>
      </header>

      <div className="health-badge-row">
        <HealthBadge state={health.state} />

        <HealthBadge
          state={health.workflowState}
          label={workflowLabel}
        />
      </div>

      <section className="health-detail">
        <div className="health-detail-heading">
          <GitCommitHorizontal
            aria-hidden="true"
            size={17}
          />
          <h4>Latest Commit</h4>
        </div>

        {health.commit ? (
          <>
            <p className="health-primary-value">
              {health.commit.message}
            </p>

            <div className="health-metadata">
              <code>{health.commit.sha}</code>
              <span>{health.commit.author}</span>
              <span>
                {formatDate(health.commit.committedAt)}
              </span>
            </div>

            {createExternalLink(
              health.commit.url,
              'Open commit',
            )}
          </>
        ) : (
          <p className="health-muted">
            Commit information is unavailable.
          </p>
        )}
      </section>

      <section className="health-detail">
        <div className="health-detail-heading">
          <GitPullRequest
            aria-hidden="true"
            size={17}
          />
          <h4>Latest Workflow</h4>
        </div>

        {health.workflow ? (
          <>
            <p className="health-primary-value">
              {health.workflow.name}
            </p>

            <div className="health-metadata">
              <span>{health.workflow.branch}</span>
              <span>{health.workflow.event}</span>
              <span>{health.workflow.conclusion ?? 'Pending'}</span>
              <span>
                {formatDate(health.workflow.updatedAt)}
              </span>
            </div>

            {createExternalLink(
              health.workflow.url,
              'Open workflow',
            )}
          </>
        ) : (
          <p className="health-muted">
            {health.workflowState === 'NO_WORKFLOW'
              ? 'No GitHub Actions workflow is configured.'
              : 'Workflow information is unavailable.'}
          </p>
        )}
      </section>

      <section className="health-detail">
        <div className="health-detail-heading">
          <Package aria-hidden="true" size={17} />
          <h4>Latest Release</h4>
        </div>

        {health.release ? (
          <>
            <p className="health-primary-value">
              {health.release.name ?? health.release.tag}
            </p>

            <div className="health-metadata">
              <code>{health.release.tag}</code>
              <span>
                {formatDate(health.release.publishedAt)}
              </span>

              {health.release.prerelease && (
                <span>Prerelease</span>
              )}
            </div>

            {createExternalLink(
              health.release.url,
              'Open release',
            )}
          </>
        ) : (
          <p className="health-muted">
            No published GitHub release.
          </p>
        )}
      </section>

      <details className="health-reasons">
        <summary>
          <ShieldCheck aria-hidden="true" size={16} />
          Health score details
        </summary>

        <ul>
          {health.reasons.map(reason => (
            <li key={reason}>{reason}</li>
          ))}
        </ul>
      </details>

      <footer className="health-panel-footer">
        <Clock3 aria-hidden="true" size={14} />
        Checked {formatDate(health.checkedAt)}
      </footer>
    </article>
  );
}
