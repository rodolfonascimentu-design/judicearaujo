import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
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
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/gestao-hero.jpg";

/* ── animation presets ── */
const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-80px" },
  transition: { duration: 0.8, ease: "easeOut" as const },
};

const stagger = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-60px" },
  transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
});

/* ── data ── */
const highlights = [
  { value: "1975", label: "Fundação da empresa" },
  { value: "Mercado Premium", label: "Especialização em imóveis de alto padrão" },
  { value: "Gestão Estratégica", label: "Imóveis tratados como ativos patrimoniais" },
  { value: "Atendimento Personalizado", label: "Acompanhamento próximo do proprietário" },
];

const assetCards = [
  { icon: DollarSign, title: "Rentabilidade", desc: "Maximização do retorno sobre o ativo imobiliário" },
  { icon: ShieldCheck, title: "Preservação de valor", desc: "Manutenção e valorização contínua do patrimônio" },
  { icon: Scale, title: "Liquidez", desc: "Posicionamento estratégico para negociação ágil" },
  { icon: Lock, title: "Segurança jurídica", desc: "Gestão contratual com rigor e transparência" },
];

const bairros = ["Leblon", "Ipanema", "Lagoa", "Gávea", "Jardim Botânico", "Barra da Tijuca"];

const marketCards = [
  { icon: LineChart, title: "Evolução do mercado de locação" },
  { icon: BarChart3, title: "Preço por metro quadrado" },
  { icon: Search, title: "Comparação com imóveis similares" },
  { icon: TrendingUp, title: "Análise de tendências imobiliárias" },
];

const adminSteps = [
  { icon: Building2, label: "Avaliação estratégica do imóvel" },
  { icon: DollarSign, label: "Definição de preço e posicionamento" },
  { icon: Users, label: "Seleção criteriosa de inquilinos" },
  { icon: FileText, label: "Gestão contratual" },
  { icon: Wallet, label: "Acompanhamento financeiro" },
  { icon: HeadphonesIcon, label: "Suporte contínuo ao proprietário" },
];

