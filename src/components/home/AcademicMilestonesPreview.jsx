import { ArrowRight, BriefcaseBusiness, ScrollText } from 'lucide-react'
import { Link } from 'react-router-dom'
import { finalProject } from '../../data/finalProject.js'
import { internship } from '../../data/internship.js'
import Button from '../common/Button.jsx'
import Card from '../common/Card.jsx'
import Container from '../common/Container.jsx'
import SectionHeader from '../common/SectionHeader.jsx'

function AcademicMilestonesPreview() {
  return (
    <section className="bg-neutral-50 py-16 sm:py-20">
      <Container>
        <SectionHeader title="Milestone menjelang akhir studi" description="Kenali informasi utama PKL dan Tugas Akhir yang telah tersedia." />
        <div className="mt-9 grid gap-4 md:grid-cols-2">
          <Card>
            <BriefcaseBusiness aria-hidden="true" className="text-brand-700" size={26} />
            <h3 className="mt-5 text-xl font-bold text-neutral-900">{internship.name}</h3>
            <p className="mt-2 text-neutral-600">{internship.credits} SKS · Mulai Semester {internship.earliestSemester}</p>
            <Button as={Link} to="/pkl" variant="ghost" className="mt-5 -ml-4">
              Pelajari PKL <ArrowRight aria-hidden="true" size={17} />
            </Button>
          </Card>
          <Card>
            <ScrollText aria-hidden="true" className="text-brand-700" size={26} />
            <h3 className="mt-5 text-xl font-bold text-neutral-900">{finalProject.name}</h3>
            <p className="mt-2 text-neutral-600">{finalProject.credits} SKS · Bimbingan dapat dimulai Semester {finalProject.mentoringEarliestSemester}</p>
            <p className="mt-3 text-sm text-neutral-500">{finalProject.stages.map((stage) => stage.name).join(' → ')}</p>
            <Button as={Link} to="/tugas-akhir" variant="ghost" className="mt-5 -ml-4">
              Pelajari Tugas Akhir <ArrowRight aria-hidden="true" size={17} />
            </Button>
          </Card>
        </div>
      </Container>
    </section>
  )
}

export default AcademicMilestonesPreview
