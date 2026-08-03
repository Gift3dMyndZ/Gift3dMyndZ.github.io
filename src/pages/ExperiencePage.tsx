import {
  BarChart3,
  CloudCog,
  Gauge,
  GraduationCap,
  Network,
  ShieldCheck,
  Users,
  Wrench,
} from 'lucide-react';

const leadershipHighlights = [
  {
    icon: Users,
    title: 'People Leadership',
    description:
      'Managed 36 Cloud Solution Engineers with direct responsibility for coaching, performance support, technical development, and operational alignment.',
  },
  {
    icon: BarChart3,
    title: 'Analytics-Driven Management',
    description:
      'Used SaaS dashboards and operational indicators to monitor team activity, identify support needs, and guide prioritization.',
  },
  {
    icon: GraduationCap,
    title: 'Mentoring and Enablement',
    description:
      'Delivered technical mentoring, training, and practical guidance across cloud operations, troubleshooting, and engineering workflows.',
  },
];

const engineeringHighlights = [
  {
    icon: ShieldCheck,
    title: 'Incident Command and Reliability',
    description:
      'Led incident response, coordinated technical investigation, supported root-cause analysis, and translated operational findings into corrective action.',
    technologies: [
      'Incident command',
      'Root-cause analysis',
      'Service restoration',
      'Operational reviews',
    ],
  },
  {
    icon: CloudCog,
    title: 'Cloud and Platform Operations',
    description:
      'Worked across AWS and Azure environments using Kubernetes, Docker, EKS, ECS, load balancing, autoscaling, identity integrations, and command-line automation.',
    technologies: [
      'AWS',
      'Azure',
      'Kubernetes',
      'Docker',
      'EKS',
      'ECS',
    ],
  },
  {
    icon: Gauge,
    title: 'Observability and Monitoring',
    description:
      'Implemented and improved monitoring through Grafana, OpenTelemetry, synthetic URL checks, ServiceNow alerts, and alert-noise reduction.',
    technologies: [
      'Grafana',
      'OpenTelemetry',
      'ServiceNow',
      'Synthetic monitoring',
    ],
  },
  {
    icon: Wrench,
    title: 'Release and Patch Operations',
    description:
      'Supported patching across development, non-production, and production environments using shell scripting, cron scheduling, maintenance windows, and cloud tooling.',
    technologies: [
      'RHEL',
      'Shell scripting',
      'Cron',
      'Maintenance windows',
    ],
  },
  {
    icon: Network,
    title: 'Systems Integration',
    description:
      'Built and supported identity, API, monitoring, and operational integrations across cloud platforms and SaaS systems.',
    technologies: [
      'REST APIs',
      'AWS identity',
      'Azure identity',
      'ServiceNow',
    ],
  },
];

export function ExperiencePage() {
  return (
    <section className="page professional-page">
      <header className="panel professional-hero">
        <p className="eyebrow">LEADERSHIP AND DELIVERY</p>
        <h2>Professional Experience</h2>
        <p className="lead">
          Cloud engineering leadership grounded in hands-on
          platform operations, reliability, observability,
          incident management, and technical enablement.
        </p>

        <div className="professional-summary-grid">
          <article>
            <strong>36</strong>
            <span>Cloud Solution Engineers managed</span>
          </article>

          <article>
            <strong>Cloud</strong>
            <span>AWS and Azure platform operations</span>
          </article>

          <article>
            <strong>Reliability</strong>
            <span>Incident command and root-cause analysis</span>
          </article>
        </div>
      </header>

      <section className="professional-section">
        <div className="section-heading">
          <p className="eyebrow">LEADERSHIP SCOPE</p>
          <h3>Engineering Management</h3>
        </div>

        <div className="professional-card-grid">
          {leadershipHighlights.map(item => {
            const Icon = item.icon;

            return (
              <article className="panel professional-card" key={item.title}>
                <Icon aria-hidden="true" size={23} />
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="professional-section">
        <div className="section-heading">
          <p className="eyebrow">TECHNICAL EXECUTION</p>
          <h3>Platform and Reliability Engineering</h3>
        </div>

        <div className="professional-card-grid two-column">
          {engineeringHighlights.map(item => {
            const Icon = item.icon;

            return (
              <article className="panel professional-card" key={item.title}>
                <Icon aria-hidden="true" size={23} />
                <h4>{item.title}</h4>
                <p>{item.description}</p>

                <div className="professional-tags">
                  {item.technologies.map(technology => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </section>
  );
}
