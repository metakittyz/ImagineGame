import { Link } from 'react-router-dom'
import { diagramByKind, MachineDiagram } from './TechDiagram'

export default function ProjectCard({ project }) {
  const Diagram = diagramByKind[project.heroKind] || MachineDiagram

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block border border-line bg-paper transition-colors duration-300 ease-engineer hover:border-ink focus-ring"
    >
      <Diagram className="aspect-[4/3] transition-transform duration-500 ease-engineer group-hover:scale-[1.02]" />
      <div className="p-6">
        <p className="label-mono text-[11px] text-accent font-semibold">{project.category}</p>
        <h3 className="mt-2 text-lg font-bold leading-snug">{project.title}</h3>
        <p className="mt-3 text-sm text-graphite leading-relaxed line-clamp-3">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="label-mono text-[10px] text-graphite border border-line px-2 py-1">
              {tag}
            </span>
          ))}
        </div>
        <span className="mt-5 inline-flex items-center gap-2 label-mono text-xs font-semibold text-ink group-hover:text-accent transition-colors">
          View Case Study
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 ease-engineer group-hover:translate-x-1">
            <path d="M1 7h11.5M8 2.5 13 7l-5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  )
}
