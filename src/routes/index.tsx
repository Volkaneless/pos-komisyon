
import { ReactNode } from "react";
import Index from "../pages/Index";
import About from "../pages/About";
import Calculator from "../pages/Calculator";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Dashboard from "../pages/Dashboard";
import POSDetail from "../pages/POSDetail";
import ShopierPage from "../pages/ShopierPage";
import TrendyolCalculator from "../pages/TrendyolCalculator";
import DolapCalculator from "../pages/DolapCalculator";
import HepsiburadaCalculator from "../pages/HepsiburadaCalculator";
import ParamGuvendeCalculator from "../pages/ParamGuvendeCalculator";
import N11Calculator from "../pages/N11Calculator";

// POS Types
import BankaPOS from "../pages/pos-types/BankaPOS";
import YazarkasaPOS from "../pages/pos-types/YazarkasaPOS";
import SanalPOS from "../pages/pos-types/SanalPOS";
import MobilPOS from "../pages/pos-types/MobilPOS";
import CepPOS from "../pages/pos-types/CepPOS";
import BorsaAraciKurum from "../pages/pos-types/BorsaAraciKurum";

// Blog Posts
import POSKomisyonOranlari from "../pages/blog/pos-komisyon-oranlari";
import POSCihaziNasil from "../pages/blog/pos-cihazi-nasil-alinir";
import POSCihaziNedir from "../pages/blog/pos-cihazi-nedir-nasil-kullanilir";
import POSDikkatEdilmesi from "../pages/blog/pos-cihazi-secerken-dikkat-edilmesi-gerekenler";
import SanalPOSFizikiPOS from "../pages/blog/sanal-pos-fiziki-pos-karsilastirma";
import POSKomisyonOranlari2025 from "../pages/blog/pos-komisyon-oranlari-2025";

// GDPR Pages
import GizlilikPolitikasi from "../pages/GizlilikPolitikasi";
import CerezPolitikasi from "../pages/CerezPolitikasi";

// POS Detail Pages
import AkbankFizikiPOS from "../pages/pos/AkbankFizikiPOS";
import AkbankSanalPOS from "../pages/pos/AkbankSanalPOS";
import AkbankYazarkasaPOS from "../pages/pos/AkbankYazarkasaPOS";
import AkbankCebePOS from "../pages/pos/AkbankCebePOS";
import BekoPOS from "../pages/pos/BekoPOS";
import BrisaSanalPOS from "../pages/pos/BrisaSanalPOS";
import CeptebIstePOS from "../pages/pos/CeptebIstePOS";
import DenizbankSanalPOS from "../pages/pos/DenizbankSanalPOS";
import ElektraWebSanalPOS from "../pages/pos/ElektraWebSanalPOS";
import EnparaMobilPOS from "../pages/pos/EnparaMobilPOS";
import EnparaPOS from "../pages/pos/EnparaPOS";
import EsnekPOSAndroid from "../pages/pos/EsnekPOSAndroid";
import EsnekPOSCep from "../pages/pos/EsnekPOSCep";
import EsnekPOSPazaryeri from "../pages/pos/EsnekPOSPazaryeri";
import EsnekPOSSanal from "../pages/pos/EsnekPOSSanal";
import EsnekSanalPOS from "../pages/pos/EsnekSanalPOS";
import GarantiPOS from "../pages/pos/GarantiPOS";
import GarantiSanalPOS from "../pages/pos/GarantiSanalPOS";
import HalkbankPOS from "../pages/pos/HalkbankPOS";
import IngenicoPOS from "../pages/pos/IngenicoPOS";
import IsbankAnindaPOS from "../pages/pos/IsbankAnindaPOS";
import IsbankSanalPOS from "../pages/pos/IsbankSanalPOS";
import IyzicoSanalPOS from "../pages/pos/IyzicoSanalPOS";
import JamesonSanalPOS from "../pages/pos/JamesonSanalPOS";
import KuveytTurkPOS from "../pages/pos/KuveytTurkPOS";
import LogoIsbasiCepPOS from "../pages/pos/LogoIsbasiCepPOS";
import LogoIsbasiPOS from "../pages/pos/LogoIsbasiPOS";
import MokaSanalPOS from "../pages/pos/MokaSanalPOS";
import OdealPOS from "../pages/pos/OdealPOS";
import ParamSanalPOS from "../pages/pos/ParamSanalPOS";
import PayTRNeoPOS from "../pages/pos/PayTRNeoPOS";
import PayTRSanalPOS from "../pages/pos/PayTRSanalPOS";
import PaycellMobilPOS from "../pages/pos/PaycellMobilPOS";
import PaycellSanalPOS from "../pages/pos/PaycellSanalPOS";
import QNBPayPOS from "../pages/pos/QNBPayPOS";
import QNBPaySanalPOS from "../pages/pos/QNBPaySanalPOS";
import ShopifySanalPOS from "../pages/pos/ShopifySanalPOS";
import SimpraSanalPOS from "../pages/pos/SimpraSanalPOS";
import SipaySanalPOS from "../pages/pos/SipaySanalPOS";
import TEBPOS from "../pages/pos/TEBPOS";
import ToslaIsimPOS from "../pages/pos/ToslaIsimPOS";
import ToslaIsimSanalPOS from "../pages/pos/ToslaIsimSanalPOS";
import ToslaSanalPOS from "../pages/pos/ToslaSanalPOS";
import VakifbankSanalPOS from "../pages/pos/VakifbankSanalPOS";
import ValletMobilPOS from "../pages/pos/ValletMobilPOS";
import ValletSanalPOS from "../pages/pos/ValletSanalPOS";
import ZiraatPOS from "../pages/pos/ZiraatPOS";

