// app/page.tsx
'use client'

import Link from 'next/link'
import DrinkCard from '@/components/DrinkCard'

const featuredDrinks = [
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
  }
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premium Drinks for Every Occasion
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              From refreshing juices to exotic cocktails, we have it all
            </p>
            <div className="space-x-4">
              <Link
                href="/menu"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Order Now
              </Link>
              <Link
                href="/about"
                className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Drinks */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Drinks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDrinks.map(drink => (
              <DrinkCard key={drink.id} drink={drink} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Browse Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Soft Drinks', 'Fresh Juices', 'Coffee & Tea', 'Cocktails'].map(category => (
              <Link
                key={category}
                href={`/menu?category=${category.toLowerCase()}`}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="text-4xl mb-4">
                  {category === 'Soft Drinks' && '🥤'}
                  {category === 'Fresh Juices' && '🍊'}
                  {category === 'Coffee & Tea' && '☕'}
                  {category === 'Cocktails' && '🍸'}
                </div>
                <h3 className="font-semibold text-lg">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}