import { Info } from 'lucide-react'
import { useState } from 'react'
import CourseList from '../components/curriculum/CourseList.jsx'
import SemesterSelector from '../components/curriculum/SemesterSelector.jsx'
import Badge from '../components/common/Badge.jsx'
import Container from '../components/common/Container.jsx'
import PageHeader from '../components/common/PageHeader.jsx'
import { curriculum } from '../data/curriculum.js'

function CurriculumPage() {
  const [selectedSemester, setSelectedSemester] = useState(1)
  const semesterData = curriculum.find((item) => item.semester === selectedSemester)
  const electiveCount = semesterData.courses.filter((course) => course.category === 'pilihan').length
  const hasElectives = electiveCount > 0

  return (
    <>
      <PageHeader
        eyebrow="Kurikulum"
        title="Struktur Mata Kuliah Semester 1–8"
        description="Lihat kode, nama, bobot SKS, dan kategori mata kuliah berdasarkan struktur kurikulum Program Studi Teknik Informatika yang tersedia."
      />
      <Container className="py-10 sm:py-14 lg:py-16">
        <SemesterSelector
          semesters={curriculum}
          selectedSemester={selectedSemester}
          onSelect={setSelectedSemester}
        />

        <section className="mt-9" aria-labelledby="semester-heading">
          <div className="flex flex-col gap-5 border-b border-neutral-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-brand-700">Kurikulum semester terpilih</p>
              <h2 id="semester-heading" className="mt-2 text-2xl font-bold text-neutral-950 sm:text-3xl">
                Semester {semesterData.semester}
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                {semesterData.courses.length} mata kuliah tercantum
                {hasElectives && ` · ${electiveCount} mata kuliah pilihan`}
              </p>
            </div>
            <div className="rounded-xl bg-brand-50 px-4 py-3 text-brand-900 ring-1 ring-brand-100">
              <span className="block text-xs font-medium">
                {hasElectives ? 'Jumlah seluruh SKS tercantum' : 'Total semester'}
              </span>
              <strong className="mt-1 block text-xl">{semesterData.totalSKS} SKS</strong>
            </div>
          </div>

          {hasElectives && (
            <div className="mt-6 flex gap-3 rounded-2xl border border-brand-200 bg-brand-50 p-4 text-sm leading-6 text-brand-950">
              <Info aria-hidden="true" className="mt-0.5 shrink-0 text-brand-700" size={20} />
              <p>
                Semester {semesterData.semester} memuat mata kuliah pilihan. Total {semesterData.totalSKS} SKS adalah jumlah seluruh mata kuliah yang tercantum, bukan beban yang harus diambil seluruhnya oleh setiap mahasiswa.
              </p>
            </div>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-2" aria-label="Keterangan kategori mata kuliah">
            <span className="mr-1 text-sm text-neutral-500">Kategori:</span>
            <Badge variant="neutral">Wajib</Badge>
            <Badge>Pilihan</Badge>
          </div>

          <CourseList courses={semesterData.courses} />
        </section>
      </Container>
    </>
  )
}

export default CurriculumPage
