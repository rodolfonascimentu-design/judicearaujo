import { Instagram, Phone, Linkedin } from "lucide-react";
import logoJA from "@/assets/logo-ja.png";

const Footer = () => (
  <footer className="bg-charcoal text-cream">
    <div className="h-px bg-cream/10" />

    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-24">
      {/* Logo */}
      <div className="text-center mb-16">
        <img
          src={logoJA}
          alt="Judice & Araujo"
          className="h-8 w-auto mx-auto brightness-0 invert mb-3"
        />
        <p className="font-sans text-[10px] text-cream/40 mt-3 tracking-[0.3em] uppercase font-light">
          Imóveis de Luxo · Rio de Janeiro
        </p>
      </div>

      {/* Columns */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-20">
        <div>
          <h4 className="font-sans text-[10px] font-medium tracking-[0.3em] uppercase text-cream/70 mb-8">
            Navegação
          </h4>
          <ul className="space-y-3.5">
            {["Imóveis", "Comprar", "Alugar", "Sobre", "Blog", "Contato"].map((link) => (
              <li key={link}>
                <a href="#" className="font-sans text-xs text-cream/50 hover:text-cream transition-colors font-light tracking-wide">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-[10px] font-medium tracking-[0.3em] uppercase text-cream/70 mb-8">
            Bairros
          </h4>
          <ul className="space-y-3.5">
            {["Leblon", "Ipanema", "Lagoa", "Gávea", "Jardim Botânico", "São Conrado"].map((n) => (
              <li key={n}>
                <a href="#" className="font-sans text-xs text-cream/50 hover:text-cream transition-colors font-light tracking-wide">
                  {n}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-[10px] font-medium tracking-[0.3em] uppercase text-cream/70 mb-8">
            Contato
          </h4>
          <div className="space-y-3.5 font-sans text-xs text-cream/50 font-light tracking-wide">
            <p>Rua Dias Ferreira, 417</p>
            <p>Leblon, Rio de Janeiro</p>
            <p>CEP 22431-050</p>
            <p className="pt-2">(21) 2512-9900</p>
            <p>contato@judicearaujo.com.br</p>
          </div>
        </div>

        <div>
          <h4 className="font-sans text-[10px] font-medium tracking-[0.3em] uppercase text-cream/70 mb-8">
            Redes Sociais
          </h4>
          <div className="flex gap-5">
            <a href="#" className="text-cream/40 hover:text-cream transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-cream/40 hover:text-cream transition-colors" aria-label="WhatsApp">
              <Phone className="w-4 h-4" />
            </a>
            <a href="#" className="text-cream/40 hover:text-cream transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-cream/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-sans text-[10px] text-cream/30 tracking-wide font-light">
          © 2026 Judice & Araujo. Todos os direitos reservados.
        </p>
        <div className="flex gap-8">
          <a href="#" className="font-sans text-[10px] text-cream/30 hover:text-cream/50 transition-colors tracking-wide font-light">
            Política de Privacidade
          </a>
          <a href="#" className="font-sans text-[10px] text-cream/30 hover:text-cream/50 transition-colors tracking-wide font-light">
            Termos de Uso
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
