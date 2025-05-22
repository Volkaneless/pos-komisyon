import { Receipt } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import FAQ from "@/components/FAQ";
import MetaTags from "@/components/MetaTags";

const YazarkasaPOS = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <MetaTags 
        title={`Yazarkasa POS Komisyon Oranları ${currentYear} - En Uygun Yazarkasa POS`} 
        description={`${currentYear} yılı güncel yazarkasa POS komisyon oranları, karşılaştırma ve hesaplama araçları. İşletmeniz için en uygun yazarkasa POS çözümünü bulun.`} 
        keywords="yazarkasa pos komisyon oranları, yazarkasa pos başvuru, yazarkasa pos cihazları, entegre pos, yazarkasa pos entegrasyonu" 
        canonicalPath="/pos-types/yazarkasa" 
        priority={20}
      />

      <POSTypePage 
        title="Yazarkasa POS Komisyon Oranları"
        description="İşletmeniz için en uygun yazarkasa ve entegre POS çözümleri, komisyon oranları ve karşılaştırmalar" 
        type="Yazarkasa POS" 
        Icon={Receipt}
        whatIsContent="Yazarkasa POS cihazları, klasik ödeme sistemleri ile yazarkasaları birleştiren entegre çözümlerdir. Bu cihazlar, işletmelerin satış ve ödeme süreçlerini tek bir cihaz üzerinden yönetmelerini sağlar."
        advantages={[
          "Tek cihazla hem fiş kesme hem ödeme alma", 
          "Maliye onaylı resmi yazarkasa fonksiyonu", 
          "Stok ve envanter takibi", 
          "Gelişmiş raporlama özellikleri", 
          "Düşük komisyon oranları", 
          "Çoklu kullanıcı desteği",
          "E-fatura ve e-arşiv entegrasyonu"
        ]} 
      />

      <div className="container mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-4xl mx-auto mt-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Yazarkasa POS Komisyon Oranları {currentYear}</h2>
          
          <div className="bg-blue-50 p-6 rounded-xl mb-8">
            <h3 className="text-2xl font-semibold mb-4">Yazarkasa POS Nedir?</h3>
            <p className="text-gray-700 mb-0">
              Yazarkasa POS cihazları, geleneksel yazarkasaların ve POS sistemlerinin işlevlerini bir araya getiren entegre çözümlerdir.
              Bu cihazlar, işletmelerin hem yasal gereklilikleri yerine getirmesini sağlar hem de kredi kartı ve diğer ödeme yöntemleriyle
              kolayca ödeme almasına olanak tanır.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Yazarkasa POS Komisyon Oranları {currentYear}</h3>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left">İşlem Tipi</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Komisyon Oranı</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Açıklama</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Peşin</td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">%1,29 - %2,49</td>
                  <td className="border border-gray-300 px-4 py-3">Standart işlem komisyonu</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">3 Taksit</td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">%2,49 - %3,49</td>
                  <td className="border border-gray-300 px-4 py-3">Kısa vadeli taksit seçeneği</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">6 Taksit</td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">%2,99 - %4,49</td>
                  <td className="border border-gray-300 px-4 py-3">Orta vadeli taksit seçeneği</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">9 Taksit</td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">%3,99 - %5,49</td>
                  <td className="border border-gray-300 px-4 py-3">Uzun vadeli ödeme imkanı</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">12 Taksit</td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">%5,49 - %7,49</td>
                  <td className="border border-gray-300 px-4 py-3">En uzun vadeli taksit seçeneği</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-xl mb-8">
            <h4 className="text-lg font-semibold mb-2">Not:</h4>
            <p className="text-gray-700 mb-0">
              Yukarıdaki komisyon oranları ortalama değerlerdir. Her bankanın ve POS sağlayıcının kendi fiyatlandırma 
              politikası vardır. Ayrıca, işlem hacminize ve sözleşme sürenize göre özel teklifler alabilirsiniz.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-xl my-16">
          <FAQ />
        </div>
        
      </div>
    </>
  );
};

export default YazarkasaPOS;
