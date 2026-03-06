import { motion } from "framer-motion";
import { PropertyDetailData } from "@/data/propertyDetail";

interface Props {
  property: PropertyDetailData;
}

const PropertyStory = ({ property }: Props) => {
  return (
    <div className="bg-background">
      {/* Section 1 — Headline + panoramic image */}
      <section className="py-24 md:py-32 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[1.15] max-w-3xl mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {property.storyHeadline}
          </motion.h2>
          <motion.div
            className="overflow-hidden rounded-[4px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.img
              src={property.storyImage}
              alt="Vista panorâmica"
              className="w-full h-[50vh] md:h-[70vh] object-cover"
              loading="lazy"
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </motion.div>
        </div>
      </section>

      {/* Section 2 — Editorial text */}
      <section className="py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex justify-end">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-6">
              Design & Materiais
            </p>
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-[1.8]">
              {property.storyText}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3 — Full-width highlight image */}
      <section className="py-16 md:py-24 px-6 md:px-16">
        <motion.div
          className="max-w-7xl mx-auto overflow-hidden rounded-[4px]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img
            src={property.storyHighlightImage}
            alt="Destaque arquitetônico"
            className="w-full h-[50vh] md:h-[75vh] object-cover"
            loading="lazy"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default PropertyStory;
