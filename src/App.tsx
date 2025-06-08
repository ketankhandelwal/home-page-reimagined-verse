
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Tiles from "./pages/Tiles";

import Sanitary from "./pages/Sanitary";
import UPVCDoorsWindows from "./pages/UPVCDoorsWindows";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";
import Showers from "./pages/Showers";
import Faucets from "./pages/Faucets";
import KitchenSlabs from "./pages/KitchenSlabs";
import BathroomAccessories from "./pages/Bathroom";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tiles" element={<Tiles />} />
          <Route path="/bathroom" element={<BathroomAccessories />} />
          <Route path="/sanitary" element={<Sanitary />} />
          <Route path="/pvc-doors-windows" element={<UPVCDoorsWindows />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/kitchen-slabs" element={<KitchenSlabs />} />
          <Route path="/pvc-doors" element={<UPVCDoorsWindows />} />
          <Route path="/faucets" element={<Faucets />} />
          <Route path="/showers" element={<Showers />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
