
import { bankBrokers } from "@/data/pos-types/borsa/bankBrokers";
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

const IsYatirimBroker = () => {
  const broker = bankBrokers.find(b => b.id === "is-yatirim");
  
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
          {currentYear} İş Yatırım komisyon oranları ve yatırım hizmetleri, profesyonel bir borsa deneyimi sunuyor. Türkiye'nin lider aracı kurumlarından biri olan İş Yatırım ile piyasalara güvenle erişin.
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
                  <p>İş Yatırım, Türkiye'nin en köklü ve güvenilir aracı kurumlarından biridir.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                  <p>30 yılı aşkın deneyimi ile yatırımcılara profesyonel hizmet sunmaktadır.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                  <p>TradeMaster platformu ile hızlı ve güvenli işlem imkanı sağlar.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                  <p>Geniş şube ağı ile yatırımcılara yüz yüze hizmet sunabilmektedir.</p>
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
                  <AccordionTrigger>İş Yatırım'da hesap açmak için ne gerekiyor?</AccordionTrigger>
                  <AccordionContent>
                    İş Yatırım'da hesap açmak için kimlik belgesi, adres belgesi ve gelir belgesi gereklidir. Şubeden veya online başvuru yapabilirsiniz.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>İş Bankası müşterisi olmam gerekiyor mu?</AccordionTrigger>
                  <AccordionContent>
                    Hayır, İş Bankası müşterisi olmasanız da İş Yatırım'da hesap açabilirsiniz. Ancak İş Bankası müşterisi iseniz bazı avantajlardan faydalanabilirsiniz.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>

          <TabsContent value="commissions" className="mt-12">
            <Card className="border-none shadow-none mb-12">
              <p className="text-gray-600">İş Yatırım'ın komisyon oranları işlem hacmi ve yatırım stratejinize göre değişiklik gösterebilir.</p>
              
              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Hisse Senedi İşlemleri</h4>
                    <p className="text-sm text-gray-600">Komisyon Oranı: %0,20 - %0,24</p>
                  </div>
                  
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-medium mb-2">VİOP İşlemleri</h4>
                    <p className="text-sm text-gray-600">Komisyon Oranı: %0,05 - %0,07</p>
                  </div>
                  
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Tahvil/Bono İşlemleri</h4>
                    <p className="text-sm text-gray-600">Komisyon Oranı: %0,1 - %0,2</p>
                  </div>
                  
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Yabancı Menkul İşlemleri</h4>
                    <p className="text-sm text-gray-600">Komisyon Oranı: %0,3 - %0,5</p>
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
                  <AccordionTrigger>Komisyon oranlarında indirim alabilir miyim?</AccordionTrigger>
                  <AccordionContent>
                    Evet, işlem hacmine bağlı olarak komisyon indirimlerinden faydalanabilirsiniz. Ayrıca VIP müşteri statüsüne geçiş yaparak özel oranlar alabilirsiniz.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Ekstralar aylık olarak gönderiliyor mu?</AccordionTrigger>
                  <AccordionContent>
                    Evet, işlem ekstralarınız her ay e-posta adresinize gönderilir. Ayrıca TradeMaster uygulaması üzerinden de geçmiş ekstralarınıza erişebilirsiniz.
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
                  <p className="text-gray-600">40'tan fazla şube ile yüz yüze hizmet</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                  <p className="text-gray-600">7/24 telefon desteği</p>
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
                  <AccordionTrigger>TradeMaster uygulaması tüm cihazlarla uyumlu mu?</AccordionTrigger>
                  <AccordionContent>
                    Evet, TradeMaster Windows, Mac OS, iOS ve Android işletim sistemleriyle uyumludur.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Araştırma raporlarına nasıl erişebilirim?</AccordionTrigger>
                  <AccordionContent>
                    İş Yatırım'ın araştırma raporlarına TradeMaster uygulaması veya web sitesi üzerinden erişebilirsiniz. Bazı özel raporlar sadece belirli segment müşteriler için sunulmaktadır.
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

export default IsYatirimBroker;
