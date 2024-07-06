import { BiSearch } from "react-icons/bi"
import "./searchbar.css"


export default function SearchBar({isSearchOpen}) {

    return (
        <div className={`search-bar ${isSearchOpen ? 'open' : ''}`}>
            <div className="search-items">
            <div className="search-text">Search here</div>
            <div><BiSearch size={18}/></div>
            </div>
        </div>
    )

} 