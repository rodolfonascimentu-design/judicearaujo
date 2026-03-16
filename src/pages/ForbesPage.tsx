import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import forbesLogo from "@/assets/Forbes_Global_Properties-2.png";
import forbesLogoWhite from "@/assets/forbes-global-white.png";
import heroImg from "@/assets/forbes-hero.jpg";
import docImg1 from "@/assets/forbes-doc-1.jpg";
import docImg2 from "@/assets/forbes-doc-2.jpg";
import parallax1 from "@/assets/parallax-1.jpg";
import parallax2 from "@/assets/parallax-2.jpg";
import parallax3 from "@/assets/parallax-3.jpg";
import parallax4 from "@/assets/parallax-4.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-80px" } as any,
  transition: { duration: 0.7, ease: "easeOut" },
};

const stagger = (i: number) => ({
  ...fadeUp,
  transition: { ...fadeUp.transition, delay: 0.1 + i * 0.08 },
});

const C = {
  accent: "#003F34",
  accentLight: "rgba(0,63,52,0.06)",
};

const forbesStats = [
  { value: "167M+", label: "audiência global" },
  { value: "5,6M+", label: "leitores da revista" },
  { value: "100M+", label: "alcance nas redes sociais" },
  { value: "49", label: "edições internacionais" },
  { value: "81", label: "países" },
  { value: "31", label: "idiomas" },
  { value: "100+", label: "anos de história" },
  { value: "100+", label: "eventos globais por ano" },
];

const networkStats = [
  { value: "38", label: "Escritórios" },
  { value: "600", label: "Agentes" },
  { value: "20.000", label: "Países" },
];

const brandReach = [
  { brand: "Forbes / Forbes Global Properties", value: "78,8%" },
  { brand: "Berkshire Hathaway / BHHS", value: "10,7%" },
  { brand: "Sotheby's / Sotheby's Int. Real Estate", value: "4,3%" },
  { brand: "Christie's / Christie's Int. Real Estate", value: "3,2%" },
  { brand: "Coldwell Banker", value: "1%" },
  { brand: "Savills", value: "0,9%" },
  { brand: "Knight Frank", value: "0,8%" },
  { brand: "Engel & Völkers", value: "0,2%" },
];

const jaAccess = [
  "uma audiência global altamente qualificada",
  "exposição internacional através da marca Forbes",
  "uma rede de imobiliárias líderes em seus mercados",
];

const SectionDivider = () => (
  <div className="max-w-5xl mx-auto px-6">
    <div className="h-px bg-border" />
  </div>
);

const ForbesPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Forbes Global Properties — Judice & Araujo";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "A Judice & Araujo integra a Forbes Global Properties, conectando o mercado imobiliário de alto padrão do Rio de Janeiro a uma audiência global.");
    window.scrollTo(0, 0);
  }, []);

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
            <motion.img
              src={forbesLogoWhite}
              alt="Forbes Global Properties"
              className="h-12 md:h-16 lg:h-20 mx-auto mb-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
            <motion.h1
              className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-[-0.02em] leading-[1.2] mb-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Forbes Global Properties
            </motion.h1>
            <motion.p
              className="font-sans text-base md:text-lg lg:text-xl font-light text-white/80 leading-[1.6] tracking-wide max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Conectando o mercado imobiliário de alto padrão do Rio de Janeiro a uma audiência global.
            </motion.p>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="w-[1px] h-12 bg-white/30 mx-auto">
              <motion.div
                className="w-[1px] h-4 bg-white/80"
                animate={{ y: [0, 32, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </section>

        {/* ─── INTRO ─── */}
        <section className="py-28 lg:py-40 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p {...fadeUp} className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-10 font-medium">
              Forbes Global Properties
            </motion.p>

            <motion.p
              {...stagger(0)}
              className="font-sans text-base md:text-lg font-light text-foreground/80 leading-[2] tracking-wide mb-8"
            >
              A Judice & Araujo integra a Forbes Global Properties, uma rede internacional que reúne algumas das mais prestigiadas imobiliárias de alto padrão do mundo.
            </motion.p>

            <motion.p
              {...stagger(1)}
              className="font-sans text-base md:text-lg font-light text-foreground/80 leading-[2] tracking-wide mb-8"
            >
              Criada em parceria com a Forbes, uma das marcas de mídia mais influentes do planeta, a rede conecta propriedades excepcionais a compradores sofisticados em escala global.
            </motion.p>

            <motion.p
              {...stagger(2)}
              className="font-sans text-base md:text-lg font-light text-foreground/80 leading-[2] tracking-wide"
            >
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
        <section className="py-28 lg:py-40 px-6 lg:px-12">
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

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 mb-16">
              {forbesStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-6 rounded-xl"
                  style={{ background: C.accentLight }}
                  {...stagger(i)}
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                >
                  <p className="font-display text-2xl md:text-3xl font-medium mb-2" style={{ color: C.accent }}>{stat.value}</p>
                  <p className="font-sans text-xs md:text-sm font-light text-foreground/60 tracking-wide">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Pull quote */}
            <motion.div {...fadeUp} className="text-center">
              <div className="max-w-3xl mx-auto pl-0 md:pl-0 border-l-0 md:border-l-0">
                <motion.blockquote
                  className="font-display text-lg md:text-xl lg:text-2xl font-normal text-foreground/80 leading-[1.6] italic"
                  {...stagger(0)}
                >
                  "Essa visibilidade global cria um poderoso efeito de marca, ampliando o alcance das propriedades apresentadas através da Forbes Global Properties."
                </motion.blockquote>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── FULL-WIDTH IMAGE BREAK ─── */}
        <div className="w-full h-[50vh] md:h-[60vh] overflow-hidden">
          <motion.img
            src={parallax2}
            alt="Interior de luxo"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
        </div>

        {/* ─── PROPRIEDADES EXCEPCIONAIS ─── */}
        <section className="py-28 lg:py-40 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
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
                className="rounded-lg overflow-hidden"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-80px" }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              >
                <img src={docImg1} alt="Forbes Global Properties editorial" className="w-full h-auto object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── FGP EM NÚMEROS — dark section ─── */}
        <section className="py-28 lg:py-40 px-6 lg:px-12 relative overflow-hidden" style={{ background: C.accent }}>
          <div className="absolute inset-0 opacity-[0.07]" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 40%, hsl(var(--gold-light)), transparent)" }} />

          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <motion.p {...fadeUp} className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#aed9d7] mb-8 font-medium">
              A Rede Global
            </motion.p>
            <motion.h2 {...stagger(0)} className="font-display text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-primary-foreground leading-[1.2] mb-6">
              Forbes Global Properties em Números
            </motion.h2>
            <motion.p {...stagger(1)} className="font-sans text-sm md:text-base font-light text-primary-foreground/55 leading-[1.8] tracking-wide max-w-2xl mx-auto mb-16">
              A rede da Forbes Global Properties não para de crescer:
            </motion.p>

            {/* Network stats */}
            <div className="grid grid-cols-3 gap-8 mb-20 max-w-2xl mx-auto">
              {networkStats.map((stat, i) => (
                <motion.div key={stat.label} {...stagger(i)} className="text-center">
                  <p className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-primary-foreground mb-2">{stat.value}</p>
                  <p className="font-sans text-xs md:text-sm font-light text-primary-foreground/50 tracking-wider uppercase">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Forbes logo */}
            <motion.div {...fadeUp} className="mb-16">
              <img src={forbesLogo} alt="Forbes Global Properties" className="h-16 md:h-20 mx-auto opacity-80" />
            </motion.div>

            {/* Global reach label */}
            <motion.p {...fadeUp} className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#aed9d7] mb-8 font-medium">
              Presença Global
            </motion.p>

            {/* Region lists */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left max-w-4xl mx-auto mb-16">
              {[
                { region: "Americas", countries: ["Canada", "Costa Rica", "Mexico", "United States", "Brasil"] },
                { region: "Caribbean", countries: ["Cayman Islands", "Dominican Republic", "The Bahamas", "Turks and Caicos Islands"] },
                { region: "Asia / Oceania", countries: ["Australia", "Hong Kong", "India", "Japan", "New Zealand"] },
                { region: "EMEA", countries: ["Albania", "Belgium", "Croatia", "France", "Germany", "Greece", "Italy", "Monaco", "Netherlands", "Portugal", "Spain", "Switzerland", "Turkey", "UAE", "United Kingdom"] },
              ].map((group, i) => (
                <motion.div key={group.region} {...stagger(i)}>
                  <h4 className="font-display text-sm font-medium text-primary-foreground mb-4 tracking-wide">{group.region}</h4>
                  <ul className="space-y-1.5">
                    {group.countries.map((c) => (
                      <li key={c} className="font-sans text-xs text-primary-foreground/45 font-light tracking-wide">{c}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FULL-WIDTH IMAGE BREAK ─── */}
        <div className="w-full h-[50vh] md:h-[60vh] overflow-hidden">
          <motion.img
            src={parallax3}
            alt="Propriedade extraordinária"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
        </div>

        {/* ─── MEDIA REACH ─── */}
        <section className="py-28 lg:py-40 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-20">
              <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-8 font-medium">Alcance de Mídia</p>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-foreground leading-[1.2] mb-6">
                More earned media reach than any brand globally in the luxury real estate space
              </h2>
              <div className="w-12 h-px bg-primary mx-auto mb-10" />
            </motion.div>

            {/* Brand comparison table */}
            <div className="max-w-3xl mx-auto mb-16">
              {brandReach.map((item, i) => (
                <motion.div
                  key={item.brand}
                  className="flex items-center justify-between py-4 border-b border-border/50"
                  {...stagger(i)}
                >
                  <span className={`font-sans text-sm md:text-base tracking-wide ${i === 0 ? 'font-medium text-foreground' : 'font-light text-foreground/60'}`}>
                    {item.brand}
                  </span>
                  <div className="flex items-center gap-4">
                    <div className="w-32 md:w-48 h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: i === 0 ? C.accent : "hsl(var(--muted-foreground) / 0.3)" }}
                        initial={{ width: 0 }}
                        whileInView={{ width: item.value }}
                        viewport={{ once: false }}
                        transition={{ duration: 1, delay: i * 0.08 }}
                      />
                    </div>
                    <span className={`font-display text-sm md:text-base min-w-[50px] text-right ${i === 0 ? 'font-medium text-foreground' : 'font-light text-foreground/50'}`}>
                      {item.value}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pull quote */}
            <motion.blockquote {...fadeUp} className="text-center max-w-3xl mx-auto">
              <p className="font-display text-lg md:text-xl lg:text-2xl font-normal text-foreground/80 leading-[1.6] italic">
                "Forbes Global Properties benefits from an unparalleled brand halo effect and global brand awareness through Forbes."
              </p>
            </motion.blockquote>
          </div>
        </section>

        {/* ─── FULL-WIDTH IMAGE BREAK ─── */}
        <div className="w-full h-[50vh] md:h-[60vh] overflow-hidden">
          <motion.img
            src={docImg2}
            alt="Forbes Global Properties"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
        </div>

        {/* ─── J&A + FGP ─── */}
        <section className="py-28 lg:py-40 px-6 lg:px-12">
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

        {/* ─── COMPRADORES INTERNACIONAIS — dark ─── */}
        <section className="py-28 lg:py-40 px-6 lg:px-12 relative overflow-hidden" style={{ background: C.accent }}>
          <div className="absolute inset-0 opacity-[0.07]" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 40%, hsl(var(--gold-light)), transparent)" }} />

          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <motion.p {...fadeUp} className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#aed9d7] mb-8 font-medium">
              Mercado Internacional
            </motion.p>
            <motion.h2 {...stagger(0)} className="font-display text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-primary-foreground leading-[1.2] mb-10">
              Compradores de alto poder aquisitivo ao redor do mundo
            </motion.h2>
            <motion.p {...stagger(1)} className="font-sans text-base md:text-lg font-light text-primary-foreground/60 leading-[1.9] tracking-wide max-w-3xl mx-auto mb-10">
              Essa parceria também permite que nossos clientes acessem os imóveis mais incríveis do mercado internacional de alto padrão, com discrição e segurança.
            </motion.p>

            <motion.div {...stagger(2)} className="w-px h-16 bg-white/20 mx-auto mb-10" />

            <motion.h3 {...stagger(3)} className="font-display text-xl md:text-2xl font-normal text-primary-foreground leading-[1.3] mb-6">
              Apresente sua propriedade a uma audiência global
            </motion.h3>
            <motion.p {...stagger(4)} className="font-sans text-sm md:text-base font-light text-primary-foreground/55 leading-[1.9] tracking-wide max-w-3xl mx-auto mb-12">
              Se você possui um imóvel de alto padrão e deseja apresentá-lo a compradores internacionais, ou pretende adquirir um imóvel no exterior, entre em contato com a equipe da Judice & Araujo para saber mais sobre nossa atuação na Forbes Global Properties.
            </motion.p>

            <motion.button
              {...stagger(5)}
              onClick={() => navigate("/#contato")}
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-primary-foreground font-sans text-[12px] font-semibold tracking-[0.15em] uppercase transition-shadow duration-300 hover:shadow-[0_6px_20px_-4px_rgba(0,0,0,0.3)]"
              style={{ color: C.accent }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Falar com um especialista
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </div>
        </section>

        {/* ─── CLOSING STATEMENT ─── */}
        <section className="py-28 lg:py-40 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeUp}>
              <img src={forbesLogo} alt="Forbes Global Properties" className="h-14 md:h-16 mx-auto mb-10 opacity-70" />
            </motion.div>
            <motion.h2 {...stagger(0)} className="font-display text-xl md:text-2xl lg:text-3xl font-medium tracking-[-0.02em] text-foreground leading-[1.3] mb-6">
              Judice & Araujo | Forbes Global Properties no Rio de Janeiro
            </motion.h2>
            <motion.p {...stagger(1)} className="font-sans text-base md:text-lg font-light text-foreground/60 leading-[1.9] tracking-wide max-w-3xl mx-auto">
              A Judice & Araujo integra a Forbes Global Properties, rede global que conecta imóveis de alto padrão a compradores internacionais.
            </motion.p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ForbesPage;
