import {
  Shield,
  AlertTriangle,
  Clock,
  Wallet,
  Coffee,
  TrendingDown,
  Phone,
  Globe,
  Heart,
  CheckCircle2,
  Users2,
  LifeBuoy,
} from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { InfoCard } from "@/components/info-card"

const principios = [
  {
    icon: Clock,
    title: "Establece Límites de Tiempo",
    text: "Decide cuánto tiempo dedicarás a jugar antes de comenzar, y respétalo.",
  },
  {
    icon: Wallet,
    title: "Establece Límites de Dinero",
    text: "Apuesta solo dinero que puedas permitirte perder. Nunca pidas prestado para apostar.",
  },
  {
    icon: Coffee,
    title: "Toma Descansos",
    text: "Aléjate regularmente del juego para mantener perspectiva y control.",
  },
  {
    icon: TrendingDown,
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
    icon: Shield,
    accent: "blue" as const,
    name: "Coljuegos",
    text: "Entidad oficial que regula y controla la actividad de juegos de suerte y azar en Colombia.",
    web: "www.coljuegos.gov.co",
    phone: "01 8000 113 113",
  },
  {
    icon: Phone,
    accent: "red" as const,
    name: "Línea Nacional de Salud Mental",
    text: "Apoyo psicológico gratuito para adicciones comportamentales, incluida la ludopatía.",
    web: "MinSalud · Línea 192",
    phone: "192 / Bogotá (+57 1) 106",
  },
  {
    icon: Users2,
    accent: "yellow" as const,
    name: "Jugadores Anónimos",
    text: "Comunidad de personas que comparten su experiencia para ayudarse mutuamente a superar la adicción al juego.",
    web: "www.jugadoresanonimos.org",
    phone: "Bogotá · Medellín · Cali",
  },
  {
    icon: Globe,
    accent: "blue" as const,
    name: "Ministerio de Salud",
    text: "Orientación y recursos para el tratamiento de adicciones. Programas de atención psicosocial nacional.",
    web: "www.minsalud.gov.co",
    phone: "(+57 1) 595 3525",
  },
]

