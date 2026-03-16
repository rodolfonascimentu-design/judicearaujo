import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  TrendingUp,
  ShieldCheck,
  BarChart3,
  DollarSign,
  Lock,
  Scale,
  LineChart,
  MapPin,
  Users,
  FileText,
  Search,
  Wallet,
  HeadphonesIcon,
  Send,
  Briefcase,
  Eye,
  Handshake,
  MessageCircle,
  Award,
  Heart,
  Star } from
"lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/gestao-hero.jpg";
import interiorImg from "@/assets/gestao-interior.jpg";
import aerialImg from "@/assets/gestao-aerial.jpg";
import terraceImg from "@/assets/gestao-terrace.jpg";
import parceriasImg from "@/assets/parcerias-hero.jpg";
import relacionamentoImg from "@/assets/relacionamento-hero.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

/* ── animation presets ── */
const fadeUp = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-60px" },
  transition: { duration: 0.85, ease: "easeOut" as const }
};

const stagger = (i: number) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-40px" },
  transition: { duration: 0.65, delay: i * 0.1, ease: "easeOut" as const }
});

/* ── color constants ── */
const C = {
  dark: "hsl(0 0% 8%)",
  heading: "hsl(0 0% 10%)",
  body: "hsl(0 0% 38%)",
  subtle: "hsl(0 0% 52%)",
  line: "hsl(0 0% 85%)",
  cardBg: "hsl(0 0% 97%)",
  cardBorder: "hsl(0 0% 90%)",
  sectionAlt: "hsl(0 0% 97.5%)",
  accent: "hsl(171 100% 12%)",
  accentLight: "hsl(171 100% 12% / 0.07)",
  accentBorder: "hsl(171 100% 12% / 0.2)",
  accentShadow: "0 8px 40px -12px hsl(171 100% 12% / 0.08)",
  gold: "hsl(39 55% 58%)",
  goldLight: "hsl(39 55% 68%)",
  goldBg: "hsl(39 55% 58% / 0.12)"
};

/* ── glass card style helpers ── */
const glassLight = {
  background: "linear-gradient(135deg, rgba(0,63,52,0.06) 0%, rgba(0,63,52,0.02) 100%)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  boxShadow: "0 4px 24px -4px rgba(0,63,52,0.08), inset 0 1px 0 rgba(255,255,255,0.8)"
};

const glassDark = {
  background: "rgba(255,255,255,0.08)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)"
};

/* ── data ── */
const assetCards = [
{ icon: DollarSign, title: "Rentabilidade" },
{ icon: ShieldCheck, title: "Preservação de valor" },
{ icon: Scale, title: "Liquidez" },
{ icon: Lock, title: "Segurança jurídica" }];


const expertiseCards = [
{ icon: Search, label: "Profundo conhecimento de mercado" },
{ icon: Heart, label: "Relacionamento de longo prazo com clientes" },
{ icon: Eye, label: "Discrição e profissionalismo" },
{ icon: Star, label: "Alto padrão de atendimento" }];


const bairros = [
{ name: "Leblon", img: property1 },
{ name: "Ipanema", img: property2 },
{ name: "Lagoa", img: property3 },
{ name: "Gávea", img: property4 },
{ name: "Jardim Botânico", img: property5 },
{ name: "Barra da Tijuca", img: property6 }];


const serviceCards = [
{ icon: MessageCircle, label: "Comunicação clara e constante" },
{ icon: HeadphonesIcon, label: "Suporte dedicado" },
{ icon: Users, label: "Acompanhamento próximo das decisões relacionadas ao imóvel" }];


const marketCards = [
{ icon: LineChart, title: "Evolução do mercado de locação" },
{ icon: BarChart3, title: "Preço por metro quadrado em diferentes regiões" },
{ icon: TrendingUp, title: "Posicionamento do ativo frente a imóveis comparáveis" },
{ icon: Search, title: "Tendências do mercado imobiliário" }];


