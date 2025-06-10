
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SanalPOSContent = () => {
  return (
    <>
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
    </>
  );
};

export default SanalPOSContent;
