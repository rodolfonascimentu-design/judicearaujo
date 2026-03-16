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
  transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
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

  /* elegant thin divider */
  const Divider = () => (
    <div className="flex items-center justify-center py-2">
      <div className="w-16 h-px" style={{ background: "hsl(0 0% 78%)" }} />
    </div>
  );

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "#ffffff" }}>
      <Navbar />
      <main>
        {/* ═══════════════ HERO ═══════════════ */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <img
            src={heroImg}
            alt="Interior de apartamento de alto padrão no Rio de Janeiro"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(18,18,18,0.55) 0%, rgba(18,18,18,0.7) 100%)" }} />
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <motion.p
              className="font-sans text-[10px] tracking-[0.45em] uppercase mb-8 font-medium"
              style={{ color: "rgba(255,255,255,0.45)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Judice & Araujo
            </motion.p>
            <motion.h1
              className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-light tracking-[-0.02em] leading-[1.08] mb-7"
              style={{ color: "#ffffff" }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Gestão de Ativos Imobiliários
            </motion.h1>
            <motion.p
              className="font-display text-lg md:text-xl font-light tracking-wide mb-12"
              style={{ color: "rgba(255,255,255,0.6)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Administração estratégica de imóveis de alto padrão
            </motion.p>
            <motion.a
              href="#contato"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-sans text-[11px] font-semibold tracking-[0.15em] uppercase transition-all duration-300"
              style={{
                background: "#ffffff",
                color: "#121212",
              }}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 30px -8px rgba(255,255,255,0.25)" }}
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

        {/* ═══════════════ HIGHLIGHTS ═══════════════ */}
        <section className="py-24 lg:py-32 px-6 lg:px-12" style={{ background: "#fafafa" }}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <motion.div
                key={h.value}
                className="group relative rounded-xl p-8 text-center transition-all duration-500"
                style={{
                  background: "#ffffff",
                  border: "1px solid hsl(0 0% 90%)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "hsl(171 100% 12% / 0.25)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px -12px hsl(171 100% 12% / 0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "hsl(0 0% 90%)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
                {...stagger(i)}
              >
                <p className="font-display text-2xl md:text-3xl mb-3 tracking-tight" style={{ color: "hsl(171 100% 12%)" }}>
                  {h.value}
                </p>
                <p className="font-sans text-xs tracking-wide leading-relaxed" style={{ color: "hsl(0 0% 45%)" }}>
                  {h.label}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ═══════════════ O QUE É GESTÃO ═══════════════ */}
        <section className="py-28 lg:py-36 px-6 lg:px-12" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div {...fadeUp}>
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase mb-5 font-medium" style={{ color: "hsl(171 100% 12%)" }}>
                Nosso serviço
              </p>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] leading-[1.2] mb-8" style={{ color: "hsl(0 0% 10%)" }}>
                O que é Gestão de Ativos Imobiliários
              </h2>
              <p className="font-sans text-sm md:text-[15px] font-light leading-[2] tracking-wide mb-5" style={{ color: "hsl(0 0% 40%)" }}>
                A gestão de ativos imobiliários é uma abordagem profissional em que o imóvel é tratado como um ativo patrimonial, acompanhado continuamente para maximizar seu potencial.
              </p>
              <p className="font-sans text-sm md:text-[15px] font-light leading-[2] tracking-wide" style={{ color: "hsl(0 0% 40%)" }}>
                Na Judice & Araujo, cada imóvel é analisado dentro de seu contexto de mercado, considerando localização, tipologia, demanda e benchmarks imobiliários.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {assetCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  className="group rounded-xl p-7 transition-all duration-500"
                  style={{
                    background: "#fafafa",
                    border: "1px solid hsl(0 0% 91%)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "hsl(171 100% 12% / 0.2)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px -12px hsl(171 100% 12% / 0.07)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "hsl(0 0% 91%)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                  {...stagger(i)}
                >
                  <card.icon className="w-6 h-6 mb-4" style={{ color: "hsl(171 100% 12%)" }} strokeWidth={1.5} />
                  <h3 className="font-display text-sm font-medium mb-2 tracking-wide" style={{ color: "hsl(0 0% 10%)" }}>
                    {card.title}
                  </h3>
                  <p className="font-sans text-xs leading-relaxed" style={{ color: "hsl(0 0% 50%)" }}>
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* ═══════════════ BAIRROS ═══════════════ */}
        <section className="py-28 lg:py-36 px-6 lg:px-12" style={{ background: "#fafafa" }}>
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-20" {...fadeUp}>
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase mb-5 font-medium" style={{ color: "hsl(171 100% 12%)" }}>
                Áreas de atuação
              </p>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] leading-[1.2] mb-5" style={{ color: "hsl(0 0% 10%)" }}>
                Bairros de atuação
              </h2>
              <p className="font-sans text-sm font-light max-w-xl mx-auto leading-relaxed" style={{ color: "hsl(0 0% 45%)" }}>
                Nossa equipe acompanha de perto a dinâmica dos bairros mais valorizados do Rio de Janeiro.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
              {bairros.map((b, i) => (
                <motion.div
                  key={b}
                  className="group flex flex-col items-center justify-center py-10 px-4 rounded-xl transition-all duration-500"
                  style={{
                    background: "#ffffff",
                    border: "1px solid hsl(0 0% 90%)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "hsl(171 100% 12% / 0.25)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px -12px hsl(171 100% 12% / 0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "hsl(0 0% 90%)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                  {...stagger(i)}
                >
                  <MapPin className="w-5 h-5 mb-3 transition-colors duration-300" style={{ color: "hsl(171 100% 12% / 0.5)" }} strokeWidth={1.5} />
                  <span className="font-display text-sm font-medium tracking-wide text-center" style={{ color: "hsl(0 0% 15%)" }}>
                    {b}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* ═══════════════ INTELIGÊNCIA DE MERCADO ═══════════════ */}
        <section className="py-28 lg:py-36 px-6 lg:px-12" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-20" {...fadeUp}>
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase mb-5 font-medium" style={{ color: "hsl(171 100% 12%)" }}>
                Dados e análise
              </p>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] leading-[1.2] mb-5" style={{ color: "hsl(0 0% 10%)" }}>
                Inteligência de mercado
              </h2>
              <p className="font-sans text-sm font-light max-w-xl mx-auto leading-relaxed" style={{ color: "hsl(0 0% 45%)" }}>
                Acompanhamento contínuo da performance do ativo com benchmarks e relatórios periódicos.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  className="group rounded-xl p-8 text-center transition-all duration-500"
                  style={{
                    background: "#fafafa",
                    border: "1px solid hsl(0 0% 91%)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "hsl(171 100% 12% / 0.2)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px -12px hsl(171 100% 12% / 0.07)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "hsl(0 0% 91%)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                  {...stagger(i)}
                >
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 transition-colors duration-300"
                    style={{ background: "hsl(171 100% 12% / 0.06)" }}
                  >
                    <card.icon className="w-5 h-5" style={{ color: "hsl(171 100% 12%)" }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-sm font-medium tracking-wide leading-snug" style={{ color: "hsl(0 0% 12%)" }}>
                    {card.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* ═══════════════ ADMINISTRAÇÃO COMPLETA ═══════════════ */}
        <section className="py-28 lg:py-36 px-6 lg:px-12" style={{ background: "#fafafa" }}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div {...fadeUp}>
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase mb-5 font-medium" style={{ color: "hsl(171 100% 12%)" }}>
                Serviço completo
              </p>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] leading-[1.2] mb-8" style={{ color: "hsl(0 0% 10%)" }}>
                Administração completa da locação
              </h2>
              <p className="font-sans text-sm md:text-[15px] font-light leading-[2] tracking-wide" style={{ color: "hsl(0 0% 40%)" }}>
                A Judice & Araujo realiza toda a gestão operacional do imóvel, do posicionamento à manutenção do relacionamento com inquilinos.
              </p>
            </motion.div>
            <div className="space-y-4">
              {adminSteps.map((step, i) => (
                <motion.div
                  key={step.label}
                  className="group flex items-center gap-5 py-5 px-6 rounded-xl transition-all duration-500"
                  style={{
                    background: "#ffffff",
                    border: "1px solid hsl(0 0% 91%)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "hsl(171 100% 12% / 0.2)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px -8px hsl(171 100% 12% / 0.06)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "hsl(0 0% 91%)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                  {...stagger(i)}
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300"
                    style={{ background: "hsl(171 100% 12% / 0.06)" }}
                  >
                    <step.icon className="w-[18px] h-[18px]" style={{ color: "hsl(171 100% 12%)" }} strokeWidth={1.5} />
                  </div>
                  <span className="font-sans text-sm tracking-wide" style={{ color: "hsl(0 0% 18%)" }}>
                    {step.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* ═══════════════ INVESTIDORES & FAMILY OFFICES ═══════════════ */}
        <section className="py-28 lg:py-36 px-6 lg:px-12" style={{ background: "hsl(171 100% 12%)" }}>
          <div className="max-w-5xl mx-auto text-center">
            <motion.p
              className="font-sans text-[10px] tracking-[0.3em] uppercase mb-5 font-medium"
              style={{ color: "rgba(255,255,255,0.35)" }}
              {...fadeUp}
            >
              Parcerias estratégicas
            </motion.p>
            <motion.h2
              className="font-display text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] leading-[1.2] mb-7"
              style={{ color: "#ffffff" }}
              {...fadeUp}
            >
              Gestão para investidores e family offices
            </motion.h2>
            <motion.p
              className="font-sans text-sm md:text-[15px] font-light leading-[2] tracking-wide max-w-2xl mx-auto mb-14"
              style={{ color: "rgba(255,255,255,0.5)" }}
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
                  className="flex flex-col items-center gap-4 py-8 px-4 rounded-xl transition-all duration-500"
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.04)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                  }}
                  {...stagger(i)}
                >
                  <item.icon className="w-5 h-5" style={{ color: "rgba(255,255,255,0.55)" }} strokeWidth={1.5} />
                  <span className="font-sans text-xs tracking-wide text-center" style={{ color: "rgba(255,255,255,0.65)" }}>
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ FORMULÁRIO DE CONTATO ═══════════════ */}
        <section id="contato" className="py-28 md:py-36 px-6 md:px-16" style={{ background: "#ffffff" }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
              {/* Left */}
              <motion.div
                {...fadeUp}
                className="lg:sticky lg:top-32 self-start"
              >
                <p className="font-sans text-[10px] tracking-[0.25em] uppercase mb-5" style={{ color: "hsl(0 0% 50%)" }}>
                  Contato
                </p>
                <h2 className="font-display text-3xl md:text-4xl mb-7 leading-[1.15]" style={{ color: "hsl(0 0% 10%)" }}>
                  Fale com nossa equipe
                </h2>
                <p className="font-sans text-sm leading-[1.9] mb-8" style={{ color: "hsl(0 0% 45%)" }}>
                  Se você possui um imóvel de alto padrão e deseja uma gestão profissional, estratégica e confiável, entre em contato com a Judice & Araujo.
                </p>
                <div className="hidden lg:block">
                  <div className="w-16 h-px" style={{ background: "hsl(171 100% 12% / 0.25)" }} />
                </div>
              </motion.div>

              {/* Right — form */}
              <motion.form
                onSubmit={handleSubmit}
                className="rounded-lg p-8 md:p-10"
                style={{
                  background: "#ffffff",
                  boxShadow: "0 8px 40px -12px hsl(0 0% 7% / 0.06)",
                  border: "1px solid hsl(0 0% 92%)",
                }}
                {...fadeUp}
              >
                <div className="space-y-7">
                  {fields.map((field) => (
                    <div key={field.key} className="relative">
                      <label
                        className={`absolute left-0 transition-all duration-300 font-sans pointer-events-none ${
                          focused === field.key || form[field.key]
                            ? "text-[10px] tracking-[0.15em] uppercase -top-1"
                            : "text-sm top-3"
                        }`}
                        style={{
                          color: focused === field.key || form[field.key]
                            ? "hsl(171 100% 12%)"
                            : "hsl(0 0% 50%)",
                        }}
                      >
                        {field.label}
                        {field.required && <span style={{ color: "hsl(171 100% 12%)" }} className="ml-0.5">*</span>}
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
                          color: "hsl(0 0% 10%)",
                          borderColor: focused === field.key ? "hsl(171 100% 12%)" : "hsl(0 0% 88%)",
                        }}
                      />
                    </div>
                  ))}
                </div>

                <p className="font-sans text-[10px] leading-relaxed mt-7 mb-7" style={{ color: "hsl(0 0% 55%)" }}>
                  Ao informar meus dados concordo com a{" "}
                  <a href="#" className="underline transition-colors" style={{ color: "hsl(0 0% 40%)" }}>
                    Política de Privacidade
                  </a>{" "}
                  e{" "}
                  <a href="#" className="underline transition-colors" style={{ color: "hsl(0 0% 40%)" }}>
                    Termos de Uso
                  </a>
                  .
                </p>

                <motion.button
                  type="submit"
                  className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-sans font-medium tracking-[0.12em] uppercase transition-all duration-300"
                  style={{
                    background: "hsl(171 100% 12%)",
                    color: "#ffffff",
                  }}
                  whileHover={{ scale: 1.02, boxShadow: "0 4px 20px -4px hsl(171 100% 12% / 0.35)" }}
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
