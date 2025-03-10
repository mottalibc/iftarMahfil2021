"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "+8801829706393"; // Replace with your WhatsApp number

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("ইফতার মাহফিলের বিষয়ে কথা বলার ছিলো");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center gap-2"
    >
      <MessageCircle size={24} />
    </button>
  );
}
