import { motion } from "framer-motion";
import { Shield, Users, TrendingUp } from "lucide-react";
import SectionHeader from "./SectionHeader";

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

const PropertyManagement = () => (
  <section className="py-32 lg:py-44 px-6 lg:px-12 bg-[#FFFBF0]">
    <div className="max-w-6xl mx-auto">
      <SectionHeader title="Administração de Imóveis" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left – text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-display text-lg md:text-xl italic text-foreground/80 mb-10 leading-relaxed">
            Alguns patrimônios merecem mais do que gestão. Merecem curadoria.
          </p>

          <div className="space-y-5 text-muted-foreground font-sans text-[15px] leading-[1.8] font-light tracking-wide">
            <p>
              Cada imóvel carrega uma história, um investimento e um legado.
              Administrá-lo exige sensibilidade para compreender seu verdadeiro
              valor e estratégia para preservá-lo e ampliá-lo ao longo do tempo.
            </p>
            <p>
              Na Judice & Araujo, cada propriedade é tratada com atenção aos
              detalhes e foco em resultados. Nossa equipe conduz toda a gestão do
              imóvel com discrição e precisão, desde a seleção criteriosa de
              locatários até a administração financeira, jurídica e operacional.
            </p>
            <p>
              Mais do que administrar, conectamos propriedades excepcionais às
              pessoas certas. Assim garantimos tranquilidade ao proprietário e a
              valorização constante do patrimônio.
            </p>
            <p className="font-display text-foreground text-base italic">
              Grandes imóveis não são apenas bens. São ativos que atravessam
              gerações.
            </p>
          </div>

          <motion.button
            className="mt-10 px-8 py-3.5 rounded-full text-[12px] font-sans font-semibold tracking-[0.15em] uppercase bg-primary text-primary-foreground"
            style={{ boxShadow: "0 4px 14px -2px hsl(var(--primary) / 0.3)" }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Solicitar uma avaliação confidencial
          </motion.button>
        </motion.div>

        {/* Right – pillars */}
        <div className="flex flex-col gap-8 justify-center">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="flex items-start gap-5 p-6 rounded-xl bg-white/70 border border-border/40"
              style={{ boxShadow: "0 2px 12px -4px rgba(0,0,0,0.06)" }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                <pillar.icon className="w-5 h-5 text-primary" />
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
  </section>
);

export default PropertyManagement;
