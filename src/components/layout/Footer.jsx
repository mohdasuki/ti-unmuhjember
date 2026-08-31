import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { contact } from '../../data/contact.js'
import Container from '../common/Container.jsx'

function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-950 text-neutral-300">
      <Container className="py-10 sm:py-12">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="max-w-md">
            <p className="font-bold text-white">Program Studi Teknik Informatika</p>
            <p className="mt-1 text-sm text-neutral-400">Universitas Muhammadiyah Jember</p>
            <p className="mt-4 text-sm leading-6 text-neutral-400">
              Informasi perjalanan studi mahasiswa Teknik Informatika dari semester awal hingga lulus.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Kontak resmi</h2>
            <address className="mt-4 not-italic">
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <MapPin aria-hidden="true" className="mt-0.5 shrink-0 text-brand-300" size={18} />
                  <span>{contact.address}</span>
                </li>
                <li>
                  <a className="flex gap-3 hover:text-white" href={contact.phoneHref}>
                    <Phone aria-hidden="true" className="shrink-0 text-brand-300" size={18} />
                    <span>{contact.phone}</span>
                  </a>
                </li>
                <li>
                  <a className="flex gap-3 hover:text-white" href={`mailto:${contact.email}`}>
                    <Mail aria-hidden="true" className="shrink-0 text-brand-300" size={18} />
                    <span>{contact.email}</span>
                  </a>
                </li>
              </ul>
            </address>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <Link className="font-medium text-brand-200 hover:text-white" to="/kontak">
                Halaman kontak
              </Link>
              <a
                className="font-medium text-brand-200 hover:text-white"
                href={contact.website}
                target="_blank"
                rel="noreferrer"
              >
                Situs universitas
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-800 pt-6 text-xs text-neutral-500">
          © {new Date().getFullYear()} Universitas Muhammadiyah Jember
        </div>
      </Container>
    </footer>
  )
}

export default Footer
