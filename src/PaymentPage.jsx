import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentPage.css';

export default function PaymentPage() {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const navigate = useNavigate();

  const handleSelection = (method) => {
    setSelectedPayment(method);
  };

  const handleProceed = () => {
    if (!selectedPayment) {
      alert("Please select a payment method before proceeding.");
    } else {
      // Proceed to ThankYouPage
      navigate('/thank-you');
      console.log("Proceeding with payment method:", selectedPayment);
    }
  };

  return (
    <div className='main-container'>
      <div className='header'>
        <span className='payment-method'>Payment Method</span>
      </div>

      <div className='payment-option' onClick={() => handleSelection("Visa")}>
        <input type="radio" checked={selectedPayment === "Visa"} onChange={() => {}} />
        <span className='visa'>Visa</span>
      </div>

      <div className='payment-option' onClick={() => handleSelection("PayPal")}>
        <input type="radio" checked={selectedPayment === "PayPal"} onChange={() => {}} />
        <span className='paypal'>PayPal</span>
      </div>

      <div className='payment-option' onClick={() => handleSelection("Google Pay")}>
        <input type="radio" checked={selectedPayment === "Google Pay"} onChange={() => {}} />
        <span className='google-pay'>Google Pay</span>
      </div>

      <div className='payment-option' onClick={() => handleSelection("Wallet")}>
        <input type="radio" checked={selectedPayment === "Wallet"} onChange={() => {}} />
        <span className='wallet'>Wallet</span>
      </div>

      <div className='proceed-section'>
        <span className='total-amount'>RM 100</span>
        <button
          className='proceed-button'
          onClick={handleProceed}
          disabled={!selectedPayment} // Disable button if no payment is selected
        >
          Proceed
        </button>
      </div>
    </div>
  );
}
