import {
  Info,
  Award,
  ShieldCheck,
  Target,
  Users,
  Sparkles,
  AlertTriangle,
  Clock,
  Wallet,
  Smartphone,
  Radio,
  MousePointerClick,
} from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { InfoCard } from "@/components/info-card"

const criterios = [
  { label: "Licencia y Regulación", text: "Solo destacamos plataformas licenciadas por Coljuegos." },
  { label: "Seguridad y Confianza", text: "Encriptación SSL, protección KYC y herramientas de juego responsable." },
  { label: "Cobertura de Mercados", text: "Liga BetPlay, Champions, NBA, MLB, UFC, eSports y más." },
  { label: "Cuotas Competitivas", text: "Comparación directa de cuotas en eventos deportivos principales." },
  { label: "Valor de Promociones", text: "Análisis transparente de rollover, cuota mínima y plazos." },
  { label: "Métodos de Pago", text: "PSE, Efecty, Nequi, Daviplata y tarjetas locales." },
  { label: "Atención al Cliente", text: "Soporte en español 24/7 vía chat, correo y teléfono." },
  { label: "Plataforma Móvil", text: "Apps nativas Android/iOS y web móvil optimizada." },
  { label: "Apuestas en Vivo", text: "In-play, cash out, bet builder y transmisiones HD." },
  { label: "Diseño y Usabilidad", text: "Navegación intuitiva y experiencia de usuario fluida." },
]

const proceso = [
  { icon: Users, text: "Registro real y verificación de identidad (KYC)." },
  { icon: Wallet, text: "Pruebas de depósito y retiro con dinero real." },
  { icon: Target, text: "Apuestas en diferentes deportes y mercados." },
  { icon: Radio, text: "Evaluación de atención al cliente en tiempo real." },
  { icon: Smartphone, text: "Pruebas de rendimiento en app móvil y web." },
  { icon: MousePointerClick, text: "Revisión detallada de términos de promociones." },
]

