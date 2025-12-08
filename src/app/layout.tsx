import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NicheBoostAI',
  description: 'NicheBoostAI is a SaaS platform that leverages AI to help small businesses in the health and wellness sector discover niche audiences on social media, tailor content for them, and automate marketing efforts.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
