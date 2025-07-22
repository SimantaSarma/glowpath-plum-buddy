import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Droplets, Sparkles, Scale, Layers } from "lucide-react";

const skinFeelOptions = [
  {
    id: "tight-dry",
    label: "Tight & Dry",
    icon: Droplets,
    description: "Feels stretched and lacks moisture"
  },
  {
    id: "oily-shiny", 
    label: "Oily & Shiny",
    icon: Sparkles,
    description: "Greasy with visible shine"
  },
  {
    id: "balanced",
    label: "Balanced",
    icon: Scale,
    description: "Neither too dry nor too oily"
  },
  {
    id: "combination",
    label: "Combination",
    icon: Layers,
    description: "Oily T-zone, dry cheeks"
  }
];

export default function Quiz1() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleNext = () => {
    if (selectedOption) {
      // Store selection in sessionStorage for later use
      sessionStorage.setItem('skinFeel', selectedOption);
      navigate('/quiz2');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        title="Your Glow Profile" 
        showBack={true} 
        progress="1/5"
        onBack={() => navigate('/')}
      />
      
      <div className="px-6 py-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-foreground">
            How does your skin feel an hour after cleansing?
          </h2>
          <p className="text-muted-foreground">
            This helps us understand your skin type
          </p>
        </div>

        <div className="space-y-4">
          {skinFeelOptions.map((option) => {
            const IconComponent = option.icon;
            return (
              <button
                key={option.id}
                onClick={() => setSelectedOption(option.id)}
                className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                  selectedOption === option.id
                    ? 'border-primary bg-primary-light shadow-soft scale-[1.02]'
                    : 'border-border hover:border-primary/50 hover:shadow-soft'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${
                    selectedOption === option.id ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                  }`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-lg mb-1">
                      {option.label}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {option.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="pt-4">
          <Button 
            onClick={handleNext}
            disabled={!selectedOption}
            className="w-full py-6 text-lg font-semibold disabled:opacity-50"
            size="lg"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}