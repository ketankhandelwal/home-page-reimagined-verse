import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const Gallery = () => {
  const heroImages = [
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
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
              <span className="text-yellow-300 font-semibold text-sm uppercase tracking-wider">REAL PRODUCTS. REAL PROJECTS. REAL TRANSFORMATIONS.</span>
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent leading-tight">
              Our Work & Showroom Gallery
            </h1>
            <div className="mt-8 w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Gallery Content */}
      <div className="container mx-auto px-4 py-20 flex-grow relative">
        {/* Background decorations */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tl from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-blob" style={{animationDelay: '2s'}}></div>
        
        <div className="text-center mb-16 animate-fade-in relative z-10">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full mb-6">
            <p className="text-yellow-700 font-semibold text-sm uppercase tracking-wider">REAL PRODUCTS. REAL PROJECTS. REAL TRANSFORMATIONS.</p>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-4">Gallery of Inspirations</h2>
        </div>

        {/* Tiles Collection */}
        <div className="mb-20 animate-fade-in relative z-10" style={{animationDelay: '0.2s'}}>
          <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-12 text-center">Tiles Collection</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Laminated Tiles' },
              { image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Flush Tiles' },
              { image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da2db18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Panel Tiles' }
            ].map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:-translate-y-4 bg-white" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="aspect-[4/3] relative overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: `url('${item.image}')`}} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 text-white transform group-hover:translate-y-0 translate-y-2 transition-transform duration-500">
                    <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                    <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </div>
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Sanitary Showcase */}
        <div className="mb-20 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Sanitary Showcase</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="aspect-[4/3] bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`}}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-xl font-bold">Marine Sanitary</h4>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl" style={{animationDelay: '0.1s'}}>
              <div className="aspect-[4/3] bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1504296924849-b065c827e6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`}}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-xl font-bold">Commercial Sanitary</h4>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl" style={{animationDelay: '0.2s'}}>
              <div className="aspect-[4/3] bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`}}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-xl font-bold">Fire Retardant Sanitary</h4>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Kitchen Solutions Section */}
        <div className="mb-20 animate-fade-in relative z-10" style={{animationDelay: '0.2s'}}>
          <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-12 text-center">Tiles Collection</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Laminated Tiles' },
              { image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Flush Tiles' },
              { image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da2db18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Panel Tiles' }
            ].map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:-translate-y-4 bg-white" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="aspect-[4/3] relative overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: `url('${item.image}')`}} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 text-white transform group-hover:translate-y-0 translate-y-2 transition-transform duration-500">
                    <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                    <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </div>
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Sanitary Showcase Section */}
        <div className="mb-20 animate-fade-in relative z-10" style={{animationDelay: '0.2s'}}>
          <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-12 text-center">Tiles Collection</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Laminated Tiles' },
              { image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Flush Tiles' },
              { image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da2db18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Panel Tiles' }
            ].map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:-translate-y-4 bg-white" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="aspect-[4/3] relative overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: `url('${item.image}')`}} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 text-white transform group-hover:translate-y-0 translate-y-2 transition-transform duration-500">
                    <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                    <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </div>
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Kitchen Solutions Section */}

        <div className="mb-20 animate-fade-in relative z-10" style={{animationDelay: '0.2s'}}>
          <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-12 text-center">Tiles Collection</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Laminated Tiles' },
              { image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Flush Tiles' },
              { image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da2db18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Panel Tiles' }
            ].map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:-translate-y-4 bg-white" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="aspect-[4/3] relative overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: `url('${item.image}')`}} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 text-white transform group-hover:translate-y-0 translate-y-2 transition-transform duration-500">
                    <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                    <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </div>
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Categories Section */}
        <div className="mb-16 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="text-center mb-12">
            <p className="text-yellow-600 font-medium mb-2 uppercase tracking-wide">FROM FOUNDATIONS TO FINISHING TOUCHES</p>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Explore Our Product Categories</h2>
            <p className="text-gray-600 max-w-4xl mx-auto">
              At KESARWANI SANITARY WARE, we offer a wide range of quality products to meet all your 
              construction, interior, and kitchen needs. Whether you're building from scratch or upgrading 
              your space, you'll find the right materials and solutions in every category we offer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="aspect-[4/3] bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`}}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <h3 className="text-2xl font-bold mb-2">Kids' Bedroom Decor</h3>
                  <p className="text-sm text-center opacity-90">Creative and safe decor solutions for children's spaces</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl" style={{animationDelay: '0.1s'}}>
              <div className="aspect-[4/3] bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`}}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <h3 className="text-2xl font-bold mb-2">Home PVC Doors</h3>
                  <p className="text-sm text-center opacity-90">Quality hardware for modern interior solutions</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl" style={{animationDelay: '0.2s'}}>
              <div className="aspect-[4/3] bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`}}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <h3 className="text-2xl font-bold mb-2">Office Solutions</h3>
                  <p className="text-sm text-center opacity-90">Outfit your workspace with premium drawer channels, glass partitions, locks, and modular systems that enhance productivity and style.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Brand Partners */}
        <div className="text-center animate-fade-in relative z-10" style={{animationDelay: '0.8s'}}>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-12">Our Trusted Brand Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {['EBCO', 'KALPATARU', 'Greenlam', 'SHAHEEN', 'Greenply', 'GREENPANEL', 'Splice', 'Boss uPVC'].map((brand, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 w-32 h-20 flex items-center justify-center transform transition-all duration-500 hover:scale-110 hover:shadow-lg hover:-translate-y-2 border border-gray-100/50" style={{animationDelay: `${index * 0.1}s`}}>
                <span className="text-sm font-bold text-gray-700 group-hover:text-yellow-600 transition-colors duration-300">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
