import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import lifestyleCampo from "@/assets/lifestyle-campo.jpg";
import lifestylePraia from "@/assets/lifestyle-praia.jpg";
import lifestyleApartamento from "@/assets/lifestyle-apartamento.jpg";
import lifestyleCasas from "@/assets/lifestyle-casas.jpg";

const categories = [
  {
    image: lifestyleCampo,
    title: "Campo",
    description: "Refúgio, natureza e privacidade em meio à paisagem.",
    href: "#campo",
  },
  {
    image: lifestylePraia,
    title: "Praia",
    description: "Vista infinita e estilo de vida à beira-mar.",
    href: "#praia",
  },
  {
    image: lifestyleApartamento,
    title: "Apartamento",
    description: "Conforto, sofisticação e localização privilegiada.",
    href: "#apartamento",
  },
  {
    image: lifestyleCasas,
    title: "Casas",
    description: "Espaço, exclusividade e design que inspiram.",
    href: "#casas",
  },
];

const SWIPE_THRESHOLD = 50;

const LuxuryHighlights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const onChange = () => setIsDesktop(mql.matches);
    mql.addEventListener("change", onChange);
    setIsDesktop(mql.matches);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  const goTo = (direction: "prev" | "next") => {
    setCurrentIndex((prev) => {
      if (direction === "next") return (prev + 1) % categories.length;
      return prev === 0 ? categories.length - 1 : prev - 1;
    });
  };

  const current = categories[currentIndex];

  return (
    <section id="bairros" className="py-32 lg:py-44 bg-[#FDFDFD]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          title="Encontre o imóvel do seu jeito"
          subtitle="Explore diferentes estilos de imóveis de alto padrão e descubra o que combina com o seu estilo de vida."
        />

        {/* Desktop: Grid */}
        {isDesktop ? (
          <div className="grid grid-cols-4 gap-5">
            {categories.map((cat, i) => (
              <motion.a
                key={cat.title}
                href={cat.href}
                className="relative h-[520px] md:h-[580px] overflow-hidden group cursor-pointer rounded-[4px] block"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 rounded-[4px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent rounded-[4px]" />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[4px]" />

                <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                  <h3 className="font-display text-2xl md:text-3xl font-normal text-cream tracking-[-0.01em] transition-all duration-500 group-hover:text-white">
                    {cat.title}
                  </h3>
                  <p className="font-sans text-sm text-cream/50 mt-2 font-normal tracking-wide transition-all duration-500 group-hover:text-white/90 min-h-[2.5rem]">
                    {cat.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        ) : (
          /* Mobile/Tablet: Carousel with swipe */
          <div className="relative">
            <div className="relative overflow-hidden rounded-[4px] aspect-[3/4] sm:aspect-[4/3]">
              <AnimatePresence mode="wait">
                <motion.a
                  key={currentIndex}
                  href={current.href}
                  className="absolute inset-0 block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -SWIPE_THRESHOLD) goTo("next");
                    else if (info.offset.x > SWIPE_THRESHOLD) goTo("prev");
                  }}
                >
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover rounded-[4px] pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent rounded-[4px]" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <h3 className="font-display text-2xl font-normal text-cream tracking-[-0.01em]">
                      {current.title}
                    </h3>
                    <p className="font-sans text-sm text-cream/60 mt-2 font-normal tracking-wide">
                      {current.description}
                    </p>
                  </div>
                </motion.a>
              </AnimatePresence>
            </div>

            {/* Dots + arrows below */}
            <div className="flex items-center justify-center gap-3 mt-5">
              <button
                onClick={() => goTo("prev")}
                className="w-8 h-8 bg-muted hover:bg-muted/80 rounded-full flex items-center justify-center text-foreground/60 hover:text-foreground transition-all duration-300"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex gap-2">
                {categories.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === currentIndex ? "w-6 bg-primary" : "w-1.5 bg-border"
                    }`}
                    aria-label={`${categories[i].title}`}
                  />
                ))}
              </div>
              <button
                onClick={() => goTo("next")}
                className="w-8 h-8 bg-muted hover:bg-muted/80 rounded-full flex items-center justify-center text-foreground/60 hover:text-foreground transition-all duration-300"
                aria-label="Próximo"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LuxuryHighlights;
