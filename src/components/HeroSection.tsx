import { Search } from "lucide-react";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";

const VIDEO_SRC = "/videos/RJ.mp4";

const searchTypes = ["Venda", "Locação", "Temporada"] as const;

const HeroOverlayContent = () => {
  const [activeType, setActiveType] = useState<string>("Venda");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-full text-center gap-8 w-full max-w-[1050px] mx-auto px-4">
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

      {/* Premium search component */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        <div
          className="w-full rounded-[14px] overflow-hidden transition-shadow duration-500"
          style={{
            background: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            boxShadow: isFocused
              ? '0 25px 60px -12px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(0, 63, 54, 0.15)'
              : '0 20px 50px -12px rgba(0, 0, 0, 0.25)',
          }}
        >
          {/* Segmented tabs */}
          <div className="flex items-center border-b border-charcoal/[0.06] px-2 pt-2">
            {searchTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className="relative px-7 py-3.5 text-[11px] font-sans font-semibold tracking-[0.15em] uppercase transition-all duration-300 group"
                style={{ color: activeType === type ? 'hsl(171, 100%, 12%)' : 'rgba(0, 0, 0, 0.35)' }}
              >
                {type}
                {/* Active indicator */}
                <motion.div
                  className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full"
                  style={{ backgroundColor: 'hsl(171, 100%, 12%)' }}
                  initial={false}
                  animate={{ opacity: activeType === type ? 1 : 0, scaleX: activeType === type ? 1 : 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                />
                {/* Hover bg */}
                <span className="absolute inset-1 rounded-lg bg-charcoal/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10" />
              </button>
            ))}
          </div>

          {/* Search input row */}
          <div className="relative flex items-center px-3 py-1.5">
            <Search className="ml-4 w-5 h-5 flex-shrink-0" style={{ color: 'rgba(0, 0, 0, 0.25)' }} />
            <input
              type="text"
              placeholder="Busque por bairro, cidade, condomínio ou código do imóvel"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="w-full bg-transparent px-4 py-5 text-[15px] md:text-base font-sans font-light tracking-wide focus:outline-none"
              style={{ color: 'hsl(0, 0%, 7%)', }}
            />
            <motion.button
              className="flex-shrink-0 mr-2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                background: 'hsl(171, 100%, 12%)',
                boxShadow: '0 4px 14px -2px rgba(0, 63, 54, 0.4)',
              }}
              whileHover={{ scale: 1.06, boxShadow: '0 6px 20px -2px rgba(0, 63, 54, 0.55)' }}
              whileTap={{ scale: 0.97 }}
            >
              <Search className="w-[18px] h-[18px]" style={{ color: 'hsl(46, 100%, 94%)' }} />
            </motion.button>
          </div>
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
