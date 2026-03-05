import { useState, useEffect } from "react";
import { Menu, X, Minus, Plus, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoJA from "@/assets/logo-ja.png";
import forbesLogo from "@/assets/forbes-global.png";
import jaLogoFull from "@/assets/logo-ja-full.png";

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

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      // Past hero = scrolled beyond viewport height
      setPastHero(window.scrollY > window.innerHeight - 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  const adjustFont = (delta: number) => {
    setFontSize((prev) => Math.min(130, Math.max(80, prev + delta)));
  };

  // Header: transparent while on hero, green after leaving hero
  const showGreen = pastHero;

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showGreen
            ? "bg-primary/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="flex-1" />
            {/* Co-branding logo centered in header */}
            <a href="#" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
              <motion.div
                className="flex items-center gap-3"
                animate={{ opacity: pastHero ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <img src={jaLogoFull} alt="Judice & Araujo" className="h-4 lg:h-[18px] w-auto brightness-0 invert" />
                <div className="w-px h-6 bg-primary-foreground/30" />
                <img src={forbesLogo} alt="Forbes Global Properties" className="h-[18px] lg:h-5 w-auto brightness-0 invert" />
              </motion.div>
            </a>

            {/* Desktop nav - only after past hero */}
            <AnimatePresence>
              {pastHero && (
                <motion.div
                  className="hidden lg:flex items-center gap-8"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  ))}

                  {/* Language selector */}
                  <div className="relative">
                    <button
                      onClick={() => setLangOpen(!langOpen)}
                      className="flex items-center gap-1 text-[11px] font-sans font-medium tracking-[0.15em] uppercase text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {currentLang}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    <AnimatePresence>
                      {langOpen && (
                        <motion.div
                          className="absolute top-full mt-2 right-0 bg-primary/95 backdrop-blur-md border border-primary-foreground/10 rounded-[4px] overflow-hidden"
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                        >
                          {languages.map((lang) => (
                            <button
                              key={lang}
                              onClick={() => { setCurrentLang(lang); setLangOpen(false); }}
                              className={`block w-full px-5 py-2 text-[11px] font-sans tracking-[0.15em] uppercase text-left transition-colors ${
                                lang === currentLang ? "text-primary-foreground bg-primary-foreground/5" : "text-primary-foreground/50 hover:text-primary-foreground hover:bg-primary-foreground/5"
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
                  <div className="flex items-center gap-1 border border-primary-foreground/10 rounded-[4px] px-1">
                    <button
                      onClick={() => adjustFont(-5)}
                      className="p-1.5 text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                      aria-label="Diminuir fonte"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-[9px] font-sans text-primary-foreground/40 tracking-wider uppercase w-5 text-center">A</span>
                    <button
                      onClick={() => adjustFont(5)}
                      className="p-1.5 text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                      aria-label="Aumentar fonte"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Mobile menu button */}
            {pastHero && (
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden text-primary-foreground"
                aria-label="Abrir menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            )}
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
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-primary-foreground"
              aria-label="Fechar menu"
            >
              <X className="w-7 h-7" />
            </button>
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
