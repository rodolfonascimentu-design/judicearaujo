import { motion } from "framer-motion";
import { BarChart3, Megaphone, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import ctaImage from "@/assets/cta-proprietarios.jpg";

const InstitutionalCTA = () => {
  const { t } = useLanguage();

  const benefits = [
    { text: t("cta.benefit1"), icon: BarChart3 },
    { text: t("cta.benefit2"), icon: Megaphone },
    { text: t("cta.benefit3"), icon: Globe },
  ];

  return (
    <section className="py-32 lg:py-44 bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div className="relative overflow-hidden rounded-[4px] aspect-[3/4] lg:aspect-auto lg:h-[700px]" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 0.8 }}>
            <img src={ctaImage} alt="Interior luxuoso com vista privilegiada" className="w-full h-full object-cover rounded-[4px]" loading="lazy" />
          </motion.div>

          <motion.div className="lg:py-16" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 0.8, delay: 0.1 }}>
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#aed9d7] mb-8 font-medium">{t("cta.owners")}</p>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-normal text-primary-foreground leading-[1.2] mb-10 tracking-[-0.02em]">{t("cta.ownersTitle")}</h2>
            <div className="w-10 h-px bg-primary-foreground/30 mb-10" />
            <p className="font-sans text-sm text-primary-foreground/70 leading-[1.9] mb-12 font-light">{t("cta.ownersDesc")}</p>

            <ul className="space-y-5 mb-12">
              {benefits.map((b) => (
                <li key={b.text} className="flex items-center gap-4 text-sm text-primary-foreground/90 font-light tracking-wide">
                  <b.icon className="w-5 h-5 text-primary-foreground/60 flex-shrink-0" strokeWidth={1.5} />
                  {b.text}
                </li>
              ))}
            </ul>

            <a href="#avaliar" className="inline-block px-10 py-4 bg-cream text-primary text-[11px] font-sans font-medium tracking-[0.2em] uppercase rounded-full transition-all duration-300 hover:bg-primary-foreground hover:text-primary">{t("cta.evaluateBtn")}</a>
            <p className="mt-4 text-xs text-[#aed9d7] font-light tracking-wide">{t("cta.evaluateNote")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InstitutionalCTA;
