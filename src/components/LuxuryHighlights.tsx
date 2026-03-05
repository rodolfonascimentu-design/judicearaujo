import { useRef } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import highlightBeachfront from "@/assets/highlight-beachfront.jpg";
import highlightPenthouse from "@/assets/highlight-penthouse.jpg";
import highlightHistoric from "@/assets/highlight-historic.jpg";
import highlightContemporary from "@/assets/highlight-contemporary.jpg";

const categories = [
  { image: highlightBeachfront, title: "Frente para o Mar", subtitle: "Beachfront" },
  { image: highlightPenthouse, title: "Coberturas", subtitle: "Penthouses" },
  { image: highlightHistoric, title: "Casarões Históricos", subtitle: "Historic Mansions" },
  { image: highlightContemporary, title: "Arquitetura Contemporânea", subtitle: "Contemporary" },
];

const LuxuryHighlights = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="bairros" className="py-32 lg:py-44 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          title="Categorias Exclusivas"
          subtitle="Explore nossas coleções curadas de imóveis de alto padrão"
        />
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto px-6 lg:px-12 pb-4 snap-x snap-mandatory scrollbar-hide cursor-grab"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            className="relative flex-shrink-0 w-[300px] md:w-[380px] h-[520px] md:h-[580px] overflow-hidden snap-start group cursor-pointer rounded-[4px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 rounded-[4px]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent rounded-[4px]" />
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-primary/15 via-transparent to-transparent rounded-[4px]" />
            <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-cream/50 mb-3 font-light">
                {cat.subtitle}
              </p>
              <h3 className="font-display text-xl md:text-2xl font-medium text-cream tracking-[-0.01em]">
                {cat.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LuxuryHighlights;
