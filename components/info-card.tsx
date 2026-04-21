import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"

type Accent = "yellow" | "blue" | "red"

interface InfoCardProps {
  accent?: Accent
  icon?: LucideIcon
  title: string
  number?: string
  children: ReactNode
}

export function InfoCard({ title, number, children }: InfoCardProps) {
  return (
    <article className="bg-white border border-gray-200 p-5 sm:p-6">
      <h3 className="flex items-baseline gap-3 text-sm sm:text-base font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-2 mb-3">
        {number && (
          <span className="text-mx-green-dark font-extrabold tabular-nums">{number}</span>
        )}
        <span>{title}</span>
      </h3>
      <div className="text-sm text-gray-700 leading-relaxed space-y-2">{children}</div>
    </article>
  )
}
