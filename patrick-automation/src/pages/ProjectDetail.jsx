import { Link, useParams, Navigate } from 'react-router-dom'
import Seo from '../components/Seo'
import Section, { Eyebrow } from '../components/Section'
import ConsultationBanner from '../components/ConsultationBanner'
import { diagramByKind, MachineDiagram } from '../components/TechDiagram'
import { getProjectBySlug, projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const Diagram = diagramByKind[project.heroKind] || MachineDiagram
  const related = projects.filter((p) => p.slug !== project.slug && p.category === project.category).slice(0, 3)
  const relatedFallback = related.length > 0 ? related : projects.filter((p) => p.slug !== project.slug).slice(0, 3)

  return (
    <>
      <Seo title={project.title} description={project.summary} path={`/projects/${project.slug}`} />

      <Section className="pb-10 md:pb-12">
        <Link to="/projects" className="label-mono text-xs text-graphite hover:text-ink focus-ring inline-flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M13 7H1.5M6 2.5 1 7l5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          All Projects
        </Link>
        <p className="label-mono text-xs text-accent font-semibold mt-8 mb-3">{project.category}</p>
        <h1 className="text-display-2 font-extrabold tracking-tight max-w-3xl">{project.title}</h1>
        <p className="mt-6 text-lg text-graphite leading-relaxed max-w-2xl">{project.summary}</p>
        {project.placeholder && (
          <p className="mt-4 label-mono text-[11px] text-graphite/70">
            Illustrative case study — published details pending client approval.
          </p>
        )}
      </Section>

      <Section className="pt-0">
        <Diagram className="w-full aspect-[16/8]" />
      </Section>

      <Section className="border-t border-line grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <Eyebrow>The Challenge</Eyebrow>
          <h2 className="sr-only">The Challenge</h2>
          <p className="text-graphite leading-relaxed">{project.challenge}</p>
        </div>
        <div>
          <Eyebrow>Outcome</Eyebrow>
          <h2 className="sr-only">Outcome</h2>
          <p className="text-graphite leading-relaxed">{project.outcome}</p>
        </div>
      </Section>

      <Section className="border-t border-line bg-surface">
        <Eyebrow>The Approach</Eyebrow>
        <h2 className="text-h2 font-extrabold tracking-tight max-w-xl mb-10">
          Requirements &rarr; Architecture &rarr; Mechanical Design &rarr; Prototype &rarr; Validation
        </h2>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-line border border-line">
          {project.approach.map((step, i) => (
            <li key={step.stage} className="bg-paper p-6 flex flex-col">
              <span className="label-mono text-xs text-accent font-semibold">0{i + 1}</span>
              <span className="mt-2 font-bold">{step.stage}</span>
              <span className="mt-2 text-sm text-graphite leading-relaxed">{step.detail}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="border-t border-line">
        <Eyebrow>Engineering</Eyebrow>
        <h2 className="text-h2 font-extrabold tracking-tight max-w-xl mb-8">Technical Details</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 max-w-3xl">
          {project.engineering.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-ink">
              <span className="mt-1.5 h-1 w-1 shrink-0 bg-accent" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="label-mono text-[10px] text-graphite border border-line px-2 py-1">
              {tag}
            </span>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line bg-surface">
        <Eyebrow>Related Work</Eyebrow>
        <h2 className="text-h2 font-extrabold tracking-tight max-w-xl mb-10">More Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedFallback.map((p) => {
            const RelatedDiagram = diagramByKind[p.heroKind] || MachineDiagram
            return (
              <Link
                key={p.slug}
                to={`/projects/${p.slug}`}
                className="group block border border-line bg-paper hover:border-ink transition-colors duration-300 focus-ring"
              >
                <RelatedDiagram className="aspect-[4/3]" />
                <div className="p-5">
                  <p className="label-mono text-[10px] text-accent font-semibold">{p.category}</p>
                  <p className="mt-2 font-bold text-sm group-hover:text-accent transition-colors">{p.title}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </Section>

      <ConsultationBanner />
    </>
  )
}
