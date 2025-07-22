import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Camera, Info, Shield } from "lucide-react";

export default function SelfieCapture() {
  const navigate = useNavigate();
  const [isCapturing, setIsCapturing] = useState(false);

  const handleTakePhoto = () => {
    setIsCapturing(true);
    // Simulate camera capture delay
    setTimeout(() => {
      setIsCapturing(false);
      navigate('/analysis');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        title="Analyze Your Skin" 
        showBack={true} 
        onBack={() => navigate('/quiz2')}
      />
      
      <div className="px-6 py-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-foreground">
            Time for Your Skin Selfie!
          </h2>
          <p className="text-muted-foreground">
            Find good lighting. Hold still. We only use this for analysis, then discard it.
          </p>
        </div>

        {/* Camera Viewfinder Simulation */}
        <div className="relative">
          <div className="aspect-square bg-muted rounded-3xl border-4 border-dashed border-border relative overflow-hidden">
            {/* Face outline guide */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-80 border-2 border-primary/50 rounded-full border-dashed animate-pulse">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
                      <Camera className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Position your face here
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Camera overlay effect when capturing */}
            {isCapturing && (
              <div className="absolute inset-0 bg-white animate-ping"></div>
            )}
          </div>
        </div>

        {/* Privacy notice */}
        <div className="bg-accent-light p-4 rounded-xl flex gap-3">
          <Shield className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
          <div className="space-y-1">
            <p className="text-sm font-medium text-accent-foreground">
              Your privacy is protected
            </p>
            <p className="text-xs text-accent-foreground/80">
              Photos are analyzed instantly and deleted immediately. We never store your images.
            </p>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-card border border-border rounded-xl p-4 space-y-3">
          <div className="flex items-center gap-2">
            <Info className="h-5 w-5 text-primary" />
            <span className="font-medium text-foreground">For best results:</span>
          </div>
          <ul className="space-y-1 text-sm text-muted-foreground ml-7">
            <li>• Use natural lighting</li>
            <li>• Keep your face clean and makeup-free</li>
            <li>• Look directly at the camera</li>
            <li>• Stay still during capture</li>
          </ul>
        </div>

        <div className="pt-4">
          <Button 
            onClick={handleTakePhoto}
            disabled={isCapturing}
            className="w-full py-6 text-lg font-semibold bg-gradient-primary hover:shadow-glow transition-all duration-300"
            size="lg"
          >
            {isCapturing ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Capturing...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Camera className="h-5 w-5" />
                Take Photo
              </div>
            )}
          </Button>
        </div>

        <p className="text-xs text-center text-muted-foreground">
          Allow camera access to proceed • 
          <button className="text-primary hover:underline ml-1">
            Privacy Policy
          </button>
        </p>
      </div>
    </div>
  );
}