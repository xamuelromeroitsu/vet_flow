import { useState } from 'react'
import { Link } from 'react-router-dom'

const links = [
  { label: 'Características', href: '/#caracteristicas' },
  { label: 'Cómo funciona', href: '/#como-funciona' },
  { label: 'Clínicas', href: '/#clinicas' },
  { label: 'FAQ', href: '/#faq' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Navegación principal">
        <Link className="brand" to="/#inicio" aria-label="VetFlow, inicio">
          <span className="brand-mark">✚</span>
          <span>VetFlow<small>GESTIÓN VETERINARIA</small></span>
        </Link>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
        <div className={`nav-links${menuOpen ? ' nav-links--open' : ''}`}>
          {links.map((link) => <Link key={link.href} to={link.href} onClick={() => setMenuOpen(false)}>{link.label}</Link>)}
          <Link className="button button--primary nav-cta" to="/#clinicas" onClick={() => setMenuOpen(false)}>Descargar App <span aria-hidden="true">↗</span></Link>
        </div>
      </nav>
    </header>
  )
}
