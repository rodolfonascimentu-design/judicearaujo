import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { PropertyDetailData } from "@/data/propertyDetail";

interface Props {
  property: PropertyDetailData;
}

const PropertyLocation = ({ property }: Props) => {
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
            Localização
          </p>
          <h2 className="font-display text-2xl md:text-4xl text-foreground mb-2">
            {property.neighborhood}, {property.city}
          </h2>
          <p className="font-sans text-sm text-muted-foreground flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {property.address}
          </p>
        </motion.div>

        <motion.div
          className="rounded-[4px] overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <iframe
            title="Localização do imóvel"
            src={`https://maps.google.com/maps?q=${property.mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            className="w-full h-[350px] md:h-[450px] border-0"
            loading="lazy"
            allowFullScreen
          />
        </motion.div>

        <div className="mt-6 flex justify-end">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${property.mapQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.1em] uppercase text-primary hover:text-primary/80 transition-colors"
          >
            Abrir no Google Maps
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PropertyLocation;
