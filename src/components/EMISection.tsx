
import { Button } from "@/components/ui/button";

const EMISection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`,
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <p className="text-yellow-200 font-medium mb-2">BUY NOW. PAY LATER. UPGRADE WITHOUT WORRY</p>
          <h2 className="text-4xl font-bold mb-6">Easy EMI Options Available</h2>
          <p className="text-lg mb-8 leading-relaxed">
            We understand quality upgrades can be an investment. That's why Kesarwani Hardware offers convenient 
            EMI payment plans on selected products and appliances. Enjoy flexibility, ease, and affordability — so you 
            don't have to wait to build your dream space.
          </p>
          <Button className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-full font-medium">
            Apply for EMI
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EMISection;
