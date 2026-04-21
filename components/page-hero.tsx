import Link from "next/link"
import { ArrowLeft, type LucideIcon } from "lucide-react"

interface PageHeroProps {
  icon?: LucideIcon
  badge?: string
  title: string
  subtitle?: string
  updatedAt?: boolean
}

export function PageHero({ badge, title, subtitle, updatedAt }: PageHeroProps) {
  const lastUpdated = updatedAt
    ? new Date().toLocaleDateString("es-MX", { month: "long", day: "numeric", year: "numeric" })
    : null

  return (
    <section className="relative bg-white border border-gray-200 mb-6 sm:mb-8">
      <div className="flex h-1 w-full">
        <div className="flex-1 bg-mx-green"></div>
        <div className="flex-1 bg-white border-x border-gray-200"></div>
        <div className="flex-1 bg-mx-red"></div>
      </div>

      <div className="px-6 sm:px-10 py-8 sm:py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] text-gray-500 hover:text-mx-green-dark transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Volver al inicio
        </Link>

        {badge && (
          <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.28em] text-mx-green-dark mb-3">
            {badge}
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}

        <div className="mt-8 pt-5 border-t border-gray-200 flex flex-wrap items-center gap-x-8 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-gray-500">
          {lastUpdated && (
            <span>
              Vigente desde:{" "}
              <span className="text-gray-900 font-semibold normal-case tracking-normal">{lastUpdated}</span>
            </span>
          )}
          <span>
            Jurisdicción:{" "}
            <span className="text-gray-900 font-semibold normal-case tracking-normal">
              Estados Unidos Mexicanos
            </span>
          </span>
          <span>
            Regulación:{" "}
            <span className="text-gray-900 font-semibold normal-case tracking-normal">SEGOB · DGJS</span>
          </span>
        </div>
      </div>
    </section>
  )
}
