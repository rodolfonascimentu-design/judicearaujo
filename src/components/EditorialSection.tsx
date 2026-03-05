import { motion } from "framer-motion";
import editorialImage from "@/assets/editorial.jpg";

const EditorialSection = () => (
  <section id="sobre" className="py-24 lg:py-32 bg-cream">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <motion.div
          className="relative overflow-hidden aspect-[3/4] lg:aspect-auto lg:h-[650px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={editorialImage}
            alt="Estilo de vida luxuoso no Rio de Janeiro"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="lg:py-12"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-6">
            Nossa História
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-[1.15] mb-8">
            Tradição e sofisticação no mercado imobiliário carioca
          </h2>
          <div className="w-12 h-px bg-gold mb-8" />
          <p className="font-sans text-base text-muted-foreground leading-relaxed mb-6">
            Desde 1978, a Judice & Araujo é referência absoluta no mercado de imóveis de luxo no Rio de Janeiro. 
            Nossa expertise abrange os bairros mais desejados da cidade — Leblon, Ipanema, Lagoa, Gávea e 
            Jardim Botânico — onde cada propriedade é selecionada com o rigor e a exclusividade que nossos 
            clientes merecem.
          </p>
          <p className="font-sans text-base text-muted-foreground leading-relaxed mb-10">
            Combinamos tradição familiar com uma visão contemporânea do mercado, oferecendo consultoria 
            personalizada e um portfólio incomparável de imóveis únicos. Cada transação é conduzida com 
            discrição, transparência e o compromisso com a excelência.
          </p>
          <a
            href="#"
            className="inline-block text-xs font-sans font-medium tracking-[0.2em] uppercase text-gold hover:text-gold-light transition-colors border-b border-gold/40 hover:border-gold pb-1"
          >
            Conheça Nossa História
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default EditorialSection;
