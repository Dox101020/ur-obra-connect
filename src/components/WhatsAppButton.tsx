import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5563992940044"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-20 md:bottom-8 right-4 z-50 w-14 h-14 rounded-full gradient-gold flex items-center justify-center shadow-gold animate-pulse-gold hover:opacity-90 transition-opacity"
    aria-label="Contato via WhatsApp"
  >
    <MessageCircle size={26} className="text-navy-deeper" />
  </a>
);

export default WhatsAppButton;
