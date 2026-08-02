import { createBrowserRouter, RouterProvider } from 'react-router';
import { AppShell } from './components/layout/AppShell';
import { HomePage } from './pages/HomePage';
import { DashboardPage } from './pages/DashboardPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { PlaceholderPage } from './pages/PlaceholderPage';
import { ProjectCaseStudyPage } from './pages/ProjectCaseStudyPage';

const placeholder = (title: string, description: string) => <PlaceholderPage title={title} description={description} />;

const router = createBrowserRouter([{
  path: '/', element: <AppShell />, children: [
    { index: true, element: <HomePage /> },
    { path: 'dashboard', element: <DashboardPage /> },
    { path: 'projects', element: <ProjectsPage /> },
    {
      path: 'projects/:projectSlug',
      element: <ProjectCaseStudyPage />,
    },
    { path: 'architecture', element: placeholder('Architecture', 'System topology connecting the React portfolio, GitHub APIs, CI/CD, Render, and project workloads.') },
    { path: 'experience', element: placeholder('Experience', 'Interactive leadership and engineering timeline.') },
    { path: 'skills', element: placeholder('Skills', 'Cloud, Linux, Kubernetes, Python, data engineering, AI, observability, and leadership.') },
    { path: 'resume', element: placeholder('Resume', 'Interactive resume with print and downloadable document support.') },
    { path: 'contact', element: placeholder('Contact', 'Professional contact endpoints and terminal-style navigation.') },
  ]
}]);

export default function App() { return <RouterProvider router={router} />; }
