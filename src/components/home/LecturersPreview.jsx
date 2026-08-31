import { ArrowRight, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { lecturers } from '../../data/lecturers.js'
import Button from '../common/Button.jsx'
import Container from '../common/Container.jsx'
import SectionHeader from '../common/SectionHeader.jsx'

function LecturersPreview() {
  return (
    <section className="bg-neutral-50 py-16 sm:py-20">
      <Container>
        <SectionHeader title="Dosen Teknik Informatika" description={`Kenali ${lecturers.length} dosen yang tercantum dalam data Program Studi Teknik Informatika.`} />
        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {lecturers.slice(0, 4).map((lecturer) => (
            <article key={lecturer.id} className="rounded-2xl border border-neutral-200 bg-white p-5">
              <span className="grid size-11 place-items-center rounded-full bg-brand-50 text-brand-700">
                <UserRound aria-hidden="true" size={21} />
              </span>
              <h3 className="mt-4 font-bold text-neutral-900">{lecturer.name}</h3>
              <p className="mt-1 text-sm text-neutral-500">{lecturer.degree}</p>
            </article>
          ))}
        </div>
        <Button as={Link} to="/dosen" variant="secondary" className="mt-8">
          Lihat semua dosen
          <ArrowRight aria-hidden="true" size={17} />
        </Button>
      </Container>
    </section>
  )
}

export default LecturersPreview
