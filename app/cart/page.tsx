// app/cart/page.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useCart } from '../components/CartContext'
import Link from 'next/link'

export default function Cart() {
  const { items, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart()
  const [checkoutStep, setCheckoutStep] = useState(1)
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: ''
  })

  if (items.length === 0 && checkoutStep === 1) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-950 min-h-screen">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h1 className="text-3xl font-bold mb-4 text-white">Your Cart is Empty</h1>
          <p className="text-gray-400 mb-8">Looks like you haven't added any spirits to your cart yet.</p>
          <Link
            href="/menu"
            className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Browse Spirits
          </Link>
        </div>
      </div>
    )
  }

  const handleCheckout = () => {
    setCheckoutStep(2)
  }

  const handlePlaceOrder = () => {
    alert('Order placed successfully! Your spirits will be delivered soon.')
    clearCart()
    setCheckoutStep(1)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-950 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-white">
        {checkoutStep === 1 ? 'Your Cart' : 'Checkout'}
      </h1>
      
      {checkoutStep === 1 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.id} className="bg-gray-900 rounded-lg shadow-md p-4 flex items-center border border-gray-800">
                  <div className="relative w-20 h-20 mr-4 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">{item.name}</h3>
                    <p className="text-blue-400 text-sm">{item.brand}</p>
                    <p className="text-gray-400 text-xs">{item.volume} • {item.abv} ABV</p>
                    <p className="text-blue-400 font-bold">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-800 text-gray-300 w-8 h-8 rounded-full hover:bg-gray-700"
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-white">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-800 text-gray-300 w-8 h-8 rounded-full hover:bg-gray-700"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            
            <button
              onClick={clearCart}
              className="mt-4 text-red-600 hover:text-red-700 text-sm"
            >
              Clear Cart
            </button>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-900 rounded-lg shadow-md p-6 h-fit border border-gray-800">
            <h2 className="text-xl font-bold mb-4 text-white">Order Summary</h2>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Subtotal</span>
                <span className="font-semibold text-white">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Delivery Fee</span>
                <span className="font-semibold text-white">$4.99</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Tax (8%)</span>
                <span className="font-semibold text-white">${(cartTotal * 0.08).toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-800 pt-3">
                <div className="flex justify-between">
                  <span className="font-bold text-white">Total</span>
                  <span className="font-bold text-amber-400">
                    ${(cartTotal + 4.99 + cartTotal * 0.08).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-semibold mb-2"
            >
              Proceed to Checkout
            </button>
            <Link
              href="/menu"
              className="block text-center text-gray-400 hover:text-blue-400 text-sm"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      ) : (
        /* Checkout Form - same as before */
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900 rounded-lg shadow-md p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-6 text-white">Shipping Information</h2>
            <form onSubmit={(e) => {
              e.preventDefault()
              handlePlaceOrder()
            }} className="space-y-4">
              {/* Form fields same as before */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={shippingInfo.name}
                  onChange={(e) => setShippingInfo({...shippingInfo, name: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Address</label>
                <input
                  type="text"
                  required
                  value={shippingInfo.address}
                  onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">City</label>
                  <input
                    type="text"
                    required
                    value={shippingInfo.city}
                    onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">State</label>
                  <input
                    type="text"
                    required
                    value={shippingInfo.state}
                    onChange={(e) => setShippingInfo({...shippingInfo, state: e.target.value})}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">ZIP Code</label>
                  <input
                    type="text"
                    required
                    value={shippingInfo.zip}
                    onChange={(e) => setShippingInfo({...shippingInfo, zip: e.target.value})}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    required
                    value={shippingInfo.phone}
                    onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-800 rounded-md">
                <h3 className="font-semibold text-white mb-2">Order Summary</h3>
                <div className="flex justify-between text-gray-300 mb-2">
                  <span>Items ({items.length})</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300 mb-2">
                  <span>Delivery</span>
                  <span>$4.99</span>
                </div>
                <div className="flex justify-between text-gray-300 mb-2">
                  <span>Tax</span>
                  <span>${(cartTotal * 0.08).toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-white border-t border-gray-700 pt-2">
                  <span>Total</span>
                  <span className="text-blue-400">
                    ${(cartTotal + 4.99 + cartTotal * 0.08).toFixed(2)}
                  </span>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setCheckoutStep(1)}
                  className="flex-1 bg-gray-700 text-white py-3 rounded-md hover:bg-gray-600 transition-colors font-semibold"
                >
                  Back to Cart
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-semibold"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}