const GestaoAtivos = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    document.title =
      "Gestão de Ativos Imobiliários | Administração Premium de Imóveis – Judice & Araujo";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
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
    { key: "email" as const, type: "email", label: "Seu melhor e-mail", required: true },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main>
        {/* ═══════════════ HERO ═══════════════ */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
          <img
            src={heroImg}
            alt="Interior de apartamento de alto padrão no Rio de Janeiro"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <motion.p
              className="font-sans text-[10px] tracking-[0.4em] uppercase text-white/50 mb-6 font-medium"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Judice & Araujo
            </motion.p>
            <motion.h1
              className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-[-0.02em] leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Gestão de Ativos Imobiliários
            </motion.h1>
            <motion.p
              className="font-display text-lg md:text-xl text-white/65 font-light tracking-wide mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Administração estratégica de imóveis de alto padrão
            </motion.p>
            <motion.a
              href="#contato"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white text-foreground font-sans text-[11px] font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:bg-white/90 hover:shadow-[0_8px_30px_-8px_rgba(255,255,255,0.3)]"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              Agendar uma conversa
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </section>

        {/* ═══════════════ HIGHLIGHTS (4 CARDS) ═══════════════ */}
        <section className="py-20 lg:py-28 px-6 lg:px-12 bg-background">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <motion.div
                key={h.value}
                className="group relative bg-background border border-border/60 rounded-xl p-8 text-center transition-all duration-500 hover:border-primary/30 hover:shadow-[0_8px_40px_-12px_hsl(var(--primary)/0.12)]"
                {...stagger(i)}
              >
                <p className="font-display text-2xl md:text-3xl text-primary mb-3 tracking-tight">
                  {h.value}
                </p>
                <p className="font-sans text-xs text-muted-foreground tracking-wide leading-relaxed">
                  {h.label}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ═══════════════ O QUE É GESTÃO ═══════════════ */}
        <section className="py-24 lg:py-32 px-6 lg:px-12 bg-muted/30">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            <motion.div {...fadeUp}>
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-primary mb-4 font-medium">
                Nosso serviço
              </p>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground tracking-[-0.02em] leading-[1.2] mb-6">
                O que é Gestão de Ativos Imobiliários
              </h2>
              <p className="font-sans text-sm md:text-base text-muted-foreground font-light leading-[1.9] tracking-wide mb-4">
                A gestão de ativos imobiliários é uma abordagem profissional em que o imóvel é tratado como um ativo patrimonial, acompanhado continuamente para maximizar seu potencial.
              </p>
              <p className="font-sans text-sm md:text-base text-muted-foreground font-light leading-[1.9] tracking-wide">
                Na Judice & Araujo, cada imóvel é analisado dentro de seu contexto de mercado, considerando localização, tipologia, demanda e benchmarks imobiliários.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {assetCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  className="group bg-background border border-border/50 rounded-xl p-7 transition-all duration-500 hover:border-primary/25 hover:shadow-[0_8px_40px_-12px_hsl(var(--primary)/0.1)]"
                  {...stagger(i)}
                >
                  <card.icon className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />
                  <h3 className="font-display text-sm font-medium text-foreground mb-2 tracking-wide">
                    {card.title}
                  </h3>
                  <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ BAIRROS ═══════════════ */}
        <section className="py-24 lg:py-32 px-6 lg:px-12 bg-background">
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-16" {...fadeUp}>
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-primary mb-4 font-medium">
                Áreas de atuação
              </p>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground tracking-[-0.02em] leading-[1.2] mb-4">
                Bairros de atuação
              </h2>
              <p className="font-sans text-sm text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
                Nossa equipe acompanha de perto a dinâmica dos bairros mais valorizados do Rio de Janeiro.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {bairros.map((b, i) => (
                <motion.div
                  key={b}
                  className="group flex flex-col items-center justify-center py-8 px-4 rounded-xl border border-border/50 bg-background transition-all duration-500 hover:border-primary/30 hover:shadow-[0_8px_40px_-12px_hsl(var(--primary)/0.1)]"
                  {...stagger(i)}
                >
                  <MapPin className="w-5 h-5 text-primary/60 mb-3 group-hover:text-primary transition-colors duration-300" strokeWidth={1.5} />
                  <span className="font-sans text-xs font-medium text-foreground tracking-wide text-center">
                    {b}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ INTELIGÊNCIA DE MERCADO ═══════════════ */}
        <section className="py-24 lg:py-32 px-6 lg:px-12 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-16" {...fadeUp}>
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-primary mb-4 font-medium">
                Dados e análise
              </p>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground tracking-[-0.02em] leading-[1.2] mb-4">
                Inteligência de mercado
              </h2>
              <p className="font-sans text-sm text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
                Acompanhamento contínuo da performance do ativo com benchmarks e relatórios periódicos.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  className="group bg-background border border-border/50 rounded-xl p-8 text-center transition-all duration-500 hover:border-primary/25 hover:shadow-[0_8px_40px_-12px_hsl(var(--primary)/0.1)]"
                  {...stagger(i)}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/5 mb-5 group-hover:bg-primary/10 transition-colors duration-300">
                    <card.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-sm font-medium text-foreground tracking-wide leading-snug">
                    {card.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ ADMINISTRAÇÃO COMPLETA ═══════════════ */}
        <section className="py-24 lg:py-32 px-6 lg:px-12 bg-background">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            <motion.div {...fadeUp}>
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-primary mb-4 font-medium">
                Serviço completo
              </p>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground tracking-[-0.02em] leading-[1.2] mb-6">
                Administração completa da locação
              </h2>
              <p className="font-sans text-sm md:text-base text-muted-foreground font-light leading-[1.9] tracking-wide">
                A Judice & Araujo realiza toda a gestão operacional do imóvel, do posicionamento à manutenção do relacionamento com inquilinos.
              </p>
            </motion.div>
            <div className="space-y-4">
              {adminSteps.map((step, i) => (
                <motion.div
                  key={step.label}
                  className="group flex items-center gap-5 py-5 px-6 rounded-xl border border-border/40 bg-background transition-all duration-500 hover:border-primary/25 hover:shadow-[0_4px_20px_-8px_hsl(var(--primary)/0.08)]"
                  {...stagger(i)}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                    <step.icon className="w-4.5 h-4.5 text-primary" strokeWidth={1.5} />
                  </div>
                  <span className="font-sans text-sm text-foreground tracking-wide">
                    {step.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ INVESTIDORES & FAMILY OFFICES ═══════════════ */}
        <section className="py-24 lg:py-32 px-6 lg:px-12 bg-primary">
          <div className="max-w-5xl mx-auto text-center">
            <motion.p
              className="font-sans text-[10px] tracking-[0.3em] uppercase text-primary-foreground/40 mb-4 font-medium"
              {...fadeUp}
            >
              Parcerias estratégicas
            </motion.p>
            <motion.h2
              className="font-display text-2xl md:text-3xl lg:text-4xl text-primary-foreground tracking-[-0.02em] leading-[1.2] mb-6"
              {...fadeUp}
            >
              Gestão para investidores e family offices
            </motion.h2>
            <motion.p
              className="font-sans text-sm md:text-base text-primary-foreground/55 font-light leading-[1.9] tracking-wide max-w-2xl mx-auto mb-12"
              {...fadeUp}
            >
              Atuamos em parceria com gestores de patrimônio, bancos e family offices, oferecendo suporte especializado na gestão de ativos imobiliários.
            </motion.p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-3xl mx-auto">
              {[
                { icon: Briefcase, label: "Expertise local" },
                { icon: Eye, label: "Acompanhamento constante" },
                { icon: ShieldCheck, label: "Governança" },
                { icon: Handshake, label: "Transparência" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex flex-col items-center gap-3 py-6 px-4 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 transition-all duration-500 hover:bg-primary-foreground/10"
                  {...stagger(i)}
                >
                  <item.icon className="w-5 h-5 text-primary-foreground/60" strokeWidth={1.5} />
                  <span className="font-sans text-xs text-primary-foreground/70 tracking-wide text-center">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ FORMULÁRIO DE CONTATO ═══════════════ */}
        <section id="contato" className="py-24 md:py-32 px-6 md:px-16 bg-background">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
              {/* Left */}
              <motion.div
                {...fadeUp}
                className="lg:sticky lg:top-32 self-start"
              >
                <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-4">
                  Contato
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6 leading-[1.15]">
                  Fale com nossa equipe
                </h2>
                <p className="font-sans text-sm text-muted-foreground leading-[1.8] mb-8">
                  Se você possui um imóvel de alto padrão e deseja uma gestão profissional, estratégica e confiável, entre em contato com a Judice & Araujo.
                </p>
                <div className="hidden lg:block">
                  <div className="w-16 h-px bg-primary/30" />
                </div>
              </motion.div>

              {/* Right — form */}
              <motion.form
                onSubmit={handleSubmit}
                className="bg-background rounded-lg p-8 md:p-10 shadow-[0_8px_40px_-12px_hsl(var(--foreground)/0.06)] border border-border/30"
                {...fadeUp}
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
                </div>

                <p className="font-sans text-[10px] text-muted-foreground leading-relaxed mt-6 mb-6">
                  Ao informar meus dados concordo com a{" "}
                  <a href="#" className="underline hover:text-primary transition-colors">
                    Política de Privacidade
                  </a>{" "}
                  e{" "}
                  <a href="#" className="underline hover:text-primary transition-colors">
                    Termos de Uso
                  </a>
                  .
                </p>

                <motion.button
                  type="submit"
                  className="group inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-xs font-sans font-medium tracking-[0.12em] uppercase hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_4px_20px_-4px_hsl(var(--primary)/0.4)]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-4 h-4" />
                  Falar com a equipe
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

export default GestaoAtivos;
