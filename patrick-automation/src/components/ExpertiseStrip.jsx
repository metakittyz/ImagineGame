const stages = ['Mechanical Engineering', 'Automation', 'Robotics', 'Machine Architecture', 'Manufacturing']

export default function ExpertiseStrip() {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-4 md:gap-x-4">
      {stages.map((stage, i) => (
        <div key={stage} className="flex items-center gap-x-3 md:gap-x-4">
          <span className="label-mono text-xs md:text-sm font-semibold text-ink border border-line px-4 py-2.5">
            {stage}
          </span>
          {i < stages.length - 1 && (
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" className="text-accent shrink-0" aria-hidden="true">
              <path d="M0 6h15M11 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      ))}
    </div>
  )
}
