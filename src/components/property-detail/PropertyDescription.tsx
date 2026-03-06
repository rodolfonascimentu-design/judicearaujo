import { motion } from "framer-motion";
import { MessageCircle, Info, Share2, Calculator } from "lucide-react";
import { PropertyDetailData } from "@/data/propertyDetail";

interface Props {
  property: PropertyDetailData;
}

const PropertyDescription = ({ property }: Props) => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-16 bg-background">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">
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
              <p key={i} className="font-sans text-sm md:text-base text-muted-foreground leading-[1.9]">
                {p}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Right — sticky conversion card */}
        <div className="lg:sticky lg:top-24 self-start">
          <motion.div
            className="bg-card border border-border rounded-[4px] p-8 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Status */}
            <span className="inline-block font-sans text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
              {property.status === "launch" ? "Lançamento" : property.status === "construction" ? "Em obras" : "Pronto para morar"}
            </span>

            {/* Price */}
            <div>
              <p className="font-sans text-xs text-muted-foreground mb-1">{property.priceLabel}</p>
              <p className="font-display text-2xl text-foreground">{property.price}</p>
            </div>

            {/* CTA buttons */}
            <div className="space-y-3">
              <a
                href={`https://wa.me/${property.agent.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-3 rounded-full text-xs font-sans font-medium tracking-[0.1em] uppercase hover:bg-primary/90 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <button className="flex items-center justify-center gap-2 w-full border border-border text-foreground py-3 rounded-full text-xs font-sans font-medium tracking-[0.1em] uppercase hover:bg-muted/50 transition-colors">
                <Info className="w-4 h-4" />
                Solicitar Informações
              </button>
              <button className="flex items-center justify-center gap-2 w-full border border-border text-foreground py-3 rounded-full text-xs font-sans font-medium tracking-[0.1em] uppercase hover:bg-muted/50 transition-colors">
                <Share2 className="w-4 h-4" />
                Compartilhar
              </button>
            </div>

            {/* Financing */}
            <div className="border-t border-border pt-6">
              <p className="font-sans text-sm text-muted-foreground mb-3">
                Que tal financiar a compra deste imóvel?
              </p>
              <button className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground py-3 rounded-full text-xs font-sans font-medium tracking-[0.1em] uppercase hover:bg-accent/80 transition-colors">
                <Calculator className="w-4 h-4" />
                Quero Simular
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDescription;
