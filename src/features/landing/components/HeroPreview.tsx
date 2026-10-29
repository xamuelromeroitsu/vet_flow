export function HeroPreview() {
  return (
    <div className="hero-visual" aria-label="Vista previa de VetFlow en móvil">
      <div className="floating-note note-top"><span>✦</span> Todo conectado, siempre</div>
      <div className="phone phone--back" aria-hidden="true">
        <div className="phone-top"><span>9:41</span><span>●●● ▰</span></div>
        <div className="app-greeting"><div className="mini-brand">✚</div><div><b>VetFlow</b><small>CLÍNICA VETERINARIA</small></div><span className="avatar">🐕</span></div>
        <div className="phone-label">RESUMEN DE HOY</div>
        <div className="mini-stats"><div><b>7</b><small>Citas</small></div><div><b>3</b><small>Pacientes</small></div></div>
        <div className="mini-banner"><span>🐾</span><div><b>Rocky</b><small>Control de rutina · 10:30</small></div><span>›</span></div>
        <div className="phone-label">PRÓXIMAS CITAS</div>
        <div className="appointment"><span className="time">10:30</span><span><b>Rocky</b><small>Consulta general</small></span><i /></div>
        <div className="appointment"><span className="time">11:15</span><span><b>Luna</b><small>Vacunación anual</small></span><i /></div>
        <div className="phone-nav"><span>⌂<small>Inicio</small></span><span>▦<small>Agenda</small></span><span>♡<small>Pacientes</small></span><span>☰<small>Más</small></span></div>
      </div>
      <div className="phone phone--front" aria-hidden="true">
        <div className="phone-top"><span>9:41</span><span>●●● ▰</span></div>
        <div className="app-greeting"><div><small>BUENOS DÍAS 👋</small><b>Hola, Andrea</b></div><span className="avatar">👩🏻‍⚕️</span></div>
        <div className="alert-card"><small>RECETA DIGITAL</small><b>La receta de Max ya está lista</b><span>Compartir con su familia&nbsp; →</span></div>
        <div className="record-card"><div className="record-icon">🐶</div><div><b>Max</b><small>Golden Retriever · 4 años</small></div><span>•••</span></div>
        <div className="record-row"><span>Próximo control</span><b>12 de junio</b></div>
        <div className="record-row"><span>Última visita</span><b>Vacunación · 14 may</b></div>
        <div className="health-card"><span>Estado de salud</span><b>Excelente <i>↗</i></b><div className="health-bar"><i /></div></div>
        <div className="phone-bottom-button">✓ &nbsp; Ver historial completo</div>
      </div>
      <div className="floating-note note-bottom"><span>♡</span> Cada paciente, siempre cerca</div>
    </div>
  )
}
