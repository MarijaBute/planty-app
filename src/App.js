import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Footer from './components/Footer/Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [plantsData, setPlantsData] = useState([]);

  useEffect(() => {
    fetch('/plants.json')
      .then(response => response.json())
      .then(data => setPlantsData(data))
      .catch(error => console.error('Error fetching plants data:', error));
  }, []);

  const addToCart = (plant, quantity) => {
    setCartItems(prevCartItems => {
      const existingItem = prevCartItems.find(item => item.id === plant.id);
      if (existingItem) {
        return prevCartItems.map(item =>
          item.id === plant.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevCartItems, { ...plant, quantity }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== itemId));
  };

  return (
    <>
      <Router>
        <Header cartItems={cartItems} removeFromCart={removeFromCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} plantsData={plantsData} />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;