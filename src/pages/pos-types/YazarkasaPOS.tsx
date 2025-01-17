import { Helmet } from "react-helmet";
import { Terminal, ShieldCheck, Receipt, CreditCard } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import FAQ from "@/components/FAQ";
import LatestBlogPosts from "@/components/pos/LatestBlogPosts";

const YazarkasaPOS = () => {
  return (
    <>
      <Helmet>
        <title>Yazar Kasa POS Cihazları ve Komisyonları 2024</title>
        <meta 
          name="description" 
          content="Yazar kasa POS cihazları, ÖKC entegreli POS sistemleri ve komisyon oranları hakkında detaylı bilgi alın." 
        />
        <meta 
          name="keywords" 
          content="yazar kasa pos, ökc pos, yeni nesil yazar kasa, entegre pos cihazı, yazarkasa pos fiyatları" 
        />
        <link rel="canonical" href="https://poskomisyon.com/pos-types/yazarkasa" />
      </Helmet>
      
      <div>
        <POSTypePage
          title="Yazar Kasa POS Cihazları ve Komisyonları 2024"
          description="Yazar kasa POS cihazlarını karşılaştırın, size en uygun ÖKC POS çözümünü bulun."
          type="Yazar Kasa (ÖKC) POS"
          Icon={Terminal}
          whatIsContent=""
          advantages={[]}
        />

        <div className="container mx-auto px-4">
          {/* Özellikler Bölümü */}
          <div className="grid md:grid-cols-3 gap-8 py-12">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
              <ShieldCheck className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Güvenli İşlemler</h3>
              <p className="text-gray-600">En son güvenlik standartlarıyla korunan işlemler ve ödemeler</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
              <Receipt className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Otomatik Raporlama</h3>
              <p className="text-gray-600">Günlük, haftalık ve aylık detaylı satış raporları</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
              <CreditCard className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Çoklu Ödeme</h3>
              <p className="text-gray-600">Tüm kredi kartları ve banka kartları ile ödeme imkanı</p>
            </div>
          </div>

          {/* İstatistikler Bölümü */}
          <div className="bg-primary/5 rounded-lg p-8 my-12">
            <h2 className="text-2xl font-bold text-center mb-8">Yazar Kasa POS İstatistikleri</h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600">Aktif Kullanıcı</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">%99.9</div>
                <div className="text-gray-600">Çalışma Süresi</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">7/24</div>
                <div className="text-gray-600">Teknik Destek</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-gray-600">Banka Entegrasyonu</div>
              </div>
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