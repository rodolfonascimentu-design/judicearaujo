import { Search } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import forbesLogoWhite from "@/assets/forbes-global-white.png";
import jaLogoFull from "@/assets/logo-ja-full.png";

const VIDEO_SRC = "/videos/RJ.mp4";

const searchTypes = ["Venda", "Locação", "Temporada"] as const;

/* ── helper ── */
const clamp = (v: number) => Math.min(1, Math.max(0, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/* ══════════════════════════════════════════════════════════
   Search bar overlay – appears after full hero expansion
   ══════════════════════════════════════════════════════════ */
const HeroOverlayContent = () => {
  const [activeType, setActiveType] = useState<string>("Venda");

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
        Para quem escolhe viver diferente
      </motion.h1>

      {/* Tabs - floating above container */}
      <motion.div
        className="flex items-center gap-1 mb-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.5 }}
      >
        {searchTypes.map((type, i) => (
          <motion.button
            key={type}
            onClick={() => setActiveType(type)}
            className="relative px-5 py-2 text-[11px] font-sans font-semibold tracking-[0.15em] uppercase transition-colors duration-300"
            style={{
              color:
                activeType === type
                  ? "hsl(var(--gold))"
                  : "rgba(255,255,255,0.5)",
            }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
          >
            {activeType === type && (
              <motion.div
                layoutId="searchTabPill"
                className="absolute bottom-0 left-0 right-0 mx-auto h-[2px] w-8 rounded-full"
                style={{ background: "hsl(var(--gold))" }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{type}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Search container - dark green translucent */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
      >
        <div
          className="w-full rounded-2xl overflow-hidden"
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
                Buscar imóvel
              </p>
              <input
                type="text"
                placeholder="Bairro, cidade, condomínio ou código"
                className="w-full bg-transparent text-[15px] font-sans font-light tracking-wide focus:outline-none placeholder:text-charcoal/25"
                style={{ color: "hsl(var(--charcoal))" }}
              />
            </div>
            <motion.button
              className="group flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-primary"
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
          <div className="md:hidden px-4 py-4 space-y-3">
            <div className="text-left">
              <p className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase mb-1.5"
                style={{ color: "hsl(var(--charcoal) / 0.45)" }}>
                Buscar imóvel
              </p>
              <input
                type="text"
                placeholder="Bairro, cidade ou código"
                className="w-full bg-transparent text-[15px] font-sans font-light tracking-wide focus:outline-none placeholder:text-charcoal/25"
                style={{ color: "hsl(var(--charcoal))" }}
              />
            </div>
            <motion.button
              className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-[12px] font-sans font-semibold tracking-[0.18em] uppercase text-primary-foreground bg-primary"
              style={{
                boxShadow: "0 4px 14px -2px hsl(var(--primary) / 0.4)",
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
            >
              <Search className="w-4 h-4" style={{ color: "hsl(var(--gold))" }} />
              Buscar
            </motion.button>
          </div>
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

  const handleScrollProgress = useCallback((progress: number) => {
    setHeroProgress(progress);
  }, []);

  if (typeof document !== "undefined") {
    document.documentElement.dataset.heroProgress = String(heroProgress);
  }

  return (
    <div className="relative">
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

/* ══════════════════════════════════════════════════════════
   Scroll-driven logo animation
   - Logos appear on page load with fade-in, centered, 30% larger
   - On scroll: shrink to normal size + move from center to top
   - Visible until header takes over
   ══════════════════════════════════════════════════════════ */
const HeroLogos = ({ heroProgress }: { heroProgress: number }) => {
  const [pastHero, setPastHero] = useState(false);
  const [barVisible, setBarVisible] = useState(false);
  const [logosVisible, setLogosVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setBarVisible(true), 1000);
    const t2 = setTimeout(() => setLogosVisible(true), 1800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight - 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const p = heroProgress;

  // Scale: starts at 1.3, shrinks to 1.0 as scroll progresses (0 → 0.6)
  const scaleT = clamp(p / 0.6);
  const scale = lerp(1.3, 1.0, scaleT);

  // Position: starts aligned with scroll indicator (~42vh), moves to top (2.5vh)
  const moveT = clamp(p / 0.8);
  const topVh = lerp(42, 2.5, moveT);

  // Smooth fade-out in last 15% of scroll progress
  const fadeOutOpacity = p > 0.85 ? lerp(1, 0, clamp((p - 0.85) / 0.15)) : 1;
  const isVisible = barVisible && !pastHero && heroProgress < 0.98;
  const finalOpacity = isVisible ? fadeOutOpacity : 0;

  return (
    <div
      className="fixed left-1/2 z-[45] flex items-center justify-center pointer-events-none w-max"
      style={{
        transform: `translateX(-50%) scale(${scale})`,
        top: `${topVh}vh`,
        opacity: finalOpacity,
        transition: "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* J&A logo - slides left from bar */}
      <motion.img
        src={jaLogoFull}
        alt="Judice & Araujo"
        className="h-[18px] lg:h-[22px] w-auto brightness-0 invert"
        initial={{ opacity: 0, x: 40 }}
        animate={{
          opacity: logosVisible ? 1 : 0,
          x: logosVisible ? 0 : 40,
        }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />

      {/* Central bar - appears first */}
      <motion.div
        className="mx-4 bg-cream/60"
        style={{ width: "1.5px", height: "80px" }}
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{
          opacity: barVisible ? 1 : 0,
          scaleY: barVisible ? 1 : 0,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Forbes logo - slides right from bar */}
      <motion.img
        src={forbesLogoWhite}
        alt="Forbes Global Properties"
        className="h-[30px] lg:h-[35px] w-auto"
        initial={{ opacity: 0, x: -40 }}
        animate={{
          opacity: logosVisible ? 1 : 0,
          x: logosVisible ? 0 : -40,
        }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />
    </div>
  );
};

export default HeroSection;
