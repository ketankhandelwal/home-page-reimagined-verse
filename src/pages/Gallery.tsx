
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-yellow-600 to-yellow-700">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-white text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">Our Work & Showroom Gallery</h1>
            <p className="text-xl">REAL PRODUCTS. REAL PROJECTS. REAL TRANSFORMATIONS.</p>
          </div>
        </div>
      </div>

      {/* Gallery of Inspirations */}
      <div className="container mx-auto px-4 py-16 flex-grow">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-yellow-600 font-medium mb-2 uppercase tracking-wide">REAL PRODUCTS. REAL PROJECTS. REAL TRANSFORMATIONS.</p>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Gallery of Inspirations</h2>
        </div>

        {/* Doors Collection */}
        <div className="mb-16 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Doors Collection</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="aspect-[4/3] bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`}}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-xl font-bold">Laminated Doors</h4>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl" style={{animationDelay: '0.1s'}}>
              <div className="aspect-[4/3] bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`}}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-xl font-bold">Flush Doors</h4>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl" style={{animationDelay: '0.2s'}}>
              <div className="aspect-[4/3] bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1502005229762-cf1b2da2db18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`}}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-xl font-bold">Panel Doors</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Plywood Showcase */}
        <div className="mb-16 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Plywood Showcase</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="aspect-[4/3] bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`}}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-xl font-bold">Marine Plywood</h4>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl" style={{animationDelay: '0.1s'}}>
              <div className="aspect-[4/3] bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1504296924849-b065c827e6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`}}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-xl font-bold">Commercial Plywood</h4>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl" style={{animationDelay: '0.2s'}}>
              <div className="aspect-[4/3] bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`}}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-xl font-bold">Fire Retardant Plywood</h4>
                </div>
              </div>
            </div>
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
                  <h3 className="text-2xl font-bold mb-2">Home Interior Hardware</h3>
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

        {/* Brand Partners */}
        <div className="text-center animate-fade-in" style={{animationDelay: '0.8s'}}>
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Our Trusted Brand Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-gray-100 rounded-lg p-4 w-24 h-16 flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:opacity-100">
              <span className="text-xs font-semibold text-gray-600">EBCO</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 w-24 h-16 flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:opacity-100">
              <span className="text-xs font-semibold text-gray-600">KALPATARU</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 w-24 h-16 flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:opacity-100">
              <span className="text-xs font-semibold text-gray-600">Greenlam</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 w-24 h-16 flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:opacity-100">
              <span className="text-xs font-semibold text-gray-600">SHAHEEN</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 w-24 h-16 flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:opacity-100">
              <span className="text-xs font-semibold text-gray-600">Greenply</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 w-24 h-16 flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:opacity-100">
              <span className="text-xs font-semibold text-gray-600">GREENPANEL</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 w-24 h-16 flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:opacity-100">
              <span className="text-xs font-semibold text-gray-600">Splice</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 w-24 h-16 flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:opacity-100">
              <span className="text-xs font-semibold text-gray-600">Boss uPVC</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
