import { motion } from "framer-motion";
import { PropertyDetailData } from "@/data/propertyDetail";

interface Props {
  property: PropertyDetailData;
}

const PropertyTimeline = ({ property }: Props) => {
  if (property.status === "ready") return null;

  return (
    <section className="py-20 md:py-28 px-6 md:px-16 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3">
            Status da Obra
          </p>
          <h2 className="font-display text-2xl md:text-4xl text-foreground">
            Acompanhe o progresso
          </h2>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Progress bar */}
          <div className="relative h-1 bg-border rounded-full mb-10">
            <motion.div
              className="absolute h-1 bg-primary rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${((property.constructionStage + 1) / property.constructionStages.length) * 100}%` }}
              viewport={{ once: false }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            />
          </div>

          {/* Stages */}
          <div className="flex justify-between">
            {property.constructionStages.map((stage, i) => (
              <div key={stage} className="flex flex-col items-center text-center flex-1">
                <div
                  className={`w-3 h-3 rounded-full mb-3 transition-colors ${
                    i <= property.constructionStage ? "bg-primary" : "bg-border"
                  }`}
                />
                <span
                  className={`font-sans text-[10px] md:text-xs tracking-wide ${
                    i <= property.constructionStage ? "text-foreground font-medium" : "text-muted-foreground"
                  }`}
                >
                  {stage}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertyTimeline;
