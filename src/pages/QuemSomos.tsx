import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Globe,
  Building2,
  BarChart3,
  Search,
  FileText,
  Target,
  Compass,
  Eye,
  Award,
  Lightbulb,
  ShieldCheck,
  GraduationCap,
  ArrowRight,
  MapPin,
  Send,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OfficeLocations from "@/components/OfficeLocations";

import heroImg from "@/assets/hero-luxury.jpg";
import editorialImg from "@/assets/editorial.jpg";
import forbesGlobalWhite from "@/assets/forbes-global-white.png";
import forbesPartnershipBg from "@/assets/forbes-partnership-bg.jpg";
import equipeImg from "@/assets/quem-somos-equipe.jpg";
import parallax1 from "@/assets/parallax-1.jpg";
import parallax2 from "@/assets/parallax-3.jpg";
import bairroLeblon from "@/assets/bairro-leblon.jpg";
import bairroIpanema from "@/assets/bairro-ipanema.jpg";
import bairroLagoa from "@/assets/bairro-lagoa.jpg";
import bairroGavea from "@/assets/bairro-gavea.jpg";
import bairroJardimBotanico from "@/assets/bairro-jardim-botanico.jpg";

/* ── animation presets ── */
const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-80px" } as const,
  transition: { duration: 0.8, ease: "easeOut" as const },
};

const stagger = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-40px" } as const,
  transition: { duration: 0.65, delay: i * 0.1, ease: "easeOut" as const },
});

/* ── color / glass helpers (matching GestaoAtivos) ── */
const C = {
  heading: "hsl(0 0% 10%)",
  body: "hsl(0 0% 38%)",
  accent: "hsl(171 100% 12%)",
  accentLight: "hsl(171 100% 12% / 0.07)",
  accentShadow: "0 8px 40px -12px hsl(171 100% 12% / 0.08)",
  sectionAlt: "hsl(0 0% 97.5%)",
};

const glassLight = {
  background: "linear-gradient(135deg, rgba(0,63,52,0.06) 0%, rgba(0,63,52,0.02) 100%)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  boxShadow: "0 4px 24px -4px rgba(0,63,52,0.08), inset 0 1px 0 rgba(255,255,255,0.8)",
};

/* ── data ── */
const bairros = [
  { name: "Leblon", img: bairroLeblon },
  { name: "Ipanema", img: bairroIpanema },
  { name: "Lagoa", img: bairroLagoa },
  { name: "Gávea", img: bairroGavea },
  { name: "Jardim Botânico", img: bairroJardimBotanico },
];

const gestaoServices = [
  { icon: Building2, title: "Gestão completa da locação" },
  { icon: BarChart3, title: "Acompanhamento de mercado" },
  { icon: Search, title: "Análise de posicionamento do imóvel" },
  { icon: FileText, title: "Relatórios periódicos de performance do ativo" },
];

const proposito = [
  {
    icon: Target,
    title: "Propósito",
    text: "Transformar o mercado imobiliário gerando impacto positivo e duradouro na vida das pessoas.",
  },
  {
    icon: Compass,
    title: "Missão",
    text: "Oferecer consultoria imobiliária de alto padrão com foco em relacionamentos duradouros, soluções personalizadas e excelência em cada etapa da jornada do cliente.",
  },
  {
    icon: Eye,
    title: "Visão",
    text: "Ser referência em excelência e atendimento personalizado no mercado imobiliário de alto padrão no Rio de Janeiro.",
  },
];

const valores = [
  {
    icon: Award,
    title: "Excelência",
    text: "Buscar sempre o melhor resultado possível, com dedicação, determinação e comprometimento.",
  },
  {
    icon: Lightbulb,
    title: "Inovação",
    text: "Inovar com consistência, visão de futuro e melhoria contínua.",
  },
  {
    icon: ShieldCheck,
    title: "Integridade",
    text: "Agir com transparência, ética, respeito e espírito de cooperação.",
  },
  {
    icon: GraduationCap,
    title: "Desenvolvimento",
    text: "Promover educação contínua e valorização das pessoas.",
  },
];

/* ── Full-width image break ── */
const ImageBreak = ({ src, alt }: { src: string; alt: string }) => (
  <motion.div
    className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: false, margin: "-40px" }}
    transition={{ duration: 1 }}
  >
    <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
  </motion.div>
);

/* ══════════════════════════════════════════════ */

