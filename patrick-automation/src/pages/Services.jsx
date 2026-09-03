import Seo from '../components/Seo'
import Section, { Container, Eyebrow } from '../components/Section'
import Button from '../components/Button'
import ConsultationBanner from '../components/ConsultationBanner'
import { diagramByKind, MachineDiagram } from '../components/TechDiagram'
import { coreServices, additionalServices } from '../data/services'

const heroKindByService = {
  'custom-machine-design': 'machine',
  'part-feeding-machine-tending': 'feeding',
  'amr-platforms': 'amr',
  'measurement-inspection-systems': 'measurement',
  'product-design': 'product',
}

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Custom machine design, AMR platforms, part feeding and machine tending, measurement and inspection systems, and mechanical product design — premium engineering capabilities from concept to production."
        path="/services"
      />

      <Section className="pb-14 md:pb-16">
        <Eyebrow>Services</Eyebrow>
        <h1 className="text-display-2 font-extrabold tracking-tight max-w-3xl">
          Engineering Capabilities, Not Commodity Services
        </h1>
        <p className="mt-6 text-lg text-graphite leading-relaxed max-w-2xl">
          Each engagement starts with the problem, not a fixed scope. The capabilities below are the areas
          Patrick works in most — mechanical automation design across machines, robotics, and precision
          systems.
        </p>
      </Section>

      {coreServices.map((service, index) => {
        const Diagram = diagramByKind[heroKindByService[service.slug]] || MachineDiagram
        const reversed = index % 2 === 1
        return (
          <section
            key={service.id}
            id={service.slug}
            className={`border-t border-line py-20 md:py-28 scroll-mt-24 ${service.featured ? 'bg-surface' : ''}`}
          >
            <Container>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reversed ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div>
                  <p className="label-mono text-xs text-accent font-semibold mb-3">Service {service.number}</p>
                  <h2 className="text-h2 font-extrabold tracking-tight">{service.title}</h2>
                  {service.featured && (
                    <p className="mt-2 label-mono text-[11px] text-accent font-semibold">Major Specialty</p>
                  )}
                  <p className="mt-5 text-graphite leading-relaxed">{service.description}</p>
                  <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {service.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2 text-sm text-ink">
                        <span className="mt-1.5 h-1 w-1 shrink-0 bg-accent" aria-hidden="true" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button to="/consultation" variant="primary">
                      {service.cta}
                    </Button>
                  </div>
                </div>
                <Diagram className="aspect-[4/3] w-full" />
              </div>
            </Container>
          </section>
        )
      })}

      <Section className="border-t border-line">
        <Eyebrow>Additional Capabilities</Eyebrow>
        <h2 className="text-h2 font-extrabold tracking-tight max-w-xl">Where These Overlap</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
          {additionalServices.map((service) => (
            <div key={service.title} className="bg-paper p-8">
              <p className="text-base font-bold">{service.title}</p>
              <p className="mt-2 text-sm text-graphite leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <ConsultationBanner />
    </>
  )
}
