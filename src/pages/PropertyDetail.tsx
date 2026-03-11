import { useEffect, useMemo } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
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
import PropertyConstructionStatus from "@/components/property-detail/PropertyConstructionStatus";
import PropertyTypologies from "@/components/property-detail/PropertyTypologies";
import PropertyVideo from "@/components/property-detail/PropertyVideo";

import PropertyContact from "@/components/property-detail/PropertyContact";

import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";
import exclusive1 from "@/assets/exclusive-1.jpg";
import exclusive2 from "@/assets/exclusive-2.jpg";

const regularImages = [property1, property2, property3, property4, property5, property6, exclusive1, exclusive2];

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { t } = useLanguage();
  const isFromLaunches = searchParams.get("from") === "launches";

  const property = useMemo(() => {
    if (isFromLaunches) return mockProperty;
    return { ...mockProperty, images: regularImages };
  }, [isFromLaunches]);

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
        <PropertyHero property={property} isFromLaunches={isFromLaunches} />
        <PropertyDescription property={property} />
        <PropertyGallery property={property} isFromLaunches={isFromLaunches} />
        <PropertyFeatures property={property} />
        {isFromLaunches && property.status === "launch" && (
          <>
            <PropertyConstructionStatus property={property} />
            <PropertyTypologies property={property} />
            <PropertyVideo property={property} />
          </>
        )}
        <PropertyLocation property={property} />
        <PropertyNeighborhood property={property} />
        <PropertyContact />
      </main>

      <Footer />

    </div>
  );
};

export default PropertyDetail;
