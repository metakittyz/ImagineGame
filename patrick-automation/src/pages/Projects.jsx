import { useMemo, useState } from 'react'
import Seo from '../components/Seo'
import Section, { Eyebrow } from '../components/Section'
import ConsultationBanner from '../components/ConsultationBanner'
import ProjectCard from '../components/ProjectCard'
import { categories, projects } from '../data/projects'

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active],
  )

  return (
    <>
      <Seo
        title="Projects"
        description="Engineering case studies across AMR platforms, custom machines, part feeding, machine tending, measurement systems, product design, robotics, and fixtures & tooling."
        path="/projects"
      />

      <Section className="pb-10 md:pb-12">
        <Eyebrow>Projects</Eyebrow>
        <h1 className="text-display-2 font-extrabold tracking-tight max-w-3xl">Engineering Case Studies</h1>
        <p className="mt-6 text-lg text-graphite leading-relaxed max-w-2xl">
          A cross-section of the mechanical automation problems Patrick has worked on — from mobile robot
          platforms to precision inspection fixtures.
        </p>
      </Section>

      <Section className="pt-0 border-t border-line">
        <div className="flex flex-wrap gap-2 mb-12" role="group" aria-label="Filter projects by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={active === category}
              className={`label-mono text-xs font-semibold px-4 py-2.5 border transition-colors duration-200 focus-ring ${
                active === category
                  ? 'bg-ink text-paper border-ink'
                  : 'bg-transparent text-ink/70 border-line hover:border-ink hover:text-ink'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-graphite">No projects in this category yet.</p>
        )}
      </Section>

      <ConsultationBanner />
    </>
  )
}
