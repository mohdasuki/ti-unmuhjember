import ServiceCard from '../components/services/ServiceCard.jsx'
import Badge from '../components/common/Badge.jsx'
import Container from '../components/common/Container.jsx'
import PageHeader from '../components/common/PageHeader.jsx'
import { serviceCategories } from '../data/services.js'

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Layanan"
        title="Layanan Akademik"
        description="Kategori layanan dan dokumen pendukung Program Studi Teknik Informatika. Tautan resmi akan ditambahkan setelah tersedia."
      >
        <Badge variant="neutral">{serviceCategories.length} kategori layanan</Badge>
      </PageHeader>
      <Container className="py-10 sm:py-14 lg:py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <p className="mt-8 rounded-2xl bg-neutral-100 p-4 text-sm leading-6 text-neutral-600">
          Belum ada tautan panduan, formulir, SOP, atau dokumen layanan resmi yang tersedia pada halaman ini.
        </p>
      </Container>
    </>
  )
}

export default ServicesPage
