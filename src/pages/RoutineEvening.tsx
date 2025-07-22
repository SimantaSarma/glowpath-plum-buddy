import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { Play, ShoppingCart, Plus, Moon } from "lucide-react";

const eveningRoutine = [
  {
    id: 4,
    step: 1,
    title: "Double Cleanse",
    productName: "Plum Cleansing Balm with Sea Buckthorn",
    why: "Removes pollution, sunscreen and makeup buildup from your day in India's environment.",
    price: "₹395",
    image: "🌿"
  },
  {
    id: 5,
    step: 2,
    title: "Gentle Cleanse",
    productName: "Plum Green Tea Pore Cleansing Face Wash",
    why: "Second cleanse to ensure all impurities are removed without over-drying.",
    price: "₹275",
    image: "🧽"
  },
  {
    id: 6,
    step: 3,
    title: "Exfoliate (2x/week)",
    productName: "Plum 2% Salicylic Acid Face Serum",
    why: "Unclogs pores and prevents breakouts while you sleep. Perfect for your acne concerns.",
    price: "₹449",
    image: "✨"
  },
  {
    id: 7,
    step: 4,
    title: "Hydrate & Repair",
    productName: "Plum Bright Years Dark Circle Eye Cream",
    why: "Targets under-eye concerns and provides intensive overnight hydration.",
    price: "₹399",
    image: "👁️"
  },
  {
    id: 8,
    step: 5,
    title: "Night Moisturize",
    productName: "Plum Hello Aloe Refreshing Face Gel",
    why: "Lightweight hydration that won't clog pores while supporting overnight skin repair.",
    price: "₹295",
    image: "🌙"
  }
];

export default function RoutineEvening() {
  const navigate = useNavigate();
  const [addedToCart, setAddedToCart] = useState<number[]>([]);

  const handleAddToCart = (productId: number) => {
    setAddedToCart(prev => [...prev, productId]);
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
          <button 
            onClick={() => navigate('/routine/morning')}
            className="flex-1 py-3 px-4 rounded-lg text-muted-foreground hover:text-foreground transition-all"
          >
            Morning Routine
          </button>
          <button className="flex-1 py-3 px-4 rounded-lg bg-primary text-primary-foreground font-medium transition-all">
            Evening Routine
          </button>
        </div>

        {/* Routine Introduction */}
        <div className="bg-gradient-soft p-6 rounded-2xl">
          <h2 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
            <Moon className="h-6 w-6 text-primary" />
            Wind Down & Repair
          </h2>
          <p className="text-muted-foreground">
            Your evening routine focuses on deep cleansing, treatment, and overnight repair after exposure to pollution and environmental stress.
          </p>
        </div>

        {/* Routine Steps */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Your Evening Steps</h3>
          
          {eveningRoutine.map((item) => (
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

              {/* Special notes for certain products */}
              {item.step === 3 && (
                <div className="bg-accent-light p-3 rounded-xl">
                  <p className="text-xs text-accent-foreground">
                    💡 <span className="font-medium">Pro tip:</span> Use this only 2-3 times per week. Start with once weekly if you're new to acids.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Shop All CTA */}
        <div className="bg-primary-light p-6 rounded-2xl text-center space-y-4">
          <h3 className="font-bold text-primary text-lg">Complete Your Evening Ritual</h3>
          <p className="text-primary/80 text-sm">
            Transform your skin overnight with this complete evening routine
          </p>
          <div className="flex items-center justify-between">
            <div className="text-left">
              <p className="text-sm text-primary/80">Total routine value</p>
              <p className="text-2xl font-bold text-primary">₹1,813</p>
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