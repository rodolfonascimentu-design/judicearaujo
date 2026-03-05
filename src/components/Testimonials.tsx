import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    quote: "A Judice & Araujo encontrou o apartamento perfeito para nossa família no Leblon. O atendimento foi impecável do início ao fim.",
    name: "Mariana & Pedro Vasconcellos",
    location: "Leblon",
  },
  {
    quote: "Profissionalismo e discrição incomparáveis. Venderam nossa cobertura em Ipanema acima do valor que esperávamos.",
    name: "Ricardo Almeida",
    location: "Ipanema",
  },
  {
    quote: "Uma experiência de consultoria imobiliária que realmente entende o significado de luxo e exclusividade.",
    name: "Ana Clara Montenegro",
    location: "Lagoa",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-background">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="Depoimentos" />

        <div className="relative min-h-[250px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Quote marks */}
              <span className="font-serif text-6xl text-gold/30 leading-none block mb-4">"</span>
              <p className="font-serif text-xl md:text-2xl italic text-foreground leading-relaxed mb-8 max-w-3xl">
                {testimonials[current].quote}
              </p>
              <p className="font-sans text-sm font-medium text-foreground tracking-wider uppercase">
                {testimonials[current].name}
              </p>
              <p className="font-sans text-xs text-muted-foreground tracking-wider uppercase mt-1">
                {testimonials[current].location}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-gold w-6" : "bg-border"
              }`}
              aria-label={`Depoimento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
