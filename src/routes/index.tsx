
import { ReactNode } from "react";
import Index from "../pages/Index";
import About from "../pages/About";
import Calculator from "../pages/Calculator";
import Contact from "../pages/Contact";

import Dashboard from "../pages/Dashboard";
import POSDetail from "../pages/POSDetail";
import ShopierPage from "../pages/ShopierPage";
import TrendyolCalculator from "../pages/TrendyolCalculator";
import DolapCalculator from "../pages/DolapCalculator";
import HepsiburadaCalculator from "../pages/HepsiburadaCalculator";
import ParamGuvendeCalculator from "../pages/ParamGuvendeCalculator";
import N11Calculator from "../pages/N11Calculator";
import AmazonCalculator from "../pages/AmazonCalculator";
import CompoundInterestCalculator from "../pages/CompoundInterestCalculator";
import CryptoExchanges from "../pages/CryptoExchanges";
import CryptoExchangeDetail from "../pages/CryptoExchangeDetail";
import EmlakciKomisyon from "../pages/EmlakciKomisyon";
import DesiHesaplama from "../pages/DesiHesaplama";
import ArasKargoDesiHesaplama from "../pages/desi/ArasKargoDesiHesaplama";
import PTTKargoDesiHesaplama from "../pages/desi/PTTKargoDesiHesaplama";
import SuratKargoDesiHesaplama from "../pages/desi/SuratKargoDesiHesaplama";
import YurticiKargoDesiHesaplama from "../pages/desi/YurticiKargoDesiHesaplama";
import MNGKargoDesiHesaplama from "../pages/desi/MNGKargoDesiHesaplama";
import TrendyolDesiHesaplama from "../pages/desi/TrendyolDesiHesaplama";
import KiraArtisOrani from "../pages/KiraArtisOrani";
import SitemapXML from "../pages/SitemapXML";

// POS Types
import BankaPOS from "../pages/pos-types/BankaPOS";
import YazarkasaPOS from "../pages/pos-types/YazarkasaPOS";
import SanalPOS from "../pages/pos-types/SanalPOS";
import MobilPOS from "../pages/pos-types/MobilPOS";
import CepPOS from "../pages/pos-types/CepPOS";
import BorsaAraciKurum from "../pages/pos-types/BorsaAraciKurum";


// GDPR Pages
import GizlilikPolitikasi from "../pages/GizlilikPolitikasi";
import CerezPolitikasi from "../pages/CerezPolitikasi";

// POS Detail Pages
import AkbankFizikiPOS from "../pages/pos/AkbankFizikiPOS";
import AkbankSanalPOS from "../pages/pos/AkbankSanalPOS";
import AkbankYazarkasaPOS from "../pages/pos/AkbankYazarkasaPOS";
import AkbankCebePOS from "../pages/pos/AkbankCebePOS";
import BekoPOS from "../pages/pos/BekoPOS";
import Beko300TRPOS from "../pages/pos/Beko300TRPOS";
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
import HuginPOS from "../pages/pos/HuginPOS";
import IngenicoPOS from "../pages/pos/IngenicoPOS";
import IsbankAnindaPOS from "../pages/pos/IsbankAnindaPOS";
import IsbankSanalPOS from "../pages/pos/IsbankSanalPOS";
import IyzicoSanalPOS from "../pages/pos/IyzicoSanalPOS";
import JamesonSanalPOS from "../pages/pos/JamesonSanalPOS";
import KuveytTurkPOS from "../pages/pos/KuveytTurkPOS";
import LogoIsbasiCepPOS from "../pages/pos/LogoIsbasiCepPOS";
import LogoIsbasiPOS from "../pages/pos/LogoIsbasiPOS";
import MokaSanalPOS from "../pages/pos/MokaSanalPOS";
import Move5000FPOS from "../pages/pos/Move5000FPOS";
import OdealPOS from "../pages/pos/OdealPOS";
import ParamSanalPOS from "../pages/pos/ParamSanalPOS";
import PayTRNeoPOS from "../pages/pos/PayTRNeoPOS";
import PayTRSanalPOS from "../pages/pos/PayTRSanalPOS";
import PaycellMobilPOS from "../pages/pos/PaycellMobilPOS";
import PaycellSanalPOS from "../pages/pos/PaycellSanalPOS";
import PaygoPOS from "../pages/pos/PaygoPOS";
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

