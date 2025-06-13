import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesGallery from "@/components/ServicesGallery";
import ServicesGrid from "@/components/ServicesGrid";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ServicesGallery />
      <ServicesGrid />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
