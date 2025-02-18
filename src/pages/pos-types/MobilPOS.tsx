
import { Smartphone } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";

const MobilPOS = () => {
  return (
    <POSTypePage
      title="Mobil POS Komisyon Oranları 2025"
      description="Taşınabilir mobil POS cihazları, komisyon oranları ve özellikler. 2025 yılı mobil POS karşılaştırması, avantajlı çözümler ve hemen başvuru imkanı."
      type="Mobil (Taşınabilir) POS"
      Icon={Smartphone}
      whatIsContent="Mobil POS cihazları, işletmelere hareket halindeyken ödeme alma imkanı sunan taşınabilir ödeme çözümleridir."
      advantages={[
        "Taşınabilir kompakt tasarım",
        "Uzun pil ömrü",
        "Mobil internet bağlantısı",
        "Temassız ödeme desteği",
        "Düşük donanım maliyeti"
      ]}
    />
  );
};

export default MobilPOS;
