
import { Globe } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";

const SanalPOS = () => {
  return (
    <POSTypePage
      title="Sanal POS Komisyon Oranları 2025"
      description="E-ticaret ve online satış için sanal POS çözümleri, komisyon oranları ve entegrasyon seçenekleri. 2025 yılı güncel sanal POS karşılaştırması ve başvuru."
      type="Sanal POS"
      Icon={Globe}
      whatIsContent="Sanal POS sistemleri, e-ticaret sitelerine güvenli online ödeme alma imkanı sunan dijital ödeme çözümleridir."
      advantages={[
        "Kolay e-ticaret entegrasyonu",
        "7/24 online ödeme alabilme",
        "Güvenli ödeme altyapısı",
        "Çoklu para birimi desteği",
        "Düşük işletme maliyeti"
      ]}
    />
  );
};

export default SanalPOS;
