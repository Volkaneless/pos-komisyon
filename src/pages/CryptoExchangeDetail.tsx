import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
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
  ExternalLink
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CryptoFAQ from "@/components/crypto/CryptoFAQ";
import ImportantInfo from "@/components/crypto/ImportantInfo";
import { getCanonicalUrl } from "@/lib/utils";
import CanonicalLink from "@/components/CanonicalLink";
import { Button } from "@/components/ui/button";

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
  
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={getCanonicalUrl(`/kripto-borsalari/${exchange.id}`)} />
      </Helmet>
      <CanonicalLink path={`/kripto-borsalari/${exchange.id}`} />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gray-100 p-3 rounded-lg">
              <img 
                src={exchange.logo} 
                alt={exchange.name} 
                className="h-10 w-10 object-contain" 
              />
            </div>
            <h1 className="text-3xl font-bold">{exchange.name} İnceleme</h1>
          </div>
          
          <p className="text-xl text-gray-600 mb-8">
            {exchange.name} kripto para borsasının komisyon oranları, özellikleri ve kullanıcı deneyimi hakkında 
            detaylı bilgi edinebilirsiniz.
          </p>
          
          <div className="glass-card rounded-2xl p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Kuruluş Yılı</p>
                  <p className="font-medium">{exchange.founded}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Merkez</p>
                  <p className="font-medium">{exchange.headquarters}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Coins className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">TL İşlemleri</p>
                  <p className="font-medium">{exchange.has_turkish_lira ? "Destekleniyor" : "Desteklenmiyor"}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CreditCard className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Kredi Kartı</p>
                  <p className="font-medium">{exchange.credit_card ? "Destekleniyor" : "Desteklenmiyor"}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Building2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Banka Havalesi</p>
                  <p className="font-medium">{exchange.bank_transfer ? "Destekleniyor" : "Desteklenmiyor"}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Smartphone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Mobil Uygulama</p>
                  <p className="font-medium">{exchange.mobile_app ? "Mevcut" : "Mevcut Değil"}</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pt-8 border-t border-gray-100">
              <div>
                <h3 className="text-lg font-semibold mb-4">Komisyon Oranları</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-600">Maker Ücreti</span>
                    <span className="font-medium">{exchange.maker_fee}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-600">Taker Ücreti</span>
                    <span className="font-medium">{exchange.taker_fee}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-600">Para Yatırma</span>
                    <span className="font-medium">Ücretsiz (Banka Havalesi)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Para Çekme</span>
                    <span className="font-medium">Banka & Ağ Ücretlerine Bağlı</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Öne Çıkan Özellikler</h3>
                <div className="space-y-3">
                  {exchange.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-100">
              <a 
                href={`https://${exchange.id}.com`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full md:w-auto flex justify-center items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                {exchange.name} Resmi Sitesini Ziyaret Et <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="overview" className="mb-12">
          <TabsList className="w-full justify-start space-x-4 border-b rounded-none">
            <TabsTrigger value="overview">Genel Bakış</TabsTrigger>
            <TabsTrigger value="pros-cons">Artılar ve Eksiler</TabsTrigger>
            <TabsTrigger value="security">Güvenlik</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-6">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">{exchange.name} Hakkında</h2>
              <p className="text-gray-700">
                {exchange.name}, {exchange.founded} yılında kurulmuş, {exchange.headquarters} merkezli bir kripto para borsasıdır. 
                Platform, kullanıcılarına güvenli ve kolay bir şekilde kripto para alım satımı yapma imkanı sunmaktadır.
              </p>
              <p className="text-gray-700">
                {exchange.has_turkish_lira 
                  ? `${exchange.name}, Türk lirası ile doğrudan işlem yapabilme imkanı sunarak Türk kullanıcılar için büyük kolaylık sağlamaktadır.` 
                  : `${exchange.name}, dünya çapında milyonlarca kullanıcıya hizmet veren global bir kripto para borsasıdır.`
                }
              </p>
              <p className="text-gray-700">
                Borsa, maker işlemleri için {exchange.maker_fee} ve taker işlemleri için {exchange.taker_fee} komisyon oranları uygulamaktadır.
                {exchange.mobile_app && " Ayrıca kullanıcı dostu mobil uygulaması ile istediğiniz yerden işlem yapabilirsiniz."}
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="pros-cons" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <h3 className="text-xl font-semibold mb-4 text-green-800">Artılar</h3>
                <ul className="space-y-3">
                  {exchange.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-green-800">{feature}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{exchange.founded} yılından beri faaliyet gösteriyor</span>
                  </li>
                  {exchange.has_turkish_lira && (
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-green-800">Türk lirası ile işlem imkanı</span>
                    </li>
                  )}
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <h3 className="text-xl font-semibold mb-4 text-red-800">Eksiler</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-red-800">Yüksek işlem hacimlerinde bile komisyonlar düşürülemiyor</span>
                  </li>
                  {!exchange.credit_card && (
                    <li className="flex items-start gap-2">
                      <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-red-800">Kredi kartı ile para yatırma imkanı yok</span>
                    </li>
                  )}
                  {!exchange.has_turkish_lira && (
                    <li className="flex items-start gap-2">
                      <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-red-800">Türk lirası ile doğrudan işlem yapılamıyor</span>
                    </li>
                  )}
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-red-800">Müşteri hizmetleri yanıt süresi uzun olabiliyor</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="security" className="mt-6">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Güvenlik Özellikleri</h2>
              <p className="text-gray-700">
                {exchange.name}, kullanıcılarının varlıklarını korumak için çeşitli güvenlik önlemleri uygulamaktadır:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>İki faktörlü kimlik doğrulama (2FA)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Soğuk cüzdan saklama</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Gelişmiş şifreleme yöntemleri</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Anti-phishing koruma</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Düzenli güvenlik denetimleri</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Şüpheli işlem kontrolü</span>
                </div>
              </div>
              <p className="text-gray-700 mt-4">
                Ancak hiçbir platform %100 güvenli değildir. Büyük miktarlarda kripto para saklarken donanım cüzdanları 
                (hardware wallet) kullanmanız önerilir.
              </p>
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

export default CryptoExchangeDetail;
