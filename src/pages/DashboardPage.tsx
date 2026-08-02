import { createElement, useMemo, useState } from 'react';
import { AlertTriangle, Github, RefreshCw } from 'lucide-react';
import { DashboardMetrics } from '../components/dashboard/DashboardMetrics';
import { RepositoryHealthGrid } from '../components/health/RepositoryHealthGrid';
import { RepositoryFilters } from '../components/github/RepositoryFilters';
import { RepositoryGrid } from '../components/github/RepositoryGrid';
import { GITHUB_OWNER } from '../config/projects';
import { useGitHubProfile } from '../hooks/useGitHubProfile';
import { useRepositories } from '../hooks/useRepositories';
import { useRepositoryHealth } from '../hooks/useRepositoryHealth';
import { GitHubApiError } from '../services/github';

function describeError(error: unknown): string {
  if (error instanceof GitHubApiError) {
    if (
      error.status === 403 &&
      error.rateLimitRemaining === 0
    ) {
      if (error.rateLimitReset) {
        const resetTime = new Date(
          error.rateLimitReset * 1000,
        ).toLocaleTimeString();

        return `GitHub's anonymous API limit has been reached. Access resets at ${resetTime}.`;
      }

      return "GitHub's anonymous API limit has been reached.";
    }

    return `GitHub returned status ${error.status}.`;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'An unexpected GitHub integration error occurred.';
}

export function DashboardPage() {
  const [search, setSearch] = useState('');
  const [selectedLanguage, setSelectedLanguage] =
    useState('All');

  const profileQuery = useGitHubProfile();
  const repositoryQuery = useRepositories();

  const repositories = useMemo(
    () => repositoryQuery.data?.repositories ?? [],
    [repositoryQuery.data?.repositories],
  );

  const healthQuery = useRepositoryHealth(repositories);

  const languages = useMemo(
    () =>
      Array.from(
        new Set(
          repositories
            .map(repository => repository.language)
            .filter(
              (language): language is string =>
                Boolean(language),
            ),
        ),
      ).sort((a, b) => a.localeCompare(b)),
    [repositories],
  );

  const filteredRepositories = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return repositories.filter(repository => {
      const matchesLanguage =
        selectedLanguage === 'All' ||
        repository.language === selectedLanguage;

      const searchableContent = [
        repository.name,
        repository.full_name,
        repository.description ?? '',
        repository.language ?? '',
        ...repository.topics,
      ]
        .join(' ')
        .toLowerCase();

      const matchesSearch =
        normalizedSearch.length === 0 ||
        searchableContent.includes(normalizedSearch);

      return matchesLanguage && matchesSearch;
    });
  }, [repositories, search, selectedLanguage]);

  const loading =
    profileQuery.isPending || repositoryQuery.isPending;

  const error =
    profileQuery.error ?? repositoryQuery.error;

  const refreshDashboard = () => {
    void profileQuery.refetch();
    void repositoryQuery.refetch();
  };

  if (loading) {
    return (
      <section className="panel page">
        <p className="eyebrow">CONNECTING TO GITHUB</p>
        <h2>Engineering Dashboard</h2>

        <div className="dashboard-loading" aria-live="polite">
          <RefreshCw
            aria-hidden="true"
            className="spin"
            size={28}
          />
          <p>
            Retrieving repositories and engineering metrics...
          </p>
        </div>
      </section>
    );
  }

  if (
    error ||
    !profileQuery.data ||
    !repositoryQuery.data
  ) {
    return (
      <section className="panel page">
        <p className="eyebrow">INTEGRATION DEGRADED</p>
        <h2>Engineering Dashboard</h2>

        <div className="dashboard-state dashboard-error">
          <AlertTriangle aria-hidden="true" size={32} />
          <h3>GitHub data is temporarily unavailable</h3>
          <p>{describeError(error)}</p>

          <button
            className="button primary"
            type="button"
            onClick={refreshDashboard}
          >
            <RefreshCw aria-hidden="true" size={16} />
            Retry Connection
          </button>
        </div>
      </section>
    );
  }

  const { metrics } = repositoryQuery.data;
  const { dataUpdatedAt } = repositoryQuery;

  return (
    <section className="panel page dashboard-page">
      <div className="dashboard-heading">
        <div>
          <p className="eyebrow">
            LIVE ENGINEERING TELEMETRY
          </p>
          <h2>Engineering Dashboard</h2>
          <p className="lead">
            Live public repository data for {GITHUB_OWNER},
            cached locally to reduce GitHub API consumption.
          </p>
        </div>

        <div className="dashboard-connection">
          <span className="status-dot" />
          <span>GitHub API connected</span>

          <button
            type="button"
            onClick={refreshDashboard}
            aria-label="Refresh GitHub dashboard"
          >
            <RefreshCw aria-hidden="true" size={16} />
          </button>
        </div>
      </div>

      <DashboardMetrics
        profile={profileQuery.data}
        metrics={metrics}
      />

      <RepositoryHealthGrid
        healthRecords={healthQuery.data ?? []}
        loading={healthQuery.isPending}
        error={healthQuery.error}
        onRetry={() => {
          void healthQuery.refetch();
        }}
      />

      <section className="language-summary">
        <h3>Repository Languages</h3>

        <div className="language-summary-grid">
          {Object.entries(metrics.languages)
            .sort(([, countA], [, countB]) => countB - countA)
            .map(([language, count]) => {
              const percentage =
                metrics.repositories === 0
                  ? 0
                  : Math.round(
                      (count / metrics.repositories) * 100,
                    );

              return (
                <div className="language-summary-item" key={language}>
                  <div>
                    <span>{language}</span>
                    <strong>
                      {count} · {percentage}%
                    </strong>
                  </div>

                  <div className="language-bar">
                    <span
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </section>

      <RepositoryFilters
        search={search}
        onSearchChange={setSearch}
        selectedLanguage={selectedLanguage}
        onLanguageChange={setSelectedLanguage}
        languages={languages}
        resultCount={filteredRepositories.length}
      />

      <RepositoryGrid repositories={filteredRepositories} />

      <footer className="dashboard-footer">
        <span>
          Updated{" "}
          {new Date(dataUpdatedAt).toLocaleTimeString()}
        </span>

        {createElement(
          "a",
          {
            href: `https://github.com/${GITHUB_OWNER}`,
            target: "_blank",
            rel: "noopener noreferrer",
          },
          <Github aria-hidden="true" size={16} />,
          "Open GitHub Profile",
        )}
      </footer>
    </section>
  );
}
