import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";
import exclusive1 from "@/assets/exclusive-1.jpg";
import exclusive2 from "@/assets/exclusive-2.jpg";
import exclusive3 from "@/assets/exclusive-3.jpg";
import exclusive4 from "@/assets/exclusive-4.jpg";
import highlightBeachfront from "@/assets/highlight-beachfront.jpg";
import highlightPenthouse from "@/assets/highlight-penthouse.jpg";
import test1 from "@/assets/test-1.jpg";
import test2 from "@/assets/test-2.jpg";
import test3 from "@/assets/test-3.jpg";
import test4 from "@/assets/test-4.jpg";
import test5 from "@/assets/test-5.jpg";
import test6 from "@/assets/test-6.jpg";
import tipologia1 from "@/assets/tipologia-1.jpg";
import tipologia2 from "@/assets/tipologia-2.jpg";
import tipologia3 from "@/assets/tipologia-3.jpg";
import tipologia4 from "@/assets/tipologia-4.jpg";
import soho1 from "@/assets/soho-1.jpg";
import soho2 from "@/assets/soho-2.jpg";
import soho3 from "@/assets/soho-3.jpg";
import soho4 from "@/assets/soho-4.jpg";
import soho5 from "@/assets/soho-5.jpg";
import soho6 from "@/assets/soho-6.jpg";
import soho7 from "@/assets/soho-7.jpg";

export interface PropertyUnit {
  type: string;
  area: number;
  bedrooms: number;
  suites: number;
  parking: number;
  price: string;
}

export interface NearbyCategory {
  category: string;
  icon: string;
  places: string[];
}

export interface PropertyAgent {
  name: string;
  photo: string;
  creci: string;
  phone: string;
  whatsapp: string;
}

export interface SimilarProperty {
  id: string;
  image: string;
  title: string;
  neighborhood: string;
  price: string;
  bedrooms: number;
  area: number;
  parking: number;
  type: string;
}

export interface PropertyTypology {
  image: string;
  title: string;
  area?: number;
  bedrooms?: number;
}

export interface PropertyVideoData {
  url: string;
  thumbnail: string;
}

export interface PropertyDetailData {
  id: string;
  type: string;
  status: "launch" | "ready" | "construction";
  name: string;
  neighborhood: string;
  city: string;
  address: string;
  price: string;
  priceLabel: string;
  area: number;
  suites: number;
  bathrooms: number;
  parking: number;
  images: string[];
  description: string[];
  internalFeatures: string[];
  condoFeatures: string[];
  units: PropertyUnit[];
  constructionStage: number; // 0-3
  constructionStages: string[];
  typologies?: PropertyTypology[];
  video?: PropertyVideoData;
  mapQuery: string;
  neighborhoodDescription: string[];
  neighborhoodImage: string;
  nearby: NearbyCategory[];
  agent: PropertyAgent;
  similar: SimilarProperty[];
}

