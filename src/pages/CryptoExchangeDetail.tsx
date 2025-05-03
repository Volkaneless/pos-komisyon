
import { useParams } from "react-router-dom";
import { cryptoExchanges } from "@/data/crypto/index";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Info, 
  CheckCircle2, 
  HelpCircle, 
  Shield, 
  Percent, 
  Globe,
  CreditCard
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CryptoFeatures from "@/components/crypto/CryptoFeatures";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CryptoExchangeDetail = () => {
  const { id } = useParams();
  const exchange = cryptoExchanges.find(e => e.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!exchange) {
    return (
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-2xl font-bold mb-4">Kripto Borsası Bulunamadı</h1>
        <p>Aradığınız kripto borsası sistemimizde bulunamadı.</p>
      </div>
    );
  }

  const currentYear = new Date().getFullYear();
  const pageTitle = `${exchange.name} Komisyon Hesaplama & Oranları ${currentYear}`;
  const pageDescription = `${currentYear} ${exchange.name} komisyon oranları: ${exchange.trading_fee} işlem ücreti, ${exchange.withdrawal_fee} çekim ücreti. Güncel ${exchange.name} detayları ve karşılaştırma.`;

  return (
    <>
      <Helmet>
        <title>{pageTitle} | Poskomisyon.com</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">{exchange.name} Komisyon Hesaplama & Oranları {currentYear}</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          {currentYear} {exchange.name} komisyon oranları ve özellikleri hakkında detaylı bilgi. {exchange.is_turkish ? "Türkiye" : "Global"} merkezli {exchange.name} borsasında güvenle işlem yapın.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="border-none shadow-none mb-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <img src={exchange.logo} alt={exchange.name} className="w-20 h-20 object-contain" />
                  <div>
                    <h1 className="font-semibold text-2xl">{exchange.name}</h1>
                    <p className="text-gray-500">{exchange.country}</p>
                  </div>
                </div>
                <Button size="lg" className="bg-primary hover:bg-primary-hover">
                  Hemen Başvur
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-500 mb-2">Kuruluş Yılı</p>
                  <p className="font-medium text-lg">{exchange.year_founded}</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-2">İşlem Ücreti</p>
                  <p className="font-medium text-lg">{exchange.trading_fee}</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-2">Para Yatırma</p>
                  <p className="font-medium text-lg">{exchange.deposit_methods}</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-2">Para Çekme</p>
                  <p className="font-medium text-lg">{exchange.withdrawal_methods}</p>
                </div>
              </div>
            </Card>

            <Tabs defaultValue="explanation" className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none bg-transparent space-x-8">
                <TabsTrigger 
                  value="explanation" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0"
                >
                  Açıklama
                </TabsTrigger>
                <TabsTrigger 
                  value="fees" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0"
                >
                  Ücretler
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
                      <p>{exchange.name}, {exchange.description}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                      <p>{exchange.name}, kullanıcılarına güvenli ve kolay bir kripto para alım satım deneyimi sunmayı hedefler.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                      <p>{exchange.name}, farklı kripto para birimlerini destekler ve sürekli olarak yeni coinler ekler.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                      <p>{exchange.name}, kullanıcı dostu arayüzü sayesinde hem yeni başlayanlar hem de deneyimli traderlar için uygundur.</p>
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
                      <AccordionTrigger>{exchange.name}'e nasıl kayıt olabilirim?</AccordionTrigger>
                      <AccordionContent>
                        {exchange.name}'e kayıt olmak için web sitesini ziyaret edebilir ve kayıt formunu doldurabilirsiniz.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Hangi kripto para birimlerini destekliyorsunuz?</AccordionTrigger>
                      <AccordionContent>
                        {exchange.name}, Bitcoin, Ethereum, Litecoin ve daha birçok popüler kripto para birimini desteklemektedir.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </TabsContent>

              <TabsContent value="fees" className="mt-12">
                <Card className="border-none shadow-none mb-12">
                  <p className="text-gray-600">
                    {exchange.name} borsasının ücretleri hakkında detaylı bilgi.
                  </p>
                  
                  <div className="mt-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border p-4 rounded-lg">
                        <h4 className="font-medium mb-2">İşlem Ücreti</h4>
                        <p className="text-sm text-gray-600">{exchange.trading_fee}</p>
                      </div>
                      
                      <div className="border p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Çekim Ücreti</h4>
                        <p className="text-sm text-gray-600">{exchange.withdrawal_fee}</p>
                      </div>
                      
                      <div className="border p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Para Yatırma Ücreti</h4>
                        <p className="text-sm text-gray-600">Ücretsiz</p>
                      </div>
                      
                      <div className="border p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Hesap İşletim Ücreti</h4>
                        <p className="text-sm text-gray-600">Yok</p>
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
                      <AccordionTrigger>İşlem ücretleri neye göre değişiyor?</AccordionTrigger>
                      <AccordionContent>
                        İşlem ücretleri, işlem hacminize ve kullandığınız kripto para birimine göre değişiklik gösterebilir.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Para çekme ücretleri sabit mi?</AccordionTrigger>
                      <AccordionContent>
                        Para çekme ücretleri, çekmek istediğiniz kripto para birimine göre değişiklik gösterebilir.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </TabsContent>

              <TabsContent value="features" className="mt-12">
                <Card className="border-none shadow-none mb-12">
                  <CryptoFeatures />
                </Card>

                <div className="mt-12">
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5" />
                    Özellikler Hakkında SSS
                  </h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>{exchange.name} güvenli mi?</AccordionTrigger>
                      <AccordionContent>
                        {exchange.name}, güvenlik önlemleri konusunda titizdir ve kullanıcıların varlıklarını korumak için çeşitli yöntemler kullanır.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Mobil uygulama mevcut mu?</AccordionTrigger>
                      <AccordionContent>
                        Evet, {exchange.name}'in mobil uygulaması bulunmaktadır ve iOS ile Android cihazlarda kullanılabilir.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <Card className="border-none shadow-none">
              <CardContent>
                <h3 className="text-xl font-semibold mb-4">
                  <Globe className="w-5 h-5 inline-block mr-2" />
                  {exchange.name} Hakkında
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <span className="font-semibold">Web Sitesi:</span>{" "}
                    <a href={exchange.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {exchange.website}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Merkez:</span> {exchange.headquarters}
                  </p>
                  <p>
                    <span className="font-semibold">Kullanılabilirlik:</span> {exchange.availability}
                  </p>
                  <p>
                    <span className="font-semibold">Mobil Uygulama:</span> {exchange.mobile_app ? "Var" : "Yok"}
                  </p>
                  <p>
                    <span className="font-semibold">Müşteri Desteği:</span> {exchange.customer_support}
                  </p>
                  <p>
                    <span className="font-semibold">Sosyal Medya:</span>{" "}
                    <a href={exchange.social_media} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {exchange.social_media}
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoExchangeDetail;