const adminSteps = [
{ icon: Building2, label: "Avaliação estratégica do ativo" },
{ icon: DollarSign, label: "Definição de preço e posicionamento" },
{ icon: Users, label: "Seleção criteriosa de inquilinos" },
{ icon: FileText, label: "Gestão contratual" },
{ icon: Wallet, label: "Acompanhamento financeiro" },
{ icon: HeadphonesIcon, label: "Suporte contínuo ao proprietário e ao locatário" }];


const investorCards = [
{ icon: Briefcase, label: "Expertise local" },
{ icon: Eye, label: "Acompanhamento constante" },
{ icon: ShieldCheck, label: "Governança" },
{ icon: Handshake, label: "Transparência" }];


const valuesCards = [
{ icon: Award, label: "Confiança" },
{ icon: ShieldCheck, label: "Seriedade" },
{ icon: Eye, label: "Discrição" },
{ icon: Star, label: "Excelência no atendimento" }];


/* ── Elegant divider ── */
const Divider = () =>
<div className="flex items-center justify-center py-4">
    <div className="w-20 h-px" style={{ background: C.line }} />
  </div>;


/* ── Full-width image break ── */
const ImageBreak = ({ src, alt, height = "h-[45vh]" }: {src: string;alt: string;height?: string;}) =>
<motion.div
  className={`relative w-full ${height} overflow-hidden`}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: false, margin: "-40px" }}
  transition={{ duration: 1 }}>
  
    <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
    
  </motion.div>;


/* ── Section label ── */
const SectionLabel = ({ text, light = false }: {text: string;light?: boolean;}) =>
<p
  className="font-sans text-[10px] tracking-[0.35em] uppercase mb-6 font-medium"
  style={{ color: light ? "rgba(255,255,255,0.4)" : C.accent }}>
  
    {text}
  </p>;


