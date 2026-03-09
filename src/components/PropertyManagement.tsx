import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import ZoomParallax from "./ZoomParallax";
import forbesLogo from "@/assets/Forbes_Global_Properties-2.png";

const PropertyManagement = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-background">
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
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-normal tracking-[-0.02em] text-foreground whitespace-pre-line">
              {t("forbes.title")}
            </h2>
            <div className="w-10 h-px bg-primary mx-auto mt-7 mb-5" />
            <p className="font-sans text-sm md:text-base max-w-xl mx-auto font-light tracking-wide text-muted-foreground">
              {t("forbes.desc")}
            </p>
          </motion.div>
        </div>
      </div>

      <ZoomParallax />
    </section>
  );
};

export default PropertyManagement;
