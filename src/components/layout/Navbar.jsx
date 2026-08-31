import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from '../common/Container.jsx'

const navigation = [
  { label: 'Beranda', to: '/' },
  { label: 'Perjalanan Studi', to: '/perjalanan-studi' },
  { label: 'Kurikulum', to: '/kurikulum' },
  { label: 'Dosen', to: '/dosen' },
  { label: 'PKL', to: '/pkl' },
  { label: 'Tugas Akhir', to: '/tugas-akhir' },
  { label: 'Aktivitas', to: '/aktivitas' },
  { label: 'Layanan', to: '/layanan' },
]

function navLinkClass({ isActive }) {
  return `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
    isActive
      ? 'bg-brand-50 text-brand-800'
      : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
  }`
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return undefined

    function closeMenu(event) {
      if (event.key === 'Escape') {
        setIsOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', closeMenu)
    return () => document.removeEventListener('keydown', closeMenu)
  }, [isOpen])

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur-sm">
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-4">
          <Link
            to="/"
            className="flex shrink-0 items-center gap-3 rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            <span
              aria-hidden="true"
              className="grid size-10 place-items-center rounded-xl bg-brand-700 text-sm font-bold text-white"
            >
              TI
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold text-neutral-900">Teknik Informatika</span>
              <span className="block text-xs text-neutral-500">Universitas Muhammadiyah Jember</span>
            </span>
          </Link>

          <nav aria-label="Navigasi utama" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navigation.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} className={navLinkClass} end={item.to === '/'}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            className="grid size-11 shrink-0 place-items-center rounded-lg text-neutral-700 transition-colors hover:bg-neutral-100 lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
          </button>
        </div>

        <nav
          id="mobile-navigation"
          aria-label="Navigasi utama seluler"
          className={`${isOpen ? 'block' : 'hidden'} border-t border-neutral-200 py-3 lg:hidden`}
        >
          <ul className="grid gap-1">
            {navigation.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => `${navLinkClass({ isActive })} block min-h-11`}
                  end={item.to === '/'}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Navbar
