
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Kesarwani Hardware Store"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div>
            <p className="text-yellow-600 font-medium mb-2">TRUSTED HARDWARE & INTERIOR SOLUTIONS SINCE DAY ONE</p>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Kesarwani Hardware</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Kesarwani Hardware, we believe in offering more than just products — we provide quality, style, and service you can rely on. 
              Located in Pratapgarh, Uttar Pradesh, our store is your go-to destination for doors, plywood, glass railings, UPVC solutions, 
              wallpapers, laminates, kitchen appliances, and more. With a commitment to excellence and a wide range of top-quality 
              materials, we help homeowners, builders, and interior designers bring their visions to life.
            </p>
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-full">
              Know More...
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
