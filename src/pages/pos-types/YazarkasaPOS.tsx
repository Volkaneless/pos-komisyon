import { Terminal } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";

const YazarkasaPOS = () => {
  return (
    <POSTypePage
      title="Yazarkasa POS Sistemleri"
      description="En uygun yazarkasa POS cihazları ve komisyon oranlarını karşılaştırın. Size en uygun yazarkasa POS sistemini seçin."
      type="Yazarkasa POS"
      Icon={Terminal}
      whatIsContent="Yazarkasa POS cihazları, ödeme alma ve fiş kesme işlemlerini tek bir cihaz üzerinden yapmanıza olanak sağlayan entegre sistemlerdir. Yeni nesil ÖKC (Ödeme Kaydedici Cihaz) olarak da bilinen bu cihazlar, işletmelerin yasal zorunluluklarını yerine getirmelerini sağlarken, modern ödeme çözümleri sunar."
      advantages={[
        "Tek cihaz üzerinden hem fiş kesme hem ödeme alma imkanı",
        "Gelişmiş raporlama özellikleri",
        "Maliye Bakanlığı onaylı yasal gerekliliklerle uyumlu",
        "Stok takibi ve müşteri yönetimi özellikleri",
        "Çoklu ödeme seçenekleri (nakit, kredi kartı, yemek kartı vb.)"
      ]}
    />
  );
};

export default YazarkasaPOS;