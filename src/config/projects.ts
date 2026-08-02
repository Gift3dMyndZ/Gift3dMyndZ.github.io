export type FeaturedProject = {
  name: string;
  repository: string;
  repositoryUrl: string;
  liveUrl?: string;
  route: string;
  category: string;
};

export const GITHUB_OWNER = 'Gift3dMyndZ';

export const featuredProjects: FeaturedProject[] = [
  {
    name: 'Labyrinth of Tartarus',
    repository: 'Gift3dMyndZ/labyrinth-ai-engine',
    repositoryUrl: 'https://github.com/Gift3dMyndZ/labyrinth-ai-engine',
    liveUrl: 'https://labyrinth-ai-engine-1.onrender.com/',
    route: '/projects/labyrinth',
    category: 'Adaptive AI Platform',
  },
  {
    name: 'Aeronautics Reliability',
    repository: 'Gift3dMyndZ/Aeronautics-reliability',
    repositoryUrl: 'https://github.com/Gift3dMyndZ/Aeronautics-reliability',
    route: '/projects/aeronautics',
    category: 'Site Reliability Engineering',
  },
  {
    name: 'Data Science Projects',
    repository: 'Gift3dMyndZ/Data-Science-Projects',
    repositoryUrl: 'https://github.com/Gift3dMyndZ/Data-Science-Projects',
    route: '/projects/data-science',
    category: 'Data Science and Machine Learning',
  },
  {
    name: 'BGA Smart Contract Engineer',
    repository: 'Gift3dMyndZ/BGA-hometask-smart-contract-engineer-',
    repositoryUrl: 'https://github.com/Gift3dMyndZ/BGA-hometask-smart-contract-engineer-',
    route: '/projects/smart-contract-engineering',
    category: 'Blockchain Engineering',
  },
];
