import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="bg-eco-light min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-eco-accent mb-6">
            Eco-Friendly Tech for Sustainable Living
          </h1>
          <p className="text-xl text-eco-primary mb-8">
            Discover our curated collection of sustainable gadgets that help you live in harmony with nature while embracing modern technology.
          </p>
          <Button className="bg-eco-primary hover:bg-eco-accent text-white px-8 py-6 text-lg rounded-full transition-all duration-300 flex items-center gap-2">
            Shop Now <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};