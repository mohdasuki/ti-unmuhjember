import { UserRound } from 'lucide-react'
import Badge from '../common/Badge.jsx'
import Card from '../common/Card.jsx'

function LecturerPhoto({ lecturer }) {
  if (lecturer.photo) {
    return (
      <img
        src={lecturer.photo}
        alt={`Foto ${lecturer.name}`}
        className="aspect-[4/3] w-full object-cover"
        loading="lazy"
      />
    )
  }

  return (
    <div
      className="grid aspect-[4/3] w-full place-items-center bg-brand-50 text-brand-700"
      role="img"
      aria-label={`Foto ${lecturer.name} belum tersedia`}
    >
      <UserRound aria-hidden="true" size={44} strokeWidth={1.5} />
    </div>
  )
}

function LecturerCard({ lecturer }) {
  return (
    <Card as="article" className="overflow-hidden p-0">
      <LecturerPhoto lecturer={lecturer} />
      <div className="p-5">
        <h2 className="text-lg font-bold leading-6 text-neutral-900">{lecturer.name}</h2>
        <p className="mt-1 text-sm text-neutral-500">{lecturer.degree}</p>

        {lecturer.nidn && (
          <p className="mt-4 text-sm text-neutral-600">
            <span className="font-semibold text-neutral-800">NIDN:</span> {lecturer.nidn}
          </p>
        )}

        {lecturer.expertise.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2" aria-label={`Bidang keahlian ${lecturer.name}`}>
            {lecturer.expertise.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        )}
      </div>
    </Card>
  )
}

export default LecturerCard
