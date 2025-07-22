import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Quiz1 from "./pages/Quiz1";
import Quiz2 from "./pages/Quiz2";
import SelfieCapture from "./pages/SelfieCapture";
import SkinAnalysis from "./pages/SkinAnalysis";
import GlowProfile from "./pages/GlowProfile";
import RoutineMorning from "./pages/RoutineMorning";
import RoutineEvening from "./pages/RoutineEvening";
import ProductDetail from "./pages/ProductDetail";
import Explore from "./pages/Explore";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/quiz1" element={<Quiz1 />} />
          <Route path="/quiz2" element={<Quiz2 />} />
          <Route path="/selfie" element={<SelfieCapture />} />
          <Route path="/analysis" element={<SkinAnalysis />} />
          <Route path="/profile" element={<GlowProfile />} />
          <Route path="/routine/morning" element={<RoutineMorning />} />
          <Route path="/routine/evening" element={<RoutineEvening />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
