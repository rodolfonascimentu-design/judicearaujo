import { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import SearchPropertyCard from "@/components/SearchPropertyCard";
import PropertyCardSkeleton from "@/components/PropertyCardSkeleton";
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

const allProperties = Array.from({ length: 24 }, (_, i) => ({
  id: `prop-${i}`,
  image: images[i % images.length],
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
  neighborhood: [
    "Barra da Tijuca", "Jardim Botânico", "Leblon", "Gávea",
    "Ipanema", "São Conrado", "Lagoa", "Barra da Tijuca",
    "Joá", "Vidigal", "Humaitá", "Flamengo",
  ][i % 12],
  price: `R$ ${(3 + (i % 8) * 1.5).toFixed(1).replace(".", ",")} milhões`,
  bedrooms: 3 + (i % 3),
  area: 180 + (i % 6) * 50,
  parking: 2 + (i % 3),
  type: ["Apartamento", "Cobertura", "Casa", "Penthouse"][i % 4],
  tags: tagOptions[i % tagOptions.length],
}));

const INITIAL_COUNT = 9;
const LOAD_MORE = 6;

const Properties = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "Barra da Tijuca";
  const type = searchParams.get("type") || "venda";
  const { t } = useLanguage();

  const [items, setItems] = useState(allProperties.slice(0, INITIAL_COUNT));
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Simulate initial load
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Infinite scroll
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

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      <SearchBar count={allProperties.length} location={query} type={type} />

      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12 bg-white">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            {Array.from({ length: 9 }).map((_, i) => (
              <PropertyCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
              {items.map((prop, i) => (
                <SearchPropertyCard key={prop.id} {...prop} index={i} />
              ))}
            </div>

            {/* Loading more skeletons */}
            {loadingMore && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 mt-14">
                {Array.from({ length: 3 }).map((_, i) => (
                  <PropertyCardSkeleton key={`more-${i}`} />
                ))}
              </div>
            )}

            {/* Sentinel for infinite scroll */}
            {items.length < allProperties.length && (
              <div ref={sentinelRef} className="h-4" />
            )}

            {items.length >= allProperties.length && (
              <motion.p
                className="text-center text-muted-foreground text-xs font-sans tracking-[0.15em] uppercase mt-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {t("search.allLoaded")}
              </motion.p>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Properties;
