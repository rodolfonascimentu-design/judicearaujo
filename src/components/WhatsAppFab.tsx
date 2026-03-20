import { motion } from "framer-motion";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const WHATSAPP_NUMBER = "5521995020861";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const WhatsAppFab = () => {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8 w-12 h-12 md:w-[60px] md:h-[60px] rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.35)] transition-shadow duration-300 cursor-pointer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="w-full h-full rounded-full"
      />

      {/* Pulse ring animation */}
      <motion.span
        className="absolute inset-0 rounded-full border-2 border-[hsl(160,30%,25%)]"
        initial={{ scale: 1, opacity: 0.6 }}
        animate={{ scale: 1.5, opacity: 0 }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeOut",
        }}
      />
    </motion.a>
  );
};

export default WhatsAppFab;
