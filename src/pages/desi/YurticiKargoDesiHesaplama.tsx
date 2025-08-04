import DesiCalculator from "@/components/desi/DesiCalculator";
import EnhancedMetaTags from "@/components/SEO/EnhancedMetaTags";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Package, Calculator, Info } from "lucide-react";

const YurticiKargoDesiHesaplama = () => {
  const faqData = [
    {
      question: "Yurtiçi Kargo desi hesaplama nasıl yapılır?",
      answer: "Yurtiçi Kargo desi hesaplama formülü şudur: Desi = (En × Boy × Yükseklik) ÷ 3000. Tüm ölçüler santimetre cinsindendir. Yurtiçi Kargo, desi ağırlığı ile gerçek ağırlığı karşılaştırır ve büyük olanı baz alır."
    },
    {
      question: "Yurtiçi Kargo 1 desi fiyatı 2025 ne kadar?",
      answer: "2025 yılında Yurtiçi Kargo 1 desi fiyatı yaklaşık 14-17 TL arasında değişmektedir. Minimum kargo ücreti 28 TL'dir. Fiyatlar mesafe ve hizmet türüne göre değişiklik gösterebilir."
    },
    {
      question: "Yurtiçi Kargo desi hesabında hangi ölçüler dikkate alınır?",
      answer: "Yurtiçi Kargo desi hesabında paketin en, boy ve yükseklik ölçüleri santimetre cinsinden dikkate alınır. Paketin en geniş, en uzun ve en yüksek noktaları ölçülmelidir."
    },
    {
      question: "Yurtiçi Kargo'da desi mi kilogram mı önceliklidir?",
      answer: "Yurtiçi Kargo, desi ağırlığı ile gerçek ağırlığı karşılaştırır ve hangisi büyükse o değer üzerinden ücretlendirme yapar. Bu sisteme hacim ağırlığı sistemi denir."
    }
  ];

  return (
    <>
      <EnhancedMetaTags
        title="Yurtiçi Kargo Desi Hesaplama 2025 | Yurtiçi Kargo Desi Fiyatları"
        description="Yurtiçi Kargo desi hesaplama aracı ve 2025 güncel fiyatları. Yurtiçi Kargo 1 desi fiyatı, hesaplama formülü ve örnekler. Ücretsiz online hesaplayıcı."
        keywords="yurtiçi kargo desi hesaplama, yurtiçi kargo 1 desi fiyatı, yurtiçi kargo desi hesabı, yurtiçi kargo desi fiyatları 2025"
        canonicalPath="/desi-hesaplama/yurtici-kargo-desi-hesaplama"
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
            <div className="text-4xl">📦</div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Yurtiçi Kargo Desi Hesaplama 2025
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Yurtiçi Kargo güncel desi fiyatları ve hesaplama aracı
          </p>
          <p className="text-sm md:text-base text-gray-500">
            2025 yılı Yurtiçi Kargo desi hesaplama formülü, fiyatları ve detaylı bilgiler
          </p>
        </div>

        {/* Calculator Section */}
        <div className="mb-16">
          <DesiCalculator />
        </div>

        {/* Yurtiçi Kargo Info */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-6 h-6" />
                Yurtiçi Kargo Desi Hesaplama 2025
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p>
                <strong>Yurtiçi Kargo</strong>, Türkiye'nin en büyük kargo şirketlerinden biri olup, 
                desi hesaplama sisteminde standart formülü kullanmaktadır. Yurtiçi Kargo desi hesaplama 
                2025 yılında da aynı formülle yapılmaya devam etmektedir.
              </p>

              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">🔢 Yurtiçi Kargo Desi Hesaplama Formülü</h3>
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
                  <h4 className="font-semibold text-green-800 mb-2">✅ Yurtiçi Kargo Avantajları</h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• En geniş şube ağı (2000+ şube)</li>
                    <li>• Güvenilir teslimat</li>
                    <li>• Gelişmiş takip sistemi</li>
                    <li>• Kapıdan kapıya hizmet</li>
                    <li>• Kurumsal çözümler</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">💰 Yurtiçi Kargo Desi Fiyatları 2025</h4>
                  <ul className="space-y-1 text-sm text-blue-700">
                    <li>• 1 Desi: 14-17 TL</li>
                    <li>• Minimum ücret: 28 TL</li>
                    <li>• Ekspres hizmet ek ücretli</li>
                    <li>• Kurumsal müşteri indirimleri</li>
                    <li>• Hacimli gönderim avantajları</li>
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
                Yurtiçi Kargo Desi Hesaplama Örnekleri
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Örnek 1: Orta Boy Paket</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p><strong>Ölçüler:</strong> 30 cm × 25 cm × 15 cm</p>
                      <p><strong>Gerçek Ağırlık:</strong> 1.5 kg</p>
                      <p><strong>Hesaplama:</strong> (30 × 25 × 15) ÷ 3000 = 3.75 desi</p>
                    </div>
                    <div>
                      <p><strong>Desi Ağırlığı:</strong> 3.75 desi</p>
                      <p><strong>Faturalandırma:</strong> 4 desi (yuvarlanır)</p>
                      <p><strong>Tahmini Ücret:</strong> 56-68 TL</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Örnek 2: Büyük Paket</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p><strong>Ölçüler:</strong> 80 cm × 50 cm × 40 cm</p>
                      <p><strong>Gerçek Ağırlık:</strong> 5 kg</p>
                      <p><strong>Hesaplama:</strong> (80 × 50 × 40) ÷ 3000 = 53.33 desi</p>
                    </div>
                    <div>
                      <p><strong>Desi Ağırlığı:</strong> 53.33 desi</p>
                      <p><strong>Faturalandırma:</strong> 54 desi (yuvarlanır)</p>
                      <p><strong>Tahmini Ücret:</strong> 756-918 TL</p>
                    </div>
                  </div>
                </div>
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
                Yurtiçi Kargo Desi Hesabında Dikkat Edilmesi Gerekenler
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">📏 Ölçüm İpuçları</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Paketin en geniş noktalarını ölçün</li>
                    <li>• Çıkıntı ve parçalar dahil edilmeli</li>
                    <li>• Ölçümleri santimetre cinsinden yapın</li>
                    <li>• Yuvarlatma yapmadan hassas ölçün</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">💡 Maliyet Optimizasyonu</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Uygun boyutta paket seçin</li>
                    <li>• Gereksiz boşlukları minimuma indirin</li>
                    <li>• Kurumsal anlaşma seçeneklerini araştırın</li>
                    <li>• Hacimli gönderim avantajlarını değerlendirin</li>
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
              Yurtiçi Kargo Desi Hesaplama SSS
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
            Bu sayfadaki Yurtiçi Kargo desi fiyatları tahmini değerlerdir. Kesin fiyat bilgisi için 
            Yurtiçi Kargo müşteri hizmetleri ile iletişime geçiniz. Fiyatlar 2025 yılı tahminleri olup 
            değişiklik gösterebilir.
          </p>
        </div>
      </div>
    </>
  );
};

export default YurticiKargoDesiHesaplama;
