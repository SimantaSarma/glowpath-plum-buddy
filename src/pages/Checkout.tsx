import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { ExternalLink, ShoppingCart, Sparkles } from "lucide-react";

export default function Checkout() {
  const navigate = useNavigate();
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleContinueToCheckout = () => {
    setIsRedirecting(true);
    // Simulate redirect delay
    setTimeout(() => {
      // In a real app, this would redirect to plumgoodness.com
      window.open('https://plumgoodness.com', '_blank');
      setIsRedirecting(false);
    }, 2000);
  };

  useEffect(() => {
    // Auto-redirect after 5 seconds if user doesn't click
    const timer = setTimeout(() => {
      handleContinueToCheckout();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-soft flex flex-col items-center justify-center px-6">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Success Animation */}
        <div className="relative">
          <div className="w-24 h-24 mx-auto relative">
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-ping"></div>
            <div className="absolute inset-2 rounded-full bg-success flex items-center justify-center animate-glow-pulse">
              <ShoppingCart className="h-8 w-8 text-white" />
            </div>
          </div>
          
          {/* Floating sparkles */}
          <div className="absolute top-4 left-4">
            <Sparkles className="h-4 w-4 text-primary-glow animate-bounce" style={{ animationDelay: '0s' }} />
          </div>
          <div className="absolute top-8 right-2">
            <Sparkles className="h-3 w-3 text-accent animate-bounce" style={{ animationDelay: '0.5s' }} />
          </div>
          <div className="absolute bottom-4 left-8">
            <Sparkles className="h-5 w-5 text-primary animate-bounce" style={{ animationDelay: '1s' }} />
          </div>
          <div className="absolute bottom-2 right-6">
            <Sparkles className="h-3 w-3 text-primary-glow animate-bounce" style={{ animationDelay: '1.5s' }} />
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground">
            You're almost there!
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Your personalized Plum products have been added to your cart. You're now being redirected to <span className="font-semibold text-primary">Plumgoodness.com</span> to complete your secure checkout.
          </p>
        </div>

        {/* Cart Summary */}
        <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
          <h3 className="font-semibold text-foreground text-lg">Your Cart Summary</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Morning Routine (3 products)</span>
              <span className="font-medium">₹1,173</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Evening Routine (5 products)</span>
              <span className="font-medium">₹1,813</span>
            </div>
            <div className="border-t border-border pt-3 flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-primary">₹2,986</span>
            </div>
            <div className="bg-success-light p-3 rounded-lg">
              <p className="text-success-foreground text-xs">
                🎉 <span className="font-medium">New customer offer applied!</span> Save 20% on your first order
              </p>
            </div>
          </div>
        </div>

        {/* Security Badge */}
        <div className="bg-muted p-4 rounded-xl">
          <p className="text-sm text-muted-foreground">
            🔒 <span className="font-medium">Secure checkout</span> powered by Plum's trusted payment system
          </p>
        </div>

        {/* CTA Button */}
        <div className="space-y-4">
          <Button 
            onClick={handleContinueToCheckout}
            disabled={isRedirecting}
            className="w-full py-6 text-lg font-semibold bg-gradient-primary hover:shadow-glow transition-all duration-300"
            size="lg"
          >
            {isRedirecting ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Redirecting to Plum...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <ExternalLink className="h-5 w-5" />
                Continue to Checkout
              </div>
            )}
          </Button>
          
          <button 
            onClick={() => navigate('/routine/morning')}
            className="text-sm text-primary hover:text-primary-glow transition-colors underline underline-offset-4"
          >
            ← Back to My Routine
          </button>
        </div>

        {/* Auto-redirect Notice */}
        <p className="text-xs text-muted-foreground">
          You'll be automatically redirected in a few seconds...
        </p>
      </div>
    </div>
  );
}