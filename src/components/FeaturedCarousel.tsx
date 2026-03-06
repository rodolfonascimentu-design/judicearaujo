import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

const properties = [
  { image: property1, title: "Cobertura Duplex com Vista Mar", neighborhood: "Leblon", price: "R$ 12.500.000", area: 480 },
  { image: property2, title: "Apartamento Frente Mar", neighborhood: "Ipanema", price: "R$ 8.200.000", area: 320 },
  { image: property3, title: "Casa com Jardim à Beira da Lagoa", neighborhood: "Lagoa", price: "R$ 6.800.000", area: 550 },
  { image: property4, title: "Mansão Contemporânea", neighborhood: "Gávea", price: "R$ 15.900.000", area: 850 },
  { image: property5, title: "Villa Tropical Exclusiva", neighborhood: "Jardim Botânico", price: "R$ 9.500.000", area: 620 },
  { image: property6, title: "Refúgio à Beira-Mar", neighborhood: "São Conrado", price: "R$ 7.300.000", area: 380 },
];

const FeaturedCarousel = () => {
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
    <section className="py-32 lg:py-44 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          title="Imóveis em Destaque"
          subtitle="Uma seleção exclusiva dos imóveis mais desejados do Rio de Janeiro"
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4">
        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {properties.map((property, i) => {
              const isCenter = i === selectedIndex;
              return (
                <div
                  key={i}
                  className="flex-shrink-0 px-3 basis-[85%] md:basis-[50%] lg:basis-[33.33%]"
                >
                  <div
                    className="group cursor-pointer rounded-lg overflow-hidden bg-card transition-all duration-400"
                    style={{
                      transform: isCenter ? "scale(1)" : "scale(0.95)",
                      opacity: isCenter ? 1 : 0.7,
                      transition: "transform 0.4s ease, opacity 0.4s ease, box-shadow 0.3s ease",
                      boxShadow: isCenter
                        ? "0 8px 30px -8px rgba(0,0,0,0.15)"
                        : "0 2px 8px -2px rgba(0,0,0,0.08)",
                    }}
                  >
                    {/* Image */}
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={property.image}
                        alt={property.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>

                    {/* Info */}
                    <div className="p-5">
                      <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1.5">
                        {property.neighborhood}
                      </p>
                      <h3 className="font-display text-base text-foreground mb-2 leading-snug">
                        {property.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="font-sans text-sm font-medium text-primary">
                          {property.price}
                        </span>
                        <span className="font-sans text-xs text-muted-foreground">
                          {property.area}m²
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canScrollPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 border border-border/40 flex items-center justify-center shadow-sm hover:bg-white transition-colors disabled:opacity-30"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canScrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 border border-border/40 flex items-center justify-center shadow-sm hover:bg-white transition-colors disabled:opacity-30"
          aria-label="Próximo"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>
      </div>
    </section>
  );
};

export default FeaturedCarousel;
