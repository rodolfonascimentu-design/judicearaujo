import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Clock, ChevronLeft, ChevronRight } from "lucide-react";

const offices = [
  {
    name: "Zona Sul - RJ",
    address: "Rua Aníbal de Mendonça, 27 / 5º andar - Ipanema",
    cep: "22.410-050",
    phones: [{ label: "Tel.", number: "+55 (21) 2540.9999", href: "tel:+552125409999" }],
    whatsapp: { number: "+55 (21) 99559.2196", href: "https://wa.me/5521995592196" },
    email: "zonasul@judicearaujo.com.br",
    hours: ["Segunda à Sexta: 9h às 18:40h", "Sábado: 9:30h às 14:30h", "Domingo e feriados: Fechada com plantão remoto"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&h=700&fit=crop&q=80",
  },
  {
    name: "Itaipava - Petrópolis",
    address: "Estrada União Indústria, 9.450 - Itaipava",
    cep: "25.730-735",
    phones: [{ label: "Tel.", number: "+55 (24) 2222.0382", href: "tel:+552422220382" }],
    whatsapp: { number: "+55 (21) 99967.3830", href: "https://wa.me/5521999673830" },
    email: "itaipava@judicearaujo.com.br",
    hours: ["Segunda à Sexta: 9h às 18h", "Sábado: 9h às 13h", "Domingo e feriados: Fechada com plantão remoto"],
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&h=700&fit=crop&q=80",
  },
  {
    name: "Barra & Lançamentos - RJ",
    address: "Av. das Américas, 500/Bl:2/209 - DownTown",
    cep: "22.640-100",
    phones: [
      { label: "Barra", number: "+55 (21) 99967.3830", href: "tel:+5521999673830" },
      { label: "Lançamentos", number: "+55 (21) 99511.3331", href: "tel:+5521995113331" },
    ],
    whatsapp: null,
    email: "lancamentos@judicearaujo.com.br",
    hours: ["Segunda à Sexta: 9h às 18h", "Sábado: 9h às 13h", "Domingo e feriados: Fechada com plantão remoto"],
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&h=700&fit=crop&q=80",
  },
];

const OfficeLocations = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = offices[activeIndex];

  const goTo = (dir: "prev" | "next") => {
    setActiveIndex((prev) =>
      dir === "next" ? (prev + 1) % offices.length : (prev - 1 + offices.length) % offices.length
    );
  };

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#FDFDFD]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16 lg:mb-20">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground font-medium mb-4">
            Nossos Escritórios
          </p>
          <h2 className="font-display text-2xl md:text-4xl font-normal tracking-[-0.02em] text-foreground">
            Visite um dos nossos escritórios
          </h2>
        </div>

        {/* Main layout: Left info + Right image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 min-h-[500px]">
          {/* Left side — tabs + content */}
          <div className="flex flex-col justify-between pr-0 lg:pr-12">
            {/* Office tabs */}
            <div className="flex flex-col gap-0 mb-8 lg:mb-0">
              {offices.map((office, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`group text-left py-4 border-b transition-all duration-500 ${
                    i === activeIndex
                      ? "border-foreground"
                      : "border-border/30 hover:border-border/60"
                  }`}
                >
                  <span
                    className={`font-display text-base lg:text-lg tracking-[-0.01em] transition-colors duration-300 ${
                      i === activeIndex ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {office.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Active office details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="space-y-4 pt-6 lg:pt-8"
              >
                {/* Address */}
                <div className="flex items-start gap-3 group/item">
                  <MapPin size={15} className="text-muted-foreground mt-0.5 flex-shrink-0 transition-colors duration-300 group-hover/item:text-primary" />
                  <div>
                    <p className="text-sm font-light text-foreground leading-relaxed">{active.address}</p>
                    <p className="text-xs text-muted-foreground font-light mt-0.5">CEP: {active.cep}</p>
                  </div>
                </div>

                {/* Phones */}
                {active.phones.map((phone, j) => (
                  <a key={j} href={phone.href} className="flex items-center gap-3 group/item">
                    <Phone size={15} className="text-muted-foreground flex-shrink-0 transition-colors duration-300 group-hover/item:text-primary" />
                    <span className="text-sm font-light text-foreground transition-colors duration-300 group-hover/item:text-primary">
                      <span className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mr-2">{phone.label}</span>
                      {phone.number}
                    </span>
                  </a>
                ))}

                {/* WhatsApp */}
                {active.whatsapp && (
                  <a href={active.whatsapp.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group/item">
                    <MessageCircle size={15} className="text-muted-foreground flex-shrink-0 transition-colors duration-300 group-hover/item:text-primary" />
                    <span className="text-sm font-light text-foreground transition-colors duration-300 group-hover/item:text-primary">
                      <span className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mr-2">WhatsApp</span>
                      {active.whatsapp.number}
                    </span>
                  </a>
                )}

                {/* Email */}
                <a href={`mailto:${active.email}`} className="flex items-center gap-3 group/item">
                  <Mail size={15} className="text-muted-foreground flex-shrink-0 transition-colors duration-300 group-hover/item:text-primary" />
                  <span className="text-sm font-light text-primary hover:text-primary/80 transition-colors duration-300">
                    {active.email}
                  </span>
                </a>

                {/* Hours */}
                <div className="pt-4 border-t border-border/40">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={13} className="text-muted-foreground" />
                    <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-medium">
                      Horário de Funcionamento
                    </span>
                  </div>
                  <div className="space-y-0.5">
                    {active.hours.map((h, j) => (
                      <p key={j} className="text-xs font-light text-muted-foreground leading-relaxed">{h}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <div className="flex items-center gap-4 pt-8">
              <button
                onClick={() => goTo("prev")}
                className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300"
                aria-label="Escritório anterior"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="text-xs tracking-[0.2em] text-muted-foreground font-light">
                {String(activeIndex + 1).padStart(2, "0")} / {String(offices.length).padStart(2, "0")}
              </span>
              <button
                onClick={() => goTo("next")}
                className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300"
                aria-label="Próximo escritório"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Right side — image */}
          <div className="relative overflow-hidden rounded-[4px] mt-8 lg:mt-0 aspect-[4/3] lg:aspect-auto">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={active.image}
                alt={`Escritório ${active.name}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-full h-full object-cover absolute inset-0"
                loading="lazy"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;
