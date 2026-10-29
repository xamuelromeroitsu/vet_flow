import { LegalPageLayout } from './LegalPageLayout'

export function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Política de Privacidad"
      intro="En VetFlow respetamos tu privacidad y tratamos tus datos personales con transparencia y cuidado. Esta política explica qué información podemos recopilar y cómo se utiliza."
    >
      <section>
        <h2>1. Responsable del tratamiento</h2>
        <p>VetFlow es responsable del tratamiento de los datos personales recopilados a través de este sitio web y de los servicios que ofrece. Para consultas relacionadas con privacidad, puedes utilizar el formulario de contacto para clínicas.</p>
      </section>
      <section>
        <h2>2. Información que podemos recopilar</h2>
        <p>Podemos recibir los datos que nos envías voluntariamente, como nombre, correo electrónico profesional, clínica, ciudad y el contenido de tu consulta. Si utilizas los servicios de la plataforma, también podrán tratarse datos de cuenta, actividad y la información necesaria para prestar las funciones solicitadas.</p>
        <p>La información sobre animales de compañía puede incluir datos de identificación y antecedentes de salud. Debe ser introducida y consultada únicamente por personas autorizadas y para fines relacionados con su cuidado veterinario.</p>
      </section>
      <section>
        <h2>3. Finalidades y base de uso</h2>
        <ul>
          <li>Responder solicitudes, consultas y peticiones de contacto.</li>
          <li>Gestionar el acceso y funcionamiento de los servicios de VetFlow.</li>
          <li>Proteger la seguridad, prevenir usos indebidos y mantener el servicio.</li>
          <li>Cumplir obligaciones legales aplicables.</li>
        </ul>
        <p>Cuando la normativa lo requiera, solicitaremos tu consentimiento. También podremos tratar datos cuando sea necesario para prestar un servicio solicitado o cumplir obligaciones legales.</p>
      </section>
      <section>
        <h2>4. Conservación y seguridad</h2>
        <p>Conservamos los datos solo durante el tiempo necesario para las finalidades descritas o para cumplir requisitos legales. Aplicamos medidas técnicas y organizativas razonables para protegerlos frente a pérdida, acceso o divulgación no autorizados.</p>
      </section>
      <section>
        <h2>5. Compartición de datos</h2>
        <p>No vendemos tus datos personales. Podremos compartirlos con proveedores que nos ayudan a operar la plataforma, bajo compromisos de confidencialidad, o cuando exista una obligación legal. La información clínica solo debe compartirse con profesionales o clínicas autorizados según las funcionalidades y permisos correspondientes.</p>
      </section>
      <section>
        <h2>6. Tus derechos</h2>
        <p>Según la legislación aplicable, puedes solicitar acceso, rectificación, eliminación, limitación u oposición al tratamiento de tus datos, así como retirar tu consentimiento cuando corresponda. Para ejercer estos derechos, ponte en contacto con VetFlow a través de nuestros canales de atención.</p>
      </section>
      <section>
        <h2>7. Privacidad de menores</h2>
        <p>Este sitio y los servicios asociados no están dirigidos a menores de edad. Si consideras que un menor nos ha proporcionado datos personales, contacta con VetFlow para revisar y gestionar la solicitud.</p>
      </section>
      <section>
        <h2>8. Cambios en esta política</h2>
        <p>Podemos actualizar esta política para reflejar cambios en los servicios o en los requisitos legales. Publicaremos aquí la versión vigente e indicaremos su fecha de actualización.</p>
      </section>
      <p className="legal-disclaimer">Este texto es informativo y debe revisarse con asesoría legal para adaptarlo a la entidad responsable, jurisdicciones y servicios definitivos de VetFlow.</p>
    </LegalPageLayout>
  )
}
