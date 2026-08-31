import Badge from '../common/Badge.jsx'
import Card from '../common/Card.jsx'
import { serviceIcons } from './serviceIcons.js'

function ServiceCard({ service }) {
  const Icon = serviceIcons[service.id]
  const isAvailable = service.resources.length > 0

  return (
    <Card as="article" className="shadow-none">
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
          <Icon aria-hidden="true" size={21} />
        </span>
        {!isAvailable && <Badge variant="neutral">Segera hadir</Badge>}
      </div>
      <h2 className="mt-5 text-lg font-bold text-neutral-900">{service.name}</h2>
      <p className="mt-2 text-sm leading-6 text-neutral-600">{service.description}</p>
    </Card>
  )
}

export default ServiceCard
