import Badge from './Badge.jsx'
import Card from './Card.jsx'

function PendingInfoCard({ icon: Icon, title, description }) {
  return (
    <Card className="shadow-none">
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-neutral-100 text-neutral-600">
          <Icon aria-hidden="true" size={21} />
        </span>
        <Badge variant="neutral">Belum tersedia</Badge>
      </div>
      <h3 className="mt-5 text-lg font-bold text-neutral-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-neutral-600">{description}</p>
    </Card>
  )
}

export default PendingInfoCard
