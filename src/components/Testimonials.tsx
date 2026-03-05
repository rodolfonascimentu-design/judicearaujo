import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";

const testimonials = [
  {
    author: {
      name: "Romero Rodrigues",
      handle: "Google Reviews ★★★★★",
      avatar: "https://ui-avatars.com/api/?name=RR&background=003F36&color=FFF8E2&size=150",
    },
    text: "O profissionalismo, o cuidado e o carinho da Judice & Araujo são diferenciais essenciais e únicos para quem procura a casa dos seus sonhos.",
  },
  {
    author: {
      name: "Ana Paula Monteiro",
      handle: "Google Reviews ★★★★★",
      avatar: "https://ui-avatars.com/api/?name=AM&background=003F36&color=FFF8E2&size=150",
    },
    text: "Excelente atendimento! A equipe foi muito atenciosa e nos ajudou a encontrar o imóvel perfeito no Leblon. Recomendo a todos que buscam qualidade e confiança.",
  },
  {
    author: {
      name: "Ricardo Almeida",
      handle: "Google Reviews ★★★★★",
      avatar: "https://ui-avatars.com/api/?name=RA&background=003F36&color=FFF8E2&size=150",
    },
    text: "Profissionalismo e discrição incomparáveis. Venderam nossa cobertura em Ipanema acima do valor que esperávamos. Experiência impecável.",
  },
  {
    author: {
      name: "Mariana Vasconcellos",
      handle: "Google Reviews ★★★★★",
      avatar: "https://ui-avatars.com/api/?name=MV&background=003F36&color=FFF8E2&size=150",
    },
    text: "A Judice & Araujo encontrou o apartamento perfeito para nossa família. O atendimento foi impecável do início ao fim, com total transparência.",
  },
  {
    author: {
      name: "Carlos Eduardo Silva",
      handle: "Google Reviews ★★★★★",
      avatar: "https://ui-avatars.com/api/?name=CS&background=003F36&color=FFF8E2&size=150",
    },
    text: "Empresa séria e comprometida. Nos acompanharam em todo o processo de compra com muita dedicação. A melhor imobiliária do Rio sem dúvidas.",
  },
  {
    author: {
      name: "Fernanda Costa",
      handle: "Google Reviews ★★★★★",
      avatar: "https://ui-avatars.com/api/?name=FC&background=003F36&color=FFF8E2&size=150",
    },
    text: "Uma experiência de consultoria imobiliária que realmente entende o significado de luxo e exclusividade. Equipe excepcional.",
  },
];

const Testimonials = () => (
  <TestimonialsSection
    title="O que pensam nossos clientes"
    description="Avaliações reais de clientes que confiaram na Judice & Araujo para encontrar o imóvel ideal"
    testimonials={testimonials}
  />
);

export default Testimonials;
