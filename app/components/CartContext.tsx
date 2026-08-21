// components/CartContext.tsx
'use client'

import React, { createContext, useContext, useState } from 'react'

export interface Drink {
  id: number
  name: string
  brand: string
  description: string
  price: number
  category: string
  image: string // This will now be the path to the image in public folder
  abv: string
  volume: string
}

interface CartItem extends Drink {
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (drink: Drink) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  cartCount: number
  cartTotal: number
  isAgeVerified: boolean
  verifyAge: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isAgeVerified, setIsAgeVerified] = useState(false)

  const addToCart = (drink: Drink) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === drink.id)
      if (existingItem) {
        return prevItems.map(item =>
          item.id === drink.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prevItems, { ...drink, quantity: 1 }]
    })
  }

  const removeFromCart = (id: number) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const verifyAge = () => {
    setIsAgeVerified(true)
  }

  const cartCount = items.reduce((total, item) => total + item.quantity, 0)
  const cartTotal = items.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartCount,
      cartTotal,
      isAgeVerified,
      verifyAge
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}