
import { useParams } from "react-router-dom";
import { borsaAraciKurumProviders } from "@/data/pos-types/borsaAraciKurum";
import { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Info, 
  CheckCircle2, 
  HelpCircle, 
  ChevronRight, 
  Shield, 
  Percent, 
  BarChart4,
  TrendingUp,
  Wallet
} from "lucide-react";
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

const BrokerDetail = () => {
  const { id } = useParams();
  // Extract broker ID from path if not provided in params
  const pathId = window.location.pathname.split('/').pop();
  const brokerId = id || pathId;
  
  // Find the broker in our data
  const broker = borsaAraciKurumProviders.find(b => b.id === brokerId);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [brokerId]);

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

  // Custom structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": broker.name,
    "description": pageDescription,
    "url": `https://poskomisyon.com/pos/${broker.id}`,
    "logo": broker.logo,
    "priceRange": broker.commission_rate,
    "offers": {
      "@type": "Offer",
      "price": broker.commission_rate.replace("%", ""),
      "priceCurrency": "TRY",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <MetaTags
        title={pageTitle}
        description={pageDescription}
        canonicalPath={`/pos/${brokerId}`}
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
                  <img src={broker.logo} alt={broker.name} className="w-16 h-16 object-contain" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold mb-2 text-gray-900">{broker.name}</h1>
                  <div className="flex items-center text-gray-700">
                    <span className="text-sm">{broker.type}</span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center text-sm">
                      <Percent className="w-3.5 h-3.5 mr-1" />
                      Komisyon: {broker.commission_rate}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="bg-primary hover:bg-primary-hover font-medium">
                  Hesap Aç
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
                  <Wallet className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Hesap Bakım Ücreti</p>
                  <p className="font-semibold text-lg">{broker.monthly_fee}</p>
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
                  <p className="text-sm text-gray-500">Komisyon Oranı</p>
                  <p className="font-semibold text-lg">{broker.commission_rate}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm hover:shadow transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary-lighter p-3 rounded-full">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Regüle Eden Kurum</p>
                  <p className="font-semibold text-lg">SPK</p>
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
              value="services" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0 font-medium"
            >
              Hizmetler
            </TabsTrigger>
            <TabsTrigger 
              value="features" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0 font-medium"
            >
              Özellikler
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-8 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <Card className="border border-gray-100">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      Kurum Hakkında
                    </h2>
                    <div className="prose text-gray-600">
                      <p className="mb-4">
                        {broker.name}, yatırımcıların finansal piyasalara erişimini sağlayan, SPK tarafından yetkilendirilmiş bir aracı kurumdur. Modern teknoloji altyapısı ve rekabetçi komisyon oranlarıyla, yatırımcılara kapsamlı hizmetler sunmaktadır.
                      </p>
                      <p className="mb-4">
                        Geniş ürün yelpazesi ile hisse senedi, viop, tahvil/bono, yatırım fonları ve döviz işlemleri gerçekleştirebilirsiniz. Profesyonel araştırma ekibi tarafından hazırlanan raporlar ve analizler ile bilinçli yatırım kararları alabilirsiniz.
                      </p>
                      <p>
                        {broker.name}'in kullanıcı dostu platformu sayesinde, dilediğiniz yerden mobil cihazlarınızla tüm işlemlerinizi kolayca yapabilirsiniz.
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
                      {broker.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg border border-gray-100">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-gray-700">{feature}</p>
                        </div>
                      ))}
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
                          <p className="font-medium">Online Başvuru</p>
                          <p className="text-sm text-gray-600">Web sitesinden veya mobil uygulamadan başvuru formunu doldurun.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-primary-lighter text-primary w-6 h-6 flex items-center justify-center rounded-full font-semibold flex-shrink-0">
                          2
                        </div>
                        <div>
                          <p className="font-medium">Kimlik Doğrulama</p>
                          <p className="text-sm text-gray-600">Kimlik belgelerinizi yükleyin ve video doğrulama adımını tamamlayın.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-primary-lighter text-primary w-6 h-6 flex items-center justify-center rounded-full font-semibold flex-shrink-0">
                          3
                        </div>
                        <div>
                          <p className="font-medium">Sözleşme İmzalama</p>
                          <p className="text-sm text-gray-600">Elektronik ortamda sözleşmeleri onaylayın.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-primary-lighter text-primary w-6 h-6 flex items-center justify-center rounded-full font-semibold flex-shrink-0">
                          4
                        </div>
                        <div>
                          <p className="font-medium">Hesap Aktivasyonu</p>
                          <p className="text-sm text-gray-600">Hesabınız onaylandıktan sonra hemen işlem yapmaya başlayın.</p>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full mt-6">
                      Hemen Başvur
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border border-gray-100">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-semibold mb-4">İletişim</h2>
                    
                    <div className="space-y-3 text-gray-700">
                      <p className="flex items-center gap-2 text-sm">
                        <span className="font-medium">Telefon:</span> 
                        <a href="tel:08502222222" className="text-primary hover:underline">0850 222 22 22</a>
                      </p>
                      <p className="flex items-center gap-2 text-sm">
                        <span className="font-medium">E-posta:</span> 
                        <a href={`mailto:info@${broker.id}.com.tr`} className="text-primary hover:underline">{`info@${broker.id}.com.tr`}</a>
                      </p>
                      <p className="flex items-center gap-2 text-sm">
                        <span className="font-medium">Müşteri Hizmetleri:</span> 7/24
                      </p>
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
                  <AccordionTrigger>Hesap açılışı için gerekli belgeler nelerdir?</AccordionTrigger>
                  <AccordionContent>
                    <div className="text-gray-600 space-y-2 pl-1">
                      <p>Hesap açılışı için gerekli belgeler:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Nüfus cüzdanı veya kimlik kartı</li>
                        <li>İkametgah belgesi (son 3 aya ait fatura veya adres belgesi)</li>
                        <li>Vergi kimlik numarası</li>
                        <li>İmza beyannamesi</li>
                      </ul>
                      <p className="mt-2">Dijital başvurularda bu belgelerin görüntülerini yüklemeniz yeterli olacaktır.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Ne kadar minimum yatırımla başlayabilirim?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 pl-1">
                      {broker.name}'de yatırıma başlamak için minimum tutar bulunmamaktadır. Hesabınızı aktif ettikten sonra, dilediğiniz miktarda para yatırarak yatırım yapmaya başlayabilirsiniz. Ancak, etkin bir portföy oluşturmak için genellikle 5.000 TL ile başlamanız önerilmektedir.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>Yatırım işlemleri hangi platformlar üzerinden yapılabilir?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 pl-1">
                      {broker.name} üzerinden yatırım işlemlerinizi web sitesi, mobil uygulama (iOS ve Android) ve masaüstü uygulaması üzerinden gerçekleştirebilirsiniz. Tüm platformlar gerçek zamanlı senkronize çalışmaktadır.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Para yatırma ve çekme işlemleri ne kadar sürer?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 pl-1">
                      EFT/Havale yoluyla para yatırma işlemleri genellikle aynı gün içinde, mesai saatleri içerisinde gerçekleşir. Para çekme talepleri ise genellikle 24 saat içerisinde işleme alınır. Kredi kartı ile para yatırma işlemi anında gerçekleşir.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Hesap bakım ücreti var mı?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 pl-1">
                      {broker.monthly_fee === "0 TL / Ay" 
                        ? `${broker.name}'de hesap bakım ücreti bulunmamaktadır. Hesabınızı aktif tutmak için herhangi bir ücret ödemezsiniz.` 
                        : `${broker.name}'de hesap bakım ücreti ${broker.monthly_fee.toLowerCase()} olarak uygulanmaktadır. Bu ücret, her ay otomatik olarak hesabınızdan tahsil edilir.`}
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
                      {broker.name}'in sunduğu rekabetçi komisyon oranları ile yatırımlarınızdan maksimum verim alın. İşlem hacminize göre özel indirimler uygulanabilmektedir.
                    </p>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="text-left p-3 border border-gray-200 font-medium">İşlem Türü</th>
                            <th className="text-left p-3 border border-gray-200 font-medium">Standart Oran</th>
                            <th className="text-left p-3 border border-gray-200 font-medium">Yüksek Hacim</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-3 border border-gray-200">Hisse Senedi İşlemleri</td>
                            <td className="p-3 border border-gray-200">{broker.commission_rate}</td>
                            <td className="p-3 border border-gray-200">%0.10 - %0.15</td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-200">VİOP İşlemleri</td>
                            <td className="p-3 border border-gray-200">%0.05 - %0.08</td>
                            <td className="p-3 border border-gray-200">%0.03 - %0.05</td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-200">Tahvil/Bono İşlemleri</td>
                            <td className="p-3 border border-gray-200">%0.1 - %0.2</td>
                            <td className="p-3 border border-gray-200">%0.05 - %0.1</td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-200">Yabancı Menkul İşlemleri</td>
                            <td className="p-3 border border-gray-200">%0.2 - %0.4</td>
                            <td className="p-3 border border-gray-200">%0.15 - %0.3</td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-200">Forex İşlemleri</td>
                            <td className="p-3 border border-gray-200">2 pip</td>
                            <td className="p-3 border border-gray-200">1.5 pip</td>
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
                          <span className="font-medium">Hesap Bakım Ücreti</span>
                          <span>{broker.monthly_fee}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">Hesabınızın aktif tutulması için aylık ödenen ücret</p>
                      </div>
                      
                      <div className="flex flex-col">
                        <div className="flex justify-between pb-2 border-b">
                          <span className="font-medium">Veri Akış Ücreti</span>
                          <span>0 - 150 TL / Ay</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">Borsa verileri için aylık ödenen ücret (işlem hacmine göre değişir)</p>
                      </div>
                      
                      <div className="flex flex-col">
                        <div className="flex justify-between pb-2 border-b">
                          <span className="font-medium">EFT/Havale Ücreti</span>
                          <span>0 - 25 TL</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">Para transferleri için alınan ücret (banka ve tutara göre değişir)</p>
                      </div>
                      
                      <div className="flex flex-col">
                        <div className="flex justify-between pb-2 border-b">
                          <span className="font-medium">Saklama Ücreti</span>
                          <span>%0.01 / Yıl</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">Menkul kıymetlerinizin saklanması için alınan ücret</p>
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
                      <p className="text-gray-700"><strong>İşlem:</strong> 10.000 TL'lik hisse senedi alımı</p>
                      <p className="text-gray-700"><strong>Komisyon Oranı:</strong> {broker.commission_rate}</p>
                      <p className="text-gray-700"><strong>Hesaplama:</strong> 10.000 TL × {broker.commission_rate.replace('%', '') / 100}</p>
                      <p className="font-medium text-black">Toplam Komisyon: {(10000 * parseFloat(broker.commission_rate.replace('%', '')) / 100).toFixed(2)} TL</p>
                    </div>
                    
                    <div className="mt-4 p-3 bg-primary-lighter rounded-lg">
                      <p className="text-sm">Bu hesaplama örnek amaçlıdır. Gerçek komisyon tutarları işlem koşullarına göre değişiklik gösterebilir.</p>
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
                        <p className="text-sm text-gray-700">İlk ay komisyon indirimi kampanyaları</p>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                        <p className="text-sm text-gray-700">Yeni müşterilere özel indirimli komisyon paketleri</p>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                        <p className="text-sm text-gray-700">Uzun vadeli yatırımcılar için özel fiyatlandırma</p>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                        <p className="text-sm text-gray-700">VIP müşterilere özel komisyon oranları</p>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full mt-4">
                      Özel Teklif Al
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="services" className="mt-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <Card className="border border-gray-100">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <BarChart4 className="w-5 h-5 text-primary" />
                      Sunulan Hizmetler
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="p-4 border border-gray-100 rounded-lg hover:shadow-sm transition-shadow">
                        <h3 className="font-semibold mb-2">Alım-Satım İşlemleri</h3>
                        <p className="text-sm text-gray-600 mb-3">Hisse senedi, viop, tahvil/bono ve forex işlemlerinizi hızlı ve güvenli şekilde gerçekleştirin.</p>
                        <Collapsible>
                          <CollapsibleTrigger className="flex items-center text-sm text-primary hover:underline">
                            Detaylı bilgi
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-2 text-sm text-gray-600">
                            <ul className="space-y-1 list-disc pl-5">
                              <li>Anlık emir iletimi</li>
                              <li>Gelişmiş emir tipleri</li>
                              <li>Tek tıkla alım-satım</li>
                              <li>Portföy takibi</li>
                            </ul>
                          </CollapsibleContent>
                        </Collapsible>
                      </div>
                      
                      <div className="p-4 border border-gray-100 rounded-lg hover:shadow-sm transition-shadow">
                        <h3 className="font-semibold mb-2">Yatırım Danışmanlığı</h3>
                        <p className="text-sm text-gray-600 mb-3">Uzman analistler tarafından hazırlanan stratejiler ve piyasa analizleri ile yatırımlarınızı yönlendirin.</p>
                        <Collapsible>
                          <CollapsibleTrigger className="flex items-center text-sm text-primary hover:underline">
                            Detaylı bilgi
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-2 text-sm text-gray-600">
                            <ul className="space-y-1 list-disc pl-5">
                              <li>Günlük bültenler</li>
                              <li>Hisse analiz raporları</li>
                              <li>Özel yatırım tavsiyeleri</li>
                              <li>Sektör analizleri</li>
                            </ul>
                          </CollapsibleContent>
                        </Collapsible>
                      </div>
                      
                      <div className="p-4 border border-gray-100 rounded-lg hover:shadow-sm transition-shadow">
                        <h3 className="font-semibold mb-2">Teknik Analiz Araçları</h3>
                        <p className="text-sm text-gray-600 mb-3">Profesyonel teknik analiz araçları ile piyasaları analiz edin ve fırsatları yakalayın.</p>
                        <Collapsible>
                          <CollapsibleTrigger className="flex items-center text-sm text-primary hover:underline">
                            Detaylı bilgi
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-2 text-sm text-gray-600">
                            <ul className="space-y-1 list-disc pl-5">
                              <li>100'den fazla teknik gösterge</li>
                              <li>Özelleştirilebilir grafikler</li>
                              <li>Çizim araçları</li>
                              <li>Alarm sistemleri</li>
                            </ul>
                          </CollapsibleContent>
                        </Collapsible>
                      </div>
                      
                      <div className="p-4 border border-gray-100 rounded-lg hover:shadow-sm transition-shadow">
                        <h3 className="font-semibold mb-2">Eğitim ve Webinarlar</h3>
                        <p className="text-sm text-gray-600 mb-3">Finansal okuryazarlığınızı artıracak eğitimler ve webinarlar ile bilgi seviyenizi geliştirin.</p>
                        <Collapsible>
                          <CollapsibleTrigger className="flex items-center text-sm text-primary hover:underline">
                            Detaylı bilgi
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-2 text-sm text-gray-600">
                            <ul className="space-y-1 list-disc pl-5">
                              <li>Temel ve teknik analiz eğitimleri</li>
                              <li>Piyasa bilgilendirme webinarları</li>
                              <li>Yatırım stratejileri</li>
                              <li>Online eğitim platformu</li>
                            </ul>
                          </CollapsibleContent>
                        </Collapsible>
                      </div>
                      
                      <div className="p-4 border border-gray-100 rounded-lg hover:shadow-sm transition-shadow">
                        <h3 className="font-semibold mb-2">Portföy Yönetimi</h3>
                        <p className="text-sm text-gray-600 mb-3">Uzman portföy yöneticileri tarafından yönetilen fonlar ile birikimlerinizi değerlendirin.</p>
                        <Collapsible>
                          <CollapsibleTrigger className="flex items-center text-sm text-primary hover:underline">
                            Detaylı bilgi
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-2 text-sm text-gray-600">
                            <ul className="space-y-1 list-disc pl-5">
                              <li>Kişiye özel portföy yönetimi</li>
                              <li>Düzenli performans raporları</li>
                              <li>Risk yönetimi stratejileri</li>
                              <li>Varlık dağılım tavsiyeleri</li>
                            </ul>
                          </CollapsibleContent>
                        </Collapsible>
                      </div>
                      
                      <div className="p-4 border border-gray-100 rounded-lg hover:shadow-sm transition-shadow">
                        <h3 className="font-semibold mb-2">Mobil Uygulama</h3>
                        <p className="text-sm text-gray-600 mb-3">Her an her yerden yatırımlarınızı yönetmenizi sağlayan kullanıcı dostu mobil uygulama.</p>
                        <Collapsible>
                          <CollapsibleTrigger className="flex items-center text-sm text-primary hover:underline">
                            Detaylı bilgi
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-2 text-sm text-gray-600">
                            <ul className="space-y-1 list-disc pl-5">
                              <li>iOS ve Android uygulamaları</li>
                              <li>Anlık fiyat bildirimleri</li>
                              <li>Portföy takibi</li>
                              <li>Parmak izi ve yüz tanıma ile giriş</li>
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
                    <h2 className="text-lg font-semibold mb-4">İşlem Platformları</h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 border rounded-lg">
                        <TrendingUp className="w-8 h-8 text-primary" />
                        <div>
                          <h3 className="font-medium">{broker.name} Web Platform</h3>
                          <p className="text-xs text-gray-500">Web tarayıcısı üzerinden erişim</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 border rounded-lg">
                        <TrendingUp className="w-8 h-8 text-primary" />
                        <div>
                          <h3 className="font-medium">{broker.name} Mobile</h3>
                          <p className="text-xs text-gray-500">iOS ve Android uygulamaları</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 border rounded-lg">
                        <TrendingUp className="w-8 h-8 text-primary" />
                        <div>
                          <h3 className="font-medium">{broker.name} Desktop</h3>
                          <p className="text-xs text-gray-500">Windows ve macOS için masaüstü uygulaması</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border border-gray-100">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-semibold mb-4">Müşteri Yorumları</h2>
                    
                    <div className="space-y-4">
                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">Ahmet Y.</span>
                          <div className="flex">
                            <span>★★★★★</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">
                          "Komisyon oranları piyasadaki en iyilerden. Mobil uygulaması da çok kullanışlı."
                        </p>
                      </div>
                      
                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">Zeynep K.</span>
                          <div className="flex">
                            <span>★★★★☆</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">
                          "Araştırma raporları çok detaylı ve yardımcı oluyor. Analistlerin tavsiyeleri genelde isabetli."
                        </p>
                      </div>
                      
                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">Mehmet A.</span>
                          <div className="flex">
                            <span>★★★★★</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">
                          "Müşteri hizmetleri çok hızlı dönüş yapıyor. Platform da oldukça stabil çalışıyor."
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="features" className="mt-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {broker.features.map((feature, index) => (
                <Card key={index} className="border border-gray-100 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary-lighter p-2 rounded-full">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">{feature}</h3>
                        <p className="text-sm text-gray-600">
                          {getFeatureDescription(feature)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6">Platformun Teknik Özellikleri</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Güvenlik Protokolü</span>
                    <span>SSL/TLS 256-bit Şifreleme</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">İki Faktörlü Doğrulama</span>
                    <span>Var</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Emir İletim Hızı</span>
                    <span>{"< 100ms"}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Veri Akış Gecikmesi</span>
                    <span>{"Gerçek Zamanlı (< 1s)"}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">API Erişimi</span>
                    <span>Var</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Teknik İndikatör Sayısı</span>
                    <span>100+</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Günlük İşlem Limiti</span>
                    <span>Sınırsız</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Uygulama Dil Desteği</span>
                    <span>Türkçe, İngilizce</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 px-6 py-8 bg-primary-lighter rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Hemen {broker.name} ile Yatırıma Başlayın</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Düşük komisyon oranları, kullanıcı dostu platform ve profesyonel yatırım araçlarıyla finansal hedeflerinize ulaşın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-hover font-medium">
              Ücretsiz Hesap Aç
            </Button>
            <Button variant="outline" size="lg" className="font-medium">
              Demo Hesap Dene
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

// Helper function to generate descriptions for features
function getFeatureDescription(feature: string): string {
  const descriptions: Record<string, string> = {
    "BIST hisselerinde %0,08 komisyon": "Borsa İstanbul hisse senetlerinde sektördeki en uygun komisyon oranlarından biriyle işlem yapın.",
    "Amerikan borsalarına erişim": "ABD borsalarında işlem gören binlerce hisse senedi ve ETF'lere kolayca erişim sağlayın.",
    "Zengin analiz araçları": "Teknik ve temel analiz araçlarıyla piyasaları derinlemesine analiz edin.",
    "Kolay kullanımlı mobil uygulama": "Her an her yerden işlemlerinizi gerçekleştirebileceğiniz kullanıcı dostu mobil uygulama.",
    "Ücretsiz portföy takibi": "Yatırımlarınızın performansını anlık olarak takip edin ve detaylı raporlar alın.",
    "Finnet veri terminali": "Profesyonel yatırımcılar için gelişmiş veri analizi ve görselleştirme araçları.",
    "Yurt dışı piyasa erişimi": "Global piyasalara erişim ile uluslararası yatırım fırsatlarını değerlendirin.",
    "Profesyonel analiz ekibi": "Tecrübeli analistlerden oluşan ekibin hazırladığı raporlar ve öneriler.",
    "Özel portföy raporları": "Yatırımlarınızın performansını detaylı şekilde analiz eden özelleştirilmiş raporlar.",
    "Alternatif yatırım ürünleri": "Hisse senetleri dışında farklı yatırım araçları ile portföyünüzü çeşitlendirin.",
    "Gelişmiş analiz yazılımı": "En güncel teknolojilerle donatılmış kapsamlı analiz yazılımı.",
    "Canlı veri akışı": "Piyasalardaki gelişmeleri gecikmesiz takip etmenizi sağlayan canlı veri akışı.",
    "Profesyonel grafik araçları": "Teknik analiz için gerekli tüm grafik ve çizim araçları.",
    "Özelleştirilebilir ekranlar": "İhtiyaçlarınıza göre uyarlayabileceğiniz esnek ekran düzeni.",
    "Güçlü arama ve filtreleme": "Yatırım fırsatlarını kolayca bulmanızı sağlayan arama ve filtreleme seçenekleri.",
    "DenizTrader platformu": "Deniz Yatırım'ın gelişmiş ticaret platformu ile hızlı ve güvenli işlemler.",
    "Forex işlemleri": "Döviz çiftlerinde işlem yapma imkanı ile portföyünüzü çeşitlendirin.",
    "Kişiselleştirilmiş danışmanlık": "Yatırım hedeflerinize özel profesyonel danışmanlık hizmetleri.",
    "Bono ve tahvil işlemleri": "Sabit getirili menkul kıymetlerle güvenli yatırım seçenekleri.",
    "Yatırım fonu seçenekleri": "Farklı risk profillerine uygun çeşitli yatırım fonları.",
    "TradingGEN platformu": "Ak Yatırım'ın yenilikçi ticaret platformu.",
    "Kapsamlı piyasa analizleri": "Derinlemesine araştırma ve piyasa analizleri.",
    "Mobil işlem uygulaması": "Mobilden hızlı ve kolay işlem yapma imkanı.",
    "Robot danışmanlık": "Algoritmalar tarafından oluşturulan otomatik yatırım tavsiyeleri.",
    "Düşük komisyon oranları": "Rekabetçi ve şeffaf komisyon yapısı ile tasarruf edin.",
    "Kolay kullanımlı arayüz": "Sezgisel ve kullanıcı dostu arayüz ile işlemlerinizi kolayca gerçekleştirin.",
    "Hızlı işlem platformu": "Yüksek performanslı altyapı ile emirlerinizi hızlıca iletme imkanı.",
    "Yeni nesil yatırım deneyimi": "Modern teknolojilerle geliştirilmiş yenilikçi yatırım deneyimi.",
    "Eğitici içerikler": "Yatırım bilginizi artıracak kapsamlı eğitim kaynakları ve içerikler."
  };

  return descriptions[feature] || "Bu özellik, yatırım deneyiminizi geliştiren değerli bir aracı kurum hizmetidir.";
}

export default BrokerDetail;
