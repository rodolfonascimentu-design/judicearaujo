import { useState, useCallback } from "react";
import { X, Search, MapPin } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import neighborhoods from "@/data/neighborhoods";

interface LaunchFiltersProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const propertyTypes = ["Apartamento", "Casa", "Cobertura", "Flat", "Loft"];
const statusOptions = ["Não iniciada", "Estrutura", "Acabamento", "Pronto"];
const bedroomOptions = ["1", "2", "3", "4", "5+"];
const parkingOptions = ["1+", "2+", "3+", "4+", "5+"];

const LaunchFilters = ({ open, onOpenChange }: LaunchFiltersProps) => {
  const [neighborhoodQuery, setNeighborhoodQuery] = useState("");
  const [selectedNeighborhoods, setSelectedNeighborhoods] = useState<string[]>([]);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [areaMin, setAreaMin] = useState("");
  const [areaMax, setAreaMax] = useState("");
  const [selectedBedrooms, setSelectedBedrooms] = useState<string | null>(null);
  const [selectedParking, setSelectedParking] = useState<string | null>(null);

  const filteredNeighborhoods = neighborhoodQuery.length >= 2
    ? neighborhoods
        .filter((n) =>
          n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            .includes(neighborhoodQuery.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
        )
        .slice(0, 6)
    : [];

  const toggleInList = useCallback((list: string[], item: string) => {
    return list.includes(item) ? list.filter((i) => i !== item) : [...list, item];
  }, []);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full sm:w-[420px] sm:max-w-[420px] p-0 flex flex-col gap-0 border-l border-border bg-white [&>button:last-of-type]:hidden"
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-border">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-sans text-base font-semibold tracking-[-0.01em] text-foreground">
              Filtros
            </SheetTitle>
            <button
              onClick={() => onOpenChange(false)}
              className="rounded-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Fechar</span>
            </button>
          </div>
        </div>

        {/* Scrollable content — all sections always open */}
        <ScrollArea className="flex-1">
          <div className="px-6 py-5 space-y-0" data-filters-panel>
            {/* 1. Localização */}
            <div className="border-b border-border pb-5">
              <p className="font-sans text-xs font-medium tracking-[0.08em] uppercase text-foreground py-4">
                Localização
              </p>
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <Input
                  value={neighborhoodQuery}
                  onChange={(e) => setNeighborhoodQuery(e.target.value)}
                  placeholder="Busque por bairro ou sub-bairro"
                  className="pl-9 text-xs font-sans font-light h-9"
                />
              </div>

              <AnimatePresence>
                {filteredNeighborhoods.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-3 border border-border rounded-md overflow-hidden"
                  >
                    {filteredNeighborhoods.map((n) => (
                      <button
                        key={n}
                        onClick={() => {
                          setSelectedNeighborhoods((prev) => toggleInList(prev, n));
                          setNeighborhoodQuery("");
                        }}
                        className="flex items-center gap-2 w-full px-3 py-2 text-xs font-sans text-foreground hover:bg-muted/50 transition-colors duration-200"
                      >
                        <MapPin className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                        {n}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {selectedNeighborhoods.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {selectedNeighborhoods.map((n) => (
                    <Badge
                      key={n}
                      variant="secondary"
                      className="font-sans text-[10px] font-light tracking-wide cursor-pointer hover:bg-destructive/10 transition-colors duration-200 gap-1 pr-1.5"
                      onClick={() => setSelectedNeighborhoods((prev) => prev.filter((i) => i !== n))}
                    >
                      {n}
                      <X className="w-2.5 h-2.5" />
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* 2. Tipo do imóvel */}
            <div className="border-b border-border pb-5">
              <p className="font-sans text-xs font-medium tracking-[0.08em] uppercase text-foreground py-4">
                Tipo do imóvel
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {propertyTypes.map((pt) => (
                  <label key={pt} className="flex items-center gap-2.5 cursor-pointer group">
                    <Checkbox
                      checked={selectedPropertyTypes.includes(pt)}
                      onCheckedChange={() => setSelectedPropertyTypes((prev) => toggleInList(prev, pt))}
                    />
                    <span className="font-sans text-xs text-foreground font-light group-hover:text-primary transition-colors duration-200">
                      {pt}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* 3. Status da obra */}
            <div className="border-b border-border pb-5">
              <p className="font-sans text-xs font-medium tracking-[0.08em] uppercase text-foreground py-4">
                Status da obra
              </p>
              <RadioGroup
                value={selectedStatus || ""}
                onValueChange={(v) => setSelectedStatus(v || null)}
                className="gap-3"
              >
                {statusOptions.map((opt) => (
                  <label key={opt} className="flex items-center gap-2.5 cursor-pointer">
                    <RadioGroupItem value={opt} />
                    <span className="font-sans text-xs text-foreground font-light">{opt}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>

            {/* 4. Preço */}
            <div className="border-b border-border pb-5">
              <p className="font-sans text-xs font-medium tracking-[0.08em] uppercase text-foreground py-4">
                Preço
              </p>
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <Label className="font-sans text-[10px] tracking-[0.1em] uppercase text-muted-foreground mb-1.5 block">
                    Min
                  </Label>
                  <Input
                    type="number"
                    value={priceMin}
                    onChange={(e) => setPriceMin(e.target.value)}
                    placeholder="R$ 0"
                    className="text-xs font-sans font-light h-9"
                  />
                </div>
                <span className="font-sans text-xs text-muted-foreground mt-5">até</span>
                <div className="flex-1">
                  <Label className="font-sans text-[10px] tracking-[0.1em] uppercase text-muted-foreground mb-1.5 block">
                    Máx
                  </Label>
                  <Input
                    type="number"
                    value={priceMax}
                    onChange={(e) => setPriceMax(e.target.value)}
                    placeholder="R$ 50.000.000"
                    className="text-xs font-sans font-light h-9"
                  />
                </div>
              </div>
            </div>

            {/* 5. Área construída */}
            <div className="border-b border-border pb-5">
              <p className="font-sans text-xs font-medium tracking-[0.08em] uppercase text-foreground py-4">
                Área construída (m²)
              </p>
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <Label className="font-sans text-[10px] tracking-[0.1em] uppercase text-muted-foreground mb-1.5 block">
                    Min
                  </Label>
                  <Input
                    type="number"
                    value={areaMin}
                    onChange={(e) => setAreaMin(e.target.value)}
                    placeholder="0 m²"
                    className="text-xs font-sans font-light h-9"
                  />
                </div>
                <span className="font-sans text-xs text-muted-foreground mt-5">até</span>
                <div className="flex-1">
                  <Label className="font-sans text-[10px] tracking-[0.1em] uppercase text-muted-foreground mb-1.5 block">
                    Máx
                  </Label>
                  <Input
                    type="number"
                    value={areaMax}
                    onChange={(e) => setAreaMax(e.target.value)}
                    placeholder="1000 m²"
                    className="text-xs font-sans font-light h-9"
                  />
                </div>
              </div>
            </div>

            {/* 6. Quartos */}
            <div className="border-b border-border pb-5">
              <p className="font-sans text-xs font-medium tracking-[0.08em] uppercase text-foreground py-4">
                Quartos
              </p>
              <div className="flex gap-2">
                {bedroomOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSelectedBedrooms(selectedBedrooms === opt ? null : opt)}
                    className={`w-10 h-10 rounded-full border font-sans text-xs transition-all duration-200 ${
                      selectedBedrooms === opt
                        ? "bg-primary text-primary-foreground border-primary shadow-sm"
                        : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* 7. Vagas */}
            <div className="pb-5">
              <p className="font-sans text-xs font-medium tracking-[0.08em] uppercase text-foreground py-4">
                Vagas
              </p>
              <div className="flex gap-2">
                {parkingOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSelectedParking(selectedParking === opt ? null : opt)}
                    className={`w-10 h-10 rounded-full border font-sans text-xs transition-all duration-200 ${
                      selectedParking === opt
                        ? "bg-primary text-primary-foreground border-primary shadow-sm"
                        : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="h-24" />
        </ScrollArea>

        {/* Fixed footer — single button */}
        <div className="border-t border-border px-6 py-4 bg-white">
          <button
            onClick={() => onOpenChange(false)}
            className="w-full py-3 rounded-[4px] bg-primary text-primary-foreground font-sans text-[10px] tracking-[0.15em] uppercase font-medium hover:bg-primary/90 transition-colors duration-200 shadow-sm"
          >
            Buscar lançamentos
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default LaunchFilters;