export default function ResponsibleGamingPage() {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-8 max-w-5xl">
      <PageHero
        icon={Shield}
        badge="JUEGA SEGURO"
        title="Juego Responsable"
        subtitle="Tu seguridad y bienestar son nuestra prioridad"
      />

      {/* Алерт */}
      <div className="mb-5 rounded-lg border-l-4 border-mx-red bg-mx-red/5 p-5">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-md bg-mx-red flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-mx-red-dark font-extrabold text-lg mb-1">Aviso Importante</h2>
            <p className="text-sm text-gray-800 leading-relaxed mb-1">
              El juego siempre debe ser divertido y de entretenimiento. Si apostar deja de ser entretenido o comienza
              a causar problemas en tu vida, es momento de buscar ayuda.
            </p>
            <p className="text-sm text-mx-red-dark font-semibold">
              Recuerda: nunca estás solo y siempre hay ayuda disponible.
            </p>
          </div>
        </div>
      </div>

      <InfoCard accent="blue" icon={Heart} title="Jugar con Responsabilidad">
        <p>
          El juego responsable significa disfrutar las apuestas como entretenimiento manteniendo el control sobre
          tu tiempo y dinero. Implica entender los riesgos, establecer límites y saber cuándo detenerse.
        </p>
      </InfoCard>

      {/* Принципи */}
      <h2 className="text-xl sm:text-2xl font-extrabold text-mx-green-dark mb-3 mt-8">
        Principios Clave del Juego Responsable
      </h2>
      <div className="grid gap-3 sm:grid-cols-2 mb-8">
        {principios.map((p, i) => {
          const Icon = p.icon
          return (
            <div
              key={i}
              className="bg-gradient-to-br from-mx-green-dark to-mx-green-mid text-white rounded-lg p-4 flex items-start gap-3 shadow-sm"
            >
              <div className="w-10 h-10 rounded-md bg-mx-green flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-mx-green-dark" />
              </div>
              <div>
                <h3 className="text-sm font-bold mb-1">{p.title}</h3>
                <p className="text-xs sm:text-sm text-white/85 leading-snug">{p.text}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Сигнали тривоги */}
      <InfoCard accent="red" icon={AlertTriangle} title="Señales de Alerta">
        <p>Es importante reconocer cuándo el juego podría estar convirtiéndose en un problema:</p>
        <ul className="grid gap-1.5 sm:grid-cols-2 pt-1">
          {señales.map((s, i) => (
            <li key={i} className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-mx-red mt-0.5 flex-shrink-0" />
              <span className="text-sm">{s}</span>
            </li>
          ))}
        </ul>
      </InfoCard>

      {/* Інструменти */}
      <div className="mt-4">
        <InfoCard accent="yellow" icon={Shield} title="Herramientas de Autocontrol">
          <p>Las casas de apuestas licenciadas por Coljuegos ofrecen herramientas para mantener el control:</p>
          <div className="grid gap-2 sm:grid-cols-2 pt-2">
            {herramientas.map((h, i) => (
              <div key={i} className="bg-mx-green/10 border border-mx-green/40 rounded-md p-3">
                <h4 className="text-sm font-bold text-mx-green-dark mb-0.5">{h.label}</h4>
                <p className="text-xs sm:text-sm text-gray-700">{h.text}</p>
              </div>
            ))}
          </div>
        </InfoCard>
      </div>

      {/* Де шукати допомогу */}
      <h2 className="text-xl sm:text-2xl font-extrabold text-mx-green-dark mb-3 mt-8">Dónde Buscar Ayuda</h2>
      <p className="text-sm text-gray-700 mb-4">
        Si te preocupa tu juego o el de alguien cercano, hay ayuda disponible. Estas organizaciones brindan apoyo
        gratuito y confidencial:
      </p>
      <div className="grid gap-3 sm:grid-cols-2 mb-8">
        {organizaciones.map((o, i) => {
          const Icon = o.icon
          const barColor =
            o.accent === "yellow" ? "bg-mx-green" : o.accent === "red" ? "bg-mx-red" : "bg-mx-green-mid"
          const iconBg =
            o.accent === "yellow" ? "bg-mx-green/15" : o.accent === "red" ? "bg-mx-red/10" : "bg-mx-green-mid/10"
          const iconColor =
            o.accent === "yellow" ? "text-mx-green-mid" : o.accent === "red" ? "text-mx-red" : "text-mx-green-mid"
          return (
            <div key={i} className="relative bg-white rounded-lg border border-gray-200 shadow-sm p-5 pl-6">
              <div className={`absolute left-0 top-3 bottom-3 w-1 rounded-r ${barColor}`} />
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-10 h-10 rounded-md flex items-center justify-center flex-shrink-0 ${iconBg}`}>
                  <Icon className={`w-5 h-5 ${iconColor}`} />
                </div>
                <h3 className="text-base font-bold text-mx-green-dark pt-1">{o.name}</h3>
              </div>
              <p className="text-sm text-gray-700 mb-3 leading-relaxed">{o.text}</p>
              <div className="space-y-1 text-sm">
                <p className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-gray-500" />
                  <span className="text-gray-700">{o.web}</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-gray-500" />
                  <span className="text-gray-700 font-semibold">{o.phone}</span>
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Для родичів */}
      <InfoCard accent="blue" icon={Users2} title="Para Familiares y Amigos">
        <p>
          Los problemas de juego no solo afectan al jugador, también impactan a familias y amigos. Si alguien
          cercano tiene problemas:
        </p>
        <ul className="space-y-1.5 pt-1">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-mx-green-mid mt-0.5 flex-shrink-0" />
            <span>No ignores el problema ni esperes que desaparezca.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-mx-green-mid mt-0.5 flex-shrink-0" />
            <span>Anímalo a buscar ayuda profesional.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-mx-green-mid mt-0.5 flex-shrink-0" />
            <span>No le prestes dinero ni pagues sus deudas de juego.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-mx-green-mid mt-0.5 flex-shrink-0" />
            <span>Cuida tu propio bienestar y considera buscar apoyo para ti también.</span>
          </li>
        </ul>
      </InfoCard>

      {/* Нагадування */}
      <div className="my-5 rounded-lg border-l-4 border-mx-green bg-mx-green/10 p-5">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-md bg-mx-green flex items-center justify-center flex-shrink-0">
            <Heart className="w-5 h-5 text-mx-green-dark" />
          </div>
          <div>
            <h3 className="text-mx-green-dark font-extrabold text-base mb-1">Recuerda</h3>
            <p className="text-sm text-gray-800 leading-relaxed mb-1">
              La <strong>ludopatía es una condición médica reconocida</strong>, no una falla moral ni falta de
              voluntad.
            </p>
            <p className="text-sm text-gray-800 leading-relaxed">
              La recuperación es posible con el apoyo y tratamiento adecuados. El primer paso es reconocer que hay
              un problema y pedir ayuda.
            </p>
          </div>
        </div>
      </div>

      {/* Наша обіцянка */}
      <InfoCard accent="yellow" icon={Shield} title="Nuestro Compromiso">
        <p>Solo recomendamos operadores que:</p>
        <ul className="space-y-1.5 pt-1">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-mx-green-mid mt-0.5 flex-shrink-0" />
            <span>Cuentan con licencia vigente de Coljuegos.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-mx-green-mid mt-0.5 flex-shrink-0" />
            <span>Proporcionan herramientas completas de juego responsable.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-mx-green-mid mt-0.5 flex-shrink-0" />
            <span>Aplican verificación estricta de edad (+18) y KYC.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-mx-green-mid mt-0.5 flex-shrink-0" />
            <span>Ofrecen términos y condiciones transparentes.</span>
          </li>
        </ul>
      </InfoCard>

      {/* Фінальний CTA */}
      <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
        <div className="flex h-1 w-full">
          <div className="flex-1 bg-mx-green"></div>
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-mx-red"></div>
        </div>
        <div className="bg-gradient-to-br from-mx-green-dark to-mx-green-mid p-6 sm:p-8 text-center text-white">
          <div className="w-14 h-14 rounded-full bg-mx-green mx-auto mb-3 flex items-center justify-center">
            <LifeBuoy className="w-7 h-7 text-mx-green-dark" />
          </div>
          <h3 className="text-2xl font-extrabold mb-2">¿Necesitas Ayuda Ahora?</h3>
          <p className="text-white/90 mb-4 max-w-2xl mx-auto">
            Si tú o alguien que conoces necesita apoyo inmediato, no esperes. La ayuda está disponible las 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <div className="bg-white/10 border border-white/20 rounded-md px-4 py-3">
              <p className="text-[10px] uppercase tracking-wider text-mx-green font-bold mb-0.5">Línea Coljuegos</p>
              <p className="text-lg font-bold">01 8000 113 113</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-md px-4 py-3">
              <p className="text-[10px] uppercase tracking-wider text-mx-green font-bold mb-0.5">Línea MinSalud</p>
              <p className="text-lg font-bold">192</p>
            </div>
          </div>
          <p className="text-xs text-white/70 mt-3">Gratuita, confidencial y disponible 24/7.</p>
        </div>
      </div>
    </div>
  )
}
