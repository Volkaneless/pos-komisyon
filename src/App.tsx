import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Calculator from "./pages/Calculator";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import YazarkasaPOS from "./pages/pos-types/YazarkasaPOS";
import SanalPOS from "./pages/pos-types/SanalPOS";
import MobilPOS from "./pages/pos-types/MobilPOS";
import CepPOS from "./pages/pos-types/CepPOS";
import BankaPOS from "./pages/BankaPOS";
import POSFiyatlari from "./pages/POSFiyatlari";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/pos-types/yazarkasa" element={<YazarkasaPOS />} />
              <Route path="/pos-types/sanal" element={<SanalPOS />} />
              <Route path="/pos-types/mobil" element={<MobilPOS />} />
              <Route path="/pos-types/cep" element={<CepPOS />} />
              <Route path="/banka-pos" element={<BankaPOS />} />
              <Route path="/pos-fiyatlari" element={<POSFiyatlari />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
