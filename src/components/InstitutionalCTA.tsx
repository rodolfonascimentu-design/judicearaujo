import { motion } from "framer-motion";
import { Check } from "lucide-react";
import ctaImage from "@/assets/cta-proprietarios.jpg";

const benefits = [
  "Avaliação profissional do imóvel",
  "Divulgação para compradores qualificados",
  "Alcance internacional",
];

const InstitutionalCTA = () => (
  <section className="py-28 lg:py-40 px-6 lg:px-12 bg-background">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left column */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground font-medium mb-6">
          Proprietários
        </p>
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-foreground tracking-[-0.02em] leading-[1.2] mb-8">
          Venda seu imóvel com segurança e máxima valorização
        </h2>
        <p className="font-sans text-sm md:text-base text-muted-foreground max-w-xl mb-10 font-light leading-relaxed tracking-wide">
          Conte com a experiência da Judice &amp; Araujo para posicionar seu imóvel entre os compradores certos. Nossa equipe especializada utiliza estratégias de divulgação de alto padrão para conectar seu imóvel a compradores qualificados no Brasil e no exterior.
        </p>

        <ul className="space-y-4 mb-12">
          {benefits.map((b) => (
            <li key={b} className="flex items-center gap-3 text-sm text-foreground font-light tracking-wide">
              <Check className="w-4 h-4 text-primary flex-shrink-0" />
              {b}
            </li>
          ))}
        </ul>

        <a
          href="#avaliar"
          className="inline-block px-10 py-4 bg-cream text-primary text-[11px] font-sans font-medium tracking-[0.2em] uppercase rounded-full transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
        >
          Avaliar meu imóvel
        </a>
        <p className="mt-4 text-xs text-muted-foreground font-light tracking-wide">
          Avaliação rápida e confidencial.
        </p>
      </motion.div>

      {/* Right column */}
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img
          src={ctaImage}
          alt="Interior luxuoso com vista privilegiada"
          className="w-full aspect-[3/4] object-cover rounded-lg shadow-lg"
          loading="lazy"
        />
      </motion.div>
    </div>
  </section>
);

export default InstitutionalCTA;
