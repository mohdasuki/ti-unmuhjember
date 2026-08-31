import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../common/Button.jsx'
import Container from '../common/Container.jsx'

function ContactCta() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="rounded-3xl bg-brand-700 px-6 py-10 text-white sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Butuh informasi lebih lanjut?</h2>
            <p className="mt-3 leading-7 text-brand-100">Temukan alamat, telepon, email, dan kanal resmi Universitas Muhammadiyah Jember.</p>
          </div>
          <Button as={Link} to="/kontak" variant="secondary" className="mt-7 shrink-0 lg:mt-0">
            Lihat kontak
            <ArrowRight aria-hidden="true" size={17} />
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default ContactCta
