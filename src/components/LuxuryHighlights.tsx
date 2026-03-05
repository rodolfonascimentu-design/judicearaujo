import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import lifestyleCampo from "@/assets/lifestyle-campo.jpg";
import lifestylePraia from "@/assets/lifestyle-praia.jpg";
import lifestyleApartamento from "@/assets/lifestyle-apartamento.jpg";
import lifestyleCasas from "@/assets/lifestyle-casas.jpg";

const categories = [
  {
    image: lifestyleCampo,
    title: "Campo",
    description: "Refúgio, natureza e privacidade.",
    href: "#campo",
  },
  {
    image: lifestylePraia,
    title: "Praia",
    description: "Vista infinita e estilo de vida à beira-mar.",
    href: "#praia",
  },
  {
    image: lifestyleApartamento,
    title: "Apartamento",
    description: "Conforto, sofisticação e localização privilegiada.",
    href: "#apartamento",
  },
  {
    image: lifestyleCasas,
    title: "Casas",
    description: "Espaço, exclusividade e design.",
    href: "#casas",
  },
];

const LuxuryHighlights = () => {
  return (
    <section id="bairros" className="py-32 lg:py-44 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          title="Encontre o imóvel do seu jeito"
          subtitle="Explore diferentes estilos de imóveis de alto padrão e descubra o que combina com o seu estilo de vida."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.title}
              href={cat.href}
              className="relative h-[520px] md:h-[580px] overflow-hidden group cursor-pointer rounded-[4px] block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 rounded-[4px]"
                loading="lazy"
              />
              {/* Base gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent rounded-[4px]" />
              {/* Green overlay on hover */}
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[4px]" />

              <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                <h3 className="font-display text-2xl md:text-3xl font-medium text-cream tracking-[-0.01em] transition-all duration-500 group-hover:text-white">
                  {cat.title}
                </h3>
                <p className="font-sans text-sm text-cream/50 mt-2 font-light tracking-wide transition-all duration-500 group-hover:text-white/90">
                  {cat.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryHighlights;
