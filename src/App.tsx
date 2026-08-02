import { createBrowserRouter, RouterProvider } from 'react-router';
import { AppShell } from './components/layout/AppShell';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { PlaceholderPage } from './pages/PlaceholderPage';

const placeholder = (title: string, description: string) => <PlaceholderPage title={title} description={description} />;

const router = createBrowserRouter([{
  path: '/', element: <AppShell />, children: [
    { index: true, element: <HomePage /> },
    { path: 'dashboard', element: placeholder('Live Engineering Dashboard', 'GitHub metrics, workflow state, deployment health, languages, and recent engineering activity.') },
    { path: 'projects', element: <ProjectsPage /> },
    { path: 'projects/labyrinth', element: placeholder('Labyrinth of Tartarus', 'Adaptive AI simulation engine, Oracle behavioral system, FastAPI, WebSockets, SQLite, and live deployment.') },
    { path: 'projects/aeronautics', element: placeholder('Aeronautics Reliability', 'Reliability engineering, observability, incident response, and production platform architecture.') },
    { path: 'projects/data-science', element: placeholder('Data Science Projects', 'Machine learning, statistical modeling, datasets, experimentation, and analytic engineering.') },
    { path: 'projects/smart-contract-engineering', element: placeholder('BGA Smart Contract Engineer', 'Smart contract implementation, testing, security, and blockchain engineering.') },
    { path: 'architecture', element: placeholder('Architecture', 'System topology connecting the React portfolio, GitHub APIs, CI/CD, Render, and project workloads.') },
    { path: 'experience', element: placeholder('Experience', 'Interactive leadership and engineering timeline.') },
    { path: 'skills', element: placeholder('Skills', 'Cloud, Linux, Kubernetes, Python, data engineering, AI, observability, and leadership.') },
    { path: 'resume', element: placeholder('Resume', 'Interactive resume with print and downloadable document support.') },
    { path: 'contact', element: placeholder('Contact', 'Professional contact endpoints and terminal-style navigation.') },
  ]
}]);

export default function App() { return <RouterProvider router={router} />; }
