"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AdvertiserDisclosureModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserDisclosureModal({ isOpen, onClose }: AdvertiserDisclosureModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full h-[90vh] flex flex-col overflow-hidden">
        {/* Encabezado */}
        <div className="bg-gradient-to-r from-mx-green-dark via-mx-green-mid to-mx-green-dark text-white p-4 sm:p-6 flex-shrink-0">
          <div className="flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-bold">Aviso Publicitario</h2>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>
        {/* Смуга прапора Мексики */}
        <div className="flex h-1 w-full flex-shrink-0">
          <div className="flex-1 bg-mx-green"></div>
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-mx-red"></div>
        </div>

        {/* Contenido */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Cómo Generamos Ingresos</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Mejores Apuestas México es un sitio de comparación independiente que ayuda a los usuarios a
                encontrar las mejores casas de apuestas en México. Podemos recibir compensación cuando haces clic
                en enlaces a las casas de apuestas destacadas en nuestro sitio.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Nuestro Compromiso</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-2">
                Esta compensación no influye en nuestros rankings, reseñas o recomendaciones. Nuestro equipo editorial
                mantiene independencia completa al evaluar casas de apuestas con base en factores como:
              </p>
              <ul className="text-sm sm:text-base text-gray-700 list-disc list-inside space-y-1">
                <li>Permiso vigente otorgado por la SEGOB (DGJS)</li>
                <li>Medidas de seguridad y protección de datos</li>
                <li>Variedad de cuotas y mercados</li>
                <li>Bonos de bienvenida y promociones</li>
                <li>Calidad de atención al cliente</li>
                <li>Métodos de pago locales (SPEI, OXXO, CoDi) y velocidad de retiro</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Transparencia</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Creemos en la transparencia total con nuestros usuarios. Todas las casas de apuestas destacadas en
                nuestra plataforma están claramente identificadas, y solo recomendamos operadores con permiso vigente
                regulados por la SEGOB en México.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Tu Responsabilidad</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Aunque nos esforzamos por brindar información precisa y actualizada, es tu responsabilidad verificar
                todos los términos y condiciones directamente con el operador antes de realizar apuestas. Siempre
                juega con responsabilidad y dentro de tus posibilidades.
              </p>
            </div>
          </div>
        </div>

        {/* Pie */}
        <div className="bg-mx-red/10 border-t-2 border-mx-red p-3 sm:p-4 flex-shrink-0">
          <p className="text-mx-red-dark font-semibold text-center text-sm">
            +18 | Solo para residentes en México | El juego puede ser adictivo — Juega seguro.
          </p>
        </div>
      </div>
    </div>
  )
}
