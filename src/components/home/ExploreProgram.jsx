import { ArrowRight, BookOpen, FileText, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import Card from '../common/Card.jsx'
import Container from '../common/Container.jsx'
import SectionHeader from '../common/SectionHeader.jsx'

const links = [
  { icon: BookOpen, title: 'Kurikulum', description: 'Pelajari struktur mata kuliah Semester 1–8.', to: '/kurikulum' },
  { icon: Users, title: 'Dosen', description: 'Kenali dosen Program Studi Teknik Informatika.', to: '/dosen' },
  { icon: FileText, title: 'Layanan', description: 'Lihat kategori layanan akademik yang disiapkan.', to: '/layanan' },
]

function ExploreProgram() {
  return (
    <section className="bg-neutral-50 py-16 sm:py-20">
      <Container>
        <SectionHeader title="Jelajahi informasi program studi" description="Akses informasi utama sesuai kebutuhanmu." />
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {links.map(({ icon: Icon, ...item }) => (
            <Card key={item.to} as={Link} to={item.to} className="group transition hover:-translate-y-0.5 hover:border-brand-200">
              <Icon aria-hidden="true" className="text-brand-700" size={24} />
              <h3 className="mt-5 text-lg font-bold text-neutral-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">{item.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
                Buka halaman <ArrowRight aria-hidden="true" size={16} className="transition group-hover:translate-x-1" />
              </span>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ExploreProgram
