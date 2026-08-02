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
];

export function getCaseStudy(
  slug: string,
): ProjectCaseStudy | undefined {
  return caseStudies.find(caseStudy => caseStudy.slug === slug);
}
