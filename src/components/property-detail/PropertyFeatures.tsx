import { motion } from "framer-motion";
import { PropertyDetailData } from "@/data/propertyDetail";

interface Props {
  property: PropertyDetailData;
}

const PropertyFeatures = ({ property }: Props) => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3">
            Características
          </p>
          <h2 className="font-display text-2xl md:text-4xl text-foreground">
            O que este imóvel oferece
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Internal */}
          <div>
            <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-6">
              Interno
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {property.internalFeatures.map((feat, i) => (
                <motion.div
                  key={feat}
                  className="flex items-center gap-3 py-3 border-b border-border"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="font-sans text-sm text-foreground">{feat}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Condo */}
          <div>
            <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-6">
              Condomínio
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {property.condoFeatures.map((feat, i) => (
                <motion.div
                  key={feat}
                  className="flex items-center gap-3 py-3 border-b border-border"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="font-sans text-sm text-foreground">{feat}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyFeatures;
