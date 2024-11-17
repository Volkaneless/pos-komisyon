import { Computer } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";

const SanalPOS = () => {
  return (
    <POSTypePage
      title="Sanal POS Sistemleri"
      description="En uygun sanal POS sistemleri ve komisyon oranlarını karşılaştırın. Size en uygun sanal POS çözümünü seçin."
      type="Sanal POS"
      Icon={Computer}
      whatIsContent="Sanal POS sistemleri, e-ticaret sitelerinde güvenli online ödeme almayı sağlayan yazılım çözümleridir. Bu sistemler, müşterilerin kredi kartı bilgilerini güvenli bir şekilde işleyerek online satış yapmanıza olanak tanır."
      advantages={[
        "7/24 kesintisiz ödeme alma imkanı",
        "Düşük işletme maliyeti",
        "Kolay entegrasyon seçenekleri",
        "Güvenli ödeme altyapısı",
        "Çoklu ödeme seçenekleri"
      ]}
    />
  );
};

export default SanalPOS;