import React from 'react';
import { Button } from '../ui/Button';

export function HeroActions() {
  return (
    <div className="flex gap-4">
      <Button>Get Started</Button>
      <Button variant="outline">Learn More</Button>
    </div>
  );
}