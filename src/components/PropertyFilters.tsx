import { useState, useCallback } from "react";
import { X, Search, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import neighborhoods from "@/data/neighborhoods";

interface PropertyFiltersProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type TabKey = "filters" | "smart";

const propertyTypes = ["Apartamento", "Casa", "Cobertura", "Flat", "Loft", "Sítio"];
const commercialTypes = ["Casa comercial", "Hotel / Pousada", "Prédio Comercial", "Galpão", "Loja", "Salas / Conjuntos"];
const otherTypes = ["Fazenda", "Terreno", "Ilha"];
const generalFeatures = ["Em condomínio", "Elevador", "Portaria 24h"];
const propertyLeisure = ["Churrasqueira", "Piscina", "Varanda"];
const buildingLeisure = ["Academia", "Playground", "Salão de festas", "Churrasqueira", "Piscina", "Quadra poliesportiva"];

const bedroomOptions = ["1", "2", "3", "4", "5+"];
const parkingOptions = ["1+", "2+", "3+", "4+", "5+"];

const PropertyFilters = ({ open, onOpenChange }: PropertyFiltersProps) => {
  const [activeTab, setActiveTab] = useState<TabKey>("filters");
  const [neighborhoodQuery, setNeighborhoodQuery] = useState("");
  const [selectedNeighborhoods, setSelectedNeighborhoods] = useState<string[]>([]);
  const [dealType, setDealType] = useState("comprar");
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>([]);
  const [selectedCommercial, setSelectedCommercial] = useState<string[]>([]);
  const [selectedOther, setSelectedOther] = useState<string[]>([]);
  const [launchType, setLaunchType] = useState("avulsos");
  const [priceRange, setPriceRange] = useState([0, 50000000]);
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [areaMin, setAreaMin] = useState("");
  const [areaMax, setAreaMax] = useState("");
  const [selectedBedrooms, setSelectedBedrooms] = useState<string | null>(null);
  const [selectedParking, setSelectedParking] = useState<string | null>(null);
  const [selectedGeneral, setSelectedGeneral] = useState<string[]>([]);
  const [selectedPropertyLeisure, setSelectedPropertyLeisure] = useState<string[]>([]);
  const [selectedBuildingLeisure, setSelectedBuildingLeisure] = useState<string[]>([]);

  const filteredNeighborhoods = neighborhoodQuery.length >= 2
    ? neighborhoods.filter((n) =>
        n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
          .includes(neighborhoodQuery.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
      ).slice(0, 6)
    : [];

  const toggleInList = useCallback((list: string[], item: string) => {
    return list.includes(item) ? list.filter((i) => i !== item) : [...list, item];
  }, []);

  const clearAll = () => {
    setNeighborhoodQuery("");
    setSelectedNeighborhoods([]);
    setDealType("comprar");
    setSelectedPropertyTypes([]);
    setSelectedCommercial([]);
    setSelectedOther([]);
    setLaunchType("avulsos");
    setPriceRange([0, 50000000]);
    setPriceMin("");
    setPriceMax("");
    setAreaMin("");
    setAreaMax("");
    setSelectedBedrooms(null);
    setSelectedParking(null);
    setSelectedGeneral([]);
    setSelectedPropertyLeisure([]);
    setSelectedBuildingLeisure([]);
  };

  const dealTypes = [
    { key: "comprar", label: "Comprar" },
    { key: "alugar", label: "Alugar" },
    { key: "temporada", label: "Temporada" },
  ];

  const tabs: { key: TabKey; label: string }[] = [
    { key: "smart", label: "Filtro Inteligente" },
    { key: "filters", label: "Filtros" },
  ];

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full sm:w-[420px] sm:max-w-[420px] p-0 flex flex-col gap-0 border-l border-border"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-border">
          <SheetTitle className="font-sans text-base font-semibold tracking-[-0.01em] text-foreground">
            Filtros
          </SheetTitle>
          <div className="flex items-center gap-4">
            <button
              onClick={clearAll}
              className="font-sans text-[10px] tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Limpar filtros
            </button>
            <SheetClose className="rounded-sm opacity-70 hover:opacity-100 transition-opacity">
              <X className="h-4 w-4" />
              <span className="sr-only">Fechar</span>
            </SheetClose>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-0 px-6 pt-4 pb-0">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-4 py-2.5 font-sans text-[10px] tracking-[0.15em] uppercase transition-colors duration-200 ${
                activeTab === tab.key
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
              {activeTab === tab.key && (
                <motion.div
                  layoutId="filter-tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                  transition={{ duration: 0.2 }}
                />
              )}
            </button>
          ))}
        </div>
        <div className="h-px bg-border" />

        {/* Scrollable content */}
        <ScrollArea className="flex-1">
          <div className="px-6 py-5">
            {activeTab === "smart" ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <p className="font-sans text-xs text-muted-foreground tracking-wide">
                  Descreva o imóvel que você procura e nossa IA encontrará as melhores opções.
                </p>
                <div className="mt-6 w-full">
                  <Input
                    placeholder="Ex: Apartamento 3 quartos no Leblon com vista mar"
                    className="text-xs font-sans font-light"
                  />
                </div>
              </div>
            ) : (
              <Accordion
                type="multiple"
                defaultValue={["location", "deal-type", "property-type"]}
                className="space-y-0"
              >
                {/* 1. Localização */}
                <AccordionItem value="location" className="border-b border-border">
                  <AccordionTrigger className="font-sans text-xs font-medium tracking-[0.08em] uppercase text-foreground hover:no-underline py-4">
                    Localização
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="relative mb-3">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                      <Input
                        value={neighborhoodQuery}
                        onChange={(e) => setNeighborhoodQuery(e.target.value)}
                        placeholder="Busque por bairro ou sub-bairro"
                        className="pl-9 text-xs font-sans font-light h-9"
                      />
                    </div>

                    {/* Autocomplete results */}
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

                    {/* Selected chips */}
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
                  </AccordionContent>
                </AccordionItem>

                {/* 2. Tipo de negócio */}
                <AccordionItem value="deal-type" className="border-b border-border">
                  <AccordionTrigger className="font-sans text-xs font-medium tracking-[0.08em] uppercase text-foreground hover:no-underline py-4">
                    Tipo de negócio
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="flex rounded-md border border-border overflow-hidden">
                      {dealTypes.map((dt) => (
                        <button
                          key={dt.key}
                          onClick={() => setDealType(dt.key)}
                          className={`flex-1 py-2.5 font-sans text-[10px] tracking-[0.12em] uppercase transition-all duration-200 ${
                            dealType === dt.key
                              ? "bg-primary text-primary-foreground font-medium"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                          }`}
                        >
                          {dt.label}
                        </button>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 3. Tipo do imóvel */}
                <AccordionItem value="property-type" className="border-b border-border">
                  <AccordionTrigger className="font-sans text-xs font-medium tracking-[0.08em] uppercase text-foreground hover:no-underline py-4">
                    Tipo do imóvel
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
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
                  </AccordionContent>
                </AccordionItem>

                {/* 4. Imóveis comerciais */}
                <AccordionItem value="commercial" className="border-b border-border">
                  <AccordionTrigger className="font-sans text-xs font-medium tracking-[0.08em] uppercase text-foreground hover:no-underline py-4">
                    Imóveis comerciais
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="grid grid-cols-2 gap-2.5">
                      {commercialTypes.map((ct) => (
                        <label key={ct} className="flex items-center gap-2.5 cursor-pointer group">
                          <Checkbox
                            checked={selectedCommercial.includes(ct)}
                            onCheckedChange={() => setSelectedCommercial((prev) => toggleInList(prev, ct))}
                          />
                          <span className="font-sans text-xs text-foreground font-light group-hover:text-primary transition-colors duration-200">
                            {ct}
                          </span>
                        </label>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 5. Outros imóveis */}
                <AccordionItem value="other" className="border-b border-border">
                  <AccordionTrigger className="font-sans text-xs font-medium tracking-[0.08em] uppercase text-foreground hover:no-underline py-4">
                    Outros imóveis
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="grid grid-cols-2 gap-2.5">
                      {otherTypes.map((ot) => (
                        <label key={ot} className="flex items-center gap-2.5 cursor-pointer group">
                          <Checkbox
                            checked={selectedOther.includes(ot)}
                            onCheckedChange={() => setSelectedOther((prev) => toggleInList(prev, ot))}
                          />
                          <span className="font-sans text-xs text-foreground font-light group-hover:text-primary transition-colors duration-200">
                            {ot}
                          </span>
                        </label>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 6. Lançamentos */}
                <AccordionItem value="launches" className="border-b border-border">
                  <AccordionTrigger className="font-sans text-xs font-medium tracking-[0.08em] uppercase text-foreground hover:no-underline py-4">
                    Lançamentos
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <RadioGroup value={launchType} onValueChange={setLaunchType} className="gap-3">
                      {[
                        { value: "lancamentos", label: "Lançamentos" },
                        { value: "avulsos", label: "Avulsos" },
                      ].map((opt) => (
                        <label key={opt.value} className="flex items-center gap-2.5 cursor-pointer">
                          <RadioGroupItem value={opt.value} />
                          <span className="font-sans text-xs text-foreground font-light">{opt.label}</span>
                        </label>
                      ))}
                    </RadioGroup>
                  </AccordionContent>
                </AccordionItem>

                {/* 7. Preço */}
                <AccordionItem value="price" className="border-b border-border">
                  <AccordionTrigger className="font-sans text-xs font-medium tracking-[0.08em] uppercase text-foreground hover:no-underline py-4">
                    Preço
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      min={0}
                      max={50000000}
                      step={100000}
                      className="mb-4"
                    />
                    <div className="flex gap-3">
                      <div className="flex-1">
                        <Label className="font-sans text-[10px] tracking-[0.1em] uppercase text-muted-foreground mb-1.5 block">
                          Mínimo
                        </Label>
                        <Input
                          value={priceMin}
                          onChange={(e) => setPriceMin(e.target.value)}
                          placeholder="R$ 0"
                          className="text-xs font-sans font-light h-9"
                        />
                      </div>
                      <div className="flex-1">
                        <Label className="font-sans text-[10px] tracking-[0.1em] uppercase text-muted-foreground mb-1.5 block">
                          Máximo
                        </Label>
                        <Input
                          value={priceMax}
                          onChange={(e) => setPriceMax(e.target.value)}
                          placeholder="R$ 50.000.000"
                          className="text-xs font-sans font-light h-9"
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 8. Área construída */}
                <AccordionItem value="area" className="border-b border-border">
                  <AccordionTrigger className="font-sans text-xs font-medium tracking-[0.08em] uppercase text-foreground hover:no-underline py-4">
                    Área construída (m²)
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="flex gap-3">
                      <div className="flex-1">
                        <Label className="font-sans text-[10px] tracking-[0.1em] uppercase text-muted-foreground mb-1.5 block">
                          Mínimo
                        </Label>
                        <Input
                          value={areaMin}
                          onChange={(e) => setAreaMin(e.target.value)}
                          placeholder="0 m²"
                          className="text-xs font-sans font-light h-9"
                        />
                      </div>
                      <div className="flex-1">
                        <Label className="font-sans text-[10px] tracking-[0.1em] uppercase text-muted-foreground mb-1.5 block">
                          Máximo
                        </Label>
                        <Input
                          value={areaMax}
                          onChange={(e) => setAreaMax(e.target.value)}
                          placeholder="1000 m²"
                          className="text-xs font-sans font-light h-9"
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 9. Quartos */}
                <AccordionItem value="bedrooms" className="border-b border-border">
                  <AccordionTrigger className="font-sans text-xs font-medium tracking-[0.08em] uppercase text-foreground hover:no-underline py-4">
                    Quartos
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
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
                  </AccordionContent>
                </AccordionItem>

                {/* 10. Vagas */}
                <AccordionItem value="parking" className="border-b border-border">
                  <AccordionTrigger className="font-sans text-xs font-medium tracking-[0.08em] uppercase text-foreground hover:no-underline py-4">
                    Vagas
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
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
                  </AccordionContent>
                </AccordionItem>

                {/* 11. Características gerais */}
                <AccordionItem value="general" className="border-b border-border">
                  <AccordionTrigger className="font-sans text-xs font-medium tracking-[0.08em] uppercase text-foreground hover:no-underline py-4">
                    Características gerais
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="grid grid-cols-2 gap-2.5">
                      {generalFeatures.map((f) => (
                        <label key={f} className="flex items-center gap-2.5 cursor-pointer group">
                          <Checkbox
                            checked={selectedGeneral.includes(f)}
                            onCheckedChange={() => setSelectedGeneral((prev) => toggleInList(prev, f))}
                          />
                          <span className="font-sans text-xs text-foreground font-light group-hover:text-primary transition-colors duration-200">
                            {f}
                          </span>
                        </label>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 12. Lazer do imóvel */}
                <AccordionItem value="property-leisure" className="border-b border-border">
                  <AccordionTrigger className="font-sans text-xs font-medium tracking-[0.08em] uppercase text-foreground hover:no-underline py-4">
                    Lazer do imóvel
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="grid grid-cols-2 gap-2.5">
                      {propertyLeisure.map((f) => (
                        <label key={f} className="flex items-center gap-2.5 cursor-pointer group">
                          <Checkbox
                            checked={selectedPropertyLeisure.includes(f)}
                            onCheckedChange={() => setSelectedPropertyLeisure((prev) => toggleInList(prev, f))}
                          />
                          <span className="font-sans text-xs text-foreground font-light group-hover:text-primary transition-colors duration-200">
                            {f}
                          </span>
                        </label>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 13. Lazer do edifício / condomínio */}
                <AccordionItem value="building-leisure" className="border-none">
                  <AccordionTrigger className="font-sans text-xs font-medium tracking-[0.08em] uppercase text-foreground hover:no-underline py-4">
                    Lazer do edifício / condomínio
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="grid grid-cols-2 gap-2.5">
                      {buildingLeisure.map((f, idx) => (
                        <label key={`${f}-${idx}`} className="flex items-center gap-2.5 cursor-pointer group">
                          <Checkbox
                            checked={selectedBuildingLeisure.includes(f)}
                            onCheckedChange={() => setSelectedBuildingLeisure((prev) => toggleInList(prev, f))}
                          />
                          <span className="font-sans text-xs text-foreground font-light group-hover:text-primary transition-colors duration-200">
                            {f}
                          </span>
                        </label>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )}
          </div>
          {/* Spacer for fixed footer */}
          <div className="h-24" />
        </ScrollArea>

        {/* Fixed footer */}
        <div className="border-t border-border px-6 py-4 flex gap-3 bg-background">
          <button
            onClick={clearAll}
            className="flex-1 py-3 rounded-[4px] border border-border font-sans text-[10px] tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-200"
          >
            Limpar filtros
          </button>
          <button
            onClick={() => onOpenChange(false)}
            className="flex-1 py-3 rounded-[4px] bg-primary text-primary-foreground font-sans text-[10px] tracking-[0.15em] uppercase font-medium hover:bg-primary/90 transition-colors duration-200 shadow-sm"
          >
            Buscar imóveis
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default PropertyFilters;
