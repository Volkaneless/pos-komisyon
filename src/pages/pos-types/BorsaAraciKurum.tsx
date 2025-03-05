
import { TrendingUp } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BorsaAraciKurumFeatures from "@/components/pos-types/borsa/BorsaAraciKurumFeatures";
import BorsaAraciKurumFAQ from "@/components/pos-types/borsa/BorsaAraciKurumFAQ";
import BorsaAraciKurumAgreements from "@/components/pos-types/borsa/BorsaAraciKurumAgreements";
import BorsaAraciKurumProviderCards from "@/components/pos-types/borsa/BorsaAraciKurumProviderCards";
import CanonicalLink from "@/components/CanonicalLink";

const BorsaAraciKurum = () => {
  return (
    <>
      <CanonicalLink path="/pos-types/borsa" />
      
      <POSTypePage
        title="Borsa Aracı Kurum Komisyon Oranları"
        description="Borsa aracı kurumlarının güncel komisyon oranlarını karşılaştırın, yatırımlarınız için en uygun aracı kurumu kolayca bulun."
        type="Borsa Aracı Kurum"
        Icon={TrendingUp}
        whatIsContent="Borsa aracı kurumları, yatırımcıların hisse senedi, tahvil, bono ve diğer finansal enstrümanlara yatırım yapabilmesi için aracılık hizmeti sunan kurumlardır."
        advantages={[
          "Düşük komisyon oranları",
          "Hızlı işlem gerçekleştirme",
          "Piyasa analiz araçları",
          "Uzman yatırım danışmanlığı",
          "Mobil uygulama desteği"
        ]}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="bg-primary/5 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Borsa Aracı Kurumları Hakkında</h2>
          <p className="text-gray-700 mb-3">
            Borsa aracı kurumları, yatırımcıların sermaye piyasalarına erişimini sağlayan finansal kuruluşlardır. 
            Bu kurumlar, hisse senedi, tahvil, VİOP ve diğer yatırım araçlarında alım-satım işlemlerinin yürütülmesinde 
            aracılık yapar ve yatırımcılara finansal danışmanlık hizmetleri sunar.
          </p>
          <p className="text-gray-700">
            Türkiye'de faaliyet gösteren aracı kurumlar arasında banka iştiraki olan kurumlar, bağımsız kurumlar 
            ve son yıllarda yaygınlaşan dijital aracı kurumlar bulunmaktadır. Her birinin komisyon oranları, 
            sundukları hizmetler ve kullanıcı deneyimleri farklılık gösterebilir.
          </p>
        </div>

        <Tabs defaultValue="features" className="mb-12">
          <TabsList className="w-full justify-start space-x-4 border-b rounded-none">
            <TabsTrigger value="features">Özellikler</TabsTrigger>
            <TabsTrigger value="faq">Sık Sorulan Sorular</TabsTrigger>
            <TabsTrigger value="agreements">Özel Anlaşmalar</TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="mt-6">
            <BorsaAraciKurumFeatures />
          </TabsContent>

          <TabsContent value="faq" className="mt-6">
            <BorsaAraciKurumFAQ />
          </TabsContent>

          <TabsContent value="agreements" className="mt-6">
            <BorsaAraciKurumAgreements />
          </TabsContent>
        </Tabs>

        <h2 className="text-3xl font-bold mb-8 text-center">Türkiye'nin Önde Gelen Aracı Kurumları</h2>
        <BorsaAraciKurumProviderCards />
      </div>
    </>
  );
};

export default BorsaAraciKurum;
