import type React from "react"
import type { Metadata } from "next"
import { Lato } from "next/font/google"
import "./globals.css"
import { Footer } from "../components/footer"
import { Header } from "../components/header"

const mulish = Lato({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: "Mejores Apuestas México - Top Casas de Apuestas Deportivas",
  description:
    "Descubre las mejores casas de apuestas deportivas online en México. Compara bonos, cuotas y promociones de los operadores regulados por SEGOB.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-MX">
      <body className={mulish.className}>
        <div
          className="min-h-screen relative"
          style={{
            backgroundImage: "url(/bg-8.jpg)",
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
