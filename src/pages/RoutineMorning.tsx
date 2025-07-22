import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { Play, ShoppingCart, Plus } from "lucide-react";

const morningRoutine = [
  {
    id: 1,
    step: 1,
    title: "Cleanse",
    productName: "Plum Green Tea Pore Cleansing Face Wash",
    why: "Helps control excess oil and prevent breakouts, perfect for your oily/combination skin.",
    price: "₹275",
    image: "🧽"
  },
  {
    id: 2,
    step: 2,
    title: "Treat",
    productName: "Plum 10% Niacinamide & Rice Water Face Serum",
    why: "Reduces blemishes and controls oil production for your acne-prone areas.",
    price: "₹499",
    image: "💧"
  },
  {
    id: 3,
    step: 3,
    title: "Moisturize & Protect",
    productName: "Plum Hello Aloe Just Hello! Sunscreen SPF 50",
    why: "Provides broad spectrum protection against high UV levels in India while hydrating your skin.",
    price: "₹399",
    image: "☀️"
  }
];

export default function RoutineMorning() {
  const navigate = useNavigate();
  const [addedToCart, setAddedToCart] = useState<number[]>([]);

  const handleAddToCart = (productId: number) => {
    setAddedToCart(prev => [...prev, productId]);
    // Could show a toast notification here
  };

  const handleShopAll = () => {
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header 
        title="Your Daily Glow Routine" 
        showProfile={true}
      />
      
      <div className="px-6 py-6 space-y-6">
        {/* Routine Tabs */}
        <div className="flex bg-muted rounded-xl p-1">
          <button className="flex-1 py-3 px-4 rounded-lg bg-primary text-primary-foreground font-medium transition-all">
            Morning Routine
          </button>
          <button 
            onClick={() => navigate('/routine/evening')}
            className="flex-1 py-3 px-4 rounded-lg text-muted-foreground hover:text-foreground transition-all"
          >
            Evening Routine
          </button>
        </div>

        {/* Routine Introduction */}
        <div className="bg-gradient-soft p-6 rounded-2xl">
          <h2 className="text-xl font-bold text-foreground mb-2">Good Morning! ✨</h2>
          <p className="text-muted-foreground">
            Start your day with this personalized routine designed for your combination skin and environmental factors.
          </p>
        </div>

        {/* Routine Steps */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Your Morning Steps</h3>
          
          {morningRoutine.map((item) => (
            <div key={item.id} className="bg-card border border-border rounded-2xl p-6 space-y-4">
              {/* Step Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                  <div>
                    <Badge variant="outline" className="text-xs">
                      Step {item.step}: {item.title}
                    </Badge>
                  </div>
                </div>
                <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                  <Play className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>

              {/* Product Info */}
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center text-2xl">
                  {item.image}
                </div>
                <div className="flex-1 space-y-2">
                  <button 
                    onClick={() => navigate(`/product/${item.id}`)}
                    className="font-semibold text-foreground hover:text-primary transition-colors text-left block"
                  >
                    {item.productName}
                  </button>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-medium text-accent-foreground">Why this product for you:</span> {item.why}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary text-lg">{item.price}</span>
                    <Button 
                      size="sm"
                      variant={addedToCart.includes(item.id) ? "secondary" : "outline"}
                      onClick={() => handleAddToCart(item.id)}
                      disabled={addedToCart.includes(item.id)}
                      className="flex items-center gap-2"
                    >
                      {addedToCart.includes(item.id) ? (
                        "Added ✓"
                      ) : (
                        <>
                          <Plus className="h-4 w-4" />
                          Add to Cart
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shop All CTA */}
        <div className="bg-primary-light p-6 rounded-2xl text-center space-y-4">
          <h3 className="font-bold text-primary text-lg">Complete Your Morning Glow</h3>
          <p className="text-primary/80 text-sm">
            Get all products in your personalized routine with one tap
          </p>
          <div className="flex items-center justify-between">
            <div className="text-left">
              <p className="text-sm text-primary/80">Total routine value</p>
              <p className="text-2xl font-bold text-primary">₹1,173</p>
            </div>
            <Button 
              onClick={handleShopAll}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Shop My Routine
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Shop Button */}
      <button 
        onClick={handleShopAll}
        className="fixed bottom-24 right-6 w-14 h-14 bg-gradient-primary text-primary-foreground rounded-full shadow-glow flex items-center justify-center hover:scale-110 transition-transform z-40"
      >
        <ShoppingCart className="h-6 w-6" />
      </button>

      <BottomNav />
    </div>
  );
}