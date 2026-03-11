import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Maximize,
  BedDouble,
  Bath,
  Car,
  MessageCircle,
  Info,
  Share2,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { PropertyDetailData } from "@/data/propertyDetail";

interface Props {
  property: PropertyDetailData;
}

const PropertyHero = ({ property }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();

    // Auto-play
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const isLaunch = property.status === "launch";

  const specs = isLaunch
    ? [
        { icon: Maximize, value: `${property.areaRange || property.area} m²` },
        { icon: BedDouble, value: `${property.bedroomsRange || property.suites} quartos` },
        { icon: Bath, value: `${property.bathroomsRange || property.bathrooms} banheiros` },
        { icon: Car, value: `${property.parkingRange || property.parking} vagas` },
      ]
    : [
        { icon: Maximize, value: `${property.area} m²` },
        { icon: BedDouble, value: `${property.suites} suítes` },
        { icon: Bath, value: `${property.bathrooms} banheiros` },
        { icon: Car, value: `${property.parking} vagas` },
      ];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slideshow */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {property.images.map((img, i) => (
            <div key={i} className="relative flex-[0_0_100%] min-w-0 h-full">
              <motion.img
                src={img}
                alt={`${property.name} - ${i + 1}`}
                className="w-full h-full object-cover"
                initial={{ scale: 1.05 }}
                animate={{ scale: isReady ? 1 : 1.05 }}
                transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

      {/* Navigation arrows - all devices */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="flex absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
      </button>
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="flex absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
        aria-label="Next"
      >
        <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
      </button>

      {/* Content overlay */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-16 pb-12 md:pb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: isReady ? 1 : 0, y: isReady ? 0 : 40 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Type & Location */}
          <p className="font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/70 mb-2">
            {property.type} &nbsp;·&nbsp; {property.neighborhood}, {property.city}
          </p>

          {/* Name */}
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.1]">
            {property.name}
          </h1>

          {/* Quick specs */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-6">
            {specs.map(({ icon: Icon, value }) => (
              <span key={value} className="flex items-center gap-2 text-white/80 text-xs md:text-sm font-sans">
                <Icon className="w-4 h-4" />
                {value}
              </span>
            ))}
          </div>


        </div>
      </motion.div>

      {/* Slide counter */}
      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-16 z-10 font-sans text-xs text-white/50 tracking-widest">
        {selectedIndex + 1} / {property.images.length}
      </div>
    </section>
  );
};

export default PropertyHero;
