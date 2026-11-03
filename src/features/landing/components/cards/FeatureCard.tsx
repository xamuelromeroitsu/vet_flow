import type { FeatureCardData } from '../../data/landingContent'
import PixelCard from '../../../../components/ui/PixelCard.jsx'

export function FeatureCard({ feature }: { feature: FeatureCardData }) {
  return (
    <PixelCard
      className="feature-pixel-card"
      colors={['#059669', '#0891b2', '#34d399']}
      glowColor="#00fdff"
      gap={11}
      speed={30}
      pixelSize={5}
      opacity={0.55}
      fade={1}
      glow={0.2}
      spotlight={0.6}
      revealDuration={1000}
      clickHoldDuration={3500}
      trigger="hover"
      theme="light"
      noFocus
      radius={12}
    >
      <article className="feature-card">
        <div className={`feature-icon ${feature.tone}`} aria-hidden="true">{feature.icon}</div>
        <h3>{feature.title}</h3>
        <p>{feature.body}</p>
        <a href="#clinicas">{feature.link}<span aria-hidden="true">↗</span></a>
      </article>
    </PixelCard>
  )
}
