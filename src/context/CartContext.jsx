import { createContext, useContext, useReducer } from 'react'

const CartContext = createContext(null)

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      const existing = state.find((i) => i.id === action.payload.id && i.sku === (action.payload.sku ?? null))
      if (existing) {
        return state.map((i) =>
          i.id === action.payload.id && i.sku === (action.payload.sku ?? null)
            ? { ...i, qty: i.qty + (action.payload.qty ?? 1) }
            : i
        )
      }
      return [...state, { ...action.payload, qty: action.payload.qty ?? 1 }]
    }
    case 'REMOVE':
      return state.filter((i) => !(i.id === action.payload.id && (i.sku ?? null) === (action.payload.sku ?? null)))
    case 'UPDATE_QTY': {
      const { id, sku, qty } = action.payload
      if (qty < 1) return state.filter((i) => !(i.id === id && (i.sku ?? null) === (sku ?? null)))
      return state.map((i) =>
        i.id === id && (i.sku ?? null) === (sku ?? null) ? { ...i, qty } : i
      )
    }
    case 'CLEAR':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [])

  const addToCart = (item, qty = 1) =>
    dispatch({ type: 'ADD', payload: { ...item, qty } })
  const removeFromCart = (id, sku = null) =>
    dispatch({ type: 'REMOVE', payload: { id, sku } })
  const updateQty = (id, sku, qty) =>
    dispatch({ type: 'UPDATE_QTY', payload: { id, sku, qty } })
  const clearCart = () => dispatch({ type: 'CLEAR' })

  const cartTotal = cart.reduce((acc, i) => acc + (i.price * i.qty), 0)
  const cartCount = cart.reduce((acc, i) => acc + i.qty, 0)

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
