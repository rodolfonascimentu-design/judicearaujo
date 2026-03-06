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
          className="-mt-12 font-sans text-[15px] md:text-base leading-[1.9] text-muted-foreground font-light tracking-wide max-w-2xl mx-auto"
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

    {/* 3️⃣ Narrativa + Cards lado a lado */}
    <div className="py-28 lg:py-36 px-6 lg:px-12 bg-[#FFFBF0]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Esquerda — blocos narrativos */}
        <div className="flex flex-col justify-center space-y-8">
          {narrativeBlocks.map((text, i) => (
            <motion.p
              key={i}
              className="font-sans text-[15px] md:text-base text-muted-foreground font-light leading-[1.9] tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              {text}
            </motion.p>
          ))}

          {/* Fechamento forte */}
          <motion.div
            className="pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-display text-xl md:text-2xl text-foreground leading-snug">
              Grandes imóveis não são apenas bens.
            </p>
            <p className="font-display text-xl md:text-2xl text-foreground leading-snug mt-1">
              São ativos que atravessam gerações.
            </p>
            <div className="w-10 h-px bg-primary mt-8" />
          </motion.div>
        </div>

        {/* Direita — cards */}
        <div className="flex flex-col gap-6 justify-center">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="group flex items-start gap-5 p-6 rounded-lg border border-border/30 bg-transparent transition-all duration-500 hover:border-primary/20 hover:bg-primary/[0.03]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-full border border-primary/15 flex items-center justify-center transition-colors duration-500 group-hover:bg-primary/10">
                <pillar.icon className="w-[18px] h-[18px] text-primary transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div>
                <h3 className="font-display text-base text-foreground mb-1.5">
                  {pillar.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    {/* 4️⃣ CTA */}
    <div className="py-20 lg:py-28 px-6 text-center bg-[#FFFBF0]">
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
