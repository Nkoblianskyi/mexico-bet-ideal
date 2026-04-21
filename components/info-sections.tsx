"use client"

const sections = [
  {
    accent: "green" as const,
    title: "Metodología de evaluación",
    text: "Realizamos análisis detallados de cada operador. Nuestro equipo prueba personalmente cada casa: cuotas, apuestas en vivo, transmisiones, cash out, calidad de atención, métodos de pago locales (SPEI, OXXO, Mercado Pago, CoDi, BBVA) y estructura de bonos.",
  },
  {
    accent: "white" as const,
    title: "Encuentra tu casa ideal",
    text: "Define los deportes y mercados que te interesan —Liga MX, Champions, MLB, NFL, UFC, eSports, Box— y verifica que el operador ofrezca cobertura amplia. Presta atención a las cuotas: mejores valores se traducen en mayores retornos a largo plazo.",
  },
  {
    accent: "red" as const,
    title: "Aprovecha los bonos de bienvenida",
    text: "El mercado mexicano es altamente competitivo, lo que impulsa promociones cada vez más atractivas. Los bonos de bienvenida entregan valor excepcional a quienes saben usarlos estratégicamente. Revisa siempre los requisitos de liberación y cuotas mínimas.",
  },
  {
    accent: "green" as const,
    title: "Regulación SEGOB",
    text: "En México la Secretaría de Gobernación (SEGOB) —a través de la Dirección General de Juegos y Sorteos— regula el juego y las apuestas bajo la Ley Federal de Juegos y Sorteos. La DGJS exige a los operadores cumplir requisitos estrictos: solvencia financiera, protección de datos, KYC y herramientas de juego responsable. Solo recomendamos casas con permiso vigente.",
  },
  {
    accent: "white" as const,
    title: "Tecnología y apps móviles",
    text: "Las casas mexicanas aprovechan tecnología de punta: streaming HD, cash out instantáneo, bet builder, apps nativas para Android e iOS y estadísticas en tiempo real. Apuesta sin fricciones desde cualquier dispositivo.",
  },
  {
    accent: "red" as const,
    title: "Éxito a largo plazo",
    text: "Apostar con éxito requiere estrategia y disciplina. Los apostadores rentables se especializan en deportes o ligas concretas, gestionan su bankroll, mantienen registro de sus apuestas y aplican estrategias probadas en lugar de decisiones impulsivas.",
  },
]

const accentText = {
  green: "text-mx-green",
  white: "text-white",
  red: "text-mx-red",
} as const

export function InfoSections() {
  return (
    <div className="mt-10">
      <section className="relative overflow-hidden border border-white/10">
        <div className="absolute inset-0 bg-black/90"></div>

        <div className="relative z-10 flex h-1.5 w-full">
          <div className="flex-1 bg-mx-green"></div>
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-mx-red"></div>
        </div>

        <div className="relative z-10 px-6 lg:px-10 py-10 lg:py-14 text-white">
          <div className="max-w-5xl mx-auto mb-10 lg:mb-14 border-b border-white/15 pb-8">
            <div className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-mx-green mb-4">
              OPERADORES REGULADOS POR LA SEGOB · DGJS
            </div>
            <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight mb-5">
              Guía Definitiva de <span className="text-mx-green">Apuestas</span> en{" "}
              <span>
                <span className="text-mx-green">Mé</span>
                <span className="text-white">xi</span>
                <span className="text-mx-red">co</span>
              </span>
            </h2>
            <p className="text-sm lg:text-base text-gray-300 leading-relaxed max-w-3xl">
              Elegir la casa de apuestas ideal requiere criterio y análisis. Te mostramos los factores
              clave —cuotas, bonos, diseño, métodos de pago y experiencia móvil— para que compares con
              información real y elijas con confianza.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12 lg:gap-x-16">
            {sections.map((s, idx) => {
              const n = String(idx + 1).padStart(2, "0")
              return (
                <article key={idx} className="relative pl-14 lg:pl-16">
                  <div className="absolute left-0 top-0 flex items-start gap-3">
                    <span className={`text-4xl lg:text-5xl font-extrabold leading-none tabular-nums ${accentText[s.accent]}`}>
                      {n}
                    </span>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-base lg:text-lg font-bold uppercase tracking-wide mb-3 border-b border-white/15 pb-2">
                      {s.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">{s.text}</p>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="mt-12 lg:mt-16 max-w-5xl mx-auto border-t border-white/15 pt-8">
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-4 lg:gap-10 items-start">
              <div className="text-[10px] lg:text-xs font-bold tracking-[0.25em] text-mx-green whitespace-nowrap">
                NOTA REGULATORIA
              </div>
              <p className="text-sm text-white/85 leading-relaxed">
                Todos los operadores destacados en este sitio cuentan con{" "}
                <span className="font-bold text-mx-green">permiso vigente de la SEGOB</span> y métodos
                de pago mexicanos (SPEI, OXXO, Mercado Pago, CoDi, tarjetas Visa/Mastercard). Compara,
                elige y juega con responsabilidad.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 max-w-5xl mx-auto">
            <p className="text-[10px] sm:text-xs text-gray-400 leading-relaxed tracking-wide">
              ESTE MATERIAL ESTÁ PROTEGIDO POR DERECHOS DE AUTOR. TODOS LOS SERVICIOS Y PROMOCIONES SON
              EXCLUSIVAMENTE PARA RESIDENTES EN MÉXICO MAYORES DE 18 AÑOS. PUEDEN APLICAR RESTRICCIONES
              ADICIONALES INCLUYENDO VERIFICACIÓN DE IDENTIDAD Y DE UBICACIÓN. OPERADORES REGULADOS POR
              LA SEGOB (DGJS).
            </p>
          </div>
        </div>

        <div className="relative z-10 flex h-1.5 w-full">
          <div className="flex-1 bg-mx-red"></div>
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-mx-green"></div>
        </div>
      </section>
    </div>
  )
}
