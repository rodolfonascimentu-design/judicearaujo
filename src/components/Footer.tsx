import { Instagram, Phone, Linkedin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import logoJaGreen from "@/assets/logo-ja-green.png";
import logoForbesGreen from "@/assets/logo-forbes-green.png";

const neighborhoods = ["Leblon", "Ipanema", "Lagoa", "Gávea", "Jardim Botânico", "São Conrado"];

const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = [
    t("footer.properties"), t("footer.buy"), t("footer.rent"),
    t("footer.about"), t("footer.blog"), t("footer.contactLink"),
  ];

  return (
    <footer className="bg-white text-foreground">
      <div className="h-px bg-border/30" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-16">
          <div className="flex items-start gap-2">
            <img src={logoJaGreen} alt="Judice & Araujo" className="h-[18px] lg:h-[22px] w-auto" />
            <div className="w-px h-8 bg-primary/20" />
            <img src={logoForbesGreen} alt="Forbes Global Properties" className="h-[30px] lg:h-[35px] w-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
            <div>
              <h4 className="font-sans text-[10px] font-medium tracking-[0.3em] uppercase text-foreground/40 mb-8">{t("footer.navigation")}</h4>
              <ul className="space-y-3.5">
                {footerLinks.map((link) => (
                  <li key={link}><a href="#" className="group font-sans text-xs text-foreground/60 hover:text-primary transition-all duration-300 font-light tracking-wide inline-flex items-center gap-1"><span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">{link}</span></a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-sans text-[10px] font-medium tracking-[0.3em] uppercase text-foreground/40 mb-8">{t("footer.neighborhoods")}</h4>
              <ul className="space-y-3.5">
                {neighborhoods.map((n) => (
                  <li key={n}><a href="#" className="group font-sans text-xs text-foreground/60 hover:text-primary transition-all duration-300 font-light tracking-wide inline-flex items-center gap-1"><span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">{n}</span></a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-sans text-[10px] font-medium tracking-[0.3em] uppercase text-foreground/40 mb-8">{t("footer.contact")}</h4>
              <div className="space-y-3.5 font-sans text-xs text-foreground/60 font-light tracking-wide">
                <p className="hover:text-primary transition-colors duration-300 cursor-default">Rua Dias Ferreira, 417</p>
                <p className="hover:text-primary transition-colors duration-300 cursor-default">Leblon, Rio de Janeiro</p>
                <p className="hover:text-primary transition-colors duration-300 cursor-default">CEP 22431-050</p>
                <a href="tel:+552125129900" className="block pt-2 hover:text-primary transition-colors duration-300">(21) 2512-9900</a>
                <a href="mailto:contato@judicearaujo.com.br" className="block hover:text-primary transition-colors duration-300">contato@judicearaujo.com.br</a>
              </div>
            </div>
            <div>
              <h4 className="font-sans text-[10px] font-medium tracking-[0.3em] uppercase text-foreground/40 mb-8">{t("footer.social")}</h4>
              <div className="flex gap-5">
                <a href="#" className="text-foreground/30 hover:text-primary hover:-translate-y-0.5 transition-all duration-300" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
                <a href="#" className="text-foreground/30 hover:text-primary hover:-translate-y-0.5 transition-all duration-300" aria-label="WhatsApp"><Phone className="w-4 h-4" /></a>
                <a href="#" className="text-foreground/30 hover:text-primary hover:-translate-y-0.5 transition-all duration-300" aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[10px] text-foreground/25 tracking-wide font-light">{t("footer.rights")}</p>
          <div className="flex gap-8">
            <a href="#" className="font-sans text-[10px] text-foreground/25 hover:text-primary/60 transition-colors duration-300 tracking-wide font-light">{t("footer.privacy")}</a>
            <a href="#" className="font-sans text-[10px] text-foreground/25 hover:text-primary/60 transition-colors duration-300 tracking-wide font-light">{t("footer.terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
