import { ExternalLink, Globe2, Mail, MapPin, Phone } from 'lucide-react'
import Card from '../components/common/Card.jsx'
import Container from '../components/common/Container.jsx'
import PageHeader from '../components/common/PageHeader.jsx'
import SectionHeader from '../components/common/SectionHeader.jsx'
import { contact } from '../data/contact.js'

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kontak"
        title="Hubungi Universitas Muhammadiyah Jember"
        description="Gunakan informasi kontak resmi yang tersedia untuk menghubungi Universitas Muhammadiyah Jember."
      />

      <Container className="py-10 sm:py-14 lg:py-16">
        <section aria-labelledby="official-contact-title">
          <SectionHeader
            titleId="official-contact-title"
            title="Kontak resmi"
            description="Alamat, telepon, email, dan situs resmi universitas."
          />

          <address className="mt-8 grid gap-4 not-italic sm:grid-cols-2 lg:grid-cols-4">
            <Card className="shadow-none">
              <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <MapPin aria-hidden="true" size={21} />
              </span>
              <h2 className="mt-5 font-bold text-neutral-900">Alamat</h2>
              <p className="mt-2 text-sm leading-6 text-neutral-600">{contact.address}</p>
            </Card>

            <Card as="a" href={contact.phoneHref} className="group shadow-none transition hover:border-brand-200 hover:bg-brand-50/40">
              <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <Phone aria-hidden="true" size={21} />
              </span>
              <h2 className="mt-5 font-bold text-neutral-900">Telepon</h2>
              <p className="mt-2 text-sm text-brand-700 group-hover:text-brand-800">{contact.phone}</p>
            </Card>

            <Card as="a" href={`mailto:${contact.email}`} className="group shadow-none transition hover:border-brand-200 hover:bg-brand-50/40">
              <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <Mail aria-hidden="true" size={21} />
              </span>
              <h2 className="mt-5 font-bold text-neutral-900">Email</h2>
              <p className="mt-2 break-words text-sm text-brand-700 group-hover:text-brand-800">{contact.email}</p>
            </Card>

            <Card
              as="a"
              href={contact.website}
              target="_blank"
              rel="noreferrer"
              className="group shadow-none transition hover:border-brand-200 hover:bg-brand-50/40"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <Globe2 aria-hidden="true" size={21} />
                </span>
                <ExternalLink aria-hidden="true" className="text-neutral-400" size={17} />
              </div>
              <h2 className="mt-5 font-bold text-neutral-900">Situs universitas</h2>
              <p className="mt-2 text-sm text-brand-700 group-hover:text-brand-800">unmuhjember.ac.id</p>
              <span className="sr-only">, dibuka di tab baru</span>
            </Card>
          </address>
        </section>
      </Container>
    </>
  )
}

export default ContactPage
