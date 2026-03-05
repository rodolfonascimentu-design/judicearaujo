import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionHeader = ({ title, subtitle, light }: SectionHeaderProps) => (
  <motion.div
    className="text-center mb-20"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
  >
    <h2
      className={`font-display text-2xl md:text-3xl lg:text-4xl font-normal tracking-[0.08em] uppercase ${
        light ? "text-cream" : "text-foreground"
      }`}
    >
      {title}
    </h2>
    <div className="w-12 h-px bg-primary mx-auto mt-8 mb-5" />
    {subtitle && (
      <p
        className={`font-sans text-sm md:text-base max-w-xl mx-auto font-light tracking-wide ${
          light ? "text-cream/60" : "text-muted-foreground"
        }`}
      >
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeader;
