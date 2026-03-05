import { motion } from "framer-motion";
import editorialImage from "@/assets/editorial.jpg";

const EditorialSection = () => (
  <section id="sobre" className="py-32 lg:py-44 bg-cream">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Image */}
        <motion.div
          className="relative overflow-hidden rounded-[4px] aspect-[3/4] lg:aspect-auto lg:h-[700px]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={editorialImage}
            alt="Estilo de vida luxuoso no Rio de Janeiro"
            className="w-full h-full object-cover rounded-[4px]"
            loading="lazy"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="lg:py-16"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-primary mb-8 font-medium">
            Nossa História
          </p>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-normal text-foreground leading-[1.2] mb-10 tracking-[-0.02em]">
            Tradição e sofisticação no mercado imobiliário carioca
          </h2>
          <div className="w-10 h-px bg-primary mb-10" />
          <p className="font-sans text-sm text-muted-foreground leading-[1.9] mb-6 font-light">
            Desde 1978, a Judice & Araujo é referência absoluta no mercado de imóveis de luxo no Rio de Janeiro. 
            Nossa expertise abrange os bairros mais desejados da cidade — Leblon, Ipanema, Lagoa, Gávea e 
            Jardim Botânico — onde cada propriedade é selecionada com o rigor e a exclusividade que nossos 
            clientes merecem.
          </p>
          <p className="font-sans text-sm text-muted-foreground leading-[1.9] mb-12 font-light">
            Combinamos tradição familiar com uma visão contemporânea do mercado, oferecendo consultoria 
            personalizada e um portfólio incomparável de imóveis únicos. Cada transação é conduzida com 
            discrição, transparência e o compromisso com a excelência.
          </p>
          <a
            href="#"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground text-[11px] font-sans font-medium tracking-[0.2em] uppercase rounded-full transition-all duration-300 hover:bg-cream hover:text-primary"
          >
            Conheça Nossa História
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default EditorialSection;
