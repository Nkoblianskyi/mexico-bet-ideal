import { PageHero } from "@/components/page-hero"
import { InfoCard } from "@/components/info-card"

const principios = [
  {
    title: "Establece Límites de Tiempo",
    text: "Decide cuánto tiempo dedicarás a jugar antes de comenzar, y respétalo.",
  },
  {
    title: "Establece Límites de Dinero",
    text: "Apuesta solo dinero que puedas permitirte perder. Nunca pidas prestado para apostar.",
  },
  {
    title: "Toma Descansos",
    text: "Aléjate regularmente del juego para mantener perspectiva y control.",
  },
  {
    title: "No Persigas Pérdidas",
    text: "Acepta las pérdidas como parte del costo del entretenimiento.",
  },
]

const señales = [
  "Gastar más tiempo o dinero en apuestas de lo planeado.",
  "Sentir ansiedad, depresión o culpa por el juego.",
  "Mentir a familiares o amigos sobre tus apuestas.",
  "Pedir dinero prestado o vender objetos para apostar.",
  "Descuidar trabajo, familia u otras responsabilidades.",
  "Pensar constantemente en apostar.",
  "Sentir la necesidad de apostar más para la misma emoción.",
  "No poder detenerte o reducir el juego.",
]

const herramientas = [
  { label: "Límites de Depósito", text: "Establece topes diarios, semanales o mensuales." },
  { label: "Límites de Pérdida", text: "Define cuánto puedes perder en un periodo específico." },
  { label: "Límites de Sesión", text: "Limita el tiempo que puedes jugar por sesión." },
  { label: "Recordatorios de Realidad", text: "Alertas periódicas sobre el tiempo jugado." },
  { label: "Autoexclusión", text: "Bloquéate temporal o permanentemente de las plataformas." },
]

const organizaciones = [
  {
    name: "SEGOB · DGJS",
    text: "Dirección General de Juegos y Sorteos de la Secretaría de Gobernación: autoridad oficial que regula y supervisa los juegos con apuestas en México.",
    web: "www.gob.mx/segob",
    phone: "55 5128 0000",
  },
  {
    name: "Línea de la Vida",
    text: "Servicio gratuito y confidencial de la Secretaría de Salud. Apoyo psicológico 24/7 para adicciones, incluida la ludopatía.",
    web: "www.gob.mx/salud/conadic",
    phone: "800 911 2000",
  },
  {
    name: "Jugadores Anónimos México",
    text: "Comunidad de personas que comparten su experiencia para superar la adicción al juego. Reuniones en CDMX, Guadalajara, Monterrey y otras ciudades.",
    web: "www.jugadoresanonimos.org.mx",
    phone: "55 5544 3031",
  },
  {
    name: "Centros de Integración Juvenil (CIJ)",
    text: "Red nacional especializada en prevención y tratamiento de adicciones. Atención gratuita en más de 115 unidades en todo México.",
    web: "www.gob.mx/salud/cij",
    phone: "55 5212 1212",
  },
]

