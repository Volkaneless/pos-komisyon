
import { Smartphone, ShieldCheck, Zap, Users, TrendingUp } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import FAQ from "@/components/FAQ";
import LatestBlogPosts from "@/components/pos/LatestBlogPosts";
import MetaTags from "@/components/MetaTags";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const CepPOS = () => {
  const currentYear = new Date().getFullYear();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Cep POS nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cep POS, akıllı telefon ve tabletleri kredi kartı okuyucusuna dönüştüren küçük ve taşınabilir ödeme çözümleridir. Bluetooth veya ses jakı ile bağlantı kurarak mobil cihazınızı POS terminaline çevirir."
      }
    }]
  };

  return (
    <>
      <MetaTags 
        title={`Cep POS Komisyon Oranları ${currentYear} - En Uygun Cep POS Çözümleri`}
        description={`${currentYear} yılı güncel cep POS komisyon oranları, karşılaştırma ve hesaplama araçları. İşletmeniz için en uygun cep POS çözümünü bulun.`}
        keywords={`cep pos komisyon oranları ${currentYear}, cep pos başvuru, küçük işletme pos çözümleri, taşınabilir pos cihazları, cep pos uygulamaları, mobil ödeme sistemleri`}
        canonicalPath="/pos-types/cep" 
        priority={20}
        structuredData={structuredData}
      />

      <POSTypePage 
        title={`Cep POS Komisyon Oranları ${currentYear}`}
        description={`Küçük ve orta ölçekli işletmeler için en uygun cep POS çözümleri ve komisyon oranları. ${currentYear} güncel fiyatlar ve kolay kullanım özellikleri.`}
        type="Cep POS" 
        Icon={Smartphone} 
        whatIsContent={`Cep POS, akıllı telefon ve tabletleri kredi kartı okuyucusuna dönüştüren küçük ve taşınabilir ödeme çözümleridir. ${currentYear} yılında Bluetooth veya ses jakı ile bağlantı kurarak mobil cihazınızı POS terminaline çevirir ve işletmenizin her yerde ödeme almasını sağlar.`}
        advantages={["Kolay kurulum ve kullanım", "Düşük maliyet ve giriş bariyeri", "Hafif ve taşınabilir tasarım", "Anında ödeme alma imkanı", "Gelişmiş güvenlik protokolleri", "7/24 müşteri desteği", "Hızlı para transferi", "Küçük işletmeler için ideal"]} 
        breadcrumbPath="/pos-types/cep"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Cep POS Komisyon Oranları {currentYear}</h2>
          
          <div className="bg-blue-50 p-6 rounded-xl mb-8">
            <h3 className="text-2xl font-semibold mb-4">Cep POS Nedir?</h3>
            <p className="text-gray-700 mb-0">
              Cep POS, akıllı telefon ve tabletlerinizi kredi kartı okuyucusuna dönüştüren kompakt ödeme çözümleridir.
              Bu küçük cihazlar, Bluetooth veya ses jakı ile mobil cihazınıza bağlanarak her yerde güvenli ödeme almanızı sağlar.
              Özellikle küçük işletmeler, serbest meslek sahipleri ve gezici satıcılar için idealdir.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Cep POS Komisyon Oranları {currentYear}</h3>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left">İşlem Tipi</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Komisyon Oranı</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Açıklama</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Peşin</td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">%1,69 - %2,99</td>
                  <td className="border border-gray-300 px-4 py-3">Standart peşin ödeme komisyonu</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">3 Taksit</td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">%2,99 - %3,99</td>
                  <td className="border border-gray-300 px-4 py-3">Kısa vadeli taksit seçeneği</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">6 Taksit</td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">%3,99 - %4,99</td>
                  <td className="border border-gray-300 px-4 py-3">Orta vadeli taksit seçeneği</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">9 Taksit</td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">%4,99 - %5,99</td>
                  <td className="border border-gray-300 px-4 py-3">Uzun vadeli ödeme imkanı</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">12 Taksit</td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">%5,99 - %7,99</td>
                  <td className="border border-gray-300 px-4 py-3">En uzun vadeli taksit seçeneği</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 p-6 rounded-xl mb-8">
            <h4 className="text-lg font-semibold mb-2">Önemli Not:</h4>
            <p className="text-gray-700 mb-0">
              Cep POS komisyon oranları genellikle geleneksel POS cihazlarından biraz daha yüksektir, ancak 
              düşük giriş maliyeti ve esneklik avantajları bu farkı telafi eder. Özellikle düşük işlem hacimli 
              işletmeler için maliyet-fayda açısından çok avantajlıdır.
            </p>
          </div>

          <Separator className="my-10" />

          <h3 className="text-2xl font-semibold mb-6">Cep POS: Özellikler ve Avantajlar</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 hover:shadow-md transition-shadow border-primary/20">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Hızlı Kurulum
              </h4>
              <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
                <li>5 dakika içinde kurulum</li>
                <li>Uygulama indirme ve aktivasyon</li>
                <li>Anında işlem yapabilme</li>
              </ul>
            </Card>
            
            <Card className="p-6 hover:shadow-md transition-shadow border-primary/20">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                Güvenlik
              </h4>
              <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
                <li>EMV Chip & PIN teknolojisi</li>
                <li>SSL şifreleme</li>
                <li>PCI DSS uyumluluğu</li>
              </ul>
            </Card>
            
            <Card className="p-6 hover:shadow-md transition-shadow border-primary/20">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Kullanım Kolaylığı
              </h4>
              <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
                <li>Sezgisel kullanıcı arayüzü</li>
                <li>Temassız ödeme desteği</li>
                <li>Otomatik rapor oluşturma</li>
              </ul>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Cep POS: Kurulum ve Kullanım Süreci</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg mb-3">Kurulum Adımları</h4>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>Cep POS uygulamasını indirin</li>
                <li>Hesap oluşturun ve kimlik doğrulaması yapın</li>
                <li>Cep POS cihazını telefona bağlayın</li>
                <li>Test işlemi gerçekleştirin</li>
                <li>İşleme başlayın</li>
              </ol>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg mb-3">Günlük Kullanım</h4>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>Uygulama açın ve giriş yapın</li>
                <li>Satış tutarını girin</li>
                <li>Kartı cihaza okutun veya temassız ödeme alın</li>
                <li>İşlemi onaylayın</li>
                <li>Müşteriye dekont verin</li>
              </ol>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Cep POS için İdeal İşletme Türleri</h3>
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Küçük İşletmeler</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Berber, kuaför salonları</li>
                  <li>Küçük cafe ve restoranlar</li>
                  <li>Tamir ve servis işletmeleri</li>
                  <li>Serbest meslek sahipleri</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Gezici Satış</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Pazarcılar ve seyyar satıcılar</li>
                  <li>Kargo ve teslimat hizmetleri</li>
                  <li>Etkinlik ve fuar katılımcıları</li>
                  <li>Taksi ve özel araç sahipleri</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Cep POS Avantajları vs Dezavantajları</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold text-green-600 mb-3">Avantajlar</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Düşük başlangıç maliyeti</li>
                <li>Kolay kurulum ve kullanım</li>
                <li>Taşınabilirlik ve esneklik</li>
                <li>Hızlı para transferi</li>
                <li>Minimal teknik bilgi gereksinimi</li>
                <li>7/24 müşteri desteği</li>
                <li>Temassız ödeme desteği</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-red-600 mb-3">Dezavantajlar</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Geleneksel POS'lara göre daha yüksek komisyon</li>
                <li>İnternet bağlantısına bağımlılık</li>
                <li>Telefon bataryası tüketimi</li>
                <li>Yüksek hacimli işletmeler için uygun değil</li>
                <li>Bazı gelişmiş özellikler eksik olabilir</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Cep POS Seçerken Dikkat Edilmesi Gerekenler</h3>
          <div className="bg-blue-50 p-6 rounded-xl mb-8">
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Komisyon Oranları:</strong> Farklı sağlayıcıların oranlarını karşılaştırın</li>
              <li><strong>Aylık Sabit Ücretler:</strong> Bazı sağlayıcılar aylık ücret alabilir</li>
              <li><strong>Para Transfer Süreleri:</strong> Günlük, haftalık veya aylık seçenekleri inceleyin</li>
              <li><strong>Teknik Destek:</strong> 7/24 destek hizmetinin varlığını kontrol edin</li>
              <li><strong>Cihaz Uyumluluğu:</strong> Telefon/tablet modelinizle uyumluluk</li>
              <li><strong>Güvenlik Sertifikaları:</strong> PCI DSS ve EMV sertifikalarını kontrol edin</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl my-16">
          <FAQ />
        </div>
        
        <div className="my-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Son Yazılarımız</h3>
          <LatestBlogPosts />
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">En Uygun Cep POS Çözümü İçin</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            İşletmenizin ihtiyaçlarına en uygun cep POS çözümünü bulmak için hemen karşılaştırma yapın ve özel tekliflerden yararlanın.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              POS Karşılaştır
            </Button>
            <Button size="lg" variant="outline">
              Detaylı Bilgi Al
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CepPOS;
