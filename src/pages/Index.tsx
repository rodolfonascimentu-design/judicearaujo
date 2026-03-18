import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExclusiveGallery from "@/components/ExclusiveGallery";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import InstitutionalCTA from "@/components/InstitutionalCTA";
import ForbesPartnership from "@/components/ForbesPartnership";
import BlogPreview from "@/components/BlogPreview";
import Testimonials from "@/components/Testimonials";
import HighEndCarousel from "@/components/HighEndCarousel";
import PropertyManagement from "@/components/PropertyManagement";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

const Index = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Judice & Araujo — Imóveis de Luxo no Rio de Janeiro";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Imóveis de luxo exclusivos nos endereços mais prestigiados do Rio de Janeiro. Leblon, Ipanema, Lagoa, Gávea e Jardim Botânico. Membro exclusivo Forbes Global Properties.");
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonical) canonical.href = "https://www.judicearaujo.com.br";
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <div className="bg-background relative z-10">
          <ExclusiveGallery />
          <PropertyManagement />
          <FeaturedCarousel />
          <InstitutionalCTA />
          <Testimonials />
          <HighEndCarousel />
          <ForbesPartnership />
          <BlogPreview />
          <Newsletter />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
