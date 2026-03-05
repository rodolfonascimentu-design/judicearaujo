import { Search } from "lucide-react";
import { motion } from "framer-motion";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";

const VIDEO_SRC = "/videos/RJ.mp4";

const HeroOverlayContent = () => (
  <div className="flex flex-col items-center justify-center h-full text-center gap-6 max-w-4xl mx-auto">
    <motion.p
      className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-cream/50 font-light"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.7 }}
    >
      Desde 1978 · Rio de Janeiro
    </motion.p>

    <motion.h1
      className="font-display text-xl md:text-3xl lg:text-[38px] font-light text-cream leading-[1.12] tracking-[-0.02em]"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.7 }}
    >
      Viver com exclusividade
      <br />
      no Rio de Janeiro
    </motion.h1>

    <motion.div
      className="w-10 h-px bg-cream/20"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay: 0.3, duration: 0.7 }}
    />

    {/* Search bar - simplified */}
    <motion.div
      className="w-full max-w-2xl bg-cream/5 backdrop-blur-xl border border-cream/8 rounded-[4px] p-1.5 mt-2"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.7 }}
    >
      <div className="flex flex-col md:flex-row gap-0">
        <input
          type="text"
          placeholder="Busque por bairro, cidade, condomínio ou código do imóvel"
          className="flex-[2] bg-transparent border-b md:border-b-0 md:border-r border-cream/8 px-5 py-3.5 text-sm text-cream placeholder:text-cream/30 focus:outline-none font-sans font-light tracking-wide"
        />
        <select className="flex-1 bg-transparent border-b md:border-b-0 md:border-r border-cream/8 px-5 py-3.5 text-sm text-cream/40 focus:outline-none font-sans font-light appearance-none tracking-wide">
          <option>Venda</option>
          <option>Locação</option>
          <option>Temporada</option>
        </select>
        <button className="bg-primary hover:bg-gold-light text-primary-foreground px-8 py-3.5 text-xs font-sans font-medium tracking-[0.15em] uppercase transition-all duration-300 flex items-center justify-center gap-2 rounded-[3px]">
          <Search className="w-3.5 h-3.5" />
          Buscar
        </button>
      </div>
    </motion.div>
  </div>
);

const HeroSection = () => {
  return (
    <ScrollExpandMedia
      mediaType="video"
      mediaSrc={VIDEO_SRC}
      title="Viver com exclusividade no Rio"
      overlayContent={<HeroOverlayContent />}
    />
  );
};

export default HeroSection;
