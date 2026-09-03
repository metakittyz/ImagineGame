import Seo from '../components/Seo'
import Section, { Eyebrow } from '../components/Section'
import Button from '../components/Button'
import QualificationForm from '../components/QualificationForm'
import { CONTACT_EMAIL } from '../data/site'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Tell Patrick what you're building, what isn't working, or what you're trying to automate."
        path="/contact"
      />

      <Section className="pb-14 md:pb-16">
        <Eyebrow>Contact</Eyebrow>
        <h1 className="text-display-2 font-extrabold tracking-tight max-w-3xl">
          Have a Complex Automation Problem?
        </h1>
        <p className="mt-6 text-lg text-graphite leading-relaxed max-w-2xl">
          Tell Patrick what you&rsquo;re building, what isn&rsquo;t working, or what you&rsquo;re trying to
          automate.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button to="/consultation" variant="primary">
            Book a Consultation
          </Button>
          <a href={`mailto:${CONTACT_EMAIL}`} className="label-mono text-xs font-semibold self-center text-ink/70 hover:text-accent focus-ring">
            or email {CONTACT_EMAIL}
          </a>
        </div>
      </Section>

      <Section className="pt-0 border-t border-line">
        <div className="max-w-xl">
          <Eyebrow>Send a Project Inquiry</Eyebrow>
          <h2 className="text-h3 font-bold mb-6">Project Details</h2>
          <QualificationForm compact />
        </div>
      </Section>
    </>
  )
}
