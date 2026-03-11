import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

import PropertyContact from "@/components/property-detail/PropertyContact";
import PropertySimilar from "@/components/property-detail/PropertySimilar";

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = mockProperty;
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${property.name} — ${property.neighborhood} | Judice & Araujo`;
  }, [id, property.name, property.neighborhood]);

  return (
    <div className="min-h-screen bg-background property-detail-page overflow-x-hidden">
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
        <PropertyContact />
        <PropertySimilar property={property} />
      </main>

      <Footer />

    </div>
  );
};

export default PropertyDetail;
