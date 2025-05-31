import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, Star, Users, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Premium Quality",
      description: "We source only the finest materials and products from trusted manufacturers."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Our experienced team provides professional guidance and support."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Trusted Service",
      description: "Building trust through reliable service and customer satisfaction."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-slate-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-yellow-200/30 to-orange-300/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-blue-200/30 to-purple-300/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="KESARWANI SANITARY WARE Store"
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full mb-4">
                <p className="text-yellow-700 font-semibold text-sm uppercase tracking-wider">ABOUT US</p>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-4">
                Your Trusted Partner in Home Improvement
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                With over 15 years of experience, KESARWANI SANITARY WARE has been serving the community 
                with premium quality products and exceptional service. We take pride in being Pratapgarh's 
                go-to destination for all your home improvement needs.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-6 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Learn More About Us
              </Button>
              <Button variant="outline" className="border-2 border-gray-200 hover:border-gray-300 text-gray-700 px-8 py-6 text-lg rounded-full backdrop-blur-sm hover:bg-gray-50 transition-all duration-300">
                Visit Our Store
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
