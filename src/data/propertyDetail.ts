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
import leblon2 from "@/assets/leblon-2.jpg";
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
  code: string;
  type: string;
  status: "launch" | "ready" | "construction";
  transaction: "Venda" | "Locação";
  name: string;
  neighborhood: string;
  city: string;
  state: string;
  address: string;
  price: string;
  priceLabel: string;
  condoFee?: string;
  iptu?: string;
  area: number;
  suites: number;
  bathrooms: number;
  parking: number;
  bedroomsRange?: string;
  bathroomsRange?: string;
  areaRange?: string;
  parkingRange?: string;
  launchTypes?: string[];
  images: string[];
  description: string[];
  internalFeatures: string[];
  condoFeatures: string[];
  units: PropertyUnit[];
  constructionStage: number;
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
  code: "12023332",
  type: "Apartamento",
  status: "launch",
  transaction: "Venda",
  name: "Soho",
  neighborhood: "Leblon",
  city: "Rio de Janeiro",
  state: "RJ",
  address: "Avenida Bartolomeu Mitre, Leblon, Rio de Janeiro - RJ",
  price: "R$ 4.200.000",
  priceLabel: "A partir de",
  condoFee: "R$ 2.609",
  iptu: "R$ 1.005",
  area: 520,
  suites: 4,
  bathrooms: 5,
  parking: 6,
  bedroomsRange: "1 a 2",
  bathroomsRange: "1 a 2",
  areaRange: "37 a 73",
  parkingRange: "1",
  launchTypes: ["Apartamentos", "Coberturas", "Studios"],
  images: [
    soho1,
    soho2,
    soho3,
    soho4,
    soho5,
    soho6,
    soho7,
  ],
  description: [
    "Soho Gávea: onde o estilo carioca encontra o charme cosmopolita.\nA poucos minutos do Baixo Gávea, Jockey Club, PUC-Rio e Parque da Cidade, o SOHO está em um dos bairros mais desejados do Rio, com alta qualidade de vida, ruas arborizadas e acessibilidade.\nCom infraestrutura completa com restaurantes renomados, cultura, escolas e lazer, além da facilidade de mobilidade: próximo ao Leblon, Lagoa e acessos à Zona Norte e Oeste.\nNa Gávea, a alma carioca vive em harmonia com a natureza e a vida urbana moderna.",
    "Soho Gávea: arquitetura contemporânea com alma criativa.\nEsse lançamento imobiliário dispõe de 35 unidades, com 12 tipos de plantas versáteis e funcionais.\nO projeto inspirado no Soho nova-iorquino, assinado pelos escritórios Branca Bronstein Studio e Paula Daemon, conta com fachada moderna, ambientes integrados e espaços que combinam lazer, trabalho e bem-estar. Além de áreas comuns com coworking, sala de podcast, espaço delivery, lounge e lavanderia e um infraestrutura com fechadura digital, previsão para split, segurança e sustentabilidade.",
    "Confira as tipologias inteligentes e lazer completo que o SOHO Gávea te proporciona.\nO SOHO Gávea tem opções gardens com 1 e 2 quartos de 49,49m² a 122,28m² e apartamentos tipo, 1 e 2 quartos de 36,72 - 72,88m².\nSão plantas com excelente iluminação natural, varanda com portas de vidro de correr e ambientes integráveis.\nSua área comum é completa, com rooftop com piscina, deck molhado, spa, sauna, espaço fitness e salão de festas gourmet.\nAlém de atender a toda família, com área kids, espaço game e bicicletário para quem valoriza o estilo de vida urbano e ativo.\nSoluções sustentáveis como hidrômetros individuais, iluminação LED nas áreas comuns e sistema de reaproveitamento.",
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
    url: "https://www.youtube.com/watch?v=HxUmYJ5FUyU",
    thumbnail: soho5,
  },
  mapQuery: "Estrada+do+Joá+3200+Rio+de+Janeiro+RJ",
  neighborhoodDescription: [
    "Um dos bairros mais famosos do Rio de Janeiro, o Leblon tornou-se um objeto de desejo para se morar e, por essa razão, tornou-se o mais valorizado da cidade. O bairro conserva sua vocação residencial e ao mesmo tempo oferece as mais diversas opções de comércio, com destaques para o Shopping Leblon e o Rio Design Leblon, além do tradicional comércio de rua.",
    "O Leblon tornou-se um pólo gastronômico, com excelentes restaurantes e bares, tendo a Rua Dias Ferreira como principal eixo.",
    "Por que comprar um imóvel no Leblon? Comprar um apartamento no Leblon virou sinônimo de status, mas não à toa. O mercado do bairro está sempre aquecido e tem ótima liquidez, dado que sempre há procura por imóveis no Leblon. Na Avenida Delfim Moreira, de frente para a praia, estão os edifícios mais luxuosos do bairro, onde os apartamentos e coberturas figuram entre os imóveis mais desejados do País.",
    "Se você procura uma casa no Leblon, o Jardim Pernambuco (associação de moradores, com status de condomínio fechado com segurança) é o lugar certo. É lá que estão as casas mais valorizadas da cidade.",
    "O Leblon é dividido entre a parte baixa (onde é possível fazer praticamente tudo à pé) e o Alto Leblon, onde se encontram alguns condomínios fechados compostos por edifícios e o Clube Federal. Na parte baixa, estão os clubes Paissandu e AABB. A escola mais famosa do bairro é o tradicional Colégio Santo Agostinho.",
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
