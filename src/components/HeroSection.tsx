import { Search } from "lucide-react";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";

const VIDEO_SRC = "/videos/RJ.mp4";

const searchTypes = ["Venda", "Locação", "Temporada"] as const;

const HeroOverlayContent = () => {
  const [activeType, setActiveType] = useState<string>("Venda");

  return (
    <div className="flex flex-col items-center justify-center h-full text-center gap-6 max-w-xl mx-auto">
      <motion.p
        className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-cream/50 font-light"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
      >
        Desde 1978 · Rio de Janeiro
      </motion.p>

      <motion.div
        className="w-10 h-px bg-cream/20"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      />

      {/* Search component */}
      <motion.div
        className="w-full mt-2"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        {/* Segmented control */}
        <div className="flex items-center justify-center mb-0">
          {searchTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-6 py-2.5 text-xs font-sans font-medium tracking-[0.12em] uppercase transition-all duration-300 border border-cream/10 first:rounded-tl-[4px] last:rounded-tr-[4px] ${
                activeType === type
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-cream/5 text-cream/50 hover:text-cream/80 hover:bg-cream/10"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative flex items-center bg-cream/5 backdrop-blur-xl border border-cream/10 border-t-0 rounded-b-[4px]">
          <input
            type="text"
            placeholder="Busque por bairro, cidade, condomínio ou código do imóvel"
            className="w-full bg-transparent px-5 py-4 pr-14 text-sm text-cream placeholder:text-cream/30 focus:outline-none font-sans font-light tracking-wide"
          />
          <button className="absolute right-2.5 w-10 h-10 rounded-full bg-primary hover:bg-gold-light text-primary-foreground flex items-center justify-center transition-all duration-300">
            <Search className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const HeroSection = () => {
  const [heroProgress, setHeroProgress] = useState(0);

  const handleScrollProgress = useCallback((progress: number) => {
    setHeroProgress(progress);
  }, []);

  // Dispatch custom event for navbar to listen
  // Using a simpler approach: store in a data attribute on html
  if (typeof document !== 'undefined') {
    document.documentElement.dataset.heroProgress = String(heroProgress);
  }

  return (
    <ScrollExpandMedia
      mediaType="video"
      mediaSrc={VIDEO_SRC}
      overlayContent={<HeroOverlayContent />}
      onScrollProgress={handleScrollProgress}
    />
  );
};

export default HeroSection;
