
import { digitalBrokers } from "@/data/pos-types/borsa/digitalBrokers";
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

const MatriksBroker = () => {
  const broker = digitalBrokers.find(b => b.id === "matriks");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!broker) {
    return (
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-2xl font-bold mb-4">Aracı Kurum Bulunamadı</h1>
        <p>Aradığınız aracı kurum sistemimizde bulunamadı.</p>
      </div>
    );
  }

  const currentYear = new Date().getFullYear();
  const pageTitle = `${broker.name} Komisyon Hesaplama & Oranları ${currentYear}`;
  const pageDescription = `${currentYear} ${broker.name} komisyon oranları: ${broker.type} için ${broker.commission_rate} komisyon oranı. Güncel ${broker.name} başvuru şartları ve detaylı bilgiler.`;

  return (
    <>
      <Helmet>
        <title>{pageTitle} | Poskomisyon.com</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">{broker.name} Komisyon Hesaplama & Oranları {currentYear}</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          {currentYear} Matriks yatırım komisyon oranları ve veri terminali ücretleri, profesyonel yatırımcılar için gelişmiş analiz araçları sunuyor. Matriks ile piyasaları anlık takip edin, güçlü analizler yapın.
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
              <p className="text-gray-500 mb-2">Terminal Ücreti</p>
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
              Ücretlendirme
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
                  <p>Matriks, Türkiye'nin önde gelen finansal veri ve analiz platformlarından biridir.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                  <p>Profesyonel yatırımcılar için gelişmiş teknik analiz araçları sunar.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                  <p>Anlık veri akışı ve derinlikli piyasa verilerine erişim sağlar.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                  <p>Farklı kullanıcı ihtiyaçlarına göre özelleştirilebilir ekranlar sunar.</p>
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
                  <AccordionTrigger>Matriks'i hangi cihazlarda kullanabilirim?</AccordionTrigger>
                  <AccordionContent>
                    Matriks'i Windows bilgisayarlar, Mac OS, iOS ve Android cihazlarınızda kullanabilirsiniz.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Deneme sürümü var mı?</AccordionTrigger>
                  <AccordionContent>
                    Evet, Matriks'i satın almadan önce ücretsiz deneme sürümünü kullanabilirsiniz.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>

          <TabsContent value="commissions" className="mt-12">
            <Card className="border-none shadow-none mb-12">
              <p className="text-gray-600">Matriks'in farklı ihtiyaçlara yönelik çeşitli paketleri bulunmaktadır.</p>
              
              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Matriks Trader</h4>
                    <p className="text-sm text-gray-600">Aylık Ücret: 159 TL</p>
                    <p className="text-xs text-gray-500 mt-2">Temel işlem özellikleri ve anlık veriler</p>
                  </div>
                  
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Matriks Pro</h4>
                    <p className="text-sm text-gray-600">Aylık Ücret: 249 TL</p>
                    <p className="text-xs text-gray-500 mt-2">Gelişmiş analiz araçları ve derinlikli veriler</p>
                  </div>
                  
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Matriks Expert</h4>
                    <p className="text-sm text-gray-600">Aylık Ücret: 399 TL</p>
                    <p className="text-xs text-gray-500 mt-2">Profesyonel analiz araçları ve özel göstergeler</p>
                  </div>
                  
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Matriks Mobile</h4>
                    <p className="text-sm text-gray-600">Aylık Ücret: 99 TL</p>
                    <p className="text-xs text-gray-500 mt-2">Mobil cihazlar için optimize edilmiş platform</p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <HelpCircle className="w-5 h-5" />
                Ücretlendirme Hakkında SSS
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Yıllık ödeme avantajı var mı?</AccordionTrigger>
                  <AccordionContent>
                    Evet, yıllık paketlerde %15'e varan indirimler sunulmaktadır.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Öğrenciler için indirim var mı?</AccordionTrigger>
                  <AccordionContent>
                    Evet, geçerli öğrenci belgesi ile %30'a varan öğrenci indirimi mevcuttur.
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

                <div className="flex items-start gap-3 mt-6">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                  <p className="text-gray-600">Özel gösterge ve indikatör oluşturma imkanı</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                  <p className="text-gray-600">Gelişmiş tarama fonksiyonları</p>
                </div>
              </div>
            </Card>

            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <HelpCircle className="w-5 h-5" />
                Özellikler Hakkında SSS
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Matriks'te algoritmik işlem yapabilir miyim?</AccordionTrigger>
                  <AccordionContent>
                    Evet, Matriks Expert paketi ile algoritmik işlem özellikleri kullanılabilmektedir.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Yabancı borsaları takip edebilir miyim?</AccordionTrigger>
                  <AccordionContent>
                    Evet, Global Data paketi ile ABD borsaları başta olmak üzere dünya borsalarını takip edebilirsiniz.
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

export default MatriksBroker;
