import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import editorialImage from "@/assets/editorial.jpg";

const EditorialSection = () => {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="py-32 lg:py-44 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div className="relative overflow-hidden rounded-[4px] aspect-[3/4] lg:aspect-auto lg:h-[700px]" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 0.8 }}>
            <img src={editorialImage} alt="Estilo de vida luxuoso no Rio de Janeiro" className="w-full h-full object-cover rounded-[4px]" loading="lazy" />
          </motion.div>

          <motion.div className="lg:py-16" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 0.8, delay: 0.1 }}>
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-primary mb-8 font-medium">{t("editorial.subtitle")}</p>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-normal text-foreground leading-[1.2] mb-10 tracking-[-0.02em]">{t("editorial.title")}</h2>
            <div className="w-10 h-px bg-primary mb-10" />
            <p className="font-sans text-sm text-muted-foreground leading-[1.9] mb-6 font-light">{t("editorial.p1")}</p>
            <p className="font-sans text-sm text-muted-foreground leading-[1.9] mb-12 font-light">{t("editorial.p2")}</p>
            <a href="#" className="inline-block px-10 py-4 bg-primary text-primary-foreground text-[11px] font-sans font-medium tracking-[0.2em] uppercase rounded-full transition-all duration-300 hover:bg-cream hover:text-primary">{t("editorial.cta")}</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;
