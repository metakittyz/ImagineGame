import { useState } from 'react'
import { CONTACT_EMAIL } from '../data/site'

const projectTypes = [
  'Custom Machine',
  'AMR Platform',
  'Part Feeding / Machine Tending',
  'Measurement / Inspection System',
  'Product Design',
  'Robotic Workcell',
  'Fixtures & Tooling',
  'Not sure yet',
]

const stages = ['Early concept', 'Requirements defined', 'In design', 'Prototype built', 'Ready to scale']
const timelines = ['ASAP', '1–3 months', '3–6 months', '6+ months', 'Not sure yet']

const fieldClasses =
  'w-full border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-steel focus-ring focus:border-accent transition-colors'
const labelClasses = 'label-mono text-[11px] text-graphite font-semibold mb-2 block'

export default function QualificationForm({ compact = false }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    projectType: '',
    goal: '',
    stage: '',
    timeline: '',
    notes: '',
  })

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Project type: ${form.projectType}`,
      `Trying to automate: ${form.goal}`,
      `Current stage: ${form.stage}`,
      `Timeline: ${form.timeline}`,
      form.notes ? `Additional info: ${form.notes}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      'Project inquiry — ' + (form.projectType || 'Consultation'),
    )}&body=${encodeURIComponent(body)}`

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="border border-line bg-surface p-8 text-center">
        <p className="font-bold text-lg">Thanks — your email client should be opening now.</p>
        <p className="mt-3 text-sm text-graphite leading-relaxed">
          If it didn&rsquo;t, email {CONTACT_EMAIL} directly with the same details.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="qf-name" className={labelClasses}>
            Name
          </label>
          <input id="qf-name" required type="text" value={form.name} onChange={update('name')} className={fieldClasses} />
        </div>
        <div>
          <label htmlFor="qf-company" className={labelClasses}>
            Company
          </label>
          <input id="qf-company" type="text" value={form.company} onChange={update('company')} className={fieldClasses} />
        </div>
      </div>

      <div>
        <label htmlFor="qf-email" className={labelClasses}>
          Email
        </label>
        <input id="qf-email" required type="email" value={form.email} onChange={update('email')} className={fieldClasses} />
      </div>

      <div>
        <label htmlFor="qf-project-type" className={labelClasses}>
          Project type
        </label>
        <select id="qf-project-type" required value={form.projectType} onChange={update('projectType')} className={fieldClasses}>
          <option value="" disabled>
            Select one
          </option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="qf-goal" className={labelClasses}>
          What are you trying to automate?
        </label>
        <textarea
          id="qf-goal"
          required
          rows={compact ? 3 : 4}
          value={form.goal}
          onChange={update('goal')}
          className={fieldClasses}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="qf-stage" className={labelClasses}>
            Current project stage
          </label>
          <select id="qf-stage" value={form.stage} onChange={update('stage')} className={fieldClasses}>
            <option value="">Select one</option>
            {stages.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="qf-timeline" className={labelClasses}>
            Estimated timeline
          </label>
          <select id="qf-timeline" value={form.timeline} onChange={update('timeline')} className={fieldClasses}>
            <option value="">Select one</option>
            {timelines.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {!compact && (
        <div>
          <label htmlFor="qf-notes" className={labelClasses}>
            Additional information
          </label>
          <textarea id="qf-notes" rows={3} value={form.notes} onChange={update('notes')} className={fieldClasses} />
        </div>
      )}

      <button
        type="submit"
        className="w-full label-mono text-xs font-semibold px-6 py-3.5 bg-ink text-paper hover:bg-accent transition-colors duration-300 ease-engineer focus-ring"
      >
        Send Project Details
      </button>
    </form>
  )
}
