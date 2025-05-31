import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { CreditCard, Calculator, Shield, Clock } from "lucide-react";

const EMISection = () => {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const interestRate = 7; // 7% annual interest rate

  const features = [
    {
      icon: CreditCard,
      title: "Easy EMI Options",
      description: "Flexible payment plans with competitive interest rates starting at 7% p.a."
    },
    {
      icon: Calculator,
      title: "Quick Calculation",
      description: "Calculate your EMI instantly with our easy-to-use calculator"
    },
    {
      icon: Shield,
      title: "Secure Process",
      description: "100% secure and transparent EMI process with no hidden charges"
    },
    {
      icon: Clock,
      title: "Fast Approval",
      description: "Get instant approval for your EMI application within minutes"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  // Calculate EMI using the formula: EMI = P * r * (1 + r)^n / ((1 + r)^n - 1)
  const calculateEMI = (principal: number, rate: number, time: number) => {
    const monthlyRate = rate / 12 / 100; // Convert annual rate to monthly rate
    const numberOfPayments = time;
    
    const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments) / 
                (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    return Math.round(emi);
  };

  useEffect(() => {
    const calculatedEMI = calculateEMI(loanAmount, interestRate, tenure);
    setEmi(calculatedEMI);
    setTotalAmount(calculatedEMI * tenure);
    setTotalInterest(calculatedEMI * tenure - loanAmount);
  }, [loanAmount, tenure]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section id="emi" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
            Easy EMI Options
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Make your dream home a reality with our flexible EMI options. Calculate your monthly payments and choose the plan that works best for you.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <feature.icon className="w-8 h-8 text-yellow-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* EMI Calculator */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Calculate Your EMI
            </h3>
            
            <div className="space-y-6">
              {/* Loan Amount Slider */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">Loan Amount</label>
                  <span className="text-sm font-medium text-gray-900">{formatCurrency(loanAmount)}</span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="1000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{formatCurrency(10000)}</span>
                  <span>{formatCurrency(500000)}</span>
                </div>
              </div>

              {/* Tenure Slider */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">Tenure (Months)</label>
                  <span className="text-sm font-medium text-gray-900">{tenure} months</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="36"
                  step="3"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>3 months</span>
                  <span>36 months</span>
                </div>
              </div>

              {/* EMI Details */}
              <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Monthly EMI</span>
                  <span className="text-xl font-bold text-gray-900">{formatCurrency(emi)}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Total Interest</span>
                  <span className="text-gray-900">{formatCurrency(totalInterest)}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Total Amount</span>
                  <span className="text-gray-900">{formatCurrency(totalAmount)}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Interest Rate</span>
                  <span className="text-gray-900">{interestRate}% p.a.</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                Apply for EMI
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EMISection; 