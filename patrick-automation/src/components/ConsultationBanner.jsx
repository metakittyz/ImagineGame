import Button from './Button'
import { Container } from './Section'

export default function ConsultationBanner() {
  return (
    <section className="bg-ink text-paper py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.06]" aria-hidden="true" />
      <Container className="relative">
        <div className="max-w-2xl">
          <p className="label-mono text-xs text-accent-light font-semibold mb-4">Start a Conversation</p>
          <h2 className="text-h2 font-extrabold tracking-tight">Have a difficult machine or automation problem?</h2>
          <p className="mt-5 text-base text-paper/70 leading-relaxed max-w-xl">
            Tell Patrick what you&rsquo;re building, what isn&rsquo;t working, or what you&rsquo;re trying to
            automate. A consultation is the fastest way to find out what it will take to engineer a solution.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="/consultation" variant="accent">
              Book a Consultation
            </Button>
            <Button to="/contact" variant="inverse">
              Discuss Your Project
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
