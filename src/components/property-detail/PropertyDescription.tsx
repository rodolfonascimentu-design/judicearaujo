import { motion } from "framer-motion";
import { MessageCircle, Info, Share2, Calculator, ArrowRight } from "lucide-react";
import { PropertyDetailData } from "@/data/propertyDetail";

interface Props {
  property: PropertyDetailData;
}

const PropertyDescription = ({ property }: Props) => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-16 bg-background">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16">
        {/* Left — editorial description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-4">
            Sobre o Imóvel
          </p>
          <h2 className="font-display text-2xl md:text-4xl text-foreground mb-8 leading-[1.2]">
            Uma residência que redefine o conceito de exclusividade.
          </h2>
          <div className="space-y-6">
            {property.description.map((p, i) => (
              <motion.p
                key={i}
                className="font-sans text-sm md:text-base text-muted-foreground leading-[1.9]"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Right — sticky conversion card */}
        <div className="lg:sticky lg:top-24 self-start">
          <motion.div
            className="relative overflow-hidden bg-card border border-border/50 rounded-lg p-0 shadow-[0_8px_40px_-12px_hsl(var(--foreground)/0.08)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Top accent bar */}
            <div className="h-1 w-full bg-primary" />

            <div className="p-8 space-y-6">
              {/* Status badge */}
              <motion.span
                className="inline-block font-sans text-[10px] tracking-[0.2em] uppercase px-4 py-1.5 rounded-full bg-primary/8 text-primary font-medium border border-primary/15"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                {property.status === "launch" ? "Lançamento" : property.status === "construction" ? "Em obras" : "Pronto para morar"}
              </motion.span>

              {/* Price */}
              <div>
                <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-2">{property.priceLabel}</p>
                <p className="font-display text-3xl text-foreground">{property.price}</p>
              </div>

              {/* Divider */}
              <div className="h-px bg-border" />

              {/* CTA buttons */}
              <div className="space-y-3">
                <a
                  href={`https://wa.me/${property.agent.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2.5 w-full bg-primary text-primary-foreground py-3.5 rounded-full text-xs font-sans font-medium tracking-[0.12em] uppercase hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_4px_20px_-4px_hsl(var(--primary)/0.4)]"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                </a>
                <button className="group flex items-center justify-center gap-2.5 w-full border border-border text-foreground py-3.5 rounded-full text-xs font-sans font-medium tracking-[0.12em] uppercase hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                  <Info className="w-4 h-4" />
                  Solicitar Informações
                </button>
                <button className="group flex items-center justify-center gap-2 w-full text-muted-foreground py-2.5 text-xs font-sans font-medium tracking-[0.1em] uppercase hover:text-foreground transition-colors duration-300">
                  <Share2 className="w-3.5 h-3.5" />
                  Compartilhar
                </button>
              </div>

              {/* Financing */}
              <div className="relative bg-muted/30 rounded-lg p-5 -mx-1">
                <p className="font-sans text-xs text-muted-foreground mb-3 leading-relaxed">
                  Que tal financiar a compra deste imóvel?
                </p>
                <button className="group flex items-center justify-center gap-2.5 w-full bg-foreground text-background py-3 rounded-full text-xs font-sans font-medium tracking-[0.12em] uppercase hover:bg-foreground/90 transition-all duration-300">
                  <Calculator className="w-4 h-4" />
                  Quero Simular
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDescription;
