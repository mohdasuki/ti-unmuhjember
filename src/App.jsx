import { Route, Routes } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout.jsx'
import AcademicJourneyPage from './pages/AcademicJourneyPage.jsx'
import ActivitiesPage from './pages/ActivitiesPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import CurriculumPage from './pages/CurriculumPage.jsx'
import FinalProjectPage from './pages/FinalProjectPage.jsx'
import HomePage from './pages/HomePage.jsx'
import InternshipPage from './pages/InternshipPage.jsx'
import LecturersPage from './pages/LecturersPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="perjalanan-studi" element={<AcademicJourneyPage />} />
        <Route path="kurikulum" element={<CurriculumPage />} />
        <Route path="dosen" element={<LecturersPage />} />
        <Route path="pkl" element={<InternshipPage />} />
        <Route path="tugas-akhir" element={<FinalProjectPage />} />
        <Route path="aktivitas" element={<ActivitiesPage />} />
        <Route path="layanan" element={<ServicesPage />} />
        <Route path="kontak" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
