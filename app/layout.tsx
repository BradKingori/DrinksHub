// app/layout.tsx
import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AgeVerification from './components/AgeVerification'
import { CartProvider } from './components/CartContext'

const inter = Oswald({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DrinksHub - Premium Spirits & Fine Liquors',
  description: 'Discover and order premium spirits including Jack Daniels, vodka, rum, gin, and more. Must be 21+ to order.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950`}>
        <CartProvider>
          <AgeVerification />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}