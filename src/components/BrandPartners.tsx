
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-yellow-600 font-medium mb-2">WE ONLY STOCK PRODUCTS FROM THE MOST RELIABLE AND RECOGNIZED BRANDS IN THE MARKET TO ENSURE YOU GET THE BEST IN DURABILITY, STYLE, AND PERFORMANCE.</p>
          <h2 className="text-4xl font-bold text-gray-800">Trusted Brands. Quality Products</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;
