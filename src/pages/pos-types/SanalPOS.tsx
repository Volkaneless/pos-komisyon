import { Terminal, Cloud } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import { sanalPOSProviders } from "@/data/pos-types/sanalPOS";

const SanalPOS = () => {
  return (
    <POSTypePage
      title="Sanal POS Komisyon Oranları 2024"
      description="E-ticaret ve online ödemeler için sanal POS çözümleri"
      type="Sanal POS"
      Icon={Cloud}
      whatIsContent="Sanal POS, internet üzerinden yapılan ödemeleri güvenli bir şekilde almanızı sağlayan bir ödeme sistemidir. E-ticaret sitelerinde, online rezervasyon sistemlerinde ve dijital hizmetlerde kullanılır."
      advantages={[
        "7/24 kesintisiz hizmet",
        "Düşük işletme maliyeti",
        "Kolay entegrasyon",
        "Güvenli ödeme altyapısı",
        "Geniş kart desteği",
        "Detaylı raporlama"
      ]}
    />
  );
};

export default SanalPOS;