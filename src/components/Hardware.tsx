import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { hardwareData } from '../data/hardware';

export default function Hardware() {
  return (
    <Section id="hardware" title="Hardware Solutions" className="bg-gray-800">
      <div className="grid md:grid-cols-3 gap-8">
        {hardwareData.map((item, index) => (
          <div key={index} className="bg-gray-900 rounded-lg overflow-hidden card-hover">
            <div className="relative">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/60"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
              <p className="text-gray-300">{item.description}</p>
              <Button className="mt-4 animate-pulse-slow">Learn More</Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}