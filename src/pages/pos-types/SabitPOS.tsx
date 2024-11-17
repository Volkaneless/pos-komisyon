import { Terminal } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";

const SabitPOS = () => {
  return (
    <POSTypePage
      title="Sabit POS Sistemleri"
      description="En uygun sabit POS cihazları ve komisyon oranlarını karşılaştırın. Size en uygun sabit POS sistemini seçin."
      type="Sabit POS"
      Icon={Terminal}
      whatIsContent="Sabit POS cihazları, işletmelerde masaüstü kullanım için tasarlanmış geleneksel ödeme terminalleridir. Bu cihazlar, güvenilir ve istikrarlı bir ödeme çözümü sunar."
      advantages={[
        "Güvenilir ve dayanıklı yapı",
        "Yüksek işlem hacmi kapasitesi",
        "Kolay kullanım",
        "Geniş banka desteği",
        "Profesyonel görünüm"
      ]}
    />
  );
};

export default SabitPOS;