
import { useParams } from "react-router-dom";
import { cryptoExchanges, findExchangeById } from "@/data/crypto";
import { 
  Coins, 
  Calendar, 
  MapPin, 
  CreditCard, 
  Building2, 
  Smartphone,
  Check,
  X,
  ArrowRight,
  ExternalLink,
  Info,
  CheckCircle2,
  HelpCircle,
  ChevronRight,
  Shield,
  Percent,
  TrendingUp,
  Wallet
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CryptoFAQ from "@/components/crypto/CryptoFAQ";
import ImportantInfo from "@/components/crypto/ImportantInfo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";
import MetaTags from "@/components/MetaTags";
import CryptoFeatures from "@/components/crypto/CryptoFeatures";

const CryptoExchangeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const exchange = findExchangeById(id || '');
  const currentYear = new Date().getFullYear();
  
  if (!exchange) {
    return (
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-2xl font-bold">Borsa bulunamadı</h1>
        <p className="mt-4">Aradığınız kripto para borsası bulunamadı.</p>
      </div>
    );
  }
  
  const pageTitle = `${exchange.name} Komisyon Oranları ${currentYear}`;
  const pageDescription = `${exchange.name} kripto para borsası komisyon oranları, özellikleri ve detaylı incelemesi. Maker ücreti: ${exchange.maker_fee}, Taker ücreti: ${exchange.taker_fee}.`;
  
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": exchange.name,
    "description": pageDescription,
    "url": `https://poskomisyon.com/kripto-borsalari/${exchange.id}`,
    "logo": exchange.logo,
    "offers": {
      "@type": "Offer",
      "price": exchange.maker_fee.replace("%", ""),
      "priceCurrency": "TRY"
    }
  };

  return (
    <>
      <MetaTags
        title={pageTitle}
        description={pageDescription}
        canonicalPath={`/kripto-borsalari/${exchange.id}`}
        structuredData={structuredData}
      />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        {/* Hero Section with Gradient Background */}
        <div className="relative overflow-hidden rounded-2xl mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary-lighter opacity-80"></div>
          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-lg shadow-md">
                  <img src={exchange.logo} alt={exchange.name} className="w-16 h-16 object-contain" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold mb-2 text-gray-900">{exchange.name}</h1>
                  <div className="flex items-center text-gray-700">
                    <span className="text-sm">Kripto Para Borsası</span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center text-sm">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      {exchange.founded} yılından beri
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-primary hover:bg-primary-hover font-medium">
                  <a href={`https://${exchange.id}.com`} target="_blank" rel="noopener noreferrer">
                    Hesap Aç
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="font-medium">
                  Detaylı Bilgi Al
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <Card className="shadow-sm hover:shadow transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary-lighter p-3 rounded-full">
                  <Percent className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Maker Ücreti</p>
                  <p className="font-semibold text-lg">{exchange.maker_fee}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm hover:shadow transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary-lighter p-3 rounded-full">
                  <Percent className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Taker Ücreti</p>
                  <p className="font-semibold text-lg">{exchange.taker_fee}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm hover:shadow transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary-lighter p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Merkez</p>
                  <p className="font-semibold text-lg">{exchange.headquarters}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="w-full mb-12">
          <TabsList className="w-full justify-start border-b rounded-none bg-transparent space-x-8">
            <TabsTrigger 
              value="overview" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0 font-medium"
            >
              Genel Bakış
            </TabsTrigger>
            <TabsTrigger 
              value="commissions" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0 font-medium"
            >
              Komisyon Detayları
            </TabsTrigger>
            <TabsTrigger 
              value="features" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0 font-medium"
            >
              Özellikler
            </TabsTrigger>
            <TabsTrigger 
              value="security" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0 font-medium"
            >
              Güvenlik
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-8 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <Card className="border border-gray-100">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Coins className="w-5 h-5 text-primary" />
                      Borsa Hakkında
                    </h2>
                    <div className="prose text-gray-600">
                      <p className="mb-4">
                        {exchange.name}, {exchange.founded} yılında kurulmuş, {exchange.headquarters} merkezli bir kripto para borsasıdır. 
                        Platform, kullanıcılarına güvenli ve kolay bir şekilde kripto para alım satımı yapma imkanı sunmaktadır.
                      </p>
                      <p className="mb-4">
                        {exchange.has_turkish_lira 
                          ? `${exchange.name}, Türk lirası ile doğrudan işlem yapabilme imkanı sunarak Türk kullanıcılar için büyük kolaylık sağlamaktadır.` 
                          : `${exchange.name}, dünya çapında milyonlarca kullanıcıya hizmet veren global bir kripto para borsasıdır.`
                        }
                      </p>
                      <p>
                        Borsa, maker işlemleri için {exchange.maker_fee} ve taker işlemleri için {exchange.taker_fee} komisyon oranları uygulamaktadır.
                        {exchange.mobile_app && " Ayrıca kullanıcı dostu mobil uygulaması ile istediğiniz yerden işlem yapabilirsiniz."}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-100">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      Avantajlar
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {exchange.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg border border-gray-100">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-gray-700">{feature}</p>
                        </div>
                      ))}
                      {exchange.has_turkish_lira && (
                        <div className="flex items-start gap-3 p-3 rounded-lg border border-gray-100">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-gray-700">Türk lirası ile işlem imkanı</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border border-gray-100">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-semibold mb-4">Hesap Açılış Süreci</h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-primary-lighter text-primary w-6 h-6 flex items-center justify-center rounded-full font-semibold flex-shrink-0">
                          1
                        </div>
                        <div>
                          <p className="font-medium">Kaydolma</p>
                          <p className="text-sm text-gray-600">E-posta adresinizle veya telefonunuzla ücretsiz kaydolun.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-primary-lighter text-primary w-6 h-6 flex items-center justify-center rounded-full font-semibold flex-shrink-0">
                          2
                        </div>
                        <div>
                          <p className="font-medium">Kimlik Doğrulama</p>
                          <p className="text-sm text-gray-600">KYC sürecini tamamlayın ve hesabınızı doğrulayın.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-primary-lighter text-primary w-6 h-6 flex items-center justify-center rounded-full font-semibold flex-shrink-0">
                          3
                        </div>
                        <div>
                          <p className="font-medium">Para Yatırma</p>
                          <p className="text-sm text-gray-600">TL veya kripto para yatırarak işlemlere başlayın.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-primary-lighter text-primary w-6 h-6 flex items-center justify-center rounded-full font-semibold flex-shrink-0">
                          4
                        </div>
                        <div>
                          <p className="font-medium">İşlem Yapma</p>
                          <p className="text-sm text-gray-600">Dilediğiniz kripto paraları alıp satmaya başlayın.</p>
                        </div>
                      </div>
                    </div>

                    <Button asChild className="w-full mt-6">
                      <a href={`https://${exchange.id}.com`} target="_blank" rel="noopener noreferrer">
                        Hesap Aç
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border border-gray-100">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-semibold mb-4">Ödeme Yöntemleri</h2>
                    
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-5 h-5 text-primary" />
                          <span>Kredi/Banka Kartı</span>
                        </div>
                        <span>{exchange.credit_card ? "✓" : "✗"}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-5 h-5 text-primary" />
                          <span>Banka Havalesi</span>
                        </div>
                        <span>{exchange.bank_transfer ? "✓" : "✗"}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Wallet className="w-5 h-5 text-primary" />
                          <span>Türk Lirası</span>
                        </div>
                        <span>{exchange.has_turkish_lira ? "✓" : "✗"}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-primary" />
                Sıkça Sorulan Sorular
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Hesap açmak için gerekli belgeler nelerdir?</AccordionTrigger>
                  <AccordionContent>
                    <div className="text-gray-600 space-y-2 pl-1">
                      <p>Hesap açılışı için gerekli belgeler:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Kimlik belgesi (Nüfus cüzdanı, ehliyet veya pasaport)</li>
                        <li>Adres belgesi (Son 3 aya ait fatura)</li>
                        <li>Selfie veya video doğrulama</li>
                      </ul>
                      <p className="mt-2">Bu belgeler KYC (Know Your Customer) süreci için gereklidir ve hesabınızın güvenliğini sağlar.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Ne kadar minimum yatırımla başlayabilirim?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 pl-1">
                      {exchange.name}'de minimum yatırım tutarı genellikle 10-50 TL arasındadır, bu da kripto para piyasasına düşük bütçeyle giriş yapmanıza olanak tanır. Ancak, daha etkili bir yatırım stratejisi için 500 TL ve üzeri bir başlangıç yapmak önerilir.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>Kripto para transferleri ne kadar sürer?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 pl-1">
                      Kripto para transferlerinin süresi, seçtiğiniz kripto para birimi ve ağ yoğunluğuna göre değişiklik gösterir. Bitcoin transferleri genellikle 10-60 dakika, Ethereum transferleri 1-5 dakika, Solana veya Ripple gibi hızlı blokzincirler ise saniyeler içinde gerçekleşir.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Para yatırma ve çekme işlemleri ne kadar sürer?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 pl-1">
                      TL para yatırma işlemleri havale/EFT ile genellikle aynı gün içerisinde, kredi kartıyla ise anında gerçekleşir. Para çekme işlemleri ise güvenlik kontrolleri nedeniyle 1-3 iş günü sürebilir. Kripto para yatırma ve çekme süreleri ise blockchain onay sürelerine bağlıdır.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>

          <TabsContent value="commissions" className="mt-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <Card className="border border-gray-100 mb-8">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Percent className="w-5 h-5 text-primary" />
                      Komisyon Oranları
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {exchange.name}'in sunduğu rekabetçi komisyon oranları ile yatırımlarınızdan maksimum verim alın. İşlem hacminize göre özel indirimler uygulanabilmektedir.
                    </p>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="text-left p-3 border border-gray-200 font-medium">İşlem Türü</th>
                            <th className="text-left p-3 border border-gray-200 font-medium">Standart Oran</th>
                            <th className="text-left p-3 border border-gray-200 font-medium">VIP Kullanıcılar</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-3 border border-gray-200">Spot Maker Ücreti</td>
                            <td className="p-3 border border-gray-200">{exchange.maker_fee}</td>
                            <td className="p-3 border border-gray-200">%0.05 - %0.10</td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-200">Spot Taker Ücreti</td>
                            <td className="p-3 border border-gray-200">{exchange.taker_fee}</td>
                            <td className="p-3 border border-gray-200">%0.10 - %0.15</td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-200">Vadeli İşlemler Maker</td>
                            <td className="p-3 border border-gray-200">%0.02 - %0.05</td>
                            <td className="p-3 border border-gray-200">%0.01 - %0.02</td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-200">Vadeli İşlemler Taker</td>
                            <td className="p-3 border border-gray-200">%0.05 - %0.07</td>
                            <td className="p-3 border border-gray-200">%0.03 - %0.04</td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-200">Marjin İşlemleri</td>
                            <td className="p-3 border border-gray-200">%0.10 + Günlük Faiz</td>
                            <td className="p-3 border border-gray-200">%0.07 + İndirimli Faiz</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border border-gray-100">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Info className="w-5 h-5 text-primary" />
                      Ek Ücretler
                    </h2>
                    
                    <div className="space-y-4">
                      <div className="flex flex-col">
                        <div className="flex justify-between pb-2 border-b">
                          <span className="font-medium">Para Yatırma (TL)</span>
                          <span>{exchange.has_turkish_lira ? "Ücretsiz" : "Desteklenmiyor"}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">Banka havalesi veya kredi kartı ile TL yatırma</p>
                      </div>
                      
                      <div className="flex flex-col">
                        <div className="flex justify-between pb-2 border-b">
                          <span className="font-medium">Para Çekme (TL)</span>
                          <span>₺5 - ₺10 / İşlem</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">Banka hesabınıza TL çekme işlemi</p>
                      </div>
                      
                      <div className="flex flex-col">
                        <div className="flex justify-between pb-2 border-b">
                          <span className="font-medium">Kripto Para Yatırma</span>
                          <span>Ücretsiz</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">Kripto cüzdanınızdan borsa hesabınıza transfer</p>
                      </div>
                      
                      <div className="flex flex-col">
                        <div className="flex justify-between pb-2 border-b">
                          <span className="font-medium">Kripto Para Çekme</span>
                          <span>Network Ücreti</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">Borsa hesabınızdan kripto cüzdanınıza transfer</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card className="border border-gray-100 mb-6">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-semibold mb-3">Komisyon Hesaplama Örneği</h2>
                    
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-700"><strong>İşlem:</strong> 10.000 TL'lik Bitcoin alımı</p>
                      <p className="text-gray-700"><strong>Taker Ücreti:</strong> {exchange.taker_fee}</p>
                      <p className="text-gray-700"><strong>Hesaplama:</strong> 10.000 TL × {parseFloat(exchange.taker_fee.replace('%', '')) / 100}</p>
                      <p className="font-medium text-black">Toplam Komisyon: {(10000 * parseFloat(exchange.taker_fee.replace('%', '')) / 100).toFixed(2)} TL</p>
                    </div>
                    
                    <div className="mt-4 p-3 bg-primary-lighter rounded-lg">
                      <p className="text-sm">Bu hesaplama örnek amaçlıdır. Gerçek komisyon tutarları güncel oranlara ve işlem koşullarına göre değişiklik gösterebilir.</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border border-gray-100">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-semibold mb-3">Komisyon Avantajları</h2>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                        <p className="text-sm text-gray-700">Yüksek işlem hacmi ile daha düşük komisyon oranları</p>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                        <p className="text-sm text-gray-700">VIP kullanıcılar için özel indirimler</p>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                        <p className="text-sm text-gray-700">Platform token ile ödeme yaparak komisyon indirimi</p>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                        <p className="text-sm text-gray-700">Referans programı ile komisyon paylaşımı</p>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                        <p className="text-sm text-gray-700">Maker emirleri için ekstra düşük komisyon</p>
                      </div>
                    </div>
                    
                    <Button variant="outline" asChild className="w-full mt-4">
                      <a href={`https://${exchange.id}.com/fees`} target="_blank" rel="noopener noreferrer">
                        Tüm Komisyonları Gör
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="features" className="mt-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <Card className="border border-gray-100">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      Platform Özellikleri
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="p-4 border border-gray-100 rounded-lg hover:shadow-sm transition-shadow">
                        <h3 className="font-semibold mb-2">Temel İşlemler</h3>
                        <p className="text-sm text-gray-600 mb-3">Hızlı ve kolay şekilde kripto para alım satımı yapın.</p>
                        <Collapsible>
                          <CollapsibleTrigger className="flex items-center text-sm text-primary hover:underline">
                            Detaylı bilgi
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-2 text-sm text-gray-600">
                            <ul className="space-y-1 list-disc pl-5">
                              <li>Anında alım-satım</li>
                              <li>Limit emirleri</li>
                              <li>Stop emirleri</li>
                              <li>OCO emirleri</li>
                            </ul>
                          </CollapsibleContent>
                        </Collapsible>
                      </div>
                      
                      <div className="p-4 border border-gray-100 rounded-lg hover:shadow-sm transition-shadow">
                        <h3 className="font-semibold mb-2">Gelişmiş Grafikler</h3>
                        <p className="text-sm text-gray-600 mb-3">Profesyonel teknik analiz araçları ile piyasaları analiz edin.</p>
                        <Collapsible>
                          <CollapsibleTrigger className="flex items-center text-sm text-primary hover:underline">
                            Detaylı bilgi
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-2 text-sm text-gray-600">
                            <ul className="space-y-1 list-disc pl-5">
                              <li>50+ teknik indikatör</li>
                              <li>Çizim araçları</li>
                              <li>Özelleştirilebilir arayüz</li>
                              <li>Çoklu zaman dilimleri</li>
                            </ul>
                          </CollapsibleContent>
                        </Collapsible>
                      </div>
                      
                      <div className="p-4 border border-gray-100 rounded-lg hover:shadow-sm transition-shadow">
                        <h3 className="font-semibold mb-2">Portföy Yönetimi</h3>
                        <p className="text-sm text-gray-600 mb-3">Kripto varlıklarınızı kolayca takip edin ve yönetin.</p>
                        <Collapsible>
                          <CollapsibleTrigger className="flex items-center text-sm text-primary hover:underline">
                            Detaylı bilgi
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-2 text-sm text-gray-600">
                            <ul className="space-y-1 list-disc pl-5">
                              <li>Portföy analizi</li>
                              <li>Kâr/zarar takibi</li>
                              <li>İşlem geçmişi</li>
                              <li>Vergi raporları</li>
                            </ul>
                          </CollapsibleContent>
                        </Collapsible>
                      </div>
                      
                      <div className="p-4 border border-gray-100 rounded-lg hover:shadow-sm transition-shadow">
                        <h3 className="font-semibold mb-2">Eğitim Kaynakları</h3>
                        <p className="text-sm text-gray-600 mb-3">Kapsamlı öğrenme materyalleri ile bilgi seviyenizi artırın.</p>
                        <Collapsible>
                          <CollapsibleTrigger className="flex items-center text-sm text-primary hover:underline">
                            Detaylı bilgi
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-2 text-sm text-gray-600">
                            <ul className="space-y-1 list-disc pl-5">
                              <li>Başlangıç kılavuzları</li>
                              <li>Video eğitimleri</li>
                              <li>Kripto sözlüğü</li>
                              <li>Webinarlar</li>
                            </ul>
                          </CollapsibleContent>
                        </Collapsible>
                      </div>

                      <div className="p-4 border border-gray-100 rounded-lg hover:shadow-sm transition-shadow">
                        <h3 className="font-semibold mb-2">Mobil Uygulama</h3>
                        <p className="text-sm text-gray-600 mb-3">Her an, her yerden kripto işlemlerinizi yönetin.</p>
                        <Collapsible>
                          <CollapsibleTrigger className="flex items-center text-sm text-primary hover:underline">
                            Detaylı bilgi
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-2 text-sm text-gray-600">
                            <ul className="space-y-1 list-disc pl-5">
                              <li>iOS ve Android uygulamaları</li>
                              <li>Fiyat alarmları</li>
                              <li>Anlık bildirimler</li>
                              <li>Biyometrik güvenlik</li>
                            </ul>
                          </CollapsibleContent>
                        </Collapsible>
                      </div>
                      
                      <div className="p-4 border border-gray-100 rounded-lg hover:shadow-sm transition-shadow">
                        <h3 className="font-semibold mb-2">API Erişimi</h3>
                        <p className="text-sm text-gray-600 mb-3">Otomatik işlem sistemleri için gelişmiş API desteği.</p>
                        <Collapsible>
                          <CollapsibleTrigger className="flex items-center text-sm text-primary hover:underline">
                            Detaylı bilgi
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-2 text-sm text-gray-600">
                            <ul className="space-y-1 list-disc pl-5">
                              <li>REST API</li>
                              <li>WebSocket desteği</li>
                              <li>API anahtarı yönetimi</li>
                              <li>Dokümantasyon</li>
                            </ul>
                          </CollapsibleContent>
                        </Collapsible>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card className="border border-gray-100 mb-6">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-semibold mb-4">Desteklenen Kripto Paralar</h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 border rounded-lg">
                        <Coins className="w-8 h-8 text-primary" />
                        <div>
                          <h3 className="font-medium">200+ Kripto Para</h3>
                          <p className="text-xs text-gray-500">En popüler kripto paraları al/sat</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 border rounded-lg">
                        <TrendingUp className="w-8 h-8 text-primary" />
                        <div>
                          <h3 className="font-medium">400+ İşlem Çifti</h3>
                          <p className="text-xs text-gray-500">Geniş eşleşme seçenekleri</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 border rounded-lg">
                        <Shield className="w-8 h-8 text-primary" />
                        <div>
                          <h3 className="font-medium">Çoklu Blockchain</h3>
                          <p className="text-xs text-gray-500">Farklı blockchain ağlarında transfer imkanı</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border border-gray-100">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-semibold mb-4">Kullanıcı Yorumları</h2>
                    
                    <div className="space-y-4">
                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">Mehmet Y.</span>
                          <div className="flex">
                            <span>★★★★★</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">
                          "Kullanımı çok kolay ve komisyon oranları gayet makul. Mobil uygulaması da çok kullanışlı."
                        </p>
                      </div>
                      
                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">Ayşe K.</span>
                          <div className="flex">
                            <span>★★★★☆</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">
                          "Müşteri hizmetleri hızlı yanıt veriyor. Grafikler biraz daha geliştirilmeli."
                        </p>
                      </div>
                      
                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">Ali S.</span>
                          <div className="flex">
                            <span>★★★★★</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">
                          "Para yatırma ve çekme işlemleri çok hızlı. Türk lirası desteği büyük avantaj."
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="security" className="mt-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <Card className="border border-gray-100">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Güvenlik Özellikleri
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {exchange.name}, kullanıcılarının varlıklarını korumak için en gelişmiş güvenlik önlemlerini uygulamaktadır. İşte platformun güvenlik altyapısı hakkında bilmeniz gerekenler:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-4 border border-gray-100 rounded-lg">
                        <h3 className="font-semibold mb-3 flex items-center gap-2">
                          <Shield className="w-4 h-4 text-primary" />
                          Soğuk Cüzdan Saklama
                        </h3>
                        <p className="text-sm text-gray-600">
                          Kullanıcı varlıklarının %95'inden fazlası çevrimdışı soğuk cüzdanlarda saklanır, bu da hackerların erişimini imkansız hale getirir.
                        </p>
                      </div>
                      
                      <div className="p-4 border border-gray-100 rounded-lg">
                        <h3 className="font-semibold mb-3 flex items-center gap-2">
                          <Shield className="w-4 h-4 text-primary" />
                          İki Faktörlü Doğrulama (2FA)
                        </h3>
                        <p className="text-sm text-gray-600">
                          Google Authenticator, SMS veya e-posta ile iki faktörlü doğrulama sistemi, hesaplarınızın güvenliğini artırır.
                        </p>
                      </div>
                      
                      <div className="p-4 border border-gray-100 rounded-lg">
                        <h3 className="font-semibold mb-3 flex items-center gap-2">
                          <Shield className="w-4 h-4 text-primary" />
                          Gelişmiş Şifreleme
                        </h3>
                        <p className="text-sm text-gray-600">
                          AES-256 şifreleme, SSL/TLS protokolleri ve çeşitli şifreleme katmanları veri güvenliğini sağlar.
                        </p>
                      </div>
                      
                      <div className="p-4 border border-gray-100 rounded-lg">
                        <h3 className="font-semibold mb-3 flex items-center gap-2">
                          <Shield className="w-4 h-4 text-primary" />
                          Düzenli Güvenlik Denetimleri
                        </h3>
                        <p className="text-sm text-gray-600">
                          Bağımsız güvenlik uzmanları tarafından düzenli olarak güvenlik denetimleri ve penetrasyon testleri gerçekleştirilir.
                        </p>
                      </div>
                      
                      <div className="p-4 border border-gray-100 rounded-lg">
                        <h3 className="font-semibold mb-3 flex items-center gap-2">
                          <Shield className="w-4 h-4 text-primary" />
                          Anti-Phishing Koruması
                        </h3>
                        <p className="text-sm text-gray-600">
                          Kişiselleştirilmiş anti-phishing kodları ve e-posta doğrulama sistemleri oltalama saldırılarına karşı koruma sağlar.
                        </p>
                      </div>
                      
                      <div className="p-4 border border-gray-100 rounded-lg">
                        <h3 className="font-semibold mb-3 flex items-center gap-2">
                          <Shield className="w-4 h-4 text-primary" />
                          Sigorta Fonu
                        </h3>
                        <p className="text-sm text-gray-600">
                          Olası güvenlik ihlallerine karşı kullanıcı varlıklarını korumak için özel sigorta fonu bulunmaktadır.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border border-gray-100 mt-8">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-primary" />
                      Güvenlik Tavsiyeleri
                    </h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-medium">Güçlü Şifre Kullanın</h3>
                          <p className="text-sm text-gray-600">En az 12 karakterli, karışık karakterler içeren güçlü bir şifre oluşturun ve düzenli olarak değiştirin.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-medium">2FA'yı Aktifleştirin</h3>
                          <p className="text-sm text-gray-600">İki faktörlü doğrulamayı mutlaka aktif hale getirin, tercihen Google Authenticator gibi bir uygulama kullanın.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-medium">Büyük Miktarları Soğuk Cüzdanda Saklayın</h3>
                          <p className="text-sm text-gray-600">Aktif olarak işlem yapmadığınız büyük miktardaki kripto paralarınızı donanım cüzdanlarında saklayın.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-medium">Adres Listesi Oluşturun</h3>
                          <p className="text-sm text-gray-600">Sık kullandığınız cüzdan adresleri için güvenli bir adres listesi oluşturun ve her transferde adresleri kontrol edin.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-medium">Anti-virüs Yazılımı Kullanın</h3>
                          <p className="text-sm text-gray-600">Cihazlarınızda güncel anti-virüs yazılımı bulundurun ve şüpheli bağlantılardan kaçının.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card className="border border-gray-100 mb-6">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-semibold mb-3">Güvenlik Puanı</h2>
                    
                    <div className="flex items-center justify-center my-6">
                      <div className="w-32 h-32 rounded-full border-8 border-primary flex items-center justify-center">
                        <span className="text-3xl font-bold">
                          {exchange.id === "binance" || exchange.id === "coinbase" ? "A+" : "A"}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mt-6">
                      <div className="flex justify-between items-center">
                        <span>Soğuk Cüzdan Oranı</span>
                        <span className="font-medium">%95+</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "95%" }}></div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span>Güvenlik Protokolleri</span>
                        <span className="font-medium">%90</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "90%" }}></div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span>Şeffaflık</span>
                        <span className="font-medium">%85</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-3 bg-primary-lighter rounded-lg text-sm">
                      <p>Güvenlik puanı bağımsız denetim firmalarının değerlendirmeleri sonucunda oluşturulmuştur. Bu puan platformun genel güvenlik seviyesini göstermektedir.</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border border-gray-100">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-semibold mb-4">Güvenlik SSS</h2>
                    
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Varlıklarım sigortalı mı?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-600 pl-1">
                            Evet, {exchange.name}'deki kullanıcı varlıkları, özel bir sigorta fonu aracılığıyla belirli oranda sigortalıdır. Bu sigorta, güvenlik ihlali veya hack durumlarına karşı koruma sağlar. Ancak kullanıcı hatalarından kaynaklanan kayıplar sigorta kapsamında değildir.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Hesabım hacklendiyse ne yapmalıyım?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-600 pl-1">
                            Hesabınızın güvenliğinden şüpheleniyorsanız, hemen şu adımları izleyin:
                            <br />1. Müşteri desteğine hemen bildirin
                            <br />2. Şifrenizi değiştirin
                            <br />3. 2FA'yı yeniden yapılandırın
                            <br />4. İzinsiz işlemleri bildirin
                            <br />5. Bağlı API anahtarlarını iptal edin
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Soğuk cüzdan ne demektir?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-600 pl-1">
                            Soğuk cüzdan, kripto paraların internete bağlı olmayan, çevrimdışı ortamlarda saklanmasıdır. Bu yöntem, online hack saldırılarına karşı en güvenli koruma yöntemidir çünkü özel anahtarlar internete bağlı hiçbir cihazda tutulmaz.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="my-12">
          <h2 className="text-2xl font-bold mb-6">Alternatif Kripto Para Borsaları</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cryptoExchanges
              .filter(e => e.id !== exchange.id)
              .slice(0, 3)
              .map(altExchange => (
                <div key={altExchange.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gray-100 p-2 rounded-lg">
                      <img 
                        src={altExchange.logo} 
                        alt={altExchange.name} 
                        className="h-8 w-8 object-contain" 
                      />
                    </div>
                    <h3 className="font-semibold">{altExchange.name}</h3>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500">Maker Ücreti</span>
                      <span>{altExchange.maker_fee}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Taker Ücreti</span>
                      <span>{altExchange.taker_fee}</span>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full justify-between">
                    <a href={`/kripto-borsalari/${altExchange.id}`}>
                      İncele <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              ))
            }
          </div>
        </div>
        
        <ImportantInfo />
        <CryptoFAQ />
      </div>
    </>
  );
};

// Helper function to get feature descriptions (similar to BrokerDetail.tsx)
const getFeatureDescription = (feature: string): string => {
  const descriptions: {[key: string]: string} = {
    "Türk Lirası Desteği": "TL yatırma, çekme ve TL ile kripto alım satım imkanı.",
    "Mobil Uygulama": "iOS ve Android için kullanıcı dostu mobil uygulamalar.",
    "7/24 Müşteri Desteği": "Her zaman ulaşabileceğiniz canlı destek ekibi.",
    "Düşük Komisyonlar": "Piyasa ortalamasının altında işlem komisyonları.",
    "Yüksek Likidite": "Büyük emirlerin hızlı ve düşük fiyat kayması ile gerçekleşmesi.",
    "Gelişmiş Grafikler": "Profesyonel teknik analiz araçları ve göstergeleri.",
    "API Desteği": "Otomatik işlem sistemleri için kapsamlı API hizmetleri.",
    // Fallback for other features
    "default": "Bu özellik, platformun kullanıcı deneyimini iyileştirir ve işlemlerinizi kolaylaştırır."
  };

  return descriptions[feature] || descriptions.default;
};

export default CryptoExchangeDetail;
