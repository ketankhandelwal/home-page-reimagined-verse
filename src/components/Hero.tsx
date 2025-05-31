import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Star } from "lucide-react";

const Hero = () => {
  const backgroundImages = [
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-r from-black/60 to-black/40 flex items-center overflow-hidden">
      {/* Background Images with Fade Effect */}
      {backgroundImages.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
        />
      ))}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-yellow-200/20 to-orange-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-blue-200/20 to-purple-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-medium">Pratapgarh's Premium Sanitary Ware</span>
            </div>
            
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Transform Your Space with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Premium Quality
              </span>
            </h1>
            
            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
              Discover our exclusive collection of trendy tiles, durable faucets, elegant bathroom accessories & smart kitchen slabs. Elevate your home with style and quality.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-6 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Your Free Quote
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline"
                className="border-2 border-white/20 hover:border-white/40 text-white px-8 py-6 text-lg rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                Explore Collections
              </Button>
            </div>
          </motion.div>
          
          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { number: "500+", label: "Products Available" },
              { number: "15+", label: "Years Experience" },
              { number: "1000+", label: "Happy Customers" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
