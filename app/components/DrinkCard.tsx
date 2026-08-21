// components/DrinkCard.tsx
'use client'

import Image from 'next/image'
import { useCart, Drink } from './CartContext'
import { useState } from 'react'

interface DrinkCardProps {
  drink: Drink
}

export default function DrinkCard({ drink }: DrinkCardProps) {
  const { addToCart } = useCart()
  const [isAdded, setIsAdded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleAddToCart = () => {
    addToCart(drink)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 1000)
  }

  return (
    <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-shadow border border-gray-800">
      <div className="relative h-64 bg-gradient-to-br from-blue-400 to-blue-400 flex items-center justify-center">
        {!imageError ? (
          <Image
            src={drink.image}
            alt={drink.name}
            fill
            className="object-contain p-4"
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        ) : (
          <div className="text-6xl">🥃</div>
        )}
        <span className="absolute top-2 right-2 bg-black bg-opacity-70 text-blue-400 text-xs px-2 py-1 rounded z-10">
          {drink.abv} ABV
        </span>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-semibold text-white">{drink.name}</h3>
            <p className="text-gray-400 text-sm">{drink.brand}</p>
          </div>
          <span className="text-gray-400 font-bold">${drink.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-400 text-sm mb-2">{drink.description}</p>
        <p className="text-gray-500 text-xs mb-4">{drink.volume} bottle</p>
        <div className="flex justify-between items-center">
          <span className="text-xs font-medium text-gray-400 bg-gray-800 px-2 py-1 rounded">
            {drink.category}
          </span>
          <button
            onClick={handleAddToCart}
            className={`px-4 py-2 rounded-md transition-colors text-sm font-semibold ${
              isAdded 
                ? 'bg-blue-600 text-white' 
                : 'bg-blue-400 text-white hover:bg-blue-400'
            }`}
          >
            {isAdded ? '✓ Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}