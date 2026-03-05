import { useState, useEffect } from "react";
import { Minus, Plus, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoJA from "@/assets/logo-ja.png";
import logoJaGreen from "@/assets/logo-ja-green.png";
import logoForbesGreen from "@/assets/logo-forbes-green.png";
import jaLogoFull from "@/assets/logo-ja-full.png";
import forbesLogoWhite from "@/assets/forbes-global-white.png";

const navLinks = [
  { label: "Lançamentos", href: "#lancamentos" },
  { label: "Avaliar Imóvel", href: "#avaliar" },
  { label: "Blog", href: "#blog" },
];

const languages = ["PT", "EN", "ES"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("PT");
  const [fontSize, setFontSize] = useState(100);
  const [heroExpanded, setHeroExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      setPastHero(window.scrollY > window.innerHeight - 80);
    };
    const checkHeroProgress = () => {
      const hp = parseFloat(document.documentElement.dataset.heroProgress || "0");
      setHeroExpanded(hp >= 0.85);
    };
    const observer = new MutationObserver(checkHeroProgress);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-hero-progress"] });
    window.addEventListener("scroll", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  const adjustFont = (delta: number) => {
    setFontSize((prev) => Math.min(130, Math.max(80, prev + delta)));
  };

  // Header phases: links always visible. White before fold, green after.
  const showGreen = pastHero;

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: showGreen ? "rgba(255,255,255,0.95)" : "transparent",
          backdropFilter: showGreen ? "blur(12px)" : "none",
          boxShadow: showGreen ? "0 4px 30px rgba(0,0,0,0.08)" : "none",
          transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Co-branding logo in top-left of header */}
            <a
              href="#"
              className="flex-shrink-0 flex items-center gap-2 transition-all duration-500"
              style={{
                opacity: heroExpanded ? 1 : 0,
                pointerEvents: heroExpanded ? "auto" : "none",
              }}
            >
              <div className="flex items-center gap-2">
                {pastHero ? (
                  <>
                    <img src={logoJaGreen} alt="Judice & Araujo" className="h-[18px] lg:h-[22px] w-auto" />
                    <div className="w-px h-8 bg-primary/30" />
                    <img src={logoForbesGreen} alt="Forbes Global Properties" className="h-[30px] lg:h-[35px] w-auto" />
                  </>
                ) : (
                  <>
                    <img src={jaLogoFull} alt="Judice & Araujo" className="h-[18px] lg:h-[22px] w-auto brightness-0 invert" />
                    <div className="w-px h-8 bg-cream/40" />
                    <img src={forbesLogoWhite} alt="Forbes Global Properties" className="h-[30px] lg:h-[35px] w-auto" />
                  </>
                )}
              </div>
            </a>

            {/* Desktop nav */}
            <div
              className="hidden lg:flex items-center gap-8 transition-all duration-500"
              style={{
                opacity: heroExpanded ? 1 : 0,
                pointerEvents: heroExpanded ? "auto" : "none",
              }}
            >
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className={`text-[11px] font-sans font-medium tracking-[0.2em] uppercase transition-colors duration-500 ease-in-out ${
                        pastHero
                          ? "text-primary/70 hover:text-primary"
                          : "text-cream/70 hover:text-cream"
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}

                  {/* Language selector */}
                  <div className="relative">
                    <button
                      onClick={() => setLangOpen(!langOpen)}
                      className={`flex items-center gap-1 text-[11px] font-sans font-medium tracking-[0.15em] uppercase transition-colors ${
                        pastHero ? "text-primary/70 hover:text-primary" : "text-cream/70 hover:text-cream"
                      }`}
                    >
                      {currentLang}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    <AnimatePresence>
                      {langOpen && (
                        <motion.div
                          className={`absolute top-full mt-2 right-0 backdrop-blur-md rounded-[4px] overflow-hidden ${
                            pastHero ? "bg-white/95 border border-primary/10" : "bg-white/10 border border-cream/20"
                          }`}
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                        >
                          {languages.map((lang) => (
                            <button
                              key={lang}
                              onClick={() => { setCurrentLang(lang); setLangOpen(false); }}
                              className={`block w-full px-5 py-2 text-[11px] font-sans tracking-[0.15em] uppercase text-left transition-colors ${
                                pastHero
                                  ? (lang === currentLang ? "text-primary bg-primary/5" : "text-primary/50 hover:text-primary hover:bg-primary/5")
                                  : (lang === currentLang ? "text-cream bg-cream/10" : "text-cream/50 hover:text-cream hover:bg-cream/10")
                              }`}
                            >
                              {lang}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Font size controls */}
                  <div className={`flex items-center gap-1 rounded-[4px] px-1 border ${
                    pastHero ? "border-primary/10" : "border-cream/20"
                  }`}>
                    <button
                      onClick={() => adjustFont(-5)}
                      className={`p-1.5 transition-colors ${pastHero ? "text-primary/50 hover:text-primary" : "text-cream/50 hover:text-cream"}`}
                      aria-label="Diminuir fonte"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className={`text-[9px] font-sans tracking-wider uppercase w-5 text-center ${pastHero ? "text-primary/40" : "text-cream/40"}`}>A</span>
                    <button
                      onClick={() => adjustFont(5)}
                      className={`p-1.5 transition-colors ${pastHero ? "text-primary/50 hover:text-primary" : "text-cream/50 hover:text-cream"}`}
                      aria-label="Aumentar fonte"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
            </div>

            {/* Mobile menu button — animated hamburger ↔ X */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden relative w-7 h-7 flex flex-col items-center justify-center transition-all duration-500 ${pastHero ? "text-primary" : "text-cream"}`}
              style={{
                opacity: heroExpanded ? 1 : 0,
                pointerEvents: heroExpanded ? "auto" : "none",
              }}
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            >
              <motion.span
                className={`absolute block h-[1.5px] w-5 rounded-full ${pastHero && !mobileOpen ? "bg-primary" : mobileOpen ? "bg-primary-foreground" : "bg-cream"}`}
                animate={mobileOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              />
              <motion.span
                className={`absolute block h-[1.5px] w-5 rounded-full ${pastHero && !mobileOpen ? "bg-primary" : mobileOpen ? "bg-primary-foreground" : "bg-cream"}`}
                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              />
              <motion.span
                className={`absolute block h-[1.5px] w-5 rounded-full ${pastHero && !mobileOpen ? "bg-primary" : mobileOpen ? "bg-primary-foreground" : "bg-cream"}`}
                animate={mobileOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-primary flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* X button removed — hamburger button in nav handles toggle */}
            <img
              src={logoJA}
              alt="Judice & Araujo"
              className="h-5 w-auto brightness-0 invert mb-10"
            />
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-xl text-primary-foreground/90 hover:text-primary-foreground transition-colors tracking-[0.1em] uppercase"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex gap-4 mt-4">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setCurrentLang(lang)}
                    className={`text-xs font-sans tracking-[0.15em] uppercase transition-colors ${
                      lang === currentLang ? "text-primary-foreground" : "text-primary-foreground/40"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3 mt-2">
                <button onClick={() => adjustFont(-5)} className="text-primary-foreground/50 hover:text-primary-foreground p-2">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-xs font-sans text-primary-foreground/40 tracking-wider">Aa</span>
                <button onClick={() => adjustFont(5)} className="text-primary-foreground/50 hover:text-primary-foreground p-2">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
