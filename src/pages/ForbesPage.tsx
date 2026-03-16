import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Send, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import forbesLogoWhite from "@/assets/forbes-global-white.png";
import jaLogoWhite from "@/assets/logo-ja-white.png";
import heroImg from "@/assets/forbes-hero.jpg";
import docImg1 from "@/assets/forbes-doc-1.jpg";
import parallax1 from "@/assets/parallax-1.jpg";
import parallax4 from "@/assets/parallax-4.jpg";

/* ── Helpers ── */
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-80px" } as any,
  transition: { duration: 0.7, ease: "easeOut" as const },
};

const stagger = (i: number) => ({
  ...fadeUp,
  transition: { ...fadeUp.transition, delay: 0.1 + i * 0.08 },
} as any);

const C = {
  accent: "#003F34",
  accentLight: "rgba(0,63,52,0.06)",
};

const glassCard = {
  background: "linear-gradient(135deg, rgba(0,63,52,0.06) 0%, rgba(0,63,52,0.02) 100%)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  boxShadow: "0 4px 24px -4px rgba(0,63,52,0.08), inset 0 1px 0 rgba(255,255,255,0.8)",
};

/* ── Counter Component ── */
const AnimatedCounter = ({ value, suffix = "", delay = 0 }: { value: number; suffix?: string; delay?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });
  const [displayed, setDisplayed] = useState("0");

  useEffect(() => {
    if (!isInView) {
      setDisplayed("0");
      return;
    }
    const controls = animate(0, value, {
      duration: 2.2,
      delay,
      ease: "easeOut",
      onUpdate: (v) => {
        if (value >= 1000) {
          // format with dot separator for thousands
          setDisplayed(Math.floor(v).toLocaleString("pt-BR"));
        } else {
          setDisplayed(Math.floor(v).toString());
        }
      },
    });
    return () => controls.stop();
  }, [isInView, value, delay]);

  return <span ref={ref}>{displayed}{suffix}</span>;
};

/* ── Stats Data ── */
const forbesStats = [
  { numericValue: 167, suffix: "M+", label: "audiência global" },
  { numericValue: 5.6, suffix: "M+", label: "leitores da revista", decimal: true },
  { numericValue: 100, suffix: "M+", label: "alcance nas redes sociais" },
  { numericValue: 49, suffix: "", label: "edições internacionais" },
  { numericValue: 81, suffix: "", label: "países" },
  { numericValue: 31, suffix: "", label: "idiomas" },
  { numericValue: 100, suffix: "+", label: "anos de história" },
  { numericValue: 100, suffix: "+", label: "eventos globais por ano" },
];

/* ── Animated Decimal Counter ── */
const DecimalCounter = ({ value, suffix = "", delay = 0 }: { value: number; suffix?: string; delay?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });
  const [displayed, setDisplayed] = useState("0");

  useEffect(() => {
    if (!isInView) { setDisplayed("0"); return; }
    const controls = animate(0, value, {
      duration: 2.2,
      delay,
      ease: "easeOut",
      onUpdate: (v) => setDisplayed(v.toFixed(1).replace(".", ",")),
    });
    return () => controls.stop();
  }, [isInView, value, delay]);

  return <span ref={ref}>{displayed}{suffix}</span>;
};

/* ── Media Reach Data ── */
const brandReach = [
  { brand: "Forbes / Forbes Global Properties", value: 78.8 },
  { brand: "Berkshire Hathaway / BHHS", value: 10.7 },
  { brand: "Sotheby's / Sotheby's Int. Real Estate", value: 4.3 },
  { brand: "Christie's / Christie's Int. Real Estate", value: 3.2 },
  { brand: "Coldwell Banker", value: 1.0 },
  { brand: "Savills", value: 0.9 },
  { brand: "Knight Frank", value: 0.8 },
  { brand: "Engel & Völkers", value: 0.2 },
];

const jaAccess = [
  "uma audiência global altamente qualificada",
  "exposição internacional através da marca Forbes",
  "uma rede de imobiliárias líderes em seus mercados",
];

