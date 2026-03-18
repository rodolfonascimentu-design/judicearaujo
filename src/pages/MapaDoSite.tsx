import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import sitemapData, {
  type SitemapCategory,
  type SitemapCity,
  type SitemapNeighborhood,
} from "@/data/sitemapData";

/* ── helpers ── */
const normalize = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const categoryLabel: Record<string, string> = {
  Comprar: "para comprar em",
  Alugar: "para alugar em",
  Temporada: "para temporada em",
};

/* ── Accordion item for a city ── */
const CityAccordion = ({
  city,
  category,
  defaultOpen,
}: {
  city: SitemapCity;
  category: string;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen ?? false);

  return (
    <div className="border-b border-border/60 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3.5 group text-left"
      >
        <span className="font-sans text-sm font-medium text-foreground group-hover:text-primary transition-colors">
          {city.name}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="pl-4 pb-4 space-y-1">
              {city.neighborhoods.map((nb) => (
                <NeighborhoodAccordion
                  key={nb.name}
                  neighborhood={nb}
                  cityName={city.name}
                  category={category}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ── Accordion item for a neighborhood ── */
const NeighborhoodAccordion = ({
  neighborhood,
  cityName,
  category,
}: {
  neighborhood: SitemapNeighborhood;
  cityName: string;
  category: string;
}) => {
  const [open, setOpen] = useState(false);
  const suffix = categoryLabel[category] ?? "em";

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-2 group text-left"
      >
        <span className="font-sans text-[13px] font-light text-foreground/80 group-hover:text-primary transition-colors flex items-center gap-2">
          <MapPin className="w-3 h-3 text-muted-foreground flex-shrink-0" />
          {neighborhood.name} – {cityName.replace(/ - RJ$/, "")}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-muted-foreground/60 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="pl-6 pb-2 space-y-0.5">
              {neighborhood.types.map((t) => (
                <Link
                  key={t.href}
                  to={t.href}
                  className="block py-1.5 font-sans text-xs font-light text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.label} {suffix} {neighborhood.name} – {cityName.replace(/ - RJ$/, "")}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ── Category column ── */
const CategorySection = ({
  category,
  searchQuery,
}: {
  category: SitemapCategory;
  searchQuery: string;
}) => {
  const filteredCities = useMemo(() => {
    if (!searchQuery) return category.cities;
    const q = normalize(searchQuery);
    return category.cities
      .map((city) => {
        const cityMatch = normalize(city.name).includes(q);
        if (cityMatch) return city;
        const filteredNeighborhoods = city.neighborhoods.filter(
          (nb) =>
            normalize(nb.name).includes(q) ||
            nb.types.some((t) => normalize(t.label).includes(q))
        );
        if (filteredNeighborhoods.length === 0) return null;
        return { ...city, neighborhoods: filteredNeighborhoods };
      })
      .filter(Boolean) as SitemapCity[];
  }, [category, searchQuery]);

  if (filteredCities.length === 0) return null;

  return (
    <div>
      <h2 className="font-serif text-2xl font-light text-foreground mb-6 tracking-wide">
        {category.name}
      </h2>
      <div className="space-y-0">
        {filteredCities.map((city) => (
          <CityAccordion
            key={city.name}
            city={city}
            category={category.name}
            defaultOpen={!!searchQuery}
          />
        ))}
      </div>
    </div>
  );
};

/* ── Page ── */
const MapaDoSite = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Mapa do Site | Judice & Araujo Imóveis de Luxo";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Navegue por toda a estrutura de imóveis da Judice & Araujo. Encontre casas, apartamentos, coberturas e terrenos para comprar, alugar ou temporada no Rio de Janeiro, Petrópolis, Teresópolis e região."
      );
    }
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://www.judicearaujo.com.br/mapa-do-site";

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Mapa do Site — Judice & Araujo",
      "description": "Navegue por toda a estrutura de imóveis da Judice & Araujo.",
      "url": "https://www.judicearaujo.com.br/mapa-do-site",
      "isPartOf": { "@type": "WebSite", "name": "Judice & Araujo", "url": "https://www.judicearaujo.com.br" },
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); canonical.href = "https://www.judicearaujo.com.br"; };
  }, []);

  const comprar = sitemapData.find((c) => c.name === "Comprar")!;
  const alugar = sitemapData.find((c) => c.name === "Alugar")!;
  const temporada = sitemapData.find((c) => c.name === "Temporada")!;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero / Header */}
      <section className="pt-32 pb-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Navegação completa
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground tracking-wide mb-6">
            Mapa do Site
          </h1>
          <p className="font-sans text-sm font-light text-muted-foreground max-w-none mx-auto mb-10 whitespace-nowrap">
            Explore toda a estrutura de imóveis disponíveis por categoria, cidade, bairro e tipo de imóvel.
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar cidade, bairro ou tipo de imóvel..."
              className="w-full pl-11 pr-4 py-3.5 bg-white border border-border rounded-lg font-sans text-sm font-light text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>
      </section>

      {/* Content – 3 columns */}
      <section className="pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            <CategorySection category={comprar} searchQuery={searchQuery} />
            <CategorySection category={alugar} searchQuery={searchQuery} />
            <CategorySection category={temporada} searchQuery={searchQuery} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MapaDoSite;
