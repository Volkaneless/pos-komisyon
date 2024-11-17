import { Smartphone } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";

const CepPOS = () => {
  return (
    <POSTypePage
      title="CepPOS Sistemleri"
      description="Mobil cihazlar için CepPOS sistemleri ve komisyon oranlarını karşılaştırın. Size en uygun CepPOS çözümünü seçin."
      type="CepPOS"
      Icon={Smartphone}
      whatIsContent="CepPOS sistemleri, akıllı telefonları ödeme terminaline dönüştüren modern çözümlerdir. Bu sistemler, özellikle mobil satış yapan işletmeler için ideal bir ödeme çözümü sunar."
      advantages={[
        "Düşük donanım maliyeti",
        "Mobil kullanım esnekliği",
        "Hızlı kurulum ve kullanım",
        "Anlık satış takibi",
        "Kompakt ve taşınabilir yapı"
      ]}
    />
  );
};

export default CepPOS;