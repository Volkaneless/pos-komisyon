import { Cloud } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";

const BulutPOS = () => {
  return (
    <POSTypePage
      title="Bulut Tabanlı POS Sistemleri"
      description="Modern bulut tabanlı POS sistemleri ve komisyon oranlarını karşılaştırın. Size en uygun bulut POS çözümünü seçin."
      type="Bulut POS"
      Icon={Cloud}
      whatIsContent="Bulut tabanlı POS sistemleri, tüm verilerinizi ve işlemlerinizi bulut üzerinde saklayan modern ödeme çözümleridir. Bu sistemler, işletmelere esneklik ve erişilebilirlik sağlar."
      advantages={[
        "Her yerden erişim imkanı",
        "Otomatik yedekleme",
        "Anlık güncelleme ve bakım",
        "Ölçeklenebilir altyapı",
        "Entegre analitik araçları"
      ]}
    />
  );
};

export default BulutPOS;