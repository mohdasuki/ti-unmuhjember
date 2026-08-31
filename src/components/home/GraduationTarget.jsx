import { BookCheck, BriefcaseBusiness, GraduationCap, ScrollText } from 'lucide-react'
import { finalProject } from '../../data/finalProject.js'
import { graduationRequirements } from '../../data/graduation.js'
import { internship } from '../../data/internship.js'
import Container from '../common/Container.jsx'
import SectionHeader from '../common/SectionHeader.jsx'

const requirements = [
  graduationRequirements.mandatoryProgramCoursesRequired && {
    icon: BookCheck,
    label: 'Lulus seluruh mata kuliah wajib Program Studi',
  },
  graduationRequirements.mandatoryUniversityCoursesRequired && {
    icon: GraduationCap,
    label: 'Lulus seluruh mata kuliah wajib Universitas',
  },
  { icon: BriefcaseBusiness, label: `${internship.name}, ${internship.credits} SKS` },
  { icon: ScrollText, label: `${finalProject.name}, ${finalProject.credits} SKS` },
].filter(Boolean)

function GraduationTarget() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <SectionHeader eyebrow="Target Kelulusan" title={`Minimum ${graduationRequirements.minimumCredits} SKS`} />
            <p className="mt-4 text-sm leading-6 text-neutral-600">
              Memenuhi minimum SKS saja tidak otomatis menjamin kelulusan. Seluruh ketentuan akademik yang berlaku tetap harus dipenuhi.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {requirements.map(({ icon: Icon, label }) => (
              <li key={label} className="flex gap-3 rounded-2xl border border-neutral-200 p-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon aria-hidden="true" size={20} />
                </span>
                <span className="self-center text-sm font-medium leading-6 text-neutral-800">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default GraduationTarget
