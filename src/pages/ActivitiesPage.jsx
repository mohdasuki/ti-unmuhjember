import ActivityCategoryCard from '../components/activities/ActivityCategoryCard.jsx'
import Container from '../components/common/Container.jsx'
import PageHeader from '../components/common/PageHeader.jsx'
import { activityCategories } from '../data/activities.js'

function ActivitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Aktivitas Mahasiswa"
        title="Berkembang di Luar Perkuliahan"
        description="Ruang informasi untuk kegiatan pengembangan mahasiswa. Detail kegiatan resmi akan ditampilkan setelah datanya tersedia."
      />
      <Container className="py-10 sm:py-14 lg:py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {activityCategories.map((activity) => (
            <ActivityCategoryCard key={activity.id} activity={activity} />
          ))}
        </div>
        <p className="mt-8 rounded-2xl bg-neutral-100 p-4 text-sm leading-6 text-neutral-600">
          Belum ada acara, jadwal, prestasi, atau dokumentasi resmi yang dipublikasikan pada halaman ini.
        </p>
      </Container>
    </>
  )
}

export default ActivitiesPage
