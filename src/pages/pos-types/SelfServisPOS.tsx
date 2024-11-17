import { Terminal } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";

const SelfServisPOS = () => {
  return (
    <POSTypePage
      title="Self-Servis POS Sistemleri"
      description="Modern self-servis POS sistemleri ve komisyon oranlarını karşılaştırın. Size en uygun self-servis POS çözümünü seçin."
      type="Self-Servis POS"
      Icon={Terminal}
      whatIsContent="Self-servis POS sistemleri, müşterilerin kendi başlarına ödeme yapmalarını sağlayan modern ödeme terminalleridir. Bu sistemler, özellikle perakende ve yeme-içme sektöründe operasyonel verimliliği artırır."
      advantages={[
        "Personel maliyetlerinde tasarruf",
        "Hızlı işlem süreci",
        "7/24 hizmet imkanı",
        "Sıra ve bekleme sürelerinde azalma",
        "Temassız ödeme seçenekleri"
      ]}
    />
  );
};

export default SelfServisPOS;