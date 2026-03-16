import { Search, Mouse } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ScrollExpandMedia, { hasHeroAnimationBeenSeen } from "@/components/ui/scroll-expansion-hero";
import forbesLogoWhite from "@/assets/forbes-global-white.png";
import jaLogoWhite from "@/assets/logo-ja-white.png";
import { useLanguage } from "@/i18n/LanguageContext";
import SearchAutocomplete from "@/components/SearchAutocomplete";

const VIDEO_SRC = "/videos/fundo_ja.mp4";

/* ══════════════════════════════════════════════════════════
   Search bar overlay – appears after full hero expansion
   ══════════════════════════════════════════════════════════ */
const HeroOverlayContent = () => {
  const [activeType, setActiveType] = useState<string>("hero.sale");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { t } = useLanguage();

  const typeMap: Record<string, string> = {
    "hero.sale": "venda",
    "hero.rental": "locacao",
    "hero.seasonal": "temporada",
  };

  const handleSearch = () => {
    const q = searchQuery.trim() || "Barra da Tijuca";
    navigate(`/imoveis?q=${encodeURIComponent(q)}&type=${typeMap[activeType] || "venda"}`);
  };

  const searchTypes = [
    { key: "hero.sale", label: t("hero.sale") },
    { key: "hero.rental", label: t("hero.rental") },
    { key: "hero.seasonal", label: t("hero.seasonal") },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full text-center w-full max-w-[700px] mx-auto px-4">
      {/* Headline */}
      <motion.h1
        className="font-display text-xl md:text-[34px] lg:text-[40px] leading-[1.2] text-white font-light tracking-tight whitespace-nowrap mb-6"
        style={{ textShadow: "0 2px 24px rgba(0,0,0,0.35)" }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
      >
        {t("hero.headline")}
      </motion.h1>

      {/* Tabs */}
      <motion.div
        className="flex items-center gap-1 mb-4 rounded-xl px-1.5 py-1.5"
        style={{
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 4px 20px -4px rgba(0,0,0,0.15)",
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.5 }}
      >
        {searchTypes.map((type, i) => {
          const isActive = activeType === type.key;
          return (
            <motion.button
              key={type.key}
              onClick={() => setActiveType(type.key)}
              className="relative px-5 py-2 rounded-lg text-[11px] font-sans font-semibold tracking-[0.15em] uppercase"
              animate={{
                color: isActive ? "#ffffff" : "rgba(255,255,255,0.6)",
                backgroundColor: isActive ? "hsl(var(--primary))" : "rgba(255,255,255,0)",
                boxShadow: isActive ? "0 2px 10px -2px hsl(var(--primary) / 0.5)" : "0 0 0 0 transparent",
              }}
              whileHover={!isActive ? { backgroundColor: "rgba(255,255,255,0.12)" } : {}}
              transition={{ duration: 0.2 }}
            >
              <span className="relative z-10">{type.label}</span>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Search container */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
      >
        <div
          className="w-full rounded-2xl"
          style={{
            background: "rgba(255, 255, 255, 0.92)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.5)",
            boxShadow: "0 20px 50px -15px rgba(0,0,0,0.25)",
          }}
        >
          {/* Desktop layout */}
          <div className="hidden md:flex items-center px-5 py-4 gap-4">
            <div className="flex-1 text-left">
              <p className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase mb-1.5"
                style={{ color: "hsl(var(--charcoal) / 0.45)" }}>
                {t("hero.searchLabel")}
              </p>
              <SearchAutocomplete
                value={searchQuery}
                onChange={setSearchQuery}
                onSelect={(v) => { setSearchQuery(v); }}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder={t("hero.searchPlaceholder")}
                className="w-full"
                inputClassName="w-full bg-transparent text-[15px] font-sans font-light tracking-wide focus:outline-none placeholder:text-charcoal/25"
              />
            </div>
            <motion.button
              className="group flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-primary"
              onClick={handleSearch}
              style={{
                boxShadow: "0 4px 14px -2px hsl(var(--primary) / 0.4)",
              }}
              whileHover={{
                scale: 1.1,
                rotate: 8,
                boxShadow: "0 6px 20px -2px hsl(var(--gold) / 0.6)",
                backgroundColor: "hsl(var(--gold))",
              }}
              whileTap={{ scale: 0.93, rotate: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
            >
              <Search className="w-[18px] h-[18px] text-white transition-transform duration-300 group-hover:scale-110" />
            </motion.button>
          </div>

          {/* Mobile layout */}
          <div className="md:hidden flex items-center px-4 py-3.5 gap-3">
            <div className="flex-1 text-left min-w-0">
              <p className="text-[9px] font-sans font-medium tracking-[0.2em] uppercase mb-1"
                style={{ color: "hsl(var(--charcoal) / 0.45)" }}>
                {t("hero.searchLabel")}
              </p>
              <SearchAutocomplete
                value={searchQuery}
                onChange={setSearchQuery}
                onSelect={(v) => { setSearchQuery(v); }}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder={t("hero.searchPlaceholderMobile")}
                className="w-full"
                inputClassName="w-full bg-transparent text-[15px] font-sans font-light tracking-wide focus:outline-none placeholder:text-charcoal/25"
              />
            </div>
            <motion.button
              className="group flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-primary"
              onClick={handleSearch}
              style={{
                boxShadow: "0 4px 14px -2px hsl(var(--primary) / 0.4)",
              }}
              whileHover={{
                scale: 1.1,
                rotate: 8,
                boxShadow: "0 6px 20px -2px hsl(var(--gold) / 0.6)",
                backgroundColor: "hsl(var(--gold))",
              }}
              whileTap={{ scale: 0.93, rotate: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
            >
              <Search className="w-[18px] h-[18px] text-white transition-transform duration-300 group-hover:scale-110" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Scroll down indicator - minimal mouse icon with animated scroll wheel */}
      <motion.div
        className="absolute bottom-10 md:bottom-14 left-1/2 -translate-x-1/2 z-30 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        whileHover={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={() => window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'smooth' })}
      >
        {/* Mouse outline */}
        <div className="relative w-[26px] h-[42px] rounded-full border-2 border-white/60">
          {/* Animated scroll wheel */}
          <motion.div
            className="absolute left-0 right-0 mx-auto top-[8px] w-[3px] h-[8px] rounded-full bg-white/80"
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

/* ══════════════════════════════════════════════════════════
   Main hero section
   ══════════════════════════════════════════════════════════ */
const HeroSection = () => {
  const [heroProgress, setHeroProgress] = useState(0);
  const shouldSkip = hasHeroAnimationBeenSeen();

  const handleScrollProgress = useCallback((progress: number) => {
    setHeroProgress(progress);
  }, []);

  if (typeof document !== "undefined") {
    document.documentElement.dataset.heroProgress = String(heroProgress);
  }

  return (
    <div className="relative">
      <HeroLogos skipAnimation={shouldSkip} />
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc={VIDEO_SRC}
        overlayContent={<HeroOverlayContent />}
        onScrollProgress={handleScrollProgress}
        skipAnimation={shouldSkip}
      />
    </div>
  );
};

/* ══════════════════════════════════════════════════════════
   Auto-timed logo animation – fades out automatically
   ══════════════════════════════════════════════════════════ */
const HeroLogos = ({ skipAnimation = false }: { skipAnimation?: boolean }) => {
  const [barVisible, setBarVisible] = useState(false);
  const [logosVisible, setLogosVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (skipAnimation) return;
    const t1 = setTimeout(() => setBarVisible(true), 1000);
    const t2 = setTimeout(() => setLogosVisible(true), 1800);
    // Start fading out logos ~1s before the hero expands (at 4.8s)
    const t3 = setTimeout(() => setFadeOut(true), 3800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [skipAnimation]);

  if (skipAnimation) return null;

  return (
    <AnimatePresence>
      {!fadeOut && (
        <motion.div
          className="fixed left-1/2 top-[42vh] z-[45] flex items-center justify-center pointer-events-none w-max"
          style={{ transform: 'translateX(-50%)' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.img
            src={jaLogoWhite}
            alt="Judice & Araujo"
            className="h-[30px] lg:h-[34px] w-auto"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: logosVisible ? 1 : 0, x: logosVisible ? 0 : 40 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          />
          <motion.div
            className="mx-4 bg-cream/60"
            style={{ width: "1.5px", height: "34px" }}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: barVisible ? 1 : 0, scaleY: barVisible ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <motion.img
            src={forbesLogoWhite}
            alt="Forbes Global Properties"
            className="h-[30px] lg:h-[35px] w-auto"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: logosVisible ? 1 : 0, x: logosVisible ? 0 : -40 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HeroSection;