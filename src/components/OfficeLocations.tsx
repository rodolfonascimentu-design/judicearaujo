import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import SectionHeader from "./SectionHeader";

const offices = [
  {
    name: "Zona Sul - RJ",
    address: "Rua Aníbal de Mendonça, 27 / 5º andar - Ipanema",
    cep: "22.410-050",
    phones: [{ label: "Tel.", number: "+55 (21) 2540.9999", href: "tel:+552125409999" }],
    whatsapp: { number: "+55 (21) 99559.2196", href: "https://wa.me/5521995592196" },
    email: "zonasul@judicearaujo.com.br",
    hours: ["Segunda à Sexta: 9h às 18:40h", "Sábado: 9:30h às 14:30h", "Domingo e feriados: Fechada com plantão remoto"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&q=80",
  },
  {
    name: "Itaipava - Petrópolis",
    address: "Estrada União Indústria, 9.450 - Itaipava",
    cep: "25.730-735",
    phones: [{ label: "Tel.", number: "+55 (24) 2222.0382", href: "tel:+552422220382" }],
    whatsapp: { number: "+55 (21) 99967.3830", href: "https://wa.me/5521999673830" },
    email: "itaipava@judicearaujo.com.br",
    hours: ["Segunda à Sexta: 9h às 18h", "Sábado: 9h às 13h", "Domingo e feriados: Fechada com plantão remoto"],
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop&q=80",
  },
];

const OfficeLocations = () => (
  <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#FDFDFD]">
    <div className="max-w-7xl mx-auto">
      <SectionHeader
        title="Visite um dos nossos escritórios"
        subtitle="Atendimento personalizado em localizações estratégicas"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {offices.map((office, i) => (
          <motion.div
            key={i}
            className="group border border-border/50 rounded-[4px] overflow-hidden bg-background"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            {/* Image */}
            <div className="relative overflow-hidden aspect-[3/2]">
              <img
                src={office.image}
                alt={`Escritório ${office.name}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-all duration-500" />
            </div>

            {/* Content */}
            <div className="p-6 lg:p-7 space-y-5">
              <h3 className="font-display text-lg font-medium text-foreground tracking-[-0.01em]">
                {office.name}
              </h3>

              {/* Address */}
              <div className="flex items-start gap-3 group/item">
                <MapPin size={15} className="text-muted-foreground mt-0.5 flex-shrink-0 transition-colors duration-300 group-hover/item:text-primary" />
                <div>
                  <p className="text-sm font-light text-foreground leading-relaxed">{office.address}</p>
                  <p className="text-xs text-muted-foreground font-light mt-0.5">CEP: {office.cep}</p>
                </div>
              </div>

              {/* Phones */}
              {office.phones.map((phone, j) => (
                <a key={j} href={phone.href} className="flex items-center gap-3 group/item">
                  <Phone size={15} className="text-muted-foreground flex-shrink-0 transition-colors duration-300 group-hover/item:text-primary" />
                  <span className="text-sm font-light text-foreground">
                    <span className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mr-2">{phone.label}</span>
                    {phone.number}
                  </span>
                </a>
              ))}

              {/* WhatsApp */}
              {office.whatsapp && (
                <a href={office.whatsapp.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group/item">
                  <MessageCircle size={15} className="text-muted-foreground flex-shrink-0 transition-colors duration-300 group-hover/item:text-primary" />
                  <span className="text-sm font-light text-foreground">
                    <span className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mr-2">WhatsApp</span>
                    {office.whatsapp.number}
                  </span>
                </a>
              )}

              {/* Email */}
              <a href={`mailto:${office.email}`} className="flex items-center gap-3 group/item">
                <Mail size={15} className="text-muted-foreground flex-shrink-0 transition-colors duration-300 group-hover/item:text-primary" />
                <span className="text-sm font-light text-primary hover:text-primary/80 transition-colors duration-300">
                  {office.email}
                </span>
              </a>

              {/* Hours */}
              <div className="pt-4 border-t border-border/40">
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={13} className="text-muted-foreground" />
                  <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-medium">
                    Horário de Funcionamento
                  </span>
                </div>
                <div className="space-y-1">
                  {office.hours.map((h, j) => (
                    <p key={j} className="text-xs font-light text-muted-foreground leading-relaxed">{h}</p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default OfficeLocations;
