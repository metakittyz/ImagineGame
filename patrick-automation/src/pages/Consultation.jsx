import Seo from '../components/Seo'
import Section, { Eyebrow } from '../components/Section'
import CalendlyEmbed from '../components/CalendlyEmbed'
import QualificationForm from '../components/QualificationForm'

export default function Consultation() {
  return (
    <>
      <Seo
        title="Book a Consultation"
        description="Schedule a consultation with Patrick to discuss a custom machine, AMR platform, or automation problem — with direct scheduling via Calendly."
        path="/consultation"
      />

      <Section className="pb-14 md:pb-16">
        <Eyebrow>Consultation</Eyebrow>
        <h1 className="text-display-2 font-extrabold tracking-tight max-w-3xl">Let&rsquo;s Talk About Your Machine</h1>
        <p className="mt-6 text-lg text-graphite leading-relaxed max-w-2xl">
          Have a difficult automation problem, a machine concept, or a system that needs engineering?
          Schedule a conversation with Patrick.
        </p>
      </Section>

      <Section className="pt-0 border-t border-line">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12">
          <div>
            <Eyebrow>Before You Book</Eyebrow>
            <h2 className="text-h3 font-bold mb-6">A Few Details About Your Project</h2>
            <p className="text-sm text-graphite leading-relaxed mb-8">
              This isn&rsquo;t required to book a time, but it helps Patrick prepare for the conversation.
            </p>
            <QualificationForm />
          </div>
          <div>
            <Eyebrow>Pick a Time</Eyebrow>
            <h2 className="text-h3 font-bold mb-6">Schedule Directly</h2>
            <CalendlyEmbed />
          </div>
        </div>
      </Section>
    </>
  )
}
