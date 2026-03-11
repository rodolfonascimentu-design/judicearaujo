import { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LaunchSearchBar from "@/components/LaunchSearchBar";
import LaunchPropertyCard from "@/components/LaunchPropertyCard";
import PropertyCardSkeleton from "@/components/PropertyCardSkeleton";
import LaunchFilters from "@/components/LaunchFilters";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

const images = [property1, property2, property3, property4, property5, property6];

const launchData = [
  {
    title: "Soho",
    neighborhood: "Gávea",
    types: "Apartamento",
    bedroomsRange: "1 a 2 quartos",
    bathroomsRange: "1 a 2 banheiros",
    areaRange: "37 a 73 m²",
    parkingRange: "1 vagas",
    price: "R$861.800",
    tag: "Acabamento",
  },
  {
    title: "Mare Ipanema",
    neighborhood: "Ipanema",
    types: "Apartamento, Cobertura, Double Suítes e Garden",
    bedroomsRange: "1 a 2 quartos",
    bathroomsRange: "1 a 2 banheiros",
    areaRange: "42 a 69 m²",
    parkingRange: "5 vagas",
    price: "R$2.073.000",
    tag: "Estrutura",
  },
  {
    title: "Ipa Studios Design",
    neighborhood: "Ipanema",
    types: "Apartamento",
    bedroomsRange: "1 quartos",
    bathroomsRange: "1 banheiros",
    areaRange: "47 a 111 m²",
    parkingRange: "1 vagas",
    price: "R$2.912.926",
    tag: "Acabamento",
  },
  {
    title: "Dias Ferreira Leblon Studios",
    neighborhood: "Leblon",
    types: "Apartamento, Cobertura, Loja, Studio, Double Suítes e Garden",
    bedroomsRange: "1 a 2 quartos",
    bathroomsRange: "1 a 2 banheiros",
    areaRange: "29 a 113 m²",
    parkingRange: "2 vagas",
    price: "R$1.250.000",
    tag: "Estrutura",
  },
  {
    title: "Costa Niemeyer - Made In Rio",
    neighborhood: "São Conrado",
    types: "Apartamento, Cobertura e Studio",
    bedroomsRange: "1 quartos",
    bathroomsRange: "1 banheiros",
    areaRange: "32 a 63 m²",
    parkingRange: "1 vagas",
    price: "R$780.000",
    tag: "Não iniciada",
  },
  {
    title: "Gera",
    neighborhood: "Gávea",
    types: "Apartamento, Cobertura, Studio e Garden",
    bedroomsRange: "1 a 2 quartos",
    bathroomsRange: "1 a 2 banheiros",
    areaRange: "38 a 142 m²",
    parkingRange: "1 vagas",
    price: "R$1.100.000",
    tag: "Estrutura",
  },
  {
    title: "Nilo Lifestyle",
    neighborhood: "Leblon",
    types: "Apartamento, Cobertura",
    bedroomsRange: "2 a 3 quartos",
    bathroomsRange: "2 a 3 banheiros",
    areaRange: "80 a 200 m²",
    parkingRange: "2 vagas",
    price: "R$3.500.000",
    tag: "Acabamento",
  },
  {
    title: "Vista Lagoa Premium",
    neighborhood: "Lagoa",
    types: "Apartamento",
    bedroomsRange: "3 a 4 quartos",
    bathroomsRange: "2 a 3 banheiros",
    areaRange: "120 a 250 m²",
    parkingRange: "3 vagas",
    price: "R$5.200.000",
    tag: "Estrutura",
  },
  {
    title: "Botânico Residences",
    neighborhood: "Jardim Botânico",
    types: "Apartamento, Garden",
    bedroomsRange: "2 a 3 quartos",
    bathroomsRange: "1 a 2 banheiros",
    areaRange: "65 a 130 m²",
    parkingRange: "1 vagas",
    price: "R$1.800.000",
    tag: "Não iniciada",
  },
  {
    title: "Areia Brava",
    neighborhood: "Barra da Tijuca",
    types: "Apartamento, Cobertura, Studio",
    bedroomsRange: "1 a 3 quartos",
    bathroomsRange: "1 a 2 banheiros",
    areaRange: "45 a 180 m²",
    parkingRange: "2 vagas",
    price: "R$950.000",
    tag: "Estrutura",
  },
  {
    title: "Horizonte Flamengo",
    neighborhood: "Flamengo",
    types: "Apartamento",
    bedroomsRange: "2 quartos",
    bathroomsRange: "1 banheiros",
    areaRange: "60 a 90 m²",
    parkingRange: "1 vagas",
    price: "R$1.350.000",
    tag: "Acabamento",
  },
  {
    title: "Reserva Joá",
    neighborhood: "Joá",
    types: "Casa, Cobertura",
    bedroomsRange: "4 a 5 quartos",
    bathroomsRange: "3 a 4 banheiros",
    areaRange: "300 a 500 m²",
    parkingRange: "4 vagas",
    price: "R$8.900.000",
    tag: "Não iniciada",
  },
];

const allLaunches = launchData.map((item, i) => ({
  id: `launch-${i}`,
  image: images[i % images.length],
  images: [images[i % images.length], images[(i + 1) % images.length], images[(i + 2) % images.length]],
  ...item,
}));

const INITIAL_COUNT = 9;
const LOAD_MORE = 6;

const Launches = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "Rio de Janeiro";
  const { t } = useLanguage();
  const [filtersOpen, setFiltersOpen] = useState(false);

  const [items, setItems] = useState(allLaunches.slice(0, INITIAL_COUNT));
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = `${allLaunches.length} Lançamentos à Venda em ${query} | Rio de Janeiro - RJ — Judice & Araujo`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", `Encontre ${allLaunches.length} lançamentos imobiliários à venda em ${query}, Rio de Janeiro - RJ. Judice & Araujo, membro Forbes Global Properties.`);
    }
  }, [query]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const loadMore = useCallback(() => {
    if (loadingMore || items.length >= allLaunches.length) return;
    setLoadingMore(true);
    setTimeout(() => {
      setItems((prev) => [
        ...prev,
        ...allLaunches.slice(prev.length, prev.length + LOAD_MORE),
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
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <div className="h-20" aria-hidden="true" />

      <LaunchSearchBar count={allLaunches.length} location={query} />

      <main className="max-w-7xl mx-auto px-6 lg:px-12 pt-6 pb-12 bg-white">
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
                <LaunchPropertyCard key={prop.id} {...prop} index={i} />
              ))}
            </div>

            {loadingMore && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 mt-14">
                {Array.from({ length: 3 }).map((_, i) => (
                  <PropertyCardSkeleton key={`more-${i}`} />
                ))}
              </div>
            )}

            {items.length < allLaunches.length && (
              <div ref={sentinelRef} className="h-4" aria-hidden="true" />
            )}

            {items.length >= allLaunches.length && (
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
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Launches;
