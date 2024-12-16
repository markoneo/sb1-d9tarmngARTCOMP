import React from 'react';

interface ContactFormInputProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}

export function ContactFormInput({
  id,
  name,
  label,
  type = 'text',
  required = false
}: ContactFormInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-white mb-2">{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-yellow-500 focus:outline-none"
      />
    </div>
  );
}