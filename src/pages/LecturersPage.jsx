import LecturerCard from '../components/lecturers/LecturerCard.jsx'
import Badge from '../components/common/Badge.jsx'
import Container from '../components/common/Container.jsx'
import PageHeader from '../components/common/PageHeader.jsx'
import { lecturers } from '../data/lecturers.js'

function LecturersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dosen"
        title="Dosen Teknik Informatika"
        description="Kenali dosen Program Studi Teknik Informatika Universitas Muhammadiyah Jember berdasarkan data yang tersedia."
      >
        <Badge variant="neutral">{lecturers.length} dosen tercantum</Badge>
      </PageHeader>
      <Container className="py-10 sm:py-14 lg:py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {lecturers.map((lecturer) => (
            <LecturerCard key={lecturer.id} lecturer={lecturer} />
          ))}
        </div>
      </Container>
    </>
  )
}

export default LecturersPage
