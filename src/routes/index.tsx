import { RouteObject } from "react-router-dom";
import Index from "@/pages/Index";
import Calculator from "@/pages/Calculator";
import Blog from "@/pages/Blog";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Dashboard from "@/pages/Dashboard";

// POS Type Pages
import YazarkasaPOS from "@/pages/pos-types/YazarkasaPOS";
import SanalPOS from "@/pages/pos-types/SanalPOS";
import MobilPOS from "@/pages/pos-types/MobilPOS";
import CepPOS from "@/pages/pos-types/CepPOS";

// POS Provider Pages
import QNBPayPOS from "@/pages/pos/QNBPayPOS";
import QNBPayPOSKomisyon from "@/pages/pos/QNBPayPOSKomisyon";
import QNBPayPOSOzellikler from "@/pages/pos/QNBPayPOSOzellikler";
import QNBPayPOSIletisim from "@/pages/pos/QNBPayPOSIletisim";
import QNBPayPOSDestek from "@/pages/pos/QNBPayPOSDestek";

// Main Routes
export const mainRoutes: RouteObject[] = [
  { path: "/", element: <Index /> },
  { path: "/calculator", element: <Calculator /> },
  { path: "/blog", element: <Blog /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/dashboard", element: <Dashboard /> },
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
  { path: "/pos/qnbpay-pos", element: <QNBPayPOS /> },
  { path: "/pos/qnbpay-pos/komisyon-oranlari", element: <QNBPayPOSKomisyon /> },
  { path: "/pos/qnbpay-pos/ozellikleri", element: <QNBPayPOSOzellikler /> },
  { path: "/pos/qnbpay-pos/iletisim", element: <QNBPayPOSIletisim /> },
  { path: "/pos/qnbpay-pos/destek-hatti", element: <QNBPayPOSDestek /> },
];

// Combine all routes
export const routes: RouteObject[] = [
  ...mainRoutes,
  ...posTypeRoutes,
  ...posProviderRoutes,
];
