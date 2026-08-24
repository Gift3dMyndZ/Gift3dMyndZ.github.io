import { Github } from 'lucide-react';
import {
  NavLink,
  Outlet,
} from 'react-router';
import { NeuralBrainHud } from '../brain/NeuralBrainHud';
import { InvaderField } from '../effects/InvaderField';

const links = [
  ['/', 'Home'],
  ['/dashboard', 'Dashboard'],
  ['/projects', 'Projects'],
  ['/showcase', 'Showcase'],
  ['/architecture', 'Architecture'],
  ['/experience', 'Experience'],
  ['/skills', 'Skills'],
  ['/resume', 'Resume'],
  ['/contact', 'Contact'],
] as const;

export function AppShell() {
  return (
    <div className="app-shell">
      <NeuralBrainHud />
      <InvaderField />

      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <NavLink className="brand" to="/">
          JOSHUA WOLFE
          <small> / COMMAND CENTER</small>
        </NavLink>

        <nav aria-label="Primary navigation">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to}>
              {label}
            </NavLink>
          ))}

          <a
            aria-label="GitHub profile"
            href="https://github.com/Gift3dMyndZ"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github aria-hidden="true" size={18} />
          </a>
        </nav>
      </header>

      <main id="main">
        <Outlet />
      </main>

      <footer>
        <span aria-hidden="true" className="status-dot" />
        <span>API READY · GITHUB: Gift3dMyndZ</span>
      </footer>
    </div>
  );
}
