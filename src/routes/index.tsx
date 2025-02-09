import { RouteObject } from "react-router-dom";
import Index from "@/pages/Index";
import Calculator from "@/pages/Calculator";
import Blog from "@/pages/Blog";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Dashboard from "@/pages/Dashboard";
import POSKomisyonOranlari2025 from "@/pages/blog/pos-komisyon-oranlari-2025";
import POSKomisyonOranlari from "@/pages/blog/pos-komisyon-oranlari";
import BlogPostDetail from "@/pages/blog/pos-cihazi-secerken-dikkat-edilmesi-gerekenler";
import POSCihaziNedir from "@/pages/blog/pos-cihazi-nedir-nasil-kullanilir";
import POSCihaziNasilAlinir from "@/pages/blog/pos-cihazi-nasil-alinir";
import SanalPOSFizikiPOSKarsilastirma from "@/pages/blog/sanal-pos-fiziki-pos-karsilastirma";

// POS Type Pages
import YazarkasaPOS from "@/pages/pos-types/YazarkasaPOS";
import SanalPOS from "@/pages/pos-types/SanalPOS";
import MobilPOS from "@/pages/pos-types/MobilPOS";
import CepPOS from "@/pages/pos-types/CepPOS";

// POS Provider Pages
import EnparaPOS from "@/pages/pos/EnparaPOS";
import EsnekPOSAndroid from "@/pages/pos/EsnekPOSAndroid";
import ToslaIsimPOS from "@/pages/pos/ToslaIsimPOS";
import LogoIsbasiPOS from "@/pages/pos/LogoIsbasiPOS";
import AkbankFizikiPOS from "@/pages/pos/AkbankFizikiPOS";
import PayTRNeoPOS from "@/pages/pos/PayTRNeoPOS";
import AkbankSanalPOS from "@/pages/pos/AkbankSanalPOS";
import ToslaSanalPOS from "@/pages/pos/ToslaSanalPOS";
import MokaSanalPOS from "@/pages/pos/MokaSanalPOS";
import EsnekPOSCep from "@/pages/pos/EsnekPOSCep";
import GarantiSanalPOS from "@/pages/pos/GarantiSanalPOS";
import IsbankAnindaPOS from "@/pages/pos/IsbankAnindaPOS";
import EsnekPOSPazaryeri from "@/pages/pos/EsnekPOSPazaryeri";
import EsnekPOSSanal from "@/pages/pos/EsnekPOSSanal";
import PaycellSanalPOS from "@/pages/pos/PaycellSanalPOS";
import OddealPOS from "@/pages/pos/OdealPOS";
import QNBPayPOS from "@/pages/pos/QNBPayPOS";
import ValletMobilPOS from "@/pages/pos/ValletMobilPOS";
import ValletSanalPOS from "@/pages/pos/ValletSanalPOS";
import QNBPaySanalPOS from "@/pages/pos/QNBPaySanalPOS";
import CeptebIstePOS from "@/pages/pos/CeptebIstePOS";
import AkbankYazarkasaPOS from "@/pages/pos/AkbankYazarkasaPOS";
import LogoIsbasiCepPOS from "@/pages/pos/LogoIsbasiCepPOS";
import AkbankCebePOS from "@/pages/pos/AkbankCebePOS";
import PayTRSanalPOS from "@/pages/pos/PayTRSanalPOS";
import ToslaIsimSanalPOS from "@/pages/pos/ToslaIsimSanalPOS";
import EsnekSanalPOS from "@/pages/pos/EsnekSanalPOS";
import GarantiPOS from "@/pages/pos/GarantiPOS";
import EnparaMobilPOS from "@/pages/pos/EnparaMobilPOS";
import PaycellMobilPOS from "@/pages/pos/PaycellMobilPOS";
import SipaySanalPOS from "@/pages/pos/SipaySanalPOS";
import ElektraWebSanalPOS from "@/pages/pos/ElektraWebSanalPOS";
import BrisaSanalPOS from "@/pages/pos/BrisaSanalPOS";
import ParamSanalPOS from "@/pages/pos/ParamSanalPOS";
import JamesonSanalPOS from "@/pages/pos/JamesonSanalPOS";

