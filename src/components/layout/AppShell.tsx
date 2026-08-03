import { NavLink, Outlet } from 'react-router';
import { InvaderField } from '../effects/InvaderField';
import { Github } from 'lucide-react';

const links = [
  ['/', 'Home'], ['/dashboard', 'Dashboard'], ['/projects', 'Projects'],
  ['/architecture', 'Architecture'], ['/experience', 'Experience'],
  ['/skills', 'Skills'], ['/resume', 'Resume'], ['/contact', 'Contact'],
];

export function AppShell() {
  return (
    <div className="app-shell">
      <InvaderField />
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <NavLink className="brand" to="/">JOSHUA WOLFE <small>/ COMMAND CENTER</small></NavLink>
        <nav aria-label="Primary navigation">
          {links.map(([to, label]) => <NavLink key={to} to={to}>{label}</NavLink>)}
          <a href="https://github.com/Gift3dMyndZ" target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={18} /></a>
        </nav>
      </header>
      <main id="main"><Outlet /></main>
      <footer><span className="status-dot" /> API READY · GITHUB: Gift3dMyndZ</footer>
    </div>
  );
}
