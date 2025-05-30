
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const EMISection = () => {
  const backgroundImages = [
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="py-16 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white relative overflow-hidden">
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-30' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${image}')` }}
        />
      ))}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl animate-fade-in">
          <p className="text-yellow-200 font-medium mb-2">BUY NOW. PAY LATER. UPGRADE WITHOUT WORRY</p>
          <h2 className="text-4xl font-bold mb-6">Easy EMI Options Available</h2>
          <p className="text-lg mb-8 leading-relaxed">
            We understand quality upgrades can be an investment. That's why KESARWANI SANITARY WARE offers convenient 
            EMI payment plans on selected products and appliances. Enjoy flexibility, ease, and affordability — so you 
            don't have to wait to build your dream space.
          </p>
          <Button className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-full font-medium transform hover:scale-105 transition-all duration-300">
            Apply for EMI
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EMISection;
