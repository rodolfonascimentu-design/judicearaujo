import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import neighborhoods from "@/data/neighborhoods";

interface SearchAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  onSelect: (value: string) => void;
  placeholder: string;
  className?: string;
  inputClassName?: string;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}

const SearchAutocomplete = ({
  value,
  onChange,
  onSelect,
  placeholder,
  className = "",
  inputClassName = "",
  onKeyDown,
}: SearchAutocompleteProps) => {
  const [open, setOpen] = useState(false);
  const [filtered, setFiltered] = useState<string[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value.length < 2) {
      setFiltered([]);
      setOpen(false);
      return;
    }
    const q = value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const results = neighborhoods.filter((n) =>
      n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(q)
    ).slice(0, 8);
    setFiltered(results);
    setOpen(results.length > 0);
  }, [value]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => { if (filtered.length > 0) setOpen(true); }}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        className={inputClassName}
      />
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-border overflow-hidden z-50 max-h-64 overflow-y-auto"
          >
            {filtered.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  onSelect(item);
                  setOpen(false);
                }}
                className="w-full flex items-center gap-2.5 px-4 py-2.5 text-left text-sm font-sans font-light text-foreground hover:bg-muted/50 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchAutocomplete;
