import { PageHero } from "@/components/page-hero"
import { InfoCard } from "@/components/info-card"

const criterios = [
  { label: "Licencia y Regulación", text: "Solo destacamos plataformas con permiso vigente otorgado por la SEGOB (DGJS)." },
  { label: "Seguridad y Confianza", text: "Encriptación SSL, protección KYC y herramientas de juego responsable." },
  { label: "Cobertura de Mercados", text: "Liga MX, Champions, NBA, MLB, NFL, UFC, Box, eSports y más." },
  { label: "Cuotas Competitivas", text: "Comparación directa de cuotas en eventos deportivos principales." },
  { label: "Valor de Promociones", text: "Análisis transparente de rollover, cuota mínima y plazos." },
  { label: "Métodos de Pago", text: "SPEI, OXXO, CoDi, Mercado Pago, BBVA y tarjetas Visa/Mastercard." },
  { label: "Atención al Cliente", text: "Soporte en español 24/7 vía chat, correo y teléfono." },
  { label: "Plataforma Móvil", text: "Apps nativas Android/iOS y web móvil optimizada." },
  { label: "Apuestas en Vivo", text: "In-play, cash out, bet builder y transmisiones HD." },
  { label: "Diseño y Usabilidad", text: "Navegación intuitiva y experiencia de usuario fluida." },
]

const proceso = [
  "Registro real y verificación de identidad (KYC).",
  "Pruebas de depósito y retiro con dinero real (MXN).",
  "Apuestas en diferentes deportes y mercados.",
  "Evaluación de atención al cliente en tiempo real.",
  "Pruebas de rendimiento en app móvil y web.",
  "Revisión detallada de términos de promociones.",
]

