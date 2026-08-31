import ActivitiesPreview from '../components/home/ActivitiesPreview.jsx'
import AcademicMilestonesPreview from '../components/home/AcademicMilestonesPreview.jsx'
import ContactCta from '../components/home/ContactCta.jsx'
import CurriculumPreview from '../components/home/CurriculumPreview.jsx'
import ExploreProgram from '../components/home/ExploreProgram.jsx'
import GraduationTarget from '../components/home/GraduationTarget.jsx'
import HeroSection from '../components/home/HeroSection.jsx'
import JourneyPreview from '../components/home/JourneyPreview.jsx'
import LecturersPreview from '../components/home/LecturersPreview.jsx'

function HomePage() {
  return (
    <>
      <HeroSection />
      <JourneyPreview />
      <GraduationTarget />
      <ExploreProgram />
      <CurriculumPreview />
      <AcademicMilestonesPreview />
      <ActivitiesPreview />
      <LecturersPreview />
      <ContactCta />
    </>
  )
}

export default HomePage
