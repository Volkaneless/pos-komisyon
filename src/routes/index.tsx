
import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Calculator from "../pages/Calculator";
import Blog from "../pages/Blog";
import Dashboard from "../pages/Dashboard";

// Blog posts
import POSCommissionRates2025 from "../pages/blog/pos-komisyon-oranlari-2025";
import POSCommissionRates from "../pages/blog/pos-komisyon-oranlari";
import POSDeviceWhatIs from "../pages/blog/pos-cihazi-nedir-nasil-kullanilir";
import POSDeviceHowToGet from "../pages/blog/pos-cihazi-nasil-alinir";
import POSDeviceConsiderations from "../pages/blog/pos-cihazi-secerken-dikkat-edilmesi-gerekenler";
import VirtualVsPhysicalPOS from "../pages/blog/sanal-pos-fiziki-pos-karsilastirma";

// POS Types
import BankaPOS from "../pages/pos-types/BankaPOS";
import YazarkasaPOS from "../pages/pos-types/YazarkasaPOS";
import MobilPOS from "../pages/pos-types/MobilPOS";
import SanalPOS from "../pages/pos-types/SanalPOS";
import CepPOS from "../pages/pos-types/CepPOS";

// POS Detail Pages
import AkbankFizikiPOS from "../pages/pos/AkbankFizikiPOS";
import AkbankYazarkasaPOS from "../pages/pos/AkbankYazarkasaPOS";
import AkbankSanalPOS from "../pages/pos/AkbankSanalPOS";
import AkbankCebePOS from "../pages/pos/AkbankCebePOS";
import GarantiPOS from "../pages/pos/GarantiPOS";
import GarantiSanalPOS from "../pages/pos/GarantiSanalPOS";
import IsbankSanalPOS from "../pages/pos/IsbankSanalPOS";
import IsbankAnindaPOS from "../pages/pos/IsbankAnindaPOS";
import VakifbankSanalPOS from "../pages/pos/VakifbankSanalPOS";
import DenizbankSanalPOS from "../pages/pos/DenizbankSanalPOS";
import ZiraatPOS from "../pages/pos/ZiraatPOS";
import HalkbankPOS from "../pages/pos/HalkbankPOS";
import TEBPOS from "../pages/pos/TEBPOS";
import KuveytTurkPOS from "../pages/pos/KuveytTurkPOS";
import QNBPayPOS from "../pages/pos/QNBPayPOS";
import QNBPaySanalPOS from "../pages/pos/QNBPaySanalPOS";
import EnparaPOS from "../pages/pos/EnparaPOS";
import EnparaMobilPOS from "../pages/pos/EnparaMobilPOS";
import PaycellMobilPOS from "../pages/pos/PaycellMobilPOS";
import PaycellSanalPOS from "../pages/pos/PaycellSanalPOS";
import ParamSanalPOS from "../pages/pos/ParamSanalPOS";
import IyzicoSanalPOS from "../pages/pos/IyzicoSanalPOS";
import SimpraSanalPOS from "../pages/pos/SimpraSanalPOS";
import ShopifySanalPOS from "../pages/pos/ShopifySanalPOS";
import PayTRSanalPOS from "../pages/pos/PayTRSanalPOS";
import PayTRNeoPOS from "../pages/pos/PayTRNeoPOS";
import EsnekSanalPOS from "../pages/pos/EsnekSanalPOS";
import EsnekPOSCep from "../pages/pos/EsnekPOSCep";
import EsnekPOSSanal from "../pages/pos/EsnekPOSSanal";
import EsnekPOSAndroid from "../pages/pos/EsnekPOSAndroid";
import EsnekPOSPazaryeri from "../pages/pos/EsnekPOSPazaryeri";
import MokaSanalPOS from "../pages/pos/MokaSanalPOS";
import OdealPOS from "../pages/pos/OdealPOS";
import BekoPOS from "../pages/pos/BekoPOS";
import IngenicoPOS from "../pages/pos/IngenicoPOS";
import LogoIsbasiPOS from "../pages/pos/LogoIsbasiPOS";
import LogoIsbasiCepPOS from "../pages/pos/LogoIsbasiCepPOS";
import SipaySanalPOS from "../pages/pos/SipaySanalPOS";
import JamesonSanalPOS from "../pages/pos/JamesonSanalPOS";
import ElektraWebSanalPOS from "../pages/pos/ElektraWebSanalPOS";
import ToslaSanalPOS from "../pages/pos/ToslaSanalPOS";
import ToslaIsimPOS from "../pages/pos/ToslaIsimPOS";
import ToslaIsimSanalPOS from "../pages/pos/ToslaIsimSanalPOS";
import CeptebIstePOS from "../pages/pos/CeptebIstePOS";
import ValletSanalPOS from "../pages/pos/ValletSanalPOS";
import ValletMobilPOS from "../pages/pos/ValletMobilPOS";
import BrisaSanalPOS from "../pages/pos/BrisaSanalPOS";

