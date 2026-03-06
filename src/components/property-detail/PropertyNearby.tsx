import { motion } from "framer-motion";
import { ShoppingBag, UtensilsCrossed, GraduationCap, Heart, Waves, TreePine } from "lucide-react";
import { PropertyDetailData } from "@/data/propertyDetail";

const iconMap: Record<string, React.ElementType> = {
  ShoppingBag, UtensilsCrossed, GraduationCap, Heart, Waves, TreePine,
};

interface Props {
  property: PropertyDetailData;
}

const PropertyNearby = ({ property }: Props) => {
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
            Entorno
          </p>
          <h2 className="font-display text-2xl md:text-4xl text-foreground">
            O que há por perto
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {property.nearby.map((cat, i) => {
            const Icon = iconMap[cat.icon] || ShoppingBag;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="font-sans text-xs tracking-[0.15em] uppercase text-foreground font-medium">
                    {cat.category}
                  </span>
                </div>
                <ul className="space-y-2">
                  {cat.places.map((place) => (
                    <li key={place} className="font-sans text-sm text-muted-foreground">
                      {place}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PropertyNearby;
