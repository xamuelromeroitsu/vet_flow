import { LegalPageLayout } from './LegalPageLayout'

export function CookiePolicyPage() {
  return (
    <LegalPageLayout
      title="Política de Cookies"
      intro="Te explicamos qué son las cookies, para qué podrían utilizarse en VetFlow y cómo puedes administrar tus preferencias."
    >
      <section>
        <h2>1. ¿Qué son las cookies?</h2>
        <p>Las cookies son pequeños archivos que un sitio web puede guardar en tu navegador para recordar información sobre una visita, facilitar funciones o comprender el uso del sitio.</p>
      </section>
      <section>
        <h2>2. Uso de cookies en VetFlow</h2>
        <p>El sitio puede utilizar almacenamiento técnico necesario para ofrecer funciones esenciales y recordar preferencias. Si en el futuro se incorporan cookies de analítica, personalización o publicidad, esta política se actualizará para describirlas y solicitar el consentimiento cuando sea necesario.</p>
      </section>
      <section>
        <h2>3. Tipos de cookies</h2>
        <ul>
          <li><strong>Necesarias:</strong> permiten funciones básicas y la seguridad del sitio.</li>
          <li><strong>Preferencias:</strong> recuerdan ajustes como idioma o configuración de visualización.</li>
          <li><strong>Analítica:</strong> ayudan a entender el uso del sitio de forma agregada, si se habilitan.</li>
          <li><strong>Marketing:</strong> se utilizarían para medir campañas o personalizar publicidad, si se incorporan.</li>
        </ul>
      </section>
      <section>
        <h2>4. Cómo administrar las cookies</h2>
        <p>Puedes configurar o eliminar cookies desde los ajustes de privacidad de tu navegador. Si bloqueas las cookies necesarias, algunas funciones podrían no estar disponibles o no funcionar correctamente.</p>
      </section>
      <section>
        <h2>5. Cambios en esta política</h2>
        <p>Actualizaremos esta página cuando cambien las tecnologías utilizadas o las obligaciones aplicables. La fecha de actualización se mostrará al inicio de la política.</p>
      </section>
      <p className="legal-disclaimer">El uso efectivo de cookies depende de la configuración técnica publicada en el sitio. Revisa esta política y añade el inventario real de cookies antes del lanzamiento.</p>
    </LegalPageLayout>
  )
}
