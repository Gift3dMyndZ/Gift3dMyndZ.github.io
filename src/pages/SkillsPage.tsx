const skillGroups = [
  {
    title: 'Software Engineering',
    summary:
      'Application development, API design, distributed services, and production-oriented software architecture.',
    skills: [
      'Python',
      'C++23',
      'Java',
      'TypeScript',
      'SQL',
      'Bash',
      'FastAPI',
      'React',
      'REST APIs',
      'OpenAPI',
      'Pydantic',
      'WebSockets',
      'SQLite',
      'SQL Server',
      'Enterprise Java',
      'EJB',
    ],
  },
  {
    title: 'Architecture and Distributed Systems',
    summary:
      'Modular, testable, traceable, and observable systems designed around explicit service boundaries and resilient execution.',
    skills: [
      'Distributed systems',
      'Modular architecture',
      'Dependency injection',
      'Service layers',
      'Provider abstractions',
      'Event-driven workflows',
      'Asynchronous processing',
      'Request correlation',
      'Distributed tracing',
      'Trace-driven development',
      'Structured error contracts',
      'Lifecycle validation',
      'API orchestration',
      'Failure-mode design',
    ],
  },
  {
    title: 'Cloud and Platform Engineering',
    summary:
      'Enterprise cloud platforms, container orchestration, infrastructure automation, and scalable service operations.',
    skills: [
      'AWS',
      'Azure',
      'GCP',
      'Kubernetes',
      'EKS',
      'ECS',
      'Docker',
      'Linux',
      'RHEL',
      'VMware',
      'Load balancing',
      'Autoscaling',
      'AWS CLI',
      'Azure CLI',
      'Cloud architecture',
    ],
  },
  {
    title: 'Infrastructure and Deployment Engineering',
    summary:
      'Reproducible infrastructure, controlled deployments, automated quality gates, and reliable operational change execution.',
    skills: [
      'Terraform',
      'AWS CloudFormation',
      'GitHub Actions',
      'CI/CD',
      'Deployment automation',
      'Release engineering',
      'Environment promotion',
      'CMake',
      'Ninja',
      'Shell scripting',
      'PowerShell',
      'Cron',
      'Patch management',
      'Maintenance windows',
      'Canary deployments',
      'Blue-green deployments',
      'Traffic shifting',
      'Rollback controls',
      'Change management',
    ],
  },
  {
    title: 'Enterprise Application Modernization',
    summary:
      'Legacy application assessment, EJB modernization, service decomposition, and controlled migration to cloud-ready architectures.',
    skills: [
      'Enterprise Java',
      'EJB legacy systems',
      'Legacy application modernization',
      'Enterprise application migration',
      'Application portfolio assessment',
      'Monolith decomposition',
      'Service extraction',
      'REST API enablement',
      'Dependency analysis',
      'Data migration planning',
      'Incremental modernization',
      'Strangler pattern',
      'Container migration',
      'Cloud migration',
      'Compatibility validation',
      'Migration risk management',
    ],
  },
  {
    title: 'Reliability and Incident Management',
    summary:
      'Service restoration, failure analysis, operational risk reduction, and resilient production engineering.',
    skills: [
      'Incident command',
      'SEV-1 response',
      'Root-cause analysis',
      'Service restoration',
      'Reliability engineering',
      'Failure analysis',
      'Capacity planning',
      'Disaster recovery',
      'Runbook development',
      'Production readiness',
      'Operational reviews',
      'Recovery automation',
      'Problem management',
    ],
  },
  {
    title: 'Observability and Service Health',
    summary:
      'Monitoring, telemetry, distributed tracing, service intelligence, alert optimization, and production performance analysis.',
    skills: [
      'Prometheus',
      'PromQL',
      'Grafana',
      'OpenTelemetry',
      'Distributed tracing',
      'Trace correlation',
      'CloudWatch',
      'Datadog',
      'ServiceNow',
      'Synthetic monitoring',
      'Operational dashboards',
      'Log analysis',
      'Alert management',
      'Noise reduction',
      'Service-level indicators',
      'Performance investigation',
    ],
  },
  {
    title: 'AI and Local Inference Engineering',
    summary:
      'AI orchestration, model-provider integration, local inference architecture, and testable intelligent systems.',
    skills: [
      'AI orchestration',
      'llama.cpp',
      'GGUF architecture',
      'Provider interfaces',
      'Local inference',
      'OpenAI-compatible APIs',
      'Prompt validation',
      'Inference timeouts',
      'Model readiness',
      'Behavioral telemetry',
      'Adaptive AI systems',
      'TensorFlow',
      'Keras',
      'LSTM',
    ],
  },
  {
    title: 'Data Engineering and Analytics',
    summary:
      'Distributed processing, streaming, data-lake architecture, analytical workflows, and governance controls.',
    skills: [
      'Apache Spark',
      'AWS Glue',
      'AWS data lakes',
      'Kinesis',
      'Hadoop',
      'HDFS',
      'MapReduce',
      'Data preparation',
      'Data validation',
      'Data transformation',
      'Statistical analysis',
      'Model evaluation',
      'Data governance',
      'Analytical architecture',
    ],
  },
  {
    title: 'Identity and Enterprise Integration',
    summary:
      'Secure identity, authentication, API, monitoring, and operational integrations across cloud and enterprise platforms.',
    skills: [
      'Active Directory',
      'AWS identity',
      'Azure identity',
      'Microsoft Entra ID',
      'IAM policies',
      'CAC authentication',
      'YubiKey MFA',
      'Cognito',
      'ServiceNow REST APIs',
      'Enterprise integrations',
      'SaaS integrations',
      'Authentication workflows',
      'Secure access',
    ],
  },
  {
    title: 'Testing and Engineering Quality',
    summary:
      'Test-driven engineering and automated validation across application logic, APIs, integrations, migrations, and deployment workflows.',
    skills: [
      'Test-driven development',
      'TDD',
      'GoogleTest',
      'CTest',
      'Pytest',
      'Unit testing',
      'Integration testing',
      'REST API testing',
      'Contract testing',
      'Regression testing',
      'Migration testing',
      'Compatibility testing',
      'Failure-path testing',
      'Test automation',
      'Mobile regression testing',
      'Smoke testing',
      'Deployment validation',
      'Quality gates',
      'Code review',
      'Dependency auditing',
    ],
  },
  {
    title: 'Engineering Leadership',
    summary:
      'Technical leadership, modernization strategy, incident coordination, engineer development, and cross-functional delivery.',
    skills: [
      'People leadership',
      'Engineering mentoring',
      'Technical training',
      'Incident leadership',
      'Modernization strategy',
      'Migration planning',
      'Performance analytics',
      'Operational prioritization',
      'Cross-functional delivery',
      'Stakeholder communication',
      'Technical decision-making',
      'Team enablement',
      'Corrective-action planning',
      'Engineering documentation',
    ],
  },
];
export function SkillsPage() {
  return (
    <section className="page professional-page">
      <header className="panel professional-hero">
        <p className="eyebrow">
          EXECUTIVE CAPABILITY MATRIX
        </p>

        <h2>Engineering Skills</h2>

        <p className="lead">
          A multidisciplinary engineering portfolio spanning
          software architecture, cloud platforms, distributed
          systems, reliability, observability, infrastructure
          automation, enterprise modernization, data platforms,
          AI orchestration, and technical leadership.
        </p>

        <div className="professional-summary-grid">
          <article>
            <strong>4</strong>
            <span>
              Cloud and platform ecosystems
            </span>
          </article>

          <article>
            <strong>Full Stack</strong>
            <span>
              Applications, APIs, platforms, and data
            </span>
          </article>

          <article>
            <strong>Reliability</strong>
            <span>
              Incident response and production operations
            </span>
          </article>

          <article>
            <strong>Modernization</strong>
            <span>
              Legacy migration, TDD, tracing, and deployment
            </span>
          </article>
        </div>
      </header>

      <section className="professional-section">
        <div className="section-heading">
          <p className="eyebrow">
            TECHNICAL AND LEADERSHIP DEPTH
          </p>

          <h3>
            Enterprise Engineering Capabilities
          </h3>

          <p>
            Capabilities demonstrated through enterprise
            cloud operations, software delivery, application
            modernization, production incident response,
            observability platforms, independent engineering
            projects, and technical leadership.
          </p>
        </div>

        <div className="skills-domain-grid">
          {skillGroups.map(group => (
            <article
              className="panel skill-domain"
              key={group.title}
            >
              <h3>{group.title}</h3>

              <p>{group.summary}</p>

              <div className="professional-tags">
                {group.skills.map(skill => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}