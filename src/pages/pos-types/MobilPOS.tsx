import { Smartphone } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";

const MobilPOS = () => {
  return (
    <POSTypePage
      title="Mobil POS Sistemleri"
      description="Taşınabilir mobil POS sistemleri ve komisyon oranlarını karşılaştırın. Size en uygun mobil POS çözümünü seçin."
      type="Mobil POS"
      Icon={Smartphone}
      whatIsContent="Mobil POS sistemleri, hareket halindeyken ödeme almanızı sağlayan taşınabilir ödeme terminalleridir. Bu sistemler, özellikle sahada satış yapan işletmeler için ideal bir çözümdür."
      advantages={[
        "Yüksek mobilite",
        "Kablosuz bağlantı seçenekleri",
        "Uzun pil ömrü",
        "Kompakt tasarım",
        "Entegre yazıcı seçeneği"
      ]}
    />
  );
};

export default MobilPOS;