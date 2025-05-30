
import { Phone, Mail, MapPin, Youtube, Instagram, Facebook, ChevronDown } from "lucide-react";
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
    { name: "Doors", path: "/doors" },
    { name: "Plywood", path: "/plywood" }, 
    { name: "Glass Railing", path: "/glass-railing" },
    { name: "UPVC Doors & Windows", path: "/upvc-doors-windows" },
    { name: "Wallpaper", path: "/wallpaper" },
    { name: "Mortise Locks And Door Appliance", path: "/mortise-locks" },
    { name: "Kitchen Appliances", path: "/kitchen-appliances" },
    { name: "Laminates & Decorative Panels", path: "/laminates" }
  ];

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
              <span>7080757272</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span>kesarwanihardware05@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin size={16} />
            <Youtube size={16} className="hover:text-yellow-200 cursor-pointer" />
            <Instagram size={16} className="hover:text-yellow-200 cursor-pointer" />
            <Facebook size={16} className="hover:text-yellow-200 cursor-pointer" />
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
              <h1 className="text-xl font-bold text-gray-800">kesarwani Hardware</h1>
              <p className="text-sm text-gray-600">Since 1993</p>
              <p className="text-xs text-gray-500">Crafting Spaces with Quality & Style</p>
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

            <Link to="/contact" className="text-gray-700 hover:text-yellow-600">Contact</Link>
          </nav>

          <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-full">
            GET A FREE QUOTE
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