const QuemSomos = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

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

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Quem Somos — Judice & Araujo | Imobiliária de Alto Padrão no Rio de Janeiro";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Fundada em 1975, a Judice & Araujo é referência no mercado imobiliário de alto padrão do Rio de Janeiro. Membro da Forbes Global Properties."
      );
    }
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      name: "Judice & Araujo",
      description:
        "Imobiliária de alto padrão no Rio de Janeiro, membro da Forbes Global Properties. Mais de quatro décadas de atuação no mercado imobiliário de luxo.",
      foundingDate: "1975",
      url: "https://judicearaujo.com.br",
      areaServed: { "@type": "City", name: "Rio de Janeiro" },
      memberOf: { "@type": "Organization", name: "Forbes Global Properties" },
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative h-[85vh] md:h-screen w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Arquitetura de luxo no Rio de Janeiro"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
        <motion.div
          className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-16 pb-16 md:pb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="max-w-7xl mx-auto">
            <p className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/60 mb-4">
              Quem Somos
            </p>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-4 max-w-3xl">
              Judice & Araujo
            </h1>
            <p className="font-sans text-base md:text-lg text-white/70 font-light max-w-2xl leading-relaxed">
              Tradição, confiança e excelência no mercado imobiliário de alto padrão
            </p>
          </div>
        </motion.div>
      </section>

      {/* ─── HISTÓRIA ─── */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div {...fadeUp}>
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-primary mb-6 font-medium">
                Nossa História
              </p>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-normal tracking-[-0.02em] text-foreground leading-[1.2] mb-8">
                Mais de quatro décadas de atuação no mercado imobiliário de alto padrão
              </h2>
              <div className="w-10 h-px bg-primary mb-8" />
              <p className="font-sans text-sm text-muted-foreground leading-[1.9] mb-6 font-light">
                Fundada em 1975, a Judice & Araujo construiu ao longo de quase cinco décadas uma reputação sólida no mercado imobiliário de alto padrão do Rio de Janeiro.
              </p>
              <p className="font-sans text-sm text-muted-foreground leading-[1.9] mb-6 font-light">
                Com uma atuação marcada por seriedade, discrição, expertise e atendimento personalizado, a empresa acompanha gerações de clientes em decisões importantes relacionadas ao seu patrimônio imobiliário.
              </p>
              <p className="font-sans text-sm text-muted-foreground leading-[1.9] font-light">
                Hoje, a Judice & Araujo une tradição, visão estratégica e alcance internacional para oferecer uma experiência completa no mercado de imóveis de alto padrão.
              </p>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-[4px] aspect-[3/4] lg:aspect-auto lg:h-[600px]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <img src={editorialImg} alt="Rio de Janeiro - vista de alto padrão" className="w-full h-full object-cover rounded-[4px]" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FULL WIDTH IMAGE BREAK ─── */}
      <ImageBreak src={parallax1} alt="Vista panorâmica do Rio de Janeiro" />

      {/* ─── HISTÓRIA COM CONFIANÇA ─── */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeUp} className="max-w-3xl mb-16 lg:mb-20">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-primary mb-6 font-medium">
              Trajetória
            </p>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-normal tracking-[-0.02em] text-foreground leading-[1.2] mb-8">
              Uma história construída com confiança
            </h2>
            <div className="w-10 h-px bg-primary mb-8" />
            <p className="font-sans text-sm text-muted-foreground leading-[1.9] mb-6 font-light">
              A trajetória da Judice & Araujo começou na região serrana do Rio de Janeiro, especialmente em Petrópolis, Itaipava e arredores, onde a empresa rapidamente se tornou uma referência no mercado de propriedades de alto padrão.
            </p>
            <p className="font-sans text-sm text-muted-foreground leading-[1.9] font-light">
              Com o crescimento do segmento de luxo na capital fluminense, a empresa expandiu sua atuação para a cidade do Rio de Janeiro, consolidando presença nos bairros mais valorizados da Zona Sul, incluindo:
            </p>
          </motion.div>

          {/* Bairros */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {bairros.map((b, i) => (
              <motion.div
                key={b.name}
                {...stagger(i)}
                className="group relative overflow-hidden rounded-[4px] aspect-[3/4] cursor-pointer"
              >
                <img src={b.img} alt={b.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-white/70" />
                    <span className="font-sans text-xs tracking-[0.15em] uppercase text-white font-medium">{b.name}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeUp} className="font-sans text-sm text-muted-foreground leading-[1.9] font-light max-w-3xl">
            Ao longo dos anos, a empresa acompanhou a evolução do mercado imobiliário premium da cidade, mantendo sempre seu foco em atendimento diferenciado, conhecimento de mercado e relações de longo prazo com seus clientes.
          </motion.p>
        </div>
      </section>

      {/* ─── REDE GLOBAL (Forbes) ─── */}
      <section className="relative py-24 lg:py-36 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img src={forbesPartnershipBg} alt="" className="w-full h-full object-cover opacity-15" loading="lazy" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div {...fadeUp}>
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#c9a84c] mb-6 font-medium">
                Alcance Internacional
              </p>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-normal tracking-[-0.02em] text-[#c9a84c] leading-[1.2] mb-8">
                Conectados a uma rede global
              </h2>
              <div className="w-10 h-px bg-primary-foreground/30 mb-8" />
              <p className="font-sans text-sm text-white leading-[1.9] mb-6 font-light">
                A Judice & Araujo integra a Forbes Global Properties, uma rede internacional formada por algumas das mais prestigiadas imobiliárias de alto padrão do mundo.
              </p>
              <p className="font-sans text-sm text-white leading-[1.9] mb-6 font-light">
                Criada em parceria com a Forbes, uma das marcas de mídia mais respeitadas globalmente, a rede conecta propriedades excepcionais a compradores e investidores de alto poder aquisitivo.
              </p>
              <p className="font-sans text-sm text-white leading-[1.9] mb-8 font-light">
                Como membro da Forbes Global Properties, a Judice & Araujo conecta o mercado imobiliário de alto padrão do Rio de Janeiro a uma audiência internacional qualificada, ampliando significativamente a visibilidade global das propriedades representadas pela empresa.
              </p>
              <button
                onClick={() => navigate("/forbes")}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-foreground text-primary text-[11px] font-sans font-medium tracking-[0.2em] uppercase rounded-full transition-all duration-300 hover:bg-primary-foreground/90 hover:gap-3"
              >
                Conheça a parceria
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>

            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-full max-w-md p-16 rounded-[4px] border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm flex items-center justify-center">
                <img src={forbesGlobalWhite} alt="Forbes Global Properties" className="w-full max-w-[320px] opacity-80" loading="lazy" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── GESTÃO DE ATIVOS ─── */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeUp} className="max-w-3xl mb-16 lg:mb-20">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-primary mb-6 font-medium">
              Serviços
            </p>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-normal tracking-[-0.02em] text-foreground leading-[1.2] mb-8">
              Gestão de Ativos Imobiliários
            </h2>
            <div className="w-10 h-px bg-primary mb-8" />
            <p className="font-sans text-sm text-muted-foreground leading-[1.9] mb-6 font-light">
              Além da intermediação de compra, venda e locação de imóveis, a Judice & Araujo oferece um serviço especializado de Gestão de Ativos Imobiliários.
            </p>
            <p className="font-sans text-sm text-muted-foreground leading-[1.9] mb-6 font-light">
              Esse serviço foi desenvolvido para proprietários que desejam administrar seus imóveis com uma abordagem profissional e estratégica, tratando cada propriedade como parte relevante de seu patrimônio.
            </p>
          </motion.div>

          <motion.p {...fadeUp} className="font-sans text-[10px] tracking-[0.35em] uppercase text-primary mb-8 font-medium">
            A gestão inclui:
          </motion.p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {gestaoServices.map((s, i) => (
              <motion.div
                key={s.title}
                className="group rounded-2xl p-8 text-center transition-all duration-500 cursor-default"
                style={glassLight}
                whileHover={{ y: -6, boxShadow: "0 20px 50px -15px rgba(0,62,52,0.12)" }}
                {...stagger(i)}
              >
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{ background: C.accentLight }}
                >
                  <s.icon className="w-5 h-5" style={{ color: C.accent }} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-sm font-medium tracking-wide" style={{ color: C.heading }}>
                  {s.title}
                </h3>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeUp} className="font-sans text-sm text-muted-foreground leading-[1.9] font-light max-w-3xl">
            Essa abordagem aproxima a gestão imobiliária da lógica utilizada na gestão de investimentos, oferecendo mais transparência, inteligência de mercado e acompanhamento contínuo.
          </motion.p>
        </div>
      </section>

      {/* ─── FULL WIDTH IMAGE BREAK ─── */}
      <ImageBreak src={parallax2} alt="Arquitetura de luxo" />

      {/* ─── NOSSOS ESCRITÓRIOS (OfficeLocations) ─── */}
      <section className="bg-[#FDFDFD]">
        <OfficeLocations />
      </section>

      {/* ─── PROPÓSITO, MISSÃO, VISÃO ─── */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeUp} className="text-center mb-16 lg:mb-20">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-primary mb-6 font-medium">
              Direcionadores Estratégicos
            </p>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-normal tracking-[-0.02em] text-foreground leading-[1.2] mb-4">
              Nossos propósito e direcionadores estratégicos
            </h2>
            <div className="w-10 h-px bg-primary mx-auto mt-4 mb-5" />
            <p className="font-sans text-sm text-muted-foreground leading-[1.9] font-light max-w-2xl mx-auto">
              A atuação da Judice & Araujo é guiada por princípios que refletem a cultura e os valores da empresa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {proposito.map((item, i) => (
              <motion.div
                key={item.title}
                className="group rounded-2xl p-10 text-center transition-all duration-500 cursor-default"
                style={glassLight}
                whileHover={{ y: -6, boxShadow: "0 20px 50px -15px rgba(0,62,52,0.12)" }}
                {...stagger(i)}
              >
                <motion.div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-500 group-hover:scale-110"
                  style={{ background: C.accentLight }}
                  whileHover={{ rotate: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <item.icon className="w-6 h-6" style={{ color: C.accent }} strokeWidth={1.5} />
                </motion.div>
                <h3 className="font-display text-lg font-medium text-foreground mb-4">{item.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-[1.8] font-light">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VALORES ─── */}
      <section className="py-24 lg:py-36" style={{ background: C.sectionAlt }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeUp} className="text-center mb-16 lg:mb-20">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-primary mb-6 font-medium">
              Cultura Organizacional
            </p>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-normal tracking-[-0.02em] text-foreground leading-[1.2] mb-4">
              Valores
            </h2>
            <div className="w-10 h-px bg-primary mx-auto mt-4 mb-5" />
            <p className="font-sans text-sm text-muted-foreground leading-[1.9] font-light max-w-2xl mx-auto">
              Os valores do Grupo J&A orientam nossas decisões e a forma como nos relacionamos com clientes, parceiros e colaboradores.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {valores.map((v, i) => (
              <motion.div
                key={v.title}
                className="group rounded-2xl p-8 bg-white transition-all duration-500 cursor-default"
                style={glassLight}
                whileHover={{ y: -6, boxShadow: "0 20px 50px -15px rgba(0,62,52,0.12)" }}
                {...stagger(i)}
              >
                <motion.div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110"
                  style={{ background: C.accentLight }}
                  whileHover={{ rotate: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <v.icon className="w-5 h-5" style={{ color: C.accent }} strokeWidth={1.5} />
                </motion.div>
                <h3 className="font-display text-base font-medium text-foreground mb-3">{v.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-[1.8] font-light">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EQUIPE ─── */}
      <section className="py-32 lg:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              className="relative overflow-hidden rounded-[4px] aspect-[16/10]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.8 }}
            >
              <img src={equipeImg} alt="Equipe Judice & Araujo" className="w-full h-full object-cover rounded-[4px]" loading="lazy" />
            </motion.div>

            <motion.div {...fadeUp}>
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-primary mb-6 font-medium">
                Nossa Equipe
              </p>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-normal tracking-[-0.02em] text-foreground leading-[1.2] mb-8">
                As pessoas por trás da marca
              </h2>
              <div className="w-10 h-px bg-primary mb-8" />
              <p className="font-sans text-sm text-muted-foreground leading-[1.9] mb-6 font-light">
                A Judice & Araujo é formada por profissionais apaixonados pelo mercado imobiliário e comprometidos com a excelência no atendimento. Cada membro da nossa equipe compartilha os mesmos valores que guiam a empresa há quase cinco décadas.
              </p>
              <p className="font-sans text-sm text-muted-foreground leading-[1.9] font-light">
                Juntos, construímos relações de longo prazo baseadas em confiança, proximidade e respeito — valores que nos definem e nos movem.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL com formulário ─── */}
      <section className="py-24 lg:py-36 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
            {/* Left — editorial intro */}
            <motion.div {...fadeUp} className="lg:sticky lg:top-32 self-start">
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-primary-foreground/40 mb-4">
                Contato
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-primary-foreground leading-[1.15] mb-6 text-left">
                Fale com a Judice & Araujo
              </h2>
              <div className="w-10 h-px bg-primary-foreground/30 mb-8" />
              <p className="font-sans text-sm text-primary-foreground/70 leading-[1.9] font-light mb-6 text-left">
                Se você deseja comprar, vender, alugar ou administrar um imóvel de alto padrão, nossa equipe está pronta para ajudar.
              </p>
              <p className="font-sans text-sm text-primary-foreground/70 leading-[1.9] font-light text-left">
                Entre em contato e descubra como podemos contribuir para a realização de seus planos no mercado imobiliário.
              </p>
            </motion.div>

            {/* Right — form */}
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg p-8 md:p-10 shadow-[0_8px_40px_-12px_hsl(var(--foreground)/0.06)] border border-border/30"
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
                          ? "text-[10px] tracking-[0.15em] uppercase text-primary -top-1"
                          : "text-sm text-muted-foreground top-3"
                      }`}
                    >
                      {field.label}
                      {field.required && <span className="text-primary ml-0.5">*</span>}
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
                        ? "text-[10px] tracking-[0.15em] uppercase text-primary -top-1"
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
                className="group inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-xs font-sans font-medium tracking-[0.12em] uppercase hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_4px_20px_-4px_hsl(var(--primary)/0.4)]"
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

      <Footer />
    </main>
  );
};

export default QuemSomos;
