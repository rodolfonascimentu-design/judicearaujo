import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const PropertyContact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Mensagem enviada com sucesso!");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="py-20 md:py-28 px-6 md:px-16 bg-background">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3">
            Contato
          </p>
          <h2 className="font-display text-2xl md:text-4xl text-foreground">
            Solicite mais informações
          </h2>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <input
            type="text"
            placeholder="Nome"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-transparent border-b border-border px-0 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-transparent border-b border-border px-0 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <input
            type="tel"
            placeholder="Telefone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full bg-transparent border-b border-border px-0 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <textarea
            placeholder="Mensagem"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-transparent border-b border-border px-0 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
          />

          <p className="font-sans text-[10px] text-muted-foreground leading-relaxed">
            Ao informar meus dados concordo com a{" "}
            <a href="#" className="underline hover:text-primary transition-colors">Política de Privacidade</a>{" "}
            e{" "}
            <a href="#" className="underline hover:text-primary transition-colors">Termos de Uso</a>.
          </p>

          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full text-xs font-sans font-medium tracking-[0.1em] uppercase hover:bg-primary/90 transition-colors"
          >
            <Send className="w-4 h-4" />
            Enviar Mensagem
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default PropertyContact;
