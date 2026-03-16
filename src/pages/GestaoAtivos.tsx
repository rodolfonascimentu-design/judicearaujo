import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2, TrendingUp, Users, ShieldCheck, BarChart3, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, ease: "easeOut" },
};

const staggerChild = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3 mt-6">
    {items.map((item, i) => (
      <motion.li
        key={i}
        className="flex items-start gap-3 text-sm md:text-base text-muted-foreground font-light leading-relaxed"
        {...staggerChild(0.1 + i * 0.05)}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
        {item}
      </motion.li>
    ))}
  </ul>
);

const SectionBlock = ({
  icon: Icon,
  title,
  children,
  reversed,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  reversed?: boolean;
}) => (
  <section className="py-24 lg:py-32 px-6 lg:px-12">
    <div className={`max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-start ${reversed ? "lg:grid-cols-[1fr_auto] lg:direction-rtl" : ""}`}>
      <motion.div
        className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/5 border border-primary/10"
        {...staggerChild(0)}
      >
        <Icon className="w-7 h-7 text-primary" strokeWidth={1.4} />
      </motion.div>
      <div>
        <motion.h2
          className="font-display text-xl md:text-2xl lg:text-3xl font-normal text-foreground tracking-[-0.02em] leading-[1.25] mb-6"
          {...fadeUp}
        >
          {title}
        </motion.h2>
        {children}
      </div>
    </div>
  </section>
);

const Divider = () => (
  <div className="max-w-5xl mx-auto px-6 lg:px-12">
    <div className="h-px bg-border" />
  </div>
);

