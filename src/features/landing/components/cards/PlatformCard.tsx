import type { PlatformCardData } from '../../data/landingContent'

export function PlatformCard({ card }: { card: PlatformCardData }) {
  return (
    <article className="platform-card">
      <div className={`feature-icon ${card.tone}`}>{card.icon}</div>
      <div>
        <h3>{card.title}</h3>
        <span className="card-subtitle">{card.subtitle}</span>
      </div>
      <ul>
        {card.bullets.map((bullet) => (
          <li key={bullet}><span aria-hidden="true">✓</span>{bullet}</li>
        ))}
      </ul>
      <div className="card-note">✧ &nbsp;{card.note}</div>
    </article>
  )
}
