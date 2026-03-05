import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExclusiveGallery from "@/components/ExclusiveGallery";
import LuxuryHighlights from "@/components/LuxuryHighlights";
import InstitutionalCTA from "@/components/InstitutionalCTA";
import ForbesPartnership from "@/components/ForbesPartnership";
import BlogPreview from "@/components/BlogPreview";
import Testimonials from "@/components/Testimonials";
import FarmsGallery from "@/components/FarmsGallery";
import OfficeLocations from "@/components/OfficeLocations";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <ExclusiveGallery />
    <InstitutionalCTA />
    <LuxuryHighlights />
    <ForbesPartnership />
    <Testimonials />
    <FarmsGallery />
    <BlogPreview />
    <OfficeLocations />
    <Newsletter />
    <Footer />
  </div>
);

export default Index;
