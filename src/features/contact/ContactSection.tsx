import { useState, type FormEvent } from 'react'
import { SectionHeading } from '../../components/ui/SectionHeading'

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="contact-section section-tint" id="clinicas"><div className="contact-card"><SectionHeading eyebrow="RED DE HOSPITALES VETFLOW" title="¿Gestionas una clínica veterinaria?" description="Únete a la red inteligente para recibir pacientes pre-derivados y optimizar el tiempo de respuesta en urgencias." centered />{submitted ? <div className="form-success" role="status"><span>✓</span><h3>¡Gracias por contactarnos!</h3><p>Recibimos los datos de tu clínica. Nuestro equipo se pondrá en contacto contigo pronto.</p><button className="button button--primary" type="button" onClick={() => setSubmitted(false)}>Enviar otra solicitud</button></div> : <form className="clinic-form" onSubmit={handleSubmit}><label>Nombre del Veterinario responsable<input name="name" placeholder="Dra. María González" required /></label><label>Nombre de la Clínica o Hospital<input name="clinic" placeholder="Hospital Veterinario Central" required /></label><label>Email profesional<input name="email" type="email" placeholder="urgencias@hospitalvet.com" required /></label><label>Ciudad / Provincia<input name="city" placeholder="Madrid, España" required /></label><label className="form-full">Tipo de Atención y Consulta<select name="service" defaultValue=""><option value="" disabled>Selecciona una especialidad</option><option>Urgencias 24 horas</option><option>Clínica veterinaria general</option><option>Hospital veterinario</option><option>Centro de especialidades</option></select></label><label className="form-full">Cuéntanos sobre tu clínica<textarea name="message" placeholder="Disponibilidad, servicios de urgencias y cómo podemos ayudarte..." rows={3} /></label><label className="consent form-full"><input type="checkbox" required /><span>He leído y acepto la Política de Privacidad y consiento el tratamiento de mis datos para la gestión de esta solicitud.</span></label><div className="form-footer form-full"><p>🔒 Tus datos se gestionan de forma segura.</p><button className="button button--primary" type="submit">✦ &nbsp; Solicitar Alta de la Red</button></div></form>}</div></section>
  )
}
