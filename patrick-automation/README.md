# Patrick — Mechanical Automation Design

Production website for Patrick, an independent mechanical automation design engineer and architect.
Built with React, React Router, Vite, and Tailwind CSS.

## Structure

- `src/pages` — Home, Services, Projects (+ dynamic case study pages), About, Process, Consultation, Contact
- `src/components` — shared layout, nav, footer, CTA buttons, inline technical/CAD-style SVG diagrams, forms
- `src/data` — site-wide constants (nav, Calendly URL, contact email), services, projects, and process content

## Before launch

- Set the real Calendly scheduling link and contact email in `src/data/site.js`.
- Replace the placeholder projects in `src/data/projects.js` with real case studies as they become available
  for publication (each currently carries `placeholder: true` and is flagged on its case study page).
- Replace the portrait placeholder on the About page with a real photo of Patrick.
- Wire the qualification form (`src/components/QualificationForm.jsx`) to a real submission backend — it
  currently opens a pre-filled `mailto:` link since no backend is configured.
- Swap the domain in `public/sitemap.xml` for the production domain.

## Running it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```
