import { processStages } from '../data/process'

export default function ProcessStepper({ variant = 'compact' }) {
  const detailed = variant === 'detailed'

  return (
    <ol className={`grid grid-cols-1 sm:grid-cols-2 ${detailed ? 'lg:grid-cols-3' : 'lg:grid-cols-6'} gap-px bg-line border border-line`}>
      {processStages.map((stage) => (
        <li key={stage.number} className="bg-paper p-6 md:p-8 flex flex-col">
          <span className="label-mono text-xs text-accent font-semibold">{stage.number}</span>
          <span className="mt-3 text-lg font-bold">{stage.title}</span>
          <span className="mt-2 text-sm text-graphite leading-relaxed">
            {detailed ? stage.detail : stage.short}
          </span>
        </li>
      ))}
    </ol>
  )
}
