import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import WhatsAppWidget from './components/WhatsAppWidget';
import Home from './pages/Home';
import DigitalCard from './pages/digital_card';
import './App.css';

function App() {
  const location = useLocation();
  const isDigitalCardPage = location.pathname === '/digital-card';

  return (
    <div className="App">
      {!isDigitalCardPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/digital-card" element={<DigitalCard />} />
      </Routes>
      {!isDigitalCardPage && <WhatsAppWidget />}
    </div>
  );
}

export default App;
