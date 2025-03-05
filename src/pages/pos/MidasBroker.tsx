
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

const MidasBroker = () => {
  const broker = digitalBrokers.find(b => b.id === "midas");
  
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
          {currentYear} Midas yatırım komisyon oranları, bireysel yatırımcılar için yenilikçi ve avantajlı seçenekler sunuyor. Midas ile hem yerli hem yabancı hisse senetlerine tek uygulama üzerinden kolayca erişebilirsiniz.
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
                  <p>Midas, Türkiye'nin ilk dijital yatırım platformlarından biridir.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                  <p>Tamamen dijital olarak hesap açabilir ve anında işlem yapmaya başlayabilirsiniz.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                  <p>Borsa İstanbul ve ABD borsalarına tek uygulama üzerinden erişim sağlayabilirsiniz.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                  <p>Düşük komisyon oranları ile daha fazla kazanç elde edebilirsiniz.</p>
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
                  <AccordionTrigger>Midas'ta hesap açmak ücretsiz mi?</AccordionTrigger>
                  <AccordionContent>
                    Evet, Midas'ta hesap açmak tamamen ücretsizdir ve herhangi bir hesap bakım ücreti bulunmamaktadır.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Yabancı hisselerde işlem yapmak için ne gerekiyor?</AccordionTrigger>
                  <AccordionContent>
                    Midas hesabınızı açtıktan sonra ABD borsalarında işlem yapmak için Dolar yatırmanız yeterlidir. Ek bir hesap açılışı gerekmez.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>

          <TabsContent value="commissions" className="mt-12">
            <Card className="border-none shadow-none mb-12">
              <p className="text-gray-600">Midas'ın şeffaf ve rekabetçi komisyon oranları sayesinde daha fazla kazanç elde edebilirsiniz.</p>
              
              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-medium mb-2">BIST Hisse Senedi İşlemleri</h4>
                    <p className="text-sm text-gray-600">Komisyon Oranı: {broker.commission_rate}</p>
                  </div>
                  
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-medium mb-2">ABD Hisse Senedi İşlemleri</h4>
                    <p className="text-sm text-gray-600">Komisyon: 0.99$ / İşlem</p>
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
                  <AccordionTrigger>Midas'ta kur çevirme ücreti var mı?</AccordionTrigger>
                  <AccordionContent>
                    Evet, döviz çevirme işlemlerinde %0.5 oranında bir kur çevirme ücreti uygulanmaktadır.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Para çekme işlemlerinde komisyon alınıyor mu?</AccordionTrigger>
                  <AccordionContent>
                    Hayır, Midas'ta para çekme işlemleri ücretsizdir. Sadece bankanızın EFT ücreti yansıyabilir.
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
                  <p className="text-gray-600">Hisse senetlerinde dilimli alım yapabilme imkanı</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                  <p className="text-gray-600">Kullanıcı dostu arayüz ile kolay işlem yapabilme</p>
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
                  <AccordionTrigger>Midas'ta teknik analiz yapabilir miyim?</AccordionTrigger>
                  <AccordionContent>
                    Midas uygulamasında temel grafik verileri bulunmaktadır, ancak detaylı teknik analiz için şu an sınırlı imkanlar vardır.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Midas'ta hangi borsalara erişebilirim?</AccordionTrigger>
                  <AccordionContent>
                    Midas ile Borsa İstanbul (BIST) ve Amerika borsalarına (NYSE, NASDAQ, AMEX) erişebilirsiniz.
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

export default MidasBroker;
