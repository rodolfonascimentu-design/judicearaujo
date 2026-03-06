import { motion } from "framer-motion";
import { Shield, Users, TrendingUp } from "lucide-react";
import SectionHeader from "./SectionHeader";
import ZoomParallax from "./ZoomParallax";

const pillars = [
  {
    icon: Shield,
    title: "Discrição Absoluta",
    description: "Gestão conduzida com total confidencialidade e cuidado.",
  },
  {
    icon: Users,
    title: "Seleção Estratégica",
    description: "Conectamos sua propriedade a perfis altamente qualificados.",
  },
  {
    icon: TrendingUp,
    title: "Valorização do Patrimônio",
    description: "Estratégia contínua para preservar e potencializar seu ativo.",
  },
];

const narrativeBlocks = [
  "Na Judice & Araujo, cada propriedade é tratada com atenção aos detalhes e foco em resultados.",
  "Nossa equipe conduz toda a gestão do imóvel com discrição e precisão, desde a seleção criteriosa de locatários até a administração financeira, jurídica e operacional.",
  "Mais do que administrar, conectamos propriedades excepcionais às pessoas certas.",
  "Assim garantimos tranquilidade ao proprietário e a valorização constante do patrimônio.",
];

const PropertyManagement = () => (
  <section className="bg-background">
    {/* 1️⃣ Introdução elegante */}
    <div className="py-32 lg:py-44 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeader
          title="Administração de Imóveis"
          subtitle="Alguns patrimônios merecem mais do que gestão. Merecem curadoria."
        />
        <motion.p
          className="font-sans text-[15px] md:text-base leading-[1.9] text-muted-foreground font-light tracking-wide max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Cada imóvel carrega uma história, um investimento e um legado.
          Administrá-lo exige sensibilidade para compreender seu verdadeiro valor
          e estratégia para preservá-lo e ampliá-lo ao longo do tempo.
        </motion.p>
      </div>
    </div>

    {/* 2️⃣ Experiência parallax */}
    <ZoomParallax />

    {/* 3️⃣ Blocos narrativos */}
    <div className="py-28 lg:py-40 px-6 lg:px-12 bg-[#FFFBF0]">
      <div className="max-w-2xl mx-auto space-y-20">
        {narrativeBlocks.map((text, i) => (
          <motion.p
            key={i}
            className="font-display text-xl md:text-2xl lg:text-[1.65rem] text-foreground/85 text-center leading-relaxed italic"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.05 }}
          >
            {text}
          </motion.p>
        ))}

        {/* Fechamento forte */}
        <motion.div
          className="text-center pt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-display text-2xl md:text-3xl text-foreground leading-snug">
            Grandes imóveis não são apenas bens.
          </p>
          <p className="font-display text-2xl md:text-3xl text-foreground leading-snug mt-2">
            São ativos que atravessam gerações.
          </p>
          <div className="w-10 h-px bg-primary mx-auto mt-8" />
        </motion.div>
      </div>
    </div>

    {/* 4️⃣ Cards de diferenciais */}
    <div className="py-28 lg:py-36 px-6 lg:px-12 bg-background">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            className="group relative p-8 rounded-lg border border-border/40 bg-card transition-shadow duration-300 hover:shadow-[0_8px_30px_-12px_hsl(var(--primary)/0.15)]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-primary/20">
              <pillar.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-lg text-foreground mb-3">
              {pillar.title}
            </h3>
            <p className="font-sans text-sm text-muted-foreground font-light leading-relaxed">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* 5️⃣ CTA */}
    <div className="pb-28 lg:pb-36 px-6 text-center bg-background">
      <motion.button
        className="px-10 py-4 rounded-full text-[12px] font-sans font-semibold tracking-[0.15em] uppercase bg-primary text-primary-foreground transition-shadow duration-300 hover:shadow-[0_6px_20px_-4px_hsl(var(--primary)/0.4)]"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-40px" }}
        transition={{ duration: 0.5 }}
      >
        Solicitar uma avaliação confidencial
      </motion.button>
    </div>
  </section>
);

export default PropertyManagement;