export default function ResponsibleGamingPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-10 max-w-5xl">
      <PageHero
        badge="Juega seguro"
        title="Juego Responsable"
        subtitle="Guía de buenas prácticas, señales de alerta y recursos oficiales de apoyo en México."
      />

      <div className="space-y-5">
        <section className="bg-white border border-gray-200 border-l-4 border-l-gray-900 p-5 sm:p-6">
          <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-gray-900 mb-2">
            Aviso Importante
          </div>
          <p className="text-sm text-gray-800 leading-relaxed mb-1">
            El juego siempre debe ser entretenimiento. Si apostar deja de ser divertido o comienza a
            causar problemas en tu vida, es momento de buscar ayuda.
          </p>
          <p className="text-sm text-gray-900 font-semibold">
            Nunca estás solo y siempre hay ayuda disponible.
          </p>
        </section>

        <InfoCard number="01" title="Jugar con Responsabilidad">
          <p>
            El juego responsable significa disfrutar las apuestas como entretenimiento manteniendo
            el control sobre tu tiempo y dinero. Implica entender los riesgos, establecer límites y
            saber cuándo detenerse.
          </p>
        </InfoCard>

        <section className="bg-white border border-gray-200 p-5 sm:p-6">
          <h3 className="flex items-baseline gap-3 text-sm sm:text-base font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-2 mb-4">
            <span className="text-mx-green-dark font-extrabold tabular-nums">02</span>
            <span>Principios Clave del Juego Responsable</span>
          </h3>
          <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {principios.map((p, i) => (
              <div key={i} className="border-l-2 border-mx-green-dark/70 pl-4 py-1">
                <h4 className="text-[13px] font-bold uppercase tracking-wider text-gray-900">
                  <span className="text-mx-green-dark mr-2 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {p.title}
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed mt-1">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white border border-gray-200 p-5 sm:p-6">
          <h3 className="flex items-baseline gap-3 text-sm sm:text-base font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-2 mb-3">
            <span className="text-mx-green-dark font-extrabold tabular-nums">03</span>
            <span>Señales de Alerta</span>
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Es importante reconocer cuándo el juego podría estar convirtiéndose en un problema:
          </p>
          <ul className="divide-y divide-gray-200 border-y border-gray-200 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:divide-y-0 sm:border-0">
            {señales.map((s, i) => (
              <li
                key={i}
                className="flex items-start gap-3 py-2.5 text-sm text-gray-800 sm:border-b sm:border-gray-200"
              >
                <span className="text-mx-green-dark font-bold tabular-nums w-6 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed">{s}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white border border-gray-200 p-5 sm:p-6">
          <h3 className="flex items-baseline gap-3 text-sm sm:text-base font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-2 mb-3">
            <span className="text-mx-green-dark font-extrabold tabular-nums">04</span>
            <span>Herramientas de Autocontrol</span>
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Las casas de apuestas con permiso vigente otorgado por la SEGOB ofrecen herramientas
            para mantener el control:
          </p>
          <div className="grid gap-px bg-gray-200 sm:grid-cols-2 border border-gray-200">
            {herramientas.map((h, i) => (
              <div key={i} className="bg-white p-4">
                <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-mx-green-dark mb-1">
                  {String(i + 1).padStart(2, "0")} · {h.label}
                </h4>
                <p className="text-sm text-gray-700 leading-snug">{h.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white border border-gray-200 p-5 sm:p-6">
          <h3 className="flex items-baseline gap-3 text-sm sm:text-base font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-2 mb-3">
            <span className="text-mx-green-dark font-extrabold tabular-nums">05</span>
            <span>Dónde Buscar Ayuda</span>
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Si te preocupa tu juego o el de alguien cercano, hay ayuda disponible. Estas
            organizaciones brindan apoyo gratuito y confidencial en todo México:
          </p>
          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {organizaciones.map((o, i) => (
              <div key={i} className="py-4 grid grid-cols-1 md:grid-cols-[1fr_auto] md:gap-8 gap-3">
                <div>
                  <div className="flex items-baseline gap-3 mb-1.5">
                    <span className="text-mx-green-dark font-extrabold tabular-nums text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h4 className="text-base font-bold text-gray-900 uppercase tracking-wide">
                      {o.name}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed md:pl-8">{o.text}</p>
                </div>
                <dl className="md:text-right text-sm md:min-w-[220px]">
                  <div className="md:mb-2">
                    <dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
                      Sitio web
                    </dt>
                    <dd className="text-gray-800 font-mono text-xs">{o.web}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
                      Teléfono
                    </dt>
                    <dd className="text-gray-900 font-bold">{o.phone}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </section>

        <InfoCard number="06" title="Para Familiares y Amigos">
          <p>
            Los problemas de juego no solo afectan al jugador, también impactan a familias y
            amigos. Si alguien cercano tiene problemas:
          </p>
          <ul className="mt-3 divide-y divide-gray-200 border-y border-gray-200">
            <li className="py-2 text-sm">— No ignores el problema ni esperes que desaparezca.</li>
            <li className="py-2 text-sm">— Anímalo a buscar ayuda profesional.</li>
            <li className="py-2 text-sm">— No le prestes dinero ni pagues sus deudas de juego.</li>
            <li className="py-2 text-sm">
              — Cuida tu propio bienestar y considera buscar apoyo para ti también.
            </li>
          </ul>
        </InfoCard>

        <section className="bg-white border border-gray-200 border-l-4 border-l-mx-green-dark p-5 sm:p-6">
          <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-mx-green-dark mb-2">
            Recuerda
          </div>
          <p className="text-sm text-gray-800 leading-relaxed mb-2">
            La <strong>ludopatía es una condición médica reconocida</strong>, no una falla moral ni
            falta de voluntad.
          </p>
          <p className="text-sm text-gray-800 leading-relaxed">
            La recuperación es posible con el apoyo y tratamiento adecuados. El primer paso es
            reconocer que hay un problema y pedir ayuda.
          </p>
        </section>

        <InfoCard number="07" title="Nuestro Compromiso">
          <p>Solo recomendamos operadores que:</p>
          <ul className="mt-3 divide-y divide-gray-200 border-y border-gray-200">
            <li className="py-2 text-sm">
              — Cuentan con permiso vigente otorgado por la SEGOB (DGJS).
            </li>
            <li className="py-2 text-sm">
              — Proporcionan herramientas completas de juego responsable.
            </li>
            <li className="py-2 text-sm">— Aplican verificación estricta de edad (+18) y KYC.</li>
            <li className="py-2 text-sm">— Ofrecen términos y condiciones transparentes.</li>
          </ul>
        </InfoCard>

        <section className="bg-white border border-gray-900">
          <div className="flex h-1 w-full">
            <div className="flex-1 bg-mx-green"></div>
            <div className="flex-1 bg-gray-900"></div>
            <div className="flex-1 bg-mx-red"></div>
          </div>
          <div className="px-6 sm:px-8 py-8">
            <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-mx-green-dark mb-2">
              Contacto de emergencia
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
              ¿Necesitas Ayuda Ahora?
            </h3>
            <p className="text-sm text-gray-700 max-w-2xl mb-6">
              Si tú o alguien que conoces necesita apoyo inmediato, no esperes. La ayuda está
              disponible las 24 horas, de forma gratuita y confidencial.
            </p>
            <div className="grid sm:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
              <div className="bg-white p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-mx-green-dark mb-1">
                  Línea de la Vida
                </p>
                <p className="text-3xl font-extrabold text-gray-900 tabular-nums">800 911 2000</p>
                <p className="text-xs text-gray-500 mt-1">Atención 24/7 · Secretaría de Salud</p>
              </div>
              <div className="bg-white p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-mx-green-dark mb-1">
                  Jugadores Anónimos MX
                </p>
                <p className="text-3xl font-extrabold text-gray-900 tabular-nums">55 5544 3031</p>
                <p className="text-xs text-gray-500 mt-1">Grupos de apoyo en todo el país</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
