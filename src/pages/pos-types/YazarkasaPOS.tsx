import { Terminal } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import { posProviders } from "@/data/posProviders";
import POSCard from "@/components/POSCard";

const YazarkasaPOS = () => {
  const yazarkasaPOSProviders = posProviders.filter(
    provider => provider.type === "Yazar Kasa (ÖKC) POS"
  );

  return (
    <>
      <POSTypePage
        title="Yazarkasa POS Sistemleri ve Komisyon Oranları 2024"
        description="2024 yılı güncel yazarkasa POS sistemleri, komisyon oranları ve karşılaştırmaları. İşletmeniz için en uygun yazarkasa POS çözümünü seçin."
        type="Yazar Kasa (ÖKC) POS"
        Icon={Terminal}
        whatIsContent="Yazarkasa POS cihazları, ödeme alma ve fiş kesme işlemlerini tek bir cihaz üzerinden yapmanıza olanak sağlayan entegre sistemlerdir. Yeni nesil ÖKC (Ödeme Kaydedici Cihaz) olarak da bilinen bu cihazlar, işletmelerin yasal zorunluluklarını yerine getirmelerini sağlarken, modern ödeme çözümleri sunar."
        advantages={[
          "Tek cihaz üzerinden hem fiş kesme hem ödeme alma imkanı",
          "Gelişmiş raporlama özellikleri",
          "Maliye Bakanlığı onaylı yasal gerekliliklerle uyumlu",
          "Stok takibi ve müşteri yönetimi özellikleri",
          "Çoklu ödeme seçenekleri (nakit, kredi kartı, yemek kartı vb.)",
          "Entegre barkod okuyucu desteği",
          "Otomatik güncelleme ve yedekleme özellikleri",
          "7/24 teknik destek hizmeti"
        ]}
      />

      <div className="container mx-auto px-4 pb-16">
        <div className="grid gap-8">
          {yazarkasaPOSProviders.map((provider) => (
            <POSCard key={provider.id} {...provider} />
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Yazarkasa POS Ekran Görüntüleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <img 
              src="/lovable-uploads/94b76f85-f46d-4697-9e85-37175b139351.png" 
              alt="Yazarkasa POS Örnek Ekran Görüntüsü" 
              className="rounded-lg shadow-lg w-full"
            />
            <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
              <p className="text-gray-500 text-center">Daha fazla ekran görüntüsü yakında eklenecek</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YazarkasaPOS;