import {
  Lock,
  Database,
  Share2,
  Cookie,
  ShieldCheck,
  Scale,
  FileText,
  Mail,
  CheckCircle2,
  User,
} from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { InfoCard } from "@/components/info-card"

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
  "Conocer, actualizar y rectificar tus datos personales.",
  "Solicitar prueba de la autorización otorgada.",
  "Ser informado sobre el uso dado a tus datos personales.",
  "Presentar quejas ante la Superintendencia de Industria y Comercio (SIC).",
  "Revocar la autorización y/o solicitar la supresión de datos.",
  "Acceder gratuitamente a tus datos personales.",
]

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-8 max-w-5xl">
      <PageHero
        icon={Lock}
        badge="POLÍTICA DE PRIVACIDAD"
        title="Política de Privacidad"
        subtitle="Tus datos personales protegidos conforme a la legislación colombiana"
        updatedAt
      />

      {/* Юридична основа */}
      <div className="mb-4 rounded-lg border border-mx-green-mid/30 bg-mx-green-mid/5 p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-md bg-mx-green-mid flex items-center justify-center flex-shrink-0">
            <Scale className="w-5 h-5 text-white" />
          </div>
          <p className="text-sm text-gray-800 leading-relaxed">
            En <strong>Mejores Apuestas Colombia</strong> protegemos tus datos personales conforme a la{" "}
            <strong>Ley 1581 de 2012</strong> (Ley de Protección de Datos Personales) y el{" "}
            <strong>Decreto 1377 de 2013</strong> de la República de Colombia.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <InfoCard accent="yellow" icon={Database} title="1. Datos que Recopilamos">
          <p>
            Recopilamos información que proporcionas voluntariamente al registrarte, suscribirte a nuestras
            actualizaciones o contactarnos para asistencia.
          </p>
          <h4 className="text-sm font-bold text-mx-green-dark pt-2">Datos Personales</h4>
          <ul className="space-y-1.5">
            {datos.map((d, i) => (
              <li key={i} className="flex items-start gap-2">
                <User className="w-4 h-4 text-mx-green-mid mt-0.5 flex-shrink-0" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </InfoCard>

        <InfoCard accent="blue" icon={FileText} title="2. Uso de la Información">
          <p>Utilizamos la información recopilada para los siguientes fines:</p>
          <ul className="space-y-1.5 pt-1">
            {usos.map((u, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-mx-green-mid mt-0.5 flex-shrink-0" />
                <span>{u}</span>
              </li>
            ))}
          </ul>
        </InfoCard>

        <InfoCard accent="red" icon={Share2} title="3. Compartir Información">
          <p>
            <strong>No vendemos</strong>, intercambiamos ni transferimos tu información personal a terceros sin tu
            consentimiento explícito, salvo lo específicamente indicado en esta política.
          </p>
        </InfoCard>

        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard accent="blue" icon={Cookie} title="4. Cookies">
            <p>
              Usamos cookies para mejorar tu experiencia en nuestra plataforma. Puedes deshabilitarlas desde la
              configuración de tu navegador, aunque esto puede afectar algunas funcionalidades.
            </p>
          </InfoCard>
          <InfoCard accent="yellow" icon={ShieldCheck} title="5. Seguridad de la Información">
            <p>
              Aplicamos protocolos de seguridad robustos para proteger tus datos contra acceso no autorizado,
              modificación, divulgación o destrucción, mediante medidas estándar de la industria.
            </p>
          </InfoCard>
        </div>

        <InfoCard accent="blue" icon={Scale} title="6. Tus Derechos (Ley 1581 / Habeas Data)">
          <p>Como titular de datos personales en Colombia tienes derecho a:</p>
          <ul className="grid gap-1.5 sm:grid-cols-2 pt-1">
            {derechos.map((d, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-mx-green-mid mt-0.5 flex-shrink-0" />
                <span className="text-sm">{d}</span>
              </li>
            ))}
          </ul>
        </InfoCard>

        <InfoCard accent="yellow" icon={FileText} title="7. Modificaciones">
          <p>
            Podemos actualizar periódicamente esta Política de Privacidad para reflejar cambios en nuestras
            prácticas o requisitos legales. Te informaremos sobre cambios significativos publicando la política
            revisada en esta página con la fecha actualizada.
          </p>
        </InfoCard>

        <InfoCard accent="red" icon={Mail} title="8. Contacto">
          <p>
            Para ejercer tus derechos sobre datos personales o consultas sobre esta política, contáctanos a través
            de nuestro formulario de contacto. Responderemos en un plazo máximo de{" "}
            <strong>15 días hábiles</strong> conforme a la ley colombiana.
          </p>
        </InfoCard>
      </div>
    </div>
  )
}
