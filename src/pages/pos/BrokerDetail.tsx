
import { useParams } from "react-router-dom";
import { borsaAraciKurumProviders } from "@/data/pos-types/borsaAraciKurum";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info, CheckCircle2, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BrokerDetail = () => {
  const { id } = useParams();
  const broker = borsaAraciKurumProviders.find(b => b.id === id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!broker) {
    return (
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-2xl font-bold mb-4">Aracı Kurum Bulunamadı</h1>
        <p>Aradığınız aracı kurum sistemimizde bulunamadı.</p>
      </div>
    );
  }

  const currentYear = new Date().getFullYear();
  const pageTitle = `${broker.name} Komisyon Oranları ${currentYear}`;
  const pageDescription = `${currentYear} ${broker.name} komisyon oranları: ${broker.type} için ${broker.commission_rate} komisyon oranı. Güncel ${broker.name} başvuru şartları ve detaylı bilgiler.`;

  return (
    <>
      <Helmet>
        <title>{pageTitle} | Poskomisyon.com</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">{pageTitle}</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          {currentYear} {broker.name} borsa komisyon oranları, yatırımcılar için avantajlı seçenekler sunuyor. {broker.name} ile hisse senedi, viop ve diğer yatırım araçlarında işlemlerinizi güvenle gerçekleştirin.
        </p>
        
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <img src={broker.logo} alt={broker.name} className="w-16 h-16 object-contain" />
              <h1 className="font-semibold text-2xl">{broker.name}</h1>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary-hover">
              Hemen Başvur
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div>
              <p className="text-gray-500 mb-2">Kurum Türü</p>
              <p className="font-medium text-lg">{broker.type}</p>
            </div>
            <div>
              <p className="text-gray-500 mb-2">Hesap Bakım Ücreti</p>
              <p className="font-medium text-lg">{broker.monthly_fee}</p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p className="text-gray-500 mb-2">Komisyon Oranı</p>
                <Info className="w-4 h-4 text-gray-400" />
              </div>
              <p className="font-medium text-lg">{broker.commission_rate}</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="explanation" className="w-full">
          <TabsList className="w-full justify-start border-b rounded-none bg-transparent space-x-8">
            <TabsTrigger 
              value="explanation" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0"
            >
              Açıklama
            </TabsTrigger>
            <TabsTrigger 
              value="commissions" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0"
            >
              Komisyon Oranları
            </TabsTrigger>
            <TabsTrigger 
              value="features" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0"
            >
              Özellikler
            </TabsTrigger>
          </TabsList>

          <TabsContent value="explanation" className="mt-12">
            <Card className="border-none shadow-none mb-12">
              <div className="space-y-6 text-gray-600">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                  <p>Avantajlı komisyon oranlarından yararlanmak için hemen yatırım hesabınızı açın!</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                  <p>Hesap açılışı tamamen ücretsiz ve hızlı bir şekilde yapılabilmektedir.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                  <p>Yatırım işlemlerinizi mobil uygulama üzerinden güvenle gerçekleştirebilirsiniz.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                  <p>Uzman analistlerden piyasa değerlendirmeleri ve yatırım tavsiyeleri alabilirsiniz.</p>
                </div>
              </div>
            </Card>

            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <HelpCircle className="w-5 h-5" />
                Sıkça Sorulan Sorular
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Hesap açılışı için gerekli belgeler nelerdir?</AccordionTrigger>
                  <AccordionContent>
                    Hesap açılışı için kimlik fotokopisi, adres belgesi ve gelir belgesi gerekmektedir. Bazı durumlarda bu belgeler online olarak da yüklenebilmektedir.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Ne kadar minimum yatırımla başlayabilirim?</AccordionTrigger>
                  <AccordionContent>
                    Minimum başlangıç tutarı aracı kurumlara göre değişiklik gösterebilmektedir, ancak genellikle 1.000 TL ile başlangıç yapılabilmektedir.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>

          <TabsContent value="commissions" className="mt-12">
            <Card className="border-none shadow-none mb-12">
              <p className="text-gray-600">Farklı işlem türlerindeki komisyon oranlarını aşağıda bulabilirsiniz. Komisyon oranları, işlem hacmi ve yatırım stratejilerinize göre değişiklik gösterebilir.</p>
              
              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Hisse Senedi İşlemleri</h4>
                    <p className="text-sm text-gray-600">Komisyon Oranı: {broker.commission_rate}</p>
                  </div>
                  
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-medium mb-2">VİOP İşlemleri</h4>
                    <p className="text-sm text-gray-600">Komisyon Oranı: %0.05 - %0.08</p>
                  </div>
                  
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Tahvil/Bono İşlemleri</h4>
                    <p className="text-sm text-gray-600">Komisyon Oranı: %0.1 - %0.2</p>
                  </div>
                  
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Yabancı Menkul İşlemleri</h4>
                    <p className="text-sm text-gray-600">Komisyon Oranı: %0.2 - %0.4</p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <HelpCircle className="w-5 h-5" />
                Komisyonlar Hakkında SSS
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Komisyon oranları sabit midir?</AccordionTrigger>
                  <AccordionContent>
                    Komisyon oranları işlem hacminize ve yatırım stratejinize göre değişiklik gösterebilir. Yüksek hacimli işlemler için indirimli komisyon oranları mevcuttur.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Komisyonlar haricinde başka ücretler var mıdır?</AccordionTrigger>
                  <AccordionContent>
                    İşlem komisyonları dışında, hesap bakım ücreti, veri akış ücreti ve EFT/Havale ücretleri olabilir. Bu ücretler aracı kuruma göre değişiklik gösterebilir.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>

          <TabsContent value="features" className="mt-12">
            <Card className="border-none shadow-none mb-12">
              <div className="space-y-4">
                {broker.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <p className="text-gray-600">{feature}</p>
                  </div>
                ))}
              </div>
            </Card>

            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <HelpCircle className="w-5 h-5" />
                Özellikler Hakkında SSS
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Mobil uygulama üzerinden tüm işlemler yapılabilir mi?</AccordionTrigger>
                  <AccordionContent>
                    Evet, mobil uygulama üzerinden hisse senedi alım-satımı, portföy takibi, piyasa analizi gibi tüm işlemler yapılabilmektedir.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Yatırım danışmanlığı hizmeti nasıl alınır?</AccordionTrigger>
                  <AccordionContent>
                    Yatırım danışmanlığı hizmeti almak için müşteri temsilcinizle iletişime geçebilir veya aracı kurumun ilgili birimine başvurabilirsiniz.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default BrokerDetail;
