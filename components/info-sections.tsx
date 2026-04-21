"use client"

import { Trophy, ShieldCheck, Target, Gift, Gavel, Smartphone, TrendingUp } from "lucide-react"

const sections = [
  {
    icon: Trophy,
    accent: "yellow" as const,
    title: "Metodología de evaluación",
    text: "Realizamos análisis detallados de cada operador. Nuestro equipo prueba personalmente cada casa: cuotas, apuestas en vivo, transmisiones, cash out, calidad de atención, métodos de pago locales (SPEI, OXXO, Mercado Pago, CoDi, BBVA) y estructura de bonos.",
  },
  {
    icon: Target,
    accent: "blue" as const,
    title: "Encuentra tu casa ideal",
    text: "Define los deportes y mercados que te interesan —Liga MX, Champions, MLB, NFL, UFC, eSports, Box— y verifica que el operador ofrezca cobertura amplia. Presta atención a las cuotas: mejores valores se traducen en mayores retornos a largo plazo.",
  },
  {
    icon: Gift,
    accent: "red" as const,
    title: "Aprovecha los bonos de bienvenida",
    text: "El mercado mexicano es altamente competitivo, lo que impulsa promociones cada vez más atractivas. Los bonos de bienvenida entregan valor excepcional a quienes saben usarlos estratégicamente. Revisa siempre los requisitos de liberación y cuotas mínimas.",
  },
  {
    icon: Gavel,
    accent: "blue" as const,
    title: "Regulación SEGOB",
    text: "En México la Secretaría de Gobernación (SEGOB) —a través de la Dirección General de Juegos y Sorteos— regula el juego y las apuestas bajo la Ley Federal de Juegos y Sorteos. La DGJS exige a los operadores cumplir requisitos estrictos: solvencia financiera, protección de datos, KYC y herramientas de juego responsable. Solo recomendamos casas con permiso vigente.",
  },
  {
    icon: Smartphone,
    accent: "yellow" as const,
    title: "Tecnología y apps móviles",
    text: "Las casas mexicanas aprovechan tecnología de punta: streaming HD, cash out instantáneo, bet builder, apps nativas para Android e iOS y estadísticas en tiempo real. Apuesta sin fricciones desde cualquier dispositivo.",
  },
  {
    icon: TrendingUp,
    accent: "red" as const,
    title: "Éxito a largo plazo",
    text: "Apostar con éxito requiere estrategia y disciplina. Los apostadores rentables se especializan en deportes o ligas concretas, gestionan su bankroll, mantienen registro de sus apuestas y aplican estrategias probadas en lugar de decisiones impulsivas.",
  },
]

const accentMap = {
  yellow: {
    bar: "bg-mx-green",
    iconBg: "bg-mx-green/15",
    iconText: "text-mx-green",
    titleText: "text-mx-green",
  },
  blue: {
    bar: "bg-mx-green-mid",
    iconBg: "bg-mx-green-mid/20",
    iconText: "text-mx-green-mid",
    titleText: "text-white",
  },
  red: {
    bar: "bg-mx-red",
    iconBg: "bg-mx-red/20",
    iconText: "text-mx-red",
    titleText: "text-white",
  },
}

export function InfoSections() {
  return (
    <div className="mt-10">
      <section className="relative rounded-xl overflow-hidden">
        {/* Фон */}
        <div className="absolute inset-0 bg-black/85"></div>

        {/* Смуга прапора зверху */}
        <div className="relative z-10 flex h-1.5 w-full">
          <div className="flex-1 bg-mx-green"></div>
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-mx-red"></div>
        </div>

        {/* Контент */}
        <div className="relative z-10 px-4 py-8 lg:py-10 text-white">
          {/* Заголовок */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mx-green/15 border border-mx-green/40 mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-mx-green" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.15em] text-mx-green">
                OPERADORES REGULADOS POR LA SEGOB
              </span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold mb-3">
              Guía Definitiva de <span className="text-mx-green">Apuestas</span> en{" "}
              <span className="text-white">
                <span className="text-mx-green">Mé</span>
                <span className="text-white [text-shadow:0_0_2px_rgba(0,0,0,0.6)]">xi</span>
                <span className="text-mx-red">co</span>
              </span>
            </h2>
            <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
              Elegir la casa de apuestas ideal requiere criterio y análisis. Te mostramos los factores clave:
              cuotas, bonos, diseño, métodos de pago y experiencia móvil, para que compares con información real y
              elijas con confianza.
            </p>
          </div>

          {/* Сітка секцій */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {sections.map((s, idx) => {
              const a = accentMap[s.accent]
              const Icon = s.icon
              return (
                <article
                  key={idx}
                  className="relative rounded-lg bg-white/[0.04] border border-white/10 p-5 pl-6 hover:bg-white/[0.07] transition-colors"
                >
                  {/* Вертикальна кольорова смуга зліва */}
                  <div className={`absolute left-0 top-3 bottom-3 w-1 rounded-r ${a.bar}`} />
                  <div className="flex items-start gap-3 mb-2">
                    <div className={`w-9 h-9 rounded-md flex items-center justify-center flex-shrink-0 ${a.iconBg}`}>
                      <Icon className={`w-5 h-5 ${a.iconText}`} />
                    </div>
                    <h3 className="text-base font-bold leading-tight pt-1">{s.title}</h3>
                  </div>
                  <p className="text-[13px] text-gray-300 leading-relaxed">{s.text}</p>
                </article>
              )
            })}
          </div>

          {/* CTA / аviso */}
          <div className="mt-8 max-w-5xl mx-auto rounded-lg border border-mx-green/30 bg-gradient-to-r from-mx-green-dark/60 via-mx-green-mid/40 to-mx-green-dark/60 p-5 text-center">
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
              Todos los operadores destacados en este sitio cuentan con{" "}
              <span className="font-bold text-mx-green">permiso vigente de la SEGOB</span> y métodos de pago
              mexicanos (SPEI, OXXO, Mercado Pago, CoDi, tarjetas Visa/Mastercard). Compara, elige y juega con responsabilidad.
            </p>
          </div>

          {/* Дисклеймер */}
          <div className="mt-6 pt-4 border-t border-white/10 text-center">
            <p className="text-[10px] sm:text-xs text-gray-400 leading-relaxed max-w-4xl mx-auto">
              ESTE MATERIAL ESTÁ PROTEGIDO POR DERECHOS DE AUTOR. TODOS LOS SERVICIOS Y PROMOCIONES SON EXCLUSIVAMENTE
              PARA RESIDENTES EN MÉXICO MAYORES DE 18 AÑOS. PUEDEN APLICAR RESTRICCIONES ADICIONALES INCLUYENDO
              VERIFICACIÓN DE IDENTIDAD Y DE UBICACIÓN. OPERADORES REGULADOS POR LA SEGOB (DGJS).
            </p>
          </div>
        </div>

        {/* Смуга прапора знизу (інверсія) */}
        <div className="relative z-10 flex h-1.5 w-full">
          <div className="flex-1 bg-mx-red"></div>
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-mx-green"></div>
        </div>
      </section>
    </div>
  )
}
