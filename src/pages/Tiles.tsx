import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const Tiles = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedTile, setSelectedTile] = useState<{ images: string[], title: string } | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const heroImages = [
    'src/files/images/tiles/3d_tiles/3d_tiles.jpg',
    'src/files/images/tiles/digital_tiles/digital_tiles.jpg',
    'src/files/images/tiles/glass_tile/image.png',
    'src/files/images/tiles/marble_tiles/image.png',
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

  const handlePrevSlide = () => {
    if (selectedTile) {
      setCurrentSlideIndex((prev) => 
        prev === 0 ? selectedTile.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextSlide = () => {
    if (selectedTile) {
      setCurrentSlideIndex((prev) => 
        prev === selectedTile.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedTile) {
      if (e.key === 'ArrowLeft') {
        handlePrevSlide();
      } else if (e.key === 'ArrowRight') {
        handleNextSlide();
      } else if (e.key === 'Escape') {
        setSelectedTile(null);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedTile]);

  const tileSets = [
    // First set of tiles
    [
      {
        title: "Ceramic Tiles",
        image: "src/files/images/tiles/ceramic_tiles/ceramic_tile_1.jpg",
        images: [
          "src/files/images/tiles/ceramic_tiles/ceramic_tile_1.jpg",
          "src/files/images/tiles/ceramic_tiles/cera_1.png",
          "src/files/images/tiles/ceramic_tiles/cera_2.png",
          "src/files/images/tiles/ceramic_tiles/cera_3.png",
          "src/files/images/tiles/ceramic_tiles/cera_4.png"
        ],
        description: "High-quality Ceramic Tiles with elegant finish"
      },
      {
        title: "Porcelain Tiles",
        image: "src/files/images/tiles/porcelain_tile/porcelain_tile.jpeg",
        images: [
          "src/files/images/tiles/porcelain_tile/porcelain_tile.jpeg",
          "src/files/images/tiles/porcelain_tile/porce_1.png",
          "src/files/images/tiles/porcelain_tile/porce_2.png",
          "src/files/images/tiles/porcelain_tile/porce_3.png",
          "src/files/images/tiles/porcelain_tile/porce_4.png",
          "src/files/images/tiles/porcelain_tile/porce_5.png",
          "src/files/images/tiles/porcelain_tile/porce_6.png"

        ],
        description: "Fire resistant and water proof Porcelain Tiles"
      },
      {
        title: "Vitrified Tiles",
        image: "src/files/images/tiles/vitrified_tile/vitrified_tiles.jpg",
        images: [
          "src/files/images/tiles/vitrified_tile/vitrified_tiles.jpg",
          "src/files/images/tiles/vitrified_tile/vetri_1.png",
          "src/files/images/tiles/vitrified_tile/vetri_2.png",
          "src/files/images/tiles/vitrified_tile/vetri_3.png",
          "src/files/images/tiles/vitrified_tile/vetri_4.png",
          "src/files/images/tiles/vitrified_tile/vetri_5.png"
        ],
        description: "Traditional Vitrified Tiles with modern finish"
      },
      {
        title: "Marble Tiles",
        image: "src/files/images/tiles/marble_tiles/image.png",
        images: [
          "src/files/images/tiles/marble_tiles/image.png",
          "src/files/images/tiles/marble_tiles/image copy.png",
          "src/files/images/tiles/marble_tiles/image copy 2.png",
          "src/files/images/tiles/marble_tiles/image copy 3.png",
          "src/files/images/tiles/marble_tiles/image copy 4.png",
          "src/files/images/tiles/marble_tiles/image copy 5.png"

        ],
        description: "Water resistant Marble Tiles for bathrooms"
      },
      {
        title: "Digital Tiles",
        image: "src/files/images/tiles/digital_tiles/digital_tiles.jpg",
        images: [
          "src/files/images/tiles/digital_tiles/digital_tiles.jpg",
          "src/files/images/tiles/digital_tiles/image copy 2.png",
          "src/files/images/tiles/digital_tiles/image copy.png",
          "src/files/images/tiles/digital_tiles/image.png"
        ],
        description: "Modern digital printed tiles with unique patterns"
      },
      {
        title: "3D Tiles",
        image: "src/files/images/tiles/3d_tiles/3d_tiles.jpg",
        images: [
          "src/files/images/tiles/3d_tiles/3d_tiles.jpg",
          "src/files/images/tiles/3d_tiles/image copy 2.png",
          "src/files/images/tiles/3d_tiles/image copy 3.png",
          "src/files/images/tiles/3d_tiles/image.png"
        ],
        description: "Dimensional tiles for modern interiors"
      },
      {
        title: "Pool Tiles",
        image: "src/files/images/tiles/pool_tiles/pool_tiles.jpg",
        images: [
          "src/files/images/tiles/pool_tiles/pool_tiles.jpg",
          "src/files/images/tiles/pool_tiles/image copy 2.png",
          "src/files/images/tiles/pool_tiles/image copy 3.png",
          "src/files/images/tiles/pool_tiles/image copy.png",
          "src/files/images/tiles/pool_tiles/image.png"
        ],
        description: "Specialized tiles for swimming pools"
      },
      {
        title: "Anti-Slip Tiles",
        image: "src/files/images/tiles/anti_slip_tiles/anti_slip_tiles.webp",
        images: [
          "src/files/images/tiles/anti_slip_tiles/anti_slip_tiles.webp",
          "src/files/images/tiles/anti_slip_tiles/anti_slip_tile_2.jpg",
          "src/files/images/tiles/anti_slip_tiles/image copy 2.png",
          "src/files/images/tiles/anti_slip_tiles/image copy 3.png",
          "src/files/images/tiles/anti_slip_tiles/image copy.png",
          "src/files/images/tiles/anti_slip_tiles/image.png"
        ],
        description: "Safety-focused tiles for wet areas"
      }
    ],
    // Second set of tiles
    [
      {
        title: "Metallic Tiles",
        image: "src/files/images/tiles/metallic_tiles/image.png",
        images: [
          "src/files/images/tiles/metallic_tiles/image.png",
          "src/files/images/tiles/metallic_tiles/image copy 2.png",
          "src/files/images/tiles/metallic_tiles/image copy 3.png",
          "src/files/images/tiles/metallic_tiles/image copy.png"
        ],
        description: "Luxurious metallic finish tiles"
      },
      {
        title: "Glass Tiles",
        image: "src/files/images/tiles/glass_tile/image.png",
        images: [
          "src/files/images/tiles/glass_tile/image.png",
          "src/files/images/tiles/glass_tile/image copy.png"
        ],
        description: "Elegant glass tiles for modern spaces"
      },
      {
        title: "Wood Look Tiles",
        image: "src/files/images/tiles/wood_look_tile/image.png",
        images: [
          "src/files/images/tiles/wood_look_tile/image.png",
          "src/files/images/tiles/wood_look_tile/wood_tile_2.jpg",
          "src/files/images/tiles/wood_look_tile/wood_tile_3.jpg",
          "src/files/images/tiles/wood_look_tile/wood_tile_4.jpg"
        ],
        description: "Wooden appearance with tile durability"
      },
      {
        title: "Stone Look Tiles",
        image: "src/files/images/tiles/stone_look_tile/image.png",
        images: [
          "src/files/images/tiles/stone_look_tile/image.png",
          "src/files/images/tiles/stone_look_tile/stone_tile_2.jpg",
          "src/files/images/tiles/stone_look_tile/stone_tile_3.jpg",
          "src/files/images/tiles/stone_look_tile/stone_tile_4.jpg"
        ],
        description: "Natural stone appearance with modern benefits"
      },
      {
        title: "Mosaic Tiles",
        image: "src/files/images/tiles/mosaic_tile/image.png",
        images: [
          "src/files/images/tiles/mosaic_tile/image.png",
          "src/files/images/tiles/mosaic_tile/mosaic_tile_2.jpg",
          "src/files/images/tiles/mosaic_tile/mosaic_tile_3.jpg",
          "src/files/images/tiles/mosaic_tile/mosaic_tile_4.jpg"
        ],
        description: "Artistic mosaic patterns for unique designs"
      },
      {
        title: "Granite Tiles",
        image: "src/files/images/tiles/granite_tile/image.png",
        images: [
          "src/files/images/tiles/granite_tile/image.png",
          "src/files/images/tiles/granite_tile/granite_tile_2.jpg",
          "src/files/images/tiles/granite_tile/granite_tile_3.jpg",
          "src/files/images/tiles/granite_tile/granite_tile_4.jpg"
        ],
        description: "Durable and elegant granite tiles for floors"
      },
      {
        title: "Wall Tiles",
        image: "src/files/images/tiles/wall_tile/image.png",
        images: [
          "src/files/images/tiles/wall_tile/image.png",
          "src/files/images/tiles/wall_tile/wall_tile_2.jpg",
          "src/files/images/tiles/wall_tile/wall_tile_3.jpg",
          "src/files/images/tiles/wall_tile/wall_tile_4.jpg"
        ],
        description: "Stylish wall tiles for interior decoration"
      },
      {
        title: "Outdoor Tiles",
        image: "src/files/images/tiles/outdoor_tiles/image.png",
        images: [
          "src/files/images/tiles/outdoor_tiles/image.png",
          "src/files/images/tiles/outdoor_tiles/outdoor_tile_2.jpg",
          "src/files/images/tiles/outdoor_tiles/outdoor_tile_3.jpg",
          "src/files/images/tiles/outdoor_tiles/outdoor_tile_4.jpg"
        ],
        description: "Weather-resistant tiles for outdoor spaces"
      }
    ]
  ];

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
              Tiles
            </h1>
            <p className="text-2xl text-gray-200 font-light">Premium quality tiles for your home and office</p>
            <div className="mt-8 w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Download Catalog and Category Links */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/bathroom" className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Bathroom
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
            <a href="/upvc-doors-windows" className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              UPVC Doors & Windows
            </a>
           
            <a href="/kitchen-slabs" className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Kitchen Slabs
            </a>
            <a href="/faucets" className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Faucets
            </a>
          </div>
          <button 
            onClick={() => window.open('https://search.app/S3QcVLFeN8UsvbMY7', '_blank')}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Tiles Catalog
          </button>
        </div>
      </div>

      {/* Enhanced Products Grid */}
      <div className="container mx-auto px-4 py-20 flex-grow relative">
        {/* Background decoration */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
        
        <div className="text-center mb-16 animate-fade-in relative z-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-4">
            Our Tiles Collection
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our premium range of tiles designed to enhance your space with style and functionality
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {tileSets[currentSlide].map((tile, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:-translate-y-4 animate-fade-in border border-gray-100/50 cursor-pointer" 
              style={{animationDelay: `${index * 0.1}s`}}
              onClick={() => {
                setCurrentSlideIndex(0);
                setSelectedTile({ 
                  images: tile.images, 
                  title: tile.title 
                });
              }}
            >
              <div className="relative overflow-hidden">
                <div className="h-48 bg-cover bg-center transition-all duration-700 group-hover:scale-110" style={{backgroundImage: `url('${tile.image}')`}}>
                  <div className="h-full bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-500 flex items-end">
                    <span className="text-white font-bold text-xl p-6 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-500">{tile.title}</span>
                  </div>
                </div>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              </div>
              <div className="p-6 bg-gradient-to-br from-white to-gray-50/50">
                <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">{tile.title}</h3>
                <p className="text-gray-600 leading-relaxed">{tile.description}</p>
                <div className="mt-4 w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedTile && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedTile(null)}
        >
          <div className="relative max-w-6xl w-full">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors duration-300"
              onClick={() => setSelectedTile(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="relative">
              <img 
                src={selectedTile.images[currentSlideIndex]} 
                alt={selectedTile.title} 
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
                {currentSlideIndex + 1} / {selectedTile.images.length}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Slider Icon Section */}
      <div className="container mx-auto px-4 py-16 relative">
        <div className="flex justify-center items-center space-x-8">
          <div 
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? tileSets.length - 1 : prev - 1))}
            className={`w-16 h-16 ${currentSlide === 0 ? 'bg-gradient-to-r from-yellow-400 to-orange-400' : 'bg-white'} rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300 cursor-pointer`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${currentSlide === 0 ? 'text-white' : 'text-gray-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="flex space-x-2">
            {tileSets.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-yellow-500 scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <div 
            onClick={() => setCurrentSlide((prev) => (prev === tileSets.length - 1 ? 0 : prev + 1))}
            className={`w-16 h-16 ${currentSlide === tileSets.length - 1 ? 'bg-gradient-to-r from-yellow-400 to-orange-400' : 'bg-white'} rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300 cursor-pointer`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${currentSlide === tileSets.length - 1 ? 'text-white' : 'text-gray-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Tiles;
