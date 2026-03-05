import { Search } from "lucide-react";
import { motion } from "framer-motion";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";

const VIDEO_SRC = "https://videos.pexels.com/video-files/5016418/5016418-uhd_2560_1440_25fps.mp4";
const POSTER_SRC = "https://images.pexels.com/videos/5016418/free-video-5016418.jpg?auto=compress&cs=tinysrgb&w=1920";

const HeroOverlayContent = () => (
  <div className="flex flex-col items-center justify-center h-full text-center gap-7 max-w-4xl mx-auto">
    <motion.p
      className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-cream/50 font-light"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.7 }}
    >
      Desde 1978 · Rio de Janeiro
    </motion.p>

    <motion.h1
      className="font-display text-3xl md:text-5xl lg:text-6xl font-medium text-cream leading-[1.08] tracking-[-0.02em]"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.7 }}
    >
      Viver com exclusividade
      <br />
      <span className="font-light">no Rio de Janeiro</span>
    </motion.h1>

    <motion.div
      className="w-10 h-px bg-cream/20"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay: 0.3, duration: 0.7 }}
    />

    <motion.p
      className="font-sans text-sm text-cream/40 max-w-md font-light tracking-wide"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.7 }}
    >
      Imóveis únicos nos endereços mais prestigiados
    </motion.p>

    {/* Search bar */}
    <motion.div
      className="w-full max-w-2xl bg-cream/5 backdrop-blur-xl border border-cream/8 rounded-[4px] p-1.5 mt-4"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45, duration: 0.7 }}
    >
      <div className="flex flex-col md:flex-row gap-0">
        <input
          type="text"
          placeholder="Localização"
          className="flex-1 bg-transparent border-b md:border-b-0 md:border-r border-cream/8 px-5 py-3.5 text-sm text-cream placeholder:text-cream/30 focus:outline-none font-sans font-light tracking-wide"
        />
        <select className="flex-1 bg-transparent border-b md:border-b-0 md:border-r border-cream/8 px-5 py-3.5 text-sm text-cream/30 focus:outline-none font-sans font-light appearance-none tracking-wide">
          <option>Tipo</option>
          <option>Apartamento</option>
          <option>Cobertura</option>
          <option>Casa</option>
        </select>
        <select className="flex-1 bg-transparent px-5 py-3.5 text-sm text-cream/30 focus:outline-none font-sans font-light appearance-none tracking-wide">
          <option>Faixa de Preço</option>
          <option>Até R$ 3M</option>
          <option>R$ 3M - 8M</option>
          <option>Acima de R$ 8M</option>
        </select>
        <button className="bg-primary hover:bg-gold-light text-primary-foreground px-8 py-3.5 text-xs font-sans font-medium tracking-[0.15em] uppercase transition-all duration-300 flex items-center justify-center gap-2 rounded-[3px]">
          <Search className="w-3.5 h-3.5" />
          Buscar
        </button>
      </div>
    </motion.div>

    {/* CTAs */}
    <motion.div
      className="flex gap-4 mt-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.55, duration: 0.7 }}
    >
      <a
        href="#imoveis"
        className="px-10 py-3.5 bg-primary hover:bg-gold-light text-primary-foreground text-[11px] font-sans font-medium tracking-[0.2em] uppercase transition-all duration-300 rounded-[4px]"
      >
        Ver Imóveis
      </a>
      <a
        href="#contato"
        className="px-10 py-3.5 border border-cream/15 hover:border-cream/40 text-cream text-[11px] font-sans font-medium tracking-[0.2em] uppercase transition-all duration-300 rounded-[4px]"
      >
        Consultoria
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
