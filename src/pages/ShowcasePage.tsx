import {
  ExternalLink,
  ImageIcon,
} from 'lucide-react';
import { Link } from 'react-router';
import { showcaseBillboards } from '../config/showcase';

export function ShowcasePage() {
  return (
    <section className="page professional-page">
      <header className="panel professional-hero">
        <p className="eyebrow">ENGINEERING SHOWCASE</p>
        <h2>Project Billboards</h2>
        <p className="lead">
          Visual engineering narratives connecting system architecture,
          validated outcomes, operational workflows, platform capabilities,
          and product development across the portfolio.
        </p>

        <div className="professional-summary-grid">
          <article>
            <strong>4</strong>
            <span>Engineering billboards</span>
          </article>
          <article>
            <strong>AI</strong>
            <span>Orchestration and adaptive systems</span>
          </article>
          <article>
            <strong>Platform</strong>
            <span>Cloud, reliability, and delivery</span>
          </article>
          <article>
            <strong>Visual</strong>
            <span>Architecture and project storytelling</span>
          </article>
        </div>
      </header>

      <section
        aria-label="Engineering project billboards"
        className="showcase-grid"
      >
        {showcaseBillboards.map(billboard => {
          const cardClassName = [
            'panel',
            'showcase-card',
            `showcase-card-${billboard.orientation}`,
          ].join(' ');

          return (
            <article className={cardClassName} key={billboard.id}>
              <div className="showcase-card-heading">
                <div>
                  <p className="eyebrow">{billboard.category}</p>
                  <h3>{billboard.title}</h3>
                  <p>{billboard.description}</p>
                </div>
                <ImageIcon aria-hidden="true" size={26} />
              </div>

              <a
                aria-label={`Open ${billboard.title} billboard at full resolution`}
                className="showcase-image-link"
                href={billboard.imageUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt={billboard.imageAlt}
                  className="showcase-image"
                  decoding="async"
                  loading="lazy"
                  src={billboard.imageUrl}
                />
              </a>

              <div className="actions">
                <a
                  className="button"
                  href={billboard.imageUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ExternalLink aria-hidden="true" size={16} />
                  Full Resolution
                </a>

                {billboard.projectRoute && (
                  <Link className="button primary" to={billboard.projectRoute}>
                    View Case Study
                  </Link>
                )}

                {billboard.repositoryUrl && (
                  <a
                    className="button"
                    href={billboard.repositoryUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Repository
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </section>
    </section>
  );
}
