// components/DrinkCard.tsx
'use client'

import { useCart, Drink } from './CartContext'

interface DrinkCardProps {
  drink: Drink
}

export default function DrinkCard({ drink }: DrinkCardProps) {
  const { addToCart } = useCart()

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-6xl">
        {drink.image}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{drink.name}</h3>
          <span className="text-blue-600 font-bold">${drink.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{drink.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {drink.category}
          </span>
          <button
            onClick={() => addToCart(drink)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}