import React from 'react';
import { HeroFeatures } from './hero/HeroFeatures';
import { HeroActions } from './hero/HeroActions';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8 flex flex-col justify-center min-h-screen">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white animate-float">
            Professional Mining Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-2xl">
            Expert guidance in cryptocurrency mining operations, hardware solutions, and secure investments.
          </p>
        </div>
        <HeroFeatures />
        <HeroActions />
      </div>
    </div>
  );
}