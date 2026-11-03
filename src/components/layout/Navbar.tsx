import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useScrollDirection } from './useScrollDirection'

const links = [
  { label: 'Características', href: '/#caracteristicas' },
  { label: 'Cómo funciona', href: '/#como-funciona' },
  { label: 'Clínicas', href: '/#clinicas' },
  { label: 'FAQ', href: '/#faq' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const headerHidden = useScrollDirection(menuOpen)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (location.hash) {
        document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView({ behavior: 'smooth' })
      } else if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    })

    return () => window.cancelAnimationFrame(frame)
  }, [location.hash, location.pathname])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header${headerHidden ? ' site-header--hidden' : ''}`}>
      <nav className="nav container" aria-label="Navegación principal">
        <Link className="brand" to="/#inicio" aria-label="VetFlow, inicio" onClick={closeMenu}>
          <span className="brand-mark">✚</span>
          <span>VetFlow<small>GESTIÓN VETERINARIA</small></span>
        </Link>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
        <div className={`nav-links${menuOpen ? ' nav-links--open' : ''}`}>
          {links.map((link) => <Link key={link.href} to={link.href} onClick={closeMenu}>{link.label}</Link>)}
          <Link className="button button--primary nav-cta" to="/#clinicas" onClick={closeMenu}>Contactar clínica <span aria-hidden="true">↗</span></Link>
        </div>
      </nav>
    </header>
  )
}
