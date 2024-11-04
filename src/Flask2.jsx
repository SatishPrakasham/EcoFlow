import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Flask2.css';
import ProductImage1 from './assets/Flask_2.png';
import ProductImage2 from './assets/Flask_2_2.png';
import ProductImage3 from './assets/Flask_1_1_1.png';

export default function Flask2() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/flask'); // Navigate back to FlaskPage
  };

  const handleAddToCartClick = () => {
    navigate('/payment'); // Navigate to PaymentPage
  };

  return (
    <div className="flask2-page">
      <div className="header">
        <span className="back-arrow" onClick={handleBackClick}>←</span>
        <h1 className="eco-flow-title">ECO FLOW</h1>
        <div className="logo"></div>
      </div>
      
      <h2 className="product-title">900ml Thermo Flask <br /> Seashell Beige RM 100</h2>

      <div className="product-images">
        <img src={ProductImage1} alt="Main Product" className="product-image" />
        <img src={ProductImage2} alt="Side View" className="product-image" />
        <img src={ProductImage3} alt="Detail View" className="product-image" />
      </div>

      <h3 className="description-title">Product Description</h3>
      <p className="product-description">
        The magnetic cap feature further elevates the experience, ensuring you never misplace your cap again.
        <br /><br />
        Boasting dual-sip technology, resilient stainless steel, and a non-slip base, this bottle is as versatile as the sea,
        ensuring every sip feels like a refreshing ocean breeze.
        <br /><br />
        Embrace the Wave and redefine your hydration experience.
      </p>

      <button className="add-to-cart-button" onClick={handleAddToCartClick}>
        Add to Cart <span className="cart-icon">🛒</span>
      </button>
    </div>
  );
}
