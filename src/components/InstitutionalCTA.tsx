import { motion } from "framer-motion";

const InstitutionalCTA = () => (
  <section className="py-32 lg:py-44 px-6 lg:px-12 bg-background">
    <motion.div
      className="max-w-4xl mx-auto text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground font-medium mb-6">
        Consultoria Imobiliária
      </p>
      <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-foreground tracking-[-0.02em] leading-[1.2] mb-8">
        Avalie seu imóvel com a Judice & Araujo e garanta um negócio seguro e vantajoso
      </h2>
      <div className="w-10 h-px bg-border mx-auto mb-8" />
      <p className="font-sans text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide">
        Conte com nossa equipe especializada e uma plataforma de alta qualidade para anunciar seu imóvel para venda ou locação de forma ágil e eficiente. Não perca mais tempo tentando fazer tudo sozinho — confie em quem entende do mercado imobiliário.
      </p>
      <a
        href="#avaliar"
        className="inline-block px-12 py-4 bg-primary hover:bg-gold-light text-primary-foreground text-[11px] font-sans font-medium tracking-[0.2em] uppercase transition-all duration-300 rounded-[4px]"
      >
        Avaliar Imóvel
      </a>
    </motion.div>
  </section>
);

export default InstitutionalCTA;
