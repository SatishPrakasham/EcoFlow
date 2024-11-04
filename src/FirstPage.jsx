import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FirstPage.css';
import BottleImage from './assets/Bottle.png'; // Replace with the path to your bottle image

export default function FirstPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/get-startedpage');
  };

  return (
    <div className="starting-page">
      <h1 className="eco-flow-title">ECO FLOW</h1>
      <div className="explore-button" onClick={handleClick}>
        <span>Let's Explore the World of Bottles!</span>
        <span className="arrow">→</span>
      </div>
      <img src={BottleImage} alt="Bottle" className="bottle-image" />
    </div>
  );
}
