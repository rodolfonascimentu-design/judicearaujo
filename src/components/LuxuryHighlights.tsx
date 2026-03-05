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
    <section id="bairros" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          title="Categorias Exclusivas"
          subtitle="Explore nossas coleções curadas de imóveis de alto padrão"
        />
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-6 lg:px-12 pb-4 snap-x snap-mandatory scrollbar-hide cursor-grab"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            className="relative flex-shrink-0 w-[320px] md:w-[400px] h-[500px] md:h-[550px] overflow-hidden snap-start group cursor-pointer"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
            {/* Glow effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gold/10" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold-light mb-2">
                {cat.subtitle}
              </p>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-cream">
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
