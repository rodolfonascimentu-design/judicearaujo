import SectionHeader from "./SectionHeader";
import PropertyCard from "./PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

const properties = [
  { image: property1, title: "Cobertura Duplex com Vista Mar", neighborhood: "Leblon", price: "R$ 12.500.000", bedrooms: 5, area: 480 },
  { image: property2, title: "Apartamento Frente Mar", neighborhood: "Ipanema", price: "R$ 8.200.000", bedrooms: 4, area: 320 },
  { image: property3, title: "Casa com Jardim à Beira da Lagoa", neighborhood: "Lagoa", price: "R$ 6.800.000", bedrooms: 4, area: 550 },
  { image: property4, title: "Mansão Contemporânea", neighborhood: "Gávea", price: "R$ 15.900.000", bedrooms: 6, area: 850 },
  { image: property5, title: "Villa Tropical Exclusiva", neighborhood: "Jardim Botânico", price: "R$ 9.500.000", bedrooms: 5, area: 620 },
  { image: property6, title: "Refúgio à Beira-Mar", neighborhood: "São Conrado", price: "R$ 7.300.000", bedrooms: 4, area: 380 },
];

const FeaturedProperties = () => (
  <section id="imoveis" className="py-24 lg:py-32 px-6 lg:px-12 bg-background">
    <div className="max-w-7xl mx-auto">
      <SectionHeader
        title="Imóveis em Destaque"
        subtitle="Uma seleção exclusiva dos imóveis mais desejados do Rio de Janeiro"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {properties.map((property, i) => (
          <PropertyCard key={i} {...property} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProperties;
