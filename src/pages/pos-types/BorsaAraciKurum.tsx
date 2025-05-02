
import { TrendingUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BorsaAraciKurumFeatures from "@/components/pos-types/borsa/BorsaAraciKurumFeatures";
import BorsaAraciKurumFAQ from "@/components/pos-types/borsa/BorsaAraciKurumFAQ";
import BorsaAraciKurumAgreements from "@/components/pos-types/borsa/BorsaAraciKurumAgreements";
import BorsaAraciKurumProviderCards from "@/components/pos-types/borsa/BorsaAraciKurumProviderCards";
import CanonicalLink from "@/components/CanonicalLink";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const BorsaAraciKurum = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
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

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Borsa Aracı Kurumları Hakkında</h2>
          <p className="text-gray-600 mb-4">
            Borsa aracı kurumları, yatırımcıların hisse senedi, tahvil, bono ve diğer finansal enstrümanlar ile işlem yapabilmesini sağlayan finansal kuruluşlardır. Bu kurumlar Sermaye Piyasası Kurulu (SPK) tarafından yetkilendirilir ve denetlenir.
          </p>
          <p className="text-gray-600 mb-4">
            Aracı kurumlar, yatırımcılar ile finansal piyasalar arasında köprü görevi görerek, alım-satım emirlerinin iletilmesi, portföy yönetimi, yatırım danışmanlığı ve araştırma raporları gibi hizmetler sunarlar.
          </p>
          <p className="text-gray-600">
            Bu sayfada, Türkiye'deki önde gelen aracı kurumların komisyon oranlarını, hizmetlerini ve özelliklerini karşılaştırabilirsiniz. Doğru aracı kurumu seçmek, yatırım stratejinize ve bütçenize uygun maliyetlerle işlem yapmanızı sağlar.
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center">Türkiye'nin Önde Gelen Aracı Kurumları</h2>
        <BorsaAraciKurumProviderCards />

        <Tabs defaultValue="overview" className="w-full mb-12 mt-12">
          <TabsList className="w-full justify-start border-b rounded-none bg-transparent space-x-8">
            <TabsTrigger 
              value="overview" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0"
            >
              Genel Bakış
            </TabsTrigger>
            <TabsTrigger 
              value="features" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0"
            >
              Özellikler
            </TabsTrigger>
            <TabsTrigger 
              value="faq" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0"
            >
              Sıkça Sorulan Sorular
            </TabsTrigger>
            <TabsTrigger 
              value="agreements" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0"
            >
              Anlaşma ve Şartlar
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-8">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Borsa Aracı Kurumları Hakkında Detaylı Bilgi</h2>
              <p className="text-gray-600 mb-4">
                Borsa aracı kurumları, yatırımcıların hisse senedi, tahvil, bono ve diğer finansal enstrümanlar ile işlem yapabilmesini sağlayan finansal kuruluşlardır. Bu kurumlar Sermaye Piyasası Kurulu (SPK) tarafından yetkilendirilir ve denetlenir.
              </p>
              <p className="text-gray-600 mb-4">
                Aracı kurumlar, yatırımcılar ile finansal piyasalar arasında köprü görevi görerek, alım-satım emirlerinin iletilmesi, portföy yönetimi, yatırım danışmanlığı ve araştırma raporları gibi hizmetler sunarlar.
              </p>
              <p className="text-gray-600">
                Bu sayfada, Türkiye'deki önde gelen aracı kurumların komisyon oranlarını, hizmetlerini ve özelliklerini karşılaştırabilirsiniz. Doğru aracı kurumu seçmek, yatırım stratejinize ve bütçenize uygun maliyetlerle işlem yapmanızı sağlar.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="features" className="mt-8">
            <BorsaAraciKurumFeatures />
          </TabsContent>

          <TabsContent value="faq" className="mt-8">
            <BorsaAraciKurumFAQ />
          </TabsContent>

          <TabsContent value="agreements" className="mt-8">
            <BorsaAraciKurumAgreements />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};
export default BorsaAraciKurum;
