import { useEffect } from 'react'

function setMeta(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export default function Seo({ title, description, path }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | Patrick — Mechanical Automation Design`
      : 'Patrick — Mechanical Automation Design Engineer & Architect'
    document.title = fullTitle
    if (description) {
      setMeta('name', 'description', description)
      setMeta('property', 'og:description', description)
      setMeta('name', 'twitter:description', description)
    }
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:type', 'website')
    setMeta('name', 'twitter:card', 'summary')
    setMeta('name', 'twitter:title', fullTitle)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    if (path && typeof window !== 'undefined') {
      const url = `${window.location.origin}${path}`
      canonical.setAttribute('href', url)
      setMeta('property', 'og:url', url)
    }
  }, [title, description, path])

  return null
}
