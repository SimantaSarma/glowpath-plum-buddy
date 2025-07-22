import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import heroImage from "@/assets/hero-glow.jpg";

export default function Welcome() {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleStartQuiz = () => {
    setIsAnimating(true);
    setTimeout(() => navigate('/quiz1'), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-soft flex flex-col items-center justify-center px-6 py-8">
      <div className={`max-w-md w-full text-center space-y-8 transition-transform duration-300 ${isAnimating ? 'scale-95 opacity-80' : ''}`}>
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <Leaf className="h-8 w-8 text-primary animate-float" />
          <h1 className="text-2xl font-bold text-primary">Plum GlowPath</h1>
        </div>

        {/* Hero Illustration */}
        <div className="relative">
          <img 
            src={heroImage} 
            alt="Glowing skin illustration" 
            className="w-full rounded-3xl shadow-glow animate-glow-pulse"
          />
          <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-3xl"></div>
        </div>

        {/* Headline */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground leading-tight">
            Unlock Your Personalized Glow!
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Answer a few quick questions and snap a selfie to discover your unique skin needs. Get your perfect Plum routine!
          </p>
        </div>

        {/* CTA Button */}
        <div className="space-y-4">
          <Button 
            onClick={handleStartQuiz}
            className="w-full py-6 text-lg font-semibold bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-[1.02]"
            size="lg"
          >
            Start My Glow Profile
          </Button>
          
          <button 
            className="text-sm text-primary hover:text-primary-glow transition-colors underline underline-offset-4"
            onClick={() => {/* Link to external Plum values page */}}
          >
            Learn More about Plum's Clean Promise
          </button>
        </div>
      </div>
    </div>
  );
}