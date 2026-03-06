import { useState } from "react";
import { motion } from "framer-motion";
import { Bed, Maximize, ArrowUpRight, Heart, Car } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface SearchPropertyCardProps {
  id: string;
  image: string;
  title: string;
  neighborhood: string;
  price: string;
  bedrooms: number;
  area: number;
  parking: number;
  type: string;
  tags?: string[];
  index: number;
}

const SearchPropertyCard = ({
  id,
  image,
  title,
  neighborhood,
  price,
  bedrooms,
  area,
  parking,
  type,
  tags = [],
  index,
}: SearchPropertyCardProps) => {
  const [favorited, setFavorited] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { t } = useLanguage();

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorited(!favorited);
  };

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 600);
  };

  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -4 }}
      onClick={handleClick}
    >
      <motion.div
        className="relative overflow-hidden rounded-[4px] aspect-[4/3] mb-5"
        animate={clicked ? { scale: 1.02 } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Image with lazy fade-in */}
        <img
          src={image}
          alt={title}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse" />
        )}

        {/* Hover overlay with extra info */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-500 flex items-center justify-center">
          <motion.div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0">
            <span className="inline-flex items-center gap-2 bg-cream/95 text-foreground px-5 py-2.5 rounded-[4px] text-xs font-sans font-medium tracking-[0.15em] uppercase backdrop-blur-sm">
              {t("search.viewDetails")}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </motion.div>
        </div>

        {/* Tags - top left */}
        {tags.length > 0 && (
          <div className="absolute top-4 left-4 flex flex-col gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-charcoal/60 backdrop-blur-md text-cream text-[10px] font-sans font-medium tracking-[0.2em] uppercase px-3 py-1.5 rounded-[3px] w-fit"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        

        {/* Favorite button - top right */}
        <motion.button
          onClick={handleFavorite}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-charcoal/30 backdrop-blur-md flex items-center justify-center transition-colors hover:bg-charcoal/50"
          whileTap={{ scale: 0.85 }}
          animate={favorited ? { scale: [1, 1.3, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          <Heart
            className={`w-4 h-4 transition-colors duration-300 ${
              favorited ? "text-accent fill-accent" : "text-cream"
            }`}
          />
        </motion.button>
      </motion.div>

      {/* Info */}
      <h3 className="font-display text-base font-medium text-foreground mb-1 tracking-[-0.01em] group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="font-sans text-xs text-muted-foreground mb-1.5">{neighborhood}</p>
      <p className="font-sans text-sm font-medium text-primary mb-3">{price}</p>
      <div className="flex items-center gap-5 text-muted-foreground text-xs font-sans tracking-wide font-light">
        <span className="flex items-center gap-1.5">
          <Bed className="w-3.5 h-3.5" />
          {bedrooms} {t("unit.bedrooms")}
        </span>
        <span className="flex items-center gap-1.5">
          <Maximize className="w-3.5 h-3.5" />
          {area} m²
        </span>
        <span className="flex items-center gap-1.5">
          <Car className="w-3.5 h-3.5" />
          {parking} {t("unit.parking")}
        </span>
      </div>
    </motion.div>
  );
};

export default SearchPropertyCard;
