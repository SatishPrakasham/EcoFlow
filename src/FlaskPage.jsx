// FlaskPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FlaskPage.css';
import Flask1 from './assets/Flask1.png';
import Flask2 from './assets/Flask2.png';
import Flask3 from './assets/Flask3.png';

export default function FlaskPage() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/get-startedpage'); // Navigate back to GetStartedScreen
  };

  const handleFlask1Click = () => {
    navigate('/flask1'); // Navigate to Flask1 page
  };

  const handleFlask2Click = () => {
    navigate('/flask2'); // Navigate to Flask2 page
  };

  const handleFlask3Click = () => {
    navigate('/flask3'); // Navigate to Flask3 page
  };

  return (
    <div className="flask-page">
      <div className="header">
        <span className="back-arrow" onClick={handleBackClick}>←</span>
        <h1 className="eco-flow-title">ECO FLOW</h1>
        <div className="logo"></div>
      </div>
      <span className="page-title">Choose your Favourite Flask</span>

      <div className="flask-grid">
        <div className="flask-card" onClick={handleFlask1Click}>
          <img src={Flask1} alt="Flask 1" className="flask-image" />
          <div className="flask-info">900ml Thermo Flask<br />RM 100</div>
        </div>
        <div className="flask-card" onClick={handleFlask2Click}>
          <img src={Flask2} alt="Flask 2" className="flask-image" />
          <div className="flask-info">900ml Thermo Flask<br />RM 100</div>
        </div>
        <div className="flask-card" onClick={handleFlask3Click}> {/* Flask 3 card with click handler */}
          <img src={Flask3} alt="Flask 3" className="flask-image" />
          <div className="flask-info">900ml Thermo Flask<br />RM 100</div>
        </div>
      </div>
    </div>
  );
}
