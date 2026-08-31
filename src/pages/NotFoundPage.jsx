import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/common/Button.jsx'
import Container from '../components/common/Container.jsx'

function NotFoundPage() {
  return (
    <Container className="grid min-h-[60vh] place-items-center py-16 text-center">
      <div className="max-w-xl">
        <p className="text-sm font-semibold tracking-wide text-brand-700 uppercase">404</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
          Halaman tidak ditemukan
        </h1>
        <p className="mt-5 leading-7 text-neutral-600">
          Alamat yang Anda buka tidak tersedia. Kembali ke Beranda untuk melanjutkan menjelajahi informasi Teknik Informatika.
        </p>
        <Button as={Link} to="/" className="mt-8">
          <ArrowLeft aria-hidden="true" size={18} />
          Kembali ke Beranda
        </Button>
      </div>
    </Container>
  )
}

export default NotFoundPage
