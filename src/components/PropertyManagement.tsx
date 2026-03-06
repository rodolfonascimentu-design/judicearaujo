import { motion } from "framer-motion";
import { Shield, Users, TrendingUp } from "lucide-react";
import SectionHeader from "./SectionHeader";
import ZoomParallax from "./ZoomParallax";
import parallax1 from "@/assets/parallax-1.jpg";

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
  "Mais do que administrar, conectamos propriedades excepcionais às pessoas certas. Assim garantimos tranquilidade ao proprietário e a valorização constante do patrimônio.",
];

const PropertyManagement = () => (
  <section className="bg-background">
    {/* 1️⃣ Introdução elegante */}
    <div className="py-28 lg:py-36 px-6 lg:px-12">
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
    <div className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Esquerda — imagem + texto narrativo */}
        <div className="flex flex-col justify-center">
          {/* Imagem editorial */}
          <motion.div
            className="relative overflow-hidden rounded-md mb-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={parallax1}
              alt="Arquitetura de alto padrão"
              className="w-full h-[280px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
          </motion.div>

          <div className="space-y-5">
            {narrativeBlocks.map((text, i) => (
              <motion.p
                key={i}
                className="font-sans text-[15px] text-muted-foreground font-light leading-[1.85] tracking-wide"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                {text}
              </motion.p>
            ))}
          </div>

          {/* Fechamento forte */}
          <motion.div
            className="mt-8 pl-5 border-l-2 border-primary/30"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-display text-lg md:text-xl text-foreground leading-snug">
              Grandes imóveis não são apenas bens.
            </p>
            <p className="font-display text-lg md:text-xl text-foreground leading-snug mt-1">
              São ativos que atravessam gerações.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.button
            className="mt-10 self-start px-10 py-4 rounded-full text-[12px] font-sans font-semibold tracking-[0.15em] uppercase bg-primary text-primary-foreground transition-shadow duration-300 hover:shadow-[0_6px_20px_-4px_hsl(var(--primary)/0.4)]"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-40px" }}
            transition={{ duration: 0.5 }}
          >
            Solicitar uma avaliação confidencial
          </motion.button>
        </div>

        {/* Direita — cards */}
        <div className="flex flex-col gap-5 justify-center">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="group relative p-7 rounded-lg border border-border/30 bg-transparent overflow-hidden transition-all duration-500 hover:border-primary/25"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -3 }}
            >
              {/* Hover background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary/15 flex items-center justify-center transition-all duration-500 group-hover:bg-primary/10 group-hover:border-primary/25">
                  <pillar.icon className="w-5 h-5 text-primary transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="font-display text-[17px] text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default PropertyManagement;
