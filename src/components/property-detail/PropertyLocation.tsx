import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { PropertyDetailData } from "@/data/propertyDetail";
import mapaPlaceholder from "@/assets/mapa-placeholder.jpg";

interface Props {
  property: PropertyDetailData;
}

const PropertyLocation = ({ property }: Props) => {
  const [showMap, setShowMap] = useState(false);
  const mapSrc = `https://maps.google.com/maps?q=${property.mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed&maptype=roadmap`;

  return (
    <section className="py-20 md:py-28 px-6 md:px-16 bg-background">
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
          className="rounded-lg overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {showMap ? (
            <div className="relative">
              <iframe
                title="Localização do imóvel"
                src={mapSrc}
                className="w-full h-[350px] md:h-[450px] border-0 grayscale contrast-[1.1] brightness-[0.85] saturate-[0.2]"
                allowFullScreen
              />
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_rgba(0,0,0,0.15)] rounded-lg" />
            </div>
          ) : (
            <button
              onClick={() => setShowMap(true)}
              className="relative w-full h-[350px] md:h-[450px] bg-muted rounded-lg overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-muted">
                <img
                  src={mapaPlaceholder}
                  alt="Mapa da localização"
                  className="w-full h-full object-cover grayscale opacity-60"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-sans text-sm font-medium tracking-wide shadow-lg group-hover:bg-primary/90 transition-colors">
                  <MapPin className="w-4 h-4" />
                  Abrir mapa
                </span>
              </div>
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PropertyLocation;
