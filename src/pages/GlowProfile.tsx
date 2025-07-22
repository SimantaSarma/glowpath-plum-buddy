import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Droplets, Cloud, Wind, Sun, Share2, Sparkles } from "lucide-react";

interface ProfileData {
  skinFeel: string;
  concerns: string[];
  environmentalFactors: Array<{
    type: string;
    level: string;
    icon: React.ElementType;
    color: string;
  }>;
}

export default function GlowProfile() {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  useEffect(() => {
    // Get data from sessionStorage and simulate AI analysis results
    const skinFeel = sessionStorage.getItem('skinFeel') || 'combination';
    const concerns = JSON.parse(sessionStorage.getItem('skinConcerns') || '[]');
    
    // Simulate environmental data based on location (India)
    const environmentalFactors = [
      {
        type: "Pollution",
        level: "High Impact",
        icon: Cloud,
        color: "text-red-500"
      },
      {
        type: "Humidity", 
        level: "Moderate",
        icon: Droplets,
        color: "text-blue-500"
      },
      {
        type: "UV Index",
        level: "High",
        icon: Sun,
        color: "text-orange-500"
      },
      {
        type: "Air Quality",
        level: "Poor",
        icon: Wind,
        color: "text-purple-500"
      }
    ];

    setProfileData({
      skinFeel,
      concerns,
      environmentalFactors
    });
  }, []);

  const getSkinDescription = (skinFeel: string) => {
    const descriptions = {
      'tight-dry': 'Dry skin that needs intense hydration',
      'oily-shiny': 'Oily skin prone to shine and breakouts',
      'balanced': 'Balanced skin with minimal concerns', 
      'combination': 'Combination skin with mixed needs'
    };
    return descriptions[skinFeel as keyof typeof descriptions] || 'Your unique skin type';
  };

  const getConcernLabels = (concerns: string[]) => {
    const labels = {
      'acne': 'Acne/Breakouts',
      'dullness': 'Dullness',
      'uneven-tone': 'Uneven Tone',
      'sensitivity': 'Sensitivity',
      'dryness': 'Dryness',
      'oiliness': 'Oiliness',
      'blackheads': 'Blackheads',
      'aging': 'Fine Lines'
    };
    return concerns.map(concern => labels[concern as keyof typeof labels]).filter(Boolean);
  };

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header 
        title="Your Glow Profile" 
        showBack={false}
      />
      
      <div className="px-6 py-8 space-y-8">
        {/* Welcome Message */}
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto flex items-center justify-center animate-glow-pulse">
            <Sparkles className="h-10 w-10 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Your Skin Profile!
            </h2>
            <p className="text-lg text-muted-foreground">
              {getSkinDescription(profileData.skinFeel)}
            </p>
          </div>
        </div>

        {/* Skin Analysis Results */}
        <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            Key Findings
          </h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-primary-light rounded-xl">
              <p className="font-medium text-primary mb-2">Skin Type Analysis</p>
              <p className="text-sm text-foreground">
                Your skin shows characteristics of <span className="font-semibold">{profileData.skinFeel.replace('-', ' ')}</span> type
                {profileData.concerns.length > 0 && `, with concerns about ${getConcernLabels(profileData.concerns).slice(0, 2).join(' and ')}`}.
              </p>
            </div>

            {profileData.concerns.length > 0 && (
              <div>
                <p className="font-medium text-foreground mb-3">Concerns Identified</p>
                <div className="flex flex-wrap gap-2">
                  {getConcernLabels(profileData.concerns).map((concern, index) => (
                    <Badge key={index} variant="secondary" className="bg-accent-light text-accent-foreground">
                      {concern}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Environmental Impact */}
        <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            Environmental Impact
          </h3>
          
          <div className="grid grid-cols-2 gap-3">
            {profileData.environmentalFactors.map((factor, index) => {
              const IconComponent = factor.icon;
              return (
                <div key={index} className="p-3 bg-muted rounded-xl flex items-center gap-3">
                  <IconComponent className={`h-5 w-5 ${factor.color}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{factor.type}</p>
                    <p className="text-xs text-muted-foreground">{factor.level}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <p className="text-sm text-muted-foreground">
            Based on your location in India, these environmental factors may impact your skin health.
          </p>
        </div>

        {/* CTA */}
        <div className="space-y-4">
          <Button 
            onClick={() => navigate('/routine/morning')}
            className="w-full py-6 text-lg font-semibold bg-gradient-primary hover:shadow-glow transition-all duration-300"
            size="lg"
          >
            See My Personalized Routine
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => {/* Share functionality */}}
            className="w-full py-4 flex items-center gap-2"
          >
            <Share2 className="h-5 w-5" />
            Share My Glow Profile
          </Button>
        </div>
      </div>
    </div>
  );
}