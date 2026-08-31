import { useState } from 'react'
import JourneyDetails from '../components/journey/JourneyDetails.jsx'
import JourneySelector from '../components/journey/JourneySelector.jsx'
import Container from '../components/common/Container.jsx'
import PageHeader from '../components/common/PageHeader.jsx'
import { academicJourney } from '../data/academicJourney.js'
import { curriculum } from '../data/curriculum.js'

function AcademicJourneyPage() {
  const [selectedSemester, setSelectedSemester] = useState(1)
  const journey = academicJourney.find((item) => item.semester === selectedSemester)
  const semesterCurriculum = curriculum.find((item) => item.semester === selectedSemester)

  return (
    <>
      <PageHeader
        eyebrow="Academic Journey"
        title="Perjalanan Studi Semester 1–8"
        description="Pahami perubahan fokus belajar, kompetensi yang dibangun, milestone, dan persiapan setiap tahap perjalanan kuliah. Narasi ini membantu membaca kurikulum, bukan menggantikan ketentuan akademik resmi."
      />
      <Container className="py-10 sm:py-14 lg:py-16">
        <JourneySelector
          journeys={academicJourney}
          selectedSemester={selectedSemester}
          onSelect={setSelectedSemester}
        />
        <JourneyDetails journey={journey} curriculum={semesterCurriculum} />
      </Container>
    </>
  )
}

export default AcademicJourneyPage
