// app/menu/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import DrinkCard from '@/components/DrinkCard'

const allDrinks = [
  {
    id: 1,
    name: 'Classic Mojito',
    description: 'Fresh mint, lime, sugar, rum, and soda water',
    price: 8.99,
    category: 'Cocktails',
    image: '🍹'
  },
  {
    id: 2,
    name: 'Fresh Orange Juice',
    description: '100% freshly squeezed oranges',
    price: 4.99,
    category: 'Juices',
    image: '🍊'
  },
  {
    id: 3,
    name: 'Iced Caramel Latte',
    description: 'Espresso, milk, caramel syrup, and ice',
    price: 5.49,
    category: 'Coffee',
    image: '☕'
  },
  {
    id: 4,
    name: 'Berry Smoothie',
    description: 'Mixed berries, yogurt, and honey',
    price: 6.99,
    category: 'Smoothies',
    image: '🫐'
  },
  {
    id: 5,
    name: 'Coca Cola',
    description: 'Classic refreshing cola',
    price: 2.49,
    category: 'Soft Drinks',
    image: '🥤'
  },
  {
    id: 6,
    name: 'Margarita',
    description: 'Tequila, lime juice, and orange liqueur',
    price: 9.99,
    category: 'Cocktails',
    image: '🍸'
  },
  {
    id: 7,
    name: 'Green Tea',
    description: 'Premium Japanese green tea',
    price: 3.99,
    category: 'Coffee & Tea',
    image: '🍵'
  },
  {
    id: 8,
    name: 'Mango Lassi',
    description: 'Yogurt, mango, and cardamom',
    price: 5.99,
    category: 'Smoothies',
    image: '🥭'
  },
  {
    id: 9,
    name: 'Sprite',
    description: 'Lemon-lime flavored soda',
    price: 2.49,
    category: 'Soft Drinks',
    image: '🥤'
  },
  {
    id: 10,
    name: 'Espresso',
    description: 'Strong Italian coffee',
    price: 3.49,
    category: 'Coffee',
    image: '☕'
  },
  {
    id: 11,
    name: 'Apple Juice',
    description: 'Fresh pressed apples',
    price: 4.49,
    category: 'Juices',
    image: '🍎'
  },
  {
    id: 12,
    name: 'Piña Colada',
    description: 'Rum, coconut cream, and pineapple juice',
    price: 10.99,
    category: 'Cocktails',
    image: '🍍'
  }
]

const categories = ['All', 'Soft Drinks', 'Juices', 'Coffee', 'Smoothies', 'Cocktails']

export default function Menu() {
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const category = searchParams.get('category')
    if (category) {
      const capitalized = category.charAt(0).toUpperCase() + category.slice(1)
      setSelectedCategory(capitalized)
    }
  }, [searchParams])

  const filteredDrinks = allDrinks.filter(drink => {
    const matchesCategory = selectedCategory === 'All' || drink.category === selectedCategory
    const matchesSearch = drink.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Menu</h1>
      
      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search drinks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Drinks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredDrinks.map(drink => (
          <DrinkCard key={drink.id} drink={drink} />
        ))}
      </div>

      {filteredDrinks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No drinks found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}