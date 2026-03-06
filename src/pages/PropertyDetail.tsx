import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MessageCircle, ArrowLeft } from "lucide-react";
import { mockProperty } from "@/data/propertyDetail";
import { useLanguage } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyHero from "@/components/property-detail/PropertyHero";
import PropertyDescription from "@/components/property-detail/PropertyDescription";
import PropertyGallery from "@/components/property-detail/PropertyGallery";
import PropertyFeatures from "@/components/property-detail/PropertyFeatures";
import PropertyLocation from "@/components/property-detail/PropertyLocation";
import PropertyNeighborhood from "@/components/property-detail/PropertyNeighborhood";
import PropertyNearby from "@/components/property-detail/PropertyNearby";
import PropertyContact from "@/components/property-detail/PropertyContact";
import PropertySimilar from "@/components/property-detail/PropertySimilar";

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = mockProperty;
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-screen bg-background property-detail-page overflow-x-hidden">
      <Helmet>
        <title>{`${property.name} — ${property.neighborhood} | Judice & Araujo`}</title>
        <meta name="description" content={`${property.name} em ${property.neighborhood}. ${property.area}m², ${property.suites} suítes. Judice & Araujo — Membro exclusivo Forbes Global Properties.`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateListing",
          "name": property.name,
          "description": property.description?.[0] || "",
          "url": `https://www.judicearaujo.com.br/imovel/${id}`,
          "image": property.images?.[0],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": property.neighborhood,
            "addressRegion": "RJ",
            "addressCountry": "BR"
          }
        })}</script>
      </Helmet>
      <Navbar />

      <div className="container mx-auto px-4 pt-4">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          aria-label={t("nav.back")}
        >
          <ArrowLeft className="w-4 h-4" />
          {t("nav.back")}
        </button>
      </div>

      <main>
        <PropertyHero property={property} />
        <PropertyDescription property={property} />
        <PropertyGallery property={property} />
        <PropertyFeatures property={property} />
        <PropertyLocation property={property} />
        <PropertyNeighborhood property={property} />
        <PropertyNearby property={property} />
        <PropertyContact />
        <PropertySimilar property={property} />
      </main>

      <Footer />

      <a
        href={`https://wa.me/${property.agent.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};

export default PropertyDetail;
