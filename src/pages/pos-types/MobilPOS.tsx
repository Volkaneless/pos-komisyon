import { Smartphone } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";

const MobilPOS = () => {
  return (
    <POSTypePage
      title="Mobil POS Sistemleri ve Komisyon Oranları 2024"
      description="2024 yılı güncel mobil POS sistemleri, komisyon oranları ve karşılaştırmaları. İşletmeniz için en uygun mobil POS çözümünü seçin."
      type="Mobil POS"
      Icon={Smartphone}
      whatIsContent="Mobil POS sistemleri, hareket halindeyken ödeme almanızı sağlayan taşınabilir ödeme terminalleridir. Özellikle eve teslimat hizmetleri, seyyar satıcılar ve sahada çalışan işletmeler için ideal bir çözümdür. Kablosuz bağlantı özellikleri ve uzun pil ömrü ile kesintisiz hizmet sunar."
      advantages={[
        "Tam mobilite ve taşınabilirlik",
        "Kablosuz bağlantı seçenekleri",
        "Uzun pil ömrü",
        "Kompakt ve dayanıklı tasarım",
        "Entegre yazıcı seçeneği",
        "GPS tabanlı konum takibi",
        "Offline çalışabilme özelliği",
        "Hızlı şarj desteği"
      ]}
    />
  );
};

export default MobilPOS;