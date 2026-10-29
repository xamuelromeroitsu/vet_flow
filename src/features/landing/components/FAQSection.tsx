import { useState } from 'react'
import { SectionHeading } from '../../../components/ui/SectionHeading'

const questions = [
  { question: '¿VetFlow realiza diagnósticos médicos automáticos?', answer: 'No. VetFlow organiza la información clínica y facilita la comunicación entre familias y profesionales, pero el diagnóstico y las decisiones médicas siempre corresponden al equipo veterinario.' },
  { question: '¿Cómo se conectan las clínicas veterinarias a la plataforma?', answer: 'Las clínicas pueden solicitar acceso desde el formulario de contacto. Nuestro equipo les acompañará en la configuración de su perfil y la incorporación de sus profesionales.' },
  { question: '¿Dónde están almacenados los datos de mi mascota y su seguimiento?', answer: 'La información se guarda de forma segura y queda vinculada al perfil del paciente, para que su familia y el equipo veterinario autorizado puedan consultarla.' },
  { question: '¿Cómo solicito el borrado definitivo de mi cuenta y mis datos?', answer: 'Puedes solicitarlo desde la configuración de tu cuenta o escribiéndonos mediante el formulario. Verificaremos la solicitud y te guiaremos durante el proceso.' },
]

export function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  return (
    <section className="faq section-tint section-space" id="faq"><div className="container faq-container"><SectionHeading eyebrow="RESPUESTAS CLARAS" title="Preguntas Frecuentes" description="Todo lo que necesitas saber sobre el uso seguro, fácil y responsable de VetFlow." centered /><div className="faq-list">{questions.map((item, index) => <article className={`faq-item${openQuestion === index ? ' faq-item--open' : ''}`} key={item.question}><button type="button" aria-expanded={openQuestion === index} onClick={() => setOpenQuestion(openQuestion === index ? null : index)}><span>{item.question}</span><span className="faq-chevron">⌄</span></button>{openQuestion === index && <p>{item.answer}</p>}</article>)}</div></div></section>
  )
}
