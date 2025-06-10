import { Helmet } from "react-helmet";
import { Smartphone, CreditCard, ShieldCheck, Globe, WifiHigh, TrendingUp, Phone, Settings, Coins, FileCheck, BarChart, Share2 } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import CepPOSFAQ from "@/components/FAQ/CepPOSFAQ";
import LatestBlogPosts from "@/components/pos/LatestBlogPosts";
import MetaTags from "@/components/MetaTags";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import POSFilterSidebar from "@/components/POSFilterSidebar";
import POSCard from "@/components/POSCard";
import { useState } from "react";

// Sample data for Cep POS providers
const cepPOSProviders = [
  {
    id: "logo-isbasi-cep",
    logo: "/logos/logo.png",
    name: "Logo İşbaşı Cep POS",
    type: "Cep POS",
    monthly_fee: "0 TL",
    commission_rate: "0,79",
    features: [
      "Telefon ile ödeme alma",
      "NFC teknolojisi",
      "Temassız ödeme",
      "Anlık bildirimler"
    ]
  },
  {
    id: "akbank-cebe",
    logo: "/logos/akbank.png",
    name: "Akbank Cebe POS",
    type: "Cep POS",
    monthly_fee: "0 TL",
    commission_rate: "1,49",
    features: [
      "Kolay kurulum",
      "7/24 destek",
      "Güvenli işlemler",
      "Detaylı raporlama"
    ]
  },
  {
    id: "vallet-mobil",
    logo: "/logos/vallet.png",
    name: "Vallet Mobil POS",
    type: "Cep POS",
    monthly_fee: "0 TL",
    commission_rate: "1,29",
    features: [
      "QR kod ödeme",
      "Mobil app",
      "Hızlı transfer",
      "Kullanım kolaylığı"
    ]
  }
];

interface FilterState {
  providers: string[];
  commissionRanges: string[];
  monthlyFeeRanges: string[];
  features: string[];
}

