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
    <div className="container mx-auto px-4 py-8 sm:py-10 max-w-5xl">
      <PageHero
        badge="Términos y condiciones"
        title="Términos y Condiciones"
        subtitle="Reglas y condiciones de uso del sitio Mejores Apuestas México."
        updatedAt
      />

      <div className="space-y-5">
        <InfoCard number="01" title="Aceptación de Términos">
          <p>
            Al acceder y usar <strong>Mejores Apuestas México</strong>, aceptas cumplir con los
            términos y disposiciones de este acuerdo. Si no estás de acuerdo, por favor no utilices
            el sitio.
          </p>
        </InfoCard>

        <InfoCard number="02" title="Propósito del Sitio">
          <p>
            Este sitio web proporciona información y reseñas sobre casas de apuestas disponibles en
            México. Somos un servicio de comparación independiente y{" "}
            <strong>no operamos servicios de juego</strong> nosotros mismos.
          </p>
        </InfoCard>

        <InfoCard number="03" title="Restricción de Edad (+18)">
          <p>
            Debes tener al menos <strong>18 años</strong> para usar este sitio. El juego está
            restringido a adultos. Tomamos en serio la verificación de edad y promovemos el juego
            responsable conforme a la <strong>Ley Federal de Juegos y Sorteos</strong> y su
            Reglamento, bajo supervisión de la <strong>SEGOB</strong>.
          </p>
        </InfoCard>

        <InfoCard number="04" title="Precisión de la Información">
          <p>
            Aunque nos esforzamos por brindar información precisa y actualizada, no podemos
            garantizar la exactitud de todo el contenido. Las cuotas, bonos y términos pueden
            cambiar sin previo aviso.
          </p>
        </InfoCard>

        <InfoCard number="05" title="Enlaces a Terceros">
          <p>
            Nuestro sitio contiene enlaces a casas de apuestas externas. No somos responsables del
            contenido, términos o prácticas de estos sitios. Revisa sus términos y condiciones
            antes de usarlos.
          </p>
        </InfoCard>

        <InfoCard number="06" title="Juego Responsable">
          <p>Promovemos el juego responsable y alentamos a nuestros usuarios a:</p>
          <ul className="mt-3 divide-y divide-gray-200 border-y border-gray-200">
            {juegoResp.map((j, i) => (
              <li key={i} className="py-2 text-sm text-gray-800">
                — {j}
              </li>
            ))}
          </ul>
        </InfoCard>

        <section className="bg-white border border-gray-200 p-5 sm:p-6">
          <h3 className="flex items-baseline gap-3 text-sm sm:text-base font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-2 mb-3">
            <span className="text-mx-green-dark font-extrabold tabular-nums">07 · 08</span>
            <span>Propiedad Intelectual y Responsabilidad</span>
          </h3>
          <dl className="divide-y divide-gray-200 border-y border-gray-200">
            <div className="py-3 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-2 md:gap-6">
              <dt className="text-xs font-bold uppercase tracking-[0.18em] text-gray-900">
                Propiedad Intelectual
              </dt>
              <dd className="text-sm text-gray-700 leading-relaxed">
                Todo el contenido de este sitio, incluyendo textos, gráficos, logos e imágenes, es
                propiedad de Mejores Apuestas México y está protegido por la Ley Federal del Derecho
                de Autor de México.
              </dd>
            </div>
            <div className="py-3 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-2 md:gap-6">
              <dt className="text-xs font-bold uppercase tracking-[0.18em] text-gray-900">
                Limitación de Responsabilidad
              </dt>
              <dd className="text-sm text-gray-700 leading-relaxed">
                No seremos responsables por daños directos, indirectos, incidentales o consecuentes
                derivados del uso de este sitio o la información aquí contenida.
              </dd>
            </div>
          </dl>
        </section>

        <InfoCard number="09" title="Privacidad">
          <p>
            Tu privacidad es importante. Revisa nuestra Política de Privacidad para entender cómo
            recopilamos, usamos y protegemos tu información conforme a la{" "}
            <strong>
              Ley Federal de Protección de Datos Personales en Posesión de los Particulares
              (LFPDPPP)
            </strong>
            .
          </p>
        </InfoCard>

        <InfoCard number="10" title="Cambios en los Términos">
          <p>
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios
            serán efectivos inmediatamente tras su publicación en este sitio.
          </p>
        </InfoCard>

        <InfoCard number="11" title="Ley Aplicable">
          <p>
            Estos términos se regirán e interpretarán de acuerdo con las leyes de los{" "}
            <strong>Estados Unidos Mexicanos</strong>. Solo se recomiendan operadores con permiso
            vigente otorgado por la <strong>SEGOB</strong> (Dirección General de Juegos y Sorteos).
          </p>
        </InfoCard>

        <section className="bg-white border border-gray-900">
          <div className="flex h-1 w-full">
            <div className="flex-1 bg-mx-green"></div>
            <div className="flex-1 bg-gray-900"></div>
            <div className="flex-1 bg-mx-red"></div>
          </div>
          <div className="p-5 sm:p-6 text-center">
            <p className="text-sm text-gray-900 font-semibold tracking-wide">
              +18 · Solo para residentes en México · Operadores regulados por la SEGOB · El juego
              puede ser adictivo — Juega con responsabilidad.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
