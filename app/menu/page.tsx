// app/menu/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import DrinkCard from '../components/DrinkCard'

const allDrinks = [
  // Jack Daniel's Products
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
    id: 2,
    name: "Jack Daniel's Gentleman Jack",
    brand: "Jack Daniel's",
    description: "Double-mellowed Tennessee whiskey for exceptional smoothness",
    price: 34.99,
    category: "Whiskey",
    image: "/brands/jack-daniels/gentleman-jack.png",
    abv: "40%",
    volume: "750ml"
  },
  {
    id: 3,
    name: "Jack Daniel's Single Barrel",
    brand: "Jack Daniel's",
    description: "Premium single barrel Tennessee whiskey with rich complexity",
    price: 49.99,
    category: "Whiskey",
    image: "/brands/jack-daniels/single-barrel.png",
    abv: "47%",
    volume: "750ml"
  },
  {
    id: 4,
    name: "Jack Daniel's Tennessee Honey",
    brand: "Jack Daniel's",
    description: "Tennessee whiskey with honey liqueur for a sweet finish",
    price: 27.99,
    category: "Whiskey",
    image: "/brands/jack-daniels/tennessee-honey.png",
    abv: "35%",
    volume: "750ml"
  },
  
  // Jameson Products
  {
    id: 5,
    name: "Jameson Irish Whiskey",
    brand: "Jameson",
    description: "Triple-distilled Irish whiskey with a smooth, balanced flavor",
    price: 27.99,
    category: "Whiskey",
    image: "/brands/jameson/irish-whiskey.png",
    abv: "40%",
    volume: "750ml"
  },
  {
    id: 6,
    name: "Jameson Black Barrel",
    brand: "Jameson",
    description: "Rich Irish whiskey aged in double-charred barrels",
    price: 39.99,
    category: "Whiskey",
    image: "/brands/jameson/black-barrel.png",
    abv: "40%",
    volume: "750ml"
  },
  
  // Johnnie Walker Products
  {
    id: 7,
    name: "Johnnie Walker Black Label",
    brand: "Johnnie Walker",
    description: "Blended Scotch whisky with rich, complex flavors",
    price: 39.99,
    category: "Whiskey",
    image: "/brands/johnnie-walker/black-label.png",
    abv: "40%",
    volume: "750ml"
  },
  {
    id: 8,
    name: "Johnnie Walker Blue Label",
    brand: "Johnnie Walker",
    description: "Rare and exclusive blend of Scotland's finest whiskies",
    price: 199.99,
    category: "Whiskey",
    image: "/brands/johnnie-walker/blue-label.png",
    abv: "40%",
    volume: "750ml"
  },
  
  // Grey Goose Products
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
    id: 10,
    name: "Grey Goose La Poire",
    brand: "Grey Goose",
    description: "Flavored vodka infused with Anjou pears",
    price: 42.99,
    category: "Vodka",
    image: "/brands/grey-goose/la-poire.png",
    abv: "40%",
    volume: "750ml"
  },
  
  // Absolut Products
  {
    id: 11,
    name: "Absolut Vodka",
    brand: "Absolut",
    description: "Swedish vodka made exclusively from natural ingredients",
    price: 19.99,
    category: "Vodka",
    image: "/brands/absolut/vodka.png",
    abv: "40%",
    volume: "750ml"
  },
  {
    id: 12,
    name: "Absolut Citron",
    brand: "Absolut",
    description: "Lemon-flavored vodka with a citrus twist",
    price: 21.99,
    category: "Vodka",
    image: "/brands/absolut/citron.png",
    abv: "40%",
    volume: "750ml"
  },
  
  // Captain Morgan Products
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
    id: 14,
    name: "Captain Morgan White Rum",
    brand: "Captain Morgan",
    description: "Light and crisp white rum for mixing",
    price: 22.99,
    category: "Rum",
    image: "/brands/captain-morgan/white-rum.png",
    abv: "40%",
    volume: "750ml"
  },
  
  // Bacardi Products
  {
    id: 15,
    name: "Bacardi Superior",
    brand: "Bacardi",
    description: "Light and aromatic white rum, perfect for cocktails",
    price: 15.99,
    category: "Rum",
    image: "/brands/bacardi/superior.png",
    abv: "40%",
    volume: "750ml"
  },
  {
    id: 16,
    name: "Bacardi Gold",
    brand: "Bacardi",
    description: "Golden rum with a rich, smooth character",
    price: 17.99,
    category: "Rum",
    image: "/brands/bacardi/gold.png",
    abv: "40%",
    volume: "750ml"
  },
  
  // Bombay Products
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
  },
  {
    id: 18,
    name: "Bombay Original",
    brand: "Bombay",
    description: "Classic London dry gin with eight botanicals",
    price: 29.99,
    category: "Gin",
    image: "/brands/bombay/original.png",
    abv: "40%",
    volume: "750ml"
  },
  
  // Hendrick's Products
  {
    id: 19,
    name: "Hendrick's Gin",
    brand: "Hendrick's",
    description: "Unusual gin with rose and cucumber infusions",
    price: 37.99,
    category: "Gin",
    image: "/brands/hendricks/gin.png",
    abv: "44%",
    volume: "750ml"
  },
  
  // Patrón Products
  {
    id: 20,
    name: "Patrón Silver Tequila",
    brand: "Patrón",
    description: "Premium tequila made from 100% Weber Blue Agave",
    price: 49.99,
    category: "Tequila",
    image: "/brands/patron/silver.png",
    abv: "40%",
    volume: "750ml"
  },
  {
    id: 21,
    name: "Patrón Añejo",
    brand: "Patrón",
    description: "Aged tequila with oak and agave notes",
    price: 59.99,
    category: "Tequila",
    image: "/brands/patron/anejo.png",
    abv: "40%",
    volume: "750ml"
  },
  
  // Hennessy Products
  {
    id: 22,
    name: "Hennessy VS Cognac",
    brand: "Hennessy",
    description: "The world's most popular cognac with rich, fruity notes",
    price: 45.99,
    category: "Brandy",
    image: "/brands/hennessy/vs.png",
    abv: "40%",
    volume: "750ml"
  },
  {
    id: 23,
    name: "Hennessy VSOP",
    brand: "Hennessy",
    description: "Refined cognac with vanilla and oak undertones",
    price: 65.99,
    category: "Brandy",
    image: "/brands/hennessy/vsop.png",
    abv: "40%",
    volume: "750ml"
  },
  
  // Baileys Products
  {
    id: 24,
    name: "Baileys Irish Cream",
    brand: "Baileys",
    description: "Irish cream liqueur with a perfect blend of cream and whiskey",
    price: 24.99,
    category: "Liqueurs",
    image: "/brands/baileys/irish-cream.png",
    abv: "17%",
    volume: "750ml"
  }
]