// GDPR Pages
import GizlilikPolitikasi from "../pages/GizlilikPolitikasi";
import CerezPolitikasi from "../pages/CerezPolitikasi";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Blog Posts */}
      <Route path="/blog/pos-komisyon-oranlari-2025" element={<POSCommissionRates2025 />} />
      <Route path="/blog/pos-komisyon-oranlari" element={<POSCommissionRates />} />
      <Route path="/blog/pos-cihazi-nedir-nasil-kullanilir" element={<POSDeviceWhatIs />} />
      <Route path="/blog/pos-cihazi-nasil-alinir" element={<POSDeviceHowToGet />} />
      <Route path="/blog/pos-cihazi-secerken-dikkat-edilmesi-gerekenler" element={<POSDeviceConsiderations />} />
      <Route path="/blog/sanal-pos-fiziki-pos-karsilastirma" element={<VirtualVsPhysicalPOS />} />

      {/* POS Types */}
      <Route path="/pos-types/banka" element={<BankaPOS />} />
      <Route path="/pos-types/yazarkasa" element={<YazarkasaPOS />} />
      <Route path="/pos-types/mobil" element={<MobilPOS />} />
      <Route path="/pos-types/sanal" element={<SanalPOS />} />
      <Route path="/pos-types/cep" element={<CepPOS />} />

      {/* POS Detail Pages */}
      <Route path="/pos/akbank-fiziki-pos" element={<AkbankFizikiPOS />} />
      <Route path="/pos/akbank-yazarkasa-pos" element={<AkbankYazarkasaPOS />} />
      <Route path="/pos/akbank-sanal-pos" element={<AkbankSanalPOS />} />
      <Route path="/pos/akbank-cebe-pos" element={<AkbankCebePOS />} />
      <Route path="/pos/garanti-pos" element={<GarantiPOS />} />
      <Route path="/pos/garanti-sanal-pos" element={<GarantiSanalPOS />} />
      <Route path="/pos/isbank-sanal-pos" element={<IsbankSanalPOS />} />
      <Route path="/pos/isbank-aninda-pos" element={<IsbankAnindaPOS />} />
      <Route path="/pos/vakifbank-sanal-pos" element={<VakifbankSanalPOS />} />
      <Route path="/pos/denizbank-sanal-pos" element={<DenizbankSanalPOS />} />
      <Route path="/pos/ziraat-pos" element={<ZiraatPOS />} />
      <Route path="/pos/halkbank-pos" element={<HalkbankPOS />} />
      <Route path="/pos/teb-pos" element={<TEBPOS />} />
      <Route path="/pos/kuveyt-turk-pos" element={<KuveytTurkPOS />} />
      <Route path="/pos/qnb-pay-pos" element={<QNBPayPOS />} />
      <Route path="/pos/qnb-pay-sanal-pos" element={<QNBPaySanalPOS />} />
      <Route path="/pos/enpara-pos" element={<EnparaPOS />} />
      <Route path="/pos/enpara-mobil-pos" element={<EnparaMobilPOS />} />
      <Route path="/pos/paycell-mobil-pos" element={<PaycellMobilPOS />} />
      <Route path="/pos/paycell-sanal-pos" element={<PaycellSanalPOS />} />
      <Route path="/pos/param-sanal-pos" element={<ParamSanalPOS />} />
      <Route path="/pos/iyzico-sanal-pos" element={<IyzicoSanalPOS />} />
      <Route path="/pos/simpra-sanal-pos" element={<SimpraSanalPOS />} />
      <Route path="/pos/shopify-sanal-pos" element={<ShopifySanalPOS />} />
      <Route path="/pos/paytr-sanal-pos" element={<PayTRSanalPOS />} />
      <Route path="/pos/paytr-neo-pos" element={<PayTRNeoPOS />} />
      <Route path="/pos/esnek-sanal-pos" element={<EsnekSanalPOS />} />
      <Route path="/pos/esnek-pos-cep" element={<EsnekPOSCep />} />
      <Route path="/pos/esnek-pos-sanal" element={<EsnekPOSSanal />} />
      <Route path="/pos/esnek-pos-android" element={<EsnekPOSAndroid />} />
      <Route path="/pos/esnek-pos-pazaryeri" element={<EsnekPOSPazaryeri />} />
      <Route path="/pos/moka-sanal-pos" element={<MokaSanalPOS />} />
      <Route path="/pos/odeal-pos" element={<OdealPOS />} />
      <Route path="/pos/beko-pos" element={<BekoPOS />} />
      <Route path="/pos/ingenico-pos" element={<IngenicoPOS />} />
      <Route path="/pos/logo-isbasi-pos" element={<LogoIsbasiPOS />} />
      <Route path="/pos/logo-isbasi-cep-pos" element={<LogoIsbasiCepPOS />} />
      <Route path="/pos/sipay-sanal-pos" element={<SipaySanalPOS />} />
      <Route path="/pos/jameson-sanal-pos" element={<JamesonSanalPOS />} />
      <Route path="/pos/elektra-web-sanal-pos" element={<ElektraWebSanalPOS />} />
      <Route path="/pos/tosla-sanal-pos" element={<ToslaSanalPOS />} />
      <Route path="/pos/tosla-isim-pos" element={<ToslaIsimPOS />} />
      <Route path="/pos/tosla-isim-sanal-pos" element={<ToslaIsimSanalPOS />} />
      <Route path="/pos/cepteb-iste-pos" element={<CeptebIstePOS />} />
      <Route path="/pos/vallet-sanal-pos" element={<ValletSanalPOS />} />
      <Route path="/pos/vallet-mobil-pos" element={<ValletMobilPOS />} />
      <Route path="/pos/brisa-sanal-pos" element={<BrisaSanalPOS />} />

      {/* GDPR Pages */}
      <Route path="/gizlilik-politikasi" element={<GizlilikPolitikasi />} />
      <Route path="/cerez-politikasi" element={<CerezPolitikasi />} />
    </Routes>
  );
};

export default AppRoutes;
