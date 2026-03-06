import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Minus, Plus, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoJaBlack from "@/assets/logo-ja-black.png";
import logoForbesBlack from "@/assets/forbes-global-black.png";
import jaLogoWhite from "@/assets/logo-ja-white.png";
import forbesLogoWhite from "@/assets/forbes-global-white.png";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";

const languages: Lang[] = ["PT", "EN", "ES"];

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [heroExpanded, setHeroExpanded] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navLinks = [
    { label: t("nav.launches"), href: "#lancamentos" },
    { label: t("nav.evaluate"), href: "#avaliar" },
    { label: t("nav.blog"), href: "#blog" },
  ];

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

  const showGreen = !isHomePage || pastHero;
  const isExpanded = !isHomePage || heroExpanded;

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 ${mobileOpen ? 'z-[110]' : 'z-50'}`}
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
            {/* Co-branding logo */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                if (isHomePage) {
                  // Already on home — scroll to search area
                  window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'smooth' });
                } else {
                  // Navigate to home with search flag
                  window.location.href = '/?search=1';
                }
              }}
              className="flex-shrink-0 flex items-center gap-2 transition-all duration-500 cursor-pointer"
              style={{
                opacity: isExpanded ? 1 : 0,
                pointerEvents: isExpanded ? "auto" : "none",
              }}
            >
              <div className="flex items-center gap-2">
                {showGreen ? (
                  <>
                    <img src={logoJaBlack} alt="Judice & Araujo" className="h-[26px] lg:h-[30px] w-auto" />
                    <div className="w-px h-8 bg-foreground/20" />
                    <img src={logoForbesBlack} alt="Forbes Global Properties" className="h-[30px] lg:h-[35px] w-auto" />
                  </>
                ) : (
                  <>
                    <img src={jaLogoWhite} alt="Judice & Araujo" className="h-[26px] lg:h-[30px] w-auto" />
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
                opacity: isExpanded ? 1 : 0,
                pointerEvents: isExpanded ? "auto" : "none",
              }}
            >
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`text-[11px] font-sans font-medium tracking-[0.2em] uppercase transition-colors duration-500 ease-in-out ${
                        showGreen
                          ? "text-foreground/70 hover:text-foreground"
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
                        showGreen ? "text-foreground/70 hover:text-foreground" : "text-cream/70 hover:text-cream"
                      }`}
                    >
                      {lang}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    <AnimatePresence>
                      {langOpen && (
                        <motion.div
                          className={`absolute top-full mt-2 right-0 backdrop-blur-md rounded-[4px] overflow-hidden ${
                            showGreen ? "bg-white/95 border border-foreground/10" : "bg-white/10 border border-cream/20"
                          }`}
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                        >
                          {languages.map((l) => (
                            <button
                              key={l}
                              onClick={() => { setLang(l); setLangOpen(false); }}
                              className={`block w-full px-5 py-2 text-[11px] font-sans tracking-[0.15em] uppercase text-left transition-colors ${
                                showGreen
                                  ? (l === lang ? "text-foreground bg-foreground/5" : "text-foreground/50 hover:text-foreground hover:bg-foreground/5")
                                  : (l === lang ? "text-cream bg-cream/10" : "text-cream/50 hover:text-cream hover:bg-cream/10")
                              }`}
                            >
                              {l}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Font size controls */}
                  <div className={`flex items-center gap-1 rounded-[4px] px-1 border ${
                    showGreen ? "border-foreground/10" : "border-cream/20"
                  }`}>
                    <button
                      onClick={() => adjustFont(-5)}
                      className={`p-1.5 transition-colors ${showGreen ? "text-foreground/50 hover:text-foreground" : "text-cream/50 hover:text-cream"}`}
                      aria-label="Diminuir fonte"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className={`text-[9px] font-sans tracking-wider uppercase w-5 text-center ${showGreen ? "text-foreground/40" : "text-cream/40"}`}>A</span>
                    <button
                      onClick={() => adjustFont(5)}
                      className={`p-1.5 transition-colors ${showGreen ? "text-foreground/50 hover:text-foreground" : "text-cream/50 hover:text-cream"}`}
                      aria-label="Aumentar fonte"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
            </div>

            {/* Mobile menu button — X is now green */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden relative w-7 h-7 flex flex-col items-center justify-center transition-all duration-500 ${showGreen ? "text-foreground" : "text-cream"}`}
              style={{
                opacity: isExpanded ? 1 : 0,
                pointerEvents: isExpanded ? "auto" : "none",
              }}
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            >
              <motion.span
                className={`absolute block h-[1.5px] w-5 rounded-full ${mobileOpen ? "bg-primary" : showGreen ? "bg-foreground" : "bg-cream"}`}
                animate={mobileOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              />
              <motion.span
                className={`absolute block h-[1.5px] w-5 rounded-full ${mobileOpen ? "bg-primary" : showGreen ? "bg-foreground" : "bg-cream"}`}
                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              />
              <motion.span
                className={`absolute block h-[1.5px] w-5 rounded-full ${mobileOpen ? "bg-primary" : showGreen ? "bg-foreground" : "bg-cream"}`}
                animate={mobileOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay — logo removed, X is green */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-primary flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
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
                {languages.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`text-xs font-sans tracking-[0.15em] uppercase transition-colors ${
                      l === lang ? "text-primary-foreground" : "text-primary-foreground/40"
                    }`}
                  >
                    {l}
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
