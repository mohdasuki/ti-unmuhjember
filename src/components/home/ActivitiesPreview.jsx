import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { activityCategories } from '../../data/activities.js'
import { activityIcons } from '../activities/activityIcons.js'
import Button from '../common/Button.jsx'
import Container from '../common/Container.jsx'
import SectionHeader from '../common/SectionHeader.jsx'

function ActivitiesPreview() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow="Aktivitas Mahasiswa"
          title="Berkembang di luar ruang kelas"
          description="Kategori pengembangan mahasiswa. Informasi kegiatan resmi akan ditampilkan ketika tersedia."
        />
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {activityCategories.slice(0, 3).map((activity) => {
            const Icon = activityIcons[activity.id]
            return (
              <div key={activity.id} className="rounded-2xl border border-neutral-200 p-5">
                <Icon aria-hidden="true" className="text-brand-700" size={22} />
                <h3 className="mt-4 font-bold text-neutral-900">{activity.name}</h3>
                <p className="mt-2 text-sm text-neutral-500">{activity.description}</p>
              </div>
            )
          })}
        </div>
        <Button as={Link} to="/aktivitas" variant="secondary" className="mt-8">
          Lihat aktivitas
          <ArrowRight aria-hidden="true" size={17} />
        </Button>
      </Container>
    </section>
  )
}

export default ActivitiesPreview
