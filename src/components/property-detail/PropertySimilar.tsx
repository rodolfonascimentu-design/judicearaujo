import { motion } from "framer-motion";
import { Bed, Maximize, Car } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PropertyDetailData } from "@/data/propertyDetail";
import { useState, useCallback, useEffect } from "react";

interface Props {
  property: PropertyDetailData;
}

const PropertySimilar = ({ property }: Props) => {
  const navigate = useNavigate();
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false, containScroll: "trimSnaps" });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 md:py-28 bg-[hsl(var(--muted))] overflow-hidden">
      <div className="px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex items-end justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3">
              Você também pode gostar
            </p>
            <h2 className="font-display text-2xl md:text-4xl text-foreground">
              Imóveis semelhantes
            </h2>
          </motion.div>

          <div className="hidden md:flex gap-2">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-muted/50 transition-colors disabled:opacity-30"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-muted/50 transition-colors disabled:opacity-30"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-16 overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {property.similar.map((s) => (
            <div
              key={s.id}
              className="flex-[0_0_80%] md:flex-[0_0_30%] min-w-0 cursor-pointer group"
              onClick={() => navigate(`/imovel/${s.id}`)}
            >
              <div className="relative overflow-hidden rounded-[4px] aspect-[4/3] mb-4">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display text-base text-foreground mb-1 group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="font-sans text-xs text-muted-foreground mb-1">{s.neighborhood}</p>
              <p className="font-sans text-sm font-medium text-primary mb-3">{s.price}</p>
              <div className="flex items-center gap-4 text-muted-foreground text-xs font-sans">
                <span className="flex items-center gap-1.5"><Bed className="w-3.5 h-3.5" />{s.bedrooms}</span>
                <span className="flex items-center gap-1.5"><Maximize className="w-3.5 h-3.5" />{s.area} m²</span>
                <span className="flex items-center gap-1.5"><Car className="w-3.5 h-3.5" />{s.parking}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertySimilar;
