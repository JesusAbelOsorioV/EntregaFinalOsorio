import { createContext, useState } from "react"

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    
    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) setCart(prev => [...prev, { ...item, quantity }])
         else {
            const ActProducto = cart.map(prod => {
                if (prod.id === item.id)
                return {
                ...prod,
                quantity: prod.quantity + quantity,
            }
          else return prod
        })
        setCart(ActProducto)
    }   
    }
    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }
    const clearCart = () => {
        setCart([])
    }
    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }
    const totalQuantity = cart.reduce((act, val) => act + val.quantity, 0)

    const total = () => cart.reduce((acumulador, valAct) => acumulador + valAct.quantity * valAct.precio, 0)

    return (
        <CartContext.Provider value={{ addItem, removeItem, clearCart, totalQuantity, total, cart }}>{children}</CartContext.Provider>
    )
}
