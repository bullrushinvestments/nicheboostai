import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NicheBoostAI',
  description: 'NicheBoostAI is a SaaS platform that leverages AI to help small businesses in the health and wellness sector discover niche audiences on social media, tailor content for them, and automate marketing efforts.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">NicheBoostAI</h1>
      <p className="mt-4 text-lg">NicheBoostAI is a SaaS platform that leverages AI to help small businesses in the health and wellness sector discover niche audiences on social media, tailor content for them, and automate marketing efforts.</p>
    </main>
  )
}
