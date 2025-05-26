
import { Award, Package, Users, Handshake, FileText, DollarSign } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Award,
      title: "Customer Satisfaction First",
      description: "We don't just sell products — we build relationships. Your satisfaction is our priority, every step of the way."
    },
    {
      icon: Package,
      title: "Easy Delivery Options",
      description: "We provide convenient delivery services, ensuring your materials arrive safely and on time."
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Our knowledgeable team helps you choose the right products based on your specific needs, style, and budget."
    },
    {
      icon: Handshake,
      title: "Wide Product Range",
      description: "From doors and plywood to kitchen appliances and wallpapers — find everything under one roof."
    },
    {
      icon: FileText,
      title: "Quality You Can Trust",
      description: "We offer only trusted, branded, and tested materials that guarantee durability and long-term satisfaction."
    },
    {
      icon: DollarSign,
      title: "Local & Reliable",
      description: "Proudly serving Pratapgarh and surrounding areas with honest pricing, fast response, and dependable stock."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-yellow-600 font-medium mb-2">WHY CUSTOMERS ACROSS PRATAPGARH CHOOSE KESARWANI HARDWARE AGAIN AND AGAIN.</p>
          <h2 className="text-4xl font-bold text-gray-800">What Makes Us Different</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                <benefit.icon className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
