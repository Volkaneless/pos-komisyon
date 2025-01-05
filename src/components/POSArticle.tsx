import { useState } from "react";
import { Button } from "./ui/button";

const POSArticle = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">En Uygun POS Komisyon Oranları - 2025</h2>
      
      <div className="prose prose-lg mx-auto">
        <p className="mb-4">
          POS cihazları, işletmelerin kredi kartı ve banka kartı ödemelerini kabul etmelerini sağlar. Ancak, bu hizmet karşılığında bankalar belirli bir komisyon oranı talep eder. Bu oranlar, işlem hacmine, sektöre ve bankaya göre değişiklik gösterebilir.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">POS Komisyon Oranları Nedir ve Neden Önemlidir?</h3>
        <p className="mb-4">
          POS (Point of Sale) cihazları, işletmelerin kartlı ödeme almasını sağlayan sistemlerdir. Ancak bu hizmet karşılığında, bankalar veya POS cihazı sağlayıcıları belirli bir komisyon oranı talep eder. Doğru POS sistemini seçmek, işletme maliyetlerini azaltmak açısından kritik bir öneme sahiptir.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">2025 Güncel POS Komisyon Oranları Tablosu</h3>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">POS Adı</th>
                <th className="border border-gray-300 px-4 py-2">POS Türü</th>
                <th className="border border-gray-300 px-4 py-2">Aidat Ücreti</th>
                <th className="border border-gray-300 px-4 py-2">Komisyon Oranı</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">CEPTETEB İşte POS</td>
                <td className="border border-gray-300 px-4 py-2">Yazar Kasa (ÖKC)</td>
                <td className="border border-gray-300 px-4 py-2">0 TL</td>
                <td className="border border-gray-300 px-4 py-2">%0,99</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Akbank POS</td>
                <td className="border border-gray-300 px-4 py-2">Yazar Kasa (ÖKC)</td>
                <td className="border border-gray-300 px-4 py-2">0 TL</td>
                <td className="border border-gray-300 px-4 py-2">%1,79</td>
              </tr>
              {showFullContent && (
                <>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Enpara POS</td>
                    <td className="border border-gray-300 px-4 py-2">Yazar Kasa (ÖKC)</td>
                    <td className="border border-gray-300 px-4 py-2">0 TL</td>
                    <td className="border border-gray-300 px-4 py-2">%1,99</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Garanti POS</td>
                    <td className="border border-gray-300 px-4 py-2">Yazar Kasa (ÖKC)</td>
                    <td className="border border-gray-300 px-4 py-2">145 TL / Ay</td>
                    <td className="border border-gray-300 px-4 py-2">%2,09</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Paycell POS</td>
                    <td className="border border-gray-300 px-4 py-2">Mobil (Taşınabilir) POS</td>
                    <td className="border border-gray-300 px-4 py-2">249 TL / Ay</td>
                    <td className="border border-gray-300 px-4 py-2">%2,70</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Vallet Mobil POS</td>
                    <td className="border border-gray-300 px-4 py-2">Cep POS</td>
                    <td className="border border-gray-300 px-4 py-2">0 TL</td>
                    <td className="border border-gray-300 px-4 py-2">%0,29</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Akbank Sanal POS</td>
                    <td className="border border-gray-300 px-4 py-2">Sanal POS</td>
                    <td className="border border-gray-300 px-4 py-2">0 TL</td>
                    <td className="border border-gray-300 px-4 py-2">%1,79</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">QNB Finansbank Sanal POS</td>
                    <td className="border border-gray-300 px-4 py-2">Sanal POS</td>
                    <td className="border border-gray-300 px-4 py-2">0 TL</td>
                    <td className="border border-gray-300 px-4 py-2">%1,99</td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>

        {showFullContent && (
          <>
            <h3 className="text-2xl font-semibold mt-8 mb-4">En Uygun POS Komisyon Oranları Nasıl Seçilir?</h3>
            <p className="mb-4">2025 yılında işletmenize uygun bir POS cihazı seçerken şu kriterleri göz önünde bulundurabilirsiniz:</p>
            
            <h4 className="text-xl font-semibold mt-6 mb-3">İşletme Türünüze Uygun POS Türü Seçin</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>Küçük işletmeler için Mobil POS seçenekleri, taşınabilirliği nedeniyle avantajlıdır.</li>
              <li>E-ticaret yapan işletmeler için Sanal POS seçenekleri idealdir.</li>
            </ul>

            <h4 className="text-xl font-semibold mt-6 mb-3">Komisyon Oranlarını Karşılaştırın</h4>
            <p className="mb-4">Örneğin, Vallet Mobil POS yalnızca %0,29 komisyon oranı sunarken, Paycell POS için bu oran %2,70'e çıkabilir.</p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Aidat Ücretlerini Dikkate Alın</h4>
            <p className="mb-4">Aidat ödemesi olmayan cihazlar, özellikle yeni başlayan işletmeler için maliyeti düşürür.</p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">POS Komisyon Hesaplama Yöntemi</h3>
            <p className="mb-4">Bir işlemin toplam maliyetini hesaplamak için şu formülü kullanabilirsiniz:</p>
            <p className="font-semibold mb-4">İşlem Tutarı x Komisyon Oranı = Kesilecek Komisyon</p>
            <p className="mb-4">Örneğin, 10.000 TL'lik bir işlemde, CEPTETEB İşte POS cihazı için kesilecek komisyon şu şekilde hesaplanır:</p>
            <p className="font-semibold mb-4">10.000 TL x %0,99 = 99 TL</p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">En Uygun POS Komisyon Oranları 2025</h3>
            <p className="mb-4">Aşağıda farklı POS sistemleri için öneriler yer almaktadır:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>En Düşük Komisyon Oranı: Vallet Mobil POS (%0,29)</li>
              <li>Taşınabilir Kullanım: Enpara Mobil POS (%1,99)</li>
              <li>Yazar Kasa POS: CEPTETEB İşte POS (%0,99)</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Sonuç</h3>
            <p className="mb-4">
              Doğru POS cihazını seçmek, yalnızca maliyetleri düşürmekle kalmaz, aynı zamanda işletmenizin ödeme süreçlerini kolaylaştırır. 
              2025 yılı için güncel POS komisyon oranlarını değerlendirerek işletmenize en uygun seçeneği bulabilirsiniz. 
              En düşük oranlara sahip cihazları karşılaştırmak ve detaylı bilgi almak için işletmenizin ihtiyaçlarını göz önünde bulundurmanız önemlidir.
            </p>
          </>
        )}

        <div className="text-center mt-8">
          <Button
            onClick={() => setShowFullContent(!showFullContent)}
            variant="outline"
            size="lg"
          >
            {showFullContent ? "Daha Az Göster" : "Daha Fazla Göster"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default POSArticle;
