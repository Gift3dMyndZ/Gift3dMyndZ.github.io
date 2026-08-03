# Joshua Wolfe Platform Engineering Command Center

A live platform engineering portfolio and professional command center built with React 19, TypeScript, Vite, TanStack Query, and React Router.

## Live Application

- Command Center: https://gift3dmyndz.github.io/
- Resume: https://gift3dmyndz.github.io/joshua-wolfe-resume.pdf
- LinkedIn: https://www.linkedin.com/in/mrjoshuawolfe
- GitHub: https://github.com/Gift3dMyndZ

## Overview

The Platform Engineering Command Center combines professional experience, engineering capabilities, live GitHub telemetry, repository health intelligence, system architecture, and flagship project case studies in one production application.

The application was independently designed, developed, tested, versioned, and deployed from architecture through public release.

## Features

- Live GitHub engineering telemetry
- Repository health scoring and workflow visibility
- Cloud and system architecture documentation
- Flagship engineering case studies
- Professional experience and categorized technical skills
- Browser-readable resume and downloadable PDF
- Executive animated command-center environment
- Responsive neural activity visualization
- Mobile-responsive layouts
- Reduced-motion accessibility
- Automated quality gates and GitHub Pages deployment

## Technology Stack

- React 19
- TypeScript
- Vite
- React Router
- TanStack Query
- GitHub REST API
- GitHub Actions
- GitHub Pages

## Start Locally

```bash
npm install
npm run dev
```

The application runs locally at http://localhost:5173/.

## Validate

```bash
npm run typecheck
npm run lint
npm run build
npm audit --omit=dev
```

## Production Deployment

The main branch deploys automatically to GitHub Pages through `.github/workflows/deploy-pages.yml`.

Production URL: https://gift3dmyndz.github.io/

## Application Routes

- `/` - Home
- `/dashboard` - Live engineering dashboard
- `/projects` - Flagship engineering projects
- `/architecture` - System architecture
- `/experience` - Professional experience
- `/skills` - Engineering capabilities
- `/resume` - Browser-readable resume
- `/contact` - Professional contact options
- `/joshua-wolfe-resume.pdf` - Downloadable resume

## Canonical Integrations

- Command Center: https://github.com/Gift3dMyndZ/Gift3dMyndZ.github.io
- Labyrinth repository: https://github.com/Gift3dMyndZ/labyrinth-ai-engine
- Labyrinth live application: https://labyrinth-ai-engine-1.onrender.com/
- Aeronautics Reliability: https://github.com/Gift3dMyndZ/Aeronautics-reliability
- Data Science Projects: https://github.com/Gift3dMyndZ/Data-Science-Projects
- Smart Contract Engineering: https://github.com/Gift3dMyndZ/BGA-hometask-smart-contract-engineer-

## Environment Variables

```bash
VITE_GITHUB_OWNER=Gift3dMyndZ
```

> Do not place GitHub tokens, API secrets, private keys, passwords, or other credentials in `VITE_*` variables. Vite exposes these values to client-side JavaScript, so they must be treated as public.

## Accessibility and Security

- Keyboard-accessible controls and visible focus states
- Skip navigation and semantic page structure
- Reduced-motion support
- Responsive mobile behavior
- Public GitHub endpoints with no production secrets
- Server-side API boundary recommended for future authenticated integrations

## Release History

- `v0.1.0` - Application foundation
- `v0.2.0` - Live GitHub engineering dashboard
- `v0.3.0` - Repository health intelligence
- `v0.4.0` - Flagship engineering case studies
- `v0.5.0` - Executive animated command center
- `v0.6.0` - Neural activity command HUD
- `v0.7.0` - Professional profile and downloadable resume
- `v1.0.0` - Public Platform Engineering Command Center

## Contact

- Portfolio: https://gift3dmyndz.github.io/
- LinkedIn: https://www.linkedin.com/in/mrjoshuawolfe
- GitHub: https://github.com/Gift3dMyndZ
- Email: hunterwolfej@icloud.com
