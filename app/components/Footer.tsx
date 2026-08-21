// components/Footer.tsx
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-500">BoozeHub</h3>
            <p className="text-gray-400">Premium spirits and alcoholic beverages for connoisseurs. Quality guaranteed.</p>
            <p className="text-xs text-gray-500 mt-2">Must be 18+ to order. Drink responsibly.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-500">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/menu" className="text-gray-400 hover:text-amber-400 transition-colors">Spirits Menu</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-amber-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-500">Categories</h4>
            <ul className="space-y-2">
              <li><Link href="/menu?category=whiskey" className="text-gray-400 hover:text-amber-400 transition-colors">Whiskey</Link></li>
              <li><Link href="/menu?category=vodka" className="text-gray-400 hover:text-amber-400 transition-colors">Vodka</Link></li>
              <li><Link href="/menu?category=rum" className="text-gray-400 hover:text-amber-400 transition-colors">Rum</Link></li>
              <li><Link href="/menu?category=gin" className="text-gray-400 hover:text-amber-400 transition-colors">Gin</Link></li>
              <li><Link href="/menu?category=tequila" className="text-gray-400 hover:text-amber-400 transition-colors">Tequila</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-500">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Spirit Street</li>
              <li>(721)555-555</li>
              <li>info@boozehub.com</li>
            </ul>
            <div className="mt-4">
              <p className="text-xs text-gray-500">Follow us:</p>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-gray-400 hover:text-amber-400">📘</a>
                <a href="#" className="text-gray-400 hover:text-amber-400">📸</a>
                <a href="#" className="text-gray-400 hover:text-amber-400">🐦</a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">&copy; 2024 BoozeHub. All rights reserved. Drink responsibly.</p>
          <p className="text-xs text-gray-600 mt-2">Please drink responsibly. Must be 18+ to purchase.</p>
        </div>
      </div>
    </footer>
  )
}