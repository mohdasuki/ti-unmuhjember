function SemesterSelector({ semesters, selectedSemester, onSelect }) {
  return (
    <nav aria-label="Pilih semester kurikulum">
      <p className="mb-3 text-sm font-semibold text-neutral-800">Pilih semester</p>
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
        {semesters.map((item) => {
          const isSelected = item.semester === selectedSemester

          return (
            <button
              key={item.semester}
              type="button"
              className={`min-h-11 rounded-xl border px-3 py-2 text-sm font-semibold transition-colors ${
                isSelected
                  ? 'border-brand-700 bg-brand-700 text-white'
                  : 'border-neutral-200 bg-white text-neutral-600 hover:border-brand-200 hover:bg-brand-50'
              }`}
              aria-pressed={isSelected}
              aria-controls="curriculum-course-list"
              onClick={() => onSelect(item.semester)}
            >
              Semester {item.semester}
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export default SemesterSelector
