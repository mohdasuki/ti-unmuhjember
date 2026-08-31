import { ArrowDown, ArrowRight } from 'lucide-react'

function StageTimeline({ stages, className = '' }) {
  return (
    <ol className={`grid gap-3 md:grid-cols-3 md:gap-8 ${className}`}>
      {stages.map((stage, index) => (
        <li key={stage.name} className="relative">
          <div className="flex min-h-28 items-center gap-4 rounded-2xl border border-brand-200 bg-brand-50 p-5 md:block md:min-h-36">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-700 text-sm font-bold text-white">
              {index + 1}
            </span>
            <div className="md:mt-5">
              <p className="text-xs font-semibold tracking-wide text-brand-700 uppercase">Tahap {index + 1}</p>
              <h3 className="mt-1 text-lg font-bold text-neutral-950">{stage.name}</h3>
              {stage.description && <p className="mt-2 text-sm text-neutral-600">{stage.description}</p>}
            </div>
          </div>
          {index < stages.length - 1 && (
            <>
              <ArrowDown aria-hidden="true" className="mx-auto my-2 text-brand-500 md:hidden" size={20} />
              <ArrowRight
                aria-hidden="true"
                className="absolute top-1/2 -right-6 hidden -translate-y-1/2 text-brand-500 md:block"
                size={20}
              />
            </>
          )}
        </li>
      ))}
    </ol>
  )
}

export default StageTimeline
