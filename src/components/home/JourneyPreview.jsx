import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { academicJourney } from '../../data/academicJourney.js'
import Button from '../common/Button.jsx'
import Container from '../common/Container.jsx'
import SectionHeader from '../common/SectionHeader.jsx'

function JourneyPreview() {
  return (
    <section className="bg-neutral-50 py-16 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow="Academic Journey"
          title="Delapan semester, satu perjalanan yang terarah"
          description="Lihat perubahan fokus belajar dari fondasi informatika hingga Tugas Akhir dan kelulusan."
        />
        <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {academicJourney.map((item) => (
            <li key={item.semester} className="rounded-2xl border border-neutral-200 bg-white p-5">
              <span className="text-sm font-semibold text-brand-700">Semester {item.semester}</span>
              <h3 className="mt-2 font-bold text-neutral-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">{item.focus}</p>
            </li>
          ))}
        </ol>
        <Button as={Link} to="/perjalanan-studi" variant="secondary" className="mt-8">
          Lihat perjalanan lengkap
          <ArrowRight aria-hidden="true" size={17} />
        </Button>
      </Container>
    </section>
  )
}

export default JourneyPreview
