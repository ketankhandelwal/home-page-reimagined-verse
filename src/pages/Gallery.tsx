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
  const [selectedCollection, setSelectedCollection] = useState<{ images: string[], title: string } | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentCollectionSlides, setCurrentCollectionSlides] = useState({
    tiles: 0,
    sanitary: 0,
    kitchen: 0
  });

  // Collection images
  const collections = {
    tiles: {
      title: "Tiles Collection",
      images: [
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1502005229762-cf1b2da2db18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    sanitary: {
      title: "Sanitary Collection",
      images: [
        'https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1504296924849-b065c827e6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    kitchen: {
      title: "Kitchen Collection",
      images: [
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1502005229762-cf1b2da2db18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const handlePrevSlide = () => {
    if (selectedCollection) {
      setCurrentSlideIndex((prev) => 
        prev === 0 ? selectedCollection.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextSlide = () => {
    if (selectedCollection) {
      setCurrentSlideIndex((prev) => 
        prev === selectedCollection.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handleCollectionPrevSlide = (collection: 'tiles' | 'sanitary' | 'kitchen') => {
    setCurrentCollectionSlides(prev => ({
      ...prev,
      [collection]: prev[collection] === 0 ? 1 : prev[collection] - 1
    }));
  };

  const handleCollectionNextSlide = (collection: 'tiles' | 'sanitary' | 'kitchen') => {
    setCurrentCollectionSlides(prev => ({
      ...prev,
      [collection]: prev[collection] === 1 ? 0 : prev[collection] + 1
    }));
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedCollection) {
      if (e.key === 'ArrowLeft') {
        handlePrevSlide();
      } else if (e.key === 'ArrowRight') {
        handleNextSlide();
      } else if (e.key === 'Escape') {
        setSelectedCollection(null);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCollection]);

  const renderCollectionItems = (collection: 'tiles' | 'sanitary' | 'kitchen') => {
    const startIndex = currentCollectionSlides[collection] * 3;
    const items = collections[collection].images.slice(startIndex, startIndex + 3);
    
    return items.map((image, index) => (
      <div 
        key={startIndex + index}
        className="group relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:-translate-y-4 bg-white cursor-pointer" 
        style={{animationDelay: `${index * 0.1}s`}}
        onClick={() => {
          setCurrentSlideIndex(0);
          setSelectedCollection({ images: collections[collection].images, title: collections[collection].title });
        }}
      >
        <div className="aspect-[4/3] relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: `url('${image}')`}} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-6 left-6 text-white transform group-hover:translate-y-0 translate-y-2 transition-transform duration-500">
            <h4 className="text-2xl font-bold mb-2">{collections[collection].title}</h4>
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
        </div>
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 flex flex-col">
      <Header />
      
      {/* Hero Section */}
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
            {renderCollectionItems('tiles')}
          </div>
          <div className="flex justify-center items-center space-x-8 mt-8">
            <div 
              onClick={() => handleCollectionPrevSlide('tiles')}
              className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="flex space-x-2">
              {[0, 1].map((index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentCollectionSlides.tiles === index ? 'bg-yellow-500 scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <div 
              onClick={() => handleCollectionNextSlide('tiles')}
              className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Sanitary Showcase */}
        <div className="mb-20 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Sanitary Showcase</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {renderCollectionItems('sanitary')}
          </div>
          <div className="flex justify-center items-center space-x-8 mt-8">
            <div 
              onClick={() => handleCollectionPrevSlide('sanitary')}
              className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="flex space-x-2">
              {[0, 1].map((index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentCollectionSlides.sanitary === index ? 'bg-yellow-500 scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <div 
              onClick={() => handleCollectionNextSlide('sanitary')}
              className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Kitchen Solutions Section */}
        <div className="mb-20 animate-fade-in relative z-10" style={{animationDelay: '0.2s'}}>
          <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-12 text-center">Kitchen Collection</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {renderCollectionItems('kitchen')}
          </div>
          <div className="flex justify-center items-center space-x-8 mt-8">
            <div 
              onClick={() => handleCollectionPrevSlide('kitchen')}
              className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="flex space-x-2">
              {[0, 1].map((index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentCollectionSlides.kitchen === index ? 'bg-yellow-500 scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <div 
              onClick={() => handleCollectionNextSlide('kitchen')}
              className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedCollection && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCollection(null)}
          >
            <div className="relative max-w-6xl w-full">
              <button 
                className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors duration-300"
                onClick={() => setSelectedCollection(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="relative">
                <img 
                  src={selectedCollection.images[currentSlideIndex]} 
                  alt={selectedCollection.title} 
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
                
                {/* Navigation Arrows */}
                <button 
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-400 transition-colors duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevSlide();
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
                    handleNextSlide();
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
                  {currentSlideIndex + 1} / {selectedCollection.images.length}
                </div>
              </div>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
};

export default Gallery;
