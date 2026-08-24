export type ShowcaseBillboard = {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  orientation: 'portrait' | 'landscape';
  projectRoute?: string;
  repositoryUrl?: string;
};

export const showcaseBillboards: ShowcaseBillboard[] = [
  {
    id: 'athena-command-center',
    title: 'Athena Command Engine',
    category: 'AI Platform Engineering',
    description:
      'A visual project brief covering Athena architecture, validated test results, connected engineering projects, measurable operational impact, and the roadmap toward local inference.',
    imageUrl:
      '/showcase/athena-command-center-billboard.png',
    imageAlt:
      'Athena Command Engine and Platform Engineering Command Center project billboard',
    orientation: 'portrait',
    projectRoute: '/projects/athena',
    repositoryUrl:
      'https://github.com/Gift3dMyndZ/athena-command-engine',
  },
  {
    id: 'aeronautics-reliability',
    title: 'Aeronautics Reliability Platform',
    category: 'Reliability and Incident Intelligence',
    description:
      'A visual release brief for the synthetic aviation operations platform, including incident lifecycles, Prometheus observability, low-cardinality telemetry, latency measurements, and automated validation.',
    imageUrl:
      '/showcase/aeronautics-reliability-billboard.png',
    imageAlt:
      'Aeronautics Reliability Platform release and observability billboard',
    orientation: 'portrait',
    projectRoute: '/projects/aeronautics',
    repositoryUrl:
      'https://github.com/Gift3dMyndZ/Aeronautics-reliability',
  },
  {
    id: 'platform-engineering',
    title: 'Platform Engineering Capabilities',
    category: 'Cloud, Data, Reliability, and Delivery',
    description:
      'An executive capability overview spanning cloud platforms, data engineering, continuous delivery, observability, reliability, incident response, technologies, and engineering values.',
    imageUrl:
      '/showcase/platform-engineering-billboard.png',
    imageAlt:
      'Platform engineering capabilities, technologies, delivery lifecycle, and engineering principles billboard',
    orientation: 'landscape',
  },
  {
    id: 'labyrinth-of-tartarus',
    title: 'Labyrinth of Tartarus',
    category: 'Adaptive AI Simulation',
    description:
      'A product-centered visual presentation of adaptive gameplay, Oracle navigation, dynamic difficulty, progression systems, interface design, and the simulation technology stack.',
    imageUrl:
      '/showcase/labyrinth-of-tartarus-billboard.png',
    imageAlt:
      'Labyrinth of Tartarus adaptive AI simulation features and game systems billboard',
    orientation: 'landscape',
    projectRoute: '/projects/labyrinth',
    repositoryUrl:
      'https://github.com/Gift3dMyndZ/labyrinth-ai-engine',
  },
];