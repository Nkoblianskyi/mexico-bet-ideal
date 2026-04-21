"use client"

import { useState, useEffect } from "react"
import { Cookie } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 shadow-2xl">
      {/* Смуга прапора Мексики зверху */}
      <div className="flex h-1 w-full">
        <div className="flex-1 bg-mx-green"></div>
        <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-mx-red"></div>
      </div>

      <div className="bg-gradient-to-r from-gray-950 via-mx-green-dark/70 to-gray-950 text-white">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-start md:items-center gap-3 flex-1">
            <div className="w-9 h-9 rounded-md bg-mx-green/20 border border-mx-green/40 flex items-center justify-center flex-shrink-0">
              <Cookie className="w-5 h-5 text-mx-green" />
            </div>
            <p className="text-sm leading-snug">
              Usamos cookies para mejorar tu experiencia en <span className="font-bold">Mejores Apuestas México</span>.
              Al continuar navegando, aceptas nuestro uso de cookies.{" "}
              <Link
                href="/privacy-policy"
                className="text-mx-green hover:text-mx-green/80 underline underline-offset-2 font-semibold ml-1 whitespace-nowrap"
              >
                Política de Privacidad
              </Link>
            </p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <Button
              onClick={handleDecline}
              variant="outline"
              className="flex-1 md:flex-none border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              Rechazar
            </Button>
            <Button
              onClick={handleAccept}
              className="flex-1 md:flex-none bg-mx-green hover:bg-mx-green-mid text-mx-green-dark font-bold shadow-lg"
            >
              Aceptar Cookies
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
