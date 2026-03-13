import { useEffect, useMemo } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
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
  const isFromLaunches = searchParams.get("from") === "launches";

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

  return (
    <div className="min-h-screen bg-background property-detail-page overflow-x-hidden">
      <Navbar />

      <main>
        <PropertyHero property={property} isFromLaunches={isFromLaunches} />

        {/* Breadcrumb — below gallery, above description */}
        {!isLaunch && (
          <div className="max-w-6xl mx-auto px-6 md:px-16 pt-8 pb-6">
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
        <PropertyContact />
      </main>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
