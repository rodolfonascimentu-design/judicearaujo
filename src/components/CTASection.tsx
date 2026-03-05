import { motion } from "framer-motion";
import ctaBg from "@/assets/cta-bg.jpg";

const CTASection = () => (
  <section id="contato" className="relative py-40 lg:py-52 overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img
        src={ctaBg}
        alt="Vista panorâmica do Rio de Janeiro"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-charcoal/80" />
    </div>

    {/* Content */}
    <motion.div
      className="relative z-10 text-center px-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
    >
      <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-normal text-cream max-w-3xl mx-auto leading-[1.15] mb-8 tracking-[0.06em] uppercase">
        Encontre o imóvel dos seus sonhos
      </h2>
      <div className="w-12 h-px bg-cream/30 mx-auto mb-8" />
      <p className="font-sans text-sm md:text-base text-cream/50 max-w-md mx-auto mb-12 font-light tracking-wide">
        Agende uma consultoria exclusiva com nossos especialistas
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#"
          className="px-12 py-4 bg-primary hover:bg-gold-light text-primary-foreground text-[11px] font-sans font-medium tracking-[0.25em] uppercase transition-colors"
        >
          Agendar Consultoria
        </a>
        <a
          href="#"
          className="px-12 py-4 border border-cream/20 hover:border-cream/50 text-cream text-[11px] font-sans font-medium tracking-[0.25em] uppercase transition-colors"
        >
          Fale Conosco
        </a>
      </div>
    </motion.div>
  </section>
);

export default CTASection;
