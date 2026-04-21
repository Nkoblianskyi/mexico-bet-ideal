import Link from "next/link"
import { ArrowLeft, type LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PageHeroProps {
  icon: LucideIcon
  badge?: string
  title: string
  subtitle?: string
  updatedAt?: boolean
}

export function PageHero({ icon: Icon, badge, title, subtitle, updatedAt }: PageHeroProps) {
  const lastUpdated = updatedAt
    ? new Date().toLocaleDateString("es-CO", { month: "long", day: "numeric", year: "numeric" })
    : null

  return (
    <div className="relative overflow-hidden rounded-xl shadow-2xl mb-6">
      {/* Синій градієнт Колумбії */}
      <div className="absolute inset-0 bg-gradient-to-br from-mx-green-dark via-mx-green-mid to-mx-green-dark" />
      {/* Декоративне «сяйво» */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(0,168,89,0.25) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(206,17,38,0.20) 0%, transparent 50%)",
        }}
      />

      {/* Смуга прапора зверху */}
      <div className="relative z-10 flex h-1.5 w-full">
        <div className="flex-1 bg-mx-green"></div>
        <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-mx-red"></div>
      </div>

      <div className="relative z-10 px-6 sm:px-10 py-8 sm:py-10 text-white">
        <Link href="/">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/15 mb-5 pl-2 pr-3 py-1 h-auto text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            Volver al Inicio
          </Button>
        </Link>

        <div className="flex items-center gap-4 sm:gap-5">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-mx-green flex items-center justify-center flex-shrink-0 shadow-lg">
            <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-mx-green-dark" />
          </div>
          <div className="flex-1 min-w-0">
            {badge && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-mx-green/20 border border-mx-green/50 mb-2">
                <span className="text-[10px] sm:text-xs font-bold tracking-[0.15em] text-mx-green">
                  {badge}
                </span>
              </div>
            )}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">{title}</h1>
            {subtitle && (
              <p className="text-sm sm:text-base text-white/85 mt-1.5 leading-snug">{subtitle}</p>
            )}
            {lastUpdated && (
              <p className="text-xs text-white/70 mt-2">
                Última actualización: <span className="text-mx-green font-medium">{lastUpdated}</span>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Смуга прапора знизу (інверсія) */}
      <div className="relative z-10 flex h-1 w-full">
        <div className="flex-1 bg-mx-red"></div>
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-mx-green"></div>
      </div>
    </div>
  )
}
