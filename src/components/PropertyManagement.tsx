import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import forbesLogo from "@/assets/Forbes_Global_Properties-2.png";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const sectionY = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [60, 0, 0, -60]);
  const galleryX = useTransform(scrollYProgress, [0.2, 0.5], ["5%", "-5%"]);

  return (
    <motion.section
      ref={sectionRef}
      className="bg-primary relative overflow-hidden"
      style={{ opacity: sectionOpacity }}
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 opacity-[0.07]" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 40%, hsl(var(--gold-light)), transparent)" }} />

      {/* Forbes content — logo from left, text from right */}
      <motion.div className="pt-28 lg:pt-36 pb-14 lg:pb-16 px-6 lg:px-12 relative z-10" style={{ y: sectionY }}>
        <div className="max-w-6xl mx-auto flex flex-col items-center md:flex-row md:items-start justify-center gap-10 md:gap-16 md:pt-2">
          {/* Logo — enters from left */}
          <motion.div
            className="flex-shrink-0 md:mt-1"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <img src={forbesLogo} alt="Forbes Global Properties" className="h-20 md:h-24 lg:h-32 object-contain" />
          </motion.div>

          {/* Divider — full height to match text block */}
          <motion.div
            className="hidden md:block w-px self-stretch bg-white"
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ originY: 0 }}
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
      </motion.div>

      {/* Gallery — scroll-driven horizontal drift + staggered entry */}
      <motion.div className="pb-10 md:pb-14 overflow-hidden relative z-10" style={{ x: galleryX }}>
        <div className="flex gap-4 overflow-x-auto scrollbar-thin px-6 md:px-16 pb-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              className="relative flex-shrink-0 w-72 md:w-96 h-52 md:h-64 rounded-[4px] overflow-hidden group"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
            >
              <img src={img} alt={`Foto ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        className="pb-20 md:pb-28 flex justify-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-40px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.button
          onClick={() => navigate("/forbes")}
          className="group flex items-center gap-3 px-8 py-3.5 rounded-full border border-white/30 text-primary-foreground font-sans text-[12px] font-semibold tracking-[0.15em] uppercase transition-colors duration-300 hover:bg-white/10"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {t("forbes.cta")}
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default PropertyManagement;
