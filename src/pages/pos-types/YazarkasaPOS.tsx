import { Helmet } from "react-helmet";
import { Terminal, ShieldCheck, Receipt, CreditCard, Banknote, Clock, Shield, Zap, ChartBar, DollarSign, Users, Award, ShoppingCart } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import FAQ from "@/components/FAQ";
import LatestBlogPosts from "@/components/pos/LatestBlogPosts";

const YazarkasaPOS = () => {
  return <>
      <Helmet>
        <title>Yazar Kasa POS Cihazı | Yeni Nesil Yazarkasa POS 2025</title>
        <meta name="description" content="Yazar kasa POS cihazları, ÖKC entegreli POS sistemleri ve komisyon oranları hakkında detaylı bilgi alın. 2025 yılı güncel fiyatlar ve özellikler." />
        <meta name="keywords" content="yazar kasa pos, ökc pos, yeni nesil yazar kasa, entegre pos cihazı, yazarkasa pos fiyatları, 2025 pos cihazları" />
        <link rel="canonical" href="https://poskomisyon.com/pos-types/yazarkasa" />
      </Helmet>
      
      <div>
        <POSTypePage 
          title="Yazar Kasa POS Cihazı | Yeni Nesil Yazarkasa POS 2025" 
          description="En son teknoloji yazar kasa POS cihazlarını karşılaştırın, size en uygun ÖKC POS çözümünü bulun." 
          posType="Yazar Kasa (ÖKC) POS" 
          Icon={Terminal} 
          whatIsContent="" 
          advantages={[]} 
        />

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 py-12">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <ChartBar className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Detaylı Raporlama</h3>
              <p className="text-gray-600">Günlük, haftalık ve aylık satış raporları ile işletmenizi daha iyi yönetin.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <DollarSign className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Uygun Komisyon</h3>
              <p className="text-gray-600">Rekabetçi komisyon oranları ile karlılığınızı artırın.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">7/24 Destek</h3>
              <p className="text-gray-600">Teknik destek ekibimiz her an yanınızda.</p>
            </div>
          </div>

          <div className="bg-primary/5 rounded-2xl p-8 my-12">
            <h2 className="text-2xl font-bold text-center mb-8">Rakamlarla Yazar Kasa POS</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl text-center">
                <Award className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                <div className="text-gray-600">Aktif Kullanıcı</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center">
                <ShoppingCart className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-2">1M+</div>
                <div className="text-gray-600">İşlem Hacmi</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center">
                <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-2">%99.9</div>
                <div className="text-gray-600">Başarı Oranı</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center">
                <CreditCard className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-gray-600">Banka Desteği</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Neden Bizi Tercih Etmelisiniz?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Güvenli Altyapı</h4>
                    <p className="text-gray-600">En son güvenlik standartları ile korunan işlemler</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Hızlı Kurulum</h4>
                    <p className="text-gray-600">Aynı gün kurulum ve kullanıma başlama imkanı</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Receipt className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Otomatik Raporlama</h4>
                    <p className="text-gray-600">Detaylı satış ve analiz raporları</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Nasıl Başvururum?</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">1</div>
                  <p>Formu doldurun</p>
                </div>
                <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">2</div>
                  <p>Belgelerinizi hazırlayın</p>
                </div>
                <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">3</div>
                  <p>Kurulumu tamamlayın</p>
                </div>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl font-bold mb-6">Yazar Kasa (ÖKC) POS Komisyon Oranları - 2025</h2>
            
            <h3 className="text-2xl font-semibold mb-4">Yazar Kasa POS Nedir?</h3>
            <p className="text-gray-600 mb-6">
              Yazar kasa POS cihazları, satış işlemlerini ve mali kayıtları tek bir cihaz üzerinden yönetmenizi sağlayan entegre sistemlerdir. 
              Özellikle perakende sektöründe yaygın olarak kullanılan bu cihazlar, yasal gereklilikleri karşılarken modern ödeme çözümlerini de sunar.
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
                    <td className="border border-gray-300 px-4 py-2">Peşin</td>
                    <td className="border border-gray-300 px-4 py-2">%0,45 - %1,95</td>
                    <td className="border border-gray-300 px-4 py-2">En düşük komisyonlu seçenek</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">3 Taksit</td>
                    <td className="border border-gray-300 px-4 py-2">%1,75 - %3,25</td>
                    <td className="border border-gray-300 px-4 py-2">Orta vadeli taksit seçeneği</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">6 Taksit</td>
                    <td className="border border-gray-300 px-4 py-2">%2,95 - %4,45</td>
                    <td className="border border-gray-300 px-4 py-2">Yaygın tercih edilen taksit seçeneği</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">9 Taksit</td>
                    <td className="border border-gray-300 px-4 py-2">%3,95 - %5,45</td>
                    <td className="border border-gray-300 px-4 py-2">Uzun vadeli ödeme seçeneği</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Kurulum ve Entegrasyon</h3>
            <p className="text-gray-600 mb-6">
              Yazar kasa POS kurulumu için izlemeniz gereken adımlar:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Gerekli belgelerin hazırlanması ve başvuru</li>
              <li>Mali mühür ve sertifika işlemleri</li>
              <li>Cihaz kurulumu ve aktivasyonu</li>
              <li>Personel eğitimi ve kullanım talimatları</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Yasal Gereklilikler</h3>
            <p className="text-gray-600 mb-6">
              Yeni nesil ÖKC (Ödeme Kaydedici Cihaz) kullanımı yasal bir zorunluluktur. 
              Bu cihazlar GİB (Gelir İdaresi Başkanlığı) ile entegre çalışır ve günlük Z raporlarını otomatik olarak iletir.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Bakım ve Destek</h3>
            <p className="text-gray-600 mb-6">
              Yazar kasa POS cihazları için düzenli bakım ve teknik destek hizmetleri sunulmaktadır:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>7/24 teknik destek hizmeti</li>
              <li>Periyodik bakım ve güncelleme</li>
              <li>Arıza durumunda yerinde servis</li>
              <li>Yazılım güncellemeleri ve yeni özellik desteği</li>
            </ul>
          </div>

          <FAQ />
          <LatestBlogPosts />
        </div>
      </div>
    </>;
};
export default YazarkasaPOS;
