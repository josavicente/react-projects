import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const productInCart = cart.findIndex((item) => item.id === product.id)

    if (productInCart >= 0) {
      const newCart = structuredClone(cart)

      newCart[productInCart].quantity += 1
      return setCart(newCart)
    }

    setCart((prevState) => [...prevState, { ...product, quantity: 1 }])
  }

  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const productInCart = prevCart.find((p) => p.id === product.id)
      if (productInCart.quantity === 1) {
        return prevCart.filter((p) => p.id !== product.id)
      }
      return prevCart.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
      )
    })
  }
  const clearCart = () => {
    setCart([])
  }
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
