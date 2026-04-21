"use client"
import { Shield, Clock } from "lucide-react"

interface HeroSectionProps {
  onAdvertiserModalOpen: () => void
  onTermsModalOpen: () => void
}

export function HeroSection({ onAdvertiserModalOpen, onTermsModalOpen }: HeroSectionProps) {
  const getCurrentMonthYear = () => {
    const now = new Date()
    const monthNames = [
      "ENERO",
      "FEBRERO",
      "MARZO",
      "ABRIL",
      "MAYO",
      "JUNIO",
      "JULIO",
      "AGOSTO",
      "SEPTIEMBRE",
      "OCTUBRE",
      "NOVIEMBRE",
      "DICIEMBRE",
    ]
    const currentMonth = monthNames[now.getMonth()]
    const currentYear = now.getFullYear()
    return `${currentMonth} ${currentYear}`
  }

  return (
    <>
      {/* Hero Section - Desktop */}
      <div
        className="hidden lg:block relative overflow-hidden text-white mb-2 w-full h-[200px] lg:h-[290px] xl:h-[290px] 2xl:h-[290px]"
        style={{ background: "rgba(0, 0, 0, 0.70)" }}
      >
        {/* Смуга прапора Мексики зверху */}
        <div className="absolute top-0 left-0 right-0 flex h-1.5 z-20">
          <div className="flex-1 bg-mx-green"></div>
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-mx-red"></div>
        </div>
        <div className="h-full flex flex-col justify-between text-center px-4 lg:px-6 xl:px-8 py-4 lg:py-5 gap-2 mt-3">
          <div className="space-y-1">
            <h1 className="text-lg lg:text-[40px] xl:text-[40px] 2xl:text-[40px] font-bold drop-shadow-lg">
              MEJORES CASAS DE APUESTAS EN <span className="text-mx-green">MÉXICO</span>
            </h1>

            <h2 className="text-[32px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] font-bold">
              REVISADAS EN {getCurrentMonthYear()}
            </h2>
          </div>

          <div className="space-y-2 lg:space-y-2 mx-auto">
            <p className="text-xs lg:text-xs xl:text-sm 2xl:text-sm leading-tight">
              Encontrar casas de apuestas confiables en México requiere conocimiento experto e investigación
              exhaustiva. Nuestro análisis integral te entrega información detallada sobre las principales plataformas
              reguladas por la SEGOB.
            </p>

            <p className="text-xs lg:text-sm xl:text-sm 2xl:text-sm leading-tight">
              Comenzando por los bonos de bienvenida más atractivos, evaluados meticulosamente por nuestro equipo de
              expertos.
            </p>

            <p className="text-[10px] lg:text-xs xl:text-xs 2xl:text-xs text-gray-300">
              *Aplican términos de bono por cada oferta. Solo nuevos clientes. Mayores de 18 años.
            </p>
          </div>

          <div className="space-y-2 lg:space-y-4 mt-1">
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4 xl:gap-6">
              <div className="flex items-center gap-1 lg:gap-2">
                <Shield className="w-3 h-3 lg:w-4 lg:h-4 text-mx-green" />
                <span className="text-[10px] lg:text-xs xl:text-sm font-bold">100% Legal</span>
              </div>
              <div className="flex items-center gap-1 lg:gap-2">
                <div className="flex flex-col gap-0 overflow-hidden rounded-sm">
                  <div className="w-3 h-1 lg:w-4 lg:h-1.5 bg-mx-green"></div>
                  <div className="w-3 h-0.5 lg:w-4 lg:h-1 bg-white"></div>
                  <div className="w-3 h-0.5 lg:w-4 lg:h-1 bg-mx-red"></div>
                </div>
                <span className="text-[10px] lg:text-xs xl:text-sm font-bold">SEGOB</span>
              </div>
              <div className="flex items-center gap-1 lg:gap-2">
                <Clock className="w-3 h-3 lg:w-4 lg:h-4 text-mx-red" />
                <span className="text-[10px] lg:text-xs xl:text-sm font-bold">Retiros Rápidos</span>
              </div>
            </div>

            <div className="text-[9px] lg:text-[10px] xl:text-xs leading-tight text-left">
              Juega con responsabilidad. Aplican términos y condiciones.
              <button onClick={onAdvertiserModalOpen} className="underline ml-1 hover:text-mx-green transition-colors">
                Aviso Publicitario
              </button>
              <span> | </span>
              <button onClick={onTermsModalOpen} className="underline hover:text-mx-green transition-colors">
                +18 Aplican T&C
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section - Tablet */}
      <div
        className="hidden md:block lg:hidden h-[160px] md:h-[180px] relative overflow-hidden text-white mb-2 w-full"
        style={{ background: "rgba(0, 0, 0, 0.70)" }}
      >
        {/* Смуга прапора Мексики */}
        <div className="absolute top-0 left-0 right-0 flex h-1 z-20">
          <div className="flex-1 bg-mx-green"></div>
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-mx-red"></div>
        </div>
        <div className="h-full flex flex-col justify-between text-center px-4 md:px-6 py-3">
          <div className="space-y-1">
            <h1 className="text-xl md:text-2xl font-bold">
              MEJORES APUESTAS EN <span className="text-mx-green">MÉXICO</span>
            </h1>
            <h2 className="text-lg md:text-xl font-bold">REVISADAS EN {getCurrentMonthYear()}</h2>
          </div>

          <div className="flex justify-center gap-4 md:gap-6">
            <div className="flex items-center gap-1 md:gap-2">
              <Shield className="w-4 h-4 md:w-5 md:h-5 text-mx-green" />
              <span className="text-xs md:text-sm font-bold">100% Legal</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <div className="flex flex-col gap-0 overflow-hidden rounded-sm">
                <div className="w-4 h-1.5 md:w-5 md:h-2 bg-mx-green"></div>
                <div className="w-4 h-1 md:w-5 md:h-1 bg-white"></div>
                <div className="w-4 h-1 md:w-5 md:h-1 bg-mx-red"></div>
              </div>
              <span className="text-xs md:text-sm font-bold">SEGOB</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <Clock className="w-4 h-4 md:w-5 md:h-5 text-mx-red" />
              <span className="text-xs md:text-sm font-bold">Retiros Rápidos</span>
            </div>
          </div>

          <div className="text-[10px] md:text-xs">
            Juega con responsabilidad. Aplican T&C.
            <button onClick={onAdvertiserModalOpen} className="underline ml-1">
              Aviso Publicitario
            </button>
            <span> | </span>
            <button onClick={onTermsModalOpen} className="underline">
              +18 Aplican T&C
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section - Mobile */}
      <div
        className="md:hidden relative overflow-hidden text-white rounded-lg mb-1 w-full h-[120px]"
        style={{
          backgroundImage: "url(/bg-7.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70 rounded-lg"></div>
        {/* Смуга прапора Мексики */}
        <div className="absolute top-0 left-0 right-0 flex h-0.5 z-20 rounded-t-lg overflow-hidden">
          <div className="flex-1 bg-mx-green"></div>
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-mx-red"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col">
          <div className="flex-1 px-2 text-center flex flex-col justify-around p-2">
            <div className="mb-1">
              <h1 className="text-base font-bold drop-shadow-lg leading-tight">
                MEJORES APUESTAS <span className="text-mx-green">MÉXICO</span>
              </h1>
            </div>

            <h2 className="text-[13px] font-bold drop-shadow-lg leading-tight">
              REVISADAS EN {getCurrentMonthYear()}
            </h2>

            <div className="flex justify-center gap-2">
              <div className="flex flex-col items-center">
                <Shield className="w-3 h-3 mb-0.5 text-mx-green" />
                <span className="text-[7px] font-bold leading-tight">100% Legal</span>
              </div>
              <div className="flex flex-col items-center mt-1">
                <div className="flex flex-col gap-0 mb-0.5 overflow-hidden rounded-sm">
                  <div className="w-3 h-1 bg-mx-green"></div>
                  <div className="w-3 h-0.5 bg-white"></div>
                  <div className="w-3 h-0.5 bg-mx-red"></div>
                </div>
                <span className="text-[7px] font-bold leading-tight">SEGOB</span>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-3 h-3 mb-0.5 text-mx-red" />
                <span className="text-[7px] font-bold leading-tight">Retiros Rápidos</span>
              </div>
            </div>

            <div className="text-[6px] leading-tight">
              <div>Juega con responsabilidad. Aplican T&C.</div>
              <div>
                <button onClick={onAdvertiserModalOpen} className="underline hover:text-mx-green">
                  Aviso Publicitario
                </button>
                <span> | </span>
                <button onClick={onTermsModalOpen} className="underline hover:text-mx-green">
                  +18 Aplican T&C
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
