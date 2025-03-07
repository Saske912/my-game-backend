import { Navigation } from "@/components/navigation"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OGame Clone",
  description: "Free-to-play космическая стратегия",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
