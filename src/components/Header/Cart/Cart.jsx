import React from 'react';
import './cart.css';
import { MdDeleteOutline } from "react-icons/md";

function Cart({ cartItems, removeFromCart }) {
    const cartIsEmpty = cartItems.length === 0;

    return (
        <div className="cart-container">
            <h2 className="cart-heading">Cart</h2>
            {cartIsEmpty ? (
                <p className="emptyCart">Your cart is empty</p>
            ) : (
                cartItems.map((item, index) => (
                    <div className="cart-item" key={index}>
                        <img src={item.image} className="thumbnail-img" alt={item.name} />
                        <div className="item-details">
                            <h5 className="item-text">{item.name}</h5>
                            <div className="total-price">
                            <span className="item-price">${item.new_price}.00 x {item.quantity}</span>
                            <span className="item-total">${item.new_price * item.quantity}.00</span>
                                <button
                                    className="delete-button"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                   <MdDeleteOutline size={18}/>
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            )}
            {!cartIsEmpty && <button className="checkout">Checkout</button>}
        </div>
    );
}

export default Cart;