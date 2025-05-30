
import { MapPin, Youtube, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-0 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Info */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                <div className="text-white font-bold text-xl">K</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">KESARWANI SANITARY WARE</h3>
                <p className="text-sm text-gray-600">Since 1993</p>
                <p className="text-xs text-gray-500">Where Quality Meets Design</p>
              </div>
            </Link>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Get in touch</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Infront of Hanuman Mandir, Babaganj Pratapgarh, Bela Pratapgarh, Uttar Pradesh 230001</p>
              <p>+91 80901 40600</p>
              <p>kesarwanisanitaryhardware@gmail.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-gray-600 hover:text-yellow-600">Home</Link>
              <Link to="/gallery" className="block text-sm text-gray-600 hover:text-yellow-600">Gallery</Link>
              <Link to="/contact" className="block text-sm text-gray-600 hover:text-yellow-600">Contact</Link>
            </div>
            <Button className="mt-4 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-full text-sm">
              GET A QUOTE
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-yellow-600 pt-6 pb-6 bg-yellow-600 -mx-4 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-white">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <MapPin size={20} className="hover:text-yellow-200 cursor-pointer" />
              <Youtube size={20} className="hover:text-yellow-200 cursor-pointer" />
              <Instagram size={20} className="hover:text-yellow-200 cursor-pointer" />
              <Facebook size={20} className="hover:text-yellow-200 cursor-pointer" />
            </div>
            <p className="text-sm text-center">
              © 2025 kesarwanihardware.com. Website Design By Grow your Business
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
