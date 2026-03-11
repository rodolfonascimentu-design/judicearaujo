import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize, BedDouble } from "lucide-react";
import { PropertyDetailData } from "@/data/propertyDetail";

interface Props {
  property: PropertyDetailData;
}

const PropertyTypologies = ({ property }: Props) => {
  const typologies = property.typologies;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i + 1) % (typologies?.length || 1));
  }, [typologies?.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i - 1 + (typologies?.length || 1)) % (typologies?.length || 1));
  }, [typologies?.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, closeLightbox, goNext, goPrev]);

  if (!typologies || typologies.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="px-6 md:px-16 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3">
            Plantas
          </p>
          <h2 className="font-display text-2xl md:text-4xl text-foreground">
            Tipologias
          </h2>
          <div className="w-10 h-px bg-primary mx-auto mt-4" />
        </motion.div>
      </div>

      <div className="px-6 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {typologies.map((typo, i) => (
            <motion.button
              key={i}
              onClick={() => openLightbox(i)}
              className="group text-left rounded-[4px] overflow-hidden border border-border bg-card hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[4px]">
                <img
                  src={typo.image}
                  alt={typo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                  <Maximize className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <button
              onClick={goPrev}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex flex-col items-center max-w-[90vw] max-h-[85vh]">
              <motion.img
                key={lightboxIndex}
                src={typologies[lightboxIndex].image}
                alt={typologies[lightboxIndex].title}
                className="max-w-full max-h-[75vh] object-contain rounded-[4px]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              />
              <p className="mt-4 font-display text-sm text-white/80">
                {typologies[lightboxIndex].title}
              </p>
            </div>

            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-sans text-xs text-white/50 tracking-widest">
              {lightboxIndex + 1} / {typologies.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PropertyTypologies;
