import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play, Eye } from "lucide-react";
import { PropertyDetailData } from "@/data/propertyDetail";

interface Props {
  property: PropertyDetailData;
}

const categories = [
  { key: "photos", label: "Fotos" },
  { key: "video", label: "Vídeo" },
  { key: "tour", label: "Tour Virtual" },
];

const PropertyGallery = ({ property }: Props) => {
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
    setLightboxIndex((i) => (i + 1) % property.images.length);
  }, [property.images.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i - 1 + property.images.length) % property.images.length);
  }, [property.images.length]);

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

  return (
    <section className="py-20 md:py-28 bg-[hsl(var(--muted))] overflow-hidden">
      <div className="px-6 md:px-16 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3">
            Galeria
          </p>
          <h2 className="font-display text-2xl md:text-4xl text-foreground">
            Explore cada detalhe
          </h2>
        </motion.div>
      </div>

      {/* Horizontal scroll row */}
      {categories.map((cat) => (
        <div key={cat.key} className="mb-10">
          <p className="px-6 md:px-16 font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-4">
            {cat.label}
          </p>
          <div className="flex gap-4 overflow-x-auto scrollbar-thin px-6 md:px-16 pb-4">
            {cat.key === "photos"
              ? property.images.map((img, i) => (
                  <motion.button
                    key={i}
                    onClick={() => openLightbox(i)}
                    className="relative flex-shrink-0 w-72 md:w-96 h-52 md:h-64 rounded-[4px] overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={img} alt={`Foto ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <Eye className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.button>
                ))
              : [0, 1].map((i) => (
                  <div
                    key={i}
                    className="relative flex-shrink-0 w-72 md:w-96 h-52 md:h-64 rounded-[4px] overflow-hidden bg-muted flex items-center justify-center"
                  >
                    <Play className="w-10 h-10 text-muted-foreground/40" />
                    <span className="absolute bottom-4 left-4 font-sans text-xs text-muted-foreground">
                      {cat.label} {i + 1}
                    </span>
                  </div>
                ))}
          </div>
        </div>
      ))}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
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
            <motion.img
              key={lightboxIndex}
              src={property.images[lightboxIndex]}
              alt={`Foto ${lightboxIndex + 1}`}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-[4px]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            />
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-sans text-xs text-white/50 tracking-widest">
              {lightboxIndex + 1} / {property.images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PropertyGallery;
