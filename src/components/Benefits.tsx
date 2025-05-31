import { motion } from "framer-motion";
import { CheckCircle, Truck, CreditCard, Users, ShieldCheck, Clock } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Easy Delivery Options",
      description: "Fast and reliable delivery to your doorstep across Pratapgarh and nearby areas",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Flexible Payment Plans",
      description: "Multiple payment options including EMI facilities for your convenience",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Consultation",
      description: "Professional guidance from our experienced team for all your hardware needs",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Premium quality products with warranty and after-sales support",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "30+ Years Experience",
      description: "Three decades of trusted service in the hardware and construction industry",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Complete Solutions",
      description: "One-stop shop for tiles, sanitary, Bathroom, and interior solutions",
      color: "from-indigo-500 to-indigo-600"
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
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-200/20 to-purple-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full mb-4">
            <p className="text-yellow-700 font-semibold text-sm uppercase tracking-wider">WHY CHOOSE US</p>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight">
            Benefits of Shopping with Us
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            We're committed to providing you with the best shopping experience, from product selection 
            to after-sales service. Here's what makes us your preferred choice for all your home improvement needs.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform hover:scale-[1.02] transition-all duration-500">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform duration-500`}>
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
