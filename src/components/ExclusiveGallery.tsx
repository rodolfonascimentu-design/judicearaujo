import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight, Bed, Maximize, Car } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

const exclusiveProperties = [
  { image: property1, title: "Cobertura Duplex · Leblon", area: 480, bedrooms: 5, parking: 4 },
  { image: property2, title: "Apartamento Frente Mar · Ipanema", area: 320, bedrooms: 4, parking: 3 },
  { image: property3, title: "Casa à Beira da Lagoa", area: 550, bedrooms: 4, parking: 3 },
  { image: property4, title: "Mansão Contemporânea · Gávea", area: 850, bedrooms: 6, parking: 6 },
  { image: property5, title: "Villa Tropical · Jardim Botânico", area: 620, bedrooms: 5, parking: 4 },
  { image: property6, title: "Refúgio à Beira-Mar · São Conrado", area: 380, bedrooms: 4, parking: 2 },
];

const ExclusiveGallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCarouselMode, setIsCarouselMode] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 0.5, 1]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
          setIsCarouselMode(true);
        }
      },
      { threshold: 0.6 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const goTo = (direction: "prev" | "next") => {
    setCurrentIndex((prev) => {
      if (direction === "next") return (prev + 1) % exclusiveProperties.length;
      return prev === 0 ? exclusiveProperties.length - 1 : prev - 1;
    });
  };

  const current = exclusiveProperties[currentIndex];

  const PropertyInfo = ({ item, className = "", dark = false }: { item: typeof exclusiveProperties[0]; className?: string; dark?: boolean }) => (
    <div className={`flex items-center gap-4 ${dark ? 'text-muted-foreground' : 'text-cream/60'} ${className}`}>
      <span className="flex items-center gap-1.5 text-xs font-sans font-light">
        <Maximize className="w-3.5 h-3.5" /> {item.area}m²
      </span>
      <span className="flex items-center gap-1.5 text-xs font-sans font-light">
        <Bed className="w-3.5 h-3.5" /> {item.bedrooms} quartos
      </span>
      <span className="flex items-center gap-1.5 text-xs font-sans font-light">
        <Car className="w-3.5 h-3.5" /> {item.parking} vagas
      </span>
    </div>
  );

  return (
    <section ref={sectionRef} className="py-32 lg:py-44 bg-[#FDFDFD] overflow-hidden">
      <motion.div style={{ opacity }} className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground mb-4 font-medium">
            Seleção Exclusiva
          </p>
          <h2 className="font-display text-2xl md:text-4xl font-light text-foreground tracking-[-0.02em]">
            Imóveis Exclusivos
          </h2>
        </div>

        {/* Gallery / Carousel */}
        {!isCarouselMode ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exclusiveProperties.slice(0, 4).map((prop, i) => (
              <motion.div
                key={i}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="relative overflow-hidden rounded-[6px] aspect-[2/3]">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="inline-flex items-center gap-1.5 bg-cream/90 text-foreground px-3 py-1.5 rounded-[4px] text-[10px] font-sans font-medium tracking-[0.15em] uppercase">
                      Ver detalhes
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
                <div className="mt-3 px-1">
                  <p className="font-display text-sm font-medium text-foreground mb-1">{prop.title}</p>
                  <PropertyInfo item={prop} dark />
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="relative">
            <div className="relative overflow-hidden rounded-[6px] aspect-[16/9] lg:aspect-[2/1] max-w-6xl mx-auto">
              <motion.img
                key={currentIndex}
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />

              <motion.div
                className="absolute bottom-8 left-8 right-8"
                key={`info-${currentIndex}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="font-display text-lg md:text-2xl font-medium text-cream mb-2">{current.title}</p>
                <PropertyInfo item={current} className="mb-4" />
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-cream/90 hover:bg-cream text-foreground px-5 py-2.5 rounded-[4px] text-[11px] font-sans font-medium tracking-[0.15em] uppercase transition-all duration-300"
                >
                  Ver detalhes
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>

              <button
                onClick={() => goTo("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-charcoal/40 backdrop-blur-md hover:bg-charcoal/60 rounded-full flex items-center justify-center text-cream transition-all duration-300"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => goTo("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-charcoal/40 backdrop-blur-md hover:bg-charcoal/60 rounded-full flex items-center justify-center text-cream transition-all duration-300"
                aria-label="Próximo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {exclusiveProperties.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === currentIndex ? "w-6 bg-primary" : "w-1.5 bg-border"
                  }`}
                  aria-label={`Imóvel ${i + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default ExclusiveGallery;
