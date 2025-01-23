import { Leaf, Battery, Recycle } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Eco-Friendly Materials",
    description: "All our products are made with sustainable and recyclable materials"
  },
  {
    icon: Battery,
    title: "Energy Efficient",
    description: "Designed to minimize power consumption and maximize battery life"
  },
  {
    icon: Recycle,
    title: "Circular Economy",
    description: "We take back old products for proper recycling and refurbishment"
  }
];

export const Benefits = () => {
  return (
    <div className="bg-eco-secondary py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-eco-accent mb-12 text-center">Why Choose EcoTech</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="mb-6 flex justify-center">
                <benefit.icon className="w-12 h-12 text-eco-primary" />
              </div>
              <h3 className="text-xl font-semibold text-eco-accent mb-4">{benefit.title}</h3>
              <p className="text-eco-primary">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};