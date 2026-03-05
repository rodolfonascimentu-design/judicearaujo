import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionHeader = ({ title, subtitle, light }: SectionHeaderProps) => (
  <motion.div
    className="text-center mb-20"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, margin: "-80px" }}
    transition={{ duration: 0.7 }}
  >
    <h2
      className={`font-display text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] ${
        light ? "text-cream" : "text-foreground"
      }`}
    >
      {title}
    </h2>
    <div className="w-10 h-px bg-primary mx-auto mt-7 mb-5" />
    {subtitle && (
      <p
        className={`font-sans text-sm md:text-base max-w-xl mx-auto font-light tracking-wide ${
          light ? "text-cream/50" : "text-muted-foreground"
        }`}
      >
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeader;
