import type React from "react"
import type { Metadata } from "next"
import { Fredoka, Inter } from "next/font/google"
import "./globals.css"

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "George's Coin - Memorial Meme Token",
  description: "A commemorative token honoring Georgie Boy the beloved TikTok monkey",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${fredoka.variable} ${inter.variable} font-body antialiased`}>{children}</body>
    </html>
  )
}
