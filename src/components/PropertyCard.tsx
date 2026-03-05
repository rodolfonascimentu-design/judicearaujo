import { motion } from "framer-motion";
import { Bed, Maximize, ArrowUpRight } from "lucide-react";

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
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, margin: "-80px" }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    {/* Image container */}
    <div className="relative overflow-hidden rounded-[4px] aspect-[4/3] mb-6">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        loading="lazy"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-500 flex items-center justify-center">
        <motion.div
          className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0"
        >
          <span className="inline-flex items-center gap-2 bg-cream/95 text-foreground px-5 py-2.5 rounded-[4px] text-xs font-sans font-medium tracking-[0.15em] uppercase backdrop-blur-sm">
            Ver Detalhes
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </motion.div>
      </div>
      <div className="absolute top-4 left-4">
        <span className="bg-charcoal/60 backdrop-blur-md text-cream text-[10px] font-sans font-medium tracking-[0.2em] uppercase px-3 py-1.5 rounded-[3px]">
          {neighborhood}
        </span>
      </div>
    </div>

    {/* Info */}
    <h3 className="font-display text-base font-medium text-foreground mb-1.5 tracking-[-0.01em] group-hover:text-primary transition-colors duration-300">{title}</h3>
    <p className="font-sans text-sm font-medium text-primary mb-3">{price}</p>
    <div className="flex items-center gap-5 text-muted-foreground text-xs font-sans tracking-wide font-light">
      <span className="flex items-center gap-1.5">
        <Bed className="w-3.5 h-3.5" />
        {bedrooms} quartos
      </span>
      <span className="flex items-center gap-1.5">
        <Maximize className="w-3.5 h-3.5" />
        {area} m²
      </span>
    </div>
  </motion.div>
);

export default PropertyCard;
