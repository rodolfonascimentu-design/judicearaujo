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
  <section id="blog" className="py-24 lg:py-32 px-6 lg:px-12 bg-cream">
    <div className="max-w-7xl mx-auto">
      <SectionHeader
        title="Insights & Tendências"
        subtitle="Artigos sobre o mercado de luxo, design e lifestyle carioca"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {articles.map((article, i) => (
          <motion.article
            key={i}
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="relative overflow-hidden aspect-[3/2] mb-5">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-gold">
                {article.category}
              </span>
              <span className="text-xs text-muted-foreground font-sans">{article.date}</span>
            </div>
            <h3 className="font-serif text-xl font-medium text-foreground mb-2 group-hover:text-gold transition-colors">
              {article.title}
            </h3>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              {article.excerpt}
            </p>
          </motion.article>
        ))}
      </div>
      <div className="text-center mt-14">
        <a
          href="#"
          className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-gold hover:text-gold-light transition-colors border-b border-gold/40 hover:border-gold pb-1"
        >
          Ver Todos os Artigos
        </a>
      </div>
    </div>
  </section>
);

export default BlogPreview;
