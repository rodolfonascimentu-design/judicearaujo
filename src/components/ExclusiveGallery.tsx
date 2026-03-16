import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight, Bed, Maximize, Car } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import exclusive1 from "@/assets/exclusive-1.jpg";
import exclusive2 from "@/assets/exclusive-2.jpg";
import exclusive3 from "@/assets/exclusive-3.jpg";
import exclusive4 from "@/assets/exclusive-4.jpg";

const exclusiveProperties = [
  { image: exclusive1, title: "Cobertura Duplex · Leblon", area: 480, bedrooms: 5, parking: 4 },
  { image: exclusive2, title: "Apartamento Frente Mar · Ipanema", area: 320, bedrooms: 4, parking: 3 },
  { image: exclusive3, title: "Casa à Beira da Lagoa", area: 550, bedrooms: 4, parking: 3 },
  { image: exclusive4, title: "Mansão Contemporânea · Gávea", area: 850, bedrooms: 6, parking: 6 },
];

const SWIPE_THRESHOLD = 50;

const ExclusiveGallery = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 0.5, 1]);

  const goTo = (direction: "prev" | "next") => {
    setCurrentIndex((prev) => {
      if (direction === "next") return (prev + 1) % exclusiveProperties.length;
      return prev === 0 ? exclusiveProperties.length - 1 : prev - 1;
    });
  };

  const current = exclusiveProperties[currentIndex];

  return (
    <section ref={sectionRef} className="py-32 lg:py-44 bg-[#FDFDFD] overflow-hidden">
      <motion.div style={{ opacity }} className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-10 lg:mb-12">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground mb-4 font-medium">
            {t("exclusive.subtitle")}
          </p>
          <h2 className="font-display text-2xl md:text-4xl font-normal text-foreground tracking-[-0.02em]">
            {t("exclusive.title")}
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center gap-3 md:gap-5">
            <button onClick={() => goTo("prev")} className="hidden md:flex flex-shrink-0 w-11 h-11 bg-white hover:bg-white shadow-sm rounded-full items-center justify-center text-black transition-all duration-300" aria-label="Anterior">
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex-1 min-w-0">
              <div className="relative overflow-hidden rounded-[6px] aspect-[4/3] md:aspect-[16/9] lg:aspect-[2/1]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
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

                <motion.div
                  className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 pointer-events-auto"
                  key={`btn-${currentIndex}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <a href="#" className="inline-flex items-center gap-2 bg-cream/90 hover:bg-cream text-foreground px-5 py-2.5 rounded-full text-[11px] font-sans font-medium tracking-[0.15em] uppercase transition-all duration-300">
                    {t("exclusive.details")}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              </div>
            </div>

            <button onClick={() => goTo("next")} className="hidden md:flex flex-shrink-0 w-11 h-11 bg-white hover:bg-white shadow-sm rounded-full items-center justify-center text-black transition-all duration-300" aria-label="Próximo">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <motion.div className="mt-6 px-1 md:pl-[calc(2.75rem+1.25rem)]" key={`info-${currentIndex}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }}>
            <p className="font-display text-lg md:text-xl font-normal text-foreground mb-2">{current.title}</p>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-1.5 text-xs font-sans font-normal"><Maximize className="w-3.5 h-3.5" /> {current.area}m²</span>
              <span className="flex items-center gap-1.5 text-xs font-sans font-normal"><Bed className="w-3.5 h-3.5" /> {current.bedrooms} {t("unit.bedrooms")}</span>
              <span className="flex items-center gap-1.5 text-xs font-sans font-normal"><Car className="w-3.5 h-3.5" /> {current.parking} {t("unit.parking")}</span>
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-3 mt-6">
            <button onClick={() => goTo("prev")} className="md:hidden w-8 h-8 bg-white hover:bg-white shadow-sm rounded-full flex items-center justify-center text-black transition-all duration-300" aria-label="Anterior">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {exclusiveProperties.map((_, i) => (
                <button key={i} onClick={() => setCurrentIndex(i)} className={`h-1 rounded-full transition-all duration-300 ${i === currentIndex ? "w-6 bg-primary" : "w-1.5 bg-border"}`} aria-label={`Imóvel ${i + 1}`} />
              ))}
            </div>
            <button onClick={() => goTo("next")} className="md:hidden w-8 h-8 bg-white hover:bg-white shadow-sm rounded-full flex items-center justify-center text-black transition-all duration-300" aria-label="Próximo">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExclusiveGallery;