const promesas = [
  { accent: "yellow" as const, title: "Transparencia", text: "Divulgación completa del proceso de evaluación y relaciones comerciales." },
  { accent: "blue" as const, title: "Precisión", text: "Actualizaciones constantes para mantener información precisa y relevante." },
  { accent: "red" as const, title: "Responsabilidad", text: "Promovemos comportamientos seguros y juego responsable." },
  { accent: "blue" as const, title: "Experiencia", text: "Evaluaciones realizadas por especialistas del sector de apuestas." },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-8 max-w-5xl">
      <PageHero
        icon={Info}
        badge="QUIÉNES SOMOS"
        title="Sobre Mejores Apuestas Colombia"
        subtitle="Tu destino preferido para reseñas y análisis de casas de apuestas en Colombia"
      />

      {/* Propósito */}
      <div className="mb-6">
        <InfoCard accent="yellow" icon={Sparkles} title="Nuestro Propósito">
          <p>
            En <strong>Mejores Apuestas Colombia</strong> nos dedicamos a entregar la información más completa,
            confiable y actualizada sobre las casas de apuestas online en Colombia. Simplificamos tu decisión frente
            a la gran cantidad de operadores licenciados disponibles en el país.
          </p>
        </InfoCard>
      </div>

      {/* Evaluación */}
      <div className="mb-6">
        <InfoCard accent="blue" icon={Award} title="Cómo Evaluamos las Casas de Apuestas">
          <p>
            Nuestro marco de evaluación se basa en años de experiencia y en un profundo entendimiento de lo que
            valoran los apostadores colombianos. Analizamos cada operador en múltiples factores.
          </p>
        </InfoCard>
      </div>

      {/* Критерії */}
      <h2 className="text-xl sm:text-2xl font-extrabold text-mx-green-dark mb-3 mt-8">
        Nuestros Criterios de Evaluación
      </h2>
      <div className="grid gap-3 sm:grid-cols-2 mb-8">
        {criterios.map((c, i) => (
          <div
            key={i}
            className="bg-white rounded-lg border border-gray-200 p-4 flex items-start gap-3 hover:border-mx-green-mid/40 hover:shadow-sm transition"
          >
            <div className="w-8 h-8 rounded-md bg-mx-green-mid/10 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-4 h-4 text-mx-green-mid" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-mx-green-dark mb-0.5">{c.label}</h4>
              <p className="text-sm text-gray-700 leading-snug">{c.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Метод */}
      <h2 className="text-xl sm:text-2xl font-extrabold text-mx-green-dark mb-3">Nuestro Método</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Cada casa de apuestas mostrada en el sitio pasa por una evaluación exhaustiva. Nuestro equipo abre cuentas
        reales, realiza depósitos, hace apuestas y evalúa el servicio al cliente para ofrecer perspectivas auténticas
        basadas en experiencia real de usuario.
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {proceso.map((p, i) => {
          const Icon = p.icon
          return (
            <div
              key={i}
              className="bg-gradient-to-br from-mx-green-dark to-mx-green-mid text-white rounded-lg p-4 flex items-center gap-3 shadow-sm"
            >
              <div className="w-9 h-9 rounded-md bg-mx-green flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-mx-green-dark" />
              </div>
              <p className="text-sm leading-snug">{p.text}</p>
            </div>
          )
        })}
      </div>

      {/* Довіра */}
      <div className="mb-6">
        <InfoCard accent="red" icon={ShieldCheck} title="Por Qué Confiar en Nuestras Reseñas">
          <p>
            La independencia editorial es el fundamento de nuestro trabajo. Aunque podemos recibir compensación cuando
            accedes a plataformas a través de nuestro sitio, esto <strong>nunca</strong> afecta nuestros rankings o
            evaluaciones. Nuestro equipo editorial mantiene autonomía total.
          </p>
        </InfoCard>
      </div>

      {/* Обіцянки */}
      <h2 className="text-xl sm:text-2xl font-extrabold text-mx-green-dark mb-3">Nuestra Promesa</h2>
      <div className="grid gap-3 sm:grid-cols-2 mb-8">
        {promesas.map((p, i) => (
          <InfoCard key={i} accent={p.accent} title={p.title}>
            <p>{p.text}</p>
          </InfoCard>
        ))}
      </div>

      {/* Гра відповідально */}
      <div className="mb-6">
        <InfoCard accent="yellow" icon={ShieldCheck} title="Juego Responsable">
          <p>
            Defendemos los principios del juego responsable. Las apuestas deben ser entretenimiento y nunca causar
            dificultades financieras o personales.
          </p>
          <ul className="text-sm space-y-1 mt-2">
            <li>• Herramientas de autoexclusión y límites de gasto.</li>
            <li>• Acceso a organizaciones de ayuda contra la ludopatía.</li>
            <li>• Procedimientos de verificación de edad (+18).</li>
            <li>• Términos y políticas transparentes.</li>
          </ul>
        </InfoCard>
      </div>

      {/* Актуальність */}
      <div className="mb-6">
        <InfoCard accent="blue" icon={Clock} title="Información Siempre Actualizada">
          <p>
            El sector de apuestas online cambia rápidamente. Monitoreamos el mercado colombiano constantemente para
            que nuestras evaluaciones y rankings reflejen con precisión el estado actual de cada casa: nuevos métodos
            de pago, cambios en bonos o actualizaciones de licencia Coljuegos.
          </p>
        </InfoCard>
      </div>

      {/* Важливе попередження */}
      <div className="mt-8 rounded-lg border-l-4 border-mx-red bg-mx-red/5 p-5">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-md bg-mx-red/15 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-5 h-5 text-mx-red" />
          </div>
          <div>
            <h3 className="text-mx-red-dark font-extrabold text-base mb-1">Aviso Importante</h3>
            <p className="text-sm text-gray-800 leading-relaxed mb-1">
              El juego debe ser una actividad de entretenimiento. Nunca apuestes más de lo que puedas permitirte
              perder y mantén siempre hábitos de juego responsable.
            </p>
            <p className="text-sm text-gray-800 leading-relaxed">
              Si el juego se convierte en un problema, busca ayuda en organizaciones especializadas. En Colombia
              puedes contactar a <strong className="text-mx-green-dark">Coljuegos: 01 8000 113 113</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
