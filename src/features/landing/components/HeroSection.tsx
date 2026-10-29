import { StoreBadges } from '../../../components/ui/StoreBadges'
import { HeroPreview } from './HeroPreview'

const stats = [
  { value: '< 90s', label: 'para registrar una consulta' },
  { value: '100%', label: 'historial siempre accesible' },
  { value: '24/7', label: 'conectados con tu clínica' },
]

export function HeroSection() {
  return (
    <section className="hero section-tint" id="inicio">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="pill"><span className="pill-dot" /> Tecnología veterinaria cercana y simple</span>
          <h1>Tu aliado en la gestión veterinaria <span>inteligente.</span></h1>
          <p className="hero-lead">Trayendo orden para seguir cuidando. Gestiona clínica y pacientes desde un solo lugar, con información siempre a mano y más tiempo para lo que importa.</p>
          <StoreBadges />
          <div className="hero-stats">
            {stats.map((item) => <div className="stat-card" key={item.value}><strong>{item.value}</strong><span>{item.label}</span></div>)}
          </div>
        </div>
        <HeroPreview />
      </div>
      <div className="container trust-strip"><span className="trust-icon">✚</span><p><strong>Diseñada desde la clínica.</strong> VetFlow te ayuda a organizar la operación diaria para que el equipo pueda enfocarse en lo esencial: el bienestar de cada paciente.</p><span className="trust-tag">Pensada para veterinarios</span></div>
    </section>
  )
}
