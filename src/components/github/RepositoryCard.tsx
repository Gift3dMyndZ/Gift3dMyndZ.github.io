import { createElement } from 'react';
import {
  BookOpen,
  CircleDot,
  ExternalLink,
  GitFork,
  GitPullRequest,
  HardDrive,
  Scale,
  Star,
} from 'lucide-react';
import { Link } from 'react-router';
import { featuredProjects } from '../../config/projects';
import type { GitHubRepository } from '../../types/github';

interface RepositoryCardProps {
  repository: GitHubRepository;
}

function formatDate(value: string): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(value));
}

function formatSize(sizeInKilobytes: number): string {
  if (sizeInKilobytes >= 1024) {
    return `${(sizeInKilobytes / 1024).toFixed(1)} MB`;
  }

  return `${sizeInKilobytes.toLocaleString()} KB`;
}

export function RepositoryCard({
  repository,
}: RepositoryCardProps) {
  const featuredProject = featuredProjects.find(
    project =>
      project.repository.toLowerCase() ===
      repository.full_name.toLowerCase(),
  );

  return (
    <article className="repository-card">
      <div className="repository-card-header">
        <div>
          <div className="repository-labels">
            {featuredProject && (
              <span className="featured-label">FLAGSHIP</span>
            )}

            {repository.archived && (
              <span className="archived-label">ARCHIVED</span>
            )}

            {repository.fork && (
              <span className="fork-label">FORK</span>
            )}
          </div>

          <h3>{featuredProject?.name ?? repository.name}</h3>

          <p className="repository-full-name">
            {repository.full_name}
          </p>
        </div>

        <span className="repository-visibility">
          {repository.visibility}
        </span>
      </div>

      <p className="repository-description">
        {repository.description ??
          'No repository description has been provided.'}
      </p>

      <div className="repository-tags">
        {repository.language && (
          <span className="repository-language">
            {repository.language}
          </span>
        )}

        {repository.topics.slice(0, 5).map(topic => (
          <span key={topic}>{topic}</span>
        ))}
      </div>

      <dl className="repository-details">
        <div>
          <dt>
            <Star aria-hidden="true" size={15} />
            Stars
          </dt>
          <dd>{repository.stargazers_count}</dd>
        </div>

        <div>
          <dt>
            <GitFork aria-hidden="true" size={15} />
            Forks
          </dt>
          <dd>{repository.forks_count}</dd>
        </div>

        <div>
          <dt>
            <CircleDot aria-hidden="true" size={15} />
            Issues
          </dt>
          <dd>{repository.open_issues_count}</dd>
        </div>

        <div>
          <dt>
            <HardDrive aria-hidden="true" size={15} />
            Size
          </dt>
          <dd>{formatSize(repository.size)}</dd>
        </div>

        <div>
          <dt>
            <GitPullRequest aria-hidden="true" size={15} />
            Branch
          </dt>
          <dd>{repository.default_branch}</dd>
        </div>

        <div>
          <dt>
            <Scale aria-hidden="true" size={15} />
            License
          </dt>
          <dd>
            {repository.license?.spdx_id ??
              repository.license?.name ??
              'Not specified'}
          </dd>
        </div>
      </dl>

      <p className="repository-updated">
        Updated {formatDate(repository.updated_at)}
      </p>

      <div className="repository-actions">
        {featuredProject && (
          <Link
            className="button primary"
            to={featuredProject.route}
          >
            <BookOpen aria-hidden="true" size={16} />
            Case Study
          </Link>
        )}

        {createElement(
          "a",
          {
            className: "button",
            href: repository.html_url,
            target: "_blank",
            rel: "noopener noreferrer",
          },
          <ExternalLink aria-hidden="true" size={16} />,
          "Repository",
        )}

        {featuredProject?.liveUrl
          ? createElement(
              "a",
              {
                className: "button",
                href: featuredProject.liveUrl,
                target: "_blank",
                rel: "noopener noreferrer",
              },
              <ExternalLink
                aria-hidden="true"
                size={16}
              />,
              "Live",
            )
          : repository.homepage
            ? createElement(
                "a",
                {
                  className: "button",
                  href: repository.homepage,
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
                <ExternalLink
                  aria-hidden="true"
                  size={16}
                />,
                "Website",
              )
            : null}
      </div>
    </article>
  );
}
