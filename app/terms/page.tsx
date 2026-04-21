import {
  FileText,
  CheckCircle2,
  Info,
  UserCheck,
  AlertCircle,
  ExternalLink,
  Shield,
  Copyright,
  Scale,
  Lock,
  Edit3,
  Flag,
} from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { InfoCard } from "@/components/info-card"

const juegoResp = [
  "Establecer límites de tiempo y dinero en el juego.",
  "Nunca apostar más de lo que puedan permitirse perder.",
  "Buscar ayuda si el juego se convierte en un problema.",
  "Usar herramientas de autoexclusión cuando sea necesario.",
]

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-8 max-w-5xl">
      <PageHero
        icon={FileText}
        badge="TÉRMINOS Y CONDICIONES"
        title="Términos y Condiciones"
        subtitle="Reglas de uso de Mejores Apuestas Colombia"
        updatedAt
      />

      <div className="space-y-4">
        <InfoCard accent="yellow" icon={CheckCircle2} title="1. Aceptación de Términos">
          <p>
            Al acceder y usar <strong>Mejores Apuestas Colombia</strong>, aceptas cumplir con los términos y
            disposiciones de este acuerdo. Si no estás de acuerdo, por favor no utilices el sitio.
          </p>
        </InfoCard>

        <InfoCard accent="blue" icon={Info} title="2. Propósito del Sitio">
          <p>
            Este sitio web proporciona información y reseñas sobre casas de apuestas disponibles en Colombia. Somos
            un servicio de comparación independiente y <strong>no operamos servicios de juego</strong> nosotros
            mismos.
          </p>
        </InfoCard>

        <InfoCard accent="red" icon={UserCheck} title="3. Restricción de Edad (+18)">
          <p>
            Debes tener al menos <strong>18 años</strong> para usar este sitio. El juego está restringido a adultos.
            Tomamos en serio la verificación de edad y promovemos el juego responsable conforme a la regulación de{" "}
            <strong>Coljuegos</strong>.
          </p>
        </InfoCard>

        <InfoCard accent="yellow" icon={AlertCircle} title="4. Precisión de la Información">
          <p>
            Aunque nos esforzamos por brindar información precisa y actualizada, no podemos garantizar la exactitud
            de todo el contenido. Las cuotas, bonos y términos pueden cambiar sin previo aviso.
          </p>
        </InfoCard>

        <InfoCard accent="blue" icon={ExternalLink} title="5. Enlaces a Terceros">
          <p>
            Nuestro sitio contiene enlaces a casas de apuestas externas. No somos responsables del contenido,
            términos o prácticas de estos sitios. Revisa sus términos y condiciones antes de usarlos.
          </p>
        </InfoCard>

        <InfoCard accent="red" icon={Shield} title="6. Juego Responsable">
          <p>Promovemos el juego responsable y alentamos a nuestros usuarios a:</p>
          <ul className="space-y-1.5 pt-1">
            {juegoResp.map((j, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-mx-red mt-0.5 flex-shrink-0" />
                <span>{j}</span>
              </li>
            ))}
          </ul>
        </InfoCard>

        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard accent="yellow" icon={Copyright} title="7. Propiedad Intelectual">
            <p>
              Todo el contenido de este sitio, incluyendo textos, gráficos, logos e imágenes, es propiedad de
              Mejores Apuestas Colombia y está protegido por leyes colombianas de derechos de autor.
            </p>
          </InfoCard>
          <InfoCard accent="blue" icon={Scale} title="8. Limitación de Responsabilidad">
            <p>
              No seremos responsables por daños directos, indirectos, incidentales o consecuentes derivados del
              uso de este sitio o la información aquí contenida.
            </p>
          </InfoCard>
        </div>

        <InfoCard accent="blue" icon={Lock} title="9. Privacidad">
          <p>
            Tu privacidad es importante. Revisa nuestra Política de Privacidad para entender cómo recopilamos,
            usamos y protegemos tu información conforme a la <strong>Ley 1581 de 2012</strong> de Colombia.
          </p>
        </InfoCard>

        <InfoCard accent="red" icon={Edit3} title="10. Cambios en los Términos">
          <p>
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios serán efectivos
            inmediatamente tras su publicación en este sitio.
          </p>
        </InfoCard>

        <InfoCard accent="yellow" icon={Flag} title="11. Ley Aplicable">
          <p>
            Estos términos se regirán e interpretarán de acuerdo con las leyes de la{" "}
            <strong>República de Colombia</strong>. Solo se recomiendan operadores licenciados por{" "}
            <strong>Coljuegos</strong>.
          </p>
        </InfoCard>
      </div>

      {/* Фінальний disclaimer */}
      <div className="mt-8 rounded-lg overflow-hidden border border-mx-red/30">
        <div className="flex h-1 w-full">
          <div className="flex-1 bg-mx-green"></div>
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-mx-red"></div>
        </div>
        <div className="bg-mx-red/5 p-5 text-center">
          <p className="text-sm text-mx-red-dark font-semibold">
            +18 | Solo para residentes en Colombia | Operadores licenciados por Coljuegos | El juego puede ser
            adictivo — Juega con responsabilidad.
          </p>
        </div>
      </div>
    </div>
  )
}
