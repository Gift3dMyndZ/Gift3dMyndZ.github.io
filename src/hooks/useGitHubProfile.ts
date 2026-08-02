import { useQuery } from '@tanstack/react-query';
import { GITHUB_OWNER } from '../config/projects';
import { fetchGitHubProfile } from '../services/github';

export function useGitHubProfile() {
  return useQuery({
    queryKey: ['github', 'profile', GITHUB_OWNER],
    queryFn: () => fetchGitHubProfile(GITHUB_OWNER),
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    retry: 1,
  });
}
