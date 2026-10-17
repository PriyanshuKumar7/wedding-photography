/* Feature: Floating WhatsApp Icon */
import { MessageCircle } from 'lucide-react';

const WhatsAppBtn = () => (
  <a
    href="https://wa.me/918521224111"
    target="_blank"
    rel="noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-lux-gold text-lux-black p-3 sm:p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
  >
    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" size={undefined} />
  </a>
);
export default WhatsAppBtn;