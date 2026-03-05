import { motion } from "framer-motion";
import ctaBg from "@/assets/cta-bg.jpg";

const CTASection = () => (
  <section id="contato" className="relative py-32 lg:py-40 overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img
        src={ctaBg}
        alt="Vista panorâmica do Rio de Janeiro"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-charcoal/75" />
    </div>

    {/* Content */}
    <motion.div
      className="relative z-10 text-center px-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium text-cream max-w-3xl mx-auto leading-[1.15] mb-6">
        Encontre o imóvel dos seus sonhos
      </h2>
      <p className="font-sans text-base md:text-lg text-cream/70 max-w-xl mx-auto mb-10">
        Agende uma consultoria exclusiva com nossos especialistas
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#"
          className="px-10 py-4 bg-gold hover:bg-gold-light text-cream text-sm font-sans font-medium tracking-wider uppercase transition-colors"
        >
          Agendar Consultoria
        </a>
        <a
          href="#"
          className="px-10 py-4 border border-cream/40 hover:border-gold text-cream hover:text-gold text-sm font-sans font-medium tracking-wider uppercase transition-colors"
        >
          Fale Conosco
        </a>
      </div>
    </motion.div>
  </section>
);

export default CTASection;
