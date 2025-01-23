import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Solar Power Bank",
    price: 79.99,
    description: "Charge your devices using pure solar energy",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Smart Water Filter",
    price: 129.99,
    description: "Clean water without plastic waste",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Eco Phone Case",
    price: 39.99,
    description: "Biodegradable protection for your device",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Wind-Up Radio",
    price: 59.99,
    description: "No batteries needed, ever",
    image: "/placeholder.svg"
  }
];

export const ProductGrid = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-eco-accent mb-12 text-center">Featured Eco Gadgets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 animate-float">
              <div className="p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4 bg-eco-secondary"
                />
                <h3 className="text-xl font-semibold text-eco-accent mb-2">{product.name}</h3>
                <p className="text-eco-primary mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-eco-accent">${product.price}</span>
                  <Button className="bg-eco-primary hover:bg-eco-accent text-white rounded-full">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};