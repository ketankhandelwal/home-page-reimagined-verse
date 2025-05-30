
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Plywood = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-yellow-600 to-yellow-700">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Plywood</h1>
            <p className="text-xl">High-grade plywood for all construction needs</p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-yellow-100 flex items-center justify-center">
              <span className="text-yellow-600 font-semibold">Marine Plywood</span>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Marine Plywood</h3>
              <p className="text-gray-600 text-sm">Water resistant plywood for humid conditions</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-yellow-100 flex items-center justify-center">
              <span className="text-yellow-600 font-semibold">Commercial Plywood</span>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Commercial Plywood</h3>
              <p className="text-gray-600 text-sm">Versatile plywood for commercial applications</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-yellow-100 flex items-center justify-center">
              <span className="text-yellow-600 font-semibold">Fire Retardant Plywood</span>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Fire Retardant Plywood</h3>
              <p className="text-gray-600 text-sm">Fire resistant plywood for safety applications</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Plywood;
