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
import EnparaPOS from "./pages/pos/EnparaPOS";
import EsnekPOSAndroid from "./pages/pos/EsnekPOSAndroid";
import ToslaIsimPOS from "./pages/pos/ToslaIsimPOS";
import LogoIsbasiPOS from "./pages/pos/LogoIsbasiPOS";
import AkbankFizikiPOS from "./pages/pos/AkbankFizikiPOS";
import PayTRNeoPOS from "./pages/pos/PayTRNeoPOS";
import AkbankSanalPOS from "./pages/pos/AkbankSanalPOS";
import ToslaSanalPOS from "./pages/pos/ToslaSanalPOS";
import MokaSanalPOS from "./pages/pos/MokaSanalPOS";
import EsnekPOSCep from "./pages/pos/EsnekPOSCep";
import GarantiSanalPOS from "./pages/pos/GarantiSanalPOS";
import IsbankAnindaPOS from "./pages/pos/IsbankAnindaPOS";
import EsnekPOSPazaryeri from "./pages/pos/EsnekPOSPazaryeri";
import EsnekPOSSanal from "./pages/pos/EsnekPOSSanal";
import PaycellSanalPOS from "./pages/pos/PaycellSanalPOS";
import OdealPOS from "./pages/pos/OdealPOS";
import QNBPayPOS from "./pages/pos/QNBPayPOS";
import ValletMobilPOS from "./pages/pos/ValletMobilPOS";
import ValletSanalPOS from "./pages/pos/ValletSanalPOS";
import QNBPaySanalPOS from "./pages/pos/QNBPaySanalPOS";
import CeptebIstePOS from "./pages/pos/CeptebIstePOS";
import AkbankYazarkasaPOS from "./pages/pos/AkbankYazarkasaPOS";
import LogoIsbasiCepPOS from "./pages/pos/LogoIsbasiCepPOS";
import AkbankCebePOS from "./pages/pos/AkbankCebePOS";
import PayTRSanalPOS from "./pages/pos/PayTRSanalPOS";
import ToslaIsimSanalPOS from "./pages/pos/ToslaIsimSanalPOS";
import EsnekSanalPOS from "./pages/pos/EsnekSanalPOS";

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
              <Route path="/pos/enpara-pos" element={<EnparaPOS />} />
              <Route path="/pos/esnekpos-android" element={<EsnekPOSAndroid />} />
              <Route path="/pos/tosla-isim" element={<ToslaIsimPOS />} />
              <Route path="/pos/logo-isbasi" element={<LogoIsbasiPOS />} />
              <Route path="/pos/akbank-fiziki" element={<AkbankFizikiPOS />} />
              <Route path="/pos/paytr-neopos" element={<PayTRNeoPOS />} />
              <Route path="/pos/akbank-sanal" element={<AkbankSanalPOS />} />
              <Route path="/pos/tosla-sanal" element={<ToslaSanalPOS />} />
              <Route path="/pos/moka-sanal" element={<MokaSanalPOS />} />
              <Route path="/pos/esnekpos-cep" element={<EsnekPOSCep />} />
              <Route path="/pos/garanti-sanal" element={<GarantiSanalPOS />} />
              <Route path="/pos/isbank-aninda" element={<IsbankAnindaPOS />} />
              <Route path="/pos/esnekpos-pazaryeri" element={<EsnekPOSPazaryeri />} />
              <Route path="/pos/esnekpos-sanal" element={<EsnekPOSSanal />} />
              <Route path="/pos/paycell-sanal" element={<PaycellSanalPOS />} />
              <Route path="/pos/odeal-pos" element={<OdealPOS />} />
              <Route path="/pos/qnbpay-pos" element={<QNBPayPOS />} />
              <Route path="/pos/vallet-mobil" element={<ValletMobilPOS />} />
              <Route path="/pos/vallet-sanal" element={<ValletSanalPOS />} />
              <Route path="/pos/qnbpay-sanal" element={<QNBPaySanalPOS />} />
              <Route path="/pos/cepteb-iste" element={<CeptebIstePOS />} />
              <Route path="/pos/akbank-yazarkasa" element={<AkbankYazarkasaPOS />} />
              <Route path="/pos/logo-isbasi-cep" element={<LogoIsbasiCepPOS />} />
              <Route path="/pos/akbank-cebe" element={<AkbankCebePOS />} />
              <Route path="/pos/paytr-sanal" element={<PayTRSanalPOS />} />
              <Route path="/pos/tosla-isim-sanal" element={<ToslaIsimSanalPOS />} />
              <Route path="/pos/esnekpos" element={<EsnekSanalPOS />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
