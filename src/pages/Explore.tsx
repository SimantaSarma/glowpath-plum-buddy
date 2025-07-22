import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShoppingCart, Plus, ArrowRight } from "lucide-react";

const recommendedAddOns = [
  {
    id: 9,
    name: "Plum Chamomile & White Tea Face Mask",
    price: "₹345",
    image: "🎭",
    benefit: "Weekly deep hydration"
  },
  {
    id: 10,
    name: "Plum Bright Years Eye Cream",
    price: "₹399",
    image: "👁️",
    benefit: "Dark circle treatment"
  },
  {
    id: 11,
    name: "Plum Lip Balm with SPF 15",
    price: "₹175",
    image: "💋",
    benefit: "Lip protection"
  }
];

const concerns = [
  { id: "acne", name: "Acne", icon: "🎯", color: "bg-red-100 text-red-600" },
  { id: "hydration", name: "Hydration", icon: "💧", color: "bg-blue-100 text-blue-600" },
  { id: "brightening", name: "Brightening", icon: "✨", color: "bg-yellow-100 text-yellow-600" },
  { id: "anti-aging", name: "Anti-Aging", icon: "🌟", color: "bg-purple-100 text-purple-600" },
  { id: "sensitivity", name: "Sensitivity", icon: "🌸", color: "bg-pink-100 text-pink-600" },
  { id: "sun-protection", name: "Sun Protection", icon: "☀️", color: "bg-orange-100 text-orange-600" }
];

const categories = [
  { id: "cleansers", name: "Cleansers", icon: "🧽", count: 12 },
  { id: "serums", name: "Serums", icon: "💧", count: 18 },
  { id: "moisturizers", name: "Moisturizers", icon: "🥛", count: 15 },
  { id: "sunscreens", name: "Sunscreens", icon: "☀️", count: 8 },
  { id: "masks", name: "Face Masks", icon: "🎭", count: 10 },
  { id: "eye-care", name: "Eye Care", icon: "👁️", count: 6 }
];

export default function Explore() {
  const navigate = useNavigate();

  const handleAddToCart = (productId: number) => {
    // Add to cart functionality
    console.log(`Added product ${productId} to cart`);
  };

  const handleCategoryClick = (categoryId: string) => {
    // Navigate to filtered product listing
    console.log(`Navigate to category: ${categoryId}`);
  };

  const handleConcernClick = (concernId: string) => {
    // Navigate to concern-based product recommendations
    console.log(`Navigate to concern: ${concernId}`);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header 
        title="Explore Your Glow" 
        showProfile={true}
      />
      
      <ScrollArea className="h-full">
        <div className="px-6 py-6 space-y-8">
          {/* Hero Section */}
          <div className="bg-gradient-soft p-6 rounded-2xl text-center space-y-3">
            <h2 className="text-xl font-bold text-foreground">Discover More for Your Skin</h2>
            <p className="text-muted-foreground">
              Explore additional products and treatments to enhance your glow journey
            </p>
          </div>

          {/* Recommended Add-Ons */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Recommended Add-Ons</h3>
              <Button variant="ghost" size="sm" className="text-primary">
                View All <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
            
            <ScrollArea className="w-full">
              <div className="flex gap-4 pb-4">
                {recommendedAddOns.map((product) => (
                  <div key={product.id} className="min-w-[200px] bg-card border border-border rounded-xl p-4 space-y-3">
                    <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center text-2xl mx-auto">
                      {product.image}
                    </div>
                    <div className="text-center space-y-2">
                      <h4 className="font-medium text-foreground text-sm leading-tight">
                        {product.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">{product.benefit}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-primary">{product.price}</span>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleAddToCart(product.id)}
                          className="h-8 w-8 p-0"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </section>

          {/* Shop by Concern */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Shop by Concern</h3>
            <div className="grid grid-cols-2 gap-3">
              {concerns.map((concern) => (
                <button
                  key={concern.id}
                  onClick={() => handleConcernClick(concern.id)}
                  className="p-4 bg-card border border-border rounded-xl hover:shadow-soft transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${concern.color}`}>
                      {concern.icon}
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-foreground text-sm">{concern.name}</p>
                      <p className="text-xs text-muted-foreground">Targeted solutions</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Shop by Category */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Shop by Category</h3>
            <div className="grid grid-cols-2 gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className="p-4 bg-card border border-border rounded-xl hover:shadow-soft transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center text-2xl mx-auto">
                      {category.icon}
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{category.name}</p>
                      <p className="text-xs text-muted-foreground">{category.count} products</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Special Offers */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Special for You</h3>
            <div className="bg-gradient-primary p-6 rounded-2xl text-center space-y-4">
              <div className="text-primary-foreground">
                <h4 className="font-bold text-lg">New Customer Offer!</h4>
                <p className="text-sm opacity-90">Get 20% off on your first routine purchase</p>
              </div>
              <Button 
                variant="secondary"
                onClick={() => navigate('/routine/morning')}
                className="bg-white text-primary hover:bg-white/90"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Shop Your Routine
              </Button>
            </div>
          </section>

          {/* Educational Content */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Learn & Glow</h3>
            <div className="space-y-3">
              {[
                { title: "The Science Behind Niacinamide", type: "Article", duration: "3 min read" },
                { title: "Double Cleansing for Indian Skin", type: "Guide", duration: "5 min read" },
                { title: "Building Your First Skincare Routine", type: "Video", duration: "2 min watch" }
              ].map((content, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-light rounded-lg flex items-center justify-center">
                    <span className="text-lg">{content.type === 'Video' ? '🎥' : '📖'}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground text-sm">{content.title}</h4>
                    <p className="text-xs text-muted-foreground">{content.type} • {content.duration}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </section>
        </div>
      </ScrollArea>

      <BottomNav />
    </div>
  );
}