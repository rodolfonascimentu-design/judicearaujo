import { motion } from "framer-motion";
import { HardHat, Hammer, PaintBucket, CheckCircle2, Check } from "lucide-react";
import { PropertyDetailData } from "@/data/propertyDetail";

interface Props {
  property: PropertyDetailData;
}

const stages = [
  { label: "Não iniciada", icon: HardHat, description: "Projeto aprovado" },
  { label: "Estrutura", icon: Hammer, description: "Fundação e estrutura" },
  { label: "Acabamento", icon: PaintBucket, description: "Revestimentos e instalações" },
  { label: "Pronto", icon: CheckCircle2, description: "Entrega das chaves" },
];

const PropertyConstructionStatus = ({ property }: Props) => {
  if (property.status === "ready") return null;

  const currentStage = property.constructionStage;

  return (
    <section className="py-20 md:py-28 px-6 md:px-16 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
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
          className="relative"
        >
          {/* Connecting line — desktop */}
          <div className="hidden md:block absolute top-10 left-[calc(12.5%+40px)] right-[calc(12.5%+40px)] h-[2px] bg-border rounded-full" />
          <motion.div
            className="hidden md:block absolute top-10 left-[calc(12.5%+40px)] h-[2px] bg-primary rounded-full origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
            style={{ width: `${(currentStage / (stages.length - 1)) * 75}%` }}
          />

          {/* Stages */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            {stages.map((stage, i) => {
              const Icon = stage.icon;
              const isCompleted = i < currentStage;
              const isCurrent = i === currentStage;

              return (
                <motion.div
                  key={stage.label}
                  className="flex flex-col items-center text-center relative"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                >
                  {/* Icon circle */}
                  <div
                    className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isCurrent
                        ? "bg-primary text-primary-foreground shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)]"
                        : isCompleted
                        ? "bg-primary/15 text-primary border-2 border-primary/30"
                        : "bg-muted text-muted-foreground border-2 border-border"
                    }`}
                  >
                    {isCompleted ? (
                      <Check className="w-6 h-6" strokeWidth={2.5} />
                    ) : (
                      <Icon className="w-6 h-6" />
                    )}
                    {isCurrent && (
                      <motion.div
                        className="absolute -inset-1 rounded-full border-2 border-primary/30"
                        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    )}
                  </div>

                  {/* Label */}
                  <span
                    className={`mt-4 font-sans text-xs md:text-sm tracking-wide font-medium ${
                      isCurrent || isCompleted ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {stage.label}
                  </span>

                  {/* Description */}
                  <span className="mt-1 font-sans text-[10px] md:text-[11px] text-muted-foreground/70 max-w-[120px]">
                    {stage.description}
                  </span>

                  {/* Current badge */}
                  {isCurrent && (
                    <motion.span
                      className="mt-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[9px] font-sans font-semibold tracking-wider uppercase"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      Fase atual
                    </motion.span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertyConstructionStatus;
