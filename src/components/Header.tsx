import { Phone, Mail, MapPin, Youtube, Instagram, Facebook, ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const productCategories = [
    { name: "Tiles", path: "/tiles" },
    { name: "Sanitary", path: "/sanitary" }, 
    { name: "Bathroom", path: "/bathroom" },
    { name: "Faucets", path: "/faucets" },
    { name: "Showers", path: "/showers" },
    { name: "Pvc doors", path: "/pvc-doors" },
    {name: "Kitchen Slabs", path: "/kitchen-slabs" },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (path: string) => {
    navigate(path);
  };

  return (
    <header className="bg-white">
      {/* Top bar */}
      <div className="bg-yellow-600 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>80901 40600</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span>kesarwanisanitaryhardware@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin size={16} />
            <a href="https://wa.me/918090140600" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} className="hover:text-yellow-200 cursor-pointer" />
            </a>
            <a href="https://www.youtube.com/@kesarwanisanitaryhardware" target="_blank" rel="noopener noreferrer">
  <Youtube size={16} className="hover:text-yellow-200 cursor-pointer" />
</a>

<a href="https://www.instagram.com/kesarwanihardware/" target="_blank" rel="noopener noreferrer">
  <Instagram size={16} className="hover:text-yellow-200 cursor-pointer" />
</a>

<a href="https://www.facebook.com/kesarwanihardware" target="_blank" rel="noopener noreferrer">
  <Facebook size={16} className="hover:text-yellow-200 cursor-pointer" />
</a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
              <div className="text-white font-bold text-xl">K</div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">KESARWANI SANITARY WARE</h1>
              <p className="text-sm text-gray-600">Since 2000</p>
              <p className="text-xs text-gray-500">Where Quality Meets Design</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-yellow-600 font-medium hover:text-yellow-700">Home</Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-700 hover:text-yellow-600 cursor-pointer flex items-center gap-1">
                All Products
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-white border border-gray-200 shadow-lg">
                {productCategories.map((category, index) => (
                  <DropdownMenuItem 
                    key={index} 
                    className="text-gray-700 hover:text-yellow-600 hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleCategoryClick(category.path)}
                  >
                    {category.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/gallery" className="text-gray-700 hover:text-yellow-600">Gallery</Link>
            <Link to="/contact" className="text-gray-700 hover:text-yellow-600">Contact</Link>
          </nav>

          <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-full"
          onClick={scrollToContact}>
            GET A FREE QUOTE
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
