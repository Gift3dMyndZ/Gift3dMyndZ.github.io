const skillGroups = [
  {
    title: 'Cloud and Infrastructure',
    summary:
      'Distributed infrastructure, cloud operations, and container platforms.',
    skills: [
      'AWS',
      'Azure',
      'Kubernetes',
      'Docker',
      'RHEL',
      'EKS',
      'ECS',
      'Load balancing',
      'Autoscaling',
      'AWS CLI',
    ],
  },
  {
    title: 'Platform Engineering',
    summary:
      'Operational automation, deployment, integration, and reliability.',
    skills: [
      'Platform architecture',
      'Patch management',
      'Maintenance windows',
      'Shell scripting',
      'Cron',
      'Identity integration',
      'REST APIs',
      'Incident command',
      'Root-cause analysis',
    ],
  },
  {
    title: 'Software Development',
    summary:
      'Backend, frontend, real-time communication, and persistent systems.',
    skills: [
      'Python',
      'Java',
      'FastAPI',
      'WebSockets',
      'React',
      'TypeScript',
      'SQLite',
      'GitHub Actions',
    ],
  },
  {
    title: 'Observability and Operations',
    summary:
      'Monitoring, telemetry, detection, alerting, and operational response.',
    skills: [
      'Grafana',
      'OpenTelemetry',
      'ServiceNow',
      'Synthetic monitoring',
      'Alert management',
      'Log analysis',
      'Operational dashboards',
      'Noise reduction',
    ],
  },
  {
    title: 'Data Engineering',
    summary:
      'Distributed processing, data-lake design, streaming, and governance.',
    skills: [
      'Apache Spark',
      'AWS Glue',
      'AWS data lakes',
      'Kinesis',
      'Hadoop',
      'HDFS',
      'MapReduce',
      'Data governance',
    ],
  },
  {
    title: 'Machine Learning',
    summary:
      'Applied modeling, sequence analysis, and experimental evaluation.',
    skills: [
      'TensorFlow',
      'Keras',
      'LSTM',
      'Data preparation',
      'Model evaluation',
      'Experiment design',
      'Behavioral telemetry',
    ],
  },
  {
    title: 'Leadership and Management',
    summary:
      'People leadership, technical direction, enablement, and operations.',
    skills: [
      'People management',
      'Mentoring',
      'Technical training',
      'Incident leadership',
      'Performance analytics',
      'Cross-team communication',
      'Operational prioritization',
    ],
  },
];

export function SkillsPage() {
  return (
    <section className="page professional-page">
      <header className="panel professional-hero">
        <p className="eyebrow">CAPABILITY MATRIX</p>
        <h2>Engineering Skills</h2>
        <p className="lead">
          A multidisciplinary skill set spanning cloud
          platforms, software engineering, observability,
          data systems, machine learning, and technical
          leadership.
        </p>
      </header>

      <div className="skills-domain-grid">
        {skillGroups.map(group => (
          <article className="panel skill-domain" key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.summary}</p>

            <div className="professional-tags">
              {group.skills.map(skill => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
