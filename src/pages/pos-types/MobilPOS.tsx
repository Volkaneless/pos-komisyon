import { Helmet } from "react-helmet";
import { Smartphone } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";

const MobilPOS = () => {
  return (
    <POSTypePage
      title="Mobil (Taşınabilir) POS Cihazları"
      description="En uygun mobil POS cihazlarını karşılaştırın, size en uygun mobil POS çözümünü bulun."
      type="Mobil (Taşınabilir) POS"
      Icon={Smartphone}
      whatIsContent="Mobil POS cihazları, işletmelerin hareket halindeyken ödeme almalarını sağlayan taşınabilir cihazlardır. Bu cihazlar, kablosuz internet veya mobil veri bağlantısı üzerinden çalışır ve kredi kartı ödemelerini güvenli bir şekilde işler."
      advantages={[
        "Hareket halindeyken ödeme alma imkanı",
        "Kolay taşınabilirlik",
        "Düşük maliyetli çözüm",
        "Hızlı kurulum ve kullanım",
        "Tüm kredi kartlarıyla uyumluluk"
      ]}
    />
  );
};

export default MobilPOS;