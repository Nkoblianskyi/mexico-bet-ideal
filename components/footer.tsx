import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900/95 backdrop-blur-sm text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        {/* Socios de Juego Responsable */}
        <div className="text-center mb-6">
          <h3 className="text-lg font-bold mb-4">Socios de Juego Responsable</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <Link href="https://www.gob.mx/segob" target="_blank" rel="noopener noreferrer">
              <div className="h-8 bg-white rounded px-3 py-1 flex items-center">
                <span className="text-mx-green-mid font-bold text-xs">SEGOB</span>
              </div>
            </Link>
            <Link href="https://www.gamcare.org/" target="_blank" rel="noopener noreferrer">
              <img src="/gamecare.svg" alt="GamCare" className="h-8 bg-white rounded px-2 py-1" />
            </Link>
            <Link href="https://gamblingtherapy.org/" target="_blank" rel="noopener noreferrer">
              <img src="/gordon.png" alt="Gambling Therapy" className="h-8 bg-white rounded px-2 py-1" />
            </Link>
            <Link href="https://gamblersanonymous.org/" target="_blank" rel="noopener noreferrer">
              <img src="/anonymos.avif" alt="Jugadores Anónimos" className="h-8 bg-white rounded px-2 py-1" />
            </Link>
            <Link href="https://www.gambleaware.org/" target="_blank" rel="noopener noreferrer">
              <img src="/gamble.webp" alt="GambleAware" className="h-8 bg-white rounded px-2 py-1" />
            </Link>
          </div>
        </div>

        {/* Logo and Site Name */}
        <div className="mb-6">
          <Link href="/" className="flex items-center justify-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 flex items-center justify-center">
              <Image src="/logo.png" alt="Logo México" width={32} height={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold font-serif tracking-wide">
                <span className="text-mx-green">Mejores</span>
                <span className="text-white"> Apuestas</span>
                <span className="text-mx-green"> México</span>
                <span className="text-mx-red"> .mx</span>
              </h3>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm mb-6">
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
            SOBRE NOSOTROS
          </Link>
          <Link href="/responsible-gaming" className="text-gray-300 hover:text-white transition-colors">
            JUEGO RESPONSABLE
          </Link>
          <Link href="/cookie-policy" className="text-gray-300 hover:text-white transition-colors">
            POLÍTICA DE COOKIES
          </Link>
          <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
            PRIVACIDAD
          </Link>
          <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
            TÉRMINOS
          </Link>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 mb-1 text-sm">
            © {new Date().getFullYear()} MejoresApuestasMexico.mx. Todos los derechos reservados.
          </p>
          <p className="text-red-400 font-bold text-sm">
            +18 | Solo para jugadores en México | Operadores regulados por SEGOB | El juego puede ser adictivo — Juega con responsabilidad.
          </p>
        </div>
      </div>
    </footer>
  )
}
