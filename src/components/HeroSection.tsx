import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search } from "lucide-react";
import heroImage from "@/assets/hero-luxury.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Background image with scroll effect */}
      <motion.div className="absolute inset-0" style={{ scale }}>
        <img
          src={heroImage}
          alt="Interior de luxo com vista panorâmica do Rio de Janeiro"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/30 to-charcoal/70" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center"
        style={{ opacity, y }}
      >
        <motion.p
          className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-gold-light mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Desde 1978 · Rio de Janeiro
        </motion.p>

        <motion.h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-cream max-w-4xl leading-[1.1] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Viver com exclusividade no Rio de Janeiro
        </motion.h1>

        <motion.p
          className="font-sans text-base md:text-lg text-cream/70 max-w-xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Imóveis únicos nos endereços mais prestigiados
        </motion.p>

        {/* Search bar */}
        <motion.div
          className="w-full max-w-3xl bg-cream/10 backdrop-blur-md border border-cream/20 rounded-sm p-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row gap-2">
            <input
              type="text"
              placeholder="Localização"
              className="flex-1 bg-transparent border-b md:border-b-0 md:border-r border-cream/20 px-4 py-3 text-sm text-cream placeholder:text-cream/50 focus:outline-none font-sans"
            />
            <select className="flex-1 bg-transparent border-b md:border-b-0 md:border-r border-cream/20 px-4 py-3 text-sm text-cream/50 focus:outline-none font-sans appearance-none">
              <option>Tipo</option>
              <option>Apartamento</option>
              <option>Cobertura</option>
              <option>Casa</option>
            </select>
            <select className="flex-1 bg-transparent px-4 py-3 text-sm text-cream/50 focus:outline-none font-sans appearance-none">
              <option>Faixa de Preço</option>
              <option>Até R$ 3M</option>
              <option>R$ 3M - 8M</option>
              <option>Acima de R$ 8M</option>
            </select>
            <button className="bg-gold hover:bg-gold-light text-cream px-6 py-3 text-sm font-sans font-medium tracking-wider uppercase transition-colors flex items-center justify-center gap-2">
              <Search className="w-4 h-4" />
              Buscar
            </button>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex gap-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <a
            href="#imoveis"
            className="px-8 py-3 bg-gold hover:bg-gold-light text-cream text-sm font-sans font-medium tracking-wider uppercase transition-colors"
          >
            Ver Imóveis
          </a>
          <a
            href="#contato"
            className="px-8 py-3 border border-cream/40 hover:border-gold text-cream hover:text-gold text-sm font-sans font-medium tracking-wider uppercase transition-colors"
          >
            Agendar Consultoria
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
