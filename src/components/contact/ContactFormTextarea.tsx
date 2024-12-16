import React from 'react';

interface ContactFormTextareaProps {
  id: string;
  name: string;
  label: string;
  required?: boolean;
}

export function ContactFormTextarea({
  id,
  name,
  label,
  required = false
}: ContactFormTextareaProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-white mb-2">{label}</label>
      <textarea
        id={id}
        name={name}
        rows={4}
        required={required}
        className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-yellow-500 focus:outline-none"
      />
    </div>
  );
}