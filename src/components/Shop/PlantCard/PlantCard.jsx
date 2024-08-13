import React from 'react';
import './plantcard.css';
import { useState } from 'react';

function PlantCard({ plant, addToCart }) {
    const [amount, setAmount] = useState(1);
    const [isClicked, setIsClicked] = useState(false);

    const imageUrl = plant.image || 'https://via.placeholder.com/150';
    const name = plant.name || 'Unknown';
    const description = plant.description || 'No description available';
    const oldPrice = plant.old_price;
    const newPrice = plant.new_price;

    const handleMinus = () => {
        setAmount(amount - 1);
        if (amount <= 0) setAmount(0);
      };

      const handleAddToCart = () => {
        if (amount > 0) {
            setIsClicked(true);
            setTimeout(() => {
                addToCart(plant, amount);
                setIsClicked(false);
                setAmount(1);
            }, 2000); 
        }
    };
    

    return (
        <div className="plant-card">
            <div className="plant-image">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="plant-details">
                <h3>{name}</h3>
                <div className='prices'>
                    <p className='old-price'>${oldPrice}</p>
                    <p className='new-price'>${newPrice}</p>
                </div>
                <p>{description}</p>

                <div className="action-row">
                    <ul className="handle-quantity">
                        <li onClick={() => setAmount(Math.max(amount - 1, 0))} style={{ cursor: "pointer" }}>-</li>
                        <li>{amount}</li>
                        <li onClick={() => setAmount(amount + 1)} style={{ cursor: "pointer" }}>+</li>
                    </ul>
                
                <div className="plant-button">
                    <button 
                        className={`cart-button ${isClicked ? 'clicked' : ''}`} 
                        onClick={handleAddToCart}
                    >
                        <span className="add-to-cart">Add to cart</span>
                        <span className="added">Added</span>
                        <i className="fas fa-shopping-cart"></i>
                        <i className="fas fa-box"></i>
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default PlantCard;