const GestaoAtivos = () => {
  useEffect(() => {
    document.title = "Gestão de Ativos Imobiliários | Administração Premium de Imóveis – Judice & Araujo";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Serviço especializado de gestão de ativos imobiliários para proprietários e investidores de imóveis de alto padrão no Rio de Janeiro.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06]" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 30%, hsl(var(--gold-light)), transparent)" }} />
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 pt-40 pb-28 lg:pt-52 lg:pb-36 text-center">
            <motion.p
              className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#aed9d7] mb-8 font-medium"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Judice & Araujo
            </motion.p>
            <motion.h1
              className="font-display text-3xl md:text-4xl lg:text-5xl font-normal text-primary-foreground tracking-[-0.02em] leading-[1.15] mb-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Gestão de Ativos Imobiliários
            </motion.h1>
            <motion.p
              className="font-display text-base md:text-lg text-primary-foreground/60 font-light tracking-wide mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Administração estratégica de imóveis de alto padrão
            </motion.p>
            <motion.div
              className="w-10 h-px bg-primary-foreground/20 mx-auto mb-10"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            />
            <motion.div
              className="max-w-2xl mx-auto space-y-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="font-sans text-sm md:text-base text-primary-foreground/55 font-light leading-[1.9] tracking-wide">
                A Judice & Araujo oferece um serviço exclusivo de Gestão de Ativos Imobiliários, desenvolvido para proprietários que desejam tratar seus imóveis como parte relevante de seu patrimônio.
              </p>
              <p className="font-sans text-sm md:text-base text-primary-foreground/55 font-light leading-[1.9] tracking-wide">
                Mais do que uma simples administração de locação, nossa atuação envolve visão estratégica, inteligência de mercado e acompanhamento contínuo do ativo.
              </p>
              <p className="font-sans text-sm md:text-base text-primary-foreground/55 font-light leading-[1.9] tracking-wide">
                Nosso objetivo é garantir que cada imóvel sob gestão esteja corretamente posicionado no mercado, preservando seu valor e capturando o melhor potencial de rentabilidade.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SEÇÃO 1 */}
        <SectionBlock icon={Building2} title="O que é Gestão de Ativos Imobiliários">
          <motion.p className="font-sans text-sm md:text-base text-muted-foreground font-light leading-[1.9] tracking-wide" {...fadeUp}>
            A gestão de ativos imobiliários é uma abordagem profissional em que o imóvel é tratado como um ativo patrimonial, acompanhado continuamente para maximizar:
          </motion.p>
          <BulletList items={["Rentabilidade", "Preservação de valor", "Liquidez", "Segurança jurídica"]} />
          <motion.p className="font-sans text-sm md:text-base text-muted-foreground font-light leading-[1.9] tracking-wide mt-6" {...staggerChild(0.3)}>
            Na Judice & Araujo, cada imóvel é analisado dentro de seu contexto de mercado, considerando localização, tipologia, demanda e benchmarks imobiliários.
          </motion.p>
          <motion.p className="font-sans text-sm md:text-base text-muted-foreground font-light leading-[1.9] tracking-wide mt-4" {...staggerChild(0.35)}>
            Essa visão permite que decisões relacionadas à locação sejam tomadas de forma estratégica e informada.
          </motion.p>
        </SectionBlock>

        <Divider />

        {/* SEÇÃO 2 */}
        <SectionBlock icon={TrendingUp} title="Expertise no mercado premium do Rio de Janeiro">
          <motion.p className="font-sans text-sm md:text-base text-muted-foreground font-light leading-[1.9] tracking-wide" {...fadeUp}>
            A Judice & Araujo é uma empresa familiar fundada em 1975, reconhecida por sua atuação no mercado imobiliário de alto padrão.
          </motion.p>
          <motion.p className="font-sans text-sm md:text-base text-muted-foreground font-light leading-[1.9] tracking-wide mt-4" {...staggerChild(0.1)}>
            Ao longo de décadas, construímos uma reputação baseada em:
          </motion.p>
          <BulletList items={[
            "Profundo conhecimento de mercado",
            "Relacionamento de longo prazo com clientes",
            "Discrição e profissionalismo",
            "Alto padrão de atendimento",
          ]} />
          <motion.p className="font-sans text-sm md:text-base text-muted-foreground font-light leading-[1.9] tracking-wide mt-8" {...staggerChild(0.4)}>
            Nossa equipe acompanha de perto a dinâmica dos bairros mais valorizados da cidade:
          </motion.p>
          <div className="flex flex-wrap gap-3 mt-4">
            {["Leblon", "Ipanema", "Lagoa", "Gávea", "Jardim Botânico", "Barra da Tijuca"].map((bairro, i) => (
              <motion.span
                key={bairro}
                className="px-4 py-2 rounded-full border border-primary/15 bg-primary/5 font-sans text-xs tracking-wide text-foreground/80"
                {...staggerChild(0.45 + i * 0.05)}
              >
                {bairro}
              </motion.span>
            ))}
          </div>
        </SectionBlock>

        <Divider />

        {/* SEÇÃO 3 */}
        <SectionBlock icon={Users} title="Atendimento personalizado">
          <motion.p className="font-sans text-sm md:text-base text-muted-foreground font-light leading-[1.9] tracking-wide" {...fadeUp}>
            Cada imóvel sob gestão recebe acompanhamento individualizado.
          </motion.p>
          <motion.p className="font-sans text-sm md:text-base text-muted-foreground font-light leading-[1.9] tracking-wide mt-4" {...staggerChild(0.1)}>
            Nosso serviço foi estruturado para oferecer aos proprietários:
          </motion.p>
          <BulletList items={[
            "Comunicação clara e constante",
            "Suporte dedicado",
            "Acompanhamento próximo das decisões relacionadas ao imóvel",
          ]} />
          <motion.p className="font-sans text-sm md:text-base text-muted-foreground font-light leading-[1.9] tracking-wide mt-6" {...staggerChild(0.3)}>
            Entendemos que cada cliente possui objetivos patrimoniais distintos, e por isso nossa atuação é sempre estratégica e personalizada.
          </motion.p>
        </SectionBlock>

        <Divider />

        {/* SEÇÃO 4 */}
        <SectionBlock icon={BarChart3} title="Inteligência de mercado e análise de performance">
          <motion.p className="font-sans text-sm md:text-base text-muted-foreground font-light leading-[1.9] tracking-wide" {...fadeUp}>
            Um dos diferenciais da Judice & Araujo é o acompanhamento contínuo da performance do ativo imobiliário.
          </motion.p>
          <motion.p className="font-sans text-sm md:text-base text-muted-foreground font-light leading-[1.9] tracking-wide mt-4" {...staggerChild(0.1)}>
            Utilizamos benchmarks e dados de mercado para analisar:
          </motion.p>
          <BulletList items={[
            "Evolução do mercado de locação",
            "Preço por metro quadrado",
            "Posicionamento frente a imóveis comparáveis",
            "Tendências do mercado imobiliário",
          ]} />
          <motion.p className="font-sans text-sm md:text-base text-muted-foreground font-light leading-[1.9] tracking-wide mt-6" {...staggerChild(0.35)}>
            Essas análises são apresentadas aos proprietários em relatórios periódicos, trazendo maior transparência e previsibilidade.
          </motion.p>
        </SectionBlock>

        <Divider />

        {/* SEÇÃO 5 */}
        <SectionBlock icon={ShieldCheck} title="Administração completa da locação">
          <motion.p className="font-sans text-sm md:text-base text-muted-foreground font-light leading-[1.9] tracking-wide" {...fadeUp}>
            A Judice & Araujo realiza toda a gestão operacional do imóvel, incluindo:
          </motion.p>
          <BulletList items={[
            "Avaliação estratégica do ativo",
            "Definição de preço e posicionamento",
            "Seleção criteriosa de inquilinos",
            "Gestão contratual",
            "Acompanhamento financeiro",
            "Suporte contínuo ao proprietário e locatário",
          ]} />
        </SectionBlock>

        <Divider />

        {/* SEÇÃO 6 */}
        <SectionBlock icon={Briefcase} title="Gestão para investidores e family offices">
          <motion.p className="font-sans text-sm md:text-base text-muted-foreground font-light leading-[1.9] tracking-wide" {...fadeUp}>
            Também atuamos em parceria com gestores de patrimônio, bancos e family offices, oferecendo suporte especializado na gestão de ativos imobiliários de seus clientes.
          </motion.p>
          <motion.p className="font-sans text-sm md:text-base text-muted-foreground font-light leading-[1.9] tracking-wide mt-4" {...staggerChild(0.1)}>
            Nosso papel é complementar a estratégia patrimonial desses investidores com uma gestão imobiliária profissional baseada em:
          </motion.p>
          <BulletList items={[
            "Expertise local",
            "Acompanhamento constante",
            "Governança",
            "Transparência",
          ]} />
        </SectionBlock>

        {/* CTA FINAL */}
        <section className="bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06]" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, hsl(var(--gold-light)), transparent)" }} />
          <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 py-28 lg:py-36 text-center">
            <motion.h2
              className="font-display text-2xl md:text-3xl lg:text-4xl font-normal text-primary-foreground tracking-[-0.02em] leading-[1.2] mb-6"
              {...fadeUp}
            >
              Fale com nossa equipe
            </motion.h2>
            <motion.div className="w-10 h-px bg-primary-foreground/20 mx-auto mb-8" {...staggerChild(0.1)} />
            <motion.p
              className="font-sans text-sm md:text-base text-primary-foreground/55 font-light leading-[1.9] tracking-wide mb-12"
              {...staggerChild(0.15)}
            >
              Se você possui um imóvel de alto padrão e deseja uma gestão profissional, estratégica e confiável, entre em contato com a Judice & Araujo.
            </motion.p>
            <motion.a
              href="#contato"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-primary-foreground text-primary font-sans text-[12px] font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:shadow-[0_6px_20px_-4px_hsl(var(--primary)/0.4)]"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              {...staggerChild(0.25)}
            >
              Agendar uma conversa
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GestaoAtivos;
