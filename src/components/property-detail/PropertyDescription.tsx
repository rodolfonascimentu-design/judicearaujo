import { motion } from "framer-motion";
import { MessageCircle, Share2, Calculator, ArrowRight, TrendingUp, FileText } from "lucide-react";
// cache-bust
import { PropertyDetailData } from "@/data/propertyDetail";
import { useIsMobile } from "@/hooks/use-mobile";

interface Props {
  property: PropertyDetailData;
  isLaunch?: boolean;
  h1Text?: string;
}

const PropertyDescription = ({ property, isLaunch = false, h1Text }: Props) => {
  const isNormal = !isLaunch;
  const isMobile = useIsMobile();

  return (
    <section className="py-10 md:py-14 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16">
        {/* Left — editorial description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-4">
            {property.status === "launch" ? "Sobre o Lançamento" : "Sobre o Imóvel"}
          </p>

          {/* H1 dynamic — replaces old static title for normal properties */}
          {isNormal && h1Text ? (
            <h1 className="font-display text-2xl md:text-4xl text-foreground mb-8 leading-[1.2]">
              {h1Text}
            </h1>
          ) : (
            <h2 className="font-display text-2xl md:text-4xl text-foreground mb-8 leading-[1.2]">
              {property.status === "launch" ? (
                <>
                  {property.name}<br />
                  <span className="text-muted-foreground text-lg md:text-2xl font-sans font-light">
                    {property.neighborhood}, {property.city}/{property.state}
                  </span>
                </>
              ) : (
                "Uma residência que redefine o conceito de exclusividade."
              )}
            </h2>
          )}

          <div className="space-y-6">
            {property.description.map((p, i) => (
              <motion.p
                key={i}
                className="font-sans text-sm md:text-base text-muted-foreground leading-[1.9] whitespace-pre-line"
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
          {/* Property code — above the card */}
          {isNormal && (
            <motion.p
              className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-3 text-right"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Cód. {property.code}
            </motion.p>
          )}

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
              {/* Status badge — launches only */}
              {!isNormal && (
                <motion.span
                  className="inline-block font-sans text-[10px] tracking-[0.2em] uppercase px-4 py-1.5 rounded-full bg-primary/8 text-primary font-medium border border-primary/15"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  {property.status === "launch" ? "Lançamento" : property.status === "construction" ? "Em obras" : "Pronto para morar"}
                </motion.span>
              )}

              {/* High demand indicator — only for normal properties */}
              {isNormal && (
                <div className="flex items-center gap-3 py-1">
                  <motion.div
                    animate={{ 
                      y: [0, -4, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity, 
                      ease: "easeInOut", 
                      repeatDelay: 2 
                    }}
                  >
                    <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
                  </motion.div>
                  <span className="font-sans text-xs text-foreground/80 tracking-wide">
                    Este imóvel está com alta procura
                  </span>
                </div>
              )}

              {/* Price */}
              <div>
                <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-2">
                  {isNormal
                    ? property.transaction === "Locação"
                      ? "Valor de aluguel"
                      : "Valor de venda"
                    : property.priceLabel}
                </p>
                <p className="font-display text-3xl text-foreground">{property.price}</p>
              </div>

              {/* Condo & IPTU — only for normal properties */}
              {isNormal && (property.condoFee || property.iptu) && (
                <div className="space-y-2">
                  {property.condoFee && (
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-xs text-muted-foreground">Condomínio</span>
                      <span className="font-sans text-xs text-    foreground">{property.condoFee}</span>
                    </div>
                  )}
                  {property.iptu && (
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-xs text-muted-foreground">IPTU (mensal)</span>
                      <span className="font-sans text-xs text-foreground">{property.iptu}</span>
                    </div>
                  )}
                  <p className="font-sans text-[10px] text-muted-foreground/70 mt-1">
                    Valores sujeitos a alteração sem aviso prévio.
                  </p>
                </div>
              )}

              {/* Divider */}
              <div className="h-px bg-border" />

              {/* CTA buttons */}
              <div className="space-y-3">
                {!isMobile && (
                  <a
                    href={`https://wa.me/${property.agent.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2.5 w-full bg-primary text-primary-foreground py-3.5 rounded-full text-xs font-sans font-medium tracking-[0.12em] uppercase hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_4px_20px_-4px_hsl(var(--primary)/0.4)]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Fale com a gente
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  </a>
                )}
                <button className="group flex items-center justify-center gap-2 w-full text-muted-foreground py-2.5 text-xs font-sans font-medium tracking-[0.1em] uppercase hover:text-foreground transition-colors duration-300">
                  <Share2 className="w-3.5 h-3.5" />
                  Compartilhar
                </button>
              </div>

              {/* Financing */}
              <div className="relative bg-muted/30 rounded-lg p-5 -mx-1">
                <p className="font-sans text-sm font-semibold text-foreground mb-1.5 leading-relaxed">
                  Que tal financiar a compra deste imóvel?
                </p>
                <p className="font-sans text-xs text-muted-foreground mb-4 leading-relaxed">
                  Faça uma simulação do parcelamento comparando os bancos
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
