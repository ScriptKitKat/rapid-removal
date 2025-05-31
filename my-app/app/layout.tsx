import type React from "react"
import type { Metadata } from "next"
import { Roboto, Oswald, Bebas_Neue} from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"]})

export const metadata: Metadata = {
  title: "Rapid Removal DFW - Junk Removal Services",
  description:
    "Fast and affordable junk removal services in the Dallas-Fort Worth area. Same-day service available for residential and commercial needs.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
