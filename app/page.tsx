// app/page.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import DrinkCard from './components/DrinkCard'

const featuredDrinks = [
  {
    id: 1,
    name: "Jack Daniel's Old No. 7",
    brand: "Jack Daniel's",
    description: "The classic Tennessee whiskey with notes of vanilla, oak, and caramel",
    price: 29.99,
    category: "Whiskey",
    image: "/brands/jack-daniels/old-no-7.png",
    abv: "40%",
    volume: "750ml"
  },
  {
    id: 9,
    name: "Grey Goose Vodka",
    brand: "Grey Goose",
    description: "Premium French vodka known for its exceptional smoothness",
    price: 39.99,
    category: "Vodka",
    image: "/brands/grey-goose/vodka.png",
    abv: "40%",
    volume: "750ml"
  },
  {
    id: 13,
    name: "Captain Morgan Spiced Rum",
    brand: "Captain Morgan",
    description: "Spiced rum with hints of vanilla and warm spices",
    price: 24.99,
    category: "Rum",
    image: "/brands/captain-morgan/spiced-rum.png",
    abv: "35%",
    volume: "750ml"
  },
  {
    id: 17,
    name: "Bombay Sapphire Gin",
    brand: "Bombay",
    description: "London dry gin infused with ten exotic botanicals",
    price: 34.99,
    category: "Gin",
    image: "/brands/bombay/sapphire.png",
    abv: "47%",
    volume: "750ml"
  }
]

const featuredBrands = [
  { name: "Jack Daniel's", image: "/brands/jack-daniels/old-no-7.png", category: "whiskey" },
  { name: "Grey Goose", image: "/brands/grey-goose/vodka.png", category: "vodka" },
  { name: "Patrón", image: "/brands/patron/silver.png", category: "tequila" },
  { name: "Hennessy", image: "/brands/hennessy/vs.png", category: "brandy" },
  { name: "Bombay", image: "/brands/bombay/sapphire.png", category: "gin" },
  { name: "Captain Morgan", image: "/brands/captain-morgan/spiced-rum.png", category: "rum" }
]

export default function Home() {
  return (
    <div className="bg-gray-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-grey-500 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premium <span className="text-blue-400">Spirits</span> & Fine Liquors
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              From Jack Daniel's to premium vodkas, discover your perfect pour
            </p>
            <div className="space-x-4">
              <Link
                href="/menu"
                className="bg-blue-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors"
              >
                Shop Spirits
              </Link>
              <Link
                href="/about"
                className="bg-transparent border-2 border-blue-400 text-gray-100 px-8 py-3 rounded-full font-semibold hover:bg-amber-500 hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Spirits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Featured Spirits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDrinks.map(drink => (
              <DrinkCard key={drink.id} drink={drink} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Shop by Brand</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {featuredBrands.map(brand => (
              <Link
                key={brand.name}
                href={`/menu?brand=${encodeURIComponent(brand.name)}`}
                className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center border border-gray-700 hover:border-amber-500 group"
              >
                <div className="relative h-32 mb-4">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="font-semibold text-white group-hover:text-amber-400 transition-colors">
                  {brand.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Browse Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Whiskey', emoji: '🥃', image: '/brands/jack-daniels/old-no-7.png' },
              { name: 'Vodka', emoji: '🍸', image: '/brands/grey-goose/vodka.png' },
              { name: 'Rum', emoji: '🏴‍☠️', image: '/brands/captain-morgan/spiced-rum.png' },
              { name: 'Gin', emoji: '🍾', image: '/brands/bombay/sapphire.png' },
              { name: 'Tequila', emoji: '🌵', image: '/brands/patron/silver.png' },
              { name: 'Brandy', emoji: '🍷', image: '/brands/hennessy/vs.png' },
              { name: 'Liqueurs', emoji: '🍹', image: '/brands/baileys/irish-cream.png' },
              { name: 'Premium', emoji: '💎', image: '/brands/johnnie-walker/blue-label.png' }
            ].map(category => (
              <Link
                key={category.name}
                href={`/menu?category=${category.name.toLowerCase()}`}
                className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center border border-gray-700 hover:border-amber-500 group"
              >
                <div className="relative h-24 mb-4">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="font-semibold text-lg text-white group-hover:text-amber-400 transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-900 to-amber-700 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Whiskey Lovers</h3>
              <p className="text-amber-200 mb-4">20% off all whiskey bottles</p>
              <Link href="/menu?category=whiskey" className="inline-block bg-white text-amber-900 px-6 py-2 rounded-full font-semibold hover:bg-amber-100 transition-colors">
                Shop Now
              </Link>
            </div>
            <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Party Pack</h3>
              <p className="text-gray-300 mb-4">Mix & match any 3 spirits</p>
              <Link href="/menu" className="inline-block bg-amber-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-amber-700 transition-colors">
                Build Pack
              </Link>
            </div>
            <div className="bg-gradient-to-br from-red-900 to-red-700 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Premium Selection</h3>
              <p className="text-red-200 mb-4">Rare & limited editions</p>
              <Link href="/menu?category=premium" className="inline-block bg-white text-red-900 px-6 py-2 rounded-full font-semibold hover:bg-red-100 transition-colors">
                Explore
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}