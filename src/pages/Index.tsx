import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { Benefits } from "@/components/Benefits";
import { Newsletter } from "@/components/Newsletter";
import { CampingSection } from "@/components/CampingSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-eco-light">
      <Hero />
      <ProductGrid />
      <CampingSection />
      <Benefits />
      <Newsletter />
    </div>
  );
};

export default Index;