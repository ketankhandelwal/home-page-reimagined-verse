
import { CheckCircle, Truck, CreditCard, Users, ShieldCheck, Clock } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Easy Delivery Options",
      description: "Fast and reliable delivery to your doorstep across Pratapgarh and nearby areas"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Flexible Payment Plans",
      description: "Multiple payment options including EMI facilities for your convenience"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Consultation",
      description: "Professional guidance from our experienced team for all your hardware needs"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Premium quality products with warranty and after-sales support"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "30+ Years Experience",
      description: "Three decades of trusted service in the hardware and construction industry"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Complete Solutions",
      description: "One-stop shop for doors, plywood, glass railing, and interior solutions"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-yellow-600 font-medium mb-2 uppercase tracking-wide">WHY CHOOSE KESARWANI HARDWARE</p>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Makes Us Different</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            With over 30 years of experience, we've built our reputation on quality products, 
            exceptional service, and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-6 bg-white rounded-lg shadow-lg border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
