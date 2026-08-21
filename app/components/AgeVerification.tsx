// components/AgeVerification.tsx
'use client'

import { useState } from 'react'
import { useCart } from './CartContext'

export default function AgeVerification() {
  const { isAgeVerified, verifyAge } = useCart()
  const [showModal, setShowModal] = useState(!isAgeVerified)

  if (!showModal) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-8">
        <div className="text-center">
          <div className="text-6xl mb-4">🔞</div>
          <h2 className="text-3xl font-bold mb-4">Age Verification Required</h2>
          <p className="text-gray-600 mb-6">
            You must be 18 years or older to enter this site and purchase alcoholic beverages.
            Please verify your age to continue.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => {
                verifyAge()
                setShowModal(false)
              }}
              className="w-full bg-blue-400 text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-semibold"
            >
              I am 21 or Older
            </button>
            <button
              onClick={() => {
                window.location.href = 'https://www.google.com'
              }}
              className="w-full bg-gray-300 text-gray-700 py-3 rounded-md hover:bg-gray-400 transition-colors font-semibold"
            >
              I am Under 21
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            By entering this site, you agree to our Terms of Service and Privacy Policy.
            Please drink responsibly.
          </p>
        </div>
      </div>
    </div>
  )
}