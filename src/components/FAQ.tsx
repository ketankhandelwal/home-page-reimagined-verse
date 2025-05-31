import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including cash, credit/debit cards, UPI, net banking, and EMI options. We also offer flexible payment plans for larger purchases."
    },
    {
      question: "Do you provide installation services?",
      answer: "Yes, we provide professional installation services for all our products. Our experienced team ensures proper installation and follows all safety protocols."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 7-day return policy for unused products in their original packaging. Custom-made items and installed products are not eligible for returns."
    },
    {
      question: "Do you offer warranty on products?",
      answer: "Yes, all our products come with manufacturer warranty. The warranty period varies by product category and brand. We also offer extended warranty options."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you'll receive a tracking number via SMS and email. You can track your order status through our website or mobile app."
    },
    {
      question: "Do you offer bulk purchase discounts?",
      answer: "Yes, we offer special discounts for bulk purchases. Please contact our sales team for detailed pricing and available offers."
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
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 via-white to-slate-50 relative overflow-hidden">
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
            <p className="text-yellow-700 font-semibold text-sm uppercase tracking-wider">FREQUENTLY ASKED QUESTIONS</p>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight">
            Have Questions?
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            Find answers to commonly asked questions about our products, services, and policies.
            If you don't find what you're looking for, feel free to contact us.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-left focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
                  <ChevronDown 
                    className={`w-6 h-6 text-gray-500 transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <div 
                  className={`mt-4 text-gray-600 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="leading-relaxed">{faq.answer}</p>
                </div>
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold mb-6">Still Have Questions?</h3>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              Our team is here to help. Contact us for any additional information or assistance.
            </p>
            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
