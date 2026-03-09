import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ArrowUpDown, SlidersHorizontal, Map, LayoutGrid } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import SearchAutocomplete from "@/components/SearchAutocomplete";

interface SearchBarProps {
  count: number;
  location: string;
  type: string;
  viewMode: "list" | "map";
  onToggleView: () => void;
}

const SearchBar = ({ count, location, type, viewMode, onToggleView }: SearchBarProps) => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [query, setQuery] = useState(location);

  const typeLabel = t(`search.type.${type}`) || type;

  const handleSearch = (q?: string) => {
    const term = (q || query).trim() || "Barra da Tijuca";
    navigate(`/imoveis?q=${encodeURIComponent(term)}&type=${type}`);
  };

  // SEO-formatted count text
  const countText = count === 1 ? "1 imóvel" : `${count} imóveis`;
  const seoText = `${countText} | ${typeLabel.toLowerCase() === "venda" ? "à venda" : typeLabel.toLowerCase() === "locação" ? "para locação" : "para temporada"} | ${location} | Rio de Janeiro - RJ`;

  return (
    <div>
      {/* Sticky search bar */}
      <div className="sticky top-20 z-40 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-5 flex items-center gap-2 sm:gap-4">
          {/* Search input with autocomplete */}
          <div className="flex-1 flex items-center gap-2 sm:gap-3 bg-muted/40 rounded-[4px] px-3 sm:px-4 py-2 sm:py-2.5 min-w-0">
            <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <SearchAutocomplete
              value={query}
              onChange={setQuery}
              onSelect={(v) => { setQuery(v); handleSearch(v); }}
              placeholder={t("hero.searchPlaceholder")}
              className="w-full"
              inputClassName="w-full bg-transparent text-xs sm:text-sm font-sans font-light tracking-wide text-foreground focus:outline-none placeholder:text-muted-foreground/50"
            />
          </div>

          {/* Action buttons — same on mobile & desktop */}
          <div className="flex items-center gap-0.5 sm:gap-1 flex-shrink-0">
            <button className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-2 rounded-[4px] text-[9px] sm:text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
              <ArrowUpDown className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t("search.sort")}</span>
            </button>
            <button className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-2 rounded-[4px] text-[9px] sm:text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t("search.filter")}</span>
            </button>
            <button
              onClick={onToggleView}
              className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-2 rounded-[4px] text-[9px] sm:text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              {viewMode === "list" ? (
                <>
                  <Map className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{t("search.viewMap")}</span>
                </>
              ) : (
                <>
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{t("search.viewList")}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* SEO results count */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-2">
        <p className="font-sans text-xs tracking-wide text-muted-foreground font-light">
          {seoText}
        </p>
      </div>
    </div>
  );
};

export default SearchBar;
