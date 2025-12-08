import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GreenCycle',
  description: 'A subscription-based service that delivers curated eco-friendly products to businesses and individuals each month, aiming to reduce environmental impact through sustainable consumption.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">GreenCycle</h1>
      <p className="mt-4 text-lg">A subscription-based service that delivers curated eco-friendly products to businesses and individuals each month, aiming to reduce environmental impact through sustainable consumption.</p>
    </main>
  )
}
