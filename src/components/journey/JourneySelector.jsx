function JourneySelector({ journeys, selectedSemester, onSelect }) {
  return (
    <nav aria-label="Pilih semester perjalanan studi">
      <ol className="grid gap-2 lg:grid-cols-8">
        {journeys.map((journey) => {
          const isSelected = journey.semester === selectedSemester

          return (
            <li key={journey.semester}>
              <button
                type="button"
                className={`flex min-h-14 w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors lg:min-h-24 lg:flex-col lg:justify-center lg:gap-2 lg:px-2 lg:text-center ${
                  isSelected
                    ? 'border-brand-700 bg-brand-700 text-white shadow-sm'
                    : 'border-neutral-200 bg-white text-neutral-600 hover:border-brand-200 hover:bg-brand-50'
                }`}
                aria-current={isSelected ? 'step' : undefined}
                aria-controls="journey-details"
                onClick={() => onSelect(journey.semester)}
              >
                <span
                  className={`grid size-8 shrink-0 place-items-center rounded-full text-sm font-bold ${
                    isSelected ? 'bg-white text-brand-800' : 'bg-neutral-100 text-neutral-700'
                  }`}
                >
                  {journey.semester}
                </span>
                <span className="text-sm font-semibold">Semester {journey.semester}</span>
              </button>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default JourneySelector
