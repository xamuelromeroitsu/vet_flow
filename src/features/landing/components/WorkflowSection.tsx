import { SectionHeading } from '../../../components/ui/SectionHeading'
import { WorkflowStepCard } from './cards/WorkflowStepCard'
import { workflowSteps } from '../data/landingContent'

export function WorkflowSection() {
  return (
    <section className="workflow section-space" id="como-funciona"><div className="container"><SectionHeading eyebrow="SIMPLICIDAD EN MOMENTOS DE TENSIÓN" title="Cómo Funciona VetFlow" description="Un flujo sencillo de 3 etapas que transforma cada urgencia en una consulta más estructurada." centered /><div className="steps-grid">{workflowSteps.map((step) => <WorkflowStepCard key={step.number} step={step} />)}</div></div></section>
  )
}
