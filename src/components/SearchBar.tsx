import { ArrowUpDown, SlidersHorizontal, Map, LayoutGrid } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface SearchBarProps {
  count: number;
  location: string;
  type: string;
  viewMode: "list" | "map";
  onToggleView: () => void;
  onOpenFilters?: () => void;
}

const SearchBar = ({ count, location, type, viewMode, onToggleView, onOpenFilters }: SearchBarProps) => {
  const { t } = useLanguage();

  const typeLabel = t(`search.type.${type}`) || type;

  // SEO-formatted count text
  const countText = count === 1 ? "1 imóvel" : `${count} imóveis`;
  const seoText = `${countText} | ${typeLabel.toLowerCase() === "venda" ? "à venda" : typeLabel.toLowerCase() === "locação" ? "para locação" : "para temporada"} | ${location} | Rio de Janeiro - RJ`;

  return (
    <div>
      {/* Sticky search bar */}
      <div className="sticky top-20 z-40 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-5 flex items-center justify-end">
          {/* Action buttons */}
          <div className="flex items-center gap-0.5 sm:gap-1 flex-shrink-0">
            <button className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-2 rounded-[4px] text-[9px] sm:text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
              <ArrowUpDown className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t("search.sort")}</span>
            </button>
            <button
              onClick={onOpenFilters}
              className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-2 rounded-[4px] text-[9px] sm:text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            >
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
