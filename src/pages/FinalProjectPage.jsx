import { BookOpenCheck, CalendarRange, FileText } from 'lucide-react'
import Card from '../components/common/Card.jsx'
import Container from '../components/common/Container.jsx'
import PageHeader from '../components/common/PageHeader.jsx'
import PendingInfoCard from '../components/common/PendingInfoCard.jsx'
import SectionHeader from '../components/common/SectionHeader.jsx'
import StageTimeline from '../components/common/StageTimeline.jsx'
import { finalProject } from '../data/finalProject.js'

function FinalProjectPage() {
  return (
    <>
      <PageHeader
        eyebrow="Penyelesaian Studi"
        title={finalProject.name}
        description="Informasi utama dan tahapan Tugas Akhir Program Studi Teknik Informatika berdasarkan data resmi yang tersedia."
      />

      <Container className="py-10 sm:py-14 lg:py-16">
        <section aria-labelledby="final-project-information-title">
          <SectionHeader
            titleId="final-project-information-title"
            title="Informasi utama Tugas Akhir"
            description="Tugas Akhir merupakan mata kuliah yang tercantum pada Semester 8. Bimbingan dapat dimulai sejak Semester 6."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Card className="flex items-center gap-4 shadow-none">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <BookOpenCheck aria-hidden="true" size={24} />
              </span>
              <div>
                <p className="text-sm text-neutral-500">Bobot mata kuliah</p>
                <p className="mt-1 text-xl font-bold text-neutral-900">{finalProject.credits} SKS</p>
              </div>
            </Card>
            <Card className="flex items-center gap-4 shadow-none">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <CalendarRange aria-hidden="true" size={24} />
              </span>
              <div>
                <p className="text-sm text-neutral-500">Bimbingan dapat dimulai</p>
                <p className="mt-1 text-xl font-bold text-neutral-900">Semester {finalProject.mentoringEarliestSemester}</p>
              </div>
            </Card>
          </div>
        </section>

        <section className="mt-16 sm:mt-20" aria-labelledby="final-project-stages-title">
          <SectionHeader
            titleId="final-project-stages-title"
            eyebrow="Tahapan"
            title="Perjalanan Tugas Akhir"
            description="Tiga tahap Tugas Akhir yang tersedia dalam informasi akademik."
          />
          <StageTimeline stages={finalProject.stages} className="mt-8" />
        </section>

        <section className="mt-16 sm:mt-20" aria-labelledby="final-project-administration-title">
          <SectionHeader
            titleId="final-project-administration-title"
            title="Informasi administratif"
            description="Rincian administratif hanya akan ditampilkan setelah informasi resmi tersedia."
          />
          <div className="mt-8 max-w-xl">
            <PendingInfoCard
              icon={FileText}
              title="Persyaratan dan dokumen"
              description="Persyaratan, formulir, dokumen, dan jadwal resmi Tugas Akhir belum tersedia."
            />
          </div>
        </section>
      </Container>
    </>
  )
}

export default FinalProjectPage
