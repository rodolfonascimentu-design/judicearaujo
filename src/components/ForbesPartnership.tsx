import { motion, useInView } from "framer-motion";
import { Globe, Building2, Target, TrendingUp } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import logoJA from "@/assets/logo-ja.png";
import forbesLogo from "@/assets/forbes-global-white.png";

const benefits = [
  {
    icon: Globe,
    title: "Alcance internacional",
    description: "Seu imóvel conectado a compradores qualificados em diversos países.",
  },
  {
    icon: Building2,
    title: "Rede global de luxo",
    description: "Parceiros selecionados nos mercados mais prestigiados do mundo.",
  },
  {
    icon: Target,
    title: "Exposição qualificada",
    description: "Divulgação estratégica para um público altamente seleto.",
  },
  {
    icon: TrendingUp,
    title: "Marketing internacional",
    description: "Estratégias globais que ampliam a visibilidade dos imóveis.",
  },
];

function CountUp({ target, duration = 2 }: { target: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = Math.ceil(target / (duration * 60));
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 1000 / 60);
    return () => clearInterval(interval);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

const ForbesPartnership = () => (
  <section className="py-32 lg:py-44 px-6 lg:px-12 bg-primary">
    <div className="max-w-5xl mx-auto text-center">
      {/* Logos — above label */}
      <motion.div
        className="flex items-center justify-center gap-8 mb-12"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <img src={logoJA} alt="Judice & Araujo" className="h-7 lg:h-8 object-contain brightness-0 invert opacity-90" />
        <div className="w-px h-10 bg-primary-foreground/30" />
        <img src={forbesLogo} alt="Forbes Global Properties" className="h-10 lg:h-12 object-contain opacity-90" />
      </motion.div>

      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-primary-foreground/50 mb-8 font-medium">
          Parceria Global
        </p>
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium text-primary-foreground leading-[1.2] tracking-[-0.02em] mb-6">
          Uma rede global para imóveis extraordinários
        </h2>
        <p className="font-sans text-sm md:text-base text-primary-foreground/60 max-w-2xl mx-auto font-light leading-[1.8] tracking-wide">
          A Judice &amp; Araujo faz parte da Forbes Global Properties, uma rede internacional que reúne algumas das mais prestigiadas imobiliárias do mundo.
        </p>
      </motion.div>

      {/* Benefits grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mt-16 lg:mt-20 mb-16">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            className="text-center group cursor-default"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <motion.div
              className="mx-auto mb-4 w-10 h-10 flex items-center justify-center"
              whileHover={{ scale: 1.2, rotate: 6 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <b.icon className="w-6 h-6 text-primary-foreground/60 group-hover:text-primary-foreground transition-colors duration-300" strokeWidth={1.5} />
            </motion.div>
            <h3 className="font-display text-sm font-medium text-primary-foreground mb-2 tracking-wide">
              {b.title}
            </h3>
            <p className="font-sans text-xs text-primary-foreground/50 leading-[1.8] font-light">
              {b.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Stat with counter */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <p className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-primary-foreground mb-3">
          +<CountUp target={20} duration={1.8} /> países
        </p>
        <p className="font-sans text-sm md:text-base text-primary-foreground/50 tracking-wide font-light">
          conectados pela rede Forbes Global Properties
        </p>
      </motion.div>
    </div>
  </section>
);

export default ForbesPartnership;
