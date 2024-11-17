import { Cloud } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";

const BulutPOS = () => {
  return (
    <POSTypePage
      title="Bulut POS Sistemleri ve Komisyon Oranları 2024"
      description="2024 yılı güncel bulut tabanlı POS sistemleri, komisyon oranları ve karşılaştırmaları. İşletmeniz için en uygun bulut POS çözümünü seçin."
      type="Bulut POS"
      Icon={Cloud}
      whatIsContent="Bulut POS sistemleri, tüm işlem ve verilerin bulut üzerinde saklandığı modern ödeme çözümleridir. Bu sistemler, işletmelere her yerden erişim, otomatik yedekleme ve anlık güncelleme gibi avantajlar sağlar. Bulut tabanlı yapısı sayesinde, donanım maliyetlerini minimize ederken, ölçeklenebilir bir altyapı sunar."
      advantages={[
        "Her yerden erişim imkanı",
        "Otomatik yedekleme ve veri güvenliği",
        "Anlık yazılım güncellemeleri",
        "Düşük donanım maliyeti",
        "Ölçeklenebilir sistem altyapısı",
        "Entegre analitik araçları",
        "Çoklu şube yönetimi",
        "Gelişmiş API desteği"
      ]}
    />
  );
};

export default BulutPOS;