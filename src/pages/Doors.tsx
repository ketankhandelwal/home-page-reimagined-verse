
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 flex flex-col">
      <Header />
      
      {/* Enhanced Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-tl from-blue-400/30 to-purple-500/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-white text-center animate-fade-in">
            <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
              <span className="text-yellow-300 font-semibold text-sm uppercase tracking-wider">Premium Quality</span>
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent leading-tight">
              Doors
            </h1>
            <p className="text-2xl text-gray-200 font-light">Premium quality doors for your home and office</p>
            <div className="mt-8 w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Products Grid */}
      <div className="container mx-auto px-4 py-20 flex-grow relative">
        {/* Background decoration */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
        
        <div className="text-center mb-16 animate-fade-in relative z-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-4">
            Our Door Collection
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our premium range of doors designed to enhance your space with style and functionality
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:-translate-y-4 animate-fade-in border border-gray-100/50" style={{animationDelay: '0.1s'}}>
            <div className="relative overflow-hidden">
              <div className="h-56 bg-cover bg-center transition-all duration-700 group-hover:scale-110" style={{backgroundImage: `url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')`}}>
                <div className="h-full bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-500 flex items-end">
                  <span className="text-white font-bold text-xl p-6 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-500">Laminated Doors</span>
                </div>
              </div>
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>
            <div className="p-6 bg-gradient-to-br from-white to-gray-50/50">
              <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">Laminated Doors</h3>
              <p className="text-gray-600 leading-relaxed">High-quality laminated doors with elegant finish</p>
              <div className="mt-4 w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </div>

          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:-translate-y-4 animate-fade-in border border-gray-100/50" style={{animationDelay: '0.2s'}}>
            <div className="relative overflow-hidden">
              <div className="h-56 bg-cover bg-center transition-all duration-700 group-hover:scale-110" style={{backgroundImage: `url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')`}}>
                <div className="h-full bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-500 flex items-end">
                  <span className="text-white font-bold text-xl p-6 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-500">Flush Doors</span>
                </div>
              </div>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>
            <div className="p-6 bg-gradient-to-br from-white to-gray-50/50">
              <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">Flush Doors</h3>
              <p className="text-gray-600 leading-relaxed">Fire resistant and water proof flush doors</p>
              <div className="mt-4 w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </div>

          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:-translate-y-4 animate-fade-in border border-gray-100/50" style={{animationDelay: '0.3s'}}>
            <div className="relative overflow-hidden">
              <div className="h-56 bg-cover bg-center transition-all duration-700 group-hover:scale-110" style={{backgroundImage: `url('https://images.unsplash.com/photo-1502005229762-cf1b2da2db18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')`}}>
                <div className="h-full bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-500 flex items-end">
                  <span className="text-white font-bold text-xl p-6 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-500">Panel Doors</span>
                </div>
              </div>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>
            <div className="p-6 bg-gradient-to-br from-white to-gray-50/50">
              <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">Panel Doors</h3>
              <p className="text-gray-600 leading-relaxed">Traditional panel doors with modern finish</p>
              <div className="mt-4 w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </div>

          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:-translate-y-4 animate-fade-in border border-gray-100/50" style={{animationDelay: '0.4s'}}>
            <div className="relative overflow-hidden">
              <div className="h-56 bg-cover bg-center transition-all duration-700 group-hover:scale-110" style={{backgroundImage: `url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')`}}>
                <div className="h-full bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-500 flex items-end">
                  <span className="text-white font-bold text-xl p-6 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-500">WPC Doors</span>
                </div>
              </div>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>
            <div className="p-6 bg-gradient-to-br from-white to-gray-50/50">
              <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">WPC Doors</h3>
              <p className="text-gray-600 leading-relaxed">Water resistant WPC doors for bathrooms</p>
              <div className="mt-4 w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Doors;
