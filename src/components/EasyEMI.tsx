import { motion } from "framer-motion";
import { CreditCard, Calculator, Shield, Clock, ArrowRight } from "lucide-react";

const EasyEMI = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Flexible Payment Options",
      description: "Choose from various EMI plans with competitive interest rates and flexible tenures."
    },
    {
      icon: Calculator,
      title: "Easy EMI Calculator",
      description: "Calculate your monthly installments instantly with our user-friendly EMI calculator."
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "All EMI transactions are secure and protected with bank-grade encryption."
    },
    {
      icon: Clock,
      title: "Quick Approval",
      description: "Get instant approval for your EMI application with minimal documentation."
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
            <p className="text-yellow-700 font-semibold text-sm uppercase tracking-wider">EASY EMI OPTIONS</p>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight">
            Flexible Payment Plans
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            Make your dream home a reality with our easy EMI options. Choose from various payment plans
            that suit your budget and requirements.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-500">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-500">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* EMI Calculator Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4">Calculate Your EMI</h3>
                <p className="text-gray-300 mb-6">
                  Use our EMI calculator to plan your purchase. Enter the loan amount, interest rate,
                  and tenure to get instant results.
                </p>
                <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                  Try EMI Calculator
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Loan Amount</label>
                    <input
                      type="range"
                      min="10000"
                      max="1000000"
                      step="10000"
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="text-right text-yellow-400 font-semibold">₹50,000</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Tenure (Months)</label>
                    <input
                      type="range"
                      min="3"
                      max="36"
                      step="3"
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="text-right text-yellow-400 font-semibold">12 Months</div>
                  </div>
                  <div className="pt-4 border-t border-gray-700">
                    <div className="flex justify-between text-sm text-gray-300 mb-2">
                      <span>Monthly EMI</span>
                      <span className="text-yellow-400 font-semibold">₹4,500</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-300">
                      <span>Total Interest</span>
                      <span className="text-yellow-400 font-semibold">₹4,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EasyEMI; 