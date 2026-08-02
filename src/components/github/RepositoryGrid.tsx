import type { GitHubRepository } from '../../types/github';
import { RepositoryCard } from './RepositoryCard';

interface RepositoryGridProps {
  repositories: GitHubRepository[];
}

export function RepositoryGrid({
  repositories,
}: RepositoryGridProps) {
  if (repositories.length === 0) {
    return (
      <div className="dashboard-state">
        <h3>No matching repositories</h3>
        <p>
          Change the search terms or select another language filter.
        </p>
      </div>
    );
  }

  return (
    <section
      className="repository-grid"
      aria-label="Public GitHub repositories"
    >
      {repositories.map(repository => (
        <RepositoryCard
          key={repository.id}
          repository={repository}
        />
      ))}
    </section>
  );
}
