import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Leaf, Sparkles } from "lucide-react";

export default function SkinAnalysis() {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate analysis time
    const timer = setTimeout(() => {
      navigate('/profile');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-soft flex flex-col items-center justify-center px-6">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Animated Analysis Visual */}
        <div className="relative">
          <div className="w-32 h-32 mx-auto relative">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-ping"></div>
            
            {/* Middle ring */}
            <div className="absolute inset-4 rounded-full bg-gradient-glow opacity-40 animate-pulse"></div>
            
            {/* Inner core */}
            <div className="absolute inset-8 rounded-full bg-primary flex items-center justify-center animate-glow-pulse">
              <Leaf className="h-8 w-8 text-primary-foreground animate-float" />
            </div>

            {/* Scanning lines */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-glow to-transparent animate-spin"></div>
            </div>
          </div>

          {/* Floating particles */}
          <div className="absolute top-8 left-8">
            <Sparkles className="h-4 w-4 text-primary-glow animate-bounce" style={{ animationDelay: '0s' }} />
          </div>
          <div className="absolute top-12 right-6">
            <Sparkles className="h-3 w-3 text-accent animate-bounce" style={{ animationDelay: '0.5s' }} />
          </div>
          <div className="absolute bottom-8 left-12">
            <Sparkles className="h-5 w-5 text-primary animate-bounce" style={{ animationDelay: '1s' }} />
          </div>
          <div className="absolute bottom-6 right-8">
            <Sparkles className="h-3 w-3 text-primary-glow animate-bounce" style={{ animationDelay: '1.5s' }} />
          </div>
        </div>

        {/* Analysis Text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">
            Analyzing Your Skin...
          </h2>
          <p className="text-muted-foreground">
            This might take a few seconds to discover your unique Glow Profile.
          </p>
        </div>

        {/* Progress indicator */}
        <div className="space-y-2">
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-gradient-primary h-2 rounded-full animate-pulse" style={{ width: '100%', animation: 'width 3s ease-in-out' }}></div>
          </div>
          <p className="text-sm text-muted-foreground">
            Processing your unique skin characteristics...
          </p>
        </div>
      </div>
    </div>
  );
}