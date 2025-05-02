import { TrendingUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BorsaAraciKurumFeatures from "@/components/pos-types/borsa/BorsaAraciKurumFeatures";
import BorsaAraciKurumFAQ from "@/components/pos-types/borsa/BorsaAraciKurumFAQ";
import BorsaAraciKurumAgreements from "@/components/pos-types/borsa/BorsaAraciKurumAgreements";
import BorsaAraciKurumProviderCards from "@/components/pos-types/borsa/BorsaAraciKurumProviderCards";
import CanonicalLink from "@/components/CanonicalLink";
import { Helmet } from "react-helmet";
const BorsaAraciKurum = () => {
  return <>
      <Helmet>
        <title>Borsa Aracı Kurum Komisyon Oranları | Poskomisyon.com</title>
        <meta name="description" content="Borsa aracı kurumlarının güncel komisyon oranlarını karşılaştırın, yatırımlarınız için en uygun aracı kurumu kolayca bulun." />
      </Helmet>
      
      <CanonicalLink path="/pos-types/borsa" />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <TrendingUp className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Borsa Aracı Kurum Komisyon Oranları</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Borsa aracı kurumlarının güncel komisyon oranlarını karşılaştırın, yatırımlarınız için en uygun aracı kurumu kolayca bulun.
          </p>
        </div>

        

        

        <h2 className="text-3xl font-bold mb-8 text-center">Türkiye'nin Önde Gelen Aracı Kurumları</h2>
        <BorsaAraciKurumProviderCards />
      </div>
    </>;
};
export default BorsaAraciKurum;