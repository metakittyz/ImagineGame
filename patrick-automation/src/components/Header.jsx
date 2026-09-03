import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../data/site'
import Button from './Button'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ease-engineer ${
        scrolled || open ? 'bg-paper/95 backdrop-blur border-b border-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-content px-6 md:px-10 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 focus-ring" aria-label="Patrick — Mechanical Automation Design, home">
          <span className="relative flex h-9 w-9 items-center justify-center border border-ink/20">
            <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true">
              <circle cx="16" cy="16" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M16 4v4M16 24v4M4 16h4M24 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <circle cx="16" cy="16" r="2.5" fill="currentColor" />
            </svg>
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-tight">Patrick</span>
            <span className="block label-mono text-[10px] text-graphite">Mechanical Automation</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `label-mono text-xs font-semibold transition-colors focus-ring ${
                  isActive ? 'text-accent' : 'text-ink/70 hover:text-ink'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/consultation" variant="primary">
            Book a Consultation
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden focus-ring p-2 -mr-2"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 h-0.5 w-6 bg-ink transition-all duration-300 ${open ? 'top-2 rotate-45' : 'top-0'}`}
            />
            <span className={`absolute left-0 top-2 h-0.5 w-6 bg-ink transition-opacity duration-200 ${open ? 'opacity-0' : 'opacity-100'}`} />
            <span
              className={`absolute left-0 h-0.5 w-6 bg-ink transition-all duration-300 ${open ? 'top-2 -rotate-45' : 'top-4'}`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        {...(!open ? { inert: '' } : {})}
        className={`lg:hidden fixed inset-x-0 top-20 bottom-0 bg-paper transition-transform duration-300 ease-engineer ${
          open ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 pt-6" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `py-4 border-b border-line text-lg font-semibold focus-ring ${isActive ? 'text-accent' : 'text-ink'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="mt-8">
            <Button to="/consultation" variant="primary" className="w-full">
              Book a Consultation
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
