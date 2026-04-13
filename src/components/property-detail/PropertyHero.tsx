import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Maximize,
  BedDouble,
  Bath,
  Car,
  Camera,
  Eye,
  X,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { PropertyDetailData } from "@/data/propertyDetail";
import { useIsMobile } from "@/hooks/use-mobile";

interface Props {
  property: PropertyDetailData;
  isFromLaunches?: boolean;
}

const PropertyHero = ({ property, isFromLaunches = false }: Props) => {
  const isMobile = useIsMobile();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    const interval = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const isLaunch = isFromLaunches && property.status === "launch";

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

  const topLine = isLaunch && property.launchTypes
    ? property.launchTypes.join(" • ")
    : `${property.type} à ${property.transaction.toLowerCase()}`;

  // Thumbnails for desktop grid (images 1-4, or fewer if not enough)
  const thumbnails = property.images.slice(1, 5);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  }, []);

  const lightboxNext = useCallback(() => {
    setLightboxIndex((i) => (i + 1) % property.images.length);
  }, [property.images.length]);

  const lightboxPrev = useCallback(() => {
    setLightboxIndex((i) => (i - 1 + property.images.length) % property.images.length);
  }, [property.images.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") lightboxNext();
      if (e.key === "ArrowLeft") lightboxPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, closeLightbox, lightboxNext, lightboxPrev]);

  /* ─── MOBILE: full-screen carousel with text overlay ─── */
  if (isMobile) {
    return (
      <>
        <section className="relative h-[85vh] w-full overflow-hidden">
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

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="flex absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="flex absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <motion.div
            className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isReady ? 1 : 0, y: isReady ? 0 : 40 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/70 mb-2">
              {topLine}
            </p>
            <h2 className="font-display text-3xl text-white mb-2 leading-[1.1]">
              {isLaunch ? property.name : property.neighborhood}
            </h2>
            <p className="font-sans text-sm text-white/70 mb-6 tracking-wide">
              {isLaunch
                ? `${property.neighborhood}, ${property.city}/${property.state}`
                : `${property.city}/${property.state}`}
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              {specs.map(({ icon: Icon, value }) => (
                <span key={value} className="flex items-center gap-2 text-white/80 text-xs font-sans">
                  <Icon className="w-4 h-4" />
                  {value}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="absolute bottom-6 right-6 z-10 font-sans text-xs text-white/50 tracking-widest">
            {selectedIndex + 1} / {property.images.length}
          </div>
        </section>

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          images={property.images}
          index={lightboxIndex}
          onClose={closeLightbox}
          onNext={lightboxNext}
          onPrev={lightboxPrev}
        />
      </>
    );
  }

  /* ─── DESKTOP: split layout — main image left + 2×2 grid right ─── */
  return (
    <>
      <section className="w-full bg-background pt-[72px]">
        <div className="w-full grid grid-cols-2 gap-1.5 h-[75vh] min-h-[500px] max-h-[720px]">
          {/* Main image — left half with carousel */}
          <div className="relative overflow-hidden group cursor-pointer" onClick={() => openLightbox(0)}>
            <div className="absolute inset-0" ref={emblaRef}>
              <div className="flex h-full">
                {property.images.map((img, i) => (
                  <div key={i} className="relative flex-[0_0_100%] min-w-0 h-full">
                    <img
                      src={img}
                      alt={`${property.name} - ${i + 1}`}
                      className="w-full h-full object-cover"
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel arrows on main image */}
            <button
              onClick={(e) => { e.stopPropagation(); emblaApi?.scrollPrev(); }}
              className="flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-foreground hover:bg-white transition-colors shadow-sm"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); emblaApi?.scrollNext(); }}
              className="flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-foreground hover:bg-white transition-colors shadow-sm"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* View Photos button */}
            <button
              onClick={(e) => { e.stopPropagation(); openLightbox(selectedIndex); }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-sm text-foreground text-xs font-sans font-medium tracking-wide shadow-md hover:bg-white transition-colors"
            >
              <Camera className="w-3.5 h-3.5" />
              Ver fotos
            </button>
          </div>

          {/* Right half — 2×2 thumbnail grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-1.5">
            {thumbnails.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden group cursor-pointer"
                onClick={() => openLightbox(i + 1)}
              >
                <img
                  src={img}
                  alt={`${property.name} - ${i + 2}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Show "+X fotos" on last thumbnail if more images */}
                {i === 3 && property.images.length > 5 && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-white font-sans text-sm font-medium tracking-wide">
                      +{property.images.length - 5} fotos
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        images={property.images}
        index={lightboxIndex}
        onClose={closeLightbox}
        onNext={lightboxNext}
        onPrev={lightboxPrev}
      />
    </>
  );
};

/* ─── Shared Lightbox Component ─── */
interface LightboxProps {
  open: boolean;
  images: string[];
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox = ({ open, images, index, onClose, onNext, onPrev }: LightboxProps) => (
  <AnimatePresence>
    {open && (
      <motion.div
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>
        <button
          onClick={onPrev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={onNext}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <motion.img
          key={index}
          src={images[index]}
          alt={`Foto ${index + 1}`}
          className="max-w-[90vw] max-h-[85vh] object-contain rounded-[4px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
        />
        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-sans text-xs text-white/50 tracking-widest">
          {index + 1} / {images.length}
        </p>
      </motion.div>
    )}
  </AnimatePresence>
);

export default PropertyHero;