const categories = ['All', 'Whiskey', 'Vodka', 'Rum', 'Gin', 'Tequila', 'Brandy', 'Liqueurs']
const brands = ['All Brands', "Jack Daniel's", 'Jameson', 'Johnnie Walker', 'Grey Goose', 'Absolut', 'Captain Morgan', 'Bacardi', 'Bombay', "Hendrick's", 'Patrón', 'Hennessy', 'Baileys']

export default function Menu() {
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedBrand, setSelectedBrand] = useState('All Brands')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('name')

  useEffect(() => {
    const category = searchParams.get('category')
    if (category) {
      const capitalized = category.charAt(0).toUpperCase() + category.slice(1)
      setSelectedCategory(capitalized)
    }
    const brand = searchParams.get('brand')
    if (brand) {
      setSelectedBrand(brand)
    }
  }, [searchParams])

  const filteredDrinks = allDrinks
    .filter(drink => {
      const matchesCategory = selectedCategory === 'All' || drink.category === selectedCategory
      const matchesBrand = selectedBrand === 'All Brands' || drink.brand === selectedBrand
      const matchesSearch = drink.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           drink.brand.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesBrand && matchesSearch
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      return a.name.localeCompare(b.name)
    })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-950 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">Our Spirits Collection</h1>
      
      {/* Search and Sort */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search spirits or brands..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-white placeholder-gray-500"
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
          >
            <option value="name">Sort by Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Brand Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {brands.map(brand => (
          <button
            key={brand}
            onClick={() => setSelectedBrand(brand)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              selectedBrand === brand
                ? 'bg-gray-700 text-blue-400 border border-blue-500'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 border border-gray-700'
            }`}
          >
            {brand}
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
          <p className="text-gray-400 text-lg">No spirits found matching your criteria.</p>
        </div>
      )}
      
      {/* Disclaimer */}
      <div className="mt-12 text-center text-sm text-gray-500">
        <p>All prices include applicable taxes. Must be 21+ to purchase.</p>
        <p>Please drink responsibly. Do not drink and drive.</p>
      </div>
    </div>
  )
}