// New Sanal POS providers
import VirtualPOS from "../pages/pos/VirtualPOS";
import ContinentalPOS from "../pages/pos/ContinentalPOS";
import InPOSM530 from "../pages/pos/InPOSM530";
import ParamPOSSanal from "../pages/pos/ParamPOSSanal";

// Broker Detail Pages
import BrokerDetail from "../pages/pos/BrokerDetail";

interface Route {
  path: string;
  element: ReactNode;
}

export const routes: Route[] = [
  { path: "/", element: <Index /> },
  { path: "/about", element: <About /> },
  { path: "/calculator", element: <Calculator /> },
  { path: "/contact", element: <Contact /> },
  
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/pos/:id", element: <POSDetail /> },
  { path: "/shopier-komisyon", element: <ShopierPage /> },
  { path: "/trendyol-komisyon", element: <TrendyolCalculator /> },
  { path: "/dolap-komisyon", element: <DolapCalculator /> },
  { path: "/hepsiburada-komisyon", element: <HepsiburadaCalculator /> },
  { path: "/param-guvende-komisyon", element: <ParamGuvendeCalculator /> },
  { path: "/n11-komisyon", element: <N11Calculator /> },
  { path: "/amazon-komisyon", element: <AmazonCalculator /> },
  { path: "/bilesik-faiz-hesaplama", element: <CompoundInterestCalculator /> },
  { path: "/kripto-borsalari", element: <CryptoExchanges /> },
  { path: "/kripto-borsalari/:id", element: <CryptoExchangeDetail /> },
  { path: "/emlakci-komisyon", element: <EmlakciKomisyon /> },
  { path: "/desi-hesaplama", element: <DesiHesaplama /> },
  { path: "/desi-hesaplama/aras-kargo-desi-hesaplama", element: <ArasKargoDesiHesaplama /> },
  { path: "/desi-hesaplama/ptt-kargo-desi-hesaplama", element: <PTTKargoDesiHesaplama /> },

  // POS Types
  { path: "/pos-types/banka", element: <BankaPOS /> },
  { path: "/pos-types/yazarkasa", element: <YazarkasaPOS /> },
  { path: "/pos-types/sanal", element: <SanalPOS /> },
  { path: "/pos-types/mobil", element: <MobilPOS /> },
  { path: "/pos-types/cep", element: <CepPOS /> },
  { path: "/pos-types/borsa", element: <BorsaAraciKurum /> },


  // GDPR Pages
  { path: "/gizlilik-politikasi", element: <GizlilikPolitikasi /> },
  { path: "/cerez-politikasi", element: <CerezPolitikasi /> },
  
  // individual POS provider routes
  { path: "/pos/akbank-fiziki-pos", element: <AkbankFizikiPOS /> },
  { path: "/pos/akbank-sanal-pos", element: <AkbankSanalPOS /> },
  { path: "/pos/akbank-yazarkasa", element: <AkbankYazarkasaPOS /> },
  { path: "/pos/akbank-cebe-pos", element: <AkbankCebePOS /> },
  { path: "/pos/beko-pos", element: <BekoPOS /> },
  { path: "/pos/beko-300-tr-pos", element: <Beko300TRPOS /> },
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
  { path: "/pos/hugin-pos", element: <HuginPOS /> },
  { path: "/pos/ingenico-pos", element: <IngenicoPOS /> },
  { path: "/pos/isbank-aninda-pos", element: <IsbankAnindaPOS /> },
  { path: "/pos/isbank-sanal-pos", element: <IsbankSanalPOS /> },
  { path: "/pos/iyzico-sanal-pos", element: <IyzicoSanalPOS /> },
  { path: "/pos/jameson-sanal-pos", element: <JamesonSanalPOS /> },
  { path: "/pos/kuveyt-turk-pos", element: <KuveytTurkPOS /> },
  { path: "/pos/logo-isbasi-cep-pos", element: <LogoIsbasiCepPOS /> },
  { path: "/pos/logo-isbasi-pos", element: <LogoIsbasiPOS /> },
  { path: "/pos/moka-sanal-pos", element: <MokaSanalPOS /> },
  { path: "/pos/move-5000f-pos", element: <Move5000FPOS /> },
  { path: "/pos/odeal-pos", element: <OdealPOS /> },
  { path: "/pos/param-sanal-pos", element: <ParamSanalPOS /> },
  { path: "/pos/paygo-pos", element: <PaygoPOS /> },
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
  { path: "/pos/ziraat-pos", element: <ZiraatPOS /> },
  
  // New Sanal POS routes
  { path: "/pos/virtual-sanal", element: <VirtualPOS /> },
  { path: "/pos/continental-sanal", element: <ContinentalPOS /> },
  { path: "/pos/inpos-m530-sanal", element: <InPOSM530 /> },
  { path: "/pos/parampos-sanal", element: <ParamPOSSanal /> },

  // Broker Detail Pages
  { path: "/pos/broker/:id", element: <BrokerDetail /> },
  { path: "/pos/midas", element: <BrokerDetail /> },
  { path: "/pos/matriks", element: <BrokerDetail /> },
  { path: "/pos/is-yatirim", element: <BrokerDetail /> },
  { path: "/pos/qnb-finansinvest", element: <BrokerDetail /> },
  { path: "/pos/deniz-yatirim", element: <BrokerDetail /> },
  { path: "/pos/ak-yatirim", element: <BrokerDetail /> },
  { path: "/pos/seker-yatirim", element: <BrokerDetail /> },
  { path: "/pos/garanti-bbva-yatirim", element: <BrokerDetail /> },
  { path: "/pos/ziraat-yatirim", element: <BrokerDetail /> },
  { path: "/pos/vakif-yatirim", element: <BrokerDetail /> },
  { path: "/pos/halk-yatirim", element: <BrokerDetail /> },
  { path: "/pos/yapi-kredi-yatirim", element: <BrokerDetail /> },
  { path: "/pos/meksa-yatirim", element: <BrokerDetail /> },
  { path: "/pos/anadolu-yatirim", element: <BrokerDetail /> },
  { path: "/pos/burgan-yatirim", element: <BrokerDetail /> },
  { path: "/pos/integral-yatirim", element: <BrokerDetail /> },
  { path: "/pos/global-yatirim", element: <BrokerDetail /> },
  { path: "/pos/piapiri", element: <BrokerDetail /> },
  { path: "/pos/forinvest", element: <BrokerDetail /> },
  { path: "/pos/slayz", element: <BrokerDetail /> },
  
  // Desi calculation pages
  { path: "/desi-hesaplama/surat-kargo-desi-hesaplama", element: <SuratKargoDesiHesaplama /> },
  { path: "/desi-hesaplama/yurtici-kargo-desi-hesaplama", element: <YurticiKargoDesiHesaplama /> },
  { path: "/desi-hesaplama/mng-kargo-desi-hesaplama", element: <MNGKargoDesiHesaplama /> },
  { path: "/desi-hesaplama/trendyol-desi-hesaplama", element: <TrendyolDesiHesaplama /> },
  { path: "/kira-artis-orani-hesaplama", element: <KiraArtisOrani /> },
  
  // Dynamic sitemap.xml endpoint
  { path: "/sitemap.xml", element: <SitemapXML /> }
];
