import { Cloud, CreditCard, ShieldCheck, Globe, Clock, LineChart, Smartphone, AlertTriangle } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import FAQ from "@/components/FAQ";
import LatestBlogPosts from "@/components/pos/LatestBlogPosts";
import MetaTags from "@/components/MetaTags";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const SanalPOS = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Sanal POS nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sanal POS, internet üzerinden yapılan ödemeleri güvenli bir şekilde almanızı sağlayan modern bir ödeme sistemidir. E-ticaret siteleri, online rezervasyon sistemleri ve dijital hizmetler için vazgeçilmez bir çözümdür."
      }
    }, {
      "@type": "Question",
      "name": "Sanal POS komisyon oranları ne kadardır?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sanal POS komisyon oranları işlem tipine göre değişir. Tek çekim işlemlerde %0,59 - %2,70 arasında, 3 taksitli işlemlerde %1,50 - %3,50 arasında, 6 taksitli işlemlerde ise %2,50 - %4,50 arasında ücretlendirme yapılmaktadır."
      }
    }, {
      "@type": "Question",
      "name": "Sanal POS entegrasyonu ne kadar sürer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sanal POS entegrasyonu genellikle başvuru ve gerekli belgelerin hazırlanması, teknik entegrasyon ve test süreçleri, güvenlik kontrollerinin tamamlanması ve canlı ortama geçiş adımlarını içerir. Bu süreç seçilen sağlayıcıya bağlı olarak 1-7 iş günü arasında tamamlanabilir."
      }
    }]
  };
  return <>
      <MetaTags title="Sanal POS Komisyon Oranları 2025 - En Uygun Sanal POS" description="2025 yılı güncel sanal POS komisyon oranları, karşılaştırma ve hesaplama araçları. E-ticaret işletmeniz için en uygun sanal POS çözümünü bulun." keywords="sanal pos komisyon oranları 2025, sanal pos başvuru, e-ticaret pos, online ödeme sistemleri, sanal pos entegrasyonu, e-ticaret ödeme çözümleri" canonicalPath="/pos-types/sanal" priority={20} structuredData={structuredData} />

      <section className="bg-gradient-to-b from-primary-50 to-white pt-28 pb-16 px-4 py-[3px]">
        <div className="container mx-auto max-w-6xl">
          <div className="">
            
            <div className="order-1 md:order-2 flex justify-center">
              
            </div>
          </div>
        </div>
      </section>

      <POSTypePage title="Sanal POS Komisyon Oranları 2025" description="E-ticaret ve online ödemeler için en uygun sanal POS çözümleri ve komisyon oranları" type="Sanal POS" Icon={Cloud} whatIsContent={<div className="prose prose-lg max-w-none mb-8">
            <h2 className="text-3xl font-bold mb-6" id="what-is">Sanal POS Nedir?</h2>
            <p>
              Sanal POS, internet üzerinden yapılan ödemeleri güvenli bir şekilde almanızı sağlayan modern bir ödeme sistemidir. 
              E-ticaret siteleri, online rezervasyon sistemleri ve dijital hizmetler için vazgeçilmez bir çözümdür. 
              Gelişmiş güvenlik özellikleri ve kolay entegrasyon seçenekleriyle işletmenizin online satışlarını güvenle yönetmenizi sağlar.
            </p>
            <p>
              Sanal POS sistemleri, fiziksel bir POS cihazına ihtiyaç duymadan, tamamen online ortamda çalışır. 
              Bu sayede dünyanın her yerinden 7/24 ödeme kabul edebilir, işlemlerinizi anında görüntüleyebilir 
              ve müşterilerinize güvenli bir alışveriş deneyimi sunabilirsiniz.
            </p>
          </div>} advantages={["7/24 kesintisiz hizmet ve teknik destek", "Rekabetçi komisyon oranları", "Hızlı ve kolay entegrasyon", "SSL güvenlik sertifikası", "Geniş banka ve kart desteği", "Detaylı satış ve işlem raporlaması", "Mobil uyumlu altyapı", "Çoklu dil ve para birimi desteği"]} />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
              <CreditCard className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Kolay Entegrasyon</h3>
            <p className="text-gray-600">
              Tüm e-ticaret platformları ile uyumlu API ve hazır modüllerle hızlı entegrasyon imkanı.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Güvenli Altyapı</h3>
            <p className="text-gray-600">
              PCI DSS uyumlu altyapı ve SSL sertifikası ile güvenli ödeme işlemleri.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Global Çözümler</h3>
            <p className="text-gray-600">
              Çoklu dil ve para birimi desteği ile global pazarlarda satış yapabilme imkanı.
            </p>
          </div>
        </div>

        <section className="mb-16" id="comparison">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sanal POS Karşılaştırma 2025</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Piyasadaki en popüler sanal POS çözümlerini karşılaştırın ve işletmeniz için en uygun seçeneği bulun.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-4 px-6 text-left font-semibold text-gray-700">Sanal POS Sağlayıcı</th>
                    <th className="py-4 px-6 text-center font-semibold text-gray-700">Tek Çekim Komisyon</th>
                    <th className="py-4 px-6 text-center font-semibold text-gray-700">Aylık Ücret</th>
                    <th className="py-4 px-6 text-center font-semibold text-gray-700">Kurulum Süresi</th>
                    <th className="py-4 px-6 text-center font-semibold text-gray-700">Detaylar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 flex items-center">
                      <img src="/logos/iyzico.webp" alt="iyzico Logo" className="w-8 h-8 mr-3" />
                      <span>iyzico Sanal POS</span>
                    </td>
                    <td className="py-4 px-6 text-center">%1.95</td>
                    <td className="py-4 px-6 text-center">0 TL</td>
                    <td className="py-4 px-6 text-center">1-3 gün</td>
                    <td className="py-4 px-6 text-center">
                      <Link to="/pos/iyzico-sanal-pos">
                        <Button variant="outline" size="sm">İncele</Button>
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 flex items-center">
                      <img src="/logos/paytr.webp" alt="PayTR Logo" className="w-8 h-8 mr-3" />
                      <span>PayTR Sanal POS</span>
                    </td>
                    <td className="py-4 px-6 text-center">%0.59</td>
                    <td className="py-4 px-6 text-center">0 TL</td>
                    <td className="py-4 px-6 text-center">1-2 gün</td>
                    <td className="py-4 px-6 text-center">
                      <Link to="/pos/paytr-sanal">
                        <Button variant="outline" size="sm">İncele</Button>
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 flex items-center">
                      <img src="/logos/param.webp" alt="Param Logo" className="w-8 h-8 mr-3" />
                      <span>Param Sanal POS</span>
                    </td>
                    <td className="py-4 px-6 text-center">%1.89</td>
                    <td className="py-4 px-6 text-center">0 TL</td>
                    <td className="py-4 px-6 text-center">2-4 gün</td>
                    <td className="py-4 px-6 text-center">
                      <Link to="/pos/param-sanal">
                        <Button variant="outline" size="sm">İncele</Button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <div className="mb-16">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Neden Sanal POS?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              E-ticaret işletmeniz için en uygun sanal POS çözümünü sunuyoruz. Güvenli, hızlı ve ekonomik çözümlerle işletmenizin büyümesine katkı sağlıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-gray-600">Aktif E-ticaret Müşterisi</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">%99.9</div>
              <div className="text-gray-600">Uptime Garantisi</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-gray-600">Entegrasyon Seçeneği</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">%0.59</div>
              <div className="text-gray-600">Komisyon Oranından Başlayan</div>
            </div>
          </div>
        </div>

        <section className="mb-16">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Sanal POS Özellikleri</h2>
          </div>

          <Tabs defaultValue="features" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="features">Temel Özellikler</TabsTrigger>
              <TabsTrigger value="security">Güvenlik</TabsTrigger>
              <TabsTrigger value="integration">Entegrasyon</TabsTrigger>
            </TabsList>
            <TabsContent value="features" className="bg-white p-6 rounded-xl shadow">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mr-4 shrink-0">
                    <CreditCard className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Çoklu Kart Desteği</h4>
                    <p className="text-gray-600">Tüm yerel ve uluslararası kartları destekleyen ödeme altyapısı</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mr-4 shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">7/24 Ödeme Alma</h4>
                    <p className="text-gray-600">Kesintisiz ödeme kabul etme imkanı ile satışlarınızı artırın</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mr-4 shrink-0">
                    <LineChart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Detaylı Raporlama</h4>
                    <p className="text-gray-600">İşlem bazlı detaylı raporlar ve analitik veriler</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mr-4 shrink-0">
                    <Smartphone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Mobil Uyumluluk</h4>
                    <p className="text-gray-600">Tüm mobil cihazlarda sorunsuz çalışan ödeme sayfaları</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="security" className="bg-white p-6 rounded-xl shadow">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mr-4 shrink-0">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">PCI DSS Uyumlu</h4>
                    <p className="text-gray-600">En yüksek güvenlik standartlarına uygun ödeme altyapısı</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mr-4 shrink-0">
                    <AlertTriangle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Fraud Koruması</h4>
                    <p className="text-gray-600">Gelişmiş dolandırıcılık önleme sistemleri ile güvenli ödeme</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mr-4 shrink-0">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">3D Secure</h4>
                    <p className="text-gray-600">Ekstra güvenlik katmanı ile korunan ödeme işlemleri</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mr-4 shrink-0">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">SSL Şifreleme</h4>
                    <p className="text-gray-600">256-bit SSL şifreleme ile güvenli veri transferi</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="integration" className="bg-white p-6 rounded-xl shadow">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mr-4 shrink-0">
                    <CreditCard className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">REST API</h4>
                    <p className="text-gray-600">Kolay entegre edilebilen modern REST API desteği</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mr-4 shrink-0">
                    <CreditCard className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Hazır Modüller</h4>
                    <p className="text-gray-600">Popüler e-ticaret platformları için hazır eklentiler</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mr-4 shrink-0">
                    <CreditCard className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Webhook Desteği</h4>
                    <p className="text-gray-600">Gerçek zamanlı bildirimler için webhook entegrasyonu</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mr-4 shrink-0">
                    <CreditCard className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">SDK Paketleri</h4>
                    <p className="text-gray-600">Popüler programlama dilleri için SDK desteği</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <div className="prose prose-lg max-w-4xl mx-auto mt-16">
          <h2 className="text-3xl font-bold mb-6" id="sanal-pos-komisyon">Sanal POS Komisyon Oranları</h2>
          
          <h3 className="text-2xl font-semibold mb-4" id="sanal-pos-nedir">Sanal POS Nedir?</h3>
          <p className="text-gray-600 mb-6">
            Sanal POS, internet üzerinden yapılan ödemeleri güvenli bir şekilde almanızı sağlayan modern bir ödeme sistemidir. 
            E-ticaret siteleri, online rezervasyon sistemleri ve dijital hizmetler için vazgeçilmez bir çözümdür.
          </p>

          <h3 className="text-2xl font-semibold mb-4" id="sanal-pos-komisyon-2025">Sanal POS Komisyon Oranları - 2025</h3>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">İşlem Tipi</th>
                  <th className="border border-gray-300 px-4 py-2">Komisyon Oranı</th>
                  <th className="border border-gray-300 px-4 py-2">Açıklama</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Tek Çekim</td>
                  <td className="border border-gray-300 px-4 py-2">%0,59 - %2,70</td>
                  <td className="border border-gray-300 px-4 py-2">En düşük komisyon oranlı seçenek</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">3 Taksit</td>
                  <td className="border border-gray-300 px-4 py-2">%1,50 - %3,50</td>
                  <td className="border border-gray-300 px-4 py-2">Orta vadeli taksit seçeneği</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">6 Taksit</td>
                  <td className="border border-gray-300 px-4 py-2">%2,50 - %4,50</td>
                  <td className="border border-gray-300 px-4 py-2">Yaygın tercih edilen taksit seçeneği</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">9 Taksit</td>
                  <td className="border border-gray-300 px-4 py-2">%3,50 - %5,50</td>
                  <td className="border border-gray-300 px-4 py-2">Uzun vadeli taksit seçeneği</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">12 Taksit</td>
                  <td className="border border-gray-300 px-4 py-2">%4,50 - %6,50</td>
                  <td className="border border-gray-300 px-4 py-2">En uzun vadeli taksit seçeneği</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold mb-4" id="entegrasyon-sureci">Entegrasyon Süreci</h3>
          <p className="text-gray-600 mb-6">
            Sanal POS entegrasyonu genellikle şu adımları içerir:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Başvuru ve gerekli belgelerin hazırlanması</li>
            <li>Teknik entegrasyon ve test süreçleri</li>
            <li>Güvenlik kontrollerinin tamamlanması</li>
            <li>Canlı ortama geçiş</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4" id="guvenlik-onlemleri">Güvenlik Önlemleri</h3>
          <p className="text-gray-600 mb-6">
            Sanal POS sistemleri, SSL şifreleme, 3D Secure ve tokenizasyon gibi ileri düzey güvenlik önlemleri kullanır.
            Bu sayede müşterilerinizin ödeme bilgileri güvende kalır.
          </p>
          
          <h3 className="text-2xl font-semibold mb-4" id="sanal-pos-secimi">Sanal POS Seçerken Dikkat Edilmesi Gerekenler</h3>
          <p className="text-gray-600 mb-4">
            İşletmeniz için en uygun sanal POS çözümünü seçerken şu kriterlere dikkat etmelisiniz:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Komisyon oranları ve ek maliyetler</li>
            <li>Entegrasyon kolaylığı ve teknik destek</li>
            <li>Güvenlik sertifikaları ve standartları</li>
            <li>Taksit seçenekleri ve banka desteği</li>
            <li>İade ve chargeback süreçleri</li>
            <li>Raporlama ve analiz özellikleri</li>
          </ul>
        </div>

        <div className="mt-16 bg-primary/5 rounded-xl p-8 shadow-sm">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Sanal POS Komisyon Hesaplama</h3>
              <p className="text-gray-700 mb-6">
                İşletmenizin ihtiyaçlarına göre en uygun sanal POS çözümünü bulmak ve komisyon maliyetlerinizi hesaplamak için komisyon hesaplama aracımızı kullanın.
              </p>
              <Link to="/calculator">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Komisyon Hesaplayıcı
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <img src="/lovable-uploads/1d959b09-78d0-4578-a645-d0efb2a0908b.png" alt="Komisyon Hesaplama" className="w-full h-auto rounded-lg shadow-md" />
            </div>
          </div>
        </div>

        <FAQ />
        <LatestBlogPosts />
      </div>
    </>;
};
export default SanalPOS;