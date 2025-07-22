import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Circle, Cloud, Palette, Heart, Droplets, Sparkles, Target, Sun } from "lucide-react";

const skinConcerns = [
  {
    id: "acne",
    label: "Acne/Breakouts",
    icon: Circle,
    color: "text-red-500"
  },
  {
    id: "dullness",
    label: "Dullness",
    icon: Cloud,
    color: "text-gray-500"
  },
  {
    id: "uneven-tone",
    label: "Uneven Tone",
    icon: Palette,
    color: "text-amber-500"
  },
  {
    id: "sensitivity",
    label: "Sensitivity/Redness",
    icon: Heart,
    color: "text-pink-500"
  },
  {
    id: "dryness",
    label: "Dryness",
    icon: Droplets,
    color: "text-blue-500"
  },
  {
    id: "oiliness",
    label: "Oiliness",
    icon: Sparkles,
    color: "text-yellow-500"
  },
  {
    id: "blackheads",
    label: "Blackheads/Pores",
    icon: Target,
    color: "text-purple-500"
  },
  {
    id: "aging",
    label: "Fine Lines",
    icon: Sun,
    color: "text-orange-500"
  }
];

export default function Quiz2() {
  const navigate = useNavigate();
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);

  const toggleConcern = (concernId: string) => {
    setSelectedConcerns(prev => 
      prev.includes(concernId)
        ? prev.filter(id => id !== concernId)
        : [...prev, concernId]
    );
  };

  const handleNext = () => {
    if (selectedConcerns.length > 0) {
      // Store selection in sessionStorage
      sessionStorage.setItem('skinConcerns', JSON.stringify(selectedConcerns));
      navigate('/selfie');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        title="Your Glow Profile" 
        showBack={true} 
        progress="2/5"
        onBack={() => navigate('/quiz1')}
      />
      
      <div className="px-6 py-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-foreground">
            What are your top skin concerns?
          </h2>
          <p className="text-muted-foreground">
            Select all that apply - we'll personalize your routine
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {skinConcerns.map((concern) => {
            const IconComponent = concern.icon;
            const isSelected = selectedConcerns.includes(concern.id);
            
            return (
              <button
                key={concern.id}
                onClick={() => toggleConcern(concern.id)}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                  isSelected
                    ? 'border-primary bg-primary-light shadow-soft scale-[1.02]'
                    : 'border-border hover:border-primary/50 hover:shadow-soft'
                }`}
              >
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className={`p-3 rounded-xl ${
                    isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted'
                  }`}>
                    <IconComponent className={`h-6 w-6 ${isSelected ? '' : concern.color}`} />
                  </div>
                  <span className={`font-medium text-sm ${
                    isSelected ? 'text-primary' : 'text-foreground'
                  }`}>
                    {concern.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {selectedConcerns.length > 0 && (
          <div className="bg-accent-light p-4 rounded-xl">
            <p className="text-sm text-accent-foreground">
              <span className="font-medium">{selectedConcerns.length}</span> concern{selectedConcerns.length > 1 ? 's' : ''} selected
            </p>
          </div>
        )}

        <div className="pt-4">
          <Button 
            onClick={handleNext}
            disabled={selectedConcerns.length === 0}
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