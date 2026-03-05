import { motion } from "framer-motion";
import { BarChart3, Megaphone, Globe } from "lucide-react";
import ctaImage from "@/assets/cta-proprietarios.jpg";

const benefits = [
  { text: "Avaliação profissional do imóvel", icon: BarChart3 },
  { text: "Divulgação para compradores qualificados", icon: Megaphone },
  { text: "Alcance internacional", icon: Globe },
];

const InstitutionalCTA = () => (
  <section className="py-32 lg:py-44 bg-primary">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Image */}
        <motion.div
          className="relative overflow-hidden rounded-[4px] aspect-[3/4] lg:aspect-auto lg:h-[700px]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={ctaImage}
            alt="Interior luxuoso com vista privilegiada"
            className="w-full h-full object-cover rounded-[4px]"
            loading="lazy"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="lg:py-16"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-primary-foreground/50 mb-8 font-medium">
            Proprietários
          </p>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium text-primary-foreground leading-[1.2] mb-10 tracking-[-0.02em]">
            Venda seu imóvel com segurança e máxima valorização
          </h2>
          <div className="w-10 h-px bg-primary-foreground/30 mb-10" />
          <p className="font-sans text-sm text-primary-foreground/70 leading-[1.9] mb-12 font-light">
            Conte com a experiência da Judice &amp; Araujo para posicionar seu imóvel entre os compradores certos. Nossa equipe especializada utiliza estratégias de divulgação de alto padrão para conectar seu imóvel a compradores qualificados no Brasil e no exterior.
          </p>

          <ul className="space-y-5 mb-12">
            {benefits.map((b) => (
              <li key={b.text} className="flex items-center gap-4 text-sm text-primary-foreground/90 font-light tracking-wide">
                <b.icon className="w-5 h-5 text-primary-foreground/60 flex-shrink-0" strokeWidth={1.5} />
                {b.text}
              </li>
            ))}
          </ul>

          <a
            href="#avaliar"
            className="inline-block px-10 py-4 bg-cream text-primary text-[11px] font-sans font-medium tracking-[0.2em] uppercase rounded-full transition-all duration-300 hover:bg-primary-foreground hover:text-primary"
          >
            Avaliar meu imóvel
          </a>
          <p className="mt-4 text-xs text-primary-foreground/40 font-light tracking-wide">
            Avaliação rápida e confidencial.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default InstitutionalCTA;