// Main Routes
export const mainRoutes: RouteObject[] = [
  { path: "/", element: <Index /> },
  { path: "/calculator", element: <Calculator /> },
  { path: "/blog", element: <Blog /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/dashboard", element: <Dashboard /> },
];

// Blog Routes
export const blogRoutes: RouteObject[] = [
  { path: "/blog/pos-komisyon-oranlari-2025", element: <POSKomisyonOranlari2025 /> },
  { path: "/blog/pos-komisyon-oranlari", element: <POSKomisyonOranlari /> },
  { path: "/blog/pos-cihazi-secerken-dikkat-edilmesi-gerekenler", element: <BlogPostDetail /> },
  { path: "/blog/pos-cihazi-nedir-nasil-kullanilir", element: <POSCihaziNedir /> },
  { path: "/blog/pos-cihazi-nasil-alinir", element: <POSCihaziNasilAlinir /> },
  { path: "/blog/sanal-pos-vs-fiziki-pos-karsilastirma", element: <SanalPOSFizikiPOSKarsilastirma /> },
];

// POS Type Routes
export const posTypeRoutes: RouteObject[] = [
  { path: "/pos-types/yazarkasa", element: <YazarkasaPOS /> },
  { path: "/pos-types/sanal", element: <SanalPOS /> },
  { path: "/pos-types/mobil", element: <MobilPOS /> },
  { path: "/pos-types/cep", element: <CepPOS /> },
];

// POS Provider Routes
export const posProviderRoutes: RouteObject[] = [
  { path: "/pos/enpara-pos", element: <EnparaPOS /> },
  { path: "/pos/esnekpos-android", element: <EsnekPOSAndroid /> },
  { path: "/pos/tosla-isim", element: <ToslaIsimPOS /> },
  { path: "/pos/logo-isbasi", element: <LogoIsbasiPOS /> },
  { path: "/pos/akbank-fiziki", element: <AkbankFizikiPOS /> },
  { path: "/pos/paytr-neopos", element: <PayTRNeoPOS /> },
  { path: "/pos/akbank-sanal", element: <AkbankSanalPOS /> },
  { path: "/pos/tosla-sanal", element: <ToslaSanalPOS /> },
  { path: "/pos/moka-sanal", element: <MokaSanalPOS /> },
  { path: "/pos/esnekpos-cep", element: <EsnekPOSCep /> },
  { path: "/pos/garanti-sanal", element: <GarantiSanalPOS /> },
  { path: "/pos/isbank-aninda", element: <IsbankAnindaPOS /> },
  { path: "/pos/esnekpos-pazaryeri", element: <EsnekPOSPazaryeri /> },
  { path: "/pos/esnekpos-sanal", element: <EsnekPOSSanal /> },
  { path: "/pos/paycell-sanal", element: <PaycellSanalPOS /> },
  { path: "/pos/odeal-pos", element: <OddealPOS /> },
  { path: "/pos/qnbpay-pos", element: <QNBPayPOS /> },
  { path: "/pos/vallet-mobil", element: <ValletMobilPOS /> },
  { path: "/pos/vallet-sanal", element: <ValletSanalPOS /> },
  { path: "/pos/qnbpay-sanal", element: <QNBPaySanalPOS /> },
  { path: "/pos/cepteb-iste", element: <CeptebIstePOS /> },
  { path: "/pos/akbank-yazarkasa", element: <AkbankYazarkasaPOS /> },
  { path: "/pos/logo-isbasi-cep", element: <LogoIsbasiCepPOS /> },
  { path: "/pos/akbank-cebe", element: <AkbankCebePOS /> },
  { path: "/pos/paytr-sanal", element: <PayTRSanalPOS /> },
  { path: "/pos/tosla-isim-sanal", element: <ToslaIsimSanalPOS /> },
  { path: "/pos/esnekpos", element: <EsnekSanalPOS /> },
  { path: "/pos/garanti-pos", element: <GarantiPOS /> },
  { path: "/pos/enpara-mobil", element: <EnparaMobilPOS /> },
  { path: "/pos/paycell-mobil", element: <PaycellMobilPOS /> },
  { path: "/pos/sipay-sanal", element: <SipaySanalPOS /> },
  { path: "/pos/elektraweb-sanal", element: <ElektraWebSanalPOS /> },
  { path: "/pos/brisa-sanal", element: <BrisaSanalPOS /> },
  { path: "/pos/param-sanal", element: <ParamSanalPOS /> },
  { path: "/pos/jameson-sanal", element: <JamesonSanalPOS /> },
];

// Combine all routes
export const routes: RouteObject[] = [
  ...mainRoutes,
  ...blogRoutes,
  ...posTypeRoutes,
  ...posProviderRoutes,
];
