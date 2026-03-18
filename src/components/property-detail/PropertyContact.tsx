import { useState } from "react";
import { motion } from "framer-motion";
import { Send, ArrowRight } from "lucide-react";

const PropertyContact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const fields = [
    { key: "name", type: "text", label: "Nome completo", required: true },
    { key: "email", type: "email", label: "Seu melhor e-mail", required: true },
    { key: "phone", type: "tel", label: "Telefone com DDD", required: false },
  ] as const;

  return (
    <section id="property-contact" className="py-24 md:py-32 px-6 md:px-16 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
          {/* Left — editorial intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32 self-start"
          >
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-4">
              Contato
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6 leading-[1.15]">
              Vamos conversar sobre este imóvel
            </h2>
            <p className="font-sans text-sm text-muted-foreground leading-[1.8] mb-8">
              Preencha o formulário e um de nossos especialistas entrará em contato para uma consultoria personalizada e exclusiva.
            </p>
            <div className="hidden lg:block">
              <div className="w-16 h-px bg-primary/30" />
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-background rounded-lg p-8 md:p-10 shadow-[0_8px_40px_-12px_hsl(var(--foreground)/0.06)] border border-border/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              {fields.map((field) => (
                <div key={field.key} className="relative">
                  <label
                    className={`absolute left-0 transition-all duration-300 font-sans pointer-events-none ${
                      focused === field.key || form[field.key]
                        ? "text-[10px] tracking-[0.15em] uppercase text-primary -top-1"
                        : "text-sm text-muted-foreground top-3"
                    }`}
                  >
                    {field.label}
                    {field.required && <span className="text-primary ml-0.5">*</span>}
                  </label>
                  <input
                    type={field.type}
                    required={field.required}
                    value={form[field.key]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    onFocus={() => setFocused(field.key)}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-transparent border-b-2 border-border px-0 pt-5 pb-2 font-sans text-sm text-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                  />
                </div>
              ))}

              {/* Message */}
              <div className="relative">
                <label
                  className={`absolute left-0 transition-all duration-300 font-sans pointer-events-none ${
                    focused === "message" || form.message
                      ? "text-[10px] tracking-[0.15em] uppercase text-primary -top-1"
                      : "text-sm text-muted-foreground top-3"
                  }`}
                >
                  Mensagem
                </label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-transparent border-b-2 border-border px-0 pt-5 pb-2 font-sans text-sm text-foreground focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                />
              </div>
            </div>

            <p className="font-sans text-[10px] text-muted-foreground leading-relaxed mt-6 mb-6">
              Ao informar meus dados concordo com a{" "}
              <a href="#" className="underline hover:text-primary transition-colors">Política de Privacidade</a>{" "}
              e{" "}
              <a href="#" className="underline hover:text-primary transition-colors">Termos de Uso</a>.
            </p>

            <motion.button
              type="submit"
              className="group inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-xs font-sans font-medium tracking-[0.12em] uppercase hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_4px_20px_-4px_hsl(var(--primary)/0.4)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-4 h-4" />
              Enviar Mensagem
              <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default PropertyContact;
