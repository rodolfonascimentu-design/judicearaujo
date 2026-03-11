import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface LaunchSearchBarProps {
  count: number;
  location: string;
  onOpenFilters?: () => void;
}

const LaunchSearchBar = ({ count, location, onOpenFilters }: LaunchSearchBarProps) => {
  const { t } = useLanguage();

  const countText = `${count} lançamentos`;
  const seoText = `${countText} | à venda | ${location} | Rio de Janeiro - RJ`;

  return (
    <div>
      <div className="sticky top-20 z-40 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-5 flex items-center justify-end">
          <button onClick={onOpenFilters} className="flex items-center gap-1.5 px-4 py-2.5 rounded-[4px] text-[10px] font-sans font-medium tracking-[0.15em] uppercase bg-foreground text-background hover:bg-foreground/90 transition-colors">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>{t("search.filter")}</span>
          </button>
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
