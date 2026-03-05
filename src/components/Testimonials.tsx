import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";

const testimonials = [
  {
    author: {
      name: "Romero Rodrigues",
      handle: "Google Reviews ★★★★★",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXYHGpM3kE2PnKqRjB5xOZlM4GqB6SfA5aVb9I3=s120-c-rp-mo-br100",
    },
    text: "O profissionalismo, o cuidado e o carinho da Judice & Araujo são diferenciais essenciais e únicos para quem procura a casa dos seus sonhos.",
  },
  {
    author: {
      name: "Ana Paula Monteiro",
      handle: "Google Reviews ★★★★★",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjW8vYe8VxNxMi9fN5K3rTkQp1JZgKfMJlPqN9w=s120-c-rp-mo-br100",
    },
    text: "Excelente atendimento! A equipe foi muito atenciosa e nos ajudou a encontrar o imóvel perfeito no Leblon. Recomendo a todos que buscam qualidade e confiança.",
  },
  {
    author: {
      name: "Ricardo Almeida",
      handle: "Google Reviews ★★★★★",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVP5YE9fPmK2q4JcN5vZt8LxNhGkWjMbR7sU6Y=s120-c-rp-mo-br100",
    },
    text: "Profissionalismo e discrição incomparáveis. Venderam nossa cobertura em Ipanema acima do valor que esperávamos. Experiência impecável.",
  },
  {
    author: {
      name: "Mariana Vasconcellos",
      handle: "Google Reviews ★★★★★",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjU3nK7fQpL8rS2tW4xZv9hJmN3bCwDkF5gA8vY=s120-c-rp-mo-br100",
    },
    text: "A Judice & Araujo encontrou o apartamento perfeito para nossa família. O atendimento foi impecável do início ao fim, com total transparência.",
  },
  {
    author: {
      name: "Carlos Eduardo Silva",
      handle: "Google Reviews ★★★★★",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXL9KpR2mWvN8tZ3qF7hJ5bD6cGwYkA9sE4nP8=s120-c-rp-mo-br100",
    },
    text: "Empresa séria e comprometida. Nos acompanharam em todo o processo de compra com muita dedicação. A melhor imobiliária do Rio sem dúvidas.",
  },
  {
    author: {
      name: "Fernanda Costa",
      handle: "Google Reviews ★★★★★",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWQ7kN5fPmR2s4JcL3vZt9LxMhGkVjMaR8sT7Y=s120-c-rp-mo-br100",
    },
    text: "Uma experiência de consultoria imobiliária que realmente entende o significado de luxo e exclusividade. Equipe excepcional.",
  },
  {
    author: {
      name: "Luísa Brandão",
      handle: "Google Reviews ★★★★★",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjX2mK8fQpL9rT3tV5xZw0hKnO4cDxEkG6iB9wZ=s120-c-rp-mo-br100",
    },
    text: "Compramos nosso apartamento na Gávea com a Judice & Araujo e foi uma experiência incrível. Desde a primeira visita até a entrega das chaves, tudo perfeito.",
  },
  {
    author: {
      name: "Paulo Henrique Duarte",
      handle: "Google Reviews ★★★★★",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjY3nL9gRqM0sU4uW6yAx1iLoP5dEyFkH7jC0xA=s120-c-rp-mo-br100",
    },
    text: "Atendimento diferenciado e personalizado. Conhecem profundamente o mercado imobiliário da Zona Sul. Venderam nosso imóvel em tempo recorde.",
  },
  {
    author: {
      name: "Beatriz Fonseca",
      handle: "Google Reviews ★★★★★",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjZ4oM0hSrN1tV5vX7zBy2jMqQ6eFzGlI8kD1yB=s120-c-rp-mo-br100",
    },
    text: "Recomendo de olhos fechados! A equipe da Judice & Araujo nos orientou com muita competência na compra do nosso primeiro imóvel no Jardim Botânico.",
  },
  {
    author: {
      name: "Marcelo Teixeira",
      handle: "Google Reviews ★★★★★",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjA5pN1iTsO2uW6wY8ACz3kNrR7fGAHmJ9lE2zC=s120-c-rp-mo-br100",
    },
    text: "Profissionais extremamente qualificados e éticos. A transparência em todo o processo nos deu muita segurança. Obrigado, Judice & Araujo!",
  },
];

const Testimonials = () => (
  <TestimonialsSection
    title="O que pensam nossos clientes"
    description="Avaliações reais de clientes que confiaram na Judice & Araujo para encontrar o imóvel ideal"
    testimonials={testimonials}
    className="bg-[#F7F7F7]"
  />
);

export default Testimonials;
