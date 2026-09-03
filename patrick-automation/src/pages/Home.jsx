import Seo from '../components/Seo'
import Section, { Container, Eyebrow } from '../components/Section'
import Button from '../components/Button'
import { HeroAssembly } from '../components/TechDiagram'
import ExpertiseStrip from '../components/ExpertiseStrip'
import ProjectCard from '../components/ProjectCard'
import ProcessStepper from '../components/ProcessStepper'
import ConsultationBanner from '../components/ConsultationBanner'
import { coreServices } from '../data/services'
import { projects } from '../data/projects'

const selectedProjects = projects.slice(0, 3)

const whyPoints = [
  { title: 'Direct expertise', detail: 'Work directly with the engineer doing the design — no account layer between you and the work.' },
  { title: 'Systems thinking', detail: 'Problems get architected before they get drawn, so the mechanical design fits the whole system.' },
  { title: 'Practical engineering', detail: 'Solutions are built to be manufactured and maintained, not just to look right in a render.' },
  { title: 'Manufacturing awareness', detail: 'Design decisions account for how the part or machine actually gets built.' },
]

export default function Home() {
  return (
    <>
      <Seo
        title="Custom Mechanical Automation Design"
        description="Expert mechanical automation design and engineering for companies developing custom machines, robotic systems, AMRs, production equipment, and precision manufacturing solutions."
        path="/"
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
        <Container className="relative pt-16 pb-20 md:pt-24 md:pb-28 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="label-mono text-xs text-accent font-semibold mb-6">
              Custom Mechanical Automation Design — From Concept to Production
            </p>
            <h1 className="text-display-1 font-extrabold tracking-tight text-ink">
              Engineering the Machines Behind Modern Automation
            </h1>
            <p className="mt-6 text-lg text-graphite leading-relaxed max-w-xl">
              Expert mechanical automation design and engineering for companies developing custom machines,
              robotic systems, AMRs, production equipment, and precision manufacturing solutions.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button to="/consultation" variant="primary">
                Book a Consultation
              </Button>
              <Button to="/projects" variant="secondary">
                Explore Projects
              </Button>
            </div>
          </div>

          <HeroAssembly className="aspect-[5/4] w-full" />
        </Container>
      </section>

      {/* EXPERTISE */}
      <Section className="border-t border-line">
        <Eyebrow>Engineering Expertise</Eyebrow>
        <h2 className="text-h2 font-extrabold tracking-tight max-w-2xl">
          Where Mechanical Design Meets Automation
        </h2>
        <p className="mt-5 text-graphite leading-relaxed max-w-2xl">
          From early-stage machine architecture through detailed mechanical design and automation-ready
          engineering, Patrick helps teams turn complex requirements into practical systems.
        </p>
        <div className="mt-10 overflow-x-auto pb-2">
          <ExpertiseStrip />
        </div>
      </Section>

      {/* SELECTED PROJECTS */}
      <Section className="border-t border-line bg-surface">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <Eyebrow>Selected Work</Eyebrow>
            <h2 className="text-h2 font-extrabold tracking-tight max-w-xl">Engineering Case Studies</h2>
          </div>
          <Button to="/projects" variant="secondary">
            View All Projects
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {selectedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section className="border-t border-line">
        <Eyebrow>Capabilities</Eyebrow>
        <h2 className="text-h2 font-extrabold tracking-tight max-w-xl">Engineering Services</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
          {coreServices.map((service) => (
            <a
              key={service.id}
              href={`/services#${service.slug}`}
              className="group bg-paper p-8 flex flex-col hover:bg-surface transition-colors duration-300 ease-engineer focus-ring"
            >
              <span className="label-mono text-xs text-accent font-semibold">{service.number}</span>
              <span className="mt-3 text-lg font-bold">{service.title}</span>
              <span className="mt-2 text-sm text-graphite leading-relaxed">{service.summary}</span>
              <span className="mt-5 inline-flex items-center gap-2 label-mono text-xs font-semibold text-ink group-hover:text-accent transition-colors">
                Learn More
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 ease-engineer group-hover:translate-x-1">
                  <path d="M1 7h11.5M8 2.5 13 7l-5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section className="border-t border-line bg-surface">
        <Eyebrow>Engineering Process</Eyebrow>
        <h2 className="text-h2 font-extrabold tracking-tight max-w-xl">Discover, Architect, Deliver</h2>
        <div className="mt-10">
          <ProcessStepper />
        </div>
        <div className="mt-8">
          <Button to="/process" variant="secondary">
            See the Full Process
          </Button>
        </div>
      </Section>

      {/* ABOUT TEASER */}
      <Section className="border-t border-line">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">
          <div>
            <Eyebrow>About Patrick</Eyebrow>
            <h2 className="text-h2 font-extrabold tracking-tight">
              Expert Mechanical Automation Design Engineer &amp; Architect
            </h2>
            <p className="mt-5 text-graphite leading-relaxed max-w-lg">
              Patrick works at the intersection of mechanical engineering, automation, robotics, and
              manufacturing — helping teams turn complex requirements into machines that actually run in
              production.
            </p>
            <div className="mt-8">
              <Button to="/about" variant="secondary">
                Meet Patrick
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {whyPoints.map((point) => (
              <div key={point.title} className="border border-line p-6">
                <p className="text-sm font-bold">{point.title}</p>
                <p className="mt-2 text-sm text-graphite leading-relaxed">{point.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <ConsultationBanner />
    </>
  )
}
