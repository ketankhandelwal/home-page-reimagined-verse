import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Star } from "lucide-react";

const Hero = () => {
  const backgroundImages = [
    '/home-page-reimagined-verse/files/images/int_1.jpg',
    '/home-page-reimagined-verse/files/images/int_2.jpg',
    '/home-page-reimagined-verse/files/images/hero_1.jpg',
    '/home-page-reimagined-verse/files/images/hero_2.jpg',
    '/home-page-reimagined-verse/files/images/hero_3.jpg',
    '/home-page-reimagined-verse/files/images/hero_4.jpg',
    '/home-page-reimagined-verse/files/images/hero_5.jpg'
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
    <section className="relative min-h-screen bg-gradient-to-r from-black/60 to-black/40 flex items-center overflow-hidden pt-32 md:pt-0">
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
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-yellow-200/20 to-orange-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-blue-200/20 to-purple-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
              <span className="text-yellow-300 font-semibold text-sm uppercase tracking-wider">Premium Quality</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent leading-tight">
              Transform Your Space with Premium Sanitary Ware
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Discover our extensive collection of high-quality sanitary ware, tiles, and bathroom accessories.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-6 rounded-full text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Contact Us
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white/20 text-white px-8 py-6 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View Catalog
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
