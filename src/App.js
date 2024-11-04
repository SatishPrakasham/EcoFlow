// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './FirstPage';
import GetStartedScreen from './GetStartedScreen';
import FlaskPage from './FlaskPage';
import Flask1 from './Flask1';
import Flask2 from './Flask2';
import Flask3 from './Flask3'; // Import Flask3 component
import PaymentPage from './PaymentPage';
import ThankYouPage from './ThankYouPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/get-startedpage" element={<GetStartedScreen />} />
        <Route path="/flask" element={<FlaskPage />} />
        <Route path="/flask1" element={<Flask1 />} />
        <Route path="/flask2" element={<Flask2 />} />
        <Route path="/flask3" element={<Flask3 />} /> {/* Add route for Flask3 */}
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default App;
