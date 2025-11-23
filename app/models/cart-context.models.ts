import { CartItem } from "./cart-item.models";
import { Product } from "./product.models";

export interface CartContextModel {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void
    addToCart: (product: Product) => void
    cartItems: CartItem[]
}