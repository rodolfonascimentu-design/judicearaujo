import { Search } from "lucide-react";
import { motion } from "framer-motion";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";

const VIDEO_SRC = "https://videos.pexels.com/video-files/5016418/5016418-uhd_2560_1440_25fps.mp4";
const POSTER_SRC = "https://images.pexels.com/videos/5016418/free-video-5016418.jpg?auto=compress&cs=tinysrgb&w=1920";

const HeroOverlayContent = () => (
  <div className="flex flex-col items-center justify-center h-full text-center gap-8 max-w-4xl mx-auto">
    <motion.p
      className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-cream/60 font-light"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.8 }}
    >
      Desde 1978 · Rio de Janeiro
    </motion.p>

    <motion.h1
      className="font-display text-3xl md:text-5xl lg:text-7xl font-normal text-cream leading-[1.05] tracking-[0.06em] uppercase"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      Viver com exclusividade no Rio de Janeiro
    </motion.h1>

    <motion.div
      className="w-16 h-px bg-cream/30"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    />

    <motion.p
      className="font-sans text-sm md:text-base text-cream/50 max-w-md font-light tracking-wide"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.8 }}
    >
      Imóveis únicos nos endereços mais prestigiados
    </motion.p>

    {/* Search bar */}
    <motion.div
      className="w-full max-w-2xl bg-cream/5 backdrop-blur-xl border border-cream/10 p-2 mt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45, duration: 0.8 }}
    >
      <div className="flex flex-col md:flex-row gap-0">
        <input
          type="text"
          placeholder="Localização"
          className="flex-1 bg-transparent border-b md:border-b-0 md:border-r border-cream/10 px-5 py-3.5 text-sm text-cream placeholder:text-cream/40 focus:outline-none font-sans font-light tracking-wide"
        />
        <select className="flex-1 bg-transparent border-b md:border-b-0 md:border-r border-cream/10 px-5 py-3.5 text-sm text-cream/40 focus:outline-none font-sans font-light appearance-none tracking-wide">
          <option>Tipo</option>
          <option>Apartamento</option>
          <option>Cobertura</option>
          <option>Casa</option>
        </select>
        <select className="flex-1 bg-transparent px-5 py-3.5 text-sm text-cream/40 focus:outline-none font-sans font-light appearance-none tracking-wide">
          <option>Faixa de Preço</option>
          <option>Até R$ 3M</option>
          <option>R$ 3M - 8M</option>
          <option>Acima de R$ 8M</option>
        </select>
        <button className="bg-primary hover:bg-gold-light text-primary-foreground px-8 py-3.5 text-xs font-sans font-medium tracking-[0.2em] uppercase transition-colors flex items-center justify-center gap-2">
          <Search className="w-3.5 h-3.5" />
          Buscar
        </button>
      </div>
    </motion.div>

    {/* CTAs */}
    <motion.div
      className="flex gap-5 mt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.55, duration: 0.8 }}
    >
      <a
        href="#imoveis"
        className="px-10 py-3.5 bg-primary hover:bg-gold-light text-primary-foreground text-[11px] font-sans font-medium tracking-[0.25em] uppercase transition-colors"
      >
        Ver Imóveis
      </a>
      <a
        href="#contato"
        className="px-10 py-3.5 border border-cream/20 hover:border-cream/50 text-cream text-[11px] font-sans font-medium tracking-[0.25em] uppercase transition-colors"
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
