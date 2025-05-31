
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Tiles from "./pages/Tiles";
import Bathroom from "./pages/Bathroom";
import Sanitary from "./pages/Sanitary";
import UPVCDoorsWindows from "./pages/UPVCDoorsWindows";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";

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
          <Route path="/bathroom" element={<Bathroom />} />
          <Route path="/sanitary" element={<Sanitary />} />
          <Route path="/upvc-doors-windows" element={<UPVCDoorsWindows />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/kitchen-slabs" element={<UPVCDoorsWindows />} />
          <Route path="/pvc-doors" element={<UPVCDoorsWindows />} />
          <Route path="/faucets" element={<UPVCDoorsWindows />} />
          <Route path="/showers" element={<UPVCDoorsWindows />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
