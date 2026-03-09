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
      {/* Forbes content — logo from left, text from right, meet in center side by side */}
      <div className="pt-28 lg:pt-36 pb-10 lg:pb-14 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          {/* Logo — enters from left */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <img src={forbesLogo} alt="Forbes Global Properties" className="h-20 md:h-24 lg:h-32 object-contain" />
          </motion.div>

          {/* Divider */}
          <motion.div
            className="hidden md:block w-px h-24 bg-primary-foreground/20"
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />

          {/* Text — enters from right */}
          <motion.div
            className="text-center md:text-left max-w-lg"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          >
            <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-normal tracking-[-0.02em] text-primary-foreground whitespace-pre-line leading-[1.3] mb-4">
              {t("forbes.title")}
            </h2>
            <p className="font-sans text-sm md:text-base font-light tracking-wide text-primary-foreground/55 leading-[1.8]">
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
