import { ArrowRight, BookOpen, GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { academicJourney } from '../../data/academicJourney.js'
import { finalProject } from '../../data/finalProject.js'
import { graduationRequirements } from '../../data/graduation.js'
import { internship } from '../../data/internship.js'
import Button from '../common/Button.jsx'
import Container from '../common/Container.jsx'

const highlights = [
  { value: academicJourney.length, label: 'Semester perjalanan studi' },
  { value: graduationRequirements.minimumCredits, label: 'SKS minimum kelulusan' },
  { value: `Semester ${internship.earliestSemester}`, label: `${internship.shortName} dimulai` },
  { value: `${finalProject.credits} SKS`, label: finalProject.name },
]

function HeroSection() {
  return (
    <section
      className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="hero-title"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1.5 text-sm font-semibold text-brand-800 ring-1 ring-brand-200">
              <GraduationCap aria-hidden="true" size={17} />
              Untuk calon mahasiswa dan mahasiswa aktif
            </p>
            <h1
              id="hero-title"
              className="text-balance text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl lg:leading-[1.08]"
            >
              Kenali perjalanan kuliahmu di Teknik Informatika
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-neutral-600">
              Panduan memahami perjalanan studi Semester 1–8, kurikulum, PKL, dan Tugas Akhir di Program Studi Teknik Informatika Universitas Muhammadiyah Jember.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button as={Link} to="/perjalanan-studi" size="lg">
                Jelajahi Perjalanan Studi
                <ArrowRight aria-hidden="true" size={18} />
              </Button>
              <Button as={Link} to="/kurikulum" variant="secondary" size="lg">
                <BookOpen aria-hidden="true" size={18} />
                Lihat Kurikulum
              </Button>
            </div>
          </div>

          <div className="relative">
            <div aria-hidden="true" className="absolute -inset-8 -z-10 rounded-full bg-brand-50 blur-3xl" />
            <dl className="grid grid-cols-2 gap-3 rounded-3xl border border-brand-100 bg-brand-50/60 p-4 sm:gap-4 sm:p-6">
              {highlights.map((item) => (
                <div key={item.label} className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm sm:p-5">
                  <dt className="order-2 mt-2 text-sm leading-5 text-neutral-600">{item.label}</dt>
                  <dd className="order-1 text-2xl font-bold tracking-tight text-brand-800 sm:text-3xl">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
