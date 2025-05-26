
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[500px] bg-gradient-to-r from-black/60 to-black/40 flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Welcome to Kesarwani Hardware
          </h1>
          <p className="text-xl mb-8 text-yellow-200">
            Your One-Stop Shop for Doors, Hardware, Interiors & Kitchen Solutions in Pratapgarh
          </p>
          <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 text-lg rounded-full">
            GET A FREE QUOTE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
