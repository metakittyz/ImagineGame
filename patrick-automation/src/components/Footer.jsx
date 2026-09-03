import { Link } from 'react-router-dom'
import { CONTACT_EMAIL, NAV_LINKS } from '../data/site'
import Button from './Button'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="mx-auto max-w-content px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-12">
          <div>
            <p className="text-lg font-bold">Patrick</p>
            <p className="mt-1 text-sm text-paper/60">Mechanical Automation Design Engineer &amp; Architect</p>
            <p className="mt-6 max-w-sm text-sm text-paper/70 leading-relaxed">
              Custom mechanical automation design engineered around your process — from early architecture
              through production-ready documentation.
            </p>
            <div className="mt-6">
              <Button to="/consultation" variant="inverse">
                Book a Consultation
              </Button>
            </div>
          </div>

          <div>
            <p className="label-mono text-xs text-paper/50 mb-4">Navigation</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-paper/80 hover:text-accent-light focus-ring">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-mono text-xs text-paper/50 mb-4">Contact</p>
            <ul className="space-y-3 text-sm text-paper/80">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-accent-light focus-ring">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent-light focus-ring">
                  Send a project inquiry
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-paper/10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <p className="text-xs text-paper/50">
            &copy; {new Date().getFullYear()} Patrick — Mechanical Automation Design Engineer &amp; Architect. All rights reserved.
          </p>
          <p className="text-xs text-paper/40">Independent engineering consultancy. Project details on this site are illustrative unless noted otherwise.</p>
        </div>
      </div>
    </footer>
  )
}
