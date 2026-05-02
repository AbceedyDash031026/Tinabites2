import { Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { CONTACT_INFO } from '../constants';

const WhatsAppButton = () => {
  return (
    <motion.a
      href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\+/g, '')}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      id="whatsapp-cta"
    >
      <Phone size={24} fill="currentColor" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-semibold tracking-wider text-xs whitespace-nowrap uppercase">
        Order via WhatsApp
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
