import { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Bed, Maximize, Car, Video } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import soldIllustration from "@/assets/sold-illustration.png";
import SearchPropertyCard from "@/components/SearchPropertyCard";
import PropertyCardSkeleton from "@/components/PropertyCardSkeleton";
import MapView, { neighborhoodCoords } from "@/components/MapView";
import type { MapProperty } from "@/components/MapView";
import { useLanguage } from "@/i18n/LanguageContext";

import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

const images = [property1, property2, property3, property4, property5, property6];

const tagOptions = [
  ["Exclusivo"],
  ["Lançamento"],
  [],
  ["Novo"],
  ["Em construção"],
  [],
  ["Exclusivo", "Novo"],
  [],
  ["Lançamento"],
];

const neighborhoods = [
  "Barra da Tijuca", "Jardim Botânico", "Leblon", "Gávea",
  "Ipanema", "São Conrado", "Lagoa", "Barra da Tijuca",
  "Joá", "Vidigal", "Humaitá", "Flamengo",
];

const allProperties = Array.from({ length: 24 }, (_, i) => {
  const nbh = neighborhoods[i % 12];
  const coords = neighborhoodCoords[nbh] || [-22.98, -43.23];
  // Add slight offset to avoid overlapping pins
  const jitteredCoords: [number, number] = [
    coords[0] + (Math.random() - 0.5) * 0.008,
    coords[1] + (Math.random() - 0.5) * 0.008,
  ];
  return {
    id: `prop-${i}`,
    image: images[i % images.length],
    images: [images[i % images.length], images[(i + 1) % images.length], images[(i + 2) % images.length]],
    title: [
      "Cobertura Duplex Vista Mar",
      "Apartamento Jardim Botânico",
      "Penthouse Leblon",
      "Casa Contemporânea Gávea",
      "Apartamento Ipanema Frontal",
      "Villa Exclusiva São Conrado",
      "Cobertura Linear Lagoa",
      "Apartamento Barra Premium",
      "Casa Design Joá",
      "Penthouse Vidigal Panorâmico",
      "Apartamento Humaitá Clássico",
      "Cobertura Flamengo Vista Baía",
    ][i % 12],
    neighborhood: nbh,
    price: `R$ ${(3 + (i % 8) * 1.5).toFixed(1).replace(".", ",")} milhões`,
    bedrooms: 3 + (i % 3),
    area: 180 + (i % 6) * 50,
    parking: 2 + (i % 3),
    type: ["Apartamento", "Cobertura", "Casa", "Penthouse"][i % 4],
    tags: tagOptions[i % tagOptions.length],
    hasVideo: i % 3 === 0,
    coords: jitteredCoords,
  };
});

const INITIAL_COUNT = 9;
const LOAD_MORE = 6;

