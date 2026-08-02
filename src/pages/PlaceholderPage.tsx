export function PlaceholderPage({ title, description }: { title: string; description: string }) {
  return <section className="panel page"><p className="eyebrow">MODULE INITIALIZED</p><h2>{title}</h2><p className="lead">{description}</p></section>;
}
