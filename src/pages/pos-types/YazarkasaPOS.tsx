import { Terminal } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import { posProviders } from "@/data/posProviders";
import POSCard from "@/components/POSCard";

const YazarkasaPOS = () => {
  // Filter unique providers by id to prevent duplicates
  const uniqueProviders = posProviders.filter(
    (provider, index, self) =>
      provider.type === "Yazar Kasa (ÖKC) POS" &&
      index === self.findIndex((p) => p.id === provider.id)
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
          {uniqueProviders.map((provider) => (
            <POSCard key={provider.id} {...provider} />
          ))}
        </div>
      </div>
    </>
  );
};

export default YazarkasaPOS;