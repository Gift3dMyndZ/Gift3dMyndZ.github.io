const architectureLayers = [
  {
    number: '01',
    title: 'Presentation Layer',
    description:
      'React and TypeScript provide the application interface, responsive pages, animated command-center visuals, and accessible navigation.',
    technologies: [
      'React',
      'TypeScript',
      'React Router',
      'CSS',
    ],
  },
  {
    number: '02',
    title: 'Query and Cache Layer',
    description:
      'TanStack Query controls request state, caching, stale periods, retry behavior, and manual refresh workflows.',
    technologies: [
      'TanStack Query',
      'Client cache',
      'Retry policy',
      'Loading states',
    ],
  },
  {
    number: '03',
    title: 'GitHub Integration',
    description:
      'Public GitHub REST endpoints supply profile information, repository metadata, commits, workflows, and releases.',
    technologies: [
      'GitHub REST API',
      'Repository metadata',
      'Actions telemetry',
      'Release data',
    ],
  },
  {
    number: '04',
    title: 'Operational Intelligence',
    description:
      'Service modules normalize workflow states and calculate transparent repository-health scores.',
    technologies: [
      'Health scoring',
      'State normalization',
      'Failure isolation',
      'Telemetry panels',
    ],
  },
  {
    number: '05',
    title: 'Content Architecture',
    description:
      'Typed configuration separates flagship case-study content from reusable page rendering.',
    technologies: [
      'Typed content',
      'Reusable components',
      'Parameterized routes',
      'Case-study model',
    ],
  },
  {
    number: '06',
    title: 'Delivery Platform',
    description:
      'Vite creates the static production bundle, GitHub Actions verifies quality, and Render serves the application.',
    technologies: [
      'Vite',
      'GitHub Actions',
      'Render',
      'Static deployment',
    ],
  },
];

export function ArchitecturePage() {
  return (
    <section className="page professional-page">
      <header className="panel professional-hero">
        <p className="eyebrow">SYSTEM DESIGN</p>
        <h2>Portfolio Architecture</h2>
        <p className="lead">
          A client-side engineering command center combining
          live GitHub telemetry, repository-health analysis,
          typed project content, and accessible visual systems.
        </p>
      </header>

      <div className="architecture-documentation-grid">
        {architectureLayers.map(layer => (
          <article className="panel architecture-documentation-card" key={layer.number}>
            <span>{layer.number}</span>
            <h3>{layer.title}</h3>
            <p>{layer.description}</p>

            <div className="professional-tags">
              {layer.technologies.map(technology => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <section className="panel architecture-flow">
        <p className="eyebrow">REQUEST FLOW</p>
        <h3>GitHub Telemetry Pipeline</h3>

        <ol>
          <li>React loads the application route.</li>
          <li>TanStack Query evaluates cached data and stale time.</li>
          <li>Service modules request public GitHub endpoints.</li>
          <li>Responses are normalized into application types.</li>
          <li>Health utilities calculate scores and operational states.</li>
          <li>Dashboard components render resilient telemetry states.</li>
        </ol>
      </section>

      <section className="panel architecture-boundary">
        <p className="eyebrow">SECURITY BOUNDARY</p>
        <h3>Public Client and Future Server API</h3>
        <p>
          The current browser application uses public GitHub
          endpoints and stores no credentials. Future
          authenticated aggregation and deployment monitoring
          should execute behind a server-side API so secrets
          never enter browser JavaScript.
        </p>
      </section>
    </section>
  );
}