const promesas = [
  { title: "Transparencia", text: "Divulgación completa del proceso de evaluación y relaciones comerciales." },
  { title: "Precisión", text: "Actualizaciones constantes para mantener información precisa y relevante." },
  { title: "Responsabilidad", text: "Promovemos comportamientos seguros y juego responsable." },
  { title: "Experiencia", text: "Evaluaciones realizadas por especialistas del sector de apuestas." },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-10 max-w-5xl">
      <PageHero
        badge="Quiénes somos"
        title="Sobre Mejores Apuestas México"
        subtitle="Guía editorial independiente dedicada al análisis y la comparación de casas de apuestas con permiso vigente en los Estados Unidos Mexicanos."
      />

      <div className="space-y-5">
        <InfoCard number="01" title="Nuestro Propósito">
          <p>
            En <strong>Mejores Apuestas México</strong> nos dedicamos a entregar información completa,
            confiable y actualizada sobre las casas de apuestas online en México. Simplificamos tu
            decisión frente a la gran cantidad de operadores con permiso vigente disponibles en el país.
          </p>
        </InfoCard>

        <InfoCard number="02" title="Cómo Evaluamos las Casas de Apuestas">
          <p>
            Nuestro marco de evaluación se basa en años de experiencia y en un entendimiento profundo
            de lo que valoran los apostadores mexicanos. Analizamos cada operador aplicando los
            criterios listados a continuación.
          </p>
        </InfoCard>

        <section className="bg-white border border-gray-200 p-5 sm:p-6">
          <h3 className="flex items-baseline gap-3 text-sm sm:text-base font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-2 mb-4">
            <span className="text-mx-green-dark font-extrabold tabular-nums">03</span>
            <span>Criterios de Evaluación</span>
          </h3>
          <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {criterios.map((c, i) => (
              <div key={i} className="border-l-2 border-mx-green-dark/70 pl-4 py-1">
                <dt className="text-[13px] font-bold uppercase tracking-wider text-gray-900">
                  <span className="text-mx-green-dark mr-2 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {c.label}
                </dt>
                <dd className="text-sm text-gray-700 leading-relaxed mt-1">{c.text}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="bg-white border border-gray-200 p-5 sm:p-6">
          <h3 className="flex items-baseline gap-3 text-sm sm:text-base font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-2 mb-4">
            <span className="text-mx-green-dark font-extrabold tabular-nums">04</span>
            <span>Metodología de Prueba</span>
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Cada casa de apuestas mostrada en el sitio pasa por una evaluación exhaustiva. Nuestro
            equipo abre cuentas reales, realiza depósitos, hace apuestas y evalúa el servicio al
            cliente para ofrecer perspectivas auténticas basadas en experiencia real de usuario.
          </p>
          <ol className="divide-y divide-gray-200 border-y border-gray-200">
            {proceso.map((p, i) => (
              <li key={i} className="flex items-start gap-4 py-3 text-sm text-gray-800">
                <span className="text-mx-green-dark font-extrabold tabular-nums text-base w-8 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed">{p}</span>
              </li>
            ))}
          </ol>
        </section>

        <InfoCard number="05" title="Por Qué Confiar en Nuestras Reseñas">
          <p>
            La independencia editorial es el fundamento de nuestro trabajo. Aunque podemos recibir
            compensación cuando accedes a plataformas a través de nuestro sitio, esto{" "}
            <strong>nunca</strong> afecta nuestros rankings o evaluaciones. Nuestro equipo editorial
            mantiene autonomía total.
          </p>
        </InfoCard>

        <section className="bg-white border border-gray-200 p-5 sm:p-6">
          <h3 className="flex items-baseline gap-3 text-sm sm:text-base font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-2 mb-4">
            <span className="text-mx-green-dark font-extrabold tabular-nums">06</span>
            <span>Nuestra Promesa</span>
          </h3>
          <div className="grid gap-px bg-gray-200 sm:grid-cols-2 border border-gray-200">
            {promesas.map((p, i) => (
              <div key={i} className="bg-white p-4 sm:p-5">
                <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-mx-green-dark mb-1.5">
                  {String(i + 1).padStart(2, "0")} · {p.title}
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        <InfoCard number="07" title="Juego Responsable">
          <p>
            Defendemos los principios del juego responsable. Las apuestas deben ser entretenimiento
            y nunca causar dificultades financieras o personales.
          </p>
          <ul className="mt-3 divide-y divide-gray-200 border-y border-gray-200">
            <li className="py-2 text-sm">— Herramientas de autoexclusión y límites de gasto.</li>
            <li className="py-2 text-sm">— Acceso a organizaciones de ayuda contra la ludopatía.</li>
            <li className="py-2 text-sm">— Procedimientos de verificación de edad (+18).</li>
            <li className="py-2 text-sm">— Términos y políticas transparentes.</li>
          </ul>
        </InfoCard>

        <InfoCard number="08" title="Información Siempre Actualizada">
          <p>
            El sector de apuestas online cambia rápidamente. Monitoreamos el mercado mexicano de
            forma constante para que nuestras evaluaciones y rankings reflejen con precisión el
            estado actual de cada casa: nuevos métodos de pago, cambios en bonos o actualizaciones
            del permiso SEGOB.
          </p>
        </InfoCard>

        <section className="bg-white border border-gray-200 border-l-4 border-l-gray-900 p-5 sm:p-6">
          <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-gray-900 mb-2">
            Aviso Importante
          </div>
          <p className="text-sm text-gray-800 leading-relaxed mb-2">
            El juego debe ser una actividad de entretenimiento. Nunca apuestes más de lo que puedas
            permitirte perder y mantén siempre hábitos de juego responsable.
          </p>
          <p className="text-sm text-gray-800 leading-relaxed">
            Si el juego se convierte en un problema, busca ayuda en organizaciones especializadas.
            En México puedes llamar a la{" "}
            <strong className="text-gray-900">Línea de la Vida: 800 911 2000</strong> o a{" "}
            <strong className="text-gray-900">Jugadores Anónimos México: 55 5544 3031</strong>.
          </p>
        </section>
      </div>
    </div>
  )
}
