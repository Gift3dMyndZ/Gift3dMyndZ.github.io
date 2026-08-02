import { Link } from 'react-router';
import { featuredProjects } from '../config/projects';

export function ProjectsPage() {
  return <section className="panel page"><p className="eyebrow">FLAGSHIP SYSTEMS</p><h2>Projects</h2><div className="cards">{featuredProjects.map(p => <article className="card" key={p.repository}><span>{p.category}</span><h3>{p.name}</h3><code>{p.repository}</code><div className="actions"><Link className="button primary" to={p.route}>Case Study</Link><a className="button" href={p.repositoryUrl} target="_blank" rel="noreferrer">Repository</a>{p.liveUrl && <a className="button" href={p.liveUrl} target="_blank" rel="noreferrer">Live</a>}</div></article>)}</div></section>;
}
