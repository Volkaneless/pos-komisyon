import { Helmet } from "react-helmet";
import { Terminal, ShieldCheck, Receipt, CreditCard, Banknote, Clock, Shield, Zap } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import FAQ from "@/components/FAQ";
import LatestBlogPosts from "@/components/pos/LatestBlogPosts";

const YazarkasaPOS = () => {
  return (
    <>
      <Helmet>
        <title>Yazar Kasa POS Cihazı | Yeni Nesil Yazarkasa POS 2025</title>
        <meta 
          name="description" 
          content="Yazar kasa POS cihazları, ÖKC entegreli POS sistemleri ve komisyon oranları hakkında detaylı bilgi alın. 2025 yılı güncel fiyatlar ve özellikler." 
        />
        <meta 
          name="keywords" 
          content="yazar kasa pos, ökc pos, yeni nesil yazar kasa, entegre pos cihazı, yazarkasa pos fiyatları, 2025 pos cihazları" 
        />
        <link rel="canonical" href="https://poskomisyon.com/pos-types/yazarkasa" />
      </Helmet>
      
      <div>
        <POSTypePage
          title="Yazar Kasa POS Cihazı | Yeni Nesil Yazarkasa POS 2025"
          description="En son teknoloji yazar kasa POS cihazlarını karşılaştırın, size en uygun ÖKC POS çözümünü bulun."
          type="Yazar Kasa (ÖKC) POS"
          Icon={Terminal}
          whatIsContent=""
          advantages={[]}
        />

        <div className="container mx-auto px-4">
          {/* Ana Özellikler */}
          <div className="grid md:grid-cols-4 gap-6 py-12">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <ShieldCheck className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Güvenli İşlemler</h3>
              <p className="text-gray-600">En son güvenlik standartlarıyla korunan işlemler</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Receipt className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Otomatik Raporlama</h3>
              <p className="text-gray-600">Detaylı satış ve analiz raporları</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <CreditCard className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Çoklu Ödeme</h3>
              <p className="text-gray-600">Tüm kartlarla ödeme imkanı</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hızlı İşlem</h3>
              <p className="text-gray-600">Saniyeler içinde ödeme alma</p>
            </div>
          </div>

          {/* İstatistikler */}
          <div className="bg-primary/5 rounded-lg p-8 my-12">
            <h2 className="text-2xl font-bold text-center mb-8">Yazar Kasa POS İstatistikleri</h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="p-4 bg-white rounded-lg shadow">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600">Aktif Kullanıcı</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <div className="text-3xl font-bold text-primary mb-2">%99.9</div>
                <div className="text-gray-600">Çalışma Süresi</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <div className="text-3xl font-bold text-primary mb-2">7/24</div>
                <div className="text-gray-600">Teknik Destek</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-gray-600">Banka Entegrasyonu</div>
              </div>
            </div>
          </div>

          {/* Ek Özellikler */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Banknote className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Uygun Komisyon</h3>
              <p className="text-gray-600">Rekabetçi komisyon oranları ve avantajlı paketler</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Clock className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Hızlı Kurulum</h3>
              <p className="text-gray-600">Aynı gün kurulum ve kullanıma başlama imkanı</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Shield className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Güvenli Altyapı</h3>
              <p className="text-gray-600">SSL sertifikalı güvenli ödeme altyapısı</p>
            </div>
          </div>

          <FAQ />
          <LatestBlogPosts />
        </div>
      </div>
    </>
  );
};

export default YazarkasaPOS;