
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import EMISection from "@/components/EMISection";
import BrandPartners from "@/components/BrandPartners";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 flex flex-col">
      <Header />
      <Hero />
      <ProductCategories />
      <About />
      <Benefits />
      <EMISection />
      <BrandPartners />
      <FAQ />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
