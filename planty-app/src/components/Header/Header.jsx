import './header.css'
import {useState} from 'react';
import { IoMdSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5"
import SearchBar from './SearchBar/SearchBar'
import Cart from './Cart/Cart'

export default function Header() {

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
                <p>logo</p>
            </div>

            <div className="header-links">
                <a href="">Home</a>
                <a href="">Shop</a>
                <a href="">About Us</a>
                <a href="">Contact</a>
            </div>

            <div className="search-cart">
                <button className="search-button" onClick={handleSearchOpen}>
                {isSearchOpen ? (
                            <IoClose size={18} />
                        ) : (
                            <IoMdSearch size={18} />
                        )}
                </button>

                <button className="cart-button" onClick={handleCartOpen}>
                    {isCartOpen ? (
                         <IoClose size={18} />
                    ) : (
                        <IoCartOutline size={18} />
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
        </div>
    )
}