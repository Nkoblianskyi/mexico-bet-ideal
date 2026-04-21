"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BettingSite } from "../types"

interface SiteCardProps {
  site: BettingSite
  rank: number
}

export function Card({ site, rank }: SiteCardProps) {
  const [isTermsExpanded, setIsTermsExpanded] = useState(false)
  const [showReadMore, setShowReadMore] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const desktopTermsRef = useRef<HTMLDivElement>(null)
  const tabletTermsRef = useRef<HTMLDivElement>(null)
  const mobileTermsRef = useRef<HTMLDivElement>(null)
  const termsContainerRef = useRef<HTMLDivElement>(null)

  // Determine background color based on rank (alternating)
  const isEvenRank = rank % 2 === 0
  const cardBgColor = isEvenRank ? "bg-gray-50" : "bg-white"

  // Рамка ТОП-1 — зелений Мексики (#00A859) з теплою тінню
  const rankBorderClass =
    rank === 1
      ? "border-[5px] border-mx-green rounded-none shadow-[0_0_0_1px_rgba(0,168,89,0.35),0_10px_28px_rgba(0,168,89,0.28)]"
      : "border border-gray-200 rounded-none"

  useEffect(() => {
    // Перевіряємо чи це мобільний пристрій
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    // Detect overflow of the clamped terms text via real DOM measurement
    // (independent of character count, since line wrapping depends on width)
    const refs = [desktopTermsRef, tabletTermsRef, mobileTermsRef]

    const check = () => {
      if (isTermsExpanded) return
      for (const ref of refs) {
        const el = ref.current
        // offsetParent is null when the element is hidden via display:none
        if (el && el.offsetParent !== null) {
          setShowReadMore(el.scrollHeight > el.clientHeight + 1)
          return
        }
      }
    }

    // Measure after layout is ready
    const raf = requestAnimationFrame(check)

    const ro = new ResizeObserver(check)
    refs.forEach((r) => {
      if (r.current) ro.observe(r.current)
    })
    window.addEventListener("resize", check)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener("resize", check)
    }
  }, [site.terms, isTermsExpanded])

  const formatVotes = (votes: number) => {
    return votes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  const filledStars = Math.floor(site.rating)
  const hasHalfStar = site.rating % 1 !== 0

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsTermsExpanded(!isTermsExpanded)
  }

  // Спеціальні бейджі лише на позиціях 1, 2, 4, 7
  const shouldShowSpecialBadge = rank === 1 || rank === 2 || rank === 4 || rank === 7
  const getSpecialBadgeText = () => {
    if (rank === 1) return "TOP MARCA"
    if (rank === 2) return "OFERTA EXCLUSIVA"
    if (rank === 4) return "TENDENCIA"
    if (rank === 7) return "EN CRECIMIENTO"
    return ""
  }
  // Кольори бейджа під палітру прапора Мексики (жовтий / синій / червоний)
  const getSpecialBadgeClass = () => {
    if (rank === 1) return "bg-mx-green text-mx-green-dark"
    if (rank === 2) return "bg-mx-red text-white"
    if (rank === 4) return "bg-mx-green-mid text-white"
    if (rank === 7) return "bg-mx-red text-white"
    return "bg-mx-green-mid text-white"
  }
  // Ранк-бейдж — зелений Мексики (довіра, регулятор)
  const rankBadgeClass = "bg-mx-green-mid text-white"
  // Колір «score» великого числа
  const scoreColor = "#006847"

  return (
    <div className="block">
      {/* Хедер таблиці — тільки для першого елемента на desktop/tablet. Прапор Мексики у вигляді тонкої смуги знизу. */}
      {rank === 1 && (
        <div className="hidden md:block overflow-hidden mb-2">
          <div
            className="h-[40px] flex items-center px-6 text-white"
            style={{ background: "linear-gradient(90deg, #003D2B 0%, #006847 50%, #003D2B 100%)" }}
          >
            {/* OPERADOR - 30% */}
            <div className="flex-[0_0_30%] text-center pr-2">
              <span className="text-xs font-bold">OPERADOR</span>
            </div>

            {/* BONO - 25% */}
            <div className="flex-[0_0_25%] text-center px-2">
              <span className="text-xs font-bold">BONO DE BIENVENIDA</span>
            </div>

            {/* CALIFICACIÓN - 20% */}
            <div className="flex-[0_0_20%] text-center px-2">
              <span className="text-xs font-bold">CALIFICACIÓN</span>
            </div>

            {/* PUNTAJE - 12% */}
            <div className="flex-[0_0_12%] text-center px-2">
              <span className="text-xs font-bold">PUNTAJE</span>
            </div>

            {/* VISITAR - 13% */}
            <div className="flex-[0_0_13%] text-center pl-2">
              <span className="text-xs font-bold">VISITAR</span>
            </div>
          </div>
          {/* Тонка смуга кольорів прапора Мексики */}
          <div className="flex h-1 w-full">
            <div className="flex-1 bg-mx-green"></div>
            <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-mx-red"></div>
          </div>
        </div>
      )}

      {/* Desktop Layout */}
      <div
        className={`hidden lg:block ${cardBgColor} ${rankBorderClass} shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden cursor-pointer`}
      >
        <a href={`/go/${site.slug}`} target="_blank" rel="nofollow noopener sponsored noreferrer" className="block">
          {/* Ранк-бейдж (синій Мексики) */}
          <div className={`absolute top-0 left-0 ${rankBadgeClass} px-3 py-1 text-sm font-bold z-10`}>
            #{rank}
          </div>

          {/* Спеціальний бейдж — диференційований колір прапора Мексики */}
          {shouldShowSpecialBadge && (
            <div className={`absolute top-0 left-12 ${getSpecialBadgeClass()} px-3 py-1 text-sm font-bold z-10`}>
              {getSpecialBadgeText()}
            </div>
          )}

          {/* Основний контент */}
          <div className="h-[130px] flex items-center px-6">
            {/* OPERADOR - 30% */}
            <div className="flex-[0_0_30%] flex justify-center items-center h-full pr-2">
              <img
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                className="w-[170px] xl:w-[200px] h-[85px] xl:h-[100px] object-contain mt-4"
              />
            </div>

            {/* BONO - 25% */}
            <div className="flex-[0_0_25%] text-center flex flex-col justify-center h-full px-2">
              <div className="text-xs text-gray-600 uppercase font-normal mb-1">Bono de Bienvenida</div>
              <div className="text-lg xl:text-xl font-bold text-gray-900 mb-0.5 leading-tight break-words">
                {site.bonus}
              </div>
              <div className="text-lg xl:text-xl font-bold text-gray-900 leading-tight break-words text-nowrap">
                {site.welcomeOffer}
              </div>
            </div>

            {/* CALIFICACIÓN - 20% */}
            <div className="flex-[0_0_20%] text-center flex flex-col justify-center h-full px-2">
              <div className="text-xs text-black mb-0.5">¡Califica! ({formatVotes(site.votes)})</div>
              <div className="flex justify-center gap-0.5 xl:gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 xl:w-5 h-4 xl:h-5 ${
                      i < Math.floor(site.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* SCORE - 12% */}
            <div className="flex-[0_0_12%] text-center flex flex-col justify-center h-full px-1">
              <div
                className="text-[44px] xl:text-[56px] font-bold leading-none"
                style={{ color: scoreColor }}
              >
                {site.rating.toFixed(1)}
              </div>
            </div>

            {/* VISIT SITE - 13% */}
            <div className="flex-[0_0_13%] text-center flex flex-col justify-center items-center h-full pl-1">
              <Button className="bg-green-primary hover:bg-green-hover text-white font-bold px-1 xl:px-2 py-2 rounded-none text-xs xl:text-sm w-full max-w-[120px] h-[38px] xl:h-[45px] mb-1 transition-colors">
                OBTENER BONO
              </Button>
              <div className="text-xs text-gray-500 underline">Visitar {site.name}</div>
            </div>
          </div>
        </a>

        {/* Terms - Expandable */}
        <div className="bg-gray-100 text-[8px] text-gray-500 px-6 py-2" ref={termsContainerRef}>
          <div className="text-center">
            <div
              ref={desktopTermsRef}
              className={`leading-tight transition-all duration-300 ${!isTermsExpanded ? "line-clamp-2" : ""}`}
            >
              {site.terms}
            </div>
            {showReadMore && (
              <button
                onClick={handleTermsClick}
                className="text-gray-500 hover:text-mx-green-mid underline mt-1 text-xs font-medium"
              >
                {isTermsExpanded ? "Leer menos" : "Leer más"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Tablet Layout */}
      <div
        className={`hidden md:block lg:hidden ${cardBgColor} ${rankBorderClass} shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden cursor-pointer`}
      >
        <a href={`/go/${site.slug}`} target="_blank" rel="nofollow noopener sponsored noreferrer" className="block">
          {/* Ранк-бейдж (синій Мексики) */}
          <div className={`absolute top-0 left-0 ${rankBadgeClass} px-2 py-1 text-xs font-bold z-10`}>
            #{rank}
          </div>

          {/* Спеціальний бейдж — диференційований колір */}
          {shouldShowSpecialBadge && (
            <div className={`absolute top-0 left-10 ${getSpecialBadgeClass()} px-2 py-1 text-xs font-bold z-10`}>
              {getSpecialBadgeText()}
            </div>
          )}

          <div className="p-4 pt-6 min-h-[140px]">
            {/* FLEXBOX Layout for Tablet */}
            <div className="flex items-center mb-3">
              {/* Logo - 30% */}
              <div className="flex-[0_0_30%] flex justify-center items-center h-full pr-2">
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  className="w-[140px] h-[70px] object-contain flex-shrink-0"
                />
              </div>

              {/* Bonus - 25% */}
              <div className="flex-[0_0_25%] text-center px-2">
                <div className="text-xs text-gray-600 uppercase font-normal mb-1">Bono de Bienvenida</div>
                <div className="text-base font-bold text-gray-900 mb-0.5 leading-tight break-words">{site.bonus}</div>
                <div className="text-base font-bold text-gray-900 leading-tight break-words text-nowrap">
                  {site.welcomeOffer}
                </div>
              </div>

              {/* Rating - 20% */}
              <div className="flex-[0_0_20%] text-center px-2">
                <div className="text-xs text-gray-600 mb-0.5">({formatVotes(site.votes)})</div>
                <div className="flex justify-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < filledStars || (i === filledStars && hasHalfStar)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Score - 12% */}
              <div className="flex-[0_0_12%] text-center px-1">
                <div
                  className="text-[40px] font-bold leading-none"
                  style={{ color: scoreColor }}
                >
                  {site.rating.toFixed(1)}
                </div>
              </div>

              {/* Button - 13% */}
              <div className="flex-[0_0_13%] text-center pl-1">
                <Button className="bg-green-primary hover:bg-green-hover text-white font-bold px-2 py-2 rounded-none text-xs w-full max-w-[100px] mx-auto transition-colors">
                  OBTENER
                </Button>
              </div>
            </div>
          </div>
        </a>

        {/* Terms - Expandable */}
        <div className="border-t border-gray-200 text-gray-500 text-[7px] px-4 py-3 bg-gray-100">
          <div className="text-center">
            <div
              ref={tabletTermsRef}
              className={`leading-tight transition-all duration-300 ${!isTermsExpanded ? "line-clamp-2" : ""}`}
            >
              {site.terms}
            </div>
            {showReadMore && (
              <button
                onClick={handleTermsClick}
                className="text-gray-500 hover:text-mx-green-mid underline mt-1 text-[8px] font-medium"
              >
                {isTermsExpanded ? "Leer menos" : "Leer más"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div
        className={`md:hidden ${cardBgColor} ${rankBorderClass} shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden cursor-pointer`}
      >
        <a href={`/go/${site.slug}`} target="_blank" rel="nofollow noopener sponsored noreferrer" className="block">
          {/* Ранк-бейдж (синій Мексики) */}
          <div className={`absolute top-0 left-0 ${rankBadgeClass} px-2 py-0.5 text-[10px] font-bold z-20`}>
            #{rank}
          </div>

          {/* Спеціальний бейдж — диференційований колір */}
          {shouldShowSpecialBadge && (
            <div className={`absolute top-0 left-8 ${getSpecialBadgeClass()} px-2 py-0.5 text-[10px] font-bold z-20`}>
              {getSpecialBadgeText()}
            </div>
          )}

          {/* Main Content Container */}
          <div className="grid grid-cols-[1fr_1fr] h-[175px]">
            {/* Left Column: Gray background with logo and rating */}
            <div className="bg-[rgb(242,242,242)] flex flex-col justify-between items-center py-2 px-2">
              {/* Logo */}
              <div className="flex-1 flex items-center justify-center">
                <img src={site.logo || "/placeholder.svg"} alt={site.name} className="h-16 w-auto object-contain" />
              </div>

              {/* Bottom section with stars and rating */}
              <div className="grid grid-cols-2 gap-1 w-full">
                {/* Columna izquierda: estrellas y calificación */}
                <div className="flex flex-col items-center justify-center">
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < filledStars || (i === filledStars && hasHalfStar)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  {/* Califica text */}
                  <div className="text-[12px] text-black text-center leading-tight">
                    Califica
                    <br />({formatVotes(site.votes)})
                  </div>
                </div>

                {/* Колонка праворуч: оцінка */}
                <div className="flex flex-col items-center justify-center">
                  <div className="text-3xl font-bold leading-none" style={{ color: scoreColor }}>
                    {site.rating.toFixed(1)}
                  </div>
                  <div className="text-[10px] text-black font-bold mt-1">Puntaje</div>
                </div>
              </div>
            </div>

            {/* Right Column: Bonus and Button */}
            <div className="flex flex-col justify-between py-2 px-2">
              {/* Bono de Bienvenida */}
              <div className="text-center flex-1 flex flex-col justify-center">
                <div className="text-[10px] text-black uppercase font-normal mb-1">BONO DE BIENVENIDA</div>
                <div className="text-lg font-bold text-gray-900 leading-tight mb-1">{site.bonus}</div>
                <div className="text-lg font-bold text-gray-900 leading-tight text-nowrap">{site.welcomeOffer}</div>
              </div>

              {/* Button - more square */}
              <div className="flex justify-center mt-2">
                <Button className="bg-green-primary hover:bg-green-hover text-white font-bold px-3 py-1.5 rounded-none text-sm transition-colors w-full">
                  OBTENER BONO
                </Button>
              </div>
            </div>
          </div>
        </a>

        {/* Terms - Expandable */}
        <div className="border-t border-gray-200 bg-gray-100 px-2 py-2">
          <div className="text-center">
            <div
              ref={mobileTermsRef}
              className={`text-gray-500 text-[8px] leading-[1.4] transition-all duration-300 ${
                !isTermsExpanded ? "line-clamp-2" : ""
              }`}
            >
              {site.terms}
            </div>
            {showReadMore && (
              <button
                onClick={handleTermsClick}
                className="text-gray-500 hover:text-mx-green-mid underline text-[9px] font-medium"
              >
                {isTermsExpanded ? "Leer menos" : "Leer más"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
