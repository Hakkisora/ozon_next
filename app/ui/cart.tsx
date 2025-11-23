'use client'

import { useCart } from "../providers/CartProvider"

export default function Cart() {
    const { cartItems, isOpen, setIsOpen } = useCart()

    return (
        <div className="cart" style={{ display: isOpen ? 'flex' : 'none' }}>
            <div className="cart-body">
                <div className="cart-title">Корзина</div>
                <div className="cart-total">Общая сумма: <span>0</span> руб</div>

                <div className="cart-wrapper">
                    {cartItems.map(item => (
                        <div className="card" key={item.id}>
                            {item.sale ? <div className="card-sale">🔥Hot Sale🔥</div> : ''}
                            <div className="card-img-wrapper">
                                <span className="card-img-top"
                                    style={{ backgroundImage: `url(${item.img})` }}></span>
                            </div>
                            <div className="card-body justify-content-between">
                                <div className="card-price">{item.price} ₽</div>
                                <h5 className="card-title">{item.title}</h5>
                                <button className="btn btn-primary">Удалить</button>
                            </div>
                        </div>
                    ))}
                    {!cartItems.length ? (
                        <div id='cart_empty'>
                            Ваша карзина пуста
                        </div>
                    ) : null}
                </div>
                <button className="btn btn-primary cart-confirm">Оформить заказ</button>
                <div className="cart-close" onClick={() => setIsOpen(false)}>

                </div>
            </div>
        </div>
    )
}