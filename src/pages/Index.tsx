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

const Index = () => (
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
