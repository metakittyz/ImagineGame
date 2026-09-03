import Seo from '../components/Seo'
import Section, { Eyebrow } from '../components/Section'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <Section className="text-center py-32 md:py-40">
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <Eyebrow className="justify-center flex">404</Eyebrow>
      <h1 className="text-display-2 font-extrabold tracking-tight">Page Not Found</h1>
      <p className="mt-4 text-graphite max-w-md mx-auto">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button to="/" variant="primary">
          Back to Home
        </Button>
        <Button to="/projects" variant="secondary">
          View Projects
        </Button>
      </div>
    </Section>
  )
}
