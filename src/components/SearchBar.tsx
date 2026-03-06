import { ArrowUpDown, SlidersHorizontal, Bookmark } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface SearchBarProps {
  count: number;
  location: string;
  type: string;
}

const SearchBar = ({ count, location, type }: SearchBarProps) => {
  const { t } = useLanguage();

  const typeLabel = t(`search.type.${type}`) || type;

  return (
    <div className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <p className="font-sans text-xs md:text-sm tracking-wide text-foreground">
          <span className="font-semibold">{count}</span>{" "}
          {t("search.resultsLabel")} <span className="font-medium">{typeLabel.toLowerCase()}</span>{" "}
          {t("search.inLocation")} <span className="font-semibold">{location}</span>
        </p>

        <div className="hidden md:flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-4 py-2 rounded-[4px] text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
            <ArrowUpDown className="w-3.5 h-3.5" />
            {t("search.sort")}
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 rounded-[4px] text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            {t("search.filter")}
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 rounded-[4px] text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
            <Bookmark className="w-3.5 h-3.5" />
            {t("search.save")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
