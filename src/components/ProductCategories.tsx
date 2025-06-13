import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductCategories = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const categories = [
    {
      title: "Tiles",
      image: "files/images/tiles/stone_look_tile/image.png",
      route: "/tiles"
    },
    {
      title: "Sanitary",
      image: "files/images/sanitary/counter_top_washbasin/image.png",
      route: "/sanitary"
    },
    {
      title: "Faucets",
      image: "files/images/faucets/pressMatic/image.png",
      route: "/faucets"
    },
    {
      title: "Showers",
      image: "files/images/showers/rainhead/rainhead.png",
      route: "/showers"
    },
    {
      title: "Kitchen Slabs",
      image: "files/images/kitchen/concrete/image.png",
      route: "/kitchen-slabs"
    },
    {
      title: "PVC Doors",
      image: "files/images/doors/image2.png",
      route: "/pvc-doors-windows"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-200/20 to-purple-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full mb-4">
            <p className="text-yellow-700 font-semibold text-sm uppercase tracking-wider">EXPLORE OUR COLLECTION</p>
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
            Explore Our Product Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our extensive range of premium products designed to transform your space into something extraordinary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link 
              to={category.route}
              key={index}
              onClick={scrollToTop}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 animate-fade-in bg-white"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{backgroundImage: `url(${category.image})`}}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating icon effect */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <div className="w-6 h-6 bg-white rounded-sm"></div>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center transform transition-all duration-500 group-hover:scale-110">
                    <h3 className="text-white text-3xl font-bold mb-2 tracking-wide">{category.title}</h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </div>
              </div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