const CepPOS = () => {
  const currentYear = new Date().getFullYear();
  const [filteredProviders, setFilteredProviders] = useState(cepPOSProviders);

  const applyFilters = (filters: FilterState) => {
    let filtered = cepPOSProviders;

    if (filters.providers.length > 0) {
      filtered = filtered.filter(provider => 
        filters.providers.some(filterProvider => 
          provider.name.includes(filterProvider)
        )
      );
    }

    if (filters.commissionRanges.length > 0) {
      filtered = filtered.filter(provider => {
        const rate = parseFloat(provider.commission_rate.replace(',', '.'));
        return filters.commissionRanges.some(range => {
          if (range === "0-1") return rate >= 0 && rate <= 1;
          if (range === "1-2") return rate > 1 && rate <= 2;
          if (range === "2-3") return rate > 2 && rate <= 3;
          if (range === "3+") return rate > 3;
          return false;
        });
      });
    }

    if (filters.monthlyFeeRanges.length > 0) {
      filtered = filtered.filter(provider => {
        const fee = provider.monthly_fee;
        return filters.monthlyFeeRanges.some(range => {
          if (range === "0") return fee.includes("0") || fee.includes("Ücretsiz");
          if (range === "0-100") {
            const feeNum = parseInt(fee.replace(/\D/g, ''));
            return feeNum >= 0 && feeNum <= 100;
          }
          if (range === "100-200") {
            const feeNum = parseInt(fee.replace(/\D/g, ''));
            return feeNum > 100 && feeNum <= 200;
          }
          if (range === "200+") {
            const feeNum = parseInt(fee.replace(/\D/g, ''));
            return feeNum > 200;
          }
          return false;
        });
      });
    }

    if (filters.features.length > 0) {
      filtered = filtered.filter(provider =>
        filters.features.some(feature =>
          provider.features.includes(feature)
        )
      );
    }

    setFilteredProviders(filtered);
  };

  return <>
      <MetaTags 
        title={`Cep POS Komisyon Oranları ${currentYear} - En Uygun Cep POS Fiyatları`} 
        description={`${currentYear} yılı güncel cep POS komisyon oranları, karşılaştırma ve hesaplama araçları. İşletmeniz için en uygun cep POS çözümünü bulun.`} 
        keywords="cep pos, mobil pos uygulaması, telefon pos cihazı, android pos uygulaması, ios pos uygulaması, cep pos komisyon oranları, cep pos başvuru, cep pos nedir" 
        canonicalPath="/pos-types/cep" 
        priority={20} 
      />
      
      <POSTypePage 
        title={`Cep POS Komisyon Oranları ${currentYear}`} 
        description="En uygun cep POS uygulamalarını karşılaştırın, işletmeniz için en uygun cep POS çözümünü seçin." 
        type="Cep POS" 
        Icon={Smartphone} 
        whatIsContent="Cep POS uygulamaları, akıllı telefonları ödeme terminaline dönüştüren modern yazılım çözümleridir. Bu uygulamalar sayesinde, herhangi bir ek donanıma ihtiyaç duymadan akıllı telefonunuz üzerinden kredi kartı ödemesi alabilirsiniz." 
        advantages={["Ek donanım maliyeti yok", "Hızlı kurulum ve kullanım", "Düşük işlem maliyetleri", "Mobil cihaz entegrasyonu", "Anlık ödeme takibi", "7/24 teknik destek", "Taksit imkanı", "Temassız ödeme desteği"]} 
      />

      <div className="container mx-auto px-4 py-12">
        {/* Main Content with Sidebar */}
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-80 flex-shrink-0 hidden lg:block">
            <div className="bg-white rounded-lg border p-6 sticky top-4">
              <POSFilterSidebar
                providers={cepPOSProviders}
                onFilter={applyFilters}
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Provider Cards */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">
                  Cep POS Çözümleri ({filteredProviders.length})
                </h2>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {filteredProviders.map(provider => (
                  <POSCard key={provider.id} {...provider} />
                ))}
              </div>

              {filteredProviders.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">Seçilen kriterlere uygun POS bulunamadı.</p>
                </div>
              )}
            </div>

            <div className="mb-16">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Neden Cep POS?</h2>
                <p className="text-gray-600">
                  İşletmeniz için en uygun Cep POS çözümünü sunuyoruz. Güvenli, hızlı ve ekonomik.
                </p>
              </div>

              
            </div>

            <Tabs defaultValue="overview" className="w-full max-w-4xl mx-auto mb-16">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Genel Bakış</TabsTrigger>
                <TabsTrigger value="commissions">Komisyon Oranları</TabsTrigger>
                <TabsTrigger value="application">Başvuru</TabsTrigger>
                <TabsTrigger value="features">Özellikler</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-6 p-6 bg-white rounded-lg shadow">
                <h3 className="text-2xl font-semibold mb-4">Cep POS Nedir?</h3>
                <p className="text-gray-700 mb-6">
                  Cep POS, akıllı telefonunuzu bir ödeme terminaline dönüştüren yenilikçi bir çözümdür. 
                  Herhangi bir ek donanım gerektirmeden, telefonunuz üzerinden güvenli bir şekilde kredi kartı ödemeleri alabilirsiniz.
                  {currentYear} yılında giderek yaygınlaşan bu teknoloji, özellikle küçük işletmeler ve serbest çalışanlar için
                  ideal bir çözüm sunmaktadır.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Settings className="w-5 h-5 mr-2 text-blue-600" />
                      Nasıl Çalışır?
                    </h4>
                    <p className="text-sm text-gray-700">
                      Akıllı telefonunuza Cep POS uygulamasını indirip hesap oluşturarak hemen kullanmaya başlayabilirsiniz.
                      NFC teknolojisi veya QR kod ile temassız ödeme alma imkanı sunar.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <BarChart className="w-5 h-5 mr-2 text-green-600" />
                      Kimler Kullanabilir?
                    </h4>
                    <p className="text-sm text-gray-700">
                      Seyyar satıcılar, küçük işletmeler, e-ticaret sahipleri, serbest çalışanlar ve ödeme almak isteyen tüm profesyoneller için uygundur.
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="commissions" className="mt-6 p-6 bg-white rounded-lg shadow">
                <h3 className="text-2xl font-semibold mb-4">Cep POS Komisyon Oranları - {currentYear}</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2">İşlem Tipi</th>
                        <th className="border border-gray-300 px-4 py-2">Komisyon Oranı</th>
                        <th className="border border-gray-300 px-4 py-2">Açıklama</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Peşin</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold text-green-600">%0,79 - %1,49</td>
                        <td className="border border-gray-300 px-4 py-2">Standart ödeme komisyonu</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">3 Taksit</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold text-blue-600">%1,89 - %2,49</td>
                        <td className="border border-gray-300 px-4 py-2">Kısa vadeli taksit seçeneği</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">6 Taksit</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold text-purple-600">%2,29 - %3,49</td>
                        <td className="border border-gray-300 px-4 py-2">Orta vadeli taksit seçeneği</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">9 Taksit</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold text-orange-600">%3,29 - %4,49</td>
                        <td className="border border-gray-300 px-4 py-2">Uzun vadeli ödeme imkanı</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">12 Taksit</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold text-red-600">%4,29 - %5,99</td>
                        <td className="border border-gray-300 px-4 py-2">En uzun vadeli taksit seçeneği</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200 text-sm">
                  <p className="flex items-center text-amber-700">
                    <TrendingUp className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>
                      Komisyon oranları işletme hacmi, sözleşme süresi ve tercih edilen bankaya göre değişiklik gösterebilir.
                      Daha detaylı bilgi için bankanızla iletişime geçiniz.
                    </span>
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="application" className="mt-6 p-6 bg-white rounded-lg shadow">
                <h3 className="text-2xl font-semibold mb-4">Cep POS Başvuru Süreci</h3>
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 p-4 border border-gray-200 rounded-lg">
                      <div className="rounded-full bg-blue-100 w-8 h-8 flex items-center justify-center mb-3">
                        <span className="font-bold text-blue-600">1</span>
                      </div>
                      <h4 className="font-semibold mb-2">Gerekli Belgeler</h4>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Vergi levhası / Kimlik fotokopisi</li>
                        <li>İşletme ruhsatı (ticari işletmeler için)</li>
                        <li>İmza sirküleri</li>
                        <li>Hesap ekstreleri (seçime bağlı)</li>
                      </ul>
                    </div>
                    <div className="flex-1 p-4 border border-gray-200 rounded-lg">
                      <div className="rounded-full bg-blue-100 w-8 h-8 flex items-center justify-center mb-3">
                        <span className="font-bold text-blue-600">2</span>
                      </div>
                      <h4 className="font-semibold mb-2">Başvuru Adımları</h4>
                      <ol className="list-decimal pl-5 text-sm text-gray-600 space-y-1">
                        <li>Online başvuru formunu doldurma</li>
                        <li>Belgelerin iletilmesi</li>
                        <li>Onay süreci (1-3 iş günü)</li>
                        <li>Hesap aktivasyonu</li>
                      </ol>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold mb-2 text-primary">Hızlı Başlangıç</h4>
                    <p className="text-sm text-gray-700 mb-4">
                      Cep POS başvurunuzun onaylanmasının ardından izlemeniz gereken adımlar:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="p-3 bg-white rounded shadow-sm">
                        <span className="block font-medium mb-1">1. Uygulama İndirme</span>
                        <span className="text-gray-600">App Store veya Google Play'den uygulamayı indirin</span>
                      </div>
                      <div className="p-3 bg-white rounded shadow-sm">
                        <span className="block font-medium mb-1">2. Giriş Yapma</span>
                        <span className="text-gray-600">Size verilen bilgilerle hesabınıza giriş yapın</span>
                      </div>
                      <div className="p-3 bg-white rounded shadow-sm">
                        <span className="block font-medium mb-1">3. Test İşlem</span>
                        <span className="text-gray-600">Küçük bir test işlemi gerçekleştirin</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mt-4">
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      Hemen Başvuru Yap
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="features" className="mt-6 p-6 bg-white rounded-lg shadow">
                <h3 className="text-2xl font-semibold mb-4">Cep POS Özellikleri</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <WifiHigh className="w-5 h-5 mr-2 text-primary" />
                        Bağlantı Özellikleri
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                        <li>Wi-Fi ve mobil veri desteği</li>
                        <li>Bluetooth bağlantı opsiyonu</li>
                        <li>Offline işlem yapabilme</li>
                        <li>NFC teknolojisi</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <CreditCard className="w-5 h-5 mr-2 text-primary" />
                        Ödeme Çeşitleri
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                        <li>Kredi kartı işlemleri</li>
                        <li>Banka kartı işlemleri</li>
                        <li>QR kod ile ödeme</li>
                        <li>Temassız ödeme</li>
                        <li>Taksitli ödeme imkanı</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <FileCheck className="w-5 h-5 mr-2 text-primary" />
                        Raporlama
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                        <li>Günlük işlem özeti</li>
                        <li>Aylık performans raporları</li>
                        <li>İşlem geçmişi</li>
                        <li>Elektronik fatura entegrasyonu</li>
                        <li>Excel ve PDF formatında dışa aktarma</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <ShieldCheck className="w-5 h-5 mr-2 text-primary" />
                        Güvenlik
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                        <li>End-to-end şifreleme</li>
                        <li>PCI DSS sertifikasyonu</li>
                        <li>3D Secure desteği</li>
                        <li>Çift faktörlü kimlik doğrulama</li>
                        <li>BDDK onaylı güvenlik altyapısı</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

            <div className="prose prose-lg max-w-4xl mx-auto mt-16">
              <h2 className="text-3xl font-bold mb-6 text-center">Cep POS Komisyon Oranları {currentYear} - Cep POS Nedir?</h2>
              
              <div className="bg-blue-50 p-6 rounded-xl mb-8">
                <h3 className="text-2xl font-semibold mb-4">Cep POS Nedir?</h3>
                <p className="text-gray-700 mb-0">
                  Cep POS, akıllı telefonunuzu bir ödeme terminaline dönüştüren yenilikçi bir çözümdür. 
                  Herhangi bir ek donanım gerektirmeden, telefonunuz üzerinden güvenli bir şekilde kredi kartı ödemeleri alabilirsiniz.
                  {currentYear} yılında giderek yaygınlaşan bu teknoloji, özellikle küçük işletmeler ve serbest çalışanlar için
                  ideal bir çözüm sunmaktadır.
                </p>
              </div>

              <Separator className="my-10" />

              <h3 className="text-2xl font-semibold mb-4">Cep POS: Başvuru ve Kullanım</h3>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h4 className="text-xl font-medium mb-4">Başvuru Süreci</h4>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Kimler Başvurabilir?</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          <li>Bireysel işletme sahipleri</li>
                          <li>Limited ve anonim şirketler</li>
                          <li>Serbest meslek sahipleri</li>
                          <li>Şahıs şirketleri</li>
                          <li>E-ticaret platformu kullanan satıcılar</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Gerekli Belgeler</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          <li>Kimlik fotokopisi veya e-Devlet kimlik belgesi</li>
                          <li>Vergi levhası</li>
                          <li>İmza sirküleri (şirket başvurularında)</li>
                          <li>Faaliyet belgesi</li>
                          <li>İşletme hesabı veya banka hesap bilgileri</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Başvuru Aşamaları</AccordionTrigger>
                      <AccordionContent>
                        <ol className="list-decimal pl-5 space-y-1 text-gray-700">
                          <li>Online başvuru formunu eksiksiz doldurun</li>
                          <li>Gerekli belgeleri sisteme yükleyin</li>
                          <li>Bilgilerin doğrulanmasını bekleyin (1-3 iş günü)</li>
                          <li>Onay e-postası alın</li>
                          <li>Uygulamayı indirin ve hesap bilgilerinizle giriş yapın</li>
                        </ol>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium mb-4">Kullanım Aşamaları</h4>
                  <div className="space-y-4">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="rounded-full bg-blue-100 w-6 h-6 flex items-center justify-center mr-3">
                          <span className="font-bold text-blue-600 text-sm">1</span>
                        </div>
                        <h5 className="font-semibold">Hesap Kurulumu</h5>
                      </div>
                      <p className="text-sm text-gray-600">
                        Hesap bilgilerinizle uygulamaya giriş yapın ve profil bilgilerinizi güncelleyin.
                        Banka hesabınızı entegre ederek ödeme alma sürecini tamamlayın.
                      </p>
                    </div>
                    
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="rounded-full bg-blue-100 w-6 h-6 flex items-center justify-center mr-3">
                          <span className="font-bold text-blue-600 text-sm">2</span>
                        </div>
                        <h5 className="font-semibold">Ödeme Alma</h5>
                      </div>
                      <p className="text-sm text-gray-600">
                        Ana ekrandan "Ödeme Al" butonuna tıklayın, tutar ve taksit bilgilerini girin.
                        Temassız ödeme, kart okutma veya QR kod yöntemlerinden birini seçerek ödeme alın.
                      </p>
                    </div>
                    
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="rounded-full bg-blue-100 w-6 h-6 flex items-center justify-center mr-3">
                          <span className="font-bold text-blue-600 text-sm">3</span>
                        </div>
                        <h5 className="font-semibold">İşlem Takibi</h5>
                      </div>
                      <p className="text-sm text-gray-600">
                        "İşlemlerim" bölümünden geçmiş işlemleri görüntüleyin, raporlar oluşturun ve
                        e-fatura entegrasyonu ile faturalarınızı düzenleyin.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Cep POS: Güvenlik Özellikleri</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="p-5 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <ShieldCheck className="h-5 w-5 mr-2 text-primary" />
                    Veri Güvenliği
                  </h4>
                  <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
                    <li>End-to-end şifreleme</li>
                    <li>PCI DSS uyumluluğu</li>
                    <li>ISO 27001 sertifikasyonu</li>
                    <li>Kart verilerinin cihazda saklanmaması</li>
                    <li>Düzenli güvenlik kontrolleri</li>
                  </ul>
                </div>
                
                <div className="p-5 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <WifiHigh className="h-5 w-5 mr-2 text-primary" />
                    İşlem Güvenliği
                  </h4>
                  <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
                    <li>Gerçek zamanlı doğrulama</li>
                    <li>3D Secure entegrasyonu</li>
                    <li>Anlık işlem bildirimleri</li>
                    <li>Lokasyon doğrulama</li>
                    <li>İşlem limiti belirleme</li>
                  </ul>
                </div>
                
                <div className="p-5 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                    Dolandırıcılık Koruması
                  </h4>
                  <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
                    <li>Yapay zeka tabanlı risk analizi</li>
                    <li>Şüpheli işlem tespit sistemi</li>
                    <li>İşlem geçmişi kontrolü</li>
                    <li>Anormal davranış tespiti</li>
                    <li>BDDK onaylı güvenlik protokolleri</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Cep POS: Maliyet Optimizasyonu</h3>
              <div className="bg-white p-6 rounded-lg border border-gray-200 mb-12">
                <p className="text-gray-700 mb-4">
                  İşletmenizin maliyetlerini optimize etmek için öneriler:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium mb-3">Komisyon Optimizasyonu</h4>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                      <li>İşlem hacminize göre özel fiyatlandırma talep edin</li>
                      <li>Farklı sağlayıcılardan teklif alarak karşılaştırın</li>
                      <li>Yıllık sözleşme yaparak indirimli oranlar alın</li>
                      <li>Taksit yapısını işletme nakit akışına göre optimize edin</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-3">Ek Maliyet Tasarrufu</h4>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                      <li>POS cihazı satın alma maliyetinden kurtulun</li>
                      <li>Bakım ve servis ücretlerinden tasarruf edin</li>
                      <li>Kağıt slip maliyetini azaltın (e-slip kullanımı)</li>
                      <li>Personel eğitim maliyetlerini minimize edin</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-md text-sm">
                  <p className="font-medium flex items-center">
                    <Globe className="w-4 h-4 mr-2 text-blue-600" />
                    <span className="text-blue-700">Maliyet İpucu:</span>
                  </p>
                  <p className="mt-1 text-gray-700">
                    Aylık 25.000 TL ve üzeri ciro yapan işletmeler genellikle özel komisyon oranları için pazarlık yapabilirler.
                    Düzenli işlem hacminizi belgeleyerek daha avantajlı oranlar elde etmeniz mümkündür.
                  </p>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">Cep POS Avantajları ve Dezavantajları</h3>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                  <h4 className="text-lg font-semibold text-green-700 mb-3 flex items-center">
                    <Share2 className="w-5 h-5 mr-2" />
                    Avantajlar
                  </h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Sıfır donanım maliyeti</li>
                    <li>Kolay kurulum ve entegrasyon</li>
                    <li>Düşük işlem komisyonları</li>
                    <li>Mobil kullanım esnekliği</li>
                    <li>Tüm kredi kartlarıyla uyumluluk</li>
                    <li>Gelişmiş raporlama imkanları</li>
                    <li>7/24 teknik destek</li>
                    <li>Sürekli güncellenen yazılım</li>
                    <li>E-fatura entegrasyonu</li>
                    <li>Temassız ödeme imkanı</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                  <h4 className="text-lg font-semibold text-red-700 mb-3 flex items-center">
                    <Share2 className="w-5 h-5 mr-2" />
                    Dezavantajlar
                  </h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>İnternet bağlantısı gerekliliği</li>
                    <li>Batarya ömrü kısıtlaması</li>
                    <li>Bazı durumlarda bağlantı sorunları</li>
                    <li>Telefon hafıza kapasitesi ihtiyacı</li>
                    <li>Büyük işletmeler için sınırlı fonksiyonellik</li>
                    <li>Yazılım güncellemelerine bağımlılık</li>
                    <li>Telefon/tablet arızasında kesinti riski</li>
                    <li>Fiziksel POS'lara göre daha yavaş işlem hızı</li>
                    <li>Yüksek hacimli işlemlerde sınırlılık</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl my-16">
              <div className="max-w-4xl mx-auto">
                
                <CepPOSFAQ />
              </div>
            </div>
            
            <div className="my-16">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-6 text-center">Son Yazılarımız</h3>
                <p className="text-center text-gray-600 mb-8">
                  Cep POS ve ödeme sistemleri hakkında en güncel bilgiler ve makaleler
                </p>
                <LatestBlogPosts />
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl my-16 text-center">
              <h3 className="text-2xl font-bold mb-4">En Uygun Cep POS Çözümünü Bulun</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                İşletmenizin ihtiyaçlarına en uygun cep POS çözümünü bulmak için hemen karşılaştırma yapın ve özel tekliflerden yararlanın.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Cep POS Karşılaştır
                </Button>
                <Button size="lg" variant="outline">
                  Komisyon Hesapla
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>;
};

export default CepPOS;
