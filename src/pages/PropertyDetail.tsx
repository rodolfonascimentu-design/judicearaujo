import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import { mockProperty } from "@/data/propertyDetail";
import { useLanguage } from "@/i18n/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyHero from "@/components/property-detail/PropertyHero";
import PropertyDescription from "@/components/property-detail/PropertyDescription";
import PropertyGallery from "@/components/property-detail/PropertyGallery";
import PropertyFeatures from "@/components/property-detail/PropertyFeatures";
import PropertyLocation from "@/components/property-detail/PropertyLocation";
import PropertyNeighborhood from "@/components/property-detail/PropertyNeighborhood";
import PropertyConstructionStatus from "@/components/property-detail/PropertyConstructionStatus";
import PropertyTypologies from "@/components/property-detail/PropertyTypologies";
import PropertyVideo from "@/components/property-detail/PropertyVideo";
import PropertyContact from "@/components/property-detail/PropertyContact";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";
import property7 from "@/assets/property-7.jpg";
import property8 from "@/assets/property-8.jpg";
import exclusive1 from "@/assets/exclusive-1.jpg";
import exclusive2 from "@/assets/exclusive-2.jpg";

const regularImages = [property1, property2, property3, property4, property5, property6, property7, property8, exclusive1, exclusive2];

const PropertyDetail = () => {
  const { id } = useParams();
  
  const [searchParams] = useSearchParams();
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const isFromLaunches = searchParams.get("from") === "launches";

  const heroRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [showFab, setShowFab] = useState(false);

  const property = useMemo(() => {
    if (isFromLaunches) return mockProperty;
    return { ...mockProperty, images: regularImages, status: "ready" as const };
  }, [isFromLaunches]);

  const isLaunch = isFromLaunches && property.status === "launch";

  // Dynamic H1 text
  const h1Text = useMemo(() => {
    if (isLaunch) {
      return `${property.name} — ${property.neighborhood}, ${property.city}/${property.state}`;
    }
    const quartos = property.suites;
    return `${property.type} à ${property.transaction.toLowerCase()} com ${quartos} quartos, ${property.area}m² — ${property.neighborhood}, ${property.city}/${property.state}`;
  }, [property, isLaunch]);

  // SEO title
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${property.type} ${property.neighborhood} ${property.city} | Judice & Araujo`;
  }, [id, property.type, property.neighborhood, property.city]);

  // Show FAB only when scrolled past hero AND contact section is not visible
  useEffect(() => {
    if (!isMobile) { setShowFab(false); return; }

    let heroVisible = true;
    let contactVisible = false;

    const heroObs = new IntersectionObserver(
      ([entry]) => { heroVisible = entry.isIntersecting; update(); },
      { threshold: 0 }
    );
    const contactObs = new IntersectionObserver(
      ([entry]) => { contactVisible = entry.isIntersecting; update(); },
      { threshold: 0 }
    );

    function update() { setShowFab(!heroVisible && !contactVisible); }

    if (heroRef.current) heroObs.observe(heroRef.current);
    if (contactRef.current) contactObs.observe(contactRef.current);

    return () => { heroObs.disconnect(); contactObs.disconnect(); };
  }, [isMobile]);

  return (
    <div className="min-h-screen bg-background property-detail-page overflow-x-hidden">
      <Navbar />

      <main>
        <div ref={heroRef}>
          <PropertyHero property={property} isFromLaunches={isFromLaunches} />
        </div>

        {/* Breadcrumb — below gallery, above description */}
        {!isLaunch && (
          <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-6 [&_ol]:pl-0">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="text-muted-foreground hover:text-foreground text-xs font-sans">
                      Início
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-muted-foreground/50 text-xs">&gt;</BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/imoveis" className="text-muted-foreground hover:text-foreground text-xs font-sans">
                      {property.transaction}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-muted-foreground/50 text-xs">&gt;</BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/imoveis" className="text-muted-foreground hover:text-foreground text-xs font-sans">
                      {property.neighborhood}, {property.city} - {property.state}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-muted-foreground/50 text-xs">&gt;</BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-foreground text-xs font-sans font-medium">
                    {property.type}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        )}

        <PropertyDescription property={property} isLaunch={isLaunch} h1Text={h1Text} />
        <PropertyGallery property={property} isFromLaunches={isFromLaunches} />
        <PropertyFeatures property={property} />
        {isLaunch && (
          <>
            <PropertyConstructionStatus property={property} />
            <PropertyTypologies property={property} />
            <PropertyVideo property={property} />
          </>
        )}
        <PropertyLocation property={property} />
        <PropertyNeighborhood property={property} />
        <div ref={contactRef}>
          <PropertyContact />
        </div>
      </main>

      {/* Fixed mobile WhatsApp FAB */}
      <AnimatePresence>
        {showFab && (
          <motion.a
            href={`https://wa.me/${property.agent.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-2.5 bg-primary text-primary-foreground py-4 text-xs font-sans font-medium tracking-[0.12em] uppercase shadow-[0_-4px_20px_-4px_hsl(var(--foreground)/0.15)]"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <MessageCircle className="w-4 h-4" />
            Fale com a gente
          </motion.a>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
