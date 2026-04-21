import { Cookie, Info, Settings, Users2, Shield, CheckCircle2 } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { InfoCard } from "@/components/info-card"

const tipos = [
  {
    accent: "yellow" as const,
    title: "Cookies necesarias",
    text: "Requeridas para el funcionamiento básico y la navegación del sitio.",
  },
  {
    accent: "blue" as const,
    title: "Cookies de rendimiento",
    text: "Nos ayudan a analizar interacciones y patrones de uso.",
  },
  {
    accent: "red" as const,
    title: "Cookies de marketing",
    text: "Usadas para mostrar publicidad segmentada y contenido promocional.",
  },
  {
    accent: "blue" as const,
    title: "Cookies de preferencias",
    text: "Almacenan tus configuraciones personalizadas.",
  },
]

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-8 max-w-5xl">
      <PageHero
        icon={Cookie}
        badge="POLÍTICA DE COOKIES"
        title="Política de Cookies"
        subtitle="Cómo usamos las cookies en Mejores Apuestas Colombia"
        updatedAt
      />

      <div className="space-y-4">
        <InfoCard accent="blue" icon={Info} title="¿Qué son las Cookies?">
          <p>
            Las cookies son pequeños archivos de datos almacenados en tu dispositivo cuando navegas por nuestro
            sitio. Ayudan a que los sitios web funcionen de manera más eficiente y proporcionan información
            valiosa sobre el comportamiento y las preferencias del usuario.
          </p>
        </InfoCard>

        <InfoCard accent="yellow" icon={Settings} title="Cómo Usamos las Cookies">
          <p>Utilizamos cookies para diversas funciones importantes:</p>
          <div className="grid gap-3 sm:grid-cols-2 pt-2">
            {tipos.map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-md border border-gray-200 p-3">
                <div className="flex items-start gap-2">
                  <div
                    className={`w-1.5 self-stretch rounded-full ${
                      t.accent === "yellow"
                        ? "bg-mx-green"
                        : t.accent === "blue"
                        ? "bg-mx-green-mid"
                        : "bg-mx-red"
                    }`}
                  />
                  <div>
                    <h4 className="text-sm font-bold text-mx-green-dark mb-0.5">{t.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-700">{t.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </InfoCard>

        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard accent="blue" title="Cookies temporales (de sesión)">
            <p>
              Cookies de corto plazo que se eliminan automáticamente al cerrar el navegador. Mantienen tu sesión
              mientras navegas entre páginas del sitio.
            </p>
          </InfoCard>
          <InfoCard accent="red" title="Cookies permanentes">
            <p>
              Permanecen en tu dispositivo por un periodo determinado o hasta que se eliminen manualmente.
              Identifican visitantes recurrentes y personalizan su experiencia.
            </p>
          </InfoCard>
        </div>

        <InfoCard accent="red" icon={Users2} title="Cookies de Terceros">
          <p>Podemos implementar cookies de terceros de diversos socios y proveedores, como:</p>
          <ul className="space-y-1.5 pt-1">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-mx-green-mid mt-0.5 flex-shrink-0" />
              <span>Plataformas de analítica para seguimiento de rendimiento.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-mx-green-mid mt-0.5 flex-shrink-0" />
              <span>Redes sociales para funcionalidad de compartir contenido.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-mx-green-mid mt-0.5 flex-shrink-0" />
              <span>Socios publicitarios para campañas de marketing personalizadas.</span>
            </li>
          </ul>
        </InfoCard>

        <InfoCard accent="yellow" icon={Settings} title="Gestión de Cookies">
          <p>Tienes control total sobre la configuración de cookies. La mayoría de navegadores te permiten:</p>
          <ul className="space-y-1.5 pt-1">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-mx-green-mid mt-0.5 flex-shrink-0" />
              <span>Revisar todas las cookies almacenadas en tu dispositivo.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-mx-green-mid mt-0.5 flex-shrink-0" />
              <span>Eliminar cookies de forma selectiva o completa.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-mx-green-mid mt-0.5 flex-shrink-0" />
              <span>Bloquear cookies de sitios específicos o todas las cookies.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-mx-green-mid mt-0.5 flex-shrink-0" />
              <span>Limpiar automáticamente las cookies al cerrar el navegador.</span>
            </li>
          </ul>
        </InfoCard>

        <InfoCard accent="blue" icon={Shield} title="Tus Preferencias">
          <p>
            Al continuar navegando en nuestro sitio, reconoces y aceptas el uso de cookies según lo descrito en esta
            política. Puedes modificar o retirar tu consentimiento en cualquier momento ajustando la configuración
            de cookies de tu navegador.
          </p>
        </InfoCard>
      </div>
    </div>
  )
}
