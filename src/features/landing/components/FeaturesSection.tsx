import { SectionHeading } from '../../../components/ui/SectionHeading'
import { FeatureCard } from './cards/FeatureCard'
import { features } from '../data/landingContent'

export function FeaturesSection() {
  return (
    <section className="features section-tint section-space" id="caracteristicas">
      <div className="container">
        <div className="features-heading"><SectionHeading eyebrow="HERRAMIENTAS QUE AHORRAN TIEMPO" title="Diseñado para salvar minutos críticos" /><p>Herramientas pensadas para acompañar la sensibilidad del tutor y potenciar la recepción de los centros de emergencia veterinaria.</p></div>
        <div className="feature-grid">{features.map((feature) => <FeatureCard key={feature.title} feature={feature} />)}</div>
      </div>
    </section>
  )
}
