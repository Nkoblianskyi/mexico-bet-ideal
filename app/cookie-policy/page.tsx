import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { InfoCard } from "@/components/info-card"

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Política de cookies de Mejores Apuestas México: qué son las cookies, cómo las usamos, tipos utilizados, cookies de terceros y cómo gestionar tus preferencias.",
  alternates: { canonical: "/cookie-policy" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Política de cookies | Mejores Apuestas México",
    description: "Uso y gestión de cookies en el sitio Mejores Apuestas México.",
    url: "/cookie-policy",
    type: "article",
  },
}

const tipos = [
  { title: "Cookies necesarias", text: "Requeridas para el funcionamiento básico y la navegación del sitio." },
  { title: "Cookies de rendimiento", text: "Nos ayudan a analizar interacciones y patrones de uso." },
  { title: "Cookies de marketing", text: "Usadas para mostrar publicidad segmentada y contenido promocional." },
  { title: "Cookies de preferencias", text: "Almacenan tus configuraciones personalizadas." },
]

const terceros = [
  "Plataformas de analítica para seguimiento de rendimiento.",
  "Redes sociales para funcionalidad de compartir contenido.",
  "Socios publicitarios para campañas de marketing personalizadas.",
]

const control = [
  "Revisar todas las cookies almacenadas en tu dispositivo.",
  "Eliminar cookies de forma selectiva o completa.",
  "Bloquear cookies de sitios específicos o todas las cookies.",
  "Limpiar automáticamente las cookies al cerrar el navegador.",
]

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-10 max-w-5xl">
      <PageHero
        badge="Política de cookies"
        title="Política de Cookies"
        subtitle="Uso y gestión de cookies en Mejores Apuestas México."
        updatedAt
      />

      <div className="space-y-5">
        <InfoCard number="01" title="¿Qué son las Cookies?">
          <p>
            Las cookies son pequeños archivos de datos almacenados en tu dispositivo cuando navegas
            por nuestro sitio. Ayudan a que los sitios web funcionen de manera más eficiente y
            proporcionan información valiosa sobre el comportamiento y las preferencias del usuario.
          </p>
        </InfoCard>

        <section className="bg-white border border-gray-200 p-5 sm:p-6">
          <h3 className="flex items-baseline gap-3 text-sm sm:text-base font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-2 mb-4">
            <span className="text-mx-green-dark font-extrabold tabular-nums">02</span>
            <span>Cómo Usamos las Cookies</span>
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Utilizamos cookies para diversas funciones importantes:
          </p>
          <div className="grid gap-px bg-gray-200 sm:grid-cols-2 border border-gray-200">
            {tipos.map((t, i) => (
              <div key={i} className="bg-white p-4">
                <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-mx-green-dark mb-1">
                  {String(i + 1).padStart(2, "0")} · {t.title}
                </h4>
                <p className="text-sm text-gray-700 leading-snug">{t.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white border border-gray-200 p-5 sm:p-6">
          <h3 className="flex items-baseline gap-3 text-sm sm:text-base font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-2 mb-4">
            <span className="text-mx-green-dark font-extrabold tabular-nums">03</span>
            <span>Duración</span>
          </h3>
          <dl className="divide-y divide-gray-200 border-y border-gray-200">
            <div className="py-3 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-2 md:gap-6">
              <dt className="text-xs font-bold uppercase tracking-[0.18em] text-gray-900">
                Cookies temporales (de sesión)
              </dt>
              <dd className="text-sm text-gray-700 leading-relaxed">
                Cookies de corto plazo que se eliminan automáticamente al cerrar el navegador.
                Mantienen tu sesión mientras navegas entre páginas del sitio.
              </dd>
            </div>
            <div className="py-3 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-2 md:gap-6">
              <dt className="text-xs font-bold uppercase tracking-[0.18em] text-gray-900">
                Cookies permanentes
              </dt>
              <dd className="text-sm text-gray-700 leading-relaxed">
                Permanecen en tu dispositivo por un periodo determinado o hasta que se eliminen
                manualmente. Identifican visitantes recurrentes y personalizan su experiencia.
              </dd>
            </div>
          </dl>
        </section>

        <InfoCard number="04" title="Cookies de Terceros">
          <p>Podemos implementar cookies de terceros de diversos socios y proveedores, como:</p>
          <ul className="mt-3 divide-y divide-gray-200 border-y border-gray-200">
            {terceros.map((t, i) => (
              <li key={i} className="py-2 text-sm">
                — {t}
              </li>
            ))}
          </ul>
        </InfoCard>

        <InfoCard number="05" title="Gestión de Cookies">
          <p>
            Tienes control total sobre la configuración de cookies. La mayoría de navegadores te
            permiten:
          </p>
          <ul className="mt-3 divide-y divide-gray-200 border-y border-gray-200">
            {control.map((c, i) => (
              <li key={i} className="py-2 text-sm">
                — {c}
              </li>
            ))}
          </ul>
        </InfoCard>

        <InfoCard number="06" title="Tus Preferencias">
          <p>
            Al continuar navegando en nuestro sitio, reconoces y aceptas el uso de cookies según lo
            descrito en esta política. Puedes modificar o retirar tu consentimiento en cualquier
            momento ajustando la configuración de cookies de tu navegador.
          </p>
        </InfoCard>
      </div>
    </div>
  )
}
