
import { Terminal, Cloud, MessageSquare, BookOpen, CreditCard, ShieldCheck, Globe } from "lucide-react";
import { Helmet } from "react-helmet";
import POSTypePage from "@/components/pos-types/POSTypePage";
import FAQ from "@/components/FAQ";
import LatestBlogPosts from "@/components/pos/LatestBlogPosts";
import { sanalPOSProviders } from "@/data/pos-types/sanalPOS";
import CanonicalLink from "@/components/CanonicalLink";

const SanalPOS = () => {
  return <>
      <Helmet>
        <title>Sanal POS Komisyon Oranları 2025 - En Uygun Sanal POS</title>
        <meta name="description" content="2025 yılı güncel sanal POS komisyon oranları, karşılaştırma ve hesaplama araçları. E-ticaret işletmeniz için en uygun sanal POS çözümünü bulun." />
        <meta name="keywords" content="sanal pos komisyon oranları 2025, sanal pos başvuru, e-ticaret pos, online ödeme sistemleri" />
        <meta property="og:title" content="Sanal POS Komisyon Oranları 2025 - En Uygun Sanal POS" />
        <meta property="og:description" content="2025 yılı güncel sanal POS komisyon oranları ve karşılaştırma araçları. E-ticaret işletmeniz için en uygun sanal POS çözümünü bulun." />
      </Helmet>

      {/* Add correct canonical link */}
      <CanonicalLink path="/pos-types/sanal" />

      <POSTypePage title="Sanal POS Komisyon Oranları 2025 - En Uygun Sanal POS" description="E-ticaret ve online ödemeler için en uygun sanal POS çözümleri ve komisyon oranları" type="Sanal POS" Icon={Cloud} whatIsContent="Sanal POS, internet üzerinden yapılan ödemeleri güvenli bir şekilde almanızı sağlayan modern bir ödeme sistemidir. E-ticaret siteleri, online rezervasyon sistemleri ve dijital hizmetler için vazgeçilmez bir çözümdür. Gelişmiş güvenlik özellikleri ve kolay entegrasyon seçenekleriyle işletmenizin online satışlarını güvenle yönetmenizi sağlar." advantages={["7/24 kesintisiz hizmet ve teknik destek", "Rekabetçi komisyon oranları", "Hızlı ve kolay entegrasyon", "SSL güvenlik sertifikası", "Geniş banka ve kart desteği", "Detaylı satış ve işlem raporlaması", "Mobil uyumlu altyapı", "Çoklu dil ve para birimi desteği"]} />

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

        <div className="prose prose-lg max-w-4xl mx-auto mt-16">
          <h2 className="text-3xl font-bold mb-6">Sanal POS Komisyon Oranları</h2>
          
          <h3 className="text-2xl font-semibold mb-4">Sanal POS Nedir?</h3>
          <p className="text-gray-600 mb-6">
            Sanal POS, internet üzerinden yapılan ödemeleri güvenli bir şekilde almanızı sağlayan modern bir ödeme sistemidir. 
            E-ticaret siteleri, online rezervasyon sistemleri ve dijital hizmetler için vazgeçilmez bir çözümdür.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Komisyon Oranları</h3>
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
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Entegrasyon Süreci</h3>
          <p className="text-gray-600 mb-6">
            Sanal POS entegrasyonu genellikle şu adımları içerir:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Başvuru ve gerekli belgelerin hazırlanması</li>
            <li>Teknik entegrasyon ve test süreçleri</li>
            <li>Güvenlik kontrollerinin tamamlanması</li>
            <li>Canlı ortama geçiş</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Güvenlik Önlemleri</h3>
          <p className="text-gray-600 mb-6">
            Sanal POS sistemleri, SSL şifreleme, 3D Secure ve tokenizasyon gibi ileri düzey güvenlik önlemleri kullanır.
            Bu sayede müşterilerinizin ödeme bilgileri güvende kalır.
          </p>
        </div>

        <FAQ />
        <LatestBlogPosts />
      </div>
    </>;
};
export default SanalPOS;