interface Route {
  path: string;
  element: ReactNode;
}

export const routes: Route[] = [
  { path: "/", element: <Index /> },
  { path: "/about", element: <About /> },
  { path: "/calculator", element: <Calculator /> },
  { path: "/contact", element: <Contact /> },
  { path: "/blog", element: <Blog /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/pos/:id", element: <POSDetail /> },
  { path: "/shopier-komisyon", element: <ShopierPage /> },
  { path: "/trendyol-komisyon", element: <TrendyolCalculator /> },
  { path: "/dolap-komisyon", element: <DolapCalculator /> },
  { path: "/hepsiburada-komisyon", element: <HepsiburadaCalculator /> },
  { path: "/param-guvende-komisyon", element: <ParamGuvendeCalculator /> },
  { path: "/n11-komisyon", element: <N11Calculator /> },

  // POS Types
  { path: "/pos-types/banka", element: <BankaPOS /> },
  { path: "/pos-types/yazarkasa", element: <YazarkasaPOS /> },
  { path: "/pos-types/sanal", element: <SanalPOS /> },
  { path: "/pos-types/mobil", element: <MobilPOS /> },
  { path: "/pos-types/cep", element: <CepPOS /> },
  { path: "/pos-types/borsa", element: <BorsaAraciKurum /> },

  // Blog Posts
  { path: "/blog/pos-komisyon-oranlari", element: <POSKomisyonOranlari /> },
  { path: "/blog/pos-cihazi-nasil-alinir", element: <POSCihaziNasil /> },
  { path: "/blog/pos-cihazi-nedir-nasil-kullanilir", element: <POSCihaziNedir /> },
  { path: "/blog/pos-cihazi-secerken-dikkat-edilmesi-gerekenler", element: <POSDikkatEdilmesi /> },
  { path: "/blog/sanal-pos-fiziki-pos-karsilastirma", element: <SanalPOSFizikiPOS /> },
  { path: "/blog/pos-komisyon-oranlari-2025", element: <POSKomisyonOranlari2025 /> },

  // GDPR Pages
  { path: "/gizlilik-politikasi", element: <GizlilikPolitikasi /> },
  { path: "/cerez-politikasi", element: <CerezPolitikasi /> },
  
  // individual POS provider routes
  { path: "/pos/akbank-fiziki-pos", element: <AkbankFizikiPOS /> },
  { path: "/pos/akbank-sanal-pos", element: <AkbankSanalPOS /> },
  { path: "/pos/akbank-yazarkasa-pos", element: <AkbankYazarkasaPOS /> },
  { path: "/pos/akbank-cebe-pos", element: <AkbankCebePOS /> },
  { path: "/pos/beko-pos", element: <BekoPOS /> },
  { path: "/pos/brisa-sanal-pos", element: <BrisaSanalPOS /> },
  { path: "/pos/cepteb-iste-pos", element: <CeptebIstePOS /> },
  { path: "/pos/denizbank-sanal-pos", element: <DenizbankSanalPOS /> },
  { path: "/pos/elektraweb-sanal-pos", element: <ElektraWebSanalPOS /> },
  { path: "/pos/enpara-mobil-pos", element: <EnparaMobilPOS /> },
  { path: "/pos/enpara-pos", element: <EnparaPOS /> },
  { path: "/pos/esnek-pos-android", element: <EsnekPOSAndroid /> },
  { path: "/pos/esnek-pos-cep", element: <EsnekPOSCep /> },
  { path: "/pos/esnek-pos-pazaryeri", element: <EsnekPOSPazaryeri /> },
  { path: "/pos/esnek-pos-sanal", element: <EsnekPOSSanal /> },
  { path: "/pos/esnek-sanal-pos", element: <EsnekSanalPOS /> },
  { path: "/pos/garanti-pos", element: <GarantiPOS /> },
  { path: "/pos/garanti-sanal-pos", element: <GarantiSanalPOS /> },
  { path: "/pos/halkbank-pos", element: <HalkbankPOS /> },
  { path: "/pos/ingenico-pos", element: <IngenicoPOS /> },
  { path: "/pos/isbank-aninda-pos", element: <IsbankAnindaPOS /> },
  { path: "/pos/isbank-sanal-pos", element: <IsbankSanalPOS /> },
  { path: "/pos/iyzico-sanal-pos", element: <IyzicoSanalPOS /> },
  { path: "/pos/jameson-sanal-pos", element: <JamesonSanalPOS /> },
  { path: "/pos/kuveyt-turk-pos", element: <KuveytTurkPOS /> },
  { path: "/pos/logo-isbasi-cep-pos", element: <LogoIsbasiCepPOS /> },
  { path: "/pos/logo-isbasi-pos", element: <LogoIsbasiPOS /> },
  { path: "/pos/moka-sanal-pos", element: <MokaSanalPOS /> },
  { path: "/pos/odeal-pos", element: <OdealPOS /> },
  { path: "/pos/param-sanal-pos", element: <ParamSanalPOS /> },
  { path: "/pos/paytr-neo-pos", element: <PayTRNeoPOS /> },
  { path: "/pos/paytr-sanal-pos", element: <PayTRSanalPOS /> },
  { path: "/pos/paycell-mobil-pos", element: <PaycellMobilPOS /> },
  { path: "/pos/paycell-sanal-pos", element: <PaycellSanalPOS /> },
  { path: "/pos/qnb-pay-pos", element: <QNBPayPOS /> },
  { path: "/pos/qnb-pay-sanal-pos", element: <QNBPaySanalPOS /> },
  { path: "/pos/shopify-sanal-pos", element: <ShopifySanalPOS /> },
  { path: "/pos/simpra-sanal-pos", element: <SimpraSanalPOS /> },
  { path: "/pos/sipay-sanal-pos", element: <SipaySanalPOS /> },
  { path: "/pos/teb-pos", element: <TEBPOS /> },
  { path: "/pos/tosla-isim-pos", element: <ToslaIsimPOS /> },
  { path: "/pos/tosla-isim-sanal-pos", element: <ToslaIsimSanalPOS /> },
  { path: "/pos/tosla-sanal-pos", element: <ToslaSanalPOS /> },
  { path: "/pos/vakifbank-sanal-pos", element: <VakifbankSanalPOS /> },
  { path: "/pos/vallet-mobil-pos", element: <ValletMobilPOS /> },
  { path: "/pos/vallet-sanal-pos", element: <ValletSanalPOS /> },
  { path: "/pos/ziraat-pos", element: <ZiraatPOS /> }
];
