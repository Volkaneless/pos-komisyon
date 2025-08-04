import DesiCalculator from "@/components/desi/DesiCalculator";
import EnhancedMetaTags from "@/components/SEO/EnhancedMetaTags";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Package, Calculator, Info } from "lucide-react";

const TrendyolDesiHesaplama = () => {
  const faqData = [
    {
      question: "Trendyol desi hesaplama nasıl yapılır?",
      answer: "Trendyol desi hesaplama formülü şudur: Desi = (En × Boy × Yükseklik) ÷ 3000. Tüm ölçüler santimetre cinsindendir. Trendyol, desi ağırlığı ile gerçek ağırlığı karşılaştırır ve büyük olanı baz alır."
    },
    {
      question: "Trendyol 1 desi fiyatı 2025 ne kadar?",
      answer: "2025 yılında Trendyol 1 desi fiyatı yaklaşık 8-12 TL arasında değişmektedir. Minimum kargo ücreti 20 TL'dir. Satıcı kategorisine ve hacmine göre özel fiyatlandırma uygulanır."
    },
    {
      question: "Trendyol desi hesabında hangi ölçüler dikkate alınır?",
      answer: "Trendyol desi hesabında paketin en, boy ve yükseklik ölçüleri santimetre cinsinden dikkate alınır. Ürün ambalaj ölçüleri dikkate alınmalıdır."
    },
    {
      question: "Trendyol'da desi mi kilogram mı önceliklidir?",
      answer: "Trendyol, desi ağırlığı ile gerçek ağırlığı karşılaştırır ve hangisi büyükse o değer üzerinden ücretlendirme yapar. E-ticaret platformu olarak hacim ağırlığı önemlidir."
    }
  ];

  return (
    <>
      <EnhancedMetaTags
        title="Trendyol Desi Hesaplama 2025 | Trendyol Kargo Desi Fiyatları"
        description="Trendyol desi hesaplama aracı ve 2025 güncel fiyatları. Trendyol 1 desi fiyatı, hesaplama formülü ve örnekler. Ücretsiz online hesaplayıcı."
        keywords="trendyol desi hesaplama, trendyol kargo desi fiyatları, trendyol desi hesabı, trendyol desi fiyatları 2025"
        canonicalPath="/desi-hesaplama/trendyol-desi-hesaplama"
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
            <div className="text-4xl">🛒</div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Trendyol Desi Hesaplama 2025
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Trendyol güncel desi fiyatları ve hesaplama aracı
          </p>
          <p className="text-sm md:text-base text-gray-500">
            2025 yılı Trendyol desi hesaplama formülü, fiyatları ve satıcı bilgileri
          </p>
        </div>

        {/* Calculator Section */}
        <div className="mb-16">
          <DesiCalculator />
        </div>

        {/* Trendyol Info */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-6 h-6" />
                Trendyol Desi Hesaplama 2025
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p>
                <strong>Trendyol</strong>, Türkiye'nin en büyük e-ticaret platformu olup, 
                desi hesaplama sisteminde standart formülü kullanmaktadır. Trendyol desi hesaplama 
                2025 yılında da aynı formülle yapılmaya devam etmektedir.
              </p>

              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">🔢 Trendyol Desi Hesaplama Formülü</h3>
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
                  <h4 className="font-semibold text-green-800 mb-2">✅ Trendyol Avantajları</h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• Türkiye'nin en büyük e-ticaret platformu</li>
                    <li>• Trendyol Express hızlı teslimat</li>
                    <li>• Satıcı dostu kargo fiyatları</li>
                    <li>• Entegre lojistik çözümleri</li>
                    <li>• Müşteri memnuniyeti odaklı</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">💰 Trendyol Desi Fiyatları 2025</h4>
                  <ul className="space-y-1 text-sm text-blue-700">
                    <li>• 1 Desi: 8-12 TL</li>
                    <li>• Minimum ücret: 20 TL</li>
                    <li>• Satıcı kategori indirimleri</li>
                    <li>• Hacim bazlı özel fiyatlar</li>
                    <li>• Express teslimat ek ücretli</li>
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
                Trendyol Desi Hesaplama Örnekleri
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Örnek 1: Küçük Ürün (Elektronik Aksesuar)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p><strong>Ölçüler:</strong> 15 cm × 12 cm × 6 cm</p>
                      <p><strong>Gerçek Ağırlık:</strong> 0.3 kg</p>
                      <p><strong>Hesaplama:</strong> (15 × 12 × 6) ÷ 3000 = 0.36 desi</p>
                    </div>
                    <div>
                      <p><strong>Desi Ağırlığı:</strong> 0.36 desi</p>
                      <p><strong>Faturalandırma:</strong> 1 desi (minimum)</p>
                      <p><strong>Tahmini Ücret:</strong> 20 TL (minimum ücret)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Örnek 2: Orta Boy Ürün (Tekstil)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p><strong>Ölçüler:</strong> 35 cm × 28 cm × 18 cm</p>
                      <p><strong>Gerçek Ağırlık:</strong> 1.2 kg</p>
                      <p><strong>Hesaplama:</strong> (35 × 28 × 18) ÷ 3000 = 5.88 desi</p>
                    </div>
                    <div>
                      <p><strong>Desi Ağırlığı:</strong> 5.88 desi</p>
                      <p><strong>Faturalandırma:</strong> 6 desi (yuvarlanır)</p>
                      <p><strong>Tahmini Ücret:</strong> 48-72 TL</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Seller Tips Section */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="w-6 h-6" />
                Trendyol Satıcıları İçin Desi Optimizasyonu
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">📦 Ambalaj İpuçları</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Ürün boyutuna uygun ambalaj seçin</li>
                    <li>• Gereksiz dolgu malzemesi kullanmayın</li>
                    <li>• Standart ambalaj boyutları tercih edin</li>
                    <li>• Ürün koruma ve maliyet dengesini kurun</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">💡 Maliyet Yönetimi</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Ürün fiyatına kargo maliyetini dahil edin</li>
                    <li>• Satıcı kategori avantajlarını kullanın</li>
                    <li>• Toplu gönderim seçeneklerini değerlendirin</li>
                    <li>• Müşteri memnuniyetini önceleyerek optimize edin</li>
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
              Trendyol Desi Hesaplama SSS
            </h2>
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
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
                  { name: "PTT Kargo", url: "/desi-hesaplama/ptt-kargo-desi-hesaplama" },
                  { name: "MNG Kargo", url: "/desi-hesaplama/mng-kargo-desi-hesaplama" },
                  { name: "Yurtiçi Kargo", url: "/desi-hesaplama/yurtici-kargo-desi-hesaplama" },
                  { name: "Sürat Kargo", url: "/desi-hesaplama/surat-kargo-desi-hesaplama" }
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
            Bu sayfadaki Trendyol desi fiyatları tahmini değerlerdir. Kesin fiyat bilgisi için 
            Trendyol Satıcı Paneli'nden kontrol ediniz. Fiyatlar satıcı kategorisine göre değişiklik gösterebilir.
          </p>
        </div>
      </div>
    </>
  );
};

export default TrendyolDesiHesaplama;
