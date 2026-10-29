export function StoreBadges() {
  return (
    <div className="store-actions" aria-label="Descarga VetFlow">
      <a className="store-badge" href="#clinicas" aria-label="Disponible próximamente en Google Play">
        <svg className="store-badge__google-icon" viewBox="0 0 48 52" aria-hidden="true">
          <path fill="#00d26a" d="M4 3.2C2.8 4 2 5.4 2 7.3v37.4c0 1.9.8 3.3 2 4.1l21-22.8z" />
          <path fill="#00b8f0" d="M4 3.2 29 26l9-9.8L8 2.4C6.5 1.5 5 2 4 3.2" />
          <path fill="#ffce00" d="m29 26 9 9.8 7.5-4.3c2.7-1.6 2.7-4.4 0-6L38 21z" />
          <path fill="#f5425f" d="M4 48.8c1 1.2 2.5 1.7 4 .8l30-13.8-9-9.8z" />
        </svg>
        <span><small>GET IT ON</small><strong>Google Play</strong></span>
      </a>
      <a className="store-badge" href="#clinicas" aria-label="Descargar VetFlow en App Store">
        <svg className="store-badge__apple-icon" viewBox="0 0 48 54" aria-hidden="true">
          <path fill="currentColor" d="M39.6 28.7c.1 9.4 8.2 12.5 8.3 12.5-.1.2-1.3 4.5-4.3 8.9-2.6 3.8-5.3 7.6-9.5 7.7-4.1.1-5.4-2.5-10.1-2.5-4.6 0-6.1 2.4-10 2.6-4 .2-7.1-4.1-9.8-7.9C-1.2 39.3-3.1 23.1 2.3 14.4c2.7-4.4 7.4-7.2 12.5-7.3 3.9-.1 7.6 2.7 10 2.7 2.4 0 6.9-3.3 11.6-2.8 2 .1 7.5.8 11 6.1-.3.2-6.6 3.9-6.5 11.6M32.1 2.1C34.2-.4 37.7-2.3 40.7-2.5c.4 3.5-1 7-3.1 9.5-2.1 2.5-5.5 4.5-8.8 4.2-.5-3.4 1.2-7 3.3-9.1" transform="translate(2 2) scale(.9)" />
        </svg>
        <span><small>Download on the</small><strong>App Store</strong></span>
      </a>
    </div>
  )
}
