import { motion, useInView } from "framer-motion";
import { Shield, Users, TrendingUp } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useNavigate } from "react-router-dom";

const ForbesPartnership = () => {
  const { t } = useLanguage();

  const pillars = [
    { icon: Shield, title: t("pm.pillar1"), description: t("pm.pillar1Desc") },
    { icon: Users, title: t("pm.pillar2"), description: t("pm.pillar2Desc") },
    { icon: TrendingUp, title: t("pm.pillar3"), description: t("pm.pillar3Desc") },
  ];

  return (
    <section className="py-36 lg:py-52 px-6 lg:px-12 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07]" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 40%, hsl(var(--gold-light)), transparent)" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
          <motion.div className="text-left" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 1, ease: "easeOut" }}>
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#aed9d7] mb-10 font-medium">{t("pm.title")}</p>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-normal text-primary-foreground leading-[1.2] tracking-[-0.02em] mb-8 whitespace-pre-line">{t("pm.subtitle")}</h2>
            <p className="font-sans text-sm md:text-base text-primary-foreground/60 max-w-md font-light leading-[1.8] tracking-wide mb-6">{t("pm.intro")}</p>
            <div className="space-y-3">
              {[t("pm.narrative1"), t("pm.narrative2")].map((text, i) => (
                <motion.p key={i} className="font-sans text-[14px] text-primary-foreground/50 font-light leading-[1.85] tracking-wide" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-60px" }} transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}>
                  {text}
                </motion.p>
              ))}
            </div>
            <motion.div className="mt-8 pl-5 border-l-2 border-primary-foreground/20" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-60px" }} transition={{ duration: 0.6, delay: 0.5 }}>
              <p className="font-display text-lg md:text-xl text-primary-foreground leading-snug">{t("pm.quote1")}</p>
              <p className="font-display text-lg md:text-xl text-primary-foreground leading-snug mt-1">{t("pm.quote2")}</p>
            </motion.div>
            <motion.button className="mt-10 px-10 py-4 rounded-full text-[12px] font-sans font-semibold tracking-[0.15em] uppercase bg-primary-foreground text-primary transition-shadow duration-300 hover:shadow-[0_6px_20px_-4px_hsl(var(--primary)/0.4)]" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-40px" }} transition={{ duration: 0.5, delay: 0.6 }}>
              {t("pm.cta")}
            </motion.button>
          </motion.div>

          <motion.div className="flex flex-col gap-6" initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}>
            {pillars.map((b, i) => (
              <motion.div key={b.title} className="group cursor-default rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 transition-colors duration-300 hover:bg-white/10 hover:border-white/20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }} whileHover={{ scale: 1.03, y: -6 }}>
                <motion.div className="mb-5 w-14 h-14 flex items-center justify-center rounded-full bg-white/10" whileHover={{ scale: 1.15, rotate: 6 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                  <b.icon className="w-6 h-6 text-primary-foreground transition-colors duration-300" strokeWidth={1.5} />
                </motion.div>
                <h3 className="font-display text-sm font-normal text-primary-foreground mb-3 tracking-wide group-hover:text-primary-foreground/90 transition-colors duration-300">{b.title}</h3>
                <p className="font-sans text-xs text-primary-foreground/45 leading-[1.8] font-light group-hover:text-primary-foreground/65 transition-colors duration-300">{b.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForbesPartnership;
