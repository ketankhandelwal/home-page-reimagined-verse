
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Doors = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-yellow-600 to-yellow-700">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">Doors</h1>
            <p className="text-xl">Premium quality doors for your home and office</p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fade-in" style={{animationDelay: '0.1s'}}>
            <div className="h-48 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center transition-all duration-300 hover:from-yellow-200 hover:to-yellow-300">
              <span className="text-yellow-600 font-semibold text-lg">Laminated Doors</span>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2 text-gray-800">Laminated Doors</h3>
              <p className="text-gray-600 text-sm">High-quality laminated doors with elegant finish</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="h-48 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center transition-all duration-300 hover:from-yellow-200 hover:to-yellow-300">
              <span className="text-yellow-600 font-semibold text-lg">Flush Doors</span>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2 text-gray-800">Flush Doors</h3>
              <p className="text-gray-600 text-sm">Fire resistant and water proof flush doors</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="h-48 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center transition-all duration-300 hover:from-yellow-200 hover:to-yellow-300">
              <span className="text-yellow-600 font-semibold text-lg">Panel Doors</span>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2 text-gray-800">Panel Doors</h3>
              <p className="text-gray-600 text-sm">Traditional panel doors with modern finish</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="h-48 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center transition-all duration-300 hover:from-yellow-200 hover:to-yellow-300">
              <span className="text-yellow-600 font-semibold text-lg">WPC Doors</span>
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
