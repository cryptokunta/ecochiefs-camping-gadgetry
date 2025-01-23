import { Backpack, MapPin, Compass, Binoculars } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type KitCategory = {
  icon: React.ElementType;
  title: string;
  description: string;
  items: string[];
  price: number;
};

const categories: KitCategory[] = [
  {
    icon: Backpack,
    title: "Essential Gear",
    description: "Must-have eco-friendly travel equipment",
    items: ["Solar Charger", "Reusable Water Bottle", "Bamboo Utensils"],
    price: 149.99
  },
  {
    icon: MapPin,
    title: "Navigation Tools",
    description: "Find your way sustainably",
    items: ["Solar Compass", "Paper Maps", "Eco-friendly GPS"],
    price: 99.99
  },
  {
    icon: Compass,
    title: "Adventure Gear",
    description: "Sustainable equipment for explorers",
    items: ["Recycled Backpack", "Bio-degradable Tent", "Hemp Ropes"],
    price: 199.99
  },
  {
    icon: Binoculars,
    title: "Observation Kit",
    description: "Watch wildlife responsibly",
    items: ["Eco Binoculars", "Nature Guide", "Bird Call Device"],
    price: 179.99
  }
];

export const TravelersKit = () => {
  const handleAddToCart = (category: KitCategory) => {
    console.log('Adding to cart:', category.title);
    // Here you would typically integrate with a cart system
  };

  return (
    <section className="bg-eco-light py-16" id="travelers-kit">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-eco-accent mb-4">
            Eco Traveler's Kits
          </h2>
          <p className="text-xl text-eco-primary max-w-2xl mx-auto">
            Curated collections of sustainable travel gear, perfect for your next adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {categories.map((category, index) => (
            <Card 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <category.icon className="w-12 h-12 text-eco-primary animate-float" />
              </div>
              <h3 className="text-xl font-semibold text-eco-accent mb-2">
                {category.title}
              </h3>
              <p className="text-eco-primary mb-4">
                {category.description}
              </p>
              <ul className="space-y-2 mb-4">
                {category.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex}
                    className="text-eco-primary flex items-center gap-2"
                  >
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4 border-t border-eco-secondary">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-eco-accent">
                    ${category.price}
                  </span>
                  <Button 
                    onClick={() => handleAddToCart(category)}
                    className="bg-eco-primary hover:bg-eco-accent text-white transition-colors"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="relative rounded-xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
            alt="Eco-friendly travel gear"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-eco-accent/80 to-transparent flex items-center">
            <div className="text-white ml-12 max-w-lg">
              <h3 className="text-3xl font-bold mb-4">
                Start Your Eco Journey Today
              </h3>
              <p className="mb-6">
                Our carefully curated kits are designed for sustainable adventures. Each item is selected for its minimal environmental impact and maximum utility.
              </p>
              <Button className="bg-eco-secondary hover:bg-eco-primary text-eco-accent hover:text-white transition-colors">
                View All Kits
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};