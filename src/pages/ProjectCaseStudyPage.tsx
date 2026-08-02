import { createElement } from 'react';
import {
  ArrowLeft,
  ExternalLink,
  Layers3,
  ShieldCheck,
} from 'lucide-react';
import { Link, useParams } from 'react-router';
import { getCaseStudy } from '../config/caseStudies';

function externalLink(
  url: string,
  label: string,
  primary = false,
) {
  return createElement(
    'a',
    {
      className: primary ? 'button primary' : 'button',
      href: url,
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    label,
    createElement(ExternalLink, {
      'aria-hidden': true,
      size: 16,
    }),
  );
}

export function ProjectCaseStudyPage() {
  const { projectSlug } = useParams();
  const caseStudy = getCaseStudy(projectSlug ?? '');

  if (!caseStudy) {
    return (
      <section className="panel page case-study-not-found">
        <p className="eyebrow">CASE STUDY NOT FOUND</p>
        <h2>Unknown Project</h2>
        <p className="lead">
          No engineering case study is configured for this
          project route.
        </p>

        <Link className="button primary" to="/projects">
          <ArrowLeft aria-hidden="true" size={16} />
          Return to Projects
        </Link>
      </section>
    );
  }

  return (
    <article className="case-study-page">
      <header className="panel case-study-hero">
        <div className="case-study-hero-copy">
          <Link className="case-study-back" to="/projects">
            <ArrowLeft aria-hidden="true" size={16} />
            All Projects
          </Link>

          <p className="eyebrow">
            FLAGSHIP ENGINEERING CASE STUDY
          </p>

          <div className="case-study-title-row">
            <div>
              <h2>{caseStudy.name}</h2>
              <p className="lead">{caseStudy.subtitle}</p>
            </div>

            <span className="case-study-status">
              {caseStudy.status}
            </span>
          </div>

          <p className="case-study-summary">
            {caseStudy.executiveSummary}
          </p>

          <div className="case-study-ownership">
            <ShieldCheck aria-hidden="true" size={20} />
            <p>{caseStudy.ownership}</p>
          </div>

          <div
            className="case-study-technologies"
            aria-label="Project technologies"
          >
            {caseStudy.technologies.map(technology => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

          <div className="case-study-links">
            {caseStudy.links.map(link =>
              link.external ? (
                <span key={link.url}>
                  {externalLink(
                    link.url,
                    link.label,
                    link.primary,
                  )}
                </span>
              ) : (
                <Link
                  className={
                    link.primary
                      ? 'button primary'
                      : 'button'
                  }
                  key={link.url}
                  to={link.url}
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </div>
      </header>

      <section
        className="case-study-metrics"
        aria-label="Project delivery metrics"
      >
        {caseStudy.metrics.map(metric => (
          <article className="case-study-metric" key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            {metric.detail && <p>{metric.detail}</p>}
          </article>
        ))}
      </section>

      <section className="panel case-study-architecture">
        <div className="case-study-section-heading">
          <Layers3 aria-hidden="true" size={24} />
          <div>
            <p className="eyebrow">SYSTEM DESIGN</p>
            <h3>Architecture</h3>
          </div>
        </div>

        <div className="architecture-layer-grid">
          {caseStudy.architecture.map((layer, index) => (
            <article
              className="architecture-layer"
              key={layer.name}
            >
              <span className="architecture-index">
                {String(index + 1).padStart(2, '0')}
              </span>

              <h4>{layer.name}</h4>
              <p>{layer.responsibility}</p>

              <div className="architecture-technologies">
                {layer.technologies.map(technology => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="case-study-sections">
        {caseStudy.sections.map(section => (
          <section
            className="panel case-study-section"
            id={section.id}
            key={section.id}
          >
            <p className="eyebrow">
              ENGINEERING NARRATIVE
            </p>
            <h3>{section.title}</h3>

            {section.summary && (
              <p className="case-study-section-summary">
                {section.summary}
              </p>
            )}

            {section.paragraphs.map(paragraph => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {section.bullets && (
              <ul>
                {section.bullets.map(bullet => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <footer className="panel case-study-footer">
        <div>
          <p className="eyebrow">EXPLORE THE BUILD</p>
          <h3>{caseStudy.name}</h3>
          <p>
            Review the source code, production deployment,
            and supporting engineering telemetry.
          </p>
        </div>

        <div className="case-study-links">
          {caseStudy.links.map(link =>
            link.external ? (
              <span key={link.url}>
                {externalLink(
                  link.url,
                  link.label,
                  link.primary,
                )}
              </span>
            ) : (
              <Link
                className={
                  link.primary
                    ? 'button primary'
                    : 'button'
                }
                key={link.url}
                to={link.url}
              >
                {link.label}
              </Link>
            ),
          )}
        </div>
      </footer>
    </article>
  );
}
