import type { ProjectCaseStudy } from '../types/caseStudy';

const githubOwner =
  import.meta.env.VITE_GITHUB_OWNER || 'Gift3dMyndZ';

export const caseStudies: ProjectCaseStudy[] = [
  {
    slug: 'labyrinth',
    route: '/projects/labyrinth',
    name: 'Labyrinth of Tartarus',
    subtitle:
      'Adaptive AI simulation engine and browser-based survival experience',
    repository: `${githubOwner}/labyrinth-ai-engine`,
    executiveSummary:
      'A full-stack adaptive simulation platform that combines browser-based rendering, real-time behavioral telemetry, WebSocket communication, persistent state, and an AI-driven difficulty system. The platform observes player behavior and adjusts the simulation while preserving responsive gameplay across desktop and mobile devices.',
    ownership:
      'Designed and built independently from architecture through implementation, deployment, mobile optimization, testing, and production hardening.',
    status: 'Production',
    technologies: [
      'Python',
      'FastAPI',
      'WebSockets',
      'SQLite',
      'JavaScript',
      'HTML5 Canvas',
      'Docker',
      'Render',
      'GitHub Actions',
    ],
    metrics: [
      {
        label: 'Delivery Model',
        value: 'Solo',
        detail: 'End-to-end architecture and implementation',
      },
      {
        label: 'Communication',
        value: 'Real time',
        detail: 'Bidirectional WebSocket integration',
      },
      {
        label: 'Client Support',
        value: 'Desktop and mobile',
        detail: 'Touch controls and mobile performance tuning',
      },
      {
        label: 'Workflow',
        value: 'Automated',
        detail: 'Container build and delivery through GitHub Actions',
      },
    ],
    architecture: [
      {
        name: 'Interactive Client',
        responsibility:
          'Renders the maze, processes movement and touch input, displays the neural-network HUD, and presents atmospheric visual and audio effects.',
        technologies: [
          'JavaScript',
          'HTML5 Canvas',
          'Web Audio',
          'Touch Events',
        ],
      },
      {
        name: 'Real-Time Gateway',
        responsibility:
          'Maintains bidirectional communication between the browser simulation and adaptive backend services.',
        technologies: ['FastAPI', 'WebSockets', 'JSON'],
      },
      {
        name: 'Adaptive Simulation',
        responsibility:
          'Processes behavioral telemetry and modifies simulation pressure, survival difficulty, and Oracle responses.',
        technologies: [
          'Python',
          'Behavioral telemetry',
          'Adaptive rules',
          'AI simulation',
        ],
      },
      {
        name: 'Persistence',
        responsibility:
          'Stores simulation state, behavior records, and operational data without requiring an external database service.',
        technologies: ['SQLite', 'Python'],
      },
      {
        name: 'Delivery Platform',
        responsibility:
          'Builds, packages, and deploys the application as a production web service.',
        technologies: [
          'Docker',
          'GitHub Actions',
          'Render',
        ],
      },
    ],
    sections: [
      {
        id: 'problem',
        title: 'Problem and Constraints',
        summary:
          'Build a browser-based survival simulation that adapts while the player is actively navigating the environment.',
        paragraphs: [
          'Traditional maze and survival games typically rely on static enemy behavior and predetermined difficulty curves. This project required an architecture capable of observing play patterns, transmitting behavioral events, and adapting the simulation without interrupting the rendering loop.',
          'The implementation also had to operate on mobile hardware, support touch input, tolerate variable network conditions, and remain deployable through a lightweight cloud platform.',
        ],
        bullets: [
          'Maintain responsive rendering while exchanging real-time telemetry.',
          'Support desktop keyboard and mobile touch interaction.',
          'Persist operational information without introducing unnecessary infrastructure.',
          'Handle WebSocket disconnects and server wake-up behavior.',
          'Retain a cohesive infernal visual and audio identity.',
        ],
      },
      {
        id: 'decisions',
        title: 'Major Engineering Decisions',
        paragraphs: [
          'FastAPI provided a small asynchronous service layer with native WebSocket support. This enabled the adaptive backend to receive behavioral signals and return simulation updates without relying on repeated HTTP polling.',
          'SQLite supplied durable local persistence while keeping deployment complexity low. Docker created a reproducible runtime, while Render provided the public deployment target.',
        ],
        bullets: [
          'Separated rendering concerns from adaptive backend logic.',
          'Used WebSockets for low-overhead bidirectional communication.',
          'Used SQLite to avoid an unnecessary managed-database dependency.',
          'Containerized the service for consistent local and cloud execution.',
          'Kept client-side effects independent from network availability where possible.',
        ],
      },
      {
        id: 'mobile',
        title: 'Mobile Engineering',
        paragraphs: [
          'The mobile release introduced touch controls, reduced rendering overhead, and adjusted the interaction model for smaller screens. Performance changes focused on preserving the atmosphere while limiting expensive visual work on constrained devices.',
          'An automated mobile-testing framework was added to validate controls, layout behavior, navigation, and common regression paths.',
        ],
        bullets: [
          'Touch-oriented movement controls.',
          'Mobile-specific rendering and performance adjustments.',
          'Responsive neural-network HUD behavior.',
          'Automated mobile regression coverage.',
        ],
      },
      {
        id: 'reliability',
        title: 'Reliability and Observability',
        paragraphs: [
          'The client was designed to distinguish between simulation rendering and backend connectivity, reducing the impact of temporary WebSocket interruptions. Connection handling and Oracle adaptation were hardened for deployment behavior.',
          'GitHub Actions automates the Docker build workflow, while the portfolio repository-health dashboard reports the latest workflow and commit state.',
        ],
        bullets: [
          'WebSocket connection-state handling.',
          'Graceful behavior during backend startup.',
          'Automated container build workflow.',
          'Production endpoint validation.',
          'Commit and workflow telemetry surfaced in the portfolio dashboard.',
        ],
      },
      {
        id: 'outcomes',
        title: 'Outcomes',
        paragraphs: [
          'The final result is a production-deployed simulation that demonstrates full-stack application design, real-time systems, adaptive behavior, browser rendering, persistent data, container delivery, and mobile optimization in a single cohesive platform.',
          'The project also serves as evidence of independent ownership across product design, software architecture, implementation, troubleshooting, testing, deployment, and operational improvement.',
        ],
      },
    ],
    links: [
      {
        label: 'Launch Live Simulation',
        url: 'https://labyrinth-ai-engine-1.onrender.com/',
        external: true,
        primary: true,
      },
      {
        label: 'View Repository',
        url: `https://github.com/${githubOwner}/labyrinth-ai-engine`,
        external: true,
      },
    ],
  },
  {
    slug: 'aeronautics',
    route: '/projects/aeronautics',
    name: 'Aeronautics Reliability',
    subtitle:
      'Python-based reliability analysis and operational risk assessment',
    repository: `${githubOwner}/Aeronautics-reliability`,
    executiveSummary:
      'An engineering analysis project connecting Python-based data preparation with reliability investigation, reproducible assessment, and operational interpretation.',
    ownership:
      'Completed independently, including analytical framing, implementation, validation, documentation, and repository delivery.',
    status: 'Engineering Analysis',
    technologies: [
      'Python',
      'Data Analysis',
      'Reliability Engineering',
      'Statistical Analysis',
      'Data Validation',
      'GitHub',
    ],
    metrics: [
      {
        label: 'Delivery Model',
        value: 'Solo',
        detail: 'Independent analytical implementation',
      },
      {
        label: 'Primary Language',
        value: 'Python',
        detail: 'Analysis and data-processing workflow',
      },
      {
        label: 'Engineering Focus',
        value: 'Reliability',
        detail: 'Failure-risk and operational interpretation',
      },
      {
        label: 'Method',
        value: 'Reproducible',
        detail: 'Code-driven analytical workflow',
      },
    ],
    architecture: [
      {
        name: 'Data Inputs',
        responsibility:
          'Provides structured information for reliability-oriented investigation and comparison.',
        technologies: [
          'Structured data',
          'Repository datasets',
          'Source validation',
        ],
      },
      {
        name: 'Preparation Layer',
        responsibility:
          'Cleans, transforms, and organizes data for repeatable analysis.',
        technologies: [
          'Python',
          'Data cleaning',
          'Data transformation',
        ],
      },
      {
        name: 'Reliability Analysis',
        responsibility:
          'Applies engineering reasoning to patterns relevant to operational reliability.',
        technologies: [
          'Reliability engineering',
          'Statistical reasoning',
          'Python analysis',
        ],
      },
      {
        name: 'Validation Layer',
        responsibility:
          'Checks assumptions, data quality, and outputs before interpretation.',
        technologies: [
          'Data validation',
          'Consistency checks',
          'Reproducible execution',
        ],
      },
      {
        name: 'Engineering Output',
        responsibility:
          'Presents findings for technical review and operational interpretation.',
        technologies: [
          'Documentation',
          'Repository artifacts',
          'Engineering communication',
        ],
      },
    ],
    sections: [
      {
        id: 'problem',
        title: 'Problem and Constraints',
        summary:
          'Investigate aeronautics reliability while keeping assumptions and evidence traceable.',
        paragraphs: [
          'Reliability analysis depends on the quality, consistency, and context of available data. The project treats analytical output as supporting evidence for engineering review rather than as an isolated prediction.',
          'The implementation emphasizes structured preparation, reproducibility, validation, and careful interpretation.',
        ],
        bullets: [
          'Preserve traceability between inputs and analytical outputs.',
          'Identify data-quality limitations before interpretation.',
          'Keep the workflow repeatable through code.',
          'Avoid unsupported operational conclusions.',
        ],
      },
      {
        id: 'workflow',
        title: 'Analytical Workflow',
        paragraphs: [
          'Python provides the execution environment for preparing information, applying analytical logic, and producing repeatable outputs.',
          'Input handling, transformation, analysis, validation, and interpretation are separated so each stage can be reviewed independently.',
        ],
        bullets: [
          'Input inspection and data-quality review.',
          'Cleaning and normalization.',
          'Reliability-oriented analysis.',
          'Output validation.',
          'Technical interpretation and documentation.',
        ],
      },
      {
        id: 'validation',
        title: 'Validation and Assumptions',
        paragraphs: [
          'Analytical results are only as dependable as their supporting data and assumptions. Validation includes consistency checks and explicit acknowledgement of unsupported conclusions.',
          'This approach makes the analysis easier to inspect, reproduce, and extend.',
        ],
        bullets: [
          'Check incomplete or inconsistent values.',
          'Keep transformations reproducible.',
          'Separate observations from interpretation.',
          'Document analytical limitations.',
        ],
      },
      {
        id: 'operations',
        title: 'Operational Interpretation',
        paragraphs: [
          'The project demonstrates how analysis can support reliability discussions without replacing engineering judgment.',
          'Repository-based delivery preserves the implementation and supporting artifacts for technical review and reruns.',
        ],
      },
      {
        id: 'outcomes',
        title: 'Outcomes',
        paragraphs: [
          'The project demonstrates Python-based analytical engineering, reliability framing, data preparation, validation, and technical communication.',
          'The work connects data-science methods to operational reliability questions and engineering constraints.',
        ],
      },
    ],
    links: [
      {
        label: 'View Repository',
        url: `https://github.com/${githubOwner}/Aeronautics-reliability`,
        external: true,
        primary: true,
      },
    ],
  },
  {
    slug: 'data-science',
    route: '/projects/data-science',
    name: 'Data Science Projects',
    subtitle:
      'Machine learning experimentation and distributed data architecture',
    repository: `${githubOwner}/Data-Science-Projects`,
    executiveSummary:
      'A portfolio of data-science work covering data preparation, TensorFlow and Keras experimentation, LSTM modeling, model evaluation, distributed processing, cloud data services, and governance-oriented architecture.',
    ownership:
      'Completed independently, including analytical design, implementation, experimentation, evaluation, documentation, and repository delivery.',
    status: 'Research Portfolio',
    technologies: [
      'Python',
      'TensorFlow',
      'Keras',
      'LSTM',
      'Apache Spark',
      'AWS Glue',
      'AWS Data Lake',
      'Hadoop',
      'HDFS',
      'MapReduce',
      'Kinesis',
    ],
    metrics: [
      {
        label: 'Delivery Model',
        value: 'Solo',
        detail: 'Independent experimentation and implementation',
      },
      {
        label: 'Modeling Focus',
        value: 'Sequential',
        detail: 'LSTM and neural-network experimentation',
      },
      {
        label: 'Data Processing',
        value: 'Distributed',
        detail: 'Spark, Glue, and Hadoop architecture',
      },
      {
        label: 'Architecture',
        value: 'Cloud data',
        detail: 'Data-lake and streaming concepts',
      },
    ],
    architecture: [
      {
        name: 'Data Sources',
        responsibility:
          'Provides structured inputs for analysis, transformation, and modeling experiments.',
        technologies: ['Datasets', 'Kinesis', 'Data inputs'],
      },
      {
        name: 'Preparation and Validation',
        responsibility:
          'Cleans, transforms, validates, and organizes data before experimentation.',
        technologies: ['Python', 'Feature preparation', 'Validation'],
      },
      {
        name: 'Modeling and Experimentation',
        responsibility:
          'Implements and evaluates machine-learning approaches for sequential data.',
        technologies: ['TensorFlow', 'Keras', 'LSTM'],
      },
      {
        name: 'Distributed Processing',
        responsibility:
          'Represents scalable transformation patterns across cloud and Hadoop ecosystems.',
        technologies: ['Spark', 'AWS Glue', 'Hadoop', 'HDFS', 'MapReduce'],
      },
      {
        name: 'Evaluation and Governance',
        responsibility:
          'Connects model evaluation, data quality, traceability, and governance controls.',
        technologies: ['Model evaluation', 'Data governance', 'Architecture controls'],
      },
    ],
    sections: [
      {
        id: 'scope',
        title: 'Problem and Analytical Scope',
        summary:
          'Apply data-science methods while preserving reproducibility, validation, and architectural context.',
        paragraphs: [
          'Machine-learning experimentation requires more than model construction. Data preparation, assumptions, evaluation criteria, and the surrounding architecture determine whether results can be reviewed and extended.',
          'The project collection connects modeling work with distributed processing, cloud data services, and governance concepts.',
        ],
      },
      {
        id: 'preparation',
        title: 'Data Preparation',
        paragraphs: [
          'Cleaning, transformation, validation, and feature organization are treated as explicit stages rather than hidden preprocessing.',
          'This separation improves traceability between source data, model inputs, and analytical observations.',
        ],
        bullets: [
          'Inspect source structure and quality.',
          'Apply repeatable transformations.',
          'Validate model-ready inputs.',
          'Document assumptions and limitations.',
        ],
      },
      {
        id: 'modeling',
        title: 'Modeling and Experimentation',
        paragraphs: [
          'TensorFlow and Keras provide the modeling environment, including LSTM experimentation for sequential patterns.',
          'Experiments remain reviewable through explicit configuration, inputs, and evaluation steps.',
        ],
      },
      {
        id: 'distributed-data',
        title: 'Distributed Data Architecture',
        paragraphs: [
          'Spark, AWS Glue, and Hadoop concepts support distributed transformation and data-lake workflows.',
          'HDFS and MapReduce represent distributed foundations, while Kinesis represents streaming ingestion patterns.',
        ],
      },
      {
        id: 'evaluation',
        title: 'Evaluation and Governance',
        paragraphs: [
          'Evaluation checks whether results align with the experiment design and available evidence.',
          'Governance considerations connect data ownership, quality, traceability, transformations, models, and interpretation.',
        ],
      },
      {
        id: 'outcomes',
        title: 'Outcomes',
        paragraphs: [
          'The portfolio demonstrates independent work across machine learning, sequential modeling, distributed processing, cloud data architecture, and governance concepts.',
          'The work connects experimental code with broader data-engineering and platform considerations.',
        ],
      },
    ],
    links: [
      {
        label: 'View Repository',
        url: `https://github.com/${githubOwner}/Data-Science-Projects`,
        external: true,
        primary: true,
      },
    ],
  },
];

export function getCaseStudy(
  slug: string,
): ProjectCaseStudy | undefined {
  return caseStudies.find(caseStudy => caseStudy.slug === slug);
}
