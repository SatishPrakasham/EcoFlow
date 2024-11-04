import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ThankYouPage.css';

export default function ThankYouPage() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/'); // Navigate back to HomePage
  };

  return (
    <div className="thankyou-page">
      <h2 className="purchase-message">Thank you for your Purchase!!</h2>
      <div className="checkmark-circle">
        <span className="checkmark">✔</span>
      </div>
      <button className="home-button" onClick={handleHomeClick}>
        HomePage
      </button>
    </div>
  );
}
