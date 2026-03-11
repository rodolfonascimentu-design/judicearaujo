import { motion } from "framer-motion";
import { HardHat, Hammer, PaintBucket, CheckCircle2 } from "lucide-react";
import { PropertyDetailData } from "@/data/propertyDetail";

interface Props {
  property: PropertyDetailData;
}

const stages = [
  { label: "Não iniciada", icon: HardHat },
  { label: "Estrutura", icon: Hammer },
  { label: "Acabamento", icon: PaintBucket },
  { label: "Pronto", icon: CheckCircle2 },
];

const PropertyConstructionStatus = ({ property }: Props) => {
  if (property.status === "ready") return null;

  const currentStage = property.constructionStage;

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
            Progresso
          </p>
          <h2 className="font-display text-2xl md:text-4xl text-foreground">
            Status da Obra
          </h2>
          <div className="w-10 h-px bg-primary mx-auto mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Progress line */}
          <div className="relative mb-12">
            <div className="absolute top-6 left-0 right-0 h-px bg-border" />
            <motion.div
              className="absolute top-6 left-0 h-px bg-primary origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              style={{ width: `${(currentStage / (stages.length - 1)) * 100}%` }}
            />

            {/* Stage nodes */}
            <div className="relative flex justify-between">
              {stages.map((stage, i) => {
                const Icon = stage.icon;
                const isCompleted = i < currentStage;
                const isCurrent = i === currentStage;
                const isFuture = i > currentStage;

                return (
                  <motion.div
                    key={stage.label}
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                        isCurrent
                          ? "bg-primary text-primary-foreground shadow-lg"
                          : isCompleted
                          ? "bg-primary/20 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`mt-3 font-sans text-[10px] md:text-xs tracking-wide max-w-[80px] ${
                        isCurrent
                          ? "text-foreground font-medium"
                          : isCompleted
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {stage.label}
                    </span>
                    {isCurrent && (
                      <motion.div
                        className="mt-2 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[9px] font-sans font-medium tracking-wider uppercase"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                      >
                        Atual
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertyConstructionStatus;