/* ══════════════════════════════════════════════════════════ */

const ForbesPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Forbes Global Properties — Judice & Araujo";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "A Judice & Araujo integra a Forbes Global Properties, conectando o mercado imobiliário de alto padrão do Rio de Janeiro a uma audiência global.");
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const fields = [
    { key: "name", type: "text", label: "Nome completo", required: true },
    { key: "email", type: "email", label: "Seu melhor e-mail", required: true },
    { key: "phone", type: "tel", label: "Telefone com DDD", required: false },
  ] as const;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* ─── HERO ─── */}
        <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <img src={heroImg} alt="Rio de Janeiro luxury coastline" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,63,52,0.3) 0%, transparent 40%, rgba(0,0,0,0.6) 100%)" }} />

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            {/* Logo animation like index — JA | Forbes */}
            <ForbesHeroLogos />

            <motion.h1
              className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-[-0.02em] leading-[1.2] mb-6 mt-16"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.8 }}
            >
              Forbes Global Properties
            </motion.h1>
            <motion.p
              className="font-sans text-base md:text-lg lg:text-xl font-light text-white/80 leading-[1.6] tracking-wide max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3.0 }}
            >
              Conectando o mercado imobiliário de alto padrão do Rio de Janeiro a uma audiência global.
            </motion.p>
          </div>

          {/* Scroll indicator — mouse outline like index */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.4 }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center pt-2">
              <motion.div
                className="w-1 h-2.5 rounded-full bg-white/70"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </section>

        {/* ─── INTRO ─── */}
        <section className="py-28 lg:py-40 px-6 lg:px-12 bg-background">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p {...fadeUp} className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-10 font-medium">
              Forbes Global Properties
            </motion.p>

            <motion.p {...stagger(0)} className="font-sans text-base md:text-lg font-light text-foreground/80 leading-[2] tracking-wide mb-8">
              A Judice & Araujo integra a Forbes Global Properties, uma rede internacional que reúne algumas das mais prestigiadas imobiliárias de alto padrão do mundo.
            </motion.p>

            <motion.p {...stagger(1)} className="font-sans text-base md:text-lg font-light text-foreground/80 leading-[2] tracking-wide mb-8">
              Criada em parceria com a Forbes, uma das marcas de mídia mais influentes do planeta, a rede conecta propriedades excepcionais a compradores sofisticados em escala global.
            </motion.p>

            <motion.p {...stagger(2)} className="font-sans text-base md:text-lg font-light text-foreground/80 leading-[2] tracking-wide">
              Como membro da Forbes Global Properties, a Judice & Araujo representa, com exclusividade, o mercado imobiliário de alto padrão do Rio de Janeiro dentro de uma plataforma internacional dedicada aos imóveis mais exclusivos do mundo.
            </motion.p>
          </div>
        </section>

        {/* ─── FULL-WIDTH IMAGE BREAK ─── */}
        <div className="w-full h-[50vh] md:h-[60vh] overflow-hidden">
          <motion.img
            src={parallax1}
            alt="Propriedade de luxo"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
        </div>

        {/* ─── A FORÇA DA MARCA FORBES ─── */}
        <section className="py-28 lg:py-40 px-6 lg:px-12 bg-background">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-20">
              <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-8 font-medium">A força da marca</p>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-foreground leading-[1.2] mb-8">
                A força da marca Forbes
              </h2>
              <div className="w-12 h-px bg-primary mx-auto mb-10" />
              <p className="font-sans text-base md:text-lg font-light text-foreground/70 leading-[1.9] tracking-wide max-w-3xl mx-auto mb-6">
                A Forbes é uma das marcas de mídia mais reconhecidas globalmente no universo de negócios, empreendedorismo e nos mercado de luxo.
              </p>
              <p className="font-sans text-base md:text-lg font-light text-foreground/70 leading-[1.9] tracking-wide max-w-3xl mx-auto">
                Com mais de um século de história e presença internacional consolidada, a Forbes alcança uma audiência global altamente qualificada.
              </p>
            </motion.div>

            {/* Stats Grid with counter animation & glass cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 mb-16">
              {forbesStats.map((stat, i) => {
                // Counter delays: start from right (index 7) to left (index 0)
                const counterDelay = (forbesStats.length - 1 - i) * 0.15;
                return (
                  <motion.div
                    key={stat.label}
                    className="text-center p-6 rounded-2xl"
                    style={glassCard}
                    {...stagger(i)}
                    whileHover={{ y: -6, scale: 1.03, transition: { duration: 0.3 } }}
                  >
                    <p className="font-display text-2xl md:text-3xl font-medium mb-2" style={{ color: C.accent }}>
                      {stat.decimal ? (
                        <DecimalCounter value={stat.numericValue} suffix={stat.suffix} delay={counterDelay} />
                      ) : (
                        <AnimatedCounter value={stat.numericValue} suffix={stat.suffix} delay={counterDelay} />
                      )}
                    </p>
                    <p className="font-sans text-xs md:text-sm font-light text-foreground/60 tracking-wide">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Pull quote — smaller text */}
            <motion.div {...fadeUp} className="text-center">
              <div className="max-w-3xl mx-auto">
                <motion.blockquote
                  className="font-display text-sm md:text-base lg:text-lg font-normal text-foreground/70 leading-[1.6] italic"
                  {...stagger(0)}
                >
                  "Essa visibilidade global cria um poderoso efeito de marca, ampliando o alcance das propriedades apresentadas através da Forbes Global Properties."
                </motion.blockquote>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── YOUTUBE VIDEO ─── */}
        <section className="py-0 bg-background">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <motion.div
              className="relative aspect-video rounded-[4px] overflow-hidden bg-muted"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <iframe
                src="https://www.youtube.com/embed/rWJ-BwsgbhU?rel=0&modestbranding=1&showinfo=0"
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Forbes Global Properties"
                frameBorder="0"
              />
            </motion.div>
          </div>
        </section>

        {/* ─── CURADORIA INTERNACIONAL ─── */}
        <section className="py-28 lg:py-40 px-6 lg:px-12 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div {...fadeUp}>
                <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-8 font-medium">Curadoria Internacional</p>
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-foreground leading-[1.2] mb-8">
                  Apresentando as propriedades mais excepcionais do mundo
                </h2>
                <div className="w-12 h-px bg-primary mb-8" />
                <p className="font-sans text-base font-light text-foreground/70 leading-[1.9] tracking-wide mb-8">
                  A plataforma da Forbes Global Properties apresenta uma seleção de imóveis extraordinários, que passam por um rigoroso processo de curadoria.
                </p>
                <p className="font-sans text-base font-light text-foreground/70 leading-[1.9] tracking-wide mb-8">
                  Cada propriedade é apresentada com:
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "editorial de alto padrão",
                    "conteúdo visual de qualidade internacional",
                    "distribuição digital para uma audiência global",
                  ].map((item, i) => (
                    <motion.li key={i} className="flex items-start gap-3" {...stagger(i)}>
                      <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: C.accent }} />
                      <span className="font-sans text-sm md:text-base font-light text-foreground/70 leading-[1.8] tracking-wide">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <p className="font-sans text-base font-light text-foreground/70 leading-[1.9] tracking-wide">
                  Essa abordagem combina imobiliário, mídia e tecnologia, ampliando significativamente o alcance das propriedades representadas pela rede.
                </p>
              </motion.div>

              <motion.div
                className="overflow-hidden rounded-lg lg:rounded-none lg:-mr-12 xl:-mr-24"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-80px" }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              >
                <img src={docImg1} alt="Forbes Global Properties editorial" className="w-full h-[400px] lg:h-[560px] object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── MEDIA REACH CHART (digitized) ─── */}
        <section className="py-28 lg:py-40 px-6 lg:px-12 bg-background">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-16">
              <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-8 font-medium">Alcance de Mídia</p>
              <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-medium tracking-[-0.02em] text-foreground leading-[1.2]">
                More earned media reach than any brand globally in the luxury real estate space
              </h2>
              <div className="w-12 h-px bg-primary mx-auto mt-8" />
            </motion.div>

            {/* Animated chart bars */}
            <div className="space-y-5 max-w-3xl mx-auto">
              {brandReach.map((item, i) => (
                <motion.div
                  key={item.brand}
                  className="group"
                  {...stagger(i)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-sans text-xs md:text-sm tracking-wide ${i === 0 ? 'font-medium text-foreground' : 'font-light text-foreground/60'}`}>
                      {item.brand}
                    </span>
                    <AnimatedPercentage value={item.value} delay={0.3 + i * 0.1} highlight={i === 0} />
                  </div>
                  <div className="w-full h-3 rounded-full overflow-hidden" style={{ background: "rgba(0,63,52,0.06)" }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: i === 0 ? C.accent : "rgba(0,63,52,0.2)" }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: false, margin: "-40px" }}
                      transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── J&A + FGP ─── */}
        <section className="py-28 lg:py-40 px-6 lg:px-12 bg-background">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div
                className="order-2 lg:order-1 rounded-lg overflow-hidden"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-80px" }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              >
                <img src={parallax4} alt="Judice & Araujo propriedade" className="w-full h-auto object-cover rounded-lg" />
              </motion.div>

              <motion.div className="order-1 lg:order-2" {...fadeUp}>
                <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-8 font-medium">Nossa Parceria</p>
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-foreground leading-[1.2] mb-8">
                  Judice & Araujo e Forbes Global Properties
                </h2>
                <div className="w-12 h-px bg-primary mb-8" />
                <p className="font-sans text-base font-light text-foreground/70 leading-[1.9] tracking-wide mb-8">
                  A Judice & Araujo se orgulha por ter sido escolhida para integrar a Forbes Global Properties, o que reforça o posicionamento único da empresa como uma referência no mercado imobiliário de alto padrão do Rio de Janeiro.
                </p>
                <p className="font-sans text-base font-light text-foreground/70 leading-[1.9] tracking-wide mb-8">
                  Por meio dessa rede, os imóveis representados pela J&A passam a ter acesso a:
                </p>
                <ul className="space-y-4">
                  {jaAccess.map((item, i) => (
                    <motion.li key={i} className="flex items-start gap-3" {...stagger(i)}>
                      <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: C.accent }} />
                      <span className="font-sans text-sm md:text-base font-light text-foreground/70 leading-[1.8] tracking-wide">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── APRESENTE SUA PROPRIEDADE + CONTACT FORM ─── */}
        <section className="py-28 lg:py-40 px-6 lg:px-12 bg-background">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
              {/* Left — editorial intro */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="lg:sticky lg:top-32 self-start"
              >
                <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-4">
                  Contato
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6 leading-[1.15]">
                  Apresente sua propriedade a uma audiência global
                </h2>
                <p className="font-sans text-sm text-muted-foreground leading-[1.8] mb-8">
                  Se você possui um imóvel de alto padrão e deseja apresentá-lo a compradores internacionais, ou pretende adquirir um imóvel no exterior, entre em contato com a equipe da Judice & Araujo para saber mais sobre nossa atuação na Forbes Global Properties.
                </p>
                <div className="hidden lg:block">
                  <div className="w-16 h-px bg-primary/30" />
                </div>
              </motion.div>

              {/* Right — form */}
              <motion.form
                onSubmit={handleSubmit}
                className="bg-background rounded-lg p-8 md:p-10"
                style={glassCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="space-y-6">
                  {fields.map((field) => (
                    <div key={field.key} className="relative">
                      <label
                        className={`absolute left-0 transition-all duration-300 font-sans pointer-events-none ${
                          focused === field.key || form[field.key]
                            ? "text-[10px] tracking-[0.15em] uppercase -top-1"
                            : "text-sm text-muted-foreground top-3"
                        }`}
                        style={focused === field.key || form[field.key] ? { color: C.accent } : {}}
                      >
                        {field.label}
                        {field.required && <span className="ml-0.5" style={{ color: C.accent }}>*</span>}
                      </label>
                      <input
                        type={field.type}
                        required={field.required}
                        value={form[field.key]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        onFocus={() => setFocused(field.key)}
                        onBlur={() => setFocused(null)}
                        className="w-full bg-transparent border-b-2 border-border px-0 pt-5 pb-2 font-sans text-sm text-foreground focus:outline-none transition-colors duration-300"
                        style={{ borderBottomColor: focused === field.key ? C.accent : undefined }}
                      />
                    </div>
                  ))}

                  {/* Message */}
                  <div className="relative">
                    <label
                      className={`absolute left-0 transition-all duration-300 font-sans pointer-events-none ${
                        focused === "message" || form.message
                          ? "text-[10px] tracking-[0.15em] uppercase -top-1"
                          : "text-sm text-muted-foreground top-3"
                      }`}
                      style={focused === "message" || form.message ? { color: C.accent } : {}}
                    >
                      Mensagem
                    </label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-transparent border-b-2 border-border px-0 pt-5 pb-2 font-sans text-sm text-foreground focus:outline-none transition-colors duration-300 resize-none"
                      style={{ borderBottomColor: focused === "message" ? C.accent : undefined }}
                    />
                  </div>
                </div>

                <p className="font-sans text-[10px] text-muted-foreground leading-relaxed mt-6 mb-6">
                  Ao informar meus dados concordo com a{" "}
                  <a href="#" className="underline hover:text-primary transition-colors">Política de Privacidade</a>{" "}
                  e{" "}
                  <a href="#" className="underline hover:text-primary transition-colors">Termos de Uso</a>.
                </p>

                <motion.button
                  type="submit"
                  className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-sans font-medium tracking-[0.12em] uppercase text-primary-foreground transition-all duration-300"
                  style={{ background: C.accent }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-4 h-4" />
                  Enviar Mensagem
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                </motion.button>
              </motion.form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

/* ── Hero Logos Animation (like index) ── */
const ForbesHeroLogos = () => {
  const [barVisible, setBarVisible] = useState(false);
  const [logosVisible, setLogosVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setBarVisible(true), 0.6 * 1000);
    const t2 = setTimeout(() => setLogosVisible(true), 1.2 * 1000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="flex items-center justify-center gap-0 mb-4">
      <motion.img
        src={jaLogoWhite}
        alt="Judice & Araujo"
        className="h-[28px] lg:h-[34px] w-auto"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: logosVisible ? 1 : 0, x: logosVisible ? 0 : 40 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />
      <motion.div
        className="mx-4"
        style={{ width: "1.5px", height: "34px", background: "rgba(255,255,255,0.6)" }}
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: barVisible ? 1 : 0, scaleY: barVisible ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <motion.img
        src={forbesLogoWhite}
        alt="Forbes Global Properties"
        className="h-[28px] lg:h-[35px] w-auto"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: logosVisible ? 1 : 0, x: logosVisible ? 0 : -40 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />
    </div>
  );
};

/* ── Animated Percentage Label ── */
const AnimatedPercentage = ({ value, delay, highlight }: { value: number; delay: number; highlight: boolean }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-40px" });
  const [displayed, setDisplayed] = useState("0%");

  useEffect(() => {
    if (!isInView) { setDisplayed("0%"); return; }
    const controls = animate(0, value, {
      duration: 1.2,
      delay,
      ease: "easeOut",
      onUpdate: (v) => setDisplayed(v.toFixed(1).replace(".", ",") + "%"),
    });
    return () => controls.stop();
  }, [isInView, value, delay]);

  return (
    <span
      ref={ref}
      className={`font-display text-sm md:text-base min-w-[55px] text-right ${highlight ? 'font-medium text-foreground' : 'font-light text-foreground/50'}`}
    >
      {displayed}
    </span>
  );
};

export default ForbesPage;
