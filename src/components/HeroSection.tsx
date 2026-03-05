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
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-full text-center gap-5 w-full max-w-[780px] mx-auto px-4">
      {/* Headline */}
      <motion.h1
        className="font-display text-2xl md:text-[34px] lg:text-[40px] leading-[1.2] text-cream font-light tracking-tight"
        style={{ textShadow: "0 2px 24px rgba(0,0,0,0.35)" }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
      >
        Imóveis extraordinários nos endereços mais desejados do Rio
      </motion.h1>

      <motion.div
        className="w-10 h-px bg-cream/15"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      />

      {/* Search bar */}
      <motion.div
        className="w-full mt-1"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
      >
        <div
          className="w-full rounded-2xl overflow-hidden transition-shadow duration-500"
          style={{
            background: "rgba(255, 255, 255, 0.75)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: isFocused
              ? "1px solid hsl(var(--primary) / 0.3)"
              : "1px solid rgba(255, 255, 255, 0.4)",
            boxShadow: isFocused
              ? "0 25px 60px -12px rgba(0,0,0,0.3), 0 0 0 1px hsl(var(--primary) / 0.08)"
              : "0 20px 50px -15px rgba(0,0,0,0.2)",
            transition: "border 0.3s ease, box-shadow 0.5s ease",
          }}
        >
          {/* Segmented tabs */}
          <div className="flex items-center border-b border-charcoal/[0.06] px-2 pt-2">
            {searchTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className="relative px-7 py-3.5 text-[11px] font-sans font-semibold tracking-[0.15em] uppercase transition-all duration-300 group"
                style={{
                  color:
                    activeType === type
                      ? "hsl(var(--primary))"
                      : "rgba(0,0,0,0.32)",
                }}
              >
                {type}
                <motion.div
                  className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-primary"
                  initial={false}
                  animate={{
                    opacity: activeType === type ? 1 : 0,
                    scaleX: activeType === type ? 1 : 0,
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                />
                <span className="absolute inset-1 rounded-lg bg-charcoal/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10" />
              </button>
            ))}
          </div>

          {/* Search input row */}
          <div className="relative flex items-center px-4 py-2.5">
            <Search
              className="ml-3 w-5 h-5 flex-shrink-0"
              style={{ color: "rgba(0,0,0,0.22)" }}
            />
            <input
              type="text"
              placeholder="Busque por bairro, cidade, condomínio ou código"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="w-full bg-transparent px-4 py-5 text-[15px] md:text-base font-sans font-light tracking-wide focus:outline-none placeholder:text-charcoal/25"
              style={{ color: "hsl(var(--charcoal))" }}
            />
            <motion.button
              className="flex-shrink-0 mr-1.5 w-12 h-12 rounded-full flex items-center justify-center bg-primary"
              style={{
                boxShadow: "0 4px 14px -2px hsl(var(--primary) / 0.4)",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 6px 20px -2px hsl(var(--primary) / 0.55)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <Search className="w-[18px] h-[18px] text-primary-foreground" />
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

  // Position: starts at center (50vh), moves to top (2.5vh) as scroll progresses (0 → 0.8)
  const moveT = clamp(p / 0.8);
  const topVh = lerp(50, 2.5, moveT);

  // Hide when hero fully expanded (navbar takes over) or past hero
  const isVisible = barVisible && !pastHero && heroProgress < 1;

  return (
    <div
      className="fixed left-1/2 z-[45] flex items-center pointer-events-none"
      style={{
        transform: `translateX(-50%) scale(${scale})`,
        top: `${topVh}vh`,
        opacity: isVisible ? 1 : 0,
        transition: isVisible
          ? "opacity 0.8s ease"
          : "opacity 0.35s ease",
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
