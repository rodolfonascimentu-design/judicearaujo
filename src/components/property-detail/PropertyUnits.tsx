import { motion } from "framer-motion";
import { PropertyDetailData } from "@/data/propertyDetail";

interface Props {
  property: PropertyDetailData;
}

const PropertyUnits = ({ property }: Props) => {
  if (property.status !== "launch" || !property.units.length) return null;

  return (
    <section className="py-20 md:py-28 px-6 md:px-16 bg-[hsl(var(--muted))]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3">
            Unidades
          </p>
          <h2 className="font-display text-2xl md:text-4xl text-foreground">
            Plantas disponíveis
          </h2>
        </motion.div>

        <motion.div
          className="overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <table className="w-full min-w-[640px] text-sm font-sans">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-medium">Tipo</th>
                <th className="text-left py-4 px-4 text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-medium">Metragem</th>
                <th className="text-left py-4 px-4 text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-medium">Quartos</th>
                <th className="text-left py-4 px-4 text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-medium">Suítes</th>
                <th className="text-left py-4 px-4 text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-medium">Vagas</th>
                <th className="text-left py-4 px-4 text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-medium">Preço</th>
              </tr>
            </thead>
            <tbody>
              {property.units.map((u, i) => (
                <tr key={i} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                  <td className="py-4 px-4 text-foreground font-medium">{u.type}</td>
                  <td className="py-4 px-4 text-muted-foreground">{u.area} m²</td>
                  <td className="py-4 px-4 text-muted-foreground">{u.bedrooms}</td>
                  <td className="py-4 px-4 text-muted-foreground">{u.suites}</td>
                  <td className="py-4 px-4 text-muted-foreground">{u.parking}</td>
                  <td className="py-4 px-4 text-foreground font-medium">{u.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertyUnits;
