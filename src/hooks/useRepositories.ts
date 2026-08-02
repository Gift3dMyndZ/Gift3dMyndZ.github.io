import { useQuery } from '@tanstack/react-query';
import { GITHUB_OWNER } from '../config/projects';
import { fetchRepositories } from '../services/github';
import type {
  GitHubMetrics,
  GitHubRepository,
} from '../types/github';

const ACTIVE_WINDOW_DAYS = 120;

export function calculateGitHubMetrics(
  repositories: GitHubRepository[],
): GitHubMetrics {
  const activeThreshold =
    Date.now() - ACTIVE_WINDOW_DAYS * 24 * 60 * 60 * 1000;

  return repositories.reduce<GitHubMetrics>(
    (metrics, repository) => {
      metrics.repositories += 1;
      metrics.stars += repository.stargazers_count;
      metrics.forks += repository.forks_count;
      metrics.openIssues += repository.open_issues_count;

      if (
        !repository.archived &&
        new Date(repository.pushed_at).getTime() >= activeThreshold
      ) {
        metrics.activeProjects += 1;
      }

      const language = repository.language ?? 'Other';
      metrics.languages[language] =
        (metrics.languages[language] ?? 0) + 1;

      return metrics;
    },
    {
      repositories: 0,
      stars: 0,
      forks: 0,
      openIssues: 0,
      activeProjects: 0,
      languages: {},
    },
  );
}

export function useRepositories() {
  return useQuery({
    queryKey: ['github', 'repositories', GITHUB_OWNER],
    queryFn: () => fetchRepositories(GITHUB_OWNER),
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    retry: 1,
    select: repositories => ({
      repositories,
      metrics: calculateGitHubMetrics(repositories),
    }),
  });
}
