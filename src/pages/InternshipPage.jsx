import { BookOpenCheck, CircleHelp, ClipboardList, FileText, GraduationCap } from 'lucide-react'
import Card from '../components/common/Card.jsx'
import Container from '../components/common/Container.jsx'
import PageHeader from '../components/common/PageHeader.jsx'
import PendingInfoCard from '../components/common/PendingInfoCard.jsx'
import SectionHeader from '../components/common/SectionHeader.jsx'
import { internship } from '../data/internship.js'

function InternshipPage() {
  return (
    <>
      <PageHeader
        eyebrow={internship.shortName}
        title={internship.name}
        description="Informasi akademik PKL Program Studi Teknik Informatika berdasarkan data resmi yang tersedia."
      />

      <Container className="py-10 sm:py-14 lg:py-16">
        <section aria-labelledby="pkl-introduction-title">
          <SectionHeader
            titleId="pkl-introduction-title"
            title="Informasi utama PKL"
            description="PKL tercantum dalam struktur kurikulum Semester 6. Informasi administratif akan ditambahkan setelah dokumen resmi tersedia."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Card className="flex items-center gap-4 shadow-none">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <BookOpenCheck aria-hidden="true" size={24} />
              </span>
              <div>
                <p className="text-sm text-neutral-500">Bobot mata kuliah</p>
                <p className="mt-1 text-xl font-bold text-neutral-900">{internship.credits} SKS</p>
              </div>
            </Card>
            <Card className="flex items-center gap-4 shadow-none">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <GraduationCap aria-hidden="true" size={24} />
              </span>
              <div>
                <p className="text-sm text-neutral-500">Mulai tersedia</p>
                <p className="mt-1 text-xl font-bold text-neutral-900">Semester {internship.earliestSemester}</p>
              </div>
            </Card>
          </div>
        </section>

        <section className="mt-16 sm:mt-20" aria-labelledby="pkl-details-title">
          <SectionHeader
            titleId="pkl-details-title"
            eyebrow="Panduan PKL"
            title="Informasi lanjutan"
            description="Bagian berikut disiapkan untuk informasi resmi yang belum tersedia."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <PendingInfoCard
              icon={ClipboardList}
              title="Alur PKL"
              description="Alur pendaftaran dan pelaksanaan resmi belum tersedia."
            />
            <PendingInfoCard
              icon={BookOpenCheck}
              title="Panduan"
              description="Panduan resmi PKL belum tersedia."
            />
            <PendingInfoCard
              icon={FileText}
              title="Dokumen yang diperlukan"
              description="Daftar formulir dan dokumen resmi belum tersedia."
            />
            <PendingInfoCard
              icon={CircleHelp}
              title="Pertanyaan umum"
              description="FAQ resmi PKL belum tersedia."
            />
          </div>
        </section>
      </Container>
    </>
  )
}

export default InternshipPage
