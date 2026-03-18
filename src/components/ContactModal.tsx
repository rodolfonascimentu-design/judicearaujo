import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, ArrowRight, X } from "lucide-react";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const ContactModal = ({ open, onClose }: ContactModalProps) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    setForm({ name: "", email: "", phone: "", message: "" });
    onClose();
  };

  const fields = [
    { key: "name", type: "text", label: "Nome completo", required: true },
    { key: "email", type: "email", label: "Seu melhor e-mail", required: true },
    { key: "phone", type: "tel", label: "Telefone com DDD", required: false },
  ] as const;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-[0_20px_60px_-15px_hsl(var(--foreground)/0.15)] border border-border/30"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-muted-foreground hover:text-foreground transition-colors z-10"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 md:p-10">
              {/* Header */}
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3">
                Contato
              </p>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-3 leading-[1.15]">
                Fale conosco
              </h2>
              <p className="font-sans text-sm text-muted-foreground leading-[1.8] mb-8">
                Preencha o formulário e um de nossos especialistas entrará em contato.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit}>
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
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
