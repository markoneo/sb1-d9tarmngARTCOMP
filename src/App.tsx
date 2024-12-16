import React from 'react';
import Navbar from './components/Navbar';
import CryptoMarketStatus from './components/CryptoMarketStatus';
import Hero from './components/Hero';
import Services from './components/Services';
import Hardware from './components/Hardware';
import Security from './components/Security';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-900 text-white relative min-h-screen">
      <div className="blockchain-bg"></div>
      <div className="blockchain-overlay"></div>
      <div className="relative z-10">
        <CryptoMarketStatus />
        <Navbar />
        <Hero />
        <Services />
        <Hardware />
        <Security />
        <Contact />
      </div>
    </div>
  );
}

export default App;