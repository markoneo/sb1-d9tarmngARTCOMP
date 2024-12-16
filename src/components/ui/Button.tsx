import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded font-semibold transition-colors";
  const variants = {
    primary: "bg-yellow-500 text-gray-900 hover:bg-yellow-400",
    outline: "border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}