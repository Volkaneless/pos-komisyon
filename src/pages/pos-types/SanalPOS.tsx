import { Terminal, Cloud, MessageSquare, BookOpen } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import FAQ from "@/components/FAQ";
import LatestBlogPosts from "@/components/pos/LatestBlogPosts";
import { sanalPOSProviders } from "@/data/pos-types/sanalPOS";

const SanalPOS = () => {
  return (
    <>
      <POSTypePage
        title="Sanal POS Komisyon Oranları 2024"
        description="E-ticaret ve online ödemeler için sanal POS çözümleri"
        type="Sanal POS"
        Icon={Cloud}
        whatIsContent="Sanal POS, internet üzerinden yapılan ödemeleri güvenli bir şekilde almanızı sağlayan bir ödeme sistemidir. E-ticaret sitelerinde, online rezervasyon sistemlerinde ve dijital hizmetlerde kullanılır."
        advantages={[
          "7/24 kesintisiz hizmet",
          "Düşük işletme maliyeti",
          "Kolay entegrasyon",
          "Güvenli ödeme altyapısı",
          "Geniş kart desteği",
          "Detaylı raporlama"
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
              <Cloud className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Hızlı Entegrasyon</h3>
            <p className="text-gray-600">
              Sanal POS sistemimiz tüm e-ticaret platformları ile uyumlu çalışır ve hızlı entegrasyon sağlar.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">7/24 Destek</h3>
            <p className="text-gray-600">
              Teknik ekibimiz 7/24 yanınızda. İhtiyaç duyduğunuz her an destek alabilirsiniz.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Detaylı Raporlama</h3>
            <p className="text-gray-600">
              Gelişmiş raporlama araçlarıyla işlemlerinizi detaylı analiz edin ve işletmenizi daha iyi yönetin.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Neden Sanal POS?</h2>
            <p className="text-gray-600">
              E-ticaret siteniz için en uygun sanal POS çözümünü sunuyoruz. Güvenli, hızlı ve ekonomik.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Aktif Müşteri</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">%99.9</div>
              <div className="text-gray-600">Uptime Garantisi</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-gray-600">Entegrasyon Seçeneği</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">%0.59</div>
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

export default SanalPOS;