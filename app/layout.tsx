import type React from "react"
import type { Metadata } from "next"
import { Lato } from "next/font/google"
import "./globals.css"
import { Footer } from "../components/footer"
import { Header } from "../components/header"

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] })

const siteUrl = "https://mejoresapuestasmexico.mx"
const siteName = "Mejores Apuestas México"
const siteDescription =
  "Guía independiente de las mejores casas de apuestas online en México. Compara bonos, cuotas, promociones y métodos de pago de los operadores con permiso vigente de la SEGOB."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Top Casas de Apuestas Deportivas`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  generator: "Next.js",
  keywords: [
    "apuestas deportivas México",
    "casas de apuestas México",
    "mejores casas de apuestas",
    "apuestas online México",
    "SEGOB apuestas",
    "Liga MX apuestas",
    "bonos de bienvenida apuestas",
    "apuestas legales México",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "Sports Betting",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteUrl,
    siteName,
    title: `${siteName} — Top Casas de Apuestas Deportivas`,
    description: siteDescription,
    images: [
      {
        url: "/banner-hor.png",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Top Casas de Apuestas Deportivas`,
    description: siteDescription,
    images: ["/banner-hor.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  other: {
    "rating": "adult",
    "age-rating": "18+",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-MX">
      <body className={lato.className}>
        <div
          className="min-h-screen relative"
          style={{
            backgroundImage: "url(/bg.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="relative z-10">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
