import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for subscribing!",
      description: "You'll receive our eco-tech updates soon.",
    });
    setEmail("");
  };

  return (
    <div className="bg-eco-primary py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Join Our Eco Community</h2>
        <p className="text-eco-secondary mb-8 max-w-2xl mx-auto">
          Subscribe to receive updates about new sustainable products, eco-tips, and exclusive offers.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white rounded-full"
            required
          />
          <Button type="submit" className="bg-eco-accent hover:bg-eco-secondary hover:text-eco-accent text-white rounded-full px-8">
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
};