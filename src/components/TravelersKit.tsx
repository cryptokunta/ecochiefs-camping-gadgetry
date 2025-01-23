import { Backpack, MapPin, Compass, Binoculars } from "lucide-react";
import { Button } from "@/components/ui/button";

type KitCategory = {
  icon: React.ElementType;
  title: string;
  description: string;
  items: string[];
};

const categories: KitCategory[] = [
  {
    icon: Backpack,
    title: "Essential Gear",
    description: "Must-have eco-friendly travel equipment",
    items: ["Solar Charger", "Reusable Water Bottle", "Bamboo Utensils"]
  },
  {
    icon: MapPin,
    title: "Navigation Tools",
    description: "Find your way sustainably",
    items: ["Solar Compass", "Paper Maps", "Eco-friendly GPS"]
  },
  {
    icon: Compass,
    title: "Adventure Gear",
    description: "Sustainable equipment for explorers",
    items: ["Recycled Backpack", "Bio-degradable Tent", "Hemp Ropes"]
  },
  {
    icon: Binoculars,
    title: "Observation Kit",
    description: "Watch wildlife responsibly",
    items: ["Eco Binoculars", "Nature Guide", "Bird Call Device"]
  }
];

export const TravelersKit = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-eco-accent mb-4">
            Eco Traveler's Kit
          </h2>
          <p className="text-xl text-eco-primary max-w-2xl mx-auto">
            Everything you need for sustainable travel and adventure, carefully selected to minimize environmental impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-eco-light p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <category.icon className="w-12 h-12 text-eco-primary" />
              </div>
              <h3 className="text-xl font-semibold text-eco-accent mb-2">
                {category.title}
              </h3>
              <p className="text-eco-primary mb-4">
                {category.description}
              </p>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex}
                    className="text-eco-primary flex items-center justify-between"
                  >
                    <span>{item}</span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="hover:bg-eco-secondary hover:text-eco-accent"
                    >
                      View
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="relative rounded-xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="Eco-friendly travel gear"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-eco-accent/80 to-transparent flex items-center">
            <div className="text-white ml-12 max-w-lg">
              <h3 className="text-3xl font-bold mb-4">
                Start Your Eco Journey
              </h3>
              <p className="mb-6">
                Get equipped with sustainable travel gear that helps preserve the places you explore. Our carefully curated kits make responsible travel easier.
              </p>
              <Button className="bg-eco-secondary hover:bg-eco-primary text-eco-accent hover:text-white transition-colors">
                Explore Kits
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};