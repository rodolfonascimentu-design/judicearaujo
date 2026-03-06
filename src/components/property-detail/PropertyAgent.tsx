import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { PropertyDetailData } from "@/data/propertyDetail";

interface Props {
  property: PropertyDetailData;
}

const PropertyAgent = ({ property }: Props) => {
  const { agent } = property;

  return (
    <section className="py-20 md:py-28 px-6 md:px-16 bg-[hsl(var(--muted))]">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3">
            Responsável
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-10">
            Fale com quem entende
          </h2>
        </motion.div>

        <motion.div
          className="bg-card border border-border rounded-[4px] p-8 md:p-10 inline-flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={agent.photo}
            alt={agent.name}
            className="w-20 h-20 rounded-full object-cover mb-5"
            loading="lazy"
          />
          <h3 className="font-display text-lg text-foreground mb-1">{agent.name}</h3>
          <p className="font-sans text-xs text-muted-foreground mb-1">{agent.creci}</p>
          <p className="font-sans text-xs text-muted-foreground mb-6">{agent.phone}</p>

          <a
            href={`https://wa.me/${agent.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full text-xs font-sans font-medium tracking-[0.1em] uppercase hover:bg-primary/90 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertyAgent;
