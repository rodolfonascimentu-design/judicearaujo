import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
      // Scroll past hero to search area
      setTimeout(() => {
        window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'auto' });
      }, 100);
      // Clean up URL
      window.history.replaceState({}, '', '/');
    }
  }, [location.search]);

  return (
  <div className="min-h-screen overflow-x-hidden">
    <Navbar />
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
    <Footer />
  </div>
);

export default Index;
