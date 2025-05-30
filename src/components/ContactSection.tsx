
import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactSection = () => {
  return (
    <section id="contact-section" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-yellow-600 text-white p-8 rounded-2xl animate-fade-in">
            <p className="text-yellow-200 font-medium mb-2">GET IN TOUCH</p>
            <h2 className="text-3xl font-bold mb-8">Contact Kesarwani Hardware</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                  <p className="text-yellow-100">
                    Near Hanuman Mandir, Babaganj Pratapgarh, Bela Pratapgarh,<br />
                    Uttar Pradesh 230001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Contact Email</h3>
                  <p className="text-yellow-100">kesarwanihardware05@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone Number</h3>
                  <p className="text-yellow-100">+91 7080757272</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl animate-fade-in" style={{animationDelay: '0.3s'}}>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="First Name" className="bg-white" />
                <Input placeholder="Last Name" className="bg-white" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Your Email" type="email" className="bg-white" />
                <Input placeholder="Your Phone" type="tel" className="bg-white" />
              </div>

              <Input placeholder="Your Address" className="bg-white" />

              <Select>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="doors">Doors</SelectItem>
                  <SelectItem value="plywood">Plywood</SelectItem>
                  <SelectItem value="hardware">Hardware</SelectItem>
                  <SelectItem value="kitchen">Kitchen Solutions</SelectItem>
                  <SelectItem value="glass">Glass Railing</SelectItem>
                  <SelectItem value="interior">Interior Design</SelectItem>
                </SelectContent>
              </Select>

              <Textarea 
                placeholder="Message" 
                className="bg-white min-h-[120px]" 
              />

              <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 text-lg rounded-full transform hover:scale-105 transition-all duration-300">
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