const GestaoAtivos = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    document.title =
    "Gestão de Ativos Imobiliários | Administração Premium de Imóveis – Judice & Araujo";
    document.
    querySelector('meta[name="description"]')?.
    setAttribute(
      "content",
      "Serviço especializado de gestão de ativos imobiliários para proprietários e investidores de imóveis de alto padrão no Rio de Janeiro."
    );
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    setForm({ name: "", phone: "", email: "" });
  };

  const fields = [
  { key: "name" as const, type: "text", label: "Nome completo", required: true },
  { key: "phone" as const, type: "tel", label: "Celular com DDD", required: true },
  { key: "email" as const, type: "email", label: "Seu melhor e-mail", required: true }];


  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "#ffffff" }}>
      <Navbar />
      <main>

        {/* ═══════════════════════════════════════════════════════════
             HERO
          ═══════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
          <img
            src={heroImg}
            alt="Arquitetura de alto padrão"
            className="absolute inset-0 w-full h-full object-cover" />
          
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.45) 0%, rgba(10,10,10,0.72) 100%)" }} />
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <motion.p
              className="font-sans text-[10px] tracking-[0.5em] uppercase mb-10 font-medium"
              style={{ color: "rgba(255,255,255,0.4)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}>
              
              Judice & Araujo · Desde 1975
            </motion.p>
            <motion.h1
              className="font-display text-4xl md:text-5xl lg:text-[3.8rem] font-light tracking-[-0.02em] leading-[1.06] mb-10"
              style={{ color: "#ffffff" }}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.12 }}>
              
              Gestão de Ativos Imobiliários
            </motion.h1>
            <motion.p
              className="font-sans text-xl md:text-2xl font-light tracking-wide mb-14"
              style={{ color: "rgba(255,255,255,0.50)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}>
              
              Administração estratégica de imóveis de alto padrão
            </motion.p>
            <motion.a
              href="#contato"
              className="inline-flex items-center px-12 py-4 rounded-full font-sans text-[11px] font-medium tracking-[0.18em] uppercase transition-all duration-300"
              style={{ background: "#ffffff", color: C.dark }}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 30px -8px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}>
              
              Agendar uma conversa
            </motion.a>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
             SEÇÃO 2 — SOBRE O SERVIÇO
          ═══════════════════════════════════════════════════════════ */}
        <section className="py-28 lg:py-40 px-6 lg:px-12" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div {...fadeUp}>
              <SectionLabel text="Sobre o serviço" />
              <p className="font-sans text-[15px] md:text-base font-light leading-[2.1] tracking-wide mb-8 text-left" style={{ color: C.body }}>
                A Judice & Araujo oferece um serviço exclusivo de Gestão de Ativos Imobiliários, desenvolvido para proprietários que desejam tratar seus imóveis como parte relevante de seu patrimônio.
              </p>
              <p className="font-sans text-[15px] md:text-base font-light leading-[2.1] tracking-wide mb-8 text-left" style={{ color: C.body }}>
                Mais do que uma simples administração de locação, nossa atuação envolve visão estratégica, inteligência de mercado e acompanhamento contínuo do ativo, sempre com o padrão de confiança, seriedade e atendimento personalizado que caracteriza a empresa desde 1975.
              </p>
              <p className="font-sans text-[15px] md:text-base font-light leading-[2.1] tracking-wide text-left" style={{ color: C.body }}>
                Nosso objetivo é garantir que cada imóvel sob gestão esteja corretamente posicionado no mercado, preservando seu valor e capturando o melhor potencial de rentabilidade.
              </p>
            </motion.div>
            <motion.div
              className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-[3/4]"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.9, ease: "easeOut" }}>
              
              <img
                src={interiorImg}
                alt="Interior de imóvel de alto padrão"
                className="w-full h-full object-cover"
                loading="lazy" />
              
            </motion.div>
          </div>
        </section>

        <Divider />

        {/* ═══════════════════════════════════════════════════════════
             SEÇÃO 3 — O QUE É GESTÃO DE ATIVOS — glass cards
          ═══════════════════════════════════════════════════════════ */}
        <section className="py-28 lg:py-40 px-6 lg:px-12" style={{ background: C.sectionAlt }}>
          <div className="max-w-5xl mx-auto text-center">
            <motion.div {...fadeUp}>
              <SectionLabel text="Nosso serviço" />
              <h2 className="font-display text-2xl md:text-3xl lg:text-[2.5rem] tracking-[-0.02em] leading-[1.18] mt-8 mb-14" style={{ color: C.heading }}>
                O que é a Gestão de Ativos Imobiliários
              </h2>
              <p className="font-sans text-[15px] font-light leading-[2.1] tracking-wide mb-16 max-w-3xl mx-auto" style={{ color: C.body }}>
                A gestão de ativos imobiliários é uma abordagem profissional em que o imóvel é tratado como um ativo patrimonial, acompanhado de forma contínua para maximizar:
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
              {assetCards.map((card, i) =>
              <motion.div
                key={card.title}
                className="group rounded-2xl p-8 text-center transition-all duration-500 cursor-default"
                style={glassLight}
                whileHover={{ y: -6, boxShadow: "0 20px 50px -15px rgba(0,62,52,0.12)" }}
                {...stagger(i)}>
                
                  <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{ background: C.accentLight }}>
                  
                    <card.icon className="w-5 h-5" style={{ color: C.accent }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-sm font-medium tracking-wide" style={{ color: C.heading }}>
                    {card.title}
                  </h3>
                </motion.div>
              )}
            </div>

            <motion.div {...fadeUp} className="max-w-3xl mx-auto">
              <p className="font-sans text-[15px] font-light leading-[2.1] tracking-wide mb-6" style={{ color: C.body }}>
                Na Judice & Araujo, cada imóvel é analisado dentro de seu contexto de mercado, considerando fatores como localização, tipologia, demanda e benchmarks imobiliários.
              </p>
              <p className="font-sans text-[15px] font-light leading-[2.1] tracking-wide" style={{ color: C.body }}>
                Essa visão permite que decisões relacionadas à locação sejam tomadas de forma estratégica e informada, sempre alinhadas aos interesses do proprietário.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Image break ── */}
        <ImageBreak src={aerialImg} alt="Vista aérea do Leblon e Ipanema" height="h-[50vh]" />

        {/* ═══════════════════════════════════════════════════════════
             EXPERTISE — glass cards + smaller bairro cards
          ═══════════════════════════════════════════════════════════ */}
        <section className="py-28 lg:py-40 px-6 lg:px-12" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto text-center">
            <motion.div className="max-w-3xl mx-auto mb-10" {...fadeUp}>
              <SectionLabel text="Tradição e expertise" />
              <h2 className="font-display text-2xl md:text-3xl lg:text-[2.5rem] tracking-[-0.02em] leading-[1.18] mb-10" style={{ color: C.heading }}>
                Expertise no mercado de alto padrão
              </h2>
              <p className="font-sans text-[15px] font-light leading-[2.1] tracking-wide mb-6" style={{ color: C.body }}>
                A Judice & Araujo é uma empresa familiar fundada em 1975, reconhecida por sua atuação no mercado imobiliário de alto padrão do Rio de Janeiro.
              </p>
              <p className="font-sans text-[15px] font-light leading-[2.1] tracking-wide" style={{ color: C.body }}>
                Ao longo de décadas, construímos uma reputação baseada em:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              {expertiseCards.map((card, i) =>
              <motion.div
                key={card.label}
                className="group rounded-2xl p-8 transition-all duration-500 cursor-default"
                style={glassLight}
                whileHover={{ y: -6, boxShadow: "0 20px 50px -15px rgba(0,62,52,0.12)" }}
                {...stagger(i)}>
                
                  <div className="mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" style={{ background: C.accentLight }}>
                    <card.icon className="w-5 h-5" style={{ color: C.accent }} strokeWidth={1.5} />
                  </div>
                  <p className="font-sans text-sm tracking-wide leading-relaxed" style={{ color: C.heading }}>
                    {card.label}
                  </p>
                </motion.div>
              )}
            </div>

            {/* Bairros */}
            <motion.div className="max-w-4xl mx-auto mb-10" {...fadeUp}>
              <p className="font-sans text-[15px] font-light leading-[2.1] tracking-wide" style={{ color: C.body }}>
                Nossa equipe acompanha de perto a dinâmica dos bairros mais valorizados da cidade, incluindo, mas não se limitando a:
              </p>
            </motion.div>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 max-w-4xl mx-auto mb-10">
              {bairros.map((b, i) =>
              <motion.div
                key={b.name}
                className="group relative rounded-xl overflow-hidden cursor-default aspect-square transition-all duration-500"
                whileHover={{ y: -4, boxShadow: "0 12px 30px -8px rgba(0,0,0,0.2)" }}
                {...stagger(i)}>
                
                  <img
                  src={b.img}
                  alt={b.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy" />
                
                  <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.05) 50%)" }} />
                
                  <div className="absolute bottom-0 left-0 right-0 p-2 flex items-center justify-center">
                    <span className="font-display text-[11px] font-medium tracking-wide text-white">
                      {b.name}
                    </span>
                  </div>
                </motion.div>
              )}
            </div>

            <motion.div className="max-w-4xl mx-auto" {...fadeUp}>
              <p className="font-sans text-base font-semibold leading-[2.1] tracking-wide" style={{ color: C.heading }}>
                Essa expertise permite posicionar cada imóvel de forma adequada dentro do mercado premium.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Terrace image break ── */}
        <ImageBreak src={terraceImg} alt="Terraço de cobertura com vista para o Rio" height="h-[45vh]" />

        {/* ═══════════════════════════════════════════════════════════
             ATENDIMENTO PERSONALIZADO — split layout with image
          ═══════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden" style={{ background: "#ffffff" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left content */}
            <div className="py-28 lg:py-40 px-6 lg:px-12 xl:pl-[max(2rem,calc((100vw-1280px)/2+2rem))]">
              <motion.div {...fadeUp} className="max-w-xl">
                <SectionLabel text="Relacionamento" />
                <h2 className="font-display text-2xl md:text-3xl lg:text-[2.3rem] tracking-[-0.02em] leading-[1.22] mb-10" style={{ color: C.heading }}>
                  Atendimento personalizado
                </h2>
                <p className="font-sans text-[15px] font-light leading-[2.1] tracking-wide mb-10" style={{ color: C.body }}>
                  Cada imóvel sob gestão recebe um acompanhamento individualizado.
                  {" "}Nosso serviço foi estruturado para oferecer aos proprietários:
                </p>
              </motion.div>

              <div className="grid grid-cols-1 gap-4 max-w-md mb-10">
                {serviceCards.map((card, i) =>
                <motion.div
                  key={card.label}
                  className="group relative flex items-center gap-5 rounded-2xl p-6 transition-all duration-500 cursor-default overflow-hidden"
                  style={glassLight}
                  whileHover={{ y: -3, boxShadow: "0 16px 40px -10px rgba(0,62,52,0.12)" }}
                  {...stagger(i)}>
                  
                    <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{ background: C.accent }}>
                    
                      <card.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </div>
                    <span className="font-sans text-sm font-medium tracking-wide leading-relaxed" style={{ color: C.heading }}>
                      {card.label}
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100" style={{ background: C.accent }} />
                  </motion.div>
                )}
              </div>

              <motion.p {...fadeUp} className="font-sans text-base font-semibold leading-[2.1] tracking-wide max-w-md" style={{ color: C.body }}>
                Entendemos que cada cliente possui objetivos patrimoniais distintos, e por isso nosso trabalho é sempre conduzido de forma personalizada e estratégica.
              </motion.p>
            </div>

            {/* Right — full-bleed image */}
            <motion.div
              className="relative min-h-[50vh] lg:min-h-full"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 1, ease: "easeOut" }}>
              
              <img
                src={relacionamentoImg}
                alt="Atendimento personalizado ao cliente"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy" />
              
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(255,255,255,0.15) 0%, transparent 40%)" }} />
            </motion.div>
          </div>
        </section>

        <Divider />

        {/* ═══════════════════════════════════════════════════════════
             INTELIGÊNCIA DE MERCADO — glass cards (no borders)
          ═══════════════════════════════════════════════════════════ */}
        <section className="py-28 lg:py-40 px-6 lg:px-12" style={{ background: C.accent }}>
          <div className="max-w-5xl mx-auto text-center">
            <motion.div {...fadeUp}>
              <SectionLabel text="Dados e análise" light />
              <h2 className="font-display text-2xl md:text-3xl lg:text-[2.5rem] tracking-[-0.02em] leading-[1.18] mt-8 mb-14 text-white">
                Inteligência de mercado e análise de performance
              </h2>
              <p className="font-sans text-[15px] font-light leading-[2.1] tracking-wide mb-2 max-w-3xl mx-auto text-white/80">
                Um dos diferenciais da Judice & Araujo é o acompanhamento contínuo da performance do ativo imobiliário.
                {" "}Utilizamos benchmarks e dados de mercado para analisar:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-14 max-w-4xl mx-auto">
              {marketCards.map((card, i) =>
              <motion.div
                key={card.title}
                className="group relative rounded-2xl p-8 text-center transition-all duration-500 cursor-default overflow-hidden"
                style={glassDark}
                whileHover={{ y: -6, boxShadow: "0 16px 40px -10px rgba(0,0,0,0.3)" }}
                {...stagger(i)}>
                
                  <div
                  className="mx-auto w-14 h-14 rounded-full flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{ background: C.gold }}>
                  
                    <card.icon className="w-6 h-6" style={{ color: C.accent }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-sm font-medium tracking-wide leading-snug text-white">
                    {card.title}
                  </h3>
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100" style={{ background: C.gold }} />
                </motion.div>
              )}
            </div>

            <motion.div {...fadeUp} className="max-w-3xl mx-auto">
              <p className="font-sans text-[15px] font-light leading-[2.1] tracking-wide mb-4 text-white/80">
                Essas análises são apresentadas aos proprietários em relatórios periódicos que permitem acompanhar o desempenho do imóvel de forma clara e estruturada.
              </p>
              <p className="font-sans text-base font-semibold leading-[2.1] tracking-wide text-white">
                Esse modelo aproxima a gestão imobiliária da lógica utilizada na gestão de ativos financeiros, trazendo maior transparência e previsibilidade.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Image break ── */}
        <ImageBreak src={interiorImg} alt="Interior de apartamento de alto padrão" height="h-[50vh]" />

        {/* ═══════════════════════════════════════════════════════════
             ADMINISTRAÇÃO COMPLETA — unchanged per user request
          ═══════════════════════════════════════════════════════════ */}
        <section className="py-28 lg:py-40 px-6 lg:px-12" style={{ background: "#ffffff" }}>
          <div className="max-w-5xl mx-auto text-center">
            <motion.div {...fadeUp}>
              <SectionLabel text="Serviço completo" />
              <h2 className="font-display text-2xl md:text-3xl lg:text-[2.5rem] tracking-[-0.02em] leading-[1.18] mt-8 mb-14" style={{ color: C.heading }}>
                Administração completa da locação
              </h2>
              <p className="font-sans text-[15px] font-light leading-[2.1] tracking-wide mb-2 max-w-3xl mx-auto" style={{ color: C.body }}>
                A Judice & Araujo realiza toda a gestão operacional do imóvel, incluindo:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-14 max-w-4xl mx-auto">
              {adminSteps.map((step, i) =>
              <motion.div
                key={step.label}
                className="group relative rounded-xl p-8 text-center transition-all duration-500 cursor-default overflow-hidden"
                style={{ background: C.accentLight, border: `1px solid ${C.cardBorder}` }}
                whileHover={{ y: -4, boxShadow: `0 12px 32px -8px ${C.accent}30` }}
                {...stagger(i)}>
                
                  <div
                  className="mx-auto w-14 h-14 rounded-full flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6"
                  style={{ background: C.accent }}>
                  
                    <step.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <span className="font-sans text-sm font-medium tracking-wide leading-relaxed block" style={{ color: C.heading }}>
                    {step.label}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100" style={{ background: C.accent }} />
                </motion.div>
              )}
            </div>

            <motion.p {...fadeUp} className="font-sans text-base font-semibold leading-[2.1] tracking-wide max-w-3xl mx-auto" style={{ color: C.body }}>
              Todo o processo é conduzido com foco na segurança, eficiência e preservação do patrimônio do cliente.
            </motion.p>
          </div>
        </section>

        <Divider />

        {/* ═══════════════════════════════════════════════════════════
             PARCERIAS ESTRATÉGICAS — left-aligned + image right
          ═══════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden" style={{ background: C.accent }}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left content */}
            <div className="py-28 lg:py-40 px-6 lg:px-12 xl:pl-[max(2rem,calc((100vw-1280px)/2+2rem))]">
              <motion.div {...fadeUp} className="max-w-xl">
                <SectionLabel text="Parcerias estratégicas" light />
                <h2
                  className="font-display text-2xl md:text-3xl lg:text-[2.3rem] tracking-[-0.02em] leading-[1.22] mb-14"
                  style={{ color: "#ffffff" }}>
                  
                  Gestão para investidores, Wealth Managers e Family Offices
                </h2>
                <p
                  className="font-sans text-[15px] font-light leading-[2.1] tracking-wide mb-6"
                  style={{ color: "rgba(255,255,255,0.6)" }}>
                  
                  A Judice & Araujo também atua em parceria com gestores de patrimônio, bancos e family offices, oferecendo suporte especializado na gestão de ativos imobiliários pertencentes a seus clientes.
                </p>
                <p
                  className="font-sans text-[15px] font-light leading-[2.1] tracking-wide mb-12"
                  style={{ color: "rgba(255,255,255,0.6)" }}>
                  
                  Nosso papel é complementar a estratégia patrimonial desses investidores, oferecendo uma gestão imobiliária profissional que combine:
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-4 max-w-md">
                {investorCards.map((item, i) =>
                <motion.div
                  key={item.label}
                  className="group flex flex-col items-center gap-4 py-8 px-5 rounded-2xl transition-all duration-500 cursor-default"
                  style={glassDark}
                  whileHover={{ y: -4, boxShadow: "0 16px 40px -10px rgba(0,0,0,0.3)" }}
                  {...stagger(i)}>
                  
                    <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" style={{ background: C.gold }}>
                      <item.icon className="w-4 h-4" style={{ color: C.accent }} strokeWidth={1.5} />
                    </div>
                    <span className="font-sans text-xs tracking-wide text-center text-white/80">
                      {item.label}
                    </span>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Right — full-bleed image */}
            <motion.div
              className="relative min-h-[50vh] lg:min-h-full"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 1, ease: "easeOut" }}>
              
              <img
                src={parceriasImg}
                alt="Reunião de parcerias estratégicas"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy" />
              
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right, hsl(171 100% 12% / 0.3) 0%, transparent 40%)" }} />
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
             VALORES — centralized, glass cards
          ═══════════════════════════════════════════════════════════ */}
        <section className="py-28 lg:py-40 px-6 lg:px-12" style={{ background: "#ffffff" }}>
          <div className="max-w-5xl mx-auto text-center">
            <motion.div {...fadeUp}>
              <SectionLabel text="Nossos valores" />
              <h2 className="font-display text-2xl md:text-3xl lg:text-[2.5rem] tracking-[-0.02em] leading-[1.18] mb-10" style={{ color: C.heading }}>
                Confiança e seriedade
              </h2>
              <p className="font-sans text-[15px] font-light leading-[2.1] tracking-wide mb-6 max-w-3xl mx-auto" style={{ color: C.body }}>
                Ao confiar a gestão do seu imóvel à Judice & Araujo, o proprietário conta com uma empresa com quase cinco décadas de atuação no mercado imobiliário.
              </p>
              <p className="font-sans text-[15px] font-light leading-[2.1] tracking-wide mb-10 max-w-3xl mx-auto" style={{ color: C.body }}>
                Nossa reputação foi construída com base em valores claros:
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-3xl mx-auto mb-10">
              {valuesCards.map((v, i) =>
              <motion.div
                key={v.label}
                className="group flex flex-col items-center gap-4 py-10 px-5 rounded-2xl transition-all duration-500 cursor-default"
                style={glassLight}
                whileHover={{ y: -6, boxShadow: "0 20px 50px -15px rgba(0,62,52,0.12)" }}
                {...stagger(i)}>
                
                  <div className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" style={{ background: C.accentLight }}>
                    <v.icon className="w-5 h-5" style={{ color: C.accent }} strokeWidth={1.5} />
                  </div>
                  <span className="font-display text-sm font-medium tracking-wide text-center" style={{ color: C.heading }}>
                    {v.label}
                  </span>
                </motion.div>
              )}
            </div>

            <motion.p {...fadeUp} className="font-sans text-[15px] font-light leading-[2.1] tracking-wide max-w-3xl mx-auto" style={{ color: C.body }}>
              Esses princípios orientam todas as decisões relacionadas aos imóveis sob nossa gestão.
            </motion.p>
          </div>
        </section>

        <Divider />

        {/* ═══════════════════════════════════════════════════════════
             CONTATO — white background, clean, animated
          ═══════════════════════════════════════════════════════════ */}
        <section id="contato" className="py-28 md:py-40 px-6 md:px-16" style={{ background: "#ffffff" }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
              {/* Left */}
              <motion.div {...fadeUp} className="lg:sticky lg:top-32 self-start">
                <SectionLabel text="Contato" />
                <h2 className="font-display text-3xl md:text-4xl mb-8 leading-[1.15]" style={{ color: C.heading }}>
                  Fale com nossa equipe
                </h2>
                <p className="font-sans text-[15px] font-light leading-[2] mb-10" style={{ color: C.body }}>
                  Se você possui um imóvel de alto padrão e deseja uma gestão profissional, estratégica e confiável, entre em contato com a Judice & Araujo para conhecer melhor nosso serviço de Gestão de Ativos Imobiliários.
                </p>
                <div className="hidden lg:block">
                  <div className="w-16 h-px" style={{ background: C.line }} />
                </div>
              </motion.div>

              {/* Right — form */}
              <motion.form
                onSubmit={handleSubmit}
                className="group/form rounded-2xl p-8 md:p-10 transition-all duration-700"
                style={{
                  background: C.sectionAlt,
                  boxShadow: "0 4px 20px -8px rgba(0,0,0,0.06)"
                }}
                whileHover={{
                  boxShadow: "0 12px 40px -12px rgba(0,62,52,0.10)"
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-60px" }}
                transition={{ duration: 0.85, ease: "easeOut" }}>
                
                <div className="space-y-8">
                  {fields.map((field) =>
                  <div key={field.key} className="relative">
                      <label
                      className={`absolute left-0 transition-all duration-300 font-sans pointer-events-none ${
                      focused === field.key || form[field.key] ?
                      "text-[10px] tracking-[0.15em] uppercase -top-1" :
                      "text-sm top-3"}`
                      }
                      style={{
                        color: focused === field.key || form[field.key] ? C.accent : C.subtle
                      }}>
                      
                        {field.label}
                        {field.required && <span style={{ color: C.accent }} className="ml-0.5">*</span>}
                      </label>
                      <input
                      type={field.type}
                      required={field.required}
                      value={form[field.key]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      onFocus={() => setFocused(field.key)}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-transparent border-b-2 px-0 pt-5 pb-2 font-sans text-sm focus:outline-none transition-colors duration-300"
                      style={{
                        color: C.heading,
                        borderColor: focused === field.key ? C.accent : C.line
                      }} />
                    
                    </div>
                  )}
                </div>

                <p className="font-sans text-[10px] leading-relaxed mt-8 mb-8" style={{ color: C.subtle }}>
                  Ao informar meus dados concordo com a{" "}
                  <a href="#" className="underline transition-colors" style={{ color: C.body }}>
                    Política de Privacidade
                  </a>{" "}
                  e{" "}
                  <a href="#" className="underline transition-colors" style={{ color: C.body }}>
                    Termos de Uso
                  </a>
                  .
                </p>

                <motion.button
                  type="submit"
                  className="group inline-flex items-center gap-2.5 px-9 py-4 rounded-full text-xs font-sans font-medium tracking-[0.14em] uppercase transition-all duration-300"
                  style={{ background: C.accent, color: "#ffffff" }}
                  whileHover={{ scale: 1.02, boxShadow: "0 4px 20px -4px hsl(171 100% 12% / 0.35)" }}
                  whileTap={{ scale: 0.98 }}>
                  
                  <Send className="w-4 h-4" />
                  Agendar uma conversa
                </motion.button>
              </motion.form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

};

export default GestaoAtivos;