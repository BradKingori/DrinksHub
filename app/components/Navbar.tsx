// components/Navbar.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCart } from './CartContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { cartCount } = useCart()

  return (
    <nav className="bg-gradient-to-r from-black to-black shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-400">DrinksHub</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-amber-100 hover:text-amber-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link href="/menu" className="text-amber-100 hover:text-amber-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Spirits
            </Link>
            <Link href="/about" className="text-amber-100 hover:text-amber-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-amber-100 hover:text-amber-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </Link>
            <Link href="/cart" className="relative text-amber-100 hover:text-amber-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-amber-100 hover:text-amber-300 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-amber-100 hover:text-amber-300 hover:bg-blue-800">
              Home
            </Link>
            <Link href="/menu" className="block px-3 py-2 rounded-md text-base font-medium text-amber-100 hover:text-amber-300 hover:bg-blue-800">
              Spirits
            </Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-amber-100 hover:text-amber-300 hover:bg-blue-800">
              About
            </Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-amber-100 hover:text-amber-300 hover:bg-blue-800">
              Contact
            </Link>
            <Link href="/cart" className="block px-3 py-2 rounded-md text-base font-medium text-amber-100 hover:text-amber-300 hover:bg-blue-800">
              Cart ({cartCount})
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}