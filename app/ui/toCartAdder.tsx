'use client'

import { Product } from "../models/product.models"
import { useCart } from "../providers/CartProvider"

export default function ToCartAdder({ product }: { product: Product }) {

    const { addToCart } = useCart()

    return (
        <button className="btn btn-primary" onClick={() => addToCart(product)}>В корзину</button>
    )
}