const Properties = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "Barra da Tijuca";
  const type = searchParams.get("type") || "venda";
  const { t } = useLanguage();

  const [items, setItems] = useState(allProperties.slice(0, INITIAL_COUNT));
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const typeLabel = type === "locacao" ? "Locação" : type === "temporada" ? "Temporada" : "Venda";
    document.title = `${allProperties.length} Imóveis para ${typeLabel} em ${query} | Rio de Janeiro - RJ — Judice & Araujo`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", `Encontre ${allProperties.length} imóveis de luxo para ${typeLabel.toLowerCase()} em ${query}, Rio de Janeiro - RJ. Judice & Araujo, membro Forbes Global Properties.`);
    }
  }, [query, type]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const loadMore = useCallback(() => {
    if (loadingMore || items.length >= allProperties.length) return;
    setLoadingMore(true);
    setTimeout(() => {
      setItems((prev) => [
        ...prev,
        ...allProperties.slice(prev.length, prev.length + LOAD_MORE),
      ]);
      setLoadingMore(false);
    }, 800);
  }, [loadingMore, items.length]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) loadMore(); },
      { rootMargin: "200px" }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [loadMore]);

  const toggleView = () => setViewMode((v) => (v === "list" ? "map" : "list"));

  // Map properties with coords
  const mapProperties: MapProperty[] = allProperties.map((p) => ({
    id: p.id,
    image: p.image,
    title: p.title,
    neighborhood: p.neighborhood,
    price: p.price,
    bedrooms: p.bedrooms,
    area: p.area,
    parking: p.parking,
    coords: p.coords,
  }));

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <div className="h-20" aria-hidden="true" />

      <SearchBar
        count={allProperties.length}
        location={query}
        type={type}
        viewMode={viewMode}
        onToggleView={toggleView}
      />

      <main className="max-w-7xl mx-auto px-6 lg:px-12 pt-6 pb-12 bg-white">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            {Array.from({ length: 9 }).map((_, i) => (
              <PropertyCardSkeleton key={i} />
            ))}
          </div>
        ) : viewMode === "map" ? (
          <MapView
            properties={mapProperties}
            highlightedId={hoveredId}
            onHoverPin={setHoveredId}
          />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
              {items.map((prop, i) => (
                <SearchPropertyCard
                  key={prop.id}
                  {...prop}
                  index={i}
                  highlighted={hoveredId === prop.id}
                  onHover={setHoveredId}
                />
              ))}
            </div>

            {loadingMore && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 mt-14">
                {Array.from({ length: 3 }).map((_, i) => (
                  <PropertyCardSkeleton key={`more-${i}`} />
                ))}
              </div>
            )}

            {items.length < allProperties.length && (
              <div ref={sentinelRef} className="h-4" aria-hidden="true" />
            )}

            {items.length >= allProperties.length && (
              <motion.div
                className="flex flex-col items-center gap-3 py-20 mt-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-muted-foreground text-xs font-sans tracking-[0.15em] uppercase">
                  {t("search.allLoaded")}
                </p>
              </motion.div>
            )}

            {/* Sold properties section */}
            {items.length >= allProperties.length && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="border-t border-border pt-14 mt-4">
                  <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-6">
                    Imóveis vendidos
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
                    {/* Sold card 1 */}
                    <SoldPropertyCard
                      image={images[2]}
                      type="Apartamento"
                      title="Rua Rainha Guilhermina"
                      neighborhood="Leblon"
                      bedrooms={3}
                      area={183}
                      parking={2}
                      hasVideo
                    />
                    {/* Sold card 2 */}
                    <SoldPropertyCard
                      image={images[4]}
                      type="Apartamento"
                      title="Avenida Visconde De Albuquerque"
                      neighborhood="Leblon"
                      bedrooms={2}
                      area={111}
                      parking={1}
                      hasVideo={false}
                    />
                    {/* CTA card */}
                    <motion.div
                      className="flex flex-col items-center justify-center rounded-[4px] border border-dashed border-border p-8 min-h-[340px] cursor-pointer group hover:border-primary/40 transition-colors"
                      whileHover={{ y: -4 }}
                      onClick={() => navigate("/imoveis?status=vendidos")}
                    >
                      <img
                        src={soldIllustration}
                        alt="Ver mais imóveis vendidos"
                        className="w-36 h-36 object-contain mb-6 opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                      <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-sans text-sm font-medium tracking-wide shadow-lg group-hover:bg-primary/90 transition-colors">
                        Ver mais imóveis vendidos
                      </span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

/* Sold property card (simplified, no interaction) */
const SoldPropertyCard = ({
  image,
  type,
  title,
  neighborhood,
  bedrooms,
  area,
  parking,
  hasVideo,
}: {
  image: string;
  type: string;
  title: string;
  neighborhood: string;
  bedrooms: number;
  area: number;
  parking: number;
  hasVideo: boolean;
}) => (
  <div className="group">
    <div className="relative overflow-hidden rounded-[4px] aspect-[4/3] mb-5">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover grayscale opacity-70"
      />
      {hasVideo && (
        <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-charcoal/30 backdrop-blur-md flex items-center justify-center">
          <Video className="w-3.5 h-3.5 text-cream" />
        </div>
      )}
    </div>
    <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-1">{type}</p>
    <h3 className="font-display text-base font-medium text-foreground mb-1 tracking-[-0.01em]">{title}</h3>
    <p className="font-sans text-xs text-muted-foreground mb-3">{neighborhood}</p>
    <div className="flex items-center gap-5 text-muted-foreground text-xs font-sans tracking-wide font-light mb-3">
      <span className="flex items-center gap-1.5">
        <Bed className="w-3.5 h-3.5" />
        {bedrooms} quartos
      </span>
      <span className="flex items-center gap-1.5">
        <Maximize className="w-3.5 h-3.5" />
        {area}m²
      </span>
      <span className="flex items-center gap-1.5">
        <Car className="w-3.5 h-3.5" />
        {parking} {parking === 1 ? "vaga" : "vagas"}
      </span>
    </div>
    <p className="font-sans text-sm font-semibold text-foreground">Imóvel vendido</p>
  </div>
);

export default Properties;
