const BrandPartners = () => {
  const brands = [
    { name: "Astral Pipes", logo: "src/files/images/brands/astral.png" },
    { name: "RAK Ceramic", logo: "src/files/images/brands/rak.png" },
    { name: "Rudraksha", logo: "src/files/images/brands/rudra.png" },
    { name: "Varmora", logo: "src/files/images/brands/varmora.png" },
    { name: "Prayag", logo: "src/files/images/brands/prayg.png" },
    { name: "Cera Ceramics", logo: "src/files/images/brands/cera.png" },
    { name: "Supreme", logo: "src/files/images/brands/sup.png" },
    { name: "Plasto", logo: "src/files/images/brands/plasto.png" },
    { name: "Max", logo: "src/files/images/brands/max.png" },
    { name: "Eauset", logo: "src/files/images/brands/eauset.png" },
    { name: "Xen", logo: "src/files/images/brands/Xen.png" },
    { name: "Gravity", logo: "src/files/images/brands/gravity.png" },
  ];

  return (
    <section id="brands" className="py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
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
              className="group relative flex items-center justify-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border border-gray-100"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="max-h-16 w-auto group-hover:scale-105 transition-transform duration-300 relative z-10"
              />
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;