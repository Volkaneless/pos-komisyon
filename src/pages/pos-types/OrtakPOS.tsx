import { CreditCard } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";

const OrtakPOS = () => {
  return (
    <POSTypePage
      title="Ortak POS Sistemleri"
      description="Çoklu banka destekli ortak POS sistemleri ve komisyon oranlarını karşılaştırın. Size en uygun ortak POS çözümünü seçin."
      type="Ortak POS"
      Icon={CreditCard}
      whatIsContent="Ortak POS sistemleri, tek bir cihaz üzerinden birden fazla bankanın kartlarını kabul edebilen gelişmiş ödeme çözümleridir. Bu sistemler, işletmelere esneklik ve maliyet avantajı sağlar."
      advantages={[
        "Tek cihazda çoklu banka desteği",
        "Düşük işletme maliyeti",
        "Basitleştirilmiş mutabakat süreci",
        "Entegre raporlama özellikleri",
        "Optimize edilmiş kasa yönetimi"
      ]}
    />
  );
};

export default OrtakPOS;