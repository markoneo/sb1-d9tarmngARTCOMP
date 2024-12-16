import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SecurityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function SecurityCard({ icon: Icon, title, description }: SecurityCardProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg card-hover">
      <div className="icon-hover animate-float animate-glow">
        <Icon className="w-12 h-12 text-yellow-500 mb-4" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}