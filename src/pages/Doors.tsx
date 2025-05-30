
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const Doors = () => {
  const heroImages = [
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1502005229762-cf1b2da2db18?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      {/* Hero Section with changing background */}
      <div className="relative h-96 bg-gradient-to-r from-yellow-600 to-yellow-700 overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-60' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">Doors</h1>
            <p className="text-xl">Premium quality doors for your home and office</p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-16 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fade-in" style={{animationDelay: '0.1s'}}>
            <div className="h-48 bg-cover bg-center transition-all duration-300 hover:scale-110" style={{backgroundImage: `url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')`}}>
              <div className="h-full bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <span className="text-white font-semibold text-lg p-4">Laminated Doors</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2 text-gray-800">Laminated Doors</h3>
              <p className="text-gray-600 text-sm">High-quality laminated doors with elegant finish</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="h-48 bg-cover bg-center transition-all duration-300 hover:scale-110" style={{backgroundImage: `url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')`}}>
              <div className="h-full bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <span className="text-white font-semibold text-lg p-4">Flush Doors</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2 text-gray-800">Flush Doors</h3>
              <p className="text-gray-600 text-sm">Fire resistant and water proof flush doors</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="h-48 bg-cover bg-center transition-all duration-300 hover:scale-110" style={{backgroundImage: `url('https://images.unsplash.com/photo-1502005229762-cf1b2da2db18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')`}}>
              <div className="h-full bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <span className="text-white font-semibold text-lg p-4">Panel Doors</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2 text-gray-800">Panel Doors</h3>
              <p className="text-gray-600 text-sm">Traditional panel doors with modern finish</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="h-48 bg-cover bg-center transition-all duration-300 hover:scale-110" style={{backgroundImage: `url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')`}}>
              <div className="h-full bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <span className="text-white font-semibold text-lg p-4">WPC Doors</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2 text-gray-800">WPC Doors</h3>
              <p className="text-gray-600 text-sm">Water resistant WPC doors for bathrooms</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Doors;
