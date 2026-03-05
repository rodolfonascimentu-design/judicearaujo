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
  const isInView = useInView(ref, { once: false, margin: "-80px" });
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

    <div className="max-w-6xl mx-auto relative z-10">
      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
        {/* Left side — branding, enters from left */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#aed9d7] mb-10 font-medium">
            Parceria Global
          </p>

          <img
            src={forbesLogo}
            alt="Judice & Araujo — Forbes Global Properties"
            className="h-28 md:h-32 lg:h-40 object-contain mb-12"
          />

          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-normal text-primary-foreground leading-[1.2] tracking-[-0.02em] mb-8">
            Uma rede global<br />para imóveis extraordinários
          </h2>

          <p className="font-sans text-sm md:text-base text-primary-foreground/60 max-w-md font-light leading-[1.8] tracking-wide">
            A Judice &amp; Araujo faz parte da Forbes Global Properties, uma rede internacional que reúne algumas das mais prestigiadas imobiliárias do mundo.
          </p>
        </motion.div>

        {/* Right side — 2×2 benefit cards, enters from right */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              className="group cursor-default rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 transition-colors duration-300 hover:bg-white/10 hover:border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
              whileHover={{ scale: 1.03, y: -6 }}
            >
              <motion.div
                className="mb-5 w-14 h-14 flex items-center justify-center rounded-full bg-white/10"
                whileHover={{ scale: 1.15, rotate: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <b.icon
                  className="w-6 h-6 text-primary-foreground transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </motion.div>
              <h3 className="font-display text-sm font-normal text-primary-foreground mb-3 tracking-wide group-hover:text-primary-foreground/90 transition-colors duration-300">
                {b.title}
              </h3>
              <p className="font-sans text-xs text-primary-foreground/45 leading-[1.8] font-light group-hover:text-primary-foreground/65 transition-colors duration-300">
                {b.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative line */}
      <motion.div
        className="w-16 h-px bg-primary-foreground/20 mx-auto mb-6"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
         viewport={{ once: false, margin: "-80px" }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />

      {/* Stat — more vivid */}
      <motion.p
        className="font-sans text-lg md:text-xl text-primary-foreground tracking-[0.15em] font-light whitespace-nowrap text-center"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.8 }}
      >
        +<CountUp target={20} duration={1.8} /> países conectados pela rede Forbes Global Properties
      </motion.p>
    </div>
  </section>
);

export default ForbesPartnership;
