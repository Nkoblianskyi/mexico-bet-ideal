import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { href: "/about", label: "Sobre nosotros" },
  { href: "/responsible-gaming", label: "Juego responsable" },
  { href: "/cookie-policy", label: "Política de cookies" },
  { href: "/privacy-policy", label: "Privacidad" },
  { href: "/terms", label: "Términos y condiciones" },
]

const partners = [
  {
    href: "https://www.gob.mx/segob",
    alt: "SEGOB",
    src: "/gob.svg",
    whiteBg: false,
  },
  { href: "https://www.gamcare.org/", alt: "GamCare", src: "/gamecare.svg", whiteBg: true },
  { href: "https://www.gambleaware.org/", alt: "GambleAware", src: "/gamble.webp", whiteBg: true },
]

export function Footer() {
  return (
    <footer className="relative bg-black text-white mt-12 border-t border-white/10">
      <div className="flex h-1 w-full">
        <div className="flex-1 bg-mx-green"></div>
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-mx-red"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-10 border-b border-white/10">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 hover:opacity-90 transition-opacity mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <Image src="/logo.png" alt="Logo México" width={36} height={36} />
              </div>
              <div className="font-serif tracking-wide text-xl font-bold leading-none">
                <span className="text-mx-green">Mejores</span>
                <span className="text-white"> Apuestas</span>
                <span className="text-mx-green"> México</span>
                <span className="text-mx-red">.mx</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Guía independiente de casas de apuestas en México. Evaluamos operadores con permiso
              vigente de la SEGOB para que juegues informado, seguro y con responsabilidad.
            </p>
            <div className="mt-5 inline-flex items-center gap-3 border border-mx-red/60 bg-mx-red/10 px-3 py-2">
              <span className="text-mx-red font-extrabold text-base leading-none">+18</span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-white/80 leading-tight">
                Solo mayores<br />de edad
              </span>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.22em] text-mx-green mb-4 pb-2 border-b border-white/10">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-300 hover:text-mx-green transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-mx-green/60 group-hover:bg-mx-green transition-colors"></span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.22em] text-mx-green mb-4 pb-2 border-b border-white/10">
              Juego Responsable
            </h4>
            <div className="space-y-3 text-sm text-gray-300">
              <p className="leading-relaxed">
                Las apuestas deben ser entretenimiento. Apuesta solo lo que puedas permitirte
                perder y no olvides establecer tus propios límites.
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                Si el juego deja de ser diversión y se convierte en un problema, busca apoyo
                profesional. El juego puede generar adicción.
              </p>
              <Link
                href="/responsible-gaming"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-mx-green hover:text-white transition-colors pt-1"
              >
                <span className="w-4 h-px bg-mx-green"></span>
                Ver recursos de ayuda
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.22em] text-mx-green mb-4 pb-2 border-b border-white/10">
              Regulación
            </h4>
            <a
              href="https://www.gob.mx/segob"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-white/15 hover:border-mx-green/60 transition-colors p-3 bg-white/[0.03]"
            >
              <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1">Regulado por</div>
              <div className="text-base font-extrabold text-white leading-tight">SEGOB</div>
              <div className="text-[11px] text-gray-400 leading-snug mt-1">
                Dirección General de Juegos y Sorteos
              </div>
            </a>
          </div>
        </div>

        <div className="py-8 border-b border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-gray-400 whitespace-nowrap">
              Socios de Juego Responsable
            </div>
            <div className="flex-1 hidden lg:block h-px bg-white/10"></div>
            <div className="flex flex-wrap items-center gap-4">
              {partners.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`h-9 flex items-center hover:opacity-80 transition-opacity ${
                    p.whiteBg ? "bg-white px-3" : ""
                  }`}
                >
                  <img src={p.src} alt={p.alt} className="h-7 object-contain" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} <span className="text-gray-300 font-semibold">MejoresApuestasMexico.mx</span>{" "}
            — Todos los derechos reservados.
          </p>
          <p className="text-[11px] text-gray-400 leading-relaxed max-w-2xl lg:text-right">
            <span className="text-mx-red font-bold">+18</span> · Solo para jugadores en México · Operadores regulados
            por <span className="text-mx-green font-semibold">SEGOB</span> · El juego puede ser adictivo — Juega con
            responsabilidad.
          </p>
        </div>
      </div>

      <div className="flex h-1 w-full">
        <div className="flex-1 bg-mx-red"></div>
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-mx-green"></div>
      </div>
    </footer>
  )
}
