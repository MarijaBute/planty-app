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
                <img src={Img1} alt="" className='shop-background'/>
            <div className="shop-wrapper">
            <div className="shop-heading">
                <h2>Live Plants<span style={{color: '#000'}}>.</span></h2>
                <p>All our plants are guaranteed to arrive happy & healthy. It’s our customer happiness guarantee!</p>
            </div>
            <div className="plant-list">
            {plantsData.map((plant) => (
                <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
            ))}
            </div>
            </div>
          
        </div>
    );
}