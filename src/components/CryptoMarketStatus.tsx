import React from 'react';
import { MarketTicker } from './market/MarketTicker';

export default function CryptoMarketStatus() {
  return (
    <div className="bg-gray-800/80 backdrop-blur-sm py-2 border-b border-gray-700 fixed w-full top-0 z-50 overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll">
          <MarketTicker />
          <MarketTicker /> {/* Duplicate for seamless scrolling */}
        </div>
      </div>
    </div>
  );
}