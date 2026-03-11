import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Bed, Maximize, Car } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "@/i18n/LanguageContext";

import farm1 from "@/assets/farm-1.jpg";
import farm2 from "@/assets/farm-2.jpg";
import farm3 from "@/assets/farm-3.jpg";
import farm4 from "@/assets/farm-4.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";

const properties = [
  { image: farm1, title: "Fazenda Colonial com Vista Panorâmica", neighborhood: "Região Serrana", price: "R$ 18.500.000", area: 12000, bedrooms: 8, parking: 6 },
  { image: farm2, title: "Sítio de Luxo com Lago Privativo", neighborhood: "Petrópolis", price: "R$ 9.800.000", area: 8500, bedrooms: 6, parking: 4 },
  { image: farm3, title: "Propriedade Rural com Haras", neighborhood: "Itaipava", price: "R$ 14.200.000", area: 15000, bedrooms: 7, parking: 5 },
  { image: farm4, title: "Retiro Exclusivo na Mata Atlântica", neighborhood: "Teresópolis", price: "R$ 7.600.000", area: 6200, bedrooms: 5, parking: 3 },
  { image: property1, title: "Cobertura Duplex com Vista Mar", neighborhood: "Leblon", price: "R$ 12.500.000", area: 480, bedrooms: 5, parking: 4 },
  { image: property2, title: "Apartamento Frente Mar", neighborhood: "Ipanema", price: "R$ 8.200.000", area: 320, bedrooms: 4, parking: 3 },
];

const HighEndCarousel = () => {
  const { t } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    skipSnaps: false,
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 md:py-32 lg:py-44 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          title={t("highend.title")}
          subtitle={t("highend.subtitle")}
          compact
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {properties.map((property, i) => {
              const isCenter = i === selectedIndex;
              return (
                <div key={i} className="flex-shrink-0 px-3 basis-[85%] md:basis-[50%] lg:basis-[33.33%]">
                  <div className="group cursor-pointer transition-all duration-400" style={{ transform: isCenter ? "scale(1)" : "scale(0.95)", opacity: isCenter ? 1 : 0.7, transition: "transform 0.4s ease, opacity 0.4s ease" }}>
                    <div className="relative overflow-hidden rounded-[4px] h-[400px]">
                      <img src={property.image} alt={property.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-all duration-500" />
                    </div>
                    <div className="pt-5">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-primary">{property.neighborhood}</span>
                      </div>
                      <h3 className="font-display text-base font-normal text-foreground mb-2 leading-snug group-hover:text-primary transition-colors duration-300 tracking-[-0.01em]">{property.title}</h3>
                      <p className="font-sans text-sm font-medium text-primary mb-3">{property.price}</p>
                      <div className="flex items-center gap-5 text-muted-foreground text-xs font-sans tracking-wide font-light">
                        <span className="flex items-center gap-1.5"><Bed className="w-3.5 h-3.5" />{property.bedrooms} {t("unit.bedrooms")}</span>
                        <span className="flex items-center gap-1.5"><Maximize className="w-3.5 h-3.5" />{property.area} m²</span>
                        <span className="flex items-center gap-1.5"><Car className="w-3.5 h-3.5" />{property.parking} {t("unit.parking")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button onClick={() => emblaApi?.scrollPrev()} disabled={!canScrollPrev} className="absolute left-2 top-[200px] z-10 w-10 h-10 rounded-full bg-white/90 border border-border/40 flex items-center justify-center shadow-sm hover:bg-white transition-colors disabled:opacity-30" aria-label="Anterior">
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <button onClick={() => emblaApi?.scrollNext()} disabled={!canScrollNext} className="absolute right-2 top-[200px] z-10 w-10 h-10 rounded-full bg-white/90 border border-border/40 flex items-center justify-center shadow-sm hover:bg-white transition-colors disabled:opacity-30" aria-label="Próximo">
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>
      </div>
    </section>
  );
};

export default HighEndCarousel;
