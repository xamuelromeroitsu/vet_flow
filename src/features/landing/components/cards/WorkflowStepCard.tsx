import type { WorkflowStepData } from '../../data/landingContent'

export function WorkflowStepCard({ step }: { step: WorkflowStepData }) {
  return (
    <article className="step-card">
      <span className="step-number">{step.number}</span>
      <h3>{step.title}</h3>
      <p>{step.text}</p>
      <span className="step-check">✓ &nbsp; Todo conectado desde el inicio</span>
    </article>
  )
}
