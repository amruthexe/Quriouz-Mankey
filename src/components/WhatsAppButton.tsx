import Link from 'next/link';
import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '+917207251404'; // Your WhatsApp number
  const message = 'I want to book a call'; // Your custom message
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button" // Add the CSS class here
    >
      <img
        src="/wa.png" // Make sure the logo is in the `public/images` folder
        alt="WhatsApp"
      />
    </Link>
  );
};

export default WhatsAppButton;
