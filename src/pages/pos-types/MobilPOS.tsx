import { Helmet } from "react-helmet";
import { Smartphone, CreditCard, ShieldCheck, Globe } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import FAQ from "@/components/FAQ";
import LatestBlogPosts from "@/components/pos/LatestBlogPosts";

const MobilPOS = () => {
  return (
    <>
      <Helmet>
        <title>Mobil POS Komisyon Oranları 2025 - Mobil POS Ücretleri</title>
        <meta 
          name="description" 
          content="2025 yılı güncel mobil POS komisyon oranları, karşılaştırma ve hesaplama araçları. İşletmeniz için en uygun mobil POS çözümünü bulun." 
        />
        <meta 
          name="keywords" 
          content="mobil pos komisyon oranları 2025, mobil pos başvuru, mobil ödeme sistemleri, taşınabilir pos cihazları" 
        />
        <meta 
          property="og:title" 
          content="Mobil POS Komisyon Oranları 2025 - Mobil POS Ücretleri" 
        />
        <meta 
          property="og:description" 
          content="2025 yılı güncel mobil POS komisyon oranları ve karşılaştırma araçları. İşletmeniz için en uygun mobil POS çözümünü bulun." 
        />
        <link rel="canonical" href="https://poskomisyon.com/pos-types/mobil" />
      </Helmet>

      <POSTypePage
        title="Mobil POS Komisyon Oranları 2025 - Mobil POS Ücretleri"
        description="Mobil ve taşınabilir POS çözümleri için en uygun komisyon oranları ve karşılaştırmalar"
        type="Mobil (Taşınabilir) POS"
        Icon={Smartphone}
        whatIsContent="Mobil POS cihazları, işletmelerin hareket halindeyken ödeme almalarını sağlayan taşınabilir cihazlardır. Bu cihazlar, kablosuz internet veya mobil veri bağlantısı üzerinden çalışır ve kredi kartı ödemelerini güvenli bir şekilde işler."
        advantages={[
          "Hareket halindeyken ödeme alma imkanı",
          "Kolay taşınabilirlik",
          "Düşük maliyetli çözüm",
          "Hızlı kurulum ve kullanım",
          "Tüm kredi kartlarıyla uyumluluk",
          "7/24 teknik destek",
          "Detaylı satış raporlaması",
          "Güvenli işlem altyapısı"
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
              <CreditCard className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Kolay Kullanım</h3>
            <p className="text-gray-600">
              Basit arayüz ve hızlı işlem yapabilme özelliği ile kullanıcı dostu deneyim.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Güvenli Altyapı</h3>
            <p className="text-gray-600">
              SSL şifreleme ve güvenlik standartlarına uygun mobil ödeme altyapısı.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Her Yerde Kullanım</h3>
            <p className="text-gray-600">
              İnternet bağlantısı olan her yerde kesintisiz ödeme alma imkanı.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Neden Mobil POS?</h2>
            <p className="text-gray-600">
              İşletmeniz için en uygun mobil POS çözümünü sunuyoruz. Güvenli, hızlı ve ekonomik.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Aktif Mobil POS Kullanıcısı</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">%99.9</div>
              <div className="text-gray-600">Kesintisiz Hizmet</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-gray-600">Mobil POS Seçeneği</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">%1.99</div>
              <div className="text-gray-600">Komisyon Oranından Başlayan</div>
            </div>
          </div>
        </div>

        <FAQ />
        <LatestBlogPosts />
      </div>
    </>
  );
};

export default MobilPOS;