import { Link } from 'react-router';
import { featuredProjects } from '../config/projects';

export function HomePage() {
  return (
    <section className="hero panel">
      <p className="eyebrow">AI SYSTEMS · CLOUD PLATFORMS · SITE RELIABILITY</p>
      <h1>Joshua <span>Wolfe</span></h1>
      <p className="lead">A live platform engineering command center showcasing production systems, adaptive AI, reliability engineering, cloud operations, and technical leadership.</p>
      <div className="actions">
        <Link className="button primary" to="/dashboard">Open Dashboard</Link>
        <a className="button" href="https://labyrinth-ai-engine-1.onrender.com/" target="_blank" rel="noreferrer">Launch Labyrinth</a>
      </div>
      <div className="project-strip">
        {featuredProjects.map((p) => <Link key={p.repository} to={p.route}><strong>{p.name}</strong><span>{p.category}</span></Link>)}
      </div>
    </section>
  );
}
