import { Helmet } from "react-helmet";
import { Smartphone, CreditCard, ShieldCheck, Globe, WifiHigh, TrendingUp } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import FAQ from "@/components/FAQ";
import LatestBlogPosts from "@/components/pos/LatestBlogPosts";
import CanonicalLink from "@/components/CanonicalLink";
import MetaTags from "@/components/MetaTags";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
const MobilPOS = () => {
  const currentYear = new Date().getFullYear();
  return <>
      <MetaTags title={`Mobil POS Komisyon Oranları ${currentYear} - En Uygun Mobil POS Ücretleri`} description={`${currentYear} yılı güncel mobil POS komisyon oranları, karşılaştırma ve hesaplama araçları. İşletmeniz için en uygun mobil POS çözümünü bulun.`} keywords="mobil pos komisyon oranları, mobil pos başvuru, mobil ödeme sistemleri, taşınabilir pos cihazları, mobil pos çözümleri, enpara mobil pos, paycell mobil pos" canonicalPath="/pos-types/mobil" structuredData={{
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": `Mobil POS Komisyon Oranları ${currentYear}`,
      "description": `${currentYear} yılı güncel mobil POS komisyon oranları ve karşılaştırma araçları.`,
      "url": "https://poskomisyon.com/pos-types/mobil",
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Enpara Mobil POS",
          "url": "https://poskomisyon.com/pos/enpara-mobil-pos"
        }, {
          "@type": "ListItem",
          "position": 2,
          "name": "Paycell Mobil POS",
          "url": "https://poskomisyon.com/pos/paycell-mobil-pos"
        }, {
          "@type": "ListItem",
          "position": 3,
          "name": "Vallet Mobil POS",
          "url": "https://poskomisyon.com/pos/vallet-mobil-pos"
        }]
      }
    }} />

      <POSTypePage title="Mobil POS Komisyon Oranları 2025" description="2025 yılında güncel POS komisyon oranları ile işletme maliyetlerinizi optimize edin. Bankaların POS komisyon oranlarını karşılaştırın ve size en uygun POS çözümünü bulun." type="Mobil (Taşınabilir) POS" Icon={Smartphone} whatIsContent="Mobil POS cihazları, işletmelerin hareket halindeyken ödeme almalarını sağlayan taşınabilir cihazlardır. Bu cihazlar, kablosuz internet veya mobil veri bağlantısı üzerinden çalışır ve kredi kartı ödemelerini güvenli bir şekilde işler." advantages={["Hareket halindeyken ödeme alma imkanı", "Kolay taşınabilirlik", "Düşük maliyetli çözüm", "Hızlı kurulum ve kullanım", "Tüm kredi kartlarıyla uyumluluk", "7/24 teknik destek", "Detaylı satış raporlaması", "Güvenli işlem altyapısı"]} />

      <div className="container mx-auto px-4 py-16">
        

        

        <div className="prose prose-lg max-w-4xl mx-auto mt-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Mobil POS Komisyon Oranları {currentYear}</h2>
          
          <div className="bg-blue-50 p-6 rounded-xl mb-8">
            <h3 className="text-2xl font-semibold mb-4">Mobil POS Nedir?</h3>
            <p className="text-gray-700 mb-0">
              Mobil POS cihazları, işletmelerin hareket halindeyken ödeme almalarını sağlayan taşınabilir cihazlardır. 
              Bu cihazlar, akıllı telefon veya tabletlerle entegre çalışarak kredi kartı ödemelerini güvenli bir şekilde işler.
              Son yıllarda gelişen teknoloji ile işletmeler artık fiziki bir mağazaya bağlı kalmaksızın her yerde 
              ödeme kabul edebilmektedir. Bu da özellikle küçük işletmeler için büyük bir avantaj sağlamaktadır.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Mobil POS Komisyon Oranları {currentYear}</h3>
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
                  <td className="border border-gray-300 px-4 py-3 font-semibold">%0,89 - %1,99</td>
                  <td className="border border-gray-300 px-4 py-3">Standart işlem komisyonu</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">3 Taksit</td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">%1,99 - %2,99</td>
                  <td className="border border-gray-300 px-4 py-3">Kısa vadeli taksit seçeneği</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">6 Taksit</td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">%2,49 - %3,99</td>
                  <td className="border border-gray-300 px-4 py-3">Orta vadeli taksit seçeneği</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">9 Taksit</td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">%3,49 - %4,99</td>
                  <td className="border border-gray-300 px-4 py-3">Uzun vadeli ödeme imkanı</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">12 Taksit</td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">%4,99 - %6,99</td>
                  <td className="border border-gray-300 px-4 py-3">En uzun vadeli taksit seçeneği</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-xl mb-8">
            <h4 className="text-lg font-semibold mb-2">Not:</h4>
            <p className="text-gray-700 mb-0">
              Yukarıdaki komisyon oranları ortalama değerlerdir. Her bankanın ve POS sağlayıcının kendi fiyatlandırma 
              politikası vardır. Ayrıca, işlem hacminize ve sözleşme sürenize göre özel teklifler alabilirsiniz.
            </p>
          </div>

          <Separator className="my-10" />

          <h3 className="text-2xl font-semibold mb-4">Mobil POS: Kurulum ve Kullanım</h3>
          <p className="text-gray-600 mb-4">
            Mobil POS sistemlerinin kurulumu için izlemeniz gereken adımlar:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg mb-3">Kurulum Aşaması</h4>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>Gerekli belgelerin hazırlanması (vergi levhası, kimlik, vb.)</li>
                <li>Mobil POS başvurusunun yapılması</li>
                <li>Sözleşmenin imzalanması</li>
                <li>Cihazın teslim alınması</li>
                <li>Uygulama kurulumu ve aktivasyon</li>
              </ol>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg mb-3">Kullanım Aşaması</h4>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>Uygulamaya giriş yapma</li>
                <li>Banka hesabı entegrasyonu</li>
                <li>Test işlemlerini gerçekleştirme</li>
                <li>Personel eğitimi</li>
                <li>Düzenli bakım ve güncellemeler</li>
              </ol>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Mobil POS: Güvenlik Özellikleri</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-5 hover:shadow-md transition-shadow border-primary/20">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                Veri Güvenliği
              </h4>
              <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
                <li>SSL şifreleme ve güvenli veri iletimi</li>
                <li>PCI DSS uyumluluğu</li>
                <li>Kart verisi saklama yasağı</li>
              </ul>
            </Card>
            
            <Card className="p-5 hover:shadow-md transition-shadow border-primary/20">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <WifiHigh className="h-5 w-5 text-primary" />
                İşlem Güvenliği
              </h4>
              <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
                <li>Anlık işlem bildirimleri</li>
                <li>Chip&PIN teknolojisi</li>
                <li>Temassız ödeme limitleri</li>
              </ul>
            </Card>
            
            <Card className="p-5 hover:shadow-md transition-shadow border-primary/20">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Dolandırıcılık Koruması
              </h4>
              <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
                <li>Şüpheli işlem tespiti</li>
                <li>Anlık riskli işlem bildirimleri</li>
                <li>Lokasyon doğrulama</li>
              </ul>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Mobil POS: Maliyet Optimizasyonu</h3>
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
            <p className="text-gray-700 mb-4">
              İşletmenizin maliyetlerini optimize etmek için öneriler:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>İşlem hacminize göre komisyon oranı pazarlığı yapın</li>
              <li>Aylık sabit ücret yerine işlem bazlı ödeme modelini değerlendirin</li>
              <li>Kampanya dönemlerinde özel indirimlerden faydalanın</li>
              <li>Farklı bankalardan teklif alarak karşılaştırma yapın</li>
              <li>Yıllık sözleşme yaparak indirimli oranlar talep edin</li>
              <li>Toplu işlem avantajlarını araştırın</li>
            </ul>
            <div className="bg-blue-50 p-4 rounded-md text-sm">
              <p className="font-medium">İpucu:</p>
              <p>Aylık 50.000 TL ve üzeri ciro yapan işletmeler genellikle özel komisyon oranları için pazarlık yapabilirler.</p>
            </div>
          </div>
          
          <h3 className="text-2xl font-semibold mb-4">Mobil POS Avantajları ve Dezavantajları</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold text-green-600 mb-3">Avantajlar</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Hareket serbestisi ve esneklik</li>
                <li>Düşük maliyet ve kolay kurulum</li>
                <li>Tüm kredi kartları ile uyumluluk</li>
                <li>Fiziksel mağazaya ihtiyaç olmaması</li>
                <li>Anında ödeme alınabilmesi</li>
                <li>Gelişmiş raporlama ve analiz araçları</li>
                <li>Müşteri memnuniyeti ve satış artışı</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-red-600 mb-3">Dezavantajlar</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>İnternet bağlantısına bağımlılık</li>
                <li>Batarya ömrü ve şarj ihtiyacı</li>
                <li>Bazı durumlarda bağlantı sorunları</li>
                <li>Yazılım güncellemeleri gerektirebilir</li>
                <li>Fiziksel POS'lara göre işlem hızı daha yavaş olabilir</li>
                <li>Teknik destek ihtiyacı</li>
              </ul>
            </div>
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
          <h3 className="text-2xl font-semibold mb-4">En Uygun Mobil POS Çözümü İçin</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            İşletmenizin ihtiyaçlarına en uygun mobil POS çözümünü bulmak için hemen karşılaştırma yapın ve özel tekliflerden yararlanın.
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
    </>;
};
export default MobilPOS;
