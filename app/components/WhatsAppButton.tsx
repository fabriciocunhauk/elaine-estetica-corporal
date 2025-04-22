import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  // Replace with your WhatsApp number (only numbers, no spaces or special characters)
  const phoneNumber = "+447387331497";
  // Your pre-filled message (URL encoded)
  const message = encodeURIComponent(
    "Olá Elaine! Gostaria de agendar uma sessão"
  );

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#128C7E] transition-all duration-300 ease-in-out hover:animate-bounce"
        aria-label="Contact on WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
