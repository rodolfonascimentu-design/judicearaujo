import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const articles = [
  {
    image: blog1,
    category: "Mercado",
    title: "O mercado de luxo no Leblon atinge novos patamares em 2026",
    date: "28 Fev 2026",
    excerpt: "Análise do crescimento e das tendências que impulsionam os preços nos endereços mais cobiçados.",
  },
  {
    image: blog2,
    category: "Design",
    title: "Tendências de design de interiores para imóveis de alto padrão",
    date: "15 Fev 2026",
    excerpt: "Descubra as influências que estão transformando os ambientes das residências mais sofisticadas.",
  },
  {
    image: blog3,
    category: "Lifestyle",
    title: "Guia dos melhores bairros para viver no Rio de Janeiro",
    date: "02 Fev 2026",
    excerpt: "Uma curadoria dos endereços que oferecem o melhor equilíbrio entre natureza, cultura e exclusividade.",
  },
];

const BlogPreview = () => (
  <section id="blog" className="py-32 lg:py-44 px-6 lg:px-12 bg-[#FDFDFD]">
    <div className="max-w-7xl mx-auto">
      <SectionHeader
        title="Insights & Tendências"
        subtitle="Artigos sobre o mercado de luxo, design e lifestyle carioca"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
        {articles.map((article, i) => (
          <motion.article
            key={i}
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="relative overflow-hidden rounded-[4px] aspect-[3/2] mb-6">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-all duration-500 rounded-[4px]" />
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-primary">
                {article.category}
              </span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="text-[10px] text-muted-foreground font-sans tracking-wide">{article.date}</span>
            </div>
            <h3 className="font-display text-base font-medium text-foreground mb-3 group-hover:text-primary transition-colors duration-300 tracking-[-0.01em]">
              {article.title}
            </h3>
            <p className="font-sans text-sm text-muted-foreground leading-[1.8] font-light">
              {article.excerpt}
            </p>
          </motion.article>
        ))}
      </div>
      <div className="text-center mt-16">
        <a
          href="#"
          className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-primary hover:text-gold-light transition-colors border-b border-primary/30 hover:border-primary pb-1"
        >
          Ver Todos os Artigos
        </a>
      </div>
    </div>
  </section>
);

export default BlogPreview;
