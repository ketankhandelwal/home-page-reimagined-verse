import { MapPin, Mail, Phone, Send, User, MessageSquare, Home, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm, ValidationError } from '@formspree/react';
import { useState } from "react";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mvgrzedv");
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    category: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCategoryChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      category: value
    }));
  };

  if (state.succeeded) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
          <p className="text-gray-600">Your message has been sent successfully. We'll get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <section id="contact-section" className="py-20 bg-gradient-to-br from-gray-50 via-white to-yellow-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-yellow-600 font-semibold mb-3 uppercase tracking-widest text-sm">GET IN TOUCH WITH US</p>
          <h2 className="text-5xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-gray-800 to-yellow-600 bg-clip-text text-transparent">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your space? Our expert team is here to help you every step of the way. 
            Get your free consultation today and discover the perfect solutions for your project.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Info Card */}
          <div className="relative group animate-fade-in">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-gradient-to-br from-yellow-600 via-yellow-500 to-orange-500 text-white p-10 rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-6 translate-x-6"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-4 -translate-x-4"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-yellow-100 font-medium text-sm uppercase tracking-wide">Contact Information</p>
                    <h3 className="text-2xl font-bold">Let's Start a Conversation</h3>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4 group/item hover:transform hover:translate-x-2 transition-transform duration-300">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm group-hover/item:bg-white/30 transition-colors duration-300">
                      <MapPin className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-white">Visit Our Showroom</h4>
                      <p className="text-yellow-50 leading-relaxed">
                        Infront of Hanuman Mandir, Babaganj Pratapgarh<br />
                        Bela Pratapgarh, Uttar Pradesh 230001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group/item hover:transform hover:translate-x-2 transition-transform duration-300">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm group-hover/item:bg-white/30 transition-colors duration-300">
                      <Mail className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-white">Email Us</h4>
                      <p className="text-yellow-50">kesarwanisanitarywares@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group/item hover:transform hover:translate-x-2 transition-transform duration-300">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm group-hover/item:bg-white/30 transition-colors duration-300">
                      <Phone className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-white">Call Us</h4>
                      <p className="text-yellow-50 text-xl font-semibold">+91 80901 40600</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                  <h4 className="font-bold text-lg mb-3">Business Hours</h4>
                  <div className="space-y-2 text-yellow-50">
                    <div className="flex justify-between">
                      <span>Sunday - Friday</span>
                      <span className="font-semibold">10:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-semibold">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="relative group animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 transform hover:scale-[1.02] transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full -translate-y-6 translate-x-6 opacity-50"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-yellow-600 font-medium text-sm uppercase tracking-wide">Send us a message</p>
                    <h3 className="text-2xl font-bold text-gray-800">Get Your Free Quote</h3>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-yellow-600 transition-colors duration-300" />
                      <Input 
                        placeholder="First Name" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="pl-12 h-14 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500" 
                      />
                      <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
                    </div>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-yellow-600 transition-colors duration-300" />
                      <Input 
                        placeholder="Last Name" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="pl-12 h-14 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500" 
                      />
                      <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-yellow-600 transition-colors duration-300" />
                      <Input 
                        placeholder="Your Email" 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="pl-12 h-14 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500" 
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                    <div className="relative group">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-yellow-600 transition-colors duration-300" />
                      <Input 
                        placeholder="Your Phone" 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="pl-12 h-14 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500" 
                      />
                      <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                    </div>
                  </div>

                  <div className="relative group">
                    <Home className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-yellow-600 transition-colors duration-300" />
                    <Input 
                      placeholder="Your Address" 
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="pl-12 h-14 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500" 
                    />
                    <ValidationError prefix="Address" field="address" errors={state.errors} />
                  </div>

                  <div className="relative group">
                    <Package className="absolute left-4 top-6 text-gray-400 w-5 h-5 group-focus-within:text-yellow-600 transition-colors duration-300 z-10" />
                    <Select onValueChange={handleCategoryChange} required>
                      <SelectTrigger className="pl-12 h-14 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:bg-white transition-all duration-300 text-gray-800">
                        <SelectValue placeholder="Select Product Category" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-2 border-gray-200 rounded-xl shadow-xl">
                        <SelectItem value="tiles" className="py-3 px-4 hover:bg-yellow-50 rounded-lg">🚪 Tiles & Marbels</SelectItem>
                        <SelectItem value="sanitary" className="py-3 px-4 hover:bg-yellow-50 rounded-lg">🪵 Sanitary</SelectItem>
                        <SelectItem value="hardware" className="py-3 px-4 hover:bg-yellow-50 rounded-lg">🔧 Faucets & Showers</SelectItem>
                        <SelectItem value="kitchen" className="py-3 px-4 hover:bg-yellow-50 rounded-lg">🍳 PVC Doors</SelectItem>
                        <SelectItem value="bathroom" className="py-3 px-4 hover:bg-yellow-50 rounded-lg">🪟 Bathroom Accessroies </SelectItem>
                        <SelectItem value="interior" className="py-3 px-4 hover:bg-yellow-50 rounded-lg">🏠 Kitchen Slabs</SelectItem>
                      </SelectContent>
                    </Select>
                    <ValidationError prefix="Category" field="category" errors={state.errors} />
                  </div>

                  <div className="relative group">
                    <MessageSquare className="absolute left-4 top-6 text-gray-400 w-5 h-5 group-focus-within:text-yellow-600 transition-colors duration-300" />
                    <Textarea 
                      placeholder="Tell us about your project requirements..." 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="pl-12 pt-6 min-h-[140px] bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500 resize-none" 
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={state.submitting}
                    className="w-full h-16 bg-gradient-to-r from-yellow-600 via-yellow-500 to-orange-500 hover:from-yellow-700 hover:via-yellow-600 hover:to-orange-600 text-white text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 group"
                  >
                    <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                    {state.submitting ? 'Sending...' : 'Send Message & Get Free Quote'}
                  </Button>
                </form>

                <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                  <p className="text-sm text-gray-600 text-center">
                    <span className="font-semibold text-yellow-700">🛡️ Your Privacy Matters:</span> We respect your privacy and will never share your information with third parties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
