import { Home, Search, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/routine') {
      return location.pathname.includes('/routine');
    }
    return location.pathname === path;
  };

  return (
    <nav className="bg-background border-t border-border px-4 py-2 flex items-center justify-around sticky bottom-0 z-50">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => navigate('/routine/morning')}
        className={`flex flex-col gap-1 p-3 h-auto ${
          isActive('/routine') ? 'text-primary bg-primary-light' : 'text-muted-foreground'
        }`}
      >
        <Home className="h-5 w-5" />
        <span className="text-xs">Routine</span>
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={() => navigate('/explore')}
        className={`flex flex-col gap-1 p-3 h-auto ${
          isActive('/explore') ? 'text-primary bg-primary-light' : 'text-muted-foreground'
        }`}
      >
        <Search className="h-5 w-5" />
        <span className="text-xs">Explore</span>
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={() => navigate('/profile')}
        className={`flex flex-col gap-1 p-3 h-auto ${
          isActive('/profile') ? 'text-primary bg-primary-light' : 'text-muted-foreground'
        }`}
      >
        <User className="h-5 w-5" />
        <span className="text-xs">Profile</span>
      </Button>
    </nav>
  );
}