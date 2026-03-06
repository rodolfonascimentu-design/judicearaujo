import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Newsletter = () => {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", { name, surname, email });
    setName(""); setSurname(""); setEmail("");
  };

  return (
    <section className="bg-primary py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 0.6 }} className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div className="lg:max-w-sm">
            <h3 className="font-display text-xl lg:text-2xl text-primary-foreground tracking-tight">{t("newsletter.title")}</h3>
            <p className="font-sans text-sm text-primary-foreground/60 font-light mt-2 leading-relaxed">{t("newsletter.desc")}</p>
          </div>
          <form onSubmit={handleSubmit} className="flex-1 lg:max-w-2xl">
            <div className="flex flex-col sm:flex-row gap-3">
              <input type="text" placeholder={t("newsletter.name")} value={name} onChange={(e) => setName(e.target.value)} required maxLength={100} className="flex-1 bg-primary-foreground/10 border border-primary-foreground/20 rounded-[4px] px-4 py-3 text-sm font-sans font-light text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/50 transition-colors" />
              <input type="text" placeholder={t("newsletter.surname")} value={surname} onChange={(e) => setSurname(e.target.value)} required maxLength={100} className="flex-1 bg-primary-foreground/10 border border-primary-foreground/20 rounded-[4px] px-4 py-3 text-sm font-sans font-light text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/50 transition-colors" />
              <input type="email" placeholder={t("newsletter.email")} value={email} onChange={(e) => setEmail(e.target.value)} required maxLength={255} className="flex-1 bg-primary-foreground/10 border border-primary-foreground/20 rounded-[4px] px-4 py-3 text-sm font-sans font-light text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/50 transition-colors" />
              <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="bg-primary-foreground text-primary rounded-[4px] px-6 py-3 text-sm font-sans font-medium tracking-[0.1em] uppercase flex items-center justify-center gap-2 hover:bg-primary-foreground/90 transition-colors whitespace-nowrap">
                {t("newsletter.send")}
                <Send className="w-3.5 h-3.5" />
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
