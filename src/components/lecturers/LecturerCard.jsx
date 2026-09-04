import { GraduationCap, UserRound } from 'lucide-react'
import Badge from '../common/Badge.jsx'
import Card from '../common/Card.jsx'

function LecturerPhoto({ lecturer }) {
  if (lecturer.photo) {
    return (
      <img
        src={lecturer.photo}
        alt={`Foto ${lecturer.name}`}
        className="mx-auto mt-6 size-44 rounded-full border-4 border-white bg-neutral-100 object-cover object-center sm:size-48 shadow-sm"
        loading="lazy"
      />
    )
  }

  return (
    <div
      className="mx-auto mt-6 grid size-44 place-items-center rounded-full sm:size-48 bg-brand-50 text-brand-700"
      role="img"
      aria-label={`Foto ${lecturer.name} belum tersedia`}
    >
      <UserRound aria-hidden="true" size={44} strokeWidth={1.5} />
    </div>
  )
}

function LecturerCard({ lecturer }) {
  const isDoctor = lecturer.degree.includes('Dr.')

  return (
    <Card as="article" className="overflow-hidden p-0">
      <LecturerPhoto lecturer={lecturer} />
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="text-lg font-bold leading-6 text-neutral-900">{lecturer.name}</h2>
          {isDoctor && (
            <Badge aria-label="Dosen bergelar doktor">
              <GraduationCap aria-hidden="true" className="mr-1" size={14} />
              Doktor
            </Badge>
          )}
        </div>
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
