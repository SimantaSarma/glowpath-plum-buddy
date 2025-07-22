import { ArrowLeft, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  showProfile?: boolean;
  progress?: string;
  onBack?: () => void;
}

export function Header({ title, showBack = false, showProfile = false, progress, onBack }: HeaderProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <header className="bg-background border-b border-border px-4 py-3 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-3">
        {showBack && (
          <Button variant="ghost" size="sm" onClick={handleBack} className="p-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        )}
        {title && (
          <h1 className="font-semibold text-foreground text-lg">{title}</h1>
        )}
      </div>
      
      {progress && (
        <span className="text-sm text-muted-foreground font-medium">{progress}</span>
      )}
      
      {showProfile && (
        <Button variant="ghost" size="sm" onClick={() => navigate('/profile')} className="p-2">
          <User className="h-5 w-5" />
        </Button>
      )}
    </header>
  );
}