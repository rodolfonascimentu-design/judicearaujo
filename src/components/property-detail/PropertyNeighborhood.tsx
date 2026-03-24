import { motion } from "framer-motion";
import { PropertyDetailData } from "@/data/propertyDetail";

interface Props {
  property: PropertyDetailData;
}

const PropertyNeighborhood = ({ property }: Props) => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-16 bg-background">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-4">
            Sobre o Bairro
          </p>
          <h2 className="font-display text-2xl md:text-4xl text-foreground mb-8 leading-[1.2]">
            {property.neighborhood}
          </h2>
          <div className="space-y-5">
            {property.neighborhoodDescription.map((p, i) => (
              <p key={i} className="font-sans text-sm md:text-base text-muted-foreground leading-[1.9]">
                {p}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="overflow-hidden rounded-[4px]"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={property.neighborhoodImage}
            alt={property.neighborhood}
            className="w-full h-full min-h-[400px] md:min-h-[500px] object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PropertyNeighborhood;
