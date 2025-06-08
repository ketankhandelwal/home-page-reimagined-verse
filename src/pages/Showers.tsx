import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const Showers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedItem, setSelectedItem] = useState<{ images: string[], title: string } | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleModalPrevSlide = () => {
    if (selectedItem) {
      setCurrentSlideIndex((prev) => 
        prev === 0 ? selectedItem.images.length - 1 : prev - 1
      );
    }
  };

  const handleModalNextSlide = () => {
    if (selectedItem) {
      setCurrentSlideIndex((prev) => 
        prev === selectedItem.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedItem) {
      if (e.key === 'ArrowLeft') {
        handleModalPrevSlide();
      } else if (e.key === 'ArrowRight') {
        handleModalNextSlide();
      } else if (e.key === 'Escape') {
        setSelectedItem(null);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem]);

  const showerSets = [
    // First set of showers
    [
      {
        title: "Rain Panels",
        image: "src/files/images/showers/rainpanel/Screenshot 2025-06-02 at 13.12.17.png",
        description: "Luxurious rain panels for ultimate shower experience with wide coverage",
        "images": [
          "src/files/images/showers/rainpanel/Screenshot 2025-06-02 at 13.12.17.png",
          "src/files/images/showers/rainpanel/image.png",
          "src/files/images/showers/rainpanel/image copy.png",
          "src/files/images/showers/rainpanel/image copy 2.png"
        ]
      },
      {
        title: "Rain Heads",
        image: "src/files/images/showers/rainhead/Screenshot 2025-06-02 at 13.13.06.png",
        description: "Premium rain shower heads delivering gentle rainfall sensation",
        "images": [
          "src/files/images/showers/rainhead/Screenshot 2025-06-02 at 13.13.06.png",
          "src/files/images/showers/rainhead/image.png",
          "src/files/images/showers/rainhead/image copy.png",
          "src/files/images/showers/rainhead/image copy 2.png",
          "src/files/images/showers/rainhead/image copy 3.png"
          ,
          "src/files/images/showers/rainhead/image copy 4.png"
        ]
      },
      {
        title: "Shower Heads",
        image: "src/files/images/showers/showerheads/Screenshot 2025-06-02 at 13.13.25.png",
        description: "High-quality shower heads with adjustable spray patterns and water flow",
        "images": [
          "src/files/images/showers/showerheads/Screenshot 2025-06-02 at 13.13.25.png",
          "src/files/images/showers/showerheads/image.png",
          "src/files/images/showers/showerheads/image copy.png",
          "src/files/images/showers/showerheads/image copy 2.png",
          "src/files/images/showers/showerheads/image copy 3.png",
          "src/files/images/showers/showerheads/image copy 4.png"
        ]
      },
      {
        title: "Hand Showers",
        image: "src/files/images/showers/handshowers/Screenshot 2025-06-02 at 13.13.56.png",
        description: "Ergonomic handheld showers with flexible hose for maximum convenience",
        "images": [
          "src/files/images/showers/handshowers/Screenshot 2025-06-02 at 13.13.56.png",
          "src/files/images/showers/handshowers/image.png",
          "src/files/images/showers/handshowers/image copy.png",
          "src/files/images/showers/handshowers/image copy 2.png",
          "src/files/images/showers/handshowers/image copy 3.png",
        ]
      },
      {
        title: "Body Sprays",
        image: "src/files/images/showers/bodyspray/Screenshot 2025-06-02 at 13.14.53.png",
        description: "Therapeutic body spray jets for a complete spa-like shower experience",
        "images": [
          "src/files/images/showers/bodyspray/Screenshot 2025-06-02 at 13.14.53.png",
          "src/files/images/showers/bodyspray/image.png",
          "src/files/images/showers/bodyspray/image copy.png",
          "src/files/images/showers/bodyspray/image copy 2.png",
          "src/files/images/showers/bodyspray/image copy 3.png"
        ]
      },
      {
        title: "Steam Showers",
        image: "src/files/images/showers/steamShower/Screenshot 2025-06-02 at 13.15.29.png",
        description: "Complete steam shower systems for relaxation and wellness therapy",
        "images": [
          "src/files/images/showers/steamShower/Screenshot 2025-06-02 at 13.15.29.png",
          "src/files/images/showers/steamShower/image.png",
          "src/files/images/showers/steamShower/image copy.png",
          "src/files/images/showers/steamShower/image copy 2.png",
          "src/files/images/showers/steamShower/image copy 3.png",
          "src/files/images/showers/steamShower/image copy 4.png"

        ]
      },
      {
        title: "Multi Function Shower",
        image: "src/files/images/showers/multiPurpose/Screenshot 2025-06-02 at 13.23.33.png",
        description: "Versatile multi-function shower systems with various spray options",
        "images": [
          "src/files/images/showers/multiPurpose/Screenshot 2025-06-02 at 13.23.33.png",
          "src/files/images/showers/multiPurpose/image.png",
          "src/files/images/showers/multiPurpose/image copy.png",
          "src/files/images/showers/multiPurpose/image copy 2.png",
          "src/files/images/showers/multiPurpose/image copy 3.png"
        ]
      },
      {
        title: "HydroLite Showers",
        image: "src/files/images/showers/hydroliteShower/Screenshot 2025-06-02 at 13.20.34.png",
        description: "Advanced HydroLite technology for efficient water usage and performance",
        "images": [
          "src/files/images/showers/hydroliteShower/Screenshot 2025-06-02 at 13.20.34.png",
          "src/files/images/showers/hydroliteShower/image.png",
          "src/files/images/showers/hydroliteShower/image copy.png",
        ]
      }
    ]
  ];
    
  

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? showerSets.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === showerSets.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('src/files/images/showers/image.png')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-white text-center animate-fade-in">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent leading-tight">
              Showers
            </h1>
            <p className="text-2xl text-gray-200 font-light">Premium quality showers for your bathroom</p>
          </div>
        </div>
      </div>

      {/* Download Catalog and Category Links */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/bathroom" className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Accessories
            </a>
            <a href="/sanitary" className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Sanitary
            </a>
            <a href="/tiles" className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Tiles
            </a>
            <a href="/showers" className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Showers
            </a>
            <a href="/pvc-doors-windows" className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              PVC Doors
            </a>
            <a href="/kitchen-slabs" className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Kitchen Slabs
            </a>
            <a href="/faucets" className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Faucets
            </a>
          </div>
          <button 
            onClick={() => window.open('https://search.app/SYL15kUmSGRRJEcD6', '_blank')}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Showers Catalog
          </button>
        </div>
      </div>

      {/* Enhanced Products Grid */}
      <div className="container mx-auto px-4 py-20 flex-grow relative">
        {/* Background decoration */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
        
        <div className="text-center mb-16 animate-fade-in relative z-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-4">
            Our Showers Collection
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our premium range of showers designed to enhance your bathroom with style and functionality
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {showerSets[currentSlide].map((item, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:-translate-y-4 animate-fade-in border border-gray-100/50 cursor-pointer" 
              style={{animationDelay: `${index * 0.1}s`}}
              onClick={() => {
                setCurrentSlideIndex(0);
                setSelectedItem({ 
                  images: item.images, 
                  title: item.title 
                });
              }}
            >
              <div className="relative overflow-hidden">
                <div className="aspect-[4/3] bg-contain bg-center bg-no-repeat transition-all duration-700 group-hover:scale-110" style={{backgroundImage: `url('${item.image}')`}}>
                  <div className="h-full bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-500 flex items-end">
                    <span className="text-white font-bold text-xl p-6 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-500">{item.title}</span>
                  </div>
                </div>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              </div>
              <div className="p-6 bg-gradient-to-br from-white to-gray-50/50">
                <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                <div className="mt-4 w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div className="relative max-w-6xl w-full">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors duration-300"
              onClick={() => setSelectedItem(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="relative">
              <img 
                src={selectedItem.images[currentSlideIndex]} 
                alt={selectedItem.title} 
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              
              {/* Navigation Arrows */}
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-400 transition-colors duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  handleModalPrevSlide();
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-400 transition-colors duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  handleModalNextSlide();
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
                {currentSlideIndex + 1} / {selectedItem.images.length}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Slider Icon Section */}
      <div className="container mx-auto px-4 py-16 relative">
        <div className="flex justify-center items-center space-x-8">
          <div 
            onClick={handlePrevSlide}
            className={`w-16 h-16 ${currentSlide === 0 ? 'bg-gradient-to-r from-yellow-400 to-orange-400' : 'bg-white'} rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300 cursor-pointer`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${currentSlide === 0 ? 'text-white' : 'text-gray-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="flex space-x-2">
            {showerSets.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-yellow-500 scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <div 
            onClick={handleNextSlide}
            className={`w-16 h-16 ${currentSlide === showerSets.length - 1 ? 'bg-gradient-to-r from-yellow-400 to-orange-400' : 'bg-white'} rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300 cursor-pointer`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${currentSlide === showerSets.length - 1 ? 'text-white' : 'text-gray-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Showers;
