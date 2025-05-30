
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-slate-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-yellow-200/30 to-orange-300/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-blue-200/30 to-purple-300/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group animate-fade-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="KESARWANI SANITARY WARE Store"
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full mb-6">
              <p className="text-yellow-700 font-semibold text-sm uppercase tracking-wider">TRUSTED HARDWARE & INTERIOR SOLUTIONS SINCE DAY ONE</p>
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-8 leading-tight">
              About KESARWANI SANITARY WARE
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              At KESARWANI SANITARY WARE, we believe in offering more than just products — we provide quality, style, and service you can rely on. 
              Located in Pratapgarh, Uttar Pradesh, our store is your go-to destination for doors, plywood, glass railings, UPVC solutions, 
              wallpapers, laminates, kitchen appliances, and more. With a commitment to excellence and a wide range of top-quality 
              materials, we help homeowners, builders, and interior designers bring their visions to life.
            </p>
            <div className="transform hover:scale-105 transition-all duration-300">
              <Button className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
                <span className="group-hover:translate-x-1 transition-transform duration-300">Know More...</span>
                <div className="ml-2 w-5 h-5 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors duration-300"></div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
