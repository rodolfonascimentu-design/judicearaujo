import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Eye, Camera, Video, View } from "lucide-react";
import { PropertyDetailData } from "@/data/propertyDetail";

interface Props {
  property: PropertyDetailData;
  isFromLaunches?: boolean;
}

const PropertyGallery = ({ property, isFromLaunches = false }: Props) => {
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
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="px-6 md:px-16 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3">
              Galeria
            </p>
            <h2 className="font-display text-2xl md:text-4xl text-foreground">
              Explore cada detalhe
            </h2>
          </div>

          {/* Media type badges */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-sans font-medium tracking-wide">
              <Camera className="w-3.5 h-3.5" />
              {property.images.length} fotos
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-muted-foreground text-xs font-sans font-medium tracking-wide hover:bg-muted/50 transition-colors cursor-pointer">
              <Video className="w-3.5 h-3.5" />
              Vídeo
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-muted-foreground text-xs font-sans font-medium tracking-wide hover:bg-muted/50 transition-colors cursor-pointer">
              <View className="w-3.5 h-3.5" />
              Tour 360°
            </span>
          </div>
        </motion.div>
      </div>

      {/* Launch gallery — horizontal scroll */}
      {isFromLaunches ? (
        <div className="flex gap-4 overflow-x-auto overflow-y-hidden scrollbar-thin px-6 md:px-16 pb-4">
          {property.images.map((img, i) => (
            <motion.button
              key={i}
              onClick={() => openLightbox(i)}
              className="relative flex-shrink-0 w-72 md:w-96 h-52 md:h-64 rounded-[4px] overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ scale: 1.02 }}
            >
              <img src={img} alt={`Foto ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                <Eye className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.button>
          ))}
        </div>
      ) : (
        /* Regular property gallery — mosaic grid */
        <div className="px-6 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            {property.images.slice(0, 5).map((img, i) => (
              <motion.button
                key={i}
                onClick={() => openLightbox(i)}
                className={`relative rounded-[4px] overflow-hidden group ${
                  i === 0 ? "col-span-2 row-span-2 aspect-[4/3]" : "aspect-[4/3]"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ scale: 1.01 }}
              >
                <img src={img} alt={`Foto ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {i === 4 && property.images.length > 5 && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-white font-sans text-sm font-medium tracking-wide">
                      +{property.images.length - 5} fotos
                    </span>
                  </div>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      )}

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
