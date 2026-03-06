import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import ctaBg from "@/assets/cta-bg.jpg";

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section id="contato" className="relative py-40 lg:py-52 overflow-hidden">
      <div className="absolute inset-0">
        <img src={ctaBg} alt="Vista panorâmica do Rio de Janeiro" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-charcoal/80" />
      </div>
      <motion.div className="relative z-10 text-center px-6" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 0.8 }}>
        <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-normal text-cream max-w-3xl mx-auto leading-[1.12] mb-8 tracking-[-0.02em]">{t("ctaSection.title")}</h2>
        <div className="w-10 h-px bg-cream/20 mx-auto mb-8" />
        <p className="font-sans text-sm text-cream/40 max-w-md mx-auto mb-12 font-light tracking-wide">{t("ctaSection.desc")}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" className="px-12 py-4 bg-primary hover:bg-gold-light text-primary-foreground text-[11px] font-sans font-medium tracking-[0.2em] uppercase transition-all duration-300 rounded-[4px]">{t("ctaSection.schedule")}</a>
          <a href="#" className="px-12 py-4 border border-cream/15 hover:border-cream/40 text-cream text-[11px] font-sans font-medium tracking-[0.2em] uppercase transition-all duration-300 rounded-[4px]">{t("ctaSection.talk")}</a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
