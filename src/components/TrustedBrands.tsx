import { motion } from "framer-motion";

const TrustedBrands = () => {
  const brands = [
    {
      name: "Kajaria",
      logo: "https://www.kajariaceramics.com/wp-content/uploads/2023/03/kajaria-logo.png",
      category: "Tiles"
    },
    {
      name: "Somany",
      logo: "https://www.somanyceramics.com/wp-content/uploads/2023/03/somany-logo.png",
      category: "Tiles"
    },
    {
      name: "Jaquar",
      logo: "https://www.jaquar.com/wp-content/uploads/2023/03/jaquar-logo.png",
      category: "Sanitary"
    },
    {
      name: "Grohe",
      logo: "https://www.grohe.com/wp-content/uploads/2023/03/grohe-logo.png",
      category: "Faucets"
    },
    {
      name: "Kohler",
      logo: "https://www.kohler.com/wp-content/uploads/2023/03/kohler-logo.png",
      category: "Sanitary"
    },
    {
      name: "Cera",
      logo: "https://www.cera-india.com/wp-content/uploads/2023/03/cera-logo.png",
      category: "Sanitary"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/10 to-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full mb-4">
            <p className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">TRUSTED PARTNERSHIPS</p>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-6 leading-tight">
            Our Trusted Brands
          </h2>
          <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
            We partner with the world's leading brands to bring you the finest quality products for your home.
            Each brand represents excellence, innovation, and reliability in their respective categories.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 transform hover:scale-105 transition-all duration-500">
                <div className="aspect-square relative">
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="w-full h-full object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-white mb-1">{brand.name}</h3>
                  <p className="text-sm text-gray-400">{brand.category}</p>
                </div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Brand Promise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold mb-6">Quality You Can Trust</h3>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              We carefully select our brand partners to ensure that every product we offer meets our high standards 
              of quality, durability, and design excellence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBrands; 