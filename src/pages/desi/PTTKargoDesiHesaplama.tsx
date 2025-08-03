import DesiCalculator from "@/components/desi/DesiCalculator";
import EnhancedMetaTags from "@/components/SEO/EnhancedMetaTags";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Package, Calculator, Info } from "lucide-react";

const PTTKargoDesiHesaplama = () => {
  const faqData = [
    {
      question: "PTT Kargo desi hesaplama nasıl yapılır?",
      answer: "PTT Kargo desi hesaplama formülü şudur: Desi = (En × Boy × Yükseklik) ÷ 3000. PTT Kargo, devlet kurumu olması nedeniyle genellikle en uygun fiyatları sunar ve standart desi hesaplama formülünü kullanır."
    },
    {
      question: "PTT Kargo desi fiyatları 2025 ne kadar?",
      answer: "2025 yılında PTT Kargo desi fiyatları yaklaşık 12-15 TL arasındadır. Minimum kargo ücreti 25 TL'dir. PTT Kargo, devlet kurumu olarak genellikle en ekonomik seçenektir."
    },
    {
      question: "PTT Kargo hesaplama desi sisteminde avantajları neler?",
      answer: "PTT Kargo'nun avantajları: En uygun fiyatlar, geniş şube ağı, güvenilirlik, sigorta seçenekleri ve devlet güvencesi. Teslimat süresi diğer özel kargolara göre biraz daha uzun olabilir."
    },
    {
      question: "PTT Kargo'da desi mi kilogram mı öncelikli?",
      answer: "PTT Kargo da diğer kargo firmaları gibi desi ağırlığı ile gerçek ağırlığı karşılaştırır ve büyük olanı baz alarak ücretlendirme yapar."
    }
  ];

  return (
    <>
      <EnhancedMetaTags
        title="PTT Kargo Desi Hesaplama 2025 | PTT Kargo Desi Fiyatları"
        description="PTT Kargo desi hesaplama aracı ve 2025 güncel fiyatları. PTT Kargo desi fiyatları, hesaplama formülü ve örnekler. En uygun kargo seçeneği."
        keywords="ptt kargo desi hesaplama, ptt kargo desi fiyatları, ptt kargo hesaplama desi, ptt kargo 2025 fiyatları"
        canonicalPath="/desi-hesaplama/ptt-kargo-desi-hesaplama"
        schemaType="FAQPage"
        faqs={faqData}
      />

      <div className="container mx-auto px-4 pt-24 pb-12 min-h-screen">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link 
            to="/desi-hesaplama" 
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Desi Hesaplama Ana Sayfa
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="text-4xl">📮</div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              PTT Kargo Desi Hesaplama 2025
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            PTT Kargo en uygun desi fiyatları ve hesaplama aracı
          </p>
          <p className="text-sm md:text-base text-gray-500">
            2025 yılı PTT Kargo desi hesaplama formülü, ekonomik fiyatları ve detaylı bilgiler
          </p>
        </div>

        {/* Calculator Section */}
        <div className="mb-16">
          <DesiCalculator />
        </div>

        {/* PTT Kargo Info */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-6 h-6" />
                PTT Kargo Desi Hesaplama 2025
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p>
                <strong>PTT Kargo</strong>, Türkiye'nin en köklü ve güvenilir kargo hizmeti olup, 
                devlet kurumu olması nedeniyle genellikle en ekonomik fiyatları sunar. PTT Kargo 
                desi hesaplama sisteminde standart formülü kullanmakta ve 2025 yılında da 
                uygun fiyat politikasını sürdürmektedir.
              </p>

              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">🔢 PTT Kargo Desi Hesaplama Formülü</h3>
                <div className="bg-white p-4 rounded border">
                  <p className="text-xl font-mono text-center">
                    Desi = (En × Boy × Yükseklik) ÷ 3000
                  </p>
                </div>
                <p className="text-sm mt-2 text-gray-600">
                  * Tüm ölçüler santimetre (cm) cinsindendir
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">✅ PTT Kargo Avantajları</h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• En ekonomik fiyatlar</li>
                    <li>• Türkiye'nin en geniş şube ağı</li>
                    <li>• Devlet güvencesi</li>
                    <li>• Her yere ulaşım</li>
                    <li>• Güvenilir hizmet</li>
                    <li>• Sigorta seçenekleri</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">💰 PTT Kargo Desi Fiyatları 2025</h4>
                  <ul className="space-y-1 text-sm text-blue-700">
                    <li>• 1 Desi: 12-15 TL</li>
                    <li>• Minimum ücret: 25 TL</li>
                    <li>• En ekonomik seçenek</li>
                    <li>• Öğrenci indirimleri mevcut</li>
                    <li>• Toplu gönderim avantajları</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Example Calculations */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-6 h-6" />
                PTT Kargo Desi Hesaplama Örnekleri
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Örnek 1: Kitap Gönderimi</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p><strong>Ölçüler:</strong> 25 cm × 18 cm × 5 cm</p>
                      <p><strong>Gerçek Ağırlık:</strong> 1.2 kg</p>
                      <p><strong>Hesaplama:</strong> (25 × 18 × 5) ÷ 3000 = 0.75 desi</p>
                    </div>
                    <div>
                      <p><strong>Desi Ağırlığı:</strong> 0.75 desi</p>
                      <p><strong>Faturalandırma:</strong> 1.2 kg (gerçek ağırlık {'>'} desi)</p>
                      <p><strong>Tahmini Ücret:</strong> 25 TL (minimum ücret)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Örnek 2: Büyük Kutu</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p><strong>Ölçüler:</strong> 60 cm × 45 cm × 35 cm</p>
                      <p><strong>Gerçek Ağırlık:</strong> 4 kg</p>
                      <p><strong>Hesaplama:</strong> (60 × 45 × 35) ÷ 3000 = 31.5 desi</p>
                    </div>
                    <div>
                      <p><strong>Desi Ağırlığı:</strong> 31.5 desi</p>
                      <p><strong>Faturalandırma:</strong> 31.5 desi (desi {'>'} gerçek ağırlık)</p>
                      <p><strong>Tahmini Ücret:</strong> 378-472 TL</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Örnek 3: Giysi Paketi</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p><strong>Ölçüler:</strong> 30 cm × 25 cm × 15 cm</p>
                      <p><strong>Gerçek Ağırlık:</strong> 0.8 kg</p>
                      <p><strong>Hesaplama:</strong> (30 × 25 × 15) ÷ 3000 = 3.75 desi</p>
                    </div>
                    <div>
                      <p><strong>Desi Ağırlığı:</strong> 3.75 desi</p>
                      <p><strong>Faturalandırma:</strong> 3.75 desi (desi {'>'} gerçek ağırlık)</p>
                      <p><strong>Tahmini Ücret:</strong> 45-56 TL</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* PTT vs Other Cargo */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle>PTT Kargo vs Diğer Kargo Firmaları (2025)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-2 text-left">Kargo Firması</th>
                      <th className="border border-gray-200 px-4 py-2 text-center">1 Desi Fiyatı</th>
                      <th className="border border-gray-200 px-4 py-2 text-center">Minimum Ücret</th>
                      <th className="border border-gray-200 px-4 py-2 text-center">Teslimat Süresi</th>
                      <th className="border border-gray-200 px-4 py-2 text-center">Avantaj</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-green-50">
                      <td className="border border-gray-200 px-4 py-2 font-medium">PTT Kargo</td>
                      <td className="border border-gray-200 px-4 py-2 text-center font-bold text-green-600">12-15 TL</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">25 TL</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">2-3 gün</td>
                      <td className="border border-gray-200 px-4 py-2 text-center text-sm">En ekonomik</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Aras Kargo</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">15-18 TL</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">30 TL</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">1-2 gün</td>
                      <td className="border border-gray-200 px-4 py-2 text-center text-sm">Hızlı</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">MNG Kargo</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">14-17 TL</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">28 TL</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">1-2 gün</td>
                      <td className="border border-gray-200 px-4 py-2 text-center text-sm">Dengeli</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tips Section */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="w-6 h-6" />
                PTT Kargo İle Daha Ekonomik Gönderim İpuçları
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">💰 Maliyet Düşürme</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Uygun boyutta ambalaj kullanın</li>
                    <li>• Gereksiz dolgu malzemelerini azaltın</li>
                    <li>• Toplu gönderim yapmayı değerlendirin</li>
                    <li>• Öğrenci iseniz öğrenci indirimini kullanın</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">📦 Paketleme Tavsiyeleri</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Eşyaları sıkışık ancak güvenli paketleyin</li>
                    <li>• Kırılabilir eşyalar için ek koruma kullanın</li>
                    <li>• Adresi ve telefonu doğru yazın</li>
                    <li>• Makbuzunuzu saklayın</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              PTT Kargo Desi Hesaplama SSS
            </h2>
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">{faq.soru}</h3>
                    <p className="text-gray-700">{faq.cevap}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Other Cargo Companies */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Diğer Kargo Firmaları Desi Hesaplama</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "Aras Kargo", url: "/desi-hesaplama/aras-kargo-desi-hesaplama" },
                  { name: "MNG Kargo", url: "/desi-hesaplama/mng-kargo-desi-hesaplama" },
                  { name: "Yurtiçi Kargo", url: "/desi-hesaplama/yurtici-kargo-desi-hesaplama" },
                  { name: "Sürat Kargo", url: "/desi-hesaplama/surat-kargo-desi-hesaplama" },
                  { name: "Trendyol", url: "/desi-hesaplama/trendyol-desi-hesaplama" }
                ].map((firma, index) => (
                  <Link
                    key={index}
                    to={firma.url}
                    className="p-4 border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
                  >
                    <h3 className="font-medium text-center">{firma.name} Desi Hesaplama</h3>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Important Note */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-center">
          <h3 className="font-semibold text-amber-800 mb-2">⚠️ Önemli Bilgilendirme</h3>
          <p className="text-amber-700">
            Bu sayfadaki PTT Kargo desi fiyatları tahmini değerlerdir. Kesin fiyat bilgisi için 
            PTT şubelerini ziyaret ediniz veya 444 1 788 numaralı telefonu arayınız. 
            Fiyatlar 2025 yılı tahminleri olup değişiklik gösterebilir.
          </p>
        </div>
      </div>
    </>
  );
};

export default PTTKargoDesiHesaplama;
