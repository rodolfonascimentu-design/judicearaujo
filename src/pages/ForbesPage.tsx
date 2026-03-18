import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView, animate } from "framer-motion";
import { Send, ArrowRight, ChevronLeft, ChevronRight, X, Maximize } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImmersiveScrollGallery from "@/components/ui/immersive-scroll-gallery";

import forbesLogoWhite from "@/assets/forbes-global-white.png";
import jaLogoWhite from "@/assets/logo-ja-white.png";
import docImg1 from "@/assets/forbes-doc-1.jpg";
import chartImg from "@/assets/forbes-chart.jpg";

import forbesGallery1 from "@/assets/forbes-gallery-1.jpg";
import forbesGallery2 from "@/assets/forbes-gallery-2.jpg";
import forbesGallery3 from "@/assets/forbes-gallery-3.jpg";
import forbesGallery4 from "@/assets/forbes-gallery-4.jpg";
import forbesGallery5 from "@/assets/forbes-gallery-5.jpg";
import forbesGallery6 from "@/assets/forbes-gallery-6.jpg";
import partnershipBg from "@/assets/forbes-cobertura-2.png";
import forbesLogoBW from "@/assets/forbes-logo-bw.png";

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

const glassCardWhite = {
  background: "linear-gradient(135deg, rgba(0,63,52,0.06) 0%, rgba(0,63,52,0.02) 100%)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  boxShadow: "0 4px 24px -4px rgba(0,63,52,0.08), inset 0 1px 0 rgba(255,255,255,0.8)",
};

const glassCardDark = {
  background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  boxShadow: "0 4px 24px -4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
};

