import './header.css'
import {useState} from 'react';
import { Link } from "react-router-dom"
import { IoMdSearch } from "react-icons/io";
import { IoCartOutline, IoClose } from "react-icons/io5";
import SearchBar from './SearchBar/SearchBar'
import Cart from './Cart/Cart'

export default function Header({ cartItems, removeFromCart }) {

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleSearchOpen = () => {
        setIsSearchOpen((isOpen) => !isOpen)
    }

    const handleCartOpen = () => {
        setIsCartOpen((cartOpen) => !cartOpen)
    }

    return (
        <div className="site-header">
        <div className="header-wrapper">
            <div className="header-logo">
                <p>PLANTY.</p>
            </div>

            <div className="header-links">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About us</Link>
            <Link to="/contact">Contact</Link>
            </div>

            <div className="search-cart">
                <button className="search-button" onClick={handleSearchOpen}>
                {isSearchOpen ? (
                            <IoClose size={18} />
                        ) : (
                            <IoMdSearch size={18} />
                        )}
                </button>

                <button className="cart-btn" onClick={handleCartOpen}>
                        {isCartOpen ? <IoClose size={18} /> : <IoCartOutline size={18} />}
                        {cartItems.length > 0 && (
                            <span className="cart-quantity">{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
                        )}
                    </button>
           
            </div>
        </div>
        <div className="search-bar-container">
                <SearchBar 
                    isSearchOpen={isSearchOpen} 
                    handleSearchOpen={handleSearchOpen} 
                />
            </div>

            <div className="cart-contain">
            {isCartOpen && <Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
            </div>
        </div>
    )
}