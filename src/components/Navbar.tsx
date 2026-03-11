import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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

  const mobileNavLinks = [
    { label: t("nav.launches"), href: "#lancamentos" },
    { label: t("nav.evaluate"), href: "#avaliar" },
    { label: t("nav.blog"), href: "#administracao" },
    { label: t("nav.blogPost"), href: "#blog" },
    { label: t("nav.about"), href: "#quem-somos" },
    { label: t("nav.contact"), href: "#contato" },
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

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
                  window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'smooth' });
                } else {
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
                          : "text-white/80 hover:text-white"
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
                        showGreen ? "text-foreground/70 hover:text-foreground" : "text-white/80 hover:text-white"
                      }`}
                    >
                      {lang}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    <AnimatePresence>
                      {langOpen && (
                        <motion.div
                          className={`absolute top-full mt-2 right-0 backdrop-blur-md rounded-[4px] overflow-hidden ${
                          showGreen ? "bg-white/95 border border-foreground/10" : "bg-white/10 border border-white/20"
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
                                  : (l === lang ? "text-white bg-white/10" : "text-white/50 hover:text-white hover:bg-white/10")
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
                    showGreen ? "border-foreground/10" : "border-white/30"
                  }`}>
                    <button
                      onClick={() => adjustFont(-5)}
                      className={`p-1.5 transition-colors ${showGreen ? "text-foreground/50 hover:text-foreground" : "text-white/60 hover:text-white"}`}
                      aria-label="Diminuir fonte"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className={`text-[9px] font-sans tracking-wider uppercase w-5 text-center ${showGreen ? "text-foreground/40" : "text-white/50"}`}>A</span>
                    <button
                      onClick={() => adjustFont(5)}
                      className={`p-1.5 transition-colors ${showGreen ? "text-foreground/50 hover:text-foreground" : "text-white/60 hover:text-white"}`}
                      aria-label="Aumentar fonte"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
            </div>

            {/* Mobile hamburger / X button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center transition-all duration-500"
              style={{
                opacity: isExpanded ? 1 : 0,
                pointerEvents: isExpanded ? "auto" : "none",
              }}
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            >
              <motion.span
                className="absolute block h-[2px] w-6 rounded-full bg-white"
                animate={mobileOpen
                  ? { rotate: 45, y: 0, backgroundColor: "#ffffff" }
                  : { rotate: 0, y: -5, backgroundColor: showGreen ? "#1a1a1a" : "#ffffff" }
                }
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              />
              <motion.span
                className="absolute block h-[2px] w-6 rounded-full"
                animate={mobileOpen
                  ? { opacity: 0, scaleX: 0, backgroundColor: "#ffffff" }
                  : { opacity: 1, scaleX: 1, backgroundColor: showGreen ? "#1a1a1a" : "#ffffff" }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.span
                className="absolute block h-[2px] w-6 rounded-full bg-white"
                animate={mobileOpen
                  ? { rotate: -45, y: 0, backgroundColor: "#ffffff" }
                  : { rotate: 0, y: 5, backgroundColor: showGreen ? "#1a1a1a" : "#ffffff" }
                }
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-primary flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Navigation links — left-aligned, centered vertically */}
            <div className="flex-1 flex flex-col justify-center px-10">
              <nav className="flex flex-col gap-6">
                {mobileNavLinks.map((link, i) => (
                  <motion.a
                    key={link.href + link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-lg text-primary-foreground/90 hover:text-primary-foreground transition-colors tracking-[0.12em] uppercase whitespace-nowrap"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Bottom controls */}
            <motion.div
              className="pb-10 px-10 flex flex-col items-start gap-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Language selector */}
              <div className="flex items-center gap-6">
                {languages.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`text-sm font-sans tracking-[0.2em] uppercase transition-colors py-2 px-1 min-w-[44px] min-h-[44px] flex items-center justify-center ${
                      l === lang ? "text-primary-foreground font-medium" : "text-primary-foreground/35 hover:text-primary-foreground/60"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>

              {/* Separator */}
              <div className="w-12 h-px bg-primary-foreground/15" />

              {/* Font size controls */}
              <div className="flex items-center gap-5">
                <button
                  onClick={() => adjustFont(-5)}
                  className="text-primary-foreground/40 hover:text-primary-foreground transition-colors p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Diminuir fonte"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="text-sm font-sans text-primary-foreground/30 tracking-wider select-none">Aa</span>
                <button
                  onClick={() => adjustFont(5)}
                  className="text-primary-foreground/40 hover:text-primary-foreground transition-colors p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Aumentar fonte"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
