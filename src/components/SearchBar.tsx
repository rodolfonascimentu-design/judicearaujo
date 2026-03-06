import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ArrowUpDown, SlidersHorizontal, Bookmark } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import SearchAutocomplete from "@/components/SearchAutocomplete";

interface SearchBarProps {
  count: number;
  location: string;
  type: string;
}

const SearchBar = ({ count, location, type }: SearchBarProps) => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [query, setQuery] = useState(location);

  const typeLabel = t(`search.type.${type}`) || type;

  const handleSearch = (q?: string) => {
    const term = (q || query).trim() || "Barra da Tijuca";
    navigate(`/imoveis?q=${encodeURIComponent(term)}&type=${type}`);
  };

  return (
    <div>
      {/* Sticky search bar */}
      <div className="sticky top-20 z-40 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center gap-4">
          {/* Search input with autocomplete */}
          <div className="flex-1 flex items-center gap-3 bg-muted/40 rounded-[4px] px-4 py-2.5">
            <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <SearchAutocomplete
              value={query}
              onChange={setQuery}
              onSelect={(v) => { setQuery(v); handleSearch(v); }}
              placeholder={t("hero.searchPlaceholder")}
              className="w-full"
              inputClassName="w-full bg-transparent text-sm font-sans font-light tracking-wide text-foreground focus:outline-none placeholder:text-muted-foreground/50"
            />
          </div>

          {/* Action buttons */}
          <div className="hidden md:flex items-center gap-1">
            <button className="flex items-center gap-1.5 px-3 py-2 rounded-[4px] text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
              <ArrowUpDown className="w-3.5 h-3.5" />
              {t("search.sort")}
            </button>
            <button className="flex items-center gap-1.5 px-3 py-2 rounded-[4px] text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              {t("search.filter")}
            </button>
            <button className="flex items-center gap-1.5 px-3 py-2 rounded-[4px] text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
              <Bookmark className="w-3.5 h-3.5" />
              {t("search.save")}
            </button>
          </div>
        </div>

        {/* Mobile action buttons */}
        <div className="md:hidden flex items-center gap-1 px-6 pb-4">
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-[4px] text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
            <ArrowUpDown className="w-3.5 h-3.5" />
            {t("search.sort")}
          </button>
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-[4px] text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            {t("search.filter")}
          </button>
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-[4px] text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
            <Bookmark className="w-3.5 h-3.5" />
            {t("search.save")}
          </button>
        </div>
      </div>

      {/* Results count below the bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-2">
        <p className="font-sans text-xs tracking-wide text-muted-foreground font-light">
          {count} {t("search.resultsLabel")} {typeLabel.toLowerCase()} {t("search.inLocation")} {location}
        </p>
      </div>
    </div>
  );
};

export default SearchBar;
