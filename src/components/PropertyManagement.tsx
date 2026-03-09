import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import forbesLogo from "@/assets/Forbes_Global_Properties-2.png";
import { useState, useCallback, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";

import parallax1 from "@/assets/parallax-1.jpg";
import parallax2 from "@/assets/parallax-2.jpg";
import parallax3 from "@/assets/parallax-3.jpg";
import parallax4 from "@/assets/parallax-4.jpg";
import parallax5 from "@/assets/parallax-5.jpg";
import parallax6 from "@/assets/parallax-6.jpg";
import parallax7 from "@/assets/parallax-7.jpg";

const galleryImages = [parallax1, parallax2, parallax3, parallax4, parallax5, parallax6, parallax7];

const PropertyManagement = () => {
  const { t } = useLanguage();
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
    setLightboxIndex((i) => (i + 1) % galleryImages.length);
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  }, []);

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
    <section className="bg-primary relative overflow-hidden">
      {/* Forbes content */}
      <div className="py-28 lg:py-36 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <img src={forbesLogo} alt="Forbes Global Properties" className="h-24 md:h-28 lg:h-36 object-contain mx-auto mb-10" />
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-normal tracking-[-0.02em] text-primary-foreground whitespace-pre-line">
              {t("forbes.title")}
            </h2>
            <div className="w-10 h-px bg-primary-foreground/30 mx-auto mt-7 mb-5" />
            <p className="font-sans text-sm md:text-base max-w-xl mx-auto font-light tracking-wide text-primary-foreground/60">
              {t("forbes.desc")}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Gallery (replaces ZoomParallax) */}
      <div className="pb-20 md:pb-28 overflow-hidden">
        <div className="flex gap-4 overflow-x-auto scrollbar-thin px-6 md:px-16 pb-4">
          {galleryImages.map((img, i) => (
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
            <button onClick={closeLightbox} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10">
              <X className="w-5 h-5" />
            </button>
            <button onClick={goPrev} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={goNext} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
            <motion.img
              key={lightboxIndex}
              src={galleryImages[lightboxIndex]}
              alt={`Foto ${lightboxIndex + 1}`}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-[4px]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            />
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-sans text-xs text-white/50 tracking-widest">
              {lightboxIndex + 1} / {galleryImages.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PropertyManagement;
