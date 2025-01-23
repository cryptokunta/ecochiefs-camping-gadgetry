import { Tent, Compass, Mountain, Bird } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CampingSection = () => {
  const features = [
    {
      icon: Tent,
      title: "Eco-Friendly Camping",
      description: "Sustainable gear for minimal environmental impact"
    },
    {
      icon: Compass,
      title: "Wildlife Observation",
      description: "Tools for responsible wildlife watching"
    },
    {
      icon: Mountain,
      title: "Nature Photography",
      description: "Equipment for capturing nature's beauty"
    },
    {
      icon: Bird,
      title: "Bird Watching",
      description: "Specialized gear for bird enthusiasts"
    }
  ];

  return (
    <div className="bg-eco-light py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-eco-accent mb-4">
            For Wildlife & Nature Lovers
          </h2>
          <p className="text-xl text-eco-primary max-w-2xl mx-auto">
            Discover our specially curated collection of eco-friendly camping gear designed for those who want to experience nature while preserving it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <feature.icon className="w-12 h-12 text-eco-primary" />
              </div>
              <h3 className="text-xl font-semibold text-eco-accent mb-2">
                {feature.title}
              </h3>
              <p className="text-eco-primary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="relative rounded-xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
            alt="Wildlife and camping"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-eco-accent/80 to-transparent flex items-center">
            <div className="text-white ml-12 max-w-lg">
              <h3 className="text-3xl font-bold mb-4">
                Connect with Nature
              </h3>
              <p className="mb-6">
                Our eco-friendly camping equipment helps you get closer to wildlife while maintaining a respectful distance and minimizing your environmental footprint.
              </p>
              <Button className="bg-eco-secondary hover:bg-eco-primary text-eco-accent hover:text-white transition-colors">
                Explore Gear
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};