import { SectionHeading } from '../../../components/ui/SectionHeading'
import { PlatformCard } from './cards/PlatformCard'
import { platformCards } from '../data/landingContent'

export function PlatformSection() {
  return (
    <section className="platform section-space">
      <div className="container">
        <SectionHeading eyebrow="TRANSPARENCIA Y CONEXIÓN HUMANA" title="Qué va en la Web vs. Qué se reserva para la App" description="Garantizamos la seguridad de tus datos y la privacidad de tus pacientes, donde debe estar." centered />
        <div className="platform-grid">
          {platformCards.map((card) => <PlatformCard key={card.title} card={card} />)}
        </div>
      </div>
    </section>
  )
}
