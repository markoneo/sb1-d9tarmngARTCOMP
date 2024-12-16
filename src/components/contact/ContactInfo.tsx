import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { contactDetails } from '../../data/contact';

export function ContactInfo() {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
      <div className="space-y-4">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-center space-x-4">
            {detail.icon}
            <span className="text-gray-300">{detail.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}