export const mockProperty: PropertyDetailData = {
  id: "mar-azul-ii",
  type: "Casa",
  status: "launch",
  name: "Condomínio Mar Azul II",
  neighborhood: "Joá",
  city: "Rio de Janeiro",
  address: "Estrada do Joá, 3.200 – Joá, Rio de Janeiro – RJ",
  price: "R$ 4.200.000",
  priceLabel: "A partir de",
  area: 520,
  suites: 4,
  bathrooms: 5,
  parking: 6,
  images: [
    test1,
    test2,
    test3,
    test4,
    test5,
    test6,
  ],
  description: [
    "Situada em uma das localizações mais privilegiadas do Rio de Janeiro, esta residência é um verdadeiro refúgio de sofisticação e exclusividade. Com 520m² de área construída e um terreno generoso que se abre para uma vista panorâmica da Praia do Joá e da Pedra da Gávea, a propriedade oferece uma experiência de moradia incomparável.",
    "A planta foi concebida pelo renomado escritório de arquitetura Studio MK27, priorizando a integração entre os espaços internos e externos. A sala de estar, com pé-direito duplo e lareira, conecta-se diretamente ao deck da piscina infinita, criando um fluxo natural que convida à contemplação.",
    "O pavimento íntimo abriga quatro suítes com closets planejados, sendo a master suite um verdadeiro santuário com 65m², banheira de imersão, ducha dupla e varanda privativa com vista para o mar. O home theater, com isolamento acústico profissional e sistema Bose integrado, complementa a área de lazer.",
    "A cozinha gourmet, equipada com eletrodomésticos Sub-Zero e Wolf, foi desenhada para receber com elegância. A adega climatizada com capacidade para 300 garrafas e o espaço de bar completam a experiência gastronômica.",
  ],
  internalFeatures: [
    "4 Suítes com closet",
    "Varanda panorâmica",
    "Home theater",
    "Cozinha gourmet",
    "Adega climatizada",
    "Piscina infinita",
    "Lareira",
    "Pé-direito duplo",
    "Automação residencial",
    "Energia solar",
  ],
  condoFeatures: [
    "Academia",
    "Piscina adulto",
    "Piscina infantil",
    "Playground",
    "Salão de festas",
    "Espaço gourmet",
    "Portaria 24h",
    "Segurança armada",
    "Heliponto",
    "Quadra de tênis",
  ],
  units: [
    { type: "Tipo A – Garden", area: 420, bedrooms: 3, suites: 3, parking: 4, price: "R$ 3.800.000" },
    { type: "Tipo B – Standard", area: 520, bedrooms: 4, suites: 4, parking: 6, price: "R$ 4.200.000" },
    { type: "Tipo C – Premium", area: 650, bedrooms: 5, suites: 5, parking: 6, price: "R$ 5.500.000" },
    { type: "Tipo D – Penthouse", area: 780, bedrooms: 5, suites: 5, parking: 8, price: "R$ 7.200.000" },
  ],
  constructionStage: 1,
  constructionStages: ["Não iniciada", "Estrutura", "Acabamento", "Pronto"],
  typologies: [
    { image: tipologia1, title: "Garden – Aptos 102 e 104", area: 56, bedrooms: 1 },
    { image: tipologia2, title: "Tipo 1 – Apto 01", area: 73, bedrooms: 2 },
    { image: tipologia3, title: "Tipo 2 – Aptos 02 e 04", area: 37, bedrooms: 1 },
    { image: tipologia4, title: "Tipo 3 – Apto 03", area: 42, bedrooms: 1 },
  ],
  video: {
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: test5,
  },
  mapQuery: "Estrada+do+Joá+3200+Rio+de+Janeiro+RJ",
  neighborhoodDescription: [
    "O Joá é um dos endereços mais exclusivos e preservados do Rio de Janeiro. Encravado entre a Pedra da Gávea e o mar, o bairro combina a exuberância da Mata Atlântica com a sofisticação de residências de altíssimo padrão. É o refúgio perfeito para quem busca privacidade absoluta sem abrir mão da proximidade com a Barra da Tijuca e São Conrado.",
    "A gastronomia do entorno é um capítulo à parte: restaurantes como o Térèze, no Hotel Santa Teresa, e o Lasai, estrelado pelo Guia Michelin, estão a poucos minutos. Os amantes da natureza encontram trilhas deslumbrantes na Floresta da Tijuca e praias desertas acessíveis apenas por trilha.",
  ],
  neighborhoodImage: exclusive3,
  nearby: [
    { category: "Shoppings", icon: "ShoppingBag", places: ["Village Mall", "BarraShopping", "Fashion Mall"] },
    { category: "Restaurantes", icon: "UtensilsCrossed", places: ["Térèze", "Lasai", "Olympe", "Oteque"] },
    { category: "Escolas", icon: "GraduationCap", places: ["Escola Americana", "Escola Britânica", "Escola Parque"] },
    { category: "Hospitais", icon: "Heart", places: ["Hospital Samaritano", "Copa D'Or", "Hospital Barra D'Or"] },
    { category: "Praias", icon: "Waves", places: ["Praia do Joá", "São Conrado", "Prainha"] },
    { category: "Parques", icon: "TreePine", places: ["Floresta da Tijuca", "Parque da Cidade", "Jardim Botânico"] },
  ],
  agent: {
    name: "Carolina Mendes",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
    creci: "CRECI-RJ 45.678",
    phone: "(21) 99876-5432",
    whatsapp: "5521998765432",
  },
  similar: [
    { id: "1", image: property5, title: "Villa Contemporânea", neighborhood: "São Conrado", price: "R$ 5.800.000", bedrooms: 5, area: 620, parking: 4, type: "Casa" },
    { id: "2", image: property6, title: "Mansão Colonial", neighborhood: "Gávea", price: "R$ 8.500.000", bedrooms: 6, area: 850, parking: 6, type: "Casa" },
    { id: "3", image: exclusive4, title: "Penthouse Vista Mar", neighborhood: "Leblon", price: "R$ 12.000.000", bedrooms: 4, area: 450, parking: 4, type: "Apartamento" },
    { id: "4", image: highlightBeachfront, title: "Residência Beira-Mar", neighborhood: "Ipanema", price: "R$ 9.200.000", bedrooms: 4, area: 380, parking: 3, type: "Apartamento" },
  ],
};
