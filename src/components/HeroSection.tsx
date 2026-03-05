import { Search } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import forbesLogoWhite from "@/assets/forbes-global-white.png";
import jaLogoFull from "@/assets/logo-ja-full.png";

const VIDEO_SRC = "/videos/RJ.mp4";

const searchTypes = ["Venda", "Locação", "Temporada"] as const;

const HeroOverlayContent = () => {
  const [activeType, setActiveType] = useState<string>("Venda");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-full text-center gap-6 w-full max-w-[880px] mx-auto px-4">
      {/* Headline */}
      <motion.h1
        className="font-display text-3xl md:text-[44px] lg:text-[52px] leading-[1.15] text-cream font-light tracking-tight"
        style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.8 }}
      >
        Os melhores imóveis de alto padrão estão aqui
      </motion.h1>

      <motion.div
        className="w-12 h-px bg-cream/20"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.25, duration: 0.7 }}
      />

      {/* Search bar */}
      <motion.div
        className="w-full mt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
      >
        <div
          className="w-full rounded-[14px] overflow-hidden transition-shadow duration-500"
          style={{
            background: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: isFocused
              ? '1px solid hsla(171, 100%, 12%, 0.25)'
              : '1px solid rgba(255, 255, 255, 0.25)',
            boxShadow: isFocused
              ? '0 25px 60px -12px rgba(0, 0, 0, 0.35), 0 0 0 1px hsla(171, 100%, 12%, 0.1)'
              : '0 20px 50px -12px rgba(0, 0, 0, 0.25)',
            transition: 'border 0.3s ease, box-shadow 0.5s ease',
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
                <motion.div
                  className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full"
                  style={{ backgroundColor: 'hsl(171, 100%, 12%)' }}
                  initial={false}
                  animate={{ opacity: activeType === type ? 1 : 0, scaleX: activeType === type ? 1 : 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                />
                <span className="absolute inset-1 rounded-lg bg-charcoal/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10" />
              </button>
            ))}
          </div>

          {/* Search input row */}
          <div className="relative flex items-center px-3 py-2">
            <Search className="ml-4 w-5 h-5 flex-shrink-0" style={{ color: 'rgba(0, 0, 0, 0.25)' }} />
            <input
              type="text"
              placeholder="Busque por bairro, cidade, condomínio ou código"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="w-full bg-transparent px-4 py-5 text-[15px] md:text-base font-sans font-light tracking-wide focus:outline-none placeholder:text-charcoal/30"
              style={{ color: 'hsl(0, 0%, 7%)' }}
            />
            <motion.button
              className="flex-shrink-0 mr-2 w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                background: 'hsl(171, 100%, 12%)',
                boxShadow: '0 4px 14px -2px rgba(0, 63, 54, 0.4)',
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 6px 20px -2px rgba(0, 63, 54, 0.55)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
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

  if (typeof document !== 'undefined') {
    document.documentElement.dataset.heroProgress = String(heroProgress);
  }

  return (
    <div className="relative">
      {/* Floating co-branding logos - visible during hero, animate to header on scroll */}
      <HeroLogos heroProgress={heroProgress} />

      <ScrollExpandMedia
        mediaType="video"
        mediaSrc={VIDEO_SRC}
        overlayContent={<HeroOverlayContent />}
        onScrollProgress={handleScrollProgress}
      />
    </div>
  );
};

/** Logos that start centered top, then animate to header left position */
const HeroLogos = ({ heroProgress }: { heroProgress: number }) => {
  const [pastHero, setPastHero] = useState(false);

  // Track when we've scrolled past the hero
  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight - 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // When pastHero, logos are in the Navbar; hide these floating ones
  // During hero scroll (0→1), logos stay centered top
  const isVisible = !pastHero;

  return (
    <motion.div
      className="fixed top-6 z-[45] flex items-center gap-2 pointer-events-none"
      animate={{
        left: '50%',
        x: '-50%',
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <img
        src={jaLogoFull}
        alt="Judice & Araujo"
        className="h-[18px] lg:h-[22px] w-auto brightness-0 invert"
      />
      <div className="w-px h-8 bg-cream/40" />
      <img
        src={forbesLogoWhite}
        alt="Forbes Global Properties"
        className="h-[30px] lg:h-[35px] w-auto"
      />
    </motion.div>
  );
};

export default HeroSection;
