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
    transition={{ duration: 0.7, delay: index * 0.12 }}
  >
    {/* Image container */}
    <div className="relative overflow-hidden aspect-[4/3] mb-6">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute top-5 left-5">
        <span className="bg-charcoal/70 backdrop-blur-sm text-cream text-[10px] font-sans font-medium tracking-[0.2em] uppercase px-3.5 py-1.5">
          {neighborhood}
        </span>
      </div>
      <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500" />
    </div>

    {/* Info */}
    <h3 className="font-serif text-lg font-medium text-foreground mb-2 tracking-wide">{title}</h3>
    <p className="font-sans text-base font-medium text-primary mb-4">{price}</p>
    <div className="flex items-center gap-6 text-muted-foreground text-xs font-sans tracking-wide">
      <span className="flex items-center gap-1.5">
        <Bed className="w-3.5 h-3.5" />
        {bedrooms} quartos
      </span>
      <span className="flex items-center gap-1.5">
        <Maximize className="w-3.5 h-3.5" />
        {area} m²
      </span>
    </div>
    <a
      href="#"
      className="inline-block mt-5 text-[10px] font-sans font-medium tracking-[0.25em] uppercase text-primary hover:text-gold-light transition-colors border-b border-primary/30 hover:border-primary pb-0.5"
    >
      Ver Detalhes
    </a>
  </motion.div>
);

export default PropertyCard;
