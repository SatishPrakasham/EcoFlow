import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GetStartedScreen.css';

import Rectangle1 from './assets/Rectangle 1.png';
import Rectangle2 from './assets/Rectangle 2.png';
import Rectangle3 from './assets/Rectangle 3.png';
import Rectangle4 from './assets/Rectangle 4.png';
import Rectangle5 from './assets/Rectangle 5.png';
import Rectangle6 from './assets/Rectangle 6.png';
import Rectangle11 from './assets/Rectangle 11.png';
import Rectangle12 from './assets/Rectangle 12.png';

export default function GetStartedScreen() {
  const navigate = useNavigate();

  const handleFlaskClick = () => {
    navigate('/flask'); // Navigate to the FlaskPage when Flask button is clicked
  };

  return (
    <div className='main-container'>
      <span className='eco-flow'>ECO FLOW</span>
      <div className='logo' /> {/* Add logo image path in CSS */}

      <div className='welcome-message-card'>
        <span className='welcome-message'>Welcome Ronaldo!</span>
        <span className='bottle-description'>
          Experience the world of bottles with our bottle line ups
        </span>
        <div className='rectangle'>
          <span className='search'>search</span>
        </div>
      </div>

      <span className='new-collection'>New Collection</span>

      <div className='frame-container'>
        <div className='frame'>
          <button className='button'>All</button>
          <button className='rectangle-button' onClick={handleFlaskClick}>Flask</button> {/* Connect to FlaskPage */}
          <button className='rectangle-button-4'>Bottle</button>
          <button className='rectangle-button'>Accessories</button>
        </div>
      </div>

      <div className='all-products-div'>
        <div className='rectangle-div'>
          <div className='product-image' />
          <span className='product-info'>2.2L Oversized Bottle Pro<br />RM 85</span>
        </div>
        <div className='rectangle-div'>
          <div className='product-image2'  />
          <span className='product-info'>2.2L Oversized Bottle Pro<br />RM 85</span>
        </div>
        <div className='rectangle-div'>
          <div className='product-image3'  />
          <span className='product-info'>1.5L Oversized Bottle<br />RM 65</span>
        </div>
        <div className='rectangle-div'>
          <div className='product-image4'  />
          <span className='product-info'>1.5L Oversized Bottle<br />RM 65</span>
        </div>
        <div className='rectangle-div'>
          <div className='product-image5'  />
          <span className='product-info'>1.5L Oversized Bottle<br />RM 65</span>
        </div>
        <div className='rectangle-div'>
          <div className='product-image6'  />
          <span className='product-info'>900ml Thermo Flask<br />RM 100</span>
        </div>
        <div className='rectangle-div'>
          <div className='product-image7'  />
          <span className='product-info'>Anti-Slip Guard<br />RM 15</span>
        </div>
        <div className='rectangle-div'>
          <div className='product-image8'  />
          <span className='product-info'>Anti-Slip Guard<br />RM 15</span>
        </div>
        {/* Add more products as needed */}
      </div>
    </div>
  );
}
