import Badge from '../common/Badge.jsx'
import Card from '../common/Card.jsx'
import { activityIcons } from './activityIcons.js'

function ActivityCategoryCard({ activity }) {
  const Icon = activityIcons[activity.id]

  return (
    <Card as="article" className="shadow-none">
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
          <Icon aria-hidden="true" size={21} />
        </span>
        <Badge variant="neutral">Belum tersedia</Badge>
      </div>
      <h2 className="mt-5 text-lg font-bold text-neutral-900">{activity.name}</h2>
      <p className="mt-2 text-sm leading-6 text-neutral-600">{activity.description}</p>
    </Card>
  )
}

export default ActivityCategoryCard
