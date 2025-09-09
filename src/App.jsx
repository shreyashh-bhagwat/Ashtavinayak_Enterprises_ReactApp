import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
