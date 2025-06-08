import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin, Clock, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const productCategories = [
    { name: "Tiles", path: "/tiles" },
    { name: "Sanitary", path: "/sanitary" },
    { name: "Bathroom Accessories", path: "/bathroom" },
    { name: "Faucets", path: "/faucets" },
    { name: "Showers", path: "/showers" },
    { name: "PVC Doors", path: "/pvc-doors" },
    { name: "Kitchen Slabs", path: "/kitchen-slabs" },

  ];

  // Create array of all product category routes
  const productCategoryRoutes = productCategories.map(category => category.path);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "#", hasDropdown: true },
    { name: "About", href: "#about", isScroll: true, hideOnRoutes: ["/gallery", "/contact", ...productCategoryRoutes] },
    { name: "Benefits", href: "#benefits", isScroll: true, hideOnRoutes: ["/gallery", "/contact", ...productCategoryRoutes] },
    { name: "EMI", href: "#emi", isScroll: true, hideOnRoutes: ["/gallery", "/contact", ...productCategoryRoutes] },
    { name: "Brands", href: "#brands", isScroll: true, hideOnRoutes: ["/gallery", "/contact", ...productCategoryRoutes] },
    // { name: "Gallery", href: "/gallery" },
    { name: "FAQ", href: "#faq", isScroll: true, hideOnRoutes: ["/gallery", "/contact", ...productCategoryRoutes] },
    { name: "Contact", href: "/contact" },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleAnchorClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-lg"
          : "bg-gradient-to-b from-gray-900/90 to-transparent"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:+919876543210" className="flex items-center hover:text-yellow-400 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                +91 80901 40600
              </a>
              <a href="https://maps.app.goo.gl/nnJVqa5H3yDYagQZA" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-yellow-400 transition-colors">
                <MapPin className="w-4 h-4 mr-2" />
                Pratapgarh, UP
              </a>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Sun-Fri: 10:00 AM - 8:00 PM
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="src/files/images/ChatGPT_Image_Jun_7__2025__01_07_22_PM-removebg-preview.png" 
                alt="Kesarwani Sanitary Ware Logo" 
                className="h-16 w-auto brightness-75 contrast-125"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                KESARWANI SANITARY WARE
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              if (item.hideOnRoutes?.includes(location.pathname)) {
                return null;
              }
              
              return (
                <div key={item.name} className="relative group">
                  {item.hasDropdown ? (
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
                        isScrolled ? "text-gray-800 hover:text-yellow-500" : "text-white hover:text-yellow-400"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  ) : item.isScroll ? (
                    <button
                      onClick={() => handleAnchorClick(item.href)}
                      className={`text-sm font-medium transition-colors ${
                        isScrolled ? "text-gray-800 hover:text-yellow-500" : "text-white hover:text-yellow-400"
                      }`}
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`text-sm font-medium transition-colors ${
                        isScrolled ? "text-gray-800 hover:text-yellow-500" : "text-white hover:text-yellow-400"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                    >
                      {productCategories.map((category) => (
                        <Link
                          key={category.name}
                          to={category.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              );
            })}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              onClick={() => window.open('https://www.google.com/search?q=kesarwani+sanitary+ware&oq=kesarwani+sanitary+ware&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhAMggIAhBFGCcYOzIGCAMQRRg7MggIBBAAGBYYHjIGCAUQRRg9MgYIBhBFGD0yBggHEEUYPNIBCDcwMjBqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8&lqi=ChdrZXNhcndhbmkgc2FuaXRhcnkgd2FyZVoZIhdrZXNhcndhbmkgc2FuaXRhcnkgd2FyZZIBCnRpbGVfc3RvcmWqAV0QASobIhdrZXNhcndhbmkgc2FuaXRhcnkgd2FyZSgAMh8QASIb405OaXgt6gSyw7upYVF5Twyk4NZrIM66IbExMhsQAiIXa2VzYXJ3YW5pIHNhbml0YXJ5IHdhcmU#lkt=LocalPoiReviews&rlimm=13528234078566491894', '_blank')}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Rate Us On Google
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-white shadow-lg overflow-hidden"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => {
              if (item.hideOnRoutes?.includes(location.pathname)) {
                return null;
              }

              return (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full text-gray-800 hover:text-yellow-500 transition-colors"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="pl-4 mt-2 space-y-2">
                          {productCategories.map((category) => (
                            <Link
                              key={category.name}
                              to={category.path}
                              className="block text-gray-600 hover:text-yellow-500 transition-colors"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              {category.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : item.isScroll ? (
                    <button
                      onClick={() => {
                        handleAnchorClick(item.href);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block text-gray-800 hover:text-yellow-500 transition-colors text-left"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="block text-gray-800 hover:text-yellow-500 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              );
            })}
            <button
              onClick={() => window.open('https://www.google.com/search?q=kesarwani+sanitary+ware&oq=kesarwani+sanitary+ware&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhAMggIAhBFGCcYOzIGCAMQRRg7MggIBBAAGBYYHjIGCAUQRRg9MgYIBhBFGD0yBggHEEUYPNIBCDcwMjBqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8&lqi=ChdrZXNhcndhbmkgc2FuaXRhcnkgd2FyZVoZIhdrZXNhcndhbmkgc2FuaXRhcnkgd2FyZZIBCnRpbGVfc3RvcmWqAV0QASobIhdrZXNhcndhbmkgc2FuaXRhcnkgd2FyZSgAMh8QASIb405OaXgt6gSyw7upYVF5Twyk4NZrIM66IbExMhsQAiIXa2VzYXJ3YW5pIHNhbml0YXJ5IHdhcmU#lkt=LocalPoiReviews&rlimm=13528234078566491894', '_blank')}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300"
            >
              Rate Us On Google
            </button>
          </div>
        </div>
      </motion.div>

      {/* Partition Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent -mt-4"></div>
    </motion.header>
  );
};

export default Header;