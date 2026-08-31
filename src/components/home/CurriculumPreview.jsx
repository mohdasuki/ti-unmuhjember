import { ArrowRight, BookMarked } from 'lucide-react'
import { Link } from 'react-router-dom'
import { curriculum } from '../../data/curriculum.js'
import Badge from '../common/Badge.jsx'
import Button from '../common/Button.jsx'
import Container from '../common/Container.jsx'
import SectionHeader from '../common/SectionHeader.jsx'

const courses = curriculum.flatMap((item) => item.courses)
const electiveCount = courses.filter((course) => course.category === 'pilihan').length

function CurriculumPreview() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Kurikulum"
              title="Struktur mata kuliah Semester 1–8"
              description="Telusuri kode, nama, bobot SKS, dan kategori setiap mata kuliah berdasarkan data kurikulum yang tersedia."
            />
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge>{curriculum.length} semester</Badge>
              <Badge variant="neutral">{courses.length} mata kuliah tercantum</Badge>
              <Badge variant="neutral">{electiveCount} mata kuliah pilihan</Badge>
            </div>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-neutral-600">
              Semester 6 dan 7 memuat pilihan. Seluruh mata kuliah pilihan yang tercantum tidak berarti wajib diambil semuanya.
            </p>
            <Button as={Link} to="/kurikulum" className="mt-7">
              Buka kurikulum
              <ArrowRight aria-hidden="true" size={17} />
            </Button>
          </div>
          <div className="rounded-3xl bg-brand-950 p-6 text-white sm:p-8">
            <BookMarked aria-hidden="true" className="text-brand-300" size={30} />
            <p className="mt-8 text-sm font-semibold text-brand-200">Perjalanan kurikulum</p>
            <p className="mt-2 text-2xl font-bold">Dari fondasi hingga Tugas Akhir</p>
            <div className="mt-6 grid grid-cols-4 gap-2" aria-label="Semester 1 sampai 8">
              {curriculum.map((item) => (
                <span key={item.semester} className="grid aspect-square place-items-center rounded-xl bg-white/10 text-sm font-semibold">
                  {item.semester}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CurriculumPreview
