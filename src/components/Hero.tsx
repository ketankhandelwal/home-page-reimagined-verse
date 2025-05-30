
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

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
    }, 3000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[500px] bg-gradient-to-r from-black/60 to-black/40 flex items-center overflow-hidden">
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${image}')` }}
        />
      ))}
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6 leading-tight animate-fade-in">
            Welcome to KESARWANI SANITARY WARE
          </h1>
          <p className="text-xl mb-8 text-yellow-200 animate-fade-in" style={{animationDelay: '0.3s'}}>
          Pratapgarh’s Go-To Place for Trendy Doors, Durable Hardware, Elegant Interiors & Smart Kitchen Solutions
          </p>
          <Button 
            onClick={scrollToContact}
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 text-lg rounded-full animate-fade-in transform hover:scale-105 transition-all duration-300" 
            style={{animationDelay: '0.6s'}}
          >
            GET A FREE QUOTE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
