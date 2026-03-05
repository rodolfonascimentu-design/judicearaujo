import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionHeader = ({ title, subtitle, light }: SectionHeaderProps) => (
  <motion.div
    className="text-center mb-16"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7 }}
  >
    <h2
      className={`font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight ${
        light ? "text-cream" : "text-foreground"
      }`}
    >
      {title}
    </h2>
    <div className="w-16 h-px bg-gold mx-auto mt-6 mb-4" />
    {subtitle && (
      <p
        className={`font-sans text-base md:text-lg max-w-2xl mx-auto ${
          light ? "text-cream/70" : "text-muted-foreground"
        }`}
      >
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeader;
