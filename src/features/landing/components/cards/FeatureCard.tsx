import type { FeatureCardData } from '../../data/landingContent'

export function FeatureCard({ feature }: { feature: FeatureCardData }) {
  return (
    <article className="feature-card">
      <div className={`feature-icon ${feature.tone}`} aria-hidden="true">{feature.icon}</div>
      <h3>{feature.title}</h3>
      <p>{feature.body}</p>
      <a href="#clinicas">{feature.link}<span aria-hidden="true">↗</span></a>
    </article>
  )
}
