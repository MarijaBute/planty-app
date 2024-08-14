import { useState, useEffect } from 'react';
import PlantCard from './PlantCard/PlantCard';
import './shop.css';
import Img1 from './img/image-1.jpg';

export default function Shop({ addToCart, plantsData }) {
    const [plants, setPlants] = useState([]);
    const [sortOption, setSortOption] = useState('');

    useEffect(() => {
        async function fetchPlants() {
            try {
                const response = await fetch('/plants.json');
                const data = await response.json();
                setPlants(data);
            } catch (error) {
                console.error("Error fetching plants:", error);
            }
        }
        fetchPlants();
    }, []);

    useEffect(() => {
        let sortedPlants = [...plants];

        switch (sortOption) {
            case 'name-asc':
                sortedPlants.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                sortedPlants.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'price-low-to-high':
                sortedPlants.sort((a, b) => parseFloat(a.new_price) - parseFloat(b.new_price));
                break;
            case 'price-high-to-low':
                sortedPlants.sort((a, b) => parseFloat(b.new_price) - parseFloat(a.new_price));
                break;
            default:
                break;
        }

        setPlants(sortedPlants);
    }, [sortOption]);

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    return (
        <div className="shop">
            <div className="shop-image-holder">
                <img src={Img1} alt="" className='shop-background'/>
                <div className="shop-card">
                    <h4>SHOP NOW</h4>
                    <h2>Explore Our Plant Collection</h2>
                    <p>Bring nature indoors with our curated collection of stunning plants. Whether you're looking to add a touch of green to your living room or create a vibrant outdoor garden, we have the perfect plants to match your style.</p>
                </div>
            </div>

            <div className="shop-wrapper">
                <div className="shop-heading">
                    <h2>Live Plants<span style={{color: '#000'}}>.</span></h2>
                    <p>All our plants are guaranteed to arrive happy & healthy. It’s our customer happiness guarantee!</p>
                </div>
                <div className="sort-by">
                    <h4>Sort by: </h4>
                    <select onChange={handleSortChange} value={sortOption}>
                        <option value="">Relevance</option>
                        <option value="price-low-to-high">Price Low to High</option>
                        <option value="price-high-to-low">Price High to Low</option>
                        <option value="name-asc">Name A-Z</option>
                        <option value="name-desc">Name Z-A</option>
                    </select>
                </div>
                <div className="plant-list">
                    {plants.map((plant) => (
                        <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
                    ))}
                </div>
            </div>
        </div>
    );
}