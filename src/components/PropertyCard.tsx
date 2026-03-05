import { motion } from "framer-motion";
import { Bed, Maximize } from "lucide-react";

interface PropertyCardProps {
  image: string;
  title: string;
  neighborhood: string;
  price: string;
  bedrooms: number;
  area: number;
  index: number;
}

const PropertyCard = ({ image, title, neighborhood, price, bedrooms, area, index }: PropertyCardProps) => (
  <motion.div
    className="group cursor-pointer"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    {/* Image container */}
    <div className="relative overflow-hidden aspect-[4/3] mb-5">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute top-4 left-4">
        <span className="bg-charcoal/80 backdrop-blur-sm text-cream text-xs font-sans font-medium tracking-wider uppercase px-3 py-1.5">
          {neighborhood}
        </span>
      </div>
      <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500" />
    </div>

    {/* Info */}
    <h3 className="font-serif text-xl font-medium text-foreground mb-2">{title}</h3>
    <p className="font-sans text-lg font-semibold text-gold mb-3">{price}</p>
    <div className="flex items-center gap-5 text-muted-foreground text-sm font-sans">
      <span className="flex items-center gap-1.5">
        <Bed className="w-4 h-4" />
        {bedrooms} quartos
      </span>
      <span className="flex items-center gap-1.5">
        <Maximize className="w-4 h-4" />
        {area} m²
      </span>
    </div>
    <a
      href="#"
      className="inline-block mt-4 text-xs font-sans font-medium tracking-[0.2em] uppercase text-gold hover:text-gold-light transition-colors border-b border-gold/30 hover:border-gold pb-0.5"
    >
      Ver Detalhes
    </a>
  </motion.div>
);

export default PropertyCard;
