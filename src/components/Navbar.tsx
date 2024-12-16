import React from 'react';
import { navigation } from '../data/navigation';
import { CircuitBoard } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 fixed w-full z-50 mt-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="logo-container">
            <div className="text-yellow-500 animate-float animate-glow">
              <CircuitBoard className="w-8 h-8 animate-circuit" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold">ArtComp</span>
            <span className="text-sm text-gray-400">Mining Solutions</span>
          </div>
        </div>
        <div className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-yellow-500 transition-colors hover:scale-110 transform duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}