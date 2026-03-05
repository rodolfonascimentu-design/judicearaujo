import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoJA from "@/assets/logo-ja.png";

const navLinks = [
  { label: "Imóveis", href: "#imoveis" },
  { label: "Comprar", href: "#comprar" },
  { label: "Alugar", href: "#alugar" },
  { label: "Bairros", href: "#bairros" },
  { label: "Blog", href: "#blog" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-charcoal/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Left nav (desktop) */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.slice(0, 3).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-cream/80 hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Logo */}
            <a href="#" className="flex-shrink-0">
              <img
                src={logoJA}
                alt="Judice & Araujo"
                className="h-6 lg:h-7 w-auto brightness-0 invert"
              />
            </a>

            {/* Right nav (desktop) */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.slice(3).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-cream/80 hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-cream"
              aria-label="Abrir menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-charcoal flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-cream"
              aria-label="Fechar menu"
            >
              <X className="w-7 h-7" />
            </button>
            <img
              src={logoJA}
              alt="Judice & Araujo"
              className="h-8 w-auto brightness-0 invert mb-10"
            />
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-serif text-2xl text-cream/90 hover:text-gold transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
