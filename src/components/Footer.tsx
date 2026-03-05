import { Instagram, Phone, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-charcoal text-cream">
    {/* Gold line */}
    <div className="h-px bg-gold/30" />

    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
      {/* Logo */}
      <div className="text-center mb-14">
        <h2 className="font-serif text-2xl tracking-[0.15em] text-cream">
          JUDICE & ARAUJO
        </h2>
        <p className="font-sans text-sm text-cream/50 mt-2">
          Imóveis de Luxo · Rio de Janeiro
        </p>
      </div>

      {/* Columns */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
        {/* Navigation */}
        <div>
          <h4 className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-gold mb-6">
            Navegação
          </h4>
          <ul className="space-y-3">
            {["Imóveis", "Comprar", "Alugar", "Sobre", "Blog", "Contato"].map((link) => (
              <li key={link}>
                <a href="#" className="font-sans text-sm text-cream/60 hover:text-gold transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Neighborhoods */}
        <div>
          <h4 className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-gold mb-6">
            Bairros
          </h4>
          <ul className="space-y-3">
            {["Leblon", "Ipanema", "Lagoa", "Gávea", "Jardim Botânico", "São Conrado"].map((n) => (
              <li key={n}>
                <a href="#" className="font-sans text-sm text-cream/60 hover:text-gold transition-colors">
                  {n}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-gold mb-6">
            Contato
          </h4>
          <div className="space-y-3 font-sans text-sm text-cream/60">
            <p>Rua Dias Ferreira, 417</p>
            <p>Leblon, Rio de Janeiro</p>
            <p>CEP 22431-050</p>
            <p className="pt-2">(21) 2512-9900</p>
            <p>contato@judicearaujo.com.br</p>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-gold mb-6">
            Redes Sociais
          </h4>
          <div className="flex gap-4">
            <a href="#" className="text-cream/60 hover:text-gold transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-cream/60 hover:text-gold transition-colors" aria-label="WhatsApp">
              <Phone className="w-5 h-5" />
            </a>
            <a href="#" className="text-cream/60 hover:text-gold transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom */}
    <div className="border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-sans text-xs text-cream/40">
          © 2026 Judice & Araujo. Todos os direitos reservados.
        </p>
        <div className="flex gap-6">
          <a href="#" className="font-sans text-xs text-cream/40 hover:text-cream/60 transition-colors">
            Política de Privacidade
          </a>
          <a href="#" className="font-sans text-xs text-cream/40 hover:text-cream/60 transition-colors">
            Termos de Uso
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
