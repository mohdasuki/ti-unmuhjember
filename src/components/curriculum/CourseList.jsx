import Badge from '../common/Badge.jsx'

function CategoryBadge({ category }) {
  return (
    <Badge variant={category === 'pilihan' ? 'brand' : 'neutral'}>
      {category === 'pilihan' ? 'Pilihan' : 'Wajib'}
    </Badge>
  )
}

function CourseList({ courses }) {
  return (
    <div id="curriculum-course-list" className="mt-6" aria-live="polite">
      <div className="hidden overflow-hidden rounded-2xl border border-neutral-200 md:block">
        <table className="w-full border-collapse text-left">
          <thead className="bg-neutral-50 text-xs tracking-wide text-neutral-500 uppercase">
            <tr>
              <th scope="col" className="px-5 py-4 font-semibold">Kode</th>
              <th scope="col" className="px-5 py-4 font-semibold">Mata kuliah</th>
              <th scope="col" className="px-5 py-4 text-center font-semibold">SKS</th>
              <th scope="col" className="px-5 py-4 font-semibold">Kategori</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200 bg-white">
            {courses.map((course) => (
              <tr key={course.code} className={course.category === 'pilihan' ? 'bg-brand-50/40' : ''}>
                <td className="px-5 py-4 font-mono text-sm text-neutral-600">{course.code}</td>
                <th scope="row" className="px-5 py-4 text-sm font-semibold text-neutral-900">{course.name}</th>
                <td className="px-5 py-4 text-center text-sm font-semibold text-neutral-700">{course.credits}</td>
                <td className="px-5 py-4"><CategoryBadge category={course.category} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="grid gap-3 md:hidden">
        {courses.map((course) => (
          <li
            key={course.code}
            className={`rounded-2xl border p-4 ${
              course.category === 'pilihan'
                ? 'border-brand-200 bg-brand-50/60'
                : 'border-neutral-200 bg-white'
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <code className="text-xs font-semibold text-neutral-500">{course.code}</code>
              <CategoryBadge category={course.category} />
            </div>
            <h3 className="mt-3 text-sm font-bold leading-6 text-neutral-900">{course.name}</h3>
            <p className="mt-2 text-sm text-neutral-600">{course.credits} SKS</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseList
