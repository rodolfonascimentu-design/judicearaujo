import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight, Bed, Maximize, Car } from "lucide-react";
import farm1 from "@/assets/farm-1.jpg";
import farm2 from "@/assets/farm-2.jpg";
import farm3 from "@/assets/farm-3.jpg";
import farm4 from "@/assets/farm-4.jpg";

const farms = [
  { image: farm1, title: "Fazenda Colonial · Petrópolis", area: 12000, bedrooms: 8, parking: 6 },
  { image: farm2, title: "Haras de Luxo · Itaipava", area: 25000, bedrooms: 6, parking: 8 },
  { image: farm3, title: "Sítio Histórico · Teresópolis", area: 8500, bedrooms: 5, parking: 4 },
  { image: farm4, title: "Fazenda Contemporânea · Visconde de Mauá", area: 35000, bedrooms: 10, parking: 10 },
];

const SWIPE_THRESHOLD = 50;

const FarmsGallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 0.5, 1]);

  const goTo = (direction: "prev" | "next") => {
    setCurrentIndex((prev) => {
      if (direction === "next") return (prev + 1) % farms.length;
      return prev === 0 ? farms.length - 1 : prev - 1;
    });
  };

  const current = farms[currentIndex];

  return (
    <section ref={sectionRef} className="py-32 lg:py-44 bg-[#FDFDFD] overflow-hidden">
      <motion.div style={{ opacity }} className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground mb-4 font-medium">
            Seleção Exclusiva
          </p>
          <h2 className="font-display text-2xl md:text-4xl font-normal text-foreground tracking-[-0.02em]">
            Fazendas Exclusivas
          </h2>
        </div>

        {/* Carousel with arrows outside */}
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center gap-3 md:gap-5">
            {/* Left arrow - hidden on mobile */}
            <button
              onClick={() => goTo("prev")}
              className="hidden md:flex flex-shrink-0 w-11 h-11 bg-white hover:bg-white shadow-sm rounded-full items-center justify-center text-black transition-all duration-300"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Image container with swipe */}
            <div className="flex-1 min-w-0">
              <div className="relative overflow-hidden rounded-[6px] aspect-[4/3] md:aspect-[16/9] lg:aspect-[2/1]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.15}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -SWIPE_THRESHOLD) goTo("next");
                      else if (info.offset.x > SWIPE_THRESHOLD) goTo("prev");
                    }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent pointer-events-none" />

                {/* Ver detalhes button inside image */}
                <motion.div
                  className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 pointer-events-auto"
                  key={`btn-${currentIndex}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-cream/90 hover:bg-cream text-foreground px-5 py-2.5 rounded-full text-[11px] font-sans font-medium tracking-[0.15em] uppercase transition-all duration-300"
                  >
                    Ver detalhes
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Right arrow - hidden on mobile */}
            <button
              onClick={() => goTo("next")}
              className="hidden md:flex flex-shrink-0 w-11 h-11 bg-white hover:bg-white shadow-sm rounded-full items-center justify-center text-black transition-all duration-300"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Info below image */}
          <motion.div
            className="mt-6 px-1 md:pl-[calc(2.75rem+1.25rem)]"
            key={`info-${currentIndex}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <p className="font-display text-lg md:text-xl font-normal text-foreground mb-2">{current.title}</p>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-1.5 text-xs font-sans font-normal">
                <Maximize className="w-3.5 h-3.5" /> {current.area.toLocaleString()}m²
              </span>
              <span className="flex items-center gap-1.5 text-xs font-sans font-normal">
                <Bed className="w-3.5 h-3.5" /> {current.bedrooms} quartos
              </span>
              <span className="flex items-center gap-1.5 text-xs font-sans font-normal">
                <Car className="w-3.5 h-3.5" /> {current.parking} vagas
              </span>
            </div>
          </motion.div>

          {/* Dots + mobile arrows */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => goTo("prev")}
              className="md:hidden w-8 h-8 bg-white hover:bg-white shadow-sm rounded-full flex items-center justify-center text-black transition-all duration-300"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {farms.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === currentIndex ? "w-6 bg-primary" : "w-1.5 bg-border"
                  }`}
                  aria-label={`Fazenda ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => goTo("next")}
              className="md:hidden w-8 h-8 bg-white hover:bg-white shadow-sm rounded-full flex items-center justify-center text-black transition-all duration-300"
              aria-label="Próximo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FarmsGallery;
