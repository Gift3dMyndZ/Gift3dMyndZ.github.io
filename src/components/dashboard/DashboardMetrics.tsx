import {
  CircleDot,
  Code2,
  GitFork,
  Star,
  Users,
  Workflow,
} from 'lucide-react';
import type {
  GitHubMetrics,
  GitHubProfile,
} from '../../types/github';

interface DashboardMetricsProps {
  profile: GitHubProfile;
  metrics: GitHubMetrics;
}

export function DashboardMetrics({
  profile,
  metrics,
}: DashboardMetricsProps) {
  const cards = [
    {
      label: 'Public Repositories',
      value: metrics.repositories,
      icon: Code2,
    },
    {
      label: 'Active Projects',
      value: metrics.activeProjects,
      icon: Workflow,
    },
    {
      label: 'Stars Earned',
      value: metrics.stars,
      icon: Star,
    },
    {
      label: 'Forks',
      value: metrics.forks,
      icon: GitFork,
    },
    {
      label: 'Open Issues',
      value: metrics.openIssues,
      icon: CircleDot,
    },
    {
      label: 'Followers',
      value: profile.followers,
      icon: Users,
    },
  ];

  return (
    <section
      className="dashboard-metrics"
      aria-label="GitHub engineering metrics"
    >
      {cards.map(({ label, value, icon: Icon }) => (
        <article className="metric-card" key={label}>
          <Icon aria-hidden="true" size={21} />
          <strong>{value.toLocaleString()}</strong>
          <span>{label}</span>
        </article>
      ))}
    </section>
  );
}
