import Seo from '../components/Seo'
import Section, { Eyebrow } from '../components/Section'
import ConsultationBanner from '../components/ConsultationBanner'
import { processStages } from '../data/process'

export default function Process() {
  return (
    <>
      <Seo
        title="Process"
        description="A six-stage engineering process — Discover, Define, Architect, Design, Validate, Deliver — for mechanical automation design projects."
        path="/process"
      />

      <Section className="pb-14 md:pb-16">
        <Eyebrow>Engineering Process</Eyebrow>
        <h1 className="text-display-2 font-extrabold tracking-tight max-w-3xl">
          A Structured Path From Problem to Production
        </h1>
        <p className="mt-6 text-lg text-graphite leading-relaxed max-w-2xl">
          Every project moves through the same six stages, regardless of scale — the depth changes, the
          structure doesn&rsquo;t. It keeps engineering risk visible early, when it&rsquo;s still cheap to
          resolve.
        </p>
      </Section>

      <div className="border-t border-line">
        {processStages.map((stage, i) => (
          <div key={stage.number} className={`border-b border-line py-16 md:py-20 ${i % 2 === 1 ? 'bg-surface' : ''}`}>
            <div className="mx-auto w-full max-w-content px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-start">
              <span className="label-mono text-6xl md:text-7xl font-extrabold text-line select-none leading-none">
                {stage.number}
              </span>
              <div className="max-w-2xl">
                <h2 className="text-h2 font-extrabold tracking-tight">{stage.title}</h2>
                <p className="mt-4 text-graphite leading-relaxed">{stage.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ConsultationBanner />
    </>
  )
}
