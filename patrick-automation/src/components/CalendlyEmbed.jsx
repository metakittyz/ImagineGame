import { useEffect, useRef } from 'react'
import { CALENDLY_URL } from '../data/site'

const SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js'

export default function CalendlyEmbed() {
  const containerRef = useRef(null)

  useEffect(() => {
    let script = document.querySelector(`script[src="${SCRIPT_SRC}"]`)

    function init() {
      if (window.Calendly && containerRef.current) {
        containerRef.current.innerHTML = ''
        window.Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: containerRef.current,
        })
      }
    }

    if (script) {
      init()
    } else {
      script = document.createElement('script')
      script.src = SCRIPT_SRC
      script.async = true
      script.addEventListener('load', init)
      document.body.appendChild(script)
    }

    return () => {
      script?.removeEventListener('load', init)
    }
  }, [])

  return (
    <div className="border border-line bg-surface">
      <div ref={containerRef} className="min-h-[720px] w-full" aria-label="Calendly scheduling widget">
        <div className="flex h-[720px] items-center justify-center px-8 text-center">
          <p className="label-mono text-xs text-graphite">Loading scheduler&hellip;</p>
        </div>
      </div>
      <noscript>
        <p className="p-6 text-sm text-graphite">
          Enable JavaScript to load the scheduler, or{' '}
          <a href={CALENDLY_URL} className="text-accent underline" target="_blank" rel="noreferrer">
            book directly on Calendly
          </a>
          .
        </p>
      </noscript>
    </div>
  )
}
