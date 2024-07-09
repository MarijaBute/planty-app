import { useState, useEffect } from 'react';
import PlantCard from './PlantCard/PlantCard';
import './shop.css';
import Img1 from './img/image-1.jpg'

export default function Shop({ addToCart, plantsData }) {
    const [plants, setPlants] = useState([]);

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

    return (
        <div className="shop">
            <h1>Plant Shop</h1>
            <div className="plant-list">
            {plantsData.map((plant) => (
                <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
            ))}
            </div>
        </div>
    );
}