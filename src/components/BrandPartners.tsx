
const BrandPartners = () => {
  const brands = [
    { name: "Dutton", logo: "https://via.placeholder.com/150x80/f5f5f5/666?text=DUTTON" },
    { name: "Excel", logo: "https://via.placeholder.com/150x80/f5f5f5/666?text=EXCEL" },
    { name: "Greenply", logo: "https://via.placeholder.com/150x80/f5f5f5/666?text=GREENPLY" },
    { name: "Century", logo: "https://via.placeholder.com/150x80/f5f5f5/666?text=CENTURY" },
    { name: "Oliviya", logo: "https://via.placeholder.com/150x80/f5f5f5/666?text=OLIVIYA" },
    { name: "Shiv Shakti", logo: "https://via.placeholder.com/150x80/f5f5f5/666?text=SHIV+SHAKTI" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-blob" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full mb-6">
            <p className="text-yellow-700 font-semibold text-sm uppercase tracking-wider">WE ONLY STOCK PRODUCTS FROM THE MOST RELIABLE AND RECOGNIZED BRANDS</p>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent leading-tight">
            Trusted Brands. Quality Products
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="group relative flex items-center justify-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in border border-gray-100/50"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="max-h-16 w-auto opacity-70 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 relative z-10"
              />
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;
