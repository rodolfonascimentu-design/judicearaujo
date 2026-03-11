import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, SlidersHorizontal } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import SearchAutocomplete from "@/components/SearchAutocomplete";

interface LaunchSearchBarProps {
  count: number;
  location: string;
}

const LaunchSearchBar = ({ count, location }: LaunchSearchBarProps) => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [query, setQuery] = useState(location);

  const handleSearch = (q?: string) => {
    const term = (q || query).trim() || "Rio de Janeiro";
    navigate(`/lancamentos?q=${encodeURIComponent(term)}`);
  };

  const countText = `${count} lançamentos`;
  const seoText = `${countText} | à venda | ${location} | Rio de Janeiro - RJ`;

  return (
    <div>
      <div className="sticky top-20 z-40 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-5 flex items-center gap-2 sm:gap-4">
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

          <div className="flex items-center flex-shrink-0">
            <button className="flex items-center gap-1.5 px-4 py-2.5 rounded-[4px] text-[10px] font-sans font-medium tracking-[0.15em] uppercase bg-foreground text-background hover:bg-foreground/90 transition-colors">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>{t("search.filter")}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-2">
        <p className="font-sans text-xs tracking-wide text-muted-foreground font-light">
          {seoText}
        </p>
      </div>
    </div>
  );
};

export default LaunchSearchBar;
