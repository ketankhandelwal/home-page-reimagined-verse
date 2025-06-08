import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const Bathroom = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedItem, setSelectedItem] = useState<{
    images: string[];
    title: string;
  } | null>(null);
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
      if (e.key === "ArrowLeft") {
        handleModalPrevSlide();
      } else if (e.key === "ArrowRight") {
        handleModalNextSlide();
      } else if (e.key === "Escape") {
        setSelectedItem(null);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem]);

  const bathroomSets = [
    // First set of bathroom items
    [
      {
        title: "Grab Bars",
        image: "src/files/images/accessories/grabBars/image.png",
        description:
          "Durable safety grab bars designed to provide support and stability in showers and near toilets.",
        images: [
          "src/files/images/accessories/grabBars/image.png",
          "src/files/images/accessories/grabBars/image copy.png",
          "src/files/images/accessories/grabBars/image copy 4.png",
          "src/files/images/accessories/grabBars/image copy 3.png",
        ],
      },
      {
        title: "Soap Dispensers",
        image: "src/files/images/accessories/soap_dispenser/image.png",
        description:
          "Convenient and stylish soap dispensers available in automatic and manual options.",
        images: [
          "src/files/images/accessories/soap_dispenser/image.png",
          "src/files/images/accessories/soap_dispenser/image copy.png",
          "src/files/images/accessories/soap_dispenser/image copy 2.png",
          "src/files/images/accessories/soap_dispenser/image copy 3.png",
        ],
      },
      {
        title: "Towel Ring",
        image: "src/files/images/accessories/towel_ring/image.png",
        description:
          "Compact and elegant towel rings for hand towels and small spaces.",
        images: [
          "src/files/images/accessories/towel_ring/image.png",
          "src/files/images/accessories/towel_ring/image copy.png",
          "src/files/images/accessories/towel_ring/image copy 2.png",
          "src/files/images/accessories/towel_ring/image copy 3.png",
        ],
      },
      {
        title: "Towel Rod",
        image: "src/files/images/accessories/towel_rods/image.png",
        description:
          "Wall-mounted towel rods ideal for hanging full-sized towels.",
        images: [
          "src/files/images/accessories/towel_rods/image.png",
          "src/files/images/accessories/towel_rods/image copy.png",
          "src/files/images/accessories/towel_rods/image copy 2.png",
          "src/files/images/accessories/towel_rods/image copy 3.png",
        ],
      },
      {
        title: "Bathroom Sets",
        image: "src/files/images/accessories/bathroom_Sets/image copy 2.png",
        description:
          "Coordinated bathroom sets including dispensers, holders, and accessories.",
        images: [
          "src/files/images/accessories/bathroom_Sets/image copy 2.png",
          "src/files/images/accessories/bathroom_Sets/image.png",
          "src/files/images/accessories/bathroom_Sets/image copy.png",
          "src/files/images/accessories/bathroom_Sets/image copy 3.png",
        ],
      },
      {
        title: "Towel Rack",
        image: "src/files/images/accessories/towel_rack/image copy.png",
        description:
          "Spacious towel racks for organizing and drying multiple towels.",
        images: [
          "src/files/images/accessories/towel_rack/image copy.png",
          "src/files/images/accessories/towel_rack/image.png",
          "src/files/images/accessories/towel_rack/image copy 2.png",
          "src/files/images/accessories/towel_rack/image copy 3.png",
          "src/files/images/accessories/towel_rack/image copy 4.png",
        ],
      },
 
      {
        title: "Corner Shelves",
        image: "src/files/images/accessories/corner_shelves/image.png",
        description:
          "Space-saving corner shelves for organizing toiletries and accessories.",
        images: [
          "src/files/images/accessories/corner_shelves/image.png",
          "src/files/images/accessories/corner_shelves/image copy.png",
          "src/files/images/accessories/corner_shelves/image copy 2.png",
          "src/files/images/accessories/corner_shelves/image copy 3.png",
          "src/files/images/accessories/corner_shelves/image copy 4.png",
          "src/files/images/accessories/corner_shelves/image copy 5.png",
        ],
      },
      {
        title: "Wall Pegs",
        image: "src/files/images/accessories/wall_pegs/image copy.png",
        description:
          "Minimalist wall pegs for hanging towels, robes, and accessories.",
        images: [
          "src/files/images/accessories/wall_pegs/image copy.png",
          "src/files/images/accessories/wall_pegs/image.png",
          "src/files/images/accessories/wall_pegs/image copy 2.png",
          "src/files/images/accessories/wall_pegs/image copy 3.png",
          "src/files/images/accessories/wall_pegs/image copy 4.png",
        ],
      }
    ],
    // Second set of bathroom accessories
    [
      {
        title: "Hinges",
        image: "src/files/images/accessories/hinges/image.png",
        description:
          "High-quality door hinges for cabinets and bathroom enclosures.",
        images: [
          "src/files/images/accessories/hinges/image.png",
          "src/files/images/accessories/hinges/image copy.png",
          "src/files/images/accessories/hinges/image copy 2.png",
          "src/files/images/accessories/hinges/image copy 3.png",
        ],
      },
      {
        title: "Napkin Holder",
        image: "src/files/images/accessories/napkin_holder/image.png",
        description:
          "Modern and functional napkin holders for bathroom and dining areas.",
        images: [
          "src/files/images/accessories/napkin_holder/image.png",
          "src/files/images/accessories/napkin_holder/image copy.png",
          "src/files/images/accessories/napkin_holder/image copy 2.png",
          "src/files/images/accessories/napkin_holder/image copy 3.png",
          "src/files/images/accessories/napkin_holder/image copy 4.png",
        ],
      },
      {
        title: "Tumbler Holder",
        image: "src/files/images/accessories/tumbler/image.png",
        description:
          "Mounted tumbler holders for easy access to cups and toothbrushes.",
        images: [
          "src/files/images/accessories/tumbler/image.png",
          "src/files/images/accessories/tumbler/image copy.png",
          "src/files/images/accessories/tumbler/image copy 2.png",
          "src/files/images/accessories/tumbler/image copy 3.png",
        ],
      },

  
    ],
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? bathroomSets.length - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === bathroomSets.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 flex flex-col">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('src/files/images/accessories/image.png')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>

        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-white text-center animate-fade-in">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent leading-tight">
              Bathroom Accessories
            </h1>
            <p className="text-2xl text-gray-200 font-light">
              Premium quality bathroom fixtures and accessories
            </p>
          </div>
        </div>
      </div>

      {/* Download Catalog and Category Links */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/bathroom"
              className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Accessories
            </a>
            <a
              href="/sanitary"
              className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Sanitary
            </a>
            <a
              href="/tiles"
              className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Tiles
            </a>
            <a
              href="/showers"
              className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Showers
            </a>
            <a
              href="/pvc-doors-windows"
              className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              PVC Doors
            </a>
            <a
              href="/kitchen-slabs"
              className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Kitchen Slabs
            </a>
            <a
              href="/faucets"
              className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Faucets
            </a>
          </div>
          <button
            onClick={() =>
              window.open("https://search.app/pAGp6f3hUBtcdQjd7", "_blank")
            }
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Accessories Catalog
          </button>
        </div>
      </div>

      {/* Enhanced Products Grid */}
      <div className="container mx-auto px-4 py-20 flex-grow relative">
        {/* Background decoration */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl"></div>

        <div className="text-center mb-16 animate-fade-in relative z-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-4">
            Our Accessories Collection
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our premium range of bathroom fixtures and accessories
            designed to enhance your space with style and functionality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {bathroomSets[currentSlide].map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:-translate-y-4 animate-fade-in border border-gray-100/50 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => {
                setCurrentSlideIndex(0);
                setSelectedItem({
                  images: item.images,
                  title: item.title,
                });
              }}
            >
              <div className="relative overflow-hidden">
                <div
                  className="aspect-[4/3] bg-contain bg-center bg-no-repeat transition-all duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.image}')` }}
                >
                  <div className="h-full bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-500 flex items-end">
                    <span className="text-white font-bold text-xl p-6 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-500">
                      {item.title}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              </div>
              <div className="p-6 bg-gradient-to-br from-white to-gray-50/50">
                <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-400 transition-colors duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  handleModalNextSlide();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
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
            className={`w-16 h-16 ${
              currentSlide === 0
                ? "bg-gradient-to-r from-yellow-400 to-orange-400"
                : "bg-white"
            } rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300 cursor-pointer`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-8 w-8 ${
                currentSlide === 0 ? "text-white" : "text-gray-600"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
          <div className="flex space-x-2">
            {bathroomSets.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-yellow-500 scale-125"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <div
            onClick={handleNextSlide}
            className={`w-16 h-16 ${
              currentSlide === bathroomSets.length - 1
                ? "bg-gradient-to-r from-yellow-400 to-orange-400"
                : "bg-white"
            } rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300 cursor-pointer`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-8 w-8 ${
                currentSlide === bathroomSets.length - 1
                  ? "text-white"
                  : "text-gray-600"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Bathroom;
