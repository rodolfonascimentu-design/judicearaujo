import { motion, useInView } from "framer-motion";
import { Globe, Building2, Target, TrendingUp } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import forbesLogo from "@/assets/Forbes_Global_Properties-2.png";

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
  <section className="py-36 lg:py-52 px-6 lg:px-12 bg-primary relative overflow-hidden">
    {/* Subtle background glow */}
    <div className="absolute inset-0 opacity-[0.07]" style={{
      background: "radial-gradient(ellipse 60% 50% at 50% 40%, hsl(var(--gold-light)), transparent)"
    }} />

    <div className="max-w-5xl mx-auto text-center relative z-10">
      {/* Label */}
      <motion.p
        className="font-sans text-[10px] tracking-[0.4em] uppercase text-[hsl(var(--gold-light))] mb-10 font-medium"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Parceria Global
      </motion.p>

      {/* Headline */}
      <motion.h2
        className="font-display text-2xl md:text-3xl lg:text-4xl font-medium text-primary-foreground leading-[1.2] tracking-[-0.02em] mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, delay: 0.4 }}
      >
        Uma rede global para imóveis extraordinários
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="font-sans text-sm md:text-base text-primary-foreground/60 max-w-2xl mx-auto font-light leading-[1.8] tracking-wide"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, delay: 0.6 }}
      >
        A Judice &amp; Araujo faz parte da Forbes Global Properties, uma rede internacional que reúne algumas das mais prestigiadas imobiliárias do mundo.
      </motion.p>

      {/* Combined Logo — large, cinematic entrance */}
      <motion.div
        className="my-20 lg:my-24 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
      >
        <img
          src={forbesLogo}
          alt="Judice & Araujo — Forbes Global Properties"
          className="h-20 md:h-24 lg:h-28 object-contain"
        />
      </motion.div>

      {/* Benefits grid — glassmorphism cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            className="text-center group cursor-default rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 transition-colors duration-300 hover:bg-white/10 hover:border-white/20"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 1.0 + i * 0.15 }}
            whileHover={{ scale: 1.03, y: -6 }}
          >
            <motion.div
              className="mx-auto mb-5 w-14 h-14 flex items-center justify-center rounded-full bg-white/10"
              whileHover={{ scale: 1.15, rotate: 6 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <b.icon
                className="w-6 h-6 text-primary-foreground/70 group-hover:text-[hsl(var(--gold-light))] transition-colors duration-300"
                strokeWidth={1.5}
              />
            </motion.div>
            <h3 className="font-display text-sm font-medium text-primary-foreground mb-3 tracking-wide group-hover:text-primary-foreground/90 transition-colors duration-300">
              {b.title}
            </h3>
            <p className="font-sans text-xs text-primary-foreground/45 leading-[1.8] font-light group-hover:text-primary-foreground/65 transition-colors duration-300">
              {b.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Decorative line */}
      <motion.div
        className="w-16 h-px bg-primary-foreground/20 mx-auto mb-6"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.2 }}
      />

      {/* Stat */}
      <motion.p
        className="font-sans text-base md:text-lg text-primary-foreground/50 tracking-[0.15em] font-light whitespace-nowrap"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 1.4 }}
      >
        +<CountUp target={20} duration={1.8} /> países conectados pela rede Forbes Global Properties
      </motion.p>
    </div>
  </section>
);

export default ForbesPartnership;