/* ── Counter Component ── */
const AnimatedCounter = ({ value, suffix = "", delay = 0 }: { value: number; suffix?: string; delay?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });
  const [displayed, setDisplayed] = useState("0");

  useEffect(() => {
    if (!isInView) { setDisplayed("0"); return; }
    const controls = animate(0, value, {
      duration: 2.2,
      delay,
      ease: "easeOut",
      onUpdate: (v) => {
        if (value >= 1000) {
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

/* ── Decimal Counter ── */
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

const jaAccess = [
  "uma audiência global altamente qualificada",
  "exposição internacional através da marca Forbes",
  "uma rede de imobiliárias líderes em seus mercados",
  "compradores de alto poder aquisitivo ao redor do mundo",
];

/* ── Gallery Images (6 photos) ── */
const galleryImages = [forbesGallery1, forbesGallery2, forbesGallery3, forbesGallery4, forbesGallery5, forbesGallery6];

/* ── Document Images for Lightbox ── */
const docImages = [
  { src: docImg1, alt: "Forbes Global Properties — Visão editorial" },
  { src: chartImg, alt: "Forbes Global Properties — Alcance de mídia" },
];

/* ══════════════════════════════════════════════════════════ */

const ForbesPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  /* Lightbox for doc images */
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  }, []);

  const goNextLB = useCallback(() => {
    setLightboxIndex((i) => (i + 1) % docImages.length);
  }, []);

  const goPrevLB = useCallback(() => {
    setLightboxIndex((i) => (i - 1 + docImages.length) % docImages.length);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNextLB();
      if (e.key === "ArrowLeft") goPrevLB();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, closeLightbox, goNextLB, goPrevLB]);

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
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main>
        {/* ─── HERO — Video + Logo Animation ─── */}
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="/videos/forbes-hero.mp4"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,63,52,0.2) 0%, transparent 40%, rgba(0,0,0,0.5) 100%)" }} />

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <ForbesHeroLogos />
          </div>

          {/* Scroll indicator — clickable */}
          <motion.button
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.6 }}
            onClick={() => {
              const intro = document.getElementById("forbes-intro");
              if (intro) intro.scrollIntoView({ behavior: "smooth" });
            }}
            aria-label="Scroll para baixo"
          >
            <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center pt-2">
              <motion.div
                className="w-1 h-2.5 rounded-full bg-white/70"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.button>
        </section>

        {/* ─── INTRO — White ─── */}
        <section id="forbes-intro" className="py-20 lg:py-28 px-6 lg:px-12 bg-white">
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

        {/* ─── IMMERSIVE SCROLL GALLERY — White ─── */}
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 pb-4">
            <motion.p {...fadeUp} className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-medium mb-2 text-center">
              Portfólio exclusivo
            </motion.p>
          </div>
          <ImmersiveScrollGallery
            images={galleryImages.map((src) => ({ src, scale: null }))}
            className="h-[160vh]"
          />
        </section>

        {/* ─── A FORÇA DA MARCA — Green ─── */}
        <section className="bg-primary py-24 lg:py-36 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            {/* Title + Forbes Logo */}
            <motion.div {...fadeUp} className="text-center mb-16">
              <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-primary-foreground/60 mb-10 font-medium">
                A força da marca
              </p>
              <motion.img
                src={forbesLogoBW}
                alt="Forbes Global Properties"
                className="h-[60px] md:h-[80px] lg:h-[100px] w-auto mx-auto"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, margin: "-80px" }}
                transition={{ duration: 1, ease: "easeOut" }}
              />

            </motion.div>

            <motion.div {...fadeUp} className="text-center mb-16">
              <div className="w-12 h-px bg-primary-foreground/30 mx-auto mb-8" />
              <p className="font-sans text-base md:text-lg font-light text-primary-foreground/70 leading-[1.9] tracking-wide max-w-3xl mx-auto mb-4">
                A Forbes é uma das marcas de mídia mais reconhecidas globalmente no universo de negócios, empreendedorismo e nos mercado de luxo.
              </p>
              <p className="font-sans text-base md:text-lg font-light text-primary-foreground/70 leading-[1.9] tracking-wide max-w-3xl mx-auto">
                Com mais de um século de história e presença internacional consolidada, a Forbes alcança uma audiência global altamente qualificada.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 mb-16">
              {forbesStats.map((stat, i) => {
                const counterDelay = (forbesStats.length - 1 - i) * 0.15;
                return (
                  <motion.div
                    key={stat.label}
                    className="text-center p-6 rounded-2xl border border-white/10"
                    style={glassCardDark}
                    {...stagger(i)}
                    whileHover={{ y: -6, scale: 1.03, transition: { duration: 0.3 } }}
                  >
                    <p className="font-display text-2xl md:text-3xl font-medium mb-2 text-primary-foreground">
                      {stat.decimal ? (
                        <DecimalCounter value={stat.numericValue} suffix={stat.suffix} delay={counterDelay} />
                      ) : (
                        <AnimatedCounter value={stat.numericValue} suffix={stat.suffix} delay={counterDelay} />
                      )}
                    </p>
                    <p className="font-sans text-xs md:text-sm font-light text-primary-foreground/50 tracking-wide">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Pull quote */}
            <motion.div {...fadeUp} className="text-center">
              <blockquote className="font-display text-xs md:text-sm font-normal text-primary-foreground/50 leading-[1.6] italic max-w-2xl mx-auto">
                "Essa visibilidade global cria um poderoso efeito de marca, ampliando o alcance das propriedades apresentadas através da Forbes Global Properties."
              </blockquote>
            </motion.div>
          </div>
        </section>

        {/* ─── YOUTUBE VIDEO — Green ─── */}
        <section className="py-20 lg:py-28 px-6 lg:px-12 bg-primary">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="relative aspect-video rounded-[4px] overflow-hidden"
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

        {/* ─── CURADORIA INTERNACIONAL — White with zoomable images ─── */}
        <section className="py-28 lg:py-40 px-6 lg:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
              <motion.div {...fadeUp}>
                <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-8 font-medium">Curadoria Internacional</p>
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-foreground leading-[1.2] mb-8">
                  Apresentando as propriedades mais excepcionais do mundo
                </h2>
                <div className="w-12 h-px bg-border mb-8" />
                <p className="font-sans text-base font-light text-muted-foreground leading-[1.9] tracking-wide mb-8">
                  A plataforma da Forbes Global Properties apresenta uma seleção de imóveis extraordinários, que passam por um rigoroso processo de curadoria.
                </p>
                <p className="font-sans text-base font-light text-muted-foreground leading-[1.9] tracking-wide mb-8">
                  Cada propriedade é apresentada com:
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "editorial de alto padrão",
                    "conteúdo visual de qualidade internacional",
                    "distribuição digital para uma audiência global",
                  ].map((item, i) => (
                    <motion.li key={i} className="flex items-start gap-3" {...stagger(i)}>
                      <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-primary" />
                      <span className="font-sans text-sm md:text-base font-light text-muted-foreground leading-[1.8] tracking-wide">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <p className="font-sans text-base font-light text-muted-foreground leading-[1.9] tracking-wide">
                  Essa abordagem combina imobiliário, mídia e tecnologia, ampliando significativamente o alcance das propriedades representadas pela rede.
                </p>
              </motion.div>

              {/* Right side — two zoomable document images */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-80px" }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              >
                {docImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => openLightbox(i)}
                    className="group relative w-full overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 block"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                      <Maximize className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                    </div>
                  </button>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── NOSSA PARCERIA — Green ─── */}
        <section className="py-28 lg:py-40 px-6 lg:px-12 bg-primary">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div {...fadeUp}>
                <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-primary-foreground/50 mb-8 font-medium">Nossa Parceria</p>
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-primary-foreground leading-[1.2] mb-8">
                  Judice & Araujo e Forbes Global Properties
                </h2>
                <div className="w-12 h-px bg-primary-foreground/30 mb-8" />
                <p className="font-sans text-base font-light text-primary-foreground/70 leading-[1.9] tracking-wide mb-8">
                  A Judice & Araujo se orgulha por ter sido escolhida para integrar a Forbes Global Properties, o que reforça o posicionamento único da empresa como uma referência no mercado imobiliário de alto padrão do Rio de Janeiro.
                </p>
                <p className="font-sans text-base font-light text-primary-foreground/70 leading-[1.9] tracking-wide mb-8">
                  Por meio dessa rede, os imóveis representados pela J&A passam a ter acesso a:
                </p>
                <ul className="space-y-4">
                  {jaAccess.map((item, i) => (
                    <motion.li key={i} className="flex items-start gap-3" {...stagger(i)}>
                      <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-primary-foreground/40" />
                      <span className="font-sans text-sm md:text-base font-light text-primary-foreground/60 leading-[1.8] tracking-wide">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <p className="font-sans text-base font-light text-primary-foreground/70 leading-[1.9] tracking-wide mt-8">
                  Essa parceria também permite que nossos clientes acessem os imóveis mais incríveis do mercado internacional de alto padrão, com discrição e segurança.
                </p>
              </motion.div>

              <motion.div
                className="rounded-lg overflow-hidden"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-80px" }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              >
                <img src={partnershipBg} alt="Judice & Araujo propriedade" className="w-full h-[400px] lg:h-[520px] object-cover rounded-lg" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── APRESENTE SUA PROPRIEDADE + CONTACT FORM — White ─── */}
        <section className="py-28 lg:py-40 px-6 lg:px-12 bg-white">
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
                className="rounded-lg p-8 md:p-10"
                style={glassCardWhite}
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
                            ? "text-[10px] tracking-[0.15em] uppercase -top-1 text-primary"
                            : "text-sm text-muted-foreground top-3"
                        }`}
                      >
                        {field.label}
                        {field.required && <span className="ml-0.5 text-primary">*</span>}
                      </label>
                      <input
                        type={field.type}
                        required={field.required}
                        value={form[field.key]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        onFocus={() => setFocused(field.key)}
                        onBlur={() => setFocused(null)}
                        className="w-full bg-transparent border-b-2 border-border px-0 pt-5 pb-2 font-sans text-sm text-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                      />
                    </div>
                  ))}

                  <div className="relative">
                    <label
                      className={`absolute left-0 transition-all duration-300 font-sans pointer-events-none ${
                        focused === "message" || form.message
                          ? "text-[10px] tracking-[0.15em] uppercase -top-1 text-primary"
                          : "text-sm text-muted-foreground top-3"
                      }`}
                    >
                      Mensagem
                    </label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-transparent border-b-2 border-border px-0 pt-5 pb-2 font-sans text-sm text-foreground focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
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
                  className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-sans font-medium tracking-[0.12em] uppercase text-primary-foreground bg-primary transition-all duration-300"
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

      {/* ─── LIGHTBOX ─── */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <button
              onClick={goPrevLB}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goNextLB}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex flex-col items-center max-w-[90vw] max-h-[85vh]">
              <motion.img
                key={lightboxIndex}
                src={docImages[lightboxIndex].src}
                alt={docImages[lightboxIndex].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-[4px]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-sans text-xs text-white/50 tracking-widest">
              {lightboxIndex + 1} / {docImages.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ── Hero Logos Animation — JA + Forbes appear, then fade out, title appears ── */
const ForbesHeroLogos = () => {
  const [barVisible, setBarVisible] = useState(false);
  const [logosVisible, setLogosVisible] = useState(false);
  const [logosFadeOut, setLogosFadeOut] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setBarVisible(true), 600);
    const t2 = setTimeout(() => setLogosVisible(true), 1200);
    const t3 = setTimeout(() => setLogosFadeOut(true), 3200);
    const t4 = setTimeout(() => setShowTitle(true), 3600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  return (
    <div className="relative">
      <AnimatePresence>
        {!logosFadeOut && (
          <motion.div
            className="flex items-center justify-center gap-0"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.img
              src={jaLogoWhite}
              alt="Judice & Araujo"
              className="h-[36px] lg:h-[46px] w-auto"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: logosVisible ? 1 : 0, x: logosVisible ? 0 : 40 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            />
            <motion.div
              className="mx-5"
              style={{ width: "1.5px", height: "46px", background: "rgba(255,255,255,0.6)" }}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: barVisible ? 1 : 0, scaleY: barVisible ? 1 : 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <motion.img
              src={forbesLogoWhite}
              alt="Forbes Global Properties"
              className="h-[36px] lg:h-[47px] w-auto"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: logosVisible ? 1 : 0, x: logosVisible ? 0 : -40 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showTitle && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-[-0.02em] leading-[1.2] mb-6">
              Forbes Global Properties
            </h1>
            <p className="font-sans text-base md:text-lg lg:text-xl font-light text-white/80 leading-[1.6] tracking-wide max-w-3xl mx-auto">
              Conectando o mercado imobiliário de alto padrão do Rio de Janeiro a uma audiência global.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ForbesPage;
