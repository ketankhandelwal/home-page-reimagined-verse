import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UPVCDoorsWindows = () => {
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

  const upvcSets = [
[
      {
        "title": "3D Bonny Wooden PVC Door",
        "image": "files/images/doors/3d_bonny/image1.png",
        "description": "Elegant two-panel glazed door with wooden finish for enhanced natural light",
        "images": [
          "files/images/doors/3d_bonny/image1.png",
          "files/images/doors/3d_bonny/image2.png",]
      },
      {
        "title": "Digital Bonny Wooden PVC Door",
        "image": "files/images/doors/digital_bonny/image1.png",
        "description": "Traditional three-panel door with realistic wood grain texture and durability",
        "images": [
          "public/files/images/doors/digital_bonny/image1.png"  ,
          "public/files/images/doors/digital_bonny/image2.png"]
      },
      {
        "title": "Both Side Premium Digital PVC Door",
        "image": "files/images/doors/both_side_premium_digital/image1.png",
        "description": "Modern anthracite gray door with rustic finish for contemporary interiors",
        "images": [
          "files/images/doors/both_side_premium_digital/image1.png",
          
          "files/images/doors/both_side_premium_digital/image2.png",
          "files/images/doors/both_side_premium_digital/image3.png"]
      },
      {
        "title": "3D Super Digital PVC Door",
        "image": "files/images/doors/3d_super_digital/image1.png",
        "description": "Natural bamboo-colored four-panel door combining style with eco-friendly aesthetics",
        "images": [
          "files/images/doors/3d_super_digital/image1.png",
          "files/images/doors/3d_super_digital/image2.png",
          "files/images/doors/3d_super_digital/image3.png"]
      },
      {
        "title": "Digital Mirror PVC Door",
        "image": "files/images/doors/digital_mirror/image1.png",
        "description": "Bright birch white glazed door perfect for creating airy, spacious interiors",
        "images": [
          "files/images/doors/digital_mirror/image1.png",
          "files/images/doors/digital_mirror/image2.png",]
      },
      {
        "title": "Dual Digital SL",
        "image": "files/images/doors/dual_digital_sl/image1.png",
        "description": "Timeless classic wooden-style door with traditional design and modern PVC benefits",
        "images": [
          "files/images/doors/dual_digital_sl/image1.png",
          "files/images/doors/dual_digital_sl/image2.png",]
      },
      {
        "title": "Dusky Digital PVC Door",
        "image": "files/images/doors/dusky_digital_pvc/image1.png",
        "description": "Sophisticated ecru-colored door with subtle grain pattern for elegant interiors",
        "images": [
          "files/images/doors/dusky_digital_pvc/image1.png",
          "files/images/doors/dusky_digital_pvc/image2.png",
          "files/images/doors/dusky_digital_pvc/image3.png"]

      },
      {
        "title": "DP Godzilla",
        "image": "files/images/doors/dp_godzilla/image1.png",
        "description": "Luxurious gold-toned half-glazed door with two panels for premium interior design",
        "images": [
          "public/files/images/doors/dp_godzilla/image1.png",
          "public/files/images/doors/dp_godzilla/image2.png",
          "public/files/images/doors/dp_godzilla/image3.png"]
      }
    ],
  
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? upvcSets.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === upvcSets.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')` }} />

        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/40"></div>

        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-white text-center animate-fade-in">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent leading-tight">
              PVC Doors
            </h1>
            <p className="text-2xl text-gray-200 font-light">Premium quality PVC doors for your home</p>
          </div>
        </div>
      </div>

      {/* Download Catalog and Category Links */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/bathroom"
              className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Accessories
            </Link>
            <Link
              to="/sanitary"
              className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Sanitary
            </Link>
            <Link
              to="/tiles"
              className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Tiles
            </Link>
            <Link
              to="/showers"
              className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Showers
            </Link>
            <Link
              to="/pvc-doors-windows"
              className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              PVC Doors
            </Link>
            <Link
              to="/kitchen-slabs"
              className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Kitchen Slabs
            </Link>
            <Link
              to="/faucets"
              className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Faucets
            </Link>
          </div>

          <button 
            onClick={() => window.open('https://drive.google.com/file/d/1MX3JEkk6aNfGhd-AN3gimYvm2_8zv5Va/view?usp=drivesdk', '_blank')}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PVC Doors Catalog
          </button>

        </div>
      </div>

      {/* Enhanced Products Grid */}
      <div className="container mx-auto px-4 py-20 flex-grow relative">
        {/* Background decoration */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
        
        <div className="text-center mb-16 animate-fade-in relative z-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-4">
            Our PVC Collection
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our premium range of PVC doors designed to enhance your space with style and functionality
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {upvcSets[currentSlide].map((item, index) => (
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
            {upvcSets.map((_, index) => (
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
            className={`w-16 h-16 ${currentSlide === upvcSets.length - 1 ? 'bg-gradient-to-r from-yellow-400 to-orange-400' : 'bg-white'} rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300 cursor-pointer`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${currentSlide === upvcSets.length - 1 ? 'text-white' : 'text-gray-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UPVCDoorsWindows;
