import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExclusiveGallery from "@/components/ExclusiveGallery";
import FeaturedProperties from "@/components/FeaturedProperties";
import EditorialSection from "@/components/EditorialSection";
import LuxuryHighlights from "@/components/LuxuryHighlights";
import BlogPreview from "@/components/BlogPreview";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <ExclusiveGallery />
    <FeaturedProperties />
    <EditorialSection />
    <LuxuryHighlights />
    <BlogPreview />
    <Testimonials />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
