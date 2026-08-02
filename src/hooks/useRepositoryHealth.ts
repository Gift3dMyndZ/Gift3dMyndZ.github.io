import { useQuery } from '@tanstack/react-query';
import { featuredProjects } from '../config/projects';
import { fetchFlagshipHealth } from '../services/repositoryHealth';
import type { GitHubRepository } from '../types/github';

const flagshipRepositories = featuredProjects.map(
  project => project.repository,
);

export function useRepositoryHealth(
  repositories: GitHubRepository[],
) {
  const repositoryIds = repositories
    .map(repository => repository.id)
    .sort((a, b) => a - b);

  return useQuery({
    queryKey: [
      'github',
      'repository-health',
      ...repositoryIds,
    ],
    queryFn: () =>
      fetchFlagshipHealth(
        repositories,
        flagshipRepositories,
      ),
    enabled: repositories.length > 0,
    staleTime: 15 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: 1,
  });
}
