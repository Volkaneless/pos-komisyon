import DesiCalculator from "@/components/desi/DesiCalculator";
import EnhancedMetaTags from "@/components/SEO/EnhancedMetaTags";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Package, Truck, ArrowRight } from "lucide-react";

const DesiHesaplama = () => {
  const kargofirmalari = [
    { name: "Aras Kargo", url: "/desi-hesaplama/aras-kargo-desi-hesaplama", icon: "🚚" },
    { name: "PTT Kargo", url: "/desi-hesaplama/ptt-kargo-desi-hesaplama", icon: "📮" },
    { name: "MNG Kargo", url: "/desi-hesaplama/mng-kargo-desi-hesaplama", icon: "🚛" },
    { name: "Yurtiçi Kargo", url: "/desi-hesaplama/yurtici-kargo-desi-hesaplama", icon: "📦" },
    { name: "Sürat Kargo", url: "/desi-hesaplama/surat-kargo-desi-hesaplama", icon: "⚡" },
    { name: "Trendyol", url: "/desi-hesaplama/trendyol-desi-hesaplama", icon: "🛒" }
  ];

  const faqData = [
    {
      question: "Desi nedir?",
      answer: "Desi, kargo şirketlerinin kullandığı hacim ağırlığı birimi olup, paketin fiziksel boyutlarına göre hesaplanan ağırlıktır. Desi = (En × Boy × Yükseklik) ÷ 3000 formülü ile hesaplanır."
    },
    {
      question: "Desi nasıl hesaplanır?",
      answer: "Desi hesaplamak için paketin en, boy ve yükseklik ölçülerini santimetre cinsinden alıp çarpın, sonucu 3000'e bölün. Örneğin: 30×20×10 = 6000 cm³, 6000÷3000 = 2 desi."
    },
    {
      question: "Kargo ücreti desi mi kilogram mı üzerinden hesaplanır?",
      answer: "Kargo şirketleri genellikle desi ağırlığı ile gerçek ağırlığı karşılaştırır ve hangisi büyükse o değer üzerinden ücretlendirme yapar. Bu sisteme hacim ağırlığı sistemi denir."
    },
    {
      question: "2025 yılında hangi kargo firması en uygun desi fiyatları sunuyor?",
      answer: "2025 yılında kargo firmalarının desi fiyatları değişkenlik göstermektedir. PTT Kargo genellikle en uygun fiyatları sunarken, özel kargo şirketleri hız ve güvenilirlik açısından avantaj sağlayabilir."
    }
  ];

  return (
    <>
      <EnhancedMetaTags
        title="Desi Hesaplama | Kargo Desi Hesaplama 2025"
        description="2025 güncel kargo desi hesaplama aracı. Aras, PTT, MNG, Yurtiçi, Sürat kargo desi fiyatları ve hesaplama formülü. Ücretsiz online desi hesaplayıcı."
        keywords="desi hesaplama, kargo desi hesaplama, desi hesapla, desi hesaplama formülü, desi hesaplama 2025, kargo desi fiyatları"
        canonicalPath="/desi-hesaplama"
        schemaType="FAQPage"
        faqs={faqData}
      />

      <div className="container mx-auto px-4 pt-24 pb-12 min-h-screen">
        {/* Hero Section */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Desi Hesaplama | Kargo Desi Hesaplama Aracı (2025)
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            2025 yılı güncel kargo desi hesaplama aracı ile paket boyutlarınızı hesaplayın
          </p>
          <p className="text-sm md:text-base text-gray-500">
            Aras, PTT, MNG, Yurtiçi, Sürat kargo ve Trendyol desi hesaplama formülü ve güncel fiyatlar
          </p>
        </div>

        {/* Calculator Section */}
        <div className="mb-16">
          <DesiCalculator />
        </div>

        {/* Desi Nedir Section */}
        <article className="prose prose-lg max-w-4xl mx-auto mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-6 h-6" />
                Desi Nedir?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                <strong>Desi</strong>, kargo ve lojistik sektöründe kullanılan hacim ağırlığı birimi olup, 
                paketin fiziksel boyutlarına göre hesaplanan ağırlık değeridir. Kargo şirketleri, 
                paketin gerçek ağırlığı ile desi ağırlığını karşılaştırarak hangisi büyükse 
                o değer üzerinden ücretlendirme yapar.
              </p>
              
              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">🔢 Desi Hesaplama Formülü 2025</h3>
                <p className="text-lg font-mono bg-white p-2 rounded border">
                  Desi = (En × Boy × Yükseklik) ÷ 3000
                </p>
                <p className="text-sm mt-2">Tüm ölçüler santimetre (cm) cinsindendir.</p>
              </div>

              <h3 className="font-semibold">Desi vs Kilogram Farkı</h3>
              <ul className="space-y-2">
                <li><strong>Gerçek Ağırlık:</strong> Paketin terazide ölçülen fiziksel ağırlığı</li>
                <li><strong>Desi Ağırlığı:</strong> Paketin hacmine göre hesaplanan ağırlık</li>
                <li><strong>Faturalandırma:</strong> İkisinden büyük olan değer baz alınır</li>
              </ul>

              <h3 className="font-semibold">2025 Yılında Desi Kullanım Alanları</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <li>✅ E-ticaret gönderileri</li>
                <li>✅ Kargo ve kurye hizmetleri</li>
                <li>✅ Lojistik maliyetleri</li>
                <li>✅ Depo ve ambar planlaması</li>
              </ul>
            </CardContent>
          </Card>
        </article>

        {/* Cargo Companies Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Kargo Firmaları Desi Hesaplama 2025
            </h2>
            <p className="text-gray-600">
              Farklı kargo firmaları için detaylı desi hesaplama ve güncel fiyat bilgileri
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kargofirmalari.map((firma, index) => (
              <Link
                key={index}
                to={firma.url}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <Card className="h-full group-hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{firma.icon}</div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {firma.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Desi hesaplama ve güncel fiyatlar
                    </p>
                    <div className="flex items-center justify-center text-primary group-hover:translate-x-1 transition-transform">
                      <span className="text-sm font-medium">Detaylı Bilgi</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Pricing Table */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-6 h-6" />
                2025 Güncel Kargo Desi Fiyatları
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-2 text-left">Kargo Firması</th>
                      <th className="border border-gray-200 px-4 py-2 text-center">1 Desi (TL)</th>
                      <th className="border border-gray-200 px-4 py-2 text-center">Minimum Ücret</th>
                      <th className="border border-gray-200 px-4 py-2 text-center">Teslimat Süresi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2 font-medium">PTT Kargo</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">12-15 TL</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">25 TL</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">2-3 gün</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2 font-medium">Aras Kargo</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">15-18 TL</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">30 TL</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">1-2 gün</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2 font-medium">MNG Kargo</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">14-17 TL</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">28 TL</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">1-2 gün</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2 font-medium">Yurtiçi Kargo</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">16-19 TL</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">32 TL</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">1-2 gün</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2 font-medium">Sürat Kargo</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">17-20 TL</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">35 TL</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">1 gün</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                * Fiyatlar 2025 yılı tahmini değerleridir ve değişiklik gösterebilir.
                Kesin fiyat bilgisi için kargo firmalarına başvurunuz.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Formula Link */}
        <section className="mb-16">
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-4">Desi Hesaplama Formülü Detayları</h2>
                <p className="text-gray-600 mb-4">
                  Desi hesaplama formülü, örnekler ve farklı hesaplama yöntemleri hakkında 
                  detaylı bilgi almak için:
                </p>
                <Link
                  to="/desi-hesaplama/desi-hesaplama-formulu"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Calculator className="w-5 h-5" />
                  Desi Hesaplama Formülü Detayları
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Sıkça Sorulan Sorular
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

        {/* Important Note */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-center">
          <h3 className="font-semibold text-amber-800 mb-2">⚠️ Önemli Bilgilendirme</h3>
          <p className="text-amber-700">
            Bu hesaplama aracı tahmini sonuçlar sunar. Kesin desi hesaplama ve güncel fiyatlar için 
            ilgili kargo firmasıyla iletişime geçmenizi öneririz. Fiyatlar 2025 yılı tahminleri olup 
            değişiklik gösterebilir.
          </p>
        </div>
      </div>
    </>
  );
};

export default DesiHesaplama;