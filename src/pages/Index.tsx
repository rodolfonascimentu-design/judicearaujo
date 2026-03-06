import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExclusiveGallery from "@/components/ExclusiveGallery";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import InstitutionalCTA from "@/components/InstitutionalCTA";
import ForbesPartnership from "@/components/ForbesPartnership";
import BlogPreview from "@/components/BlogPreview";
import Testimonials from "@/components/Testimonials";
import FarmsGallery from "@/components/FarmsGallery";
import PropertyManagement from "@/components/PropertyManagement";
import OfficeLocations from "@/components/OfficeLocations";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("search") === "1") {
      setTimeout(() => {
        window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'auto' });
      }, 100);
      window.history.replaceState({}, '', '/');
    }
  }, [location.search]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Helmet>
        <title>Judice &amp; Araujo — Imóveis de Luxo no Rio de Janeiro</title>
        <meta name="description" content="Imóveis de luxo exclusivos nos endereços mais prestigiados do Rio de Janeiro. Leblon, Ipanema, Lagoa, Gávea e Jardim Botânico. Membro exclusivo Forbes Global Properties." />
        <link rel="canonical" href="https://www.judicearaujo.com.br" />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <ExclusiveGallery />
        <InstitutionalCTA />
        <FeaturedCarousel />
        <ForbesPartnership />
        <Testimonials />
        <FarmsGallery />
        <PropertyManagement />
        <BlogPreview />
        <OfficeLocations />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
