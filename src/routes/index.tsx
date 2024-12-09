import { createBrowserRouter } from "react-router-dom";
import Index from "@/pages/Index";
import Blog from "@/pages/Blog";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import POSCihaziNasilAlinir from "@/pages/blog/pos-cihazi-nasil-alinir";
import POSKomisyonOranlari from "@/pages/blog/pos-komisyon-oranlari";
import SanalPOSFizikiPOS from "@/pages/blog/sanal-pos-fiziki-pos-karsilastirma";

export const routes = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/terms-of-service",
    element: <TermsOfService />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/pos-cihazi-nasil-alinir",
    element: <POSCihaziNasilAlinir />,
  },
  {
    path: "/blog/pos-komisyon-oranlari",
    element: <POSKomisyonOranlari />,
  },
  {
    path: "/blog/sanal-pos-fiziki-pos-karsilastirma",
    element: <SanalPOSFizikiPOS />,
  },
];

export const router = createBrowserRouter(routes);

export default router;