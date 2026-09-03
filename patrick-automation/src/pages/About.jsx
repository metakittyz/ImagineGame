import Seo from '../components/Seo'
import Section, { Eyebrow } from '../components/Section'
import Button from '../components/Button'
import ConsultationBanner from '../components/ConsultationBanner'

const expertiseMatrix = [
  { area: 'Mechanical Design', detail: 'Machine architecture, mechanisms, structure, and detailed CAD.' },
  { area: 'Automation', detail: 'Mechanical systems engineered to work with robots, controls, and sensors.' },
  { area: 'Robotics', detail: 'AMR platforms, robotic workcells, and end-of-arm tooling.' },
  { area: 'Manufacturing', detail: 'Design for manufacturability, design for assembly, production transition.' },
  { area: 'Measurement Systems', detail: 'Precision fixtures and inspection systems built around the measurement.' },
  { area: 'Product Design', detail: 'Mechanical product development from concept through production.' },
]

const howHeWorks = [
  { step: 'Listen', detail: 'Understand the problem in your words before translating it into engineering terms.' },
  { step: 'Understand', detail: 'Get specific about constraints, requirements, and what success actually looks like.' },
  { step: 'Architect', detail: 'Define the system-level approach before committing to detailed design.' },
  { step: 'Design', detail: 'Develop the mechanical system in detail — mechanisms, structure, documentation.' },
  { step: 'Validate', detail: 'Prototype and test to resolve risk before production commitment.' },
  { step: 'Deliver', detail: 'Hand off production-ready documentation and support implementation.' },
]

const whyReasons = [
  'Deep technical expertise across mechanical design, automation, and robotics',
  'Direct collaboration — you work with the engineer, not an account manager',
  'Systems-level thinking applied from the first conversation',
  'Practical engineering, built to be manufactured and maintained',
  'Custom solutions engineered around your process, not a generic template',
  'Fast iteration when a concept needs to be tested quickly',
  'Manufacturing awareness built into every design decision',
  'Direct automation experience across robotics, AMRs, and machine tending',
]

export default function About() {
  return (
    <>
      <Seo
        title="About Patrick"
        description="Meet Patrick, an expert mechanical automation design engineer and architect working at the intersection of mechanical design, automation, robotics, and manufacturing."
        path="/about"
      />

      <Section className="pb-14 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">
          <div>
            <Eyebrow>About Patrick</Eyebrow>
            <h1 className="text-display-2 font-extrabold tracking-tight">Meet Patrick</h1>
            <p className="mt-3 text-lg font-semibold text-graphite">
              Expert Mechanical Automation Design Engineer &amp; Architect
            </p>
            <p className="mt-6 text-graphite leading-relaxed max-w-xl">
              Patrick works at the intersection of mechanical design, automation, robotics, and
              manufacturing. The work is understanding a difficult engineering problem well enough to
              architect a system for it, then designing the mechanical systems that make that system real —
              custom machines, AMR platforms, part feeding and machine tending systems, measurement and
              inspection equipment, and mechanical products headed for production.
            </p>
            <p className="mt-4 text-graphite leading-relaxed max-w-xl">
              He is not simply a CAD designer or a machine builder. The role is systems-level: understand the
              problem, architect the solution, design the mechanical system, integrate the automation
              requirements, and help carry the concept toward implementation.
            </p>
            <div className="mt-8">
              <Button to="/consultation" variant="primary">
                Book a Consultation
              </Button>
            </div>
          </div>

          <div className="aspect-[4/5] w-full border border-line bg-surface flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
            <div className="relative flex flex-col items-center gap-3">
              <span className="flex h-24 w-24 items-center justify-center border border-ink/20 label-mono text-3xl font-bold text-ink/40">
                P
              </span>
              <span className="label-mono text-[11px] text-graphite/70">Portrait placeholder</span>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-line bg-surface">
        <Eyebrow>Engineering Philosophy</Eyebrow>
        <h2 className="text-h2 font-extrabold tracking-tight max-w-2xl">
          Understand the Problem Before Drawing the Solution
        </h2>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl text-graphite leading-relaxed">
          <p>
            A mechanical system is only as good as the understanding behind it. Before any CAD gets opened,
            the real constraints need to be on the table — cycle time, tolerance, floor space, budget,
            existing infrastructure, and what actually has to be true for the system to work in production.
          </p>
          <p>
            Good engineering is practical engineering. A design that looks impressive but can&rsquo;t be
            manufactured, assembled, or maintained isn&rsquo;t a solution. The goal is always a system that
            works reliably in the real environment it has to operate in.
          </p>
        </div>
      </Section>

      <Section className="border-t border-line">
        <Eyebrow>Areas of Expertise</Eyebrow>
        <h2 className="text-h2 font-extrabold tracking-tight max-w-xl">A Capability Matrix</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
          {expertiseMatrix.map((item) => (
            <div key={item.area} className="bg-paper p-7">
              <p className="font-bold">{item.area}</p>
              <p className="mt-2 text-sm text-graphite leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line bg-surface">
        <Eyebrow>How Patrick Works</Eyebrow>
        <h2 className="text-h2 font-extrabold tracking-tight max-w-xl mb-10">
          Listen &rarr; Understand &rarr; Architect &rarr; Design &rarr; Validate &rarr; Deliver
        </h2>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
          {howHeWorks.map((item, i) => (
            <li key={item.step} className="bg-paper p-7">
              <span className="label-mono text-xs text-accent font-semibold">0{i + 1}</span>
              <p className="mt-2 font-bold">{item.step}</p>
              <p className="mt-2 text-sm text-graphite leading-relaxed">{item.detail}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="border-t border-line">
        <Eyebrow>Why Work With Patrick?</Eyebrow>
        <h2 className="text-h2 font-extrabold tracking-tight max-w-xl mb-10">
          The Person You Call When the Machine Gets Complicated
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 max-w-4xl">
          {whyReasons.map((reason) => (
            <li key={reason} className="flex items-start gap-3 text-ink">
              <span className="mt-1.5 h-1 w-1 shrink-0 bg-accent" aria-hidden="true" />
              {reason}
            </li>
          ))}
        </ul>
      </Section>

      <ConsultationBanner />
    </>
  )
}
