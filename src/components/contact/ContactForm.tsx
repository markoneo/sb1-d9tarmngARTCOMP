import React from 'react';
import { Button } from '../ui/Button';
import { ContactFormInput } from './ContactFormInput';
import { ContactFormTextarea } from './ContactFormTextarea';

export function ContactForm() {
  return (
    <form 
      name="contact" 
      method="POST" 
      data-netlify="true"
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="contact" />
      
      <ContactFormInput
        id="name"
        name="name"
        label="Name"
        required
      />
      
      <ContactFormInput
        id="email"
        name="email"
        label="Email"
        type="email"
        required
      />
      
      <ContactFormTextarea
        id="message"
        name="message"
        label="Message"
        required
      />
      
      <Button 
        type="submit" 
        className="w-full"
      >
        Send Message
      </Button>
    </form>
  );
}