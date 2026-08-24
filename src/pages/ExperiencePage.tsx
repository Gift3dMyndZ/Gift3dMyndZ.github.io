import {
  BarChart3,
  CloudCog,
  Code2,
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
    title: 'Engineering Leadership',
    description:
      'Led and mentored five cloud engineers supporting enterprise cloud, data, SaaS, and platform services across AWS, Azure, GCP, and Kubernetes.',
  },
  {
    icon: ShieldCheck,
    title: 'Incident Command',
    description:
      'Served as Incident Commander during a 47-minute SEV-1 Kubernetes recovery affecting approximately 18,000 users.',
  },
  {
    icon: BarChart3,
    title: 'Operational Leadership',
    description:
      'Used service telemetry, engineering dashboards, delivery indicators, and operational reviews to guide priorities and corrective action.',
  },
  {
    icon: GraduationCap,
    title: 'Mentoring and Enablement',
    description:
      'Provided technical mentoring, practical training, troubleshooting guidance, and development support across cloud and platform engineering workflows.',
  },
];

const engineeringHighlights = [
  {
    icon: Code2,
    title: 'Software and API Engineering',
    description:
      'Designed and supported Python and FastAPI applications, REST APIs, distributed services, asynchronous workflows, and modular application architectures.',
    technologies: [
      'Python',
      'Java',
      'TypeScript',
      'FastAPI',
      'REST APIs',
      'WebSockets',
    ],
  },
  {
    icon: CloudCog,
    title: 'Cloud and Platform Engineering',
    description:
      'Delivered and operated cloud-native services across AWS, Azure, GCP, Kubernetes, containers, autoscaling, load balancing, and identity platforms.',
    technologies: [
      'AWS',
      'Azure',
      'GCP',
      'Kubernetes',
      'EKS',
      'ECS',
      'Docker',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Reliability and Incident Response',
    description:
      'Coordinated service restoration, technical investigation, root-cause analysis, rollback controls, traffic shifting, canary testing, and remediation planning.',
    technologies: [
      'Incident command',
      'Root-cause analysis',
      'Canary testing',
      'Traffic shifting',
      'Recovery controls',
    ],
  },
  {
    icon: Gauge,
    title: 'Observability and Service Health',
    description:
      'Built and improved monitoring capabilities that strengthened service visibility, accelerated troubleshooting, and supported capacity planning.',
    technologies: [
      'Prometheus',
      'PromQL',
      'Grafana',
      'CloudWatch',
      'Datadog',
      'OpenTelemetry',
    ],
  },
  {
    icon: Wrench,
    title: 'Infrastructure and Release Operations',
    description:
      'Automated infrastructure provisioning, platform administration, patching, maintenance, and controlled changes through infrastructure as code and scripting.',
    technologies: [
      'Terraform',
      'CloudFormation',
      'AWS CLI',
      'Bash',
      'RHEL',
      'GitHub Actions',
    ],
  },
  {
    icon: Network,
    title: 'Enterprise Systems Integration',
    description:
      'Built and supported identity, API, monitoring, authentication, and operational integrations across cloud platforms and enterprise SaaS systems.',
    technologies: [
      'AWS identity',
      'Azure identity',
      'Active Directory',
      'ServiceNow',
      'REST APIs',
      'MFA',
    ],
  },
];

const careerExperience = [
  {
    organization:
      '2nd Watch, acquired by Ollion',
    role:
      'Senior Cloud Engineering Supervisor / Cloud Solutions Engineer',
    period:
      'March 2022 to April 2026',
    highlights: [
      'Advanced from Cloud Solutions Engineer to Senior Cloud Engineering Supervisor.',
      'Led five engineers supporting enterprise cloud, data, SaaS, and platform services.',
      'Partnered with software, product, architecture, and platform teams to improve service availability and scalability.',
      'Directed incident response and remediation across Kubernetes and cloud-native environments.',
      'Automated infrastructure and platform workflows through Terraform, CloudFormation, cloud command-line tools, scripting, and CI/CD practices.',
    ],
  },
  {
    organization:
      'Ingalls Shipbuilding, a Division of HII',
    role:
      'Help Desk Administrator',
    period:
      'October 2016 to March 2022',
    highlights: [
      'Administered enterprise Windows and Linux systems on VMware infrastructure supporting naval shipbuilding operations.',
      'Managed Active Directory, identity policies, CAC authentication, YubiKey MFA, patching, backups, and disaster recovery processes.',
      'Supported secure access, controlled change management, maintenance, troubleshooting, and performance tuning.',
      'Automated system-administration workflows through PowerShell and scheduled jobs.',
    ],
  },
];

export function ExperiencePage() {
  return (
    <section className="page professional-page">
      <header className="panel professional-hero">
        <p className="eyebrow">
          ENGINEERING LEADERSHIP AND DELIVERY
        </p>

        <h2>Professional Experience</h2>

        <p className="lead">
          Senior software engineering and cloud platform
          leadership grounded in hands-on application
          delivery, distributed systems, reliability,
          observability, incident command, and enterprise
          technology operations.
        </p>

        <div className="professional-summary-grid">
          <article>
            <strong>5</strong>
            <span>
              Cloud engineers led and mentored
            </span>
          </article>

          <article>
            <strong>47 min</strong>
            <span>
              Critical-service restoration window
            </span>
          </article>

          <article>
            <strong>18,000</strong>
            <span>
              Users protected through SEV-1 recovery
            </span>
          </article>

          <article>
            <strong>4</strong>
            <span>
              Cloud and platform ecosystems
            </span>
          </article>
        </div>
      </header>

      <section className="professional-section">
        <div className="section-heading">
          <p className="eyebrow">
            EXECUTIVE LEADERSHIP
          </p>

          <h3>
            Engineering Management and Operational Impact
          </h3>
        </div>

        <div className="professional-card-grid">
          {leadershipHighlights.map(item => {
            const Icon = item.icon;

            return (
              <article
                className="panel professional-card"
                key={item.title}
              >
                <Icon
                  aria-hidden="true"
                  size={23}
                />

                <h4>{item.title}</h4>

                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="professional-section">
        <div className="section-heading">
          <p className="eyebrow">
            TECHNICAL EXECUTION
          </p>

          <h3>
            Software, Platform, and Reliability Engineering
          </h3>
        </div>

        <div className="professional-card-grid two-column">
          {engineeringHighlights.map(item => {
            const Icon = item.icon;

            return (
              <article
                className="panel professional-card"
                key={item.title}
              >
                <Icon
                  aria-hidden="true"
                  size={23}
                />

                <h4>{item.title}</h4>

                <p>{item.description}</p>

                <div className="professional-tags">
                  {item.technologies.map(
                    technology => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ),
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="professional-section">
        <div className="section-heading">
          <p className="eyebrow">
            CAREER EXPERIENCE
          </p>

          <h3>
            Enterprise Engineering and Systems Operations
          </h3>
        </div>

        <div className="professional-card-grid two-column">
          {careerExperience.map(experience => (
            <article
              className="panel professional-card"
              key={experience.organization}
            >
              <p className="eyebrow">
                {experience.period}
              </p>

              <h4>{experience.organization}</h4>

              <strong>{experience.role}</strong>

              <ul>
                {experience.highlights.map(
                  highlight => (
                    <li key={highlight}>
                      {highlight}
                    </li>
                  ),
                )}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}