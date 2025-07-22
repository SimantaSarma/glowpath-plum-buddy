import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, ShoppingCart, Play, Heart, Share2 } from "lucide-react";

const products = {
  "1": {
    id: 1,
    name: "Plum Green Tea Pore Cleansing Face Wash",
    type: "Face Wash",
    price: "₹275",
    rating: 4.5,
    reviews: 2840,
    image: "🧽",
    tags: ["Face Wash", "Pore Cleansing", "Oil Control"],
    personalizedWhy: "Perfect for your oily/combination skin to control excess oil and prevent breakouts. The green tea helps reduce inflammation and tighten pores.",
    keyBenefits: [
      "Deep pore cleansing without over-drying",
      "Controls excess oil production",
      "Prevents acne and breakouts",
      "Gentle enough for daily use"
    ],
    keyIngredients: [
      { name: "Green Tea", benefit: "Anti-inflammatory, controls oil" },
      { name: "Salicylic Acid", benefit: "Exfoliates and unclogs pores" },
      { name: "Glycolic Acid", benefit: "Gentle exfoliation for smoother skin" }
    ],
    howToUse: "Apply on wet face, gently massage in circular motions for 30 seconds, rinse with lukewarm water. Use twice daily.",
    videoDemo: true
  },
  "2": {
    id: 2,
    name: "Plum 10% Niacinamide & Rice Water Face Serum",
    type: "Face Serum",
    price: "₹499",
    rating: 4.7,
    reviews: 1650,
    image: "💧",
    tags: ["Face Serum", "Reduces Blemishes", "Brightening"],
    personalizedWhy: "Specifically targets your acne concerns and helps control oil production. The 10% niacinamide concentration is perfect for your skin's needs.",
    keyBenefits: [
      "Reduces active acne and blemishes",
      "Controls sebum production",
      "Minimizes appearance of pores",
      "Brightens overall skin tone"
    ],
    keyIngredients: [
      { name: "Niacinamide (10%)", benefit: "Controls oil, reduces spots and pore size" },
      { name: "Rice Water", benefit: "Brightens skin and provides gentle hydration" },
      { name: "Zinc PCA", benefit: "Anti-bacterial, helps with acne" }
    ],
    howToUse: "Apply 2-3 drops to clean skin in the morning. Follow with moisturizer and sunscreen. Start with every other day.",
    videoDemo: true
  }
};

export default function ProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const product = products[id as keyof typeof products];

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    // Show success toast or animation
  };

  const handleShare = () => {
    // Share functionality
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        title={product.name}
        showBack={true}
      />
      
      <div className="px-6 py-6 space-y-6 pb-24">
        {/* Product Image & Basic Info */}
        <div className="text-center space-y-4">
          <div className="w-32 h-32 bg-gradient-soft rounded-3xl mx-auto flex items-center justify-center text-6xl shadow-soft">
            {product.image}
          </div>
          
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-foreground">{product.name}</h1>
            <div className="flex justify-center gap-2 flex-wrap">
              {product.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="bg-primary-light text-primary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{product.rating}</span>
              <span className="text-muted-foreground">({product.reviews} reviews)</span>
            </div>
            <div className="text-3xl font-bold text-primary">{product.price}</div>
          </div>
        </div>

        {/* Personalized Why */}
        <div className="bg-gradient-glow/10 border border-primary/20 rounded-2xl p-6">
          <h3 className="font-bold text-primary mb-3 flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            Why this product is perfect for YOU
          </h3>
          <p className="text-foreground leading-relaxed">{product.personalizedWhy}</p>
        </div>

        {/* Expandable Sections */}
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="benefits" className="bg-card border border-border rounded-xl px-6">
            <AccordionTrigger className="text-left font-semibold">
              Key Benefits
            </AccordionTrigger>
            <AccordionContent className="space-y-2">
              {product.keyBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="ingredients" className="bg-card border border-border rounded-xl px-6">
            <AccordionTrigger className="text-left font-semibold">
              Key Ingredients
            </AccordionTrigger>
            <AccordionContent className="space-y-3">
              {product.keyIngredients.map((ingredient, index) => (
                <div key={index} className="space-y-1">
                  <div className="font-medium text-foreground">{ingredient.name}</div>
                  <div className="text-sm text-muted-foreground">{ingredient.benefit}</div>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="usage" className="bg-card border border-border rounded-xl px-6">
            <AccordionTrigger className="text-left font-semibold flex items-center gap-2">
              How to Use
              {product.videoDemo && <Play className="h-4 w-4 text-primary" />}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground leading-relaxed">{product.howToUse}</p>
              {product.videoDemo && (
                <Button variant="outline" size="sm" className="mt-3 flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  Watch Application Demo
                </Button>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Social Proof */}
        <div className="bg-card border border-border rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-foreground">Customer Reviews</h3>
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map((star) => (
                <Star 
                  key={star} 
                  className={`h-4 w-4 ${star <= Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                />
              ))}
            </div>
          </div>
          <p className="text-muted-foreground text-sm">
            "{product.name} has helped thousands of customers achieve their skin goals. Join the Plum community!"
          </p>
          <Button variant="outline" size="sm" onClick={() => {/* Navigate to reviews */}}>
            See all {product.reviews} reviews
          </Button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsFavorited(!isFavorited)}
            className={`px-4 ${isFavorited ? 'text-red-500 border-red-200' : ''}`}
          >
            <Heart className={`h-4 w-4 ${isFavorited ? 'fill-red-500' : ''}`} />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleShare}
            className="px-4"
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-6">
        <Button 
          onClick={handleAddToCart}
          disabled={isAddedToCart}
          className="w-full py-6 text-lg font-semibold bg-gradient-primary hover:shadow-glow transition-all duration-300"
          size="lg"
        >
          {isAddedToCart ? (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              Added to Cart
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              Add to Cart • {product.price}
            </div>
          )}
        </Button>
      </div>
    </div>
  );
}