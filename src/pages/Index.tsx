import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesGallery from "@/components/ServicesGallery";
import ServicesGrid from "@/components/ServicesGrid";
import Reviews from "@/components/Reviews";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <Header />
      <Hero />
      <ServicesGallery />
      <ServicesGrid />
      <Reviews />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
