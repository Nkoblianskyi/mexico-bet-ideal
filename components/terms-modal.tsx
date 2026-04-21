"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full h-[90vh] flex flex-col overflow-hidden">
        {/* Encabezado */}
        <div className="bg-gradient-to-r from-mx-green-dark via-mx-green-mid to-mx-green-dark text-white p-4 sm:p-6 flex-shrink-0">
          <div className="flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-bold">Términos y Condiciones</h2>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>
        {/* Смуга прапора Колумбії */}
        <div className="flex h-1 w-full flex-shrink-0">
          <div className="flex-1 bg-mx-green"></div>
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-mx-red"></div>
        </div>

        {/* Contenido */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Términos Generales</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Al usar Mejores Apuestas Colombia, aceptas cumplir con los siguientes términos y condiciones. Estos
                términos aplican a todos los usuarios de nuestro sitio web y servicios.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Restricción de Edad</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Debes tener al menos 18 años para usar este sitio. Tomamos muy en serio la verificación de edad y
                promovemos prácticas de juego responsable. Si eres menor de 18 años, por favor abandona este sitio
                inmediatamente.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Juego Responsable</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-2">
                Estamos comprometidos con promover el juego responsable. Recuerda:
              </p>
              <ul className="text-sm sm:text-base text-gray-700 list-disc list-inside space-y-1">
                <li>Apuesta solo con dinero que puedas permitirte perder</li>
                <li>Establece límites de tiempo y gasto antes de comenzar</li>
                <li>Nunca persigas tus pérdidas</li>
                <li>Toma descansos regulares del juego</li>
                <li>Busca ayuda si el juego se convierte en un problema</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Exactitud de la Información</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Aunque nos esforzamos por brindar información precisa y actualizada sobre casas de apuestas, bonos y
                promociones, no podemos garantizar la exactitud de todo el contenido. Los términos y condiciones
                pueden cambiar sin previo aviso.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Enlaces a Terceros</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Nuestro sitio contiene enlaces a casas de apuestas externas. No somos responsables del contenido,
                términos o prácticas de estos sitios. Siempre revisa sus términos y condiciones antes de usarlos.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Limitación de Responsabilidad</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Mejores Apuestas Colombia no será responsable de daños directos, indirectos, incidentales o
                consecuentes derivados del uso de este sitio o la información contenida aquí.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Ayuda y Soporte</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-2">
                Si necesitas ayuda con adicción al juego, por favor contacta:
              </p>
              <ul className="text-sm sm:text-base text-gray-700 list-disc list-inside space-y-1">
                <li>
                  <strong>Coljuegos:</strong> www.coljuegos.gov.co
                </li>
                <li>
                  <strong>Línea de ayuda Colombia:</strong> 01 8000 113 113
                </li>
                <li>
                  <strong>Jugadores Anónimos:</strong> www.gamblersanonymous.org
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pie */}
        <div className="bg-mx-red/10 border-t-2 border-mx-red p-3 sm:p-4 flex-shrink-0">
          <p className="text-mx-red-dark font-semibold text-center text-sm">
            +18 | Aplican T&C | Juega con responsabilidad | Coljuegos
          </p>
        </div>
      </div>
    </div>
  )
}
