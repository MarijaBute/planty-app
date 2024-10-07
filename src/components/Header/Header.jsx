import './header.css'
import {useState} from 'react';
import { Link } from "react-router-dom"
import { IoMdSearch } from "react-icons/io";
import { IoCartOutline, IoClose } from "react-icons/io5";
import SearchBar from './SearchBar/SearchBar'
import Cart from './Cart/Cart'
import { TbMenuDeep } from "react-icons/tb";


export default function Header({ cartItems, removeFromCart }) {

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

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

            <div className="mobile-menu-toggle" onClick={handleMenuOpen}>
            <TbMenuDeep size={22}/>
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

           {isMobileMenuOpen && (
            <div className="mobile-menu">
                    <div className="mobile-logo-wrap">
                    <p>PLANTY.</p>
                    <button className='close-icon' onClick={handleMenuOpen}><IoClose size={18} /></button>
                    </div>
                <div className="mobile-menu-wrapper">

                <div className="mobile-header-links">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/about">About us</Link>
                <Link to="/contact">Contact</Link>
                </div>

                <div className="mobile-search-cart">
                    <button className="mobile-search-button" onClick={handleSearchOpen}>
                    {isSearchOpen ? (
                                <IoClose size={18} />
                            ) : (
                                <IoMdSearch size={18} />
                            )}
                    </button>

                    <button className="mobile-cart-btn" onClick={handleCartOpen}>
                            {isCartOpen ? <IoClose size={18} /> : <IoCartOutline size={18} />}
                            {cartItems.length > 0 && (
                                <span className="cart-quantity">{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
                            )}
                        </button>
            
                </div>

                </div>
            </div>
                        )}
        </div>
    )
}