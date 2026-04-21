import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"

type Accent = "yellow" | "blue" | "red"

interface InfoCardProps {
  accent: Accent
  icon?: LucideIcon
  title: string
  children: ReactNode
}

const accentMap: Record<Accent, { bar: string; iconBg: string; iconText: string; titleText: string; border: string }> = {
  yellow: {
    bar: "bg-mx-green",
    iconBg: "bg-mx-green/15",
    iconText: "text-mx-green-mid",
    titleText: "text-mx-green-dark",
    border: "border-mx-green/30",
  },
  blue: {
    bar: "bg-mx-green-mid",
    iconBg: "bg-mx-green-mid/10",
    iconText: "text-mx-green-mid",
    titleText: "text-mx-green-dark",
    border: "border-mx-green-mid/20",
  },
  red: {
    bar: "bg-mx-red",
    iconBg: "bg-mx-red/10",
    iconText: "text-mx-red",
    titleText: "text-mx-red-dark",
    border: "border-mx-red/20",
  },
}

export function InfoCard({ accent, icon: Icon, title, children }: InfoCardProps) {
  const a = accentMap[accent]
  return (
    <div className={`relative bg-white rounded-lg border ${a.border} shadow-sm p-5 pl-6`}>
      <div className={`absolute left-0 top-3 bottom-3 w-1 rounded-r ${a.bar}`} />
      <div className="flex items-start gap-3 mb-2">
        {Icon && (
          <div className={`w-9 h-9 rounded-md flex items-center justify-center flex-shrink-0 ${a.iconBg}`}>
            <Icon className={`w-5 h-5 ${a.iconText}`} />
          </div>
        )}
        <h3 className={`text-base sm:text-lg font-bold leading-snug pt-1 ${a.titleText}`}>{title}</h3>
      </div>
      <div className="text-sm text-gray-700 leading-relaxed space-y-2">{children}</div>
    </div>
  )
}
