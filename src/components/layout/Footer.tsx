import { Link } from 'react-router-dom'

const footerGroups = [
  { title: 'PLATAFORMA', links: [{ label: 'Tecnología de Triaje', href: '/#caracteristicas' }, { label: 'Módulo para Tutores', href: '/#caracteristicas' }, { label: 'Red de Clínicas', href: '/#clinicas' }, { label: 'Red de Hospitales 24h', href: '/#clinicas' }] },
  { title: 'PROFESIONALES', links: [{ label: 'Panel de Administración', href: '/#clinicas' }, { label: 'Preguntas Clínicas', href: '/#faq' }, { label: 'Integración de Software', href: '/#clinicas' }, { label: 'Mesa de Ayuda', href: '/#clinicas' }] },
  { title: 'LEGAL & DATOS', links: [{ label: 'Política de Privacidad', href: '/politica-de-privacidad' }, { label: 'Términos de Uso', href: '/politica-de-privacidad' }, { label: 'Aviso Médico / Legal', href: '/politica-de-privacidad' }, { label: 'Política de Cookies', href: '/politica-de-cookies' }] },
]

export function Footer() {
  return (
    <footer className="site-footer"><div className="container"><div className="footer-main"><div className="footer-brand"><Link className="brand" to="/"><span className="brand-mark">✚</span><span>VetFlow<small>GESTIÓN VETERINARIA</small></span></Link><p>Plataforma digital de triaje veterinario y gestión clínica. Conectamos familias, profesionales y clínicas para brindar atención más clara, humana y segura.</p><span className="footer-contact">✉ &nbsp; Estamos para ayudarte</span></div>{footerGroups.map((group) => <div className="footer-group" key={group.title}><h3>{group.title}</h3>{group.links.map((link) => <Link to={link.href} key={link.label}>{link.label}</Link>)}</div>)}</div><div className="footer-note"><span>✦ &nbsp; VetFlow está diseñada para acompañar el trabajo veterinario, sin reemplazar el criterio profesional. Las urgencias deben ser evaluadas por un médico veterinario.</span><b>VETFLOW · 2025</b></div><div className="footer-bottom"><span>© 2025 VetFlow. Todos los derechos reservados.</span><span>Hecho con <b>♥</b> para quienes cuidan</span></div></div></footer>
  )
}
