import { Search } from "lucide-react";
import { motion } from "framer-motion";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";

const VIDEO_SRC = "https://videos.pexels.com/video-files/8435624/8435624-uhd_2560_1440_30fps.mp4";
const POSTER_SRC = "https://images.pexels.com/videos/8435624/pexels-photo-8435624.jpeg?auto=compress&cs=tinysrgb&w=1920";

const HeroOverlayContent = () => (
  <div className="flex flex-col items-center justify-center h-full text-center gap-6 max-w-4xl mx-auto">
    <motion.p
      className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-gold-light"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.6 }}
    >
      Desde 1978 · Rio de Janeiro
    </motion.p>

    <motion.h1
      className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-cream leading-[1.1] tracking-[0.02em] italic"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      Viver com exclusividade no Rio de Janeiro
    </motion.h1>

    <motion.p
      className="font-sans text-sm md:text-base text-cream/60 max-w-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      Imóveis únicos nos endereços mais prestigiados
    </motion.p>

    {/* Search bar */}
    <motion.div
      className="w-full max-w-3xl bg-cream/10 backdrop-blur-md border border-cream/20 rounded-sm p-2 mt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      <div className="flex flex-col md:flex-row gap-2">
        <input
          type="text"
          placeholder="Localização"
          className="flex-1 bg-transparent border-b md:border-b-0 md:border-r border-cream/20 px-4 py-3 text-sm text-cream placeholder:text-cream/50 focus:outline-none font-sans"
        />
        <select className="flex-1 bg-transparent border-b md:border-b-0 md:border-r border-cream/20 px-4 py-3 text-sm text-cream/50 focus:outline-none font-sans appearance-none">
          <option>Tipo</option>
          <option>Apartamento</option>
          <option>Cobertura</option>
          <option>Casa</option>
        </select>
        <select className="flex-1 bg-transparent px-4 py-3 text-sm text-cream/50 focus:outline-none font-sans appearance-none">
          <option>Faixa de Preço</option>
          <option>Até R$ 3M</option>
          <option>R$ 3M - 8M</option>
          <option>Acima de R$ 8M</option>
        </select>
        <button className="bg-gold hover:bg-gold-light text-cream px-6 py-3 text-sm font-sans font-medium tracking-wider uppercase transition-colors flex items-center justify-center gap-2">
          <Search className="w-4 h-4" />
          Buscar
        </button>
      </div>
    </motion.div>

    {/* CTAs */}
    <motion.div
      className="flex gap-4 mt-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      <a
        href="#imoveis"
        className="px-8 py-3 bg-gold hover:bg-gold-light text-cream text-sm font-sans font-medium tracking-wider uppercase transition-colors"
      >
        Ver Imóveis
      </a>
      <a
        href="#contato"
        className="px-8 py-3 border border-cream/40 hover:border-gold text-cream hover:text-gold text-sm font-sans font-medium tracking-wider uppercase transition-colors"
      >
        Agendar Consultoria
      </a>
    </motion.div>
  </div>
);

const HeroSection = () => {
  return (
    <ScrollExpandMedia
      mediaType="video"
      mediaSrc={VIDEO_SRC}
      posterSrc={POSTER_SRC}
      title="Viver com exclusividade no Rio"
      scrollToExpand="↓ Role para explorar"
      overlayContent={<HeroOverlayContent />}
    />
  );
};

export default HeroSection;
