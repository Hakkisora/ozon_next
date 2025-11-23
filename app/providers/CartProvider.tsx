'use client'

import { createContext, ReactNode, useContext, useState } from "react";
import { CartContextModel } from "../models/cart-context.models";
import { CartItem } from "../models/cart-item.models";
import { Product } from "../models/product.models";

const CartContext = createContext<CartContextModel | undefined>(undefined)

export const useCart = () => {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error('Context aren`t availeble!')
    }

    return context
}

export default function CartProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [cartItems, setcartItems] = useState<CartItem[]>([])

    const addToCart = (product: Product) => {
        setcartItems((prev) => {
            const findProduct = cartItems.find(p => p.id === product.id)

            if (findProduct) {
                prev.map(p => {
                    if (p.id === findProduct.id) {
                        p.count++
                    }

                    return p
                })
            } else {
                return [...prev, { ...product, count: 1 }]
            }

            return prev
        })
    }
    return (
        <CartContext.Provider value={{ isOpen, setIsOpen, addToCart, cartItems }}>
            {children}
        </CartContext.Provider>
    )
}