import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { InfoCard } from "@/components/info-card"

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Política de privacidad de Mejores Apuestas México conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) e INAI. Tratamiento de datos y derechos ARCO.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Política de privacidad | Mejores Apuestas México",
    description:
      "Tratamiento y protección de datos personales conforme a la LFPDPPP y supervisión del INAI.",
    url: "/privacy-policy",
    type: "article",
  },
}

const datos = [
  "Nombre completo y correo electrónico.",
  "Dirección IP y datos del navegador.",
  "Patrones de uso del sitio y preferencias.",
  "Datos de tecnologías de seguimiento y analítica.",
]

const usos = [
  "Ofrecer y mejorar nuestros servicios.",
  "Enviar newsletters y comunicaciones promocionales.",
  "Analizar comportamientos de usuario y tendencias del sitio.",
  "Cumplir con requisitos regulatorios y legales.",
]

const derechos = [
  "Acceder, rectificar, cancelar u oponerse (derechos ARCO) al tratamiento de tus datos personales.",
  "Revocar el consentimiento para el tratamiento de tus datos.",
  "Limitar el uso o divulgación de tus datos personales.",
  "Presentar quejas ante el INAI (Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales).",
  "Ser informado sobre el uso dado a tus datos personales.",
  "Acceder gratuitamente a tus datos personales.",
]

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-10 max-w-5xl">
      <PageHero
        badge="Política de privacidad"
        title="Política de Privacidad"
        subtitle="Tratamiento y protección de datos personales conforme a la legislación mexicana."
        updatedAt
      />

      <section className="mb-5 bg-white border border-gray-200 border-l-4 border-l-mx-green-dark p-5 sm:p-6">
        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-mx-green-dark mb-2">
          Marco Legal
        </div>
        <p className="text-sm text-gray-800 leading-relaxed">
          En <strong>Mejores Apuestas México</strong> protegemos tus datos personales conforme a la{" "}
          <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</strong>{" "}
          y su Reglamento, bajo la supervisión del <strong>INAI</strong>.
        </p>
      </section>

      <div className="space-y-5">
        <InfoCard number="01" title="Datos que Recopilamos">
          <p>
            Recopilamos información que proporcionas voluntariamente al registrarte, suscribirte a
            nuestras actualizaciones o contactarnos para asistencia.
          </p>
          <div className="mt-3 text-[11px] font-bold uppercase tracking-[0.18em] text-mx-green-dark">
            Datos personales
          </div>
          <ul className="divide-y divide-gray-200 border-y border-gray-200">
            {datos.map((d, i) => (
              <li key={i} className="py-2 text-sm text-gray-800">
                — {d}
              </li>
            ))}
          </ul>
        </InfoCard>

        <InfoCard number="02" title="Uso de la Información">
          <p>Utilizamos la información recopilada para los siguientes fines:</p>
          <ul className="mt-3 divide-y divide-gray-200 border-y border-gray-200">
            {usos.map((u, i) => (
              <li key={i} className="py-2 text-sm text-gray-800">
                — {u}
              </li>
            ))}
          </ul>
        </InfoCard>

        <InfoCard number="03" title="Compartir Información">
          <p>
            <strong>No vendemos</strong>, intercambiamos ni transferimos tu información personal a
            terceros sin tu consentimiento explícito, salvo lo específicamente indicado en esta
            política.
          </p>
        </InfoCard>

        <section className="bg-white border border-gray-200 p-5 sm:p-6">
          <h3 className="flex items-baseline gap-3 text-sm sm:text-base font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-2 mb-3">
            <span className="text-mx-green-dark font-extrabold tabular-nums">04 · 05</span>
            <span>Cookies y Seguridad</span>
          </h3>
          <dl className="divide-y divide-gray-200 border-y border-gray-200">
            <div className="py-3 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-6">
              <dt className="text-xs font-bold uppercase tracking-[0.18em] text-gray-900">
                Cookies
              </dt>
              <dd className="text-sm text-gray-700 leading-relaxed">
                Usamos cookies para mejorar tu experiencia en nuestra plataforma. Puedes
                deshabilitarlas desde la configuración de tu navegador, aunque esto puede afectar
                algunas funcionalidades.
              </dd>
            </div>
            <div className="py-3 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-6">
              <dt className="text-xs font-bold uppercase tracking-[0.18em] text-gray-900">
                Seguridad
              </dt>
              <dd className="text-sm text-gray-700 leading-relaxed">
                Aplicamos protocolos de seguridad robustos para proteger tus datos contra acceso no
                autorizado, modificación, divulgación o destrucción, mediante medidas estándar de la
                industria.
              </dd>
            </div>
          </dl>
        </section>

        <section className="bg-white border border-gray-200 p-5 sm:p-6">
          <h3 className="flex items-baseline gap-3 text-sm sm:text-base font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-2 mb-3">
            <span className="text-mx-green-dark font-extrabold tabular-nums">06</span>
            <span>Tus Derechos ARCO (LFPDPPP)</span>
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Como titular de datos personales en México tienes derecho a:
          </p>
          <ul className="divide-y divide-gray-200 border-y border-gray-200 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:divide-y-0 sm:border-0">
            {derechos.map((d, i) => (
              <li
                key={i}
                className="flex items-start gap-3 py-2.5 text-sm text-gray-800 sm:border-b sm:border-gray-200"
              >
                <span className="text-mx-green-dark font-bold tabular-nums w-6 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed">{d}</span>
              </li>
            ))}
          </ul>
        </section>

        <InfoCard number="07" title="Modificaciones">
          <p>
            Podemos actualizar periódicamente esta Política de Privacidad para reflejar cambios en
            nuestras prácticas o requisitos legales. Te informaremos sobre cambios significativos
            publicando la política revisada en esta página con la fecha actualizada.
          </p>
        </InfoCard>

        <InfoCard number="08" title="Contacto">
          <p>
            Para ejercer tus derechos ARCO o consultas sobre esta política, contáctanos a través de
            nuestro formulario de contacto. Responderemos en un plazo máximo de{" "}
            <strong>20 días hábiles</strong> conforme a lo establecido en la LFPDPPP.
          </p>
        </InfoCard>
      </div>
    </div>
  )
}
