import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Bed, Maximize, ArrowUpRight, Car, Video } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface SearchPropertyCardProps {
  id: string;
  image: string;
  images?: string[];
  title: string;
  neighborhood: string;
  price: string;
  bedrooms: number;
  area: number;
  parking: number;
  type: string;
  tags?: string[];
  hasVideo?: boolean;
  index: number;
  highlighted?: boolean;
  onHover?: (id: string | null) => void;
}

const SearchPropertyCard = ({
  id,
  image,
  images = [],
  title,
  neighborhood,
  price,
  bedrooms,
  area,
  parking,
  type,
  tags = [],
  hasVideo = false,
  index,
  highlighted = false,
  onHover,
}: SearchPropertyCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { t } = useLanguage();
  const navigate = useNavigate();

  const allImages = images.length > 0 ? images : [image];

  // Auto-cycle images on hover
  useEffect(() => {
    if (isHovered && allImages.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
      }, 1800);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setCurrentImageIndex(0);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, allImages.length]);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
      navigate(`/imovel/${id}`);
    }, 300);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover?.(id);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover?.(null);
  };

  return (
    <motion.div
      className="group cursor-pointer transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -4 }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative overflow-hidden rounded-[4px] aspect-[4/3] mb-5"
        animate={clicked ? { scale: 1.02 } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Image with gallery preview */}
        <img
          src={allImages[currentImageIndex]}
          alt={title}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse" />
        )}

        {/* Image indicators */}
        {allImages.length > 1 && isHovered && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {allImages.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === currentImageIndex ? "bg-white scale-110" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        )}

        {/* Hover overlay */}
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
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-charcoal/60 backdrop-blur-md text-cream text-[9px] font-sans font-medium tracking-[0.15em] uppercase px-2 py-1 rounded-[3px] w-fit"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Video indicator - top right */}
        {hasVideo && (
          <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-charcoal/30 backdrop-blur-md flex items-center justify-center">
            <Video className="w-3.5 h-3.5 text-cream" />
          </div>
        )}
      </motion.div>

      {/* Info */}
      <h3 className="font-display text-base font-semibold text-foreground mb-1 tracking-[-0.01em] group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="font-sans text-xs text-muted-foreground mb-1.5">{neighborhood}</p>
      <p className="font-sans text-sm font-semibold text-primary mb-3">{price}</p>
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
