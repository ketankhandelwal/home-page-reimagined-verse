
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-grow">
        <ContactSection />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
