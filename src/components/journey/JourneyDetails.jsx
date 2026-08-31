import { ArrowRight, BookOpen, CheckCircle2, Flag, Lightbulb, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import Badge from '../common/Badge.jsx'
import Button from '../common/Button.jsx'

function DetailList({ icon: Icon, title, items }) {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6">
      <div className="flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-xl bg-brand-50 text-brand-700">
          <Icon aria-hidden="true" size={20} />
        </span>
        <h3 className="font-bold text-neutral-900">{title}</h3>
      </div>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-neutral-600">
            <CheckCircle2 aria-hidden="true" className="mt-1 shrink-0 text-brand-600" size={16} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function CourseSummary({ curriculum }) {
  const mandatoryCount = curriculum.courses.filter((course) => course.category === 'wajib').length
  const electiveCount = curriculum.courses.filter((course) => course.category === 'pilihan').length
  const hasElectives = electiveCount > 0

  return (
    <aside className="rounded-2xl bg-neutral-950 p-5 text-white sm:p-6" aria-labelledby="course-summary-title">
      <BookOpen aria-hidden="true" className="text-brand-300" size={24} />
      <h3 id="course-summary-title" className="mt-4 font-bold">Ringkasan kurikulum</h3>
      <dl className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-white/10 p-3">
          <dt className="text-xs text-neutral-400">Mata kuliah wajib</dt>
          <dd className="mt-1 text-2xl font-bold">{mandatoryCount}</dd>
        </div>
        <div className="rounded-xl bg-white/10 p-3">
          <dt className="text-xs text-neutral-400">Mata kuliah pilihan</dt>
          <dd className="mt-1 text-2xl font-bold">{electiveCount}</dd>
        </div>
      </dl>
      {hasElectives ? (
        <p className="mt-4 text-sm leading-6 text-neutral-300">
          Semester ini memuat mata kuliah pilihan. Seluruh pilihan yang tercantum tidak berarti harus diambil semuanya.
        </p>
      ) : (
        <p className="mt-4 text-sm text-neutral-300">Total mata kuliah tercantum: {curriculum.totalSKS} SKS.</p>
      )}
      <Button as={Link} to="/kurikulum" variant="secondary" size="sm" className="mt-5 w-full">
        Lihat rincian kurikulum
        <ArrowRight aria-hidden="true" size={16} />
      </Button>
    </aside>
  )
}

function JourneyDetails({ journey, curriculum }) {
  return (
    <article id="journey-details" className="mt-8 scroll-mt-28" aria-live="polite">
      <div className="rounded-3xl border border-brand-100 bg-brand-50 p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_19rem] lg:items-start">
          <div>
            <Badge>Semester {journey.semester}</Badge>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl lg:text-4xl">
              {journey.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-700 sm:text-lg">
              {journey.focus}
            </p>
          </div>
          <CourseSummary curriculum={curriculum} />
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <DetailList icon={Sparkles} title="Kompetensi yang dibangun" items={journey.competencies} />
        <DetailList icon={Lightbulb} title="Aktivitas rekomendasi" items={journey.recommendedActivities} />
        <DetailList icon={Flag} title="Milestone" items={journey.milestones} />
      </div>

      <section className="mt-6 flex gap-4 rounded-2xl border border-brand-200 bg-white p-5 sm:p-6">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
          <ArrowRight aria-hidden="true" size={20} />
        </span>
        <div>
          <h3 className="font-bold text-neutral-900">Persiapan berikutnya</h3>
          <p className="mt-2 text-sm leading-6 text-neutral-600">{journey.nextPreparation}</p>
        </div>
      </section>
    </article>
  )
}

export default JourneyDetails
