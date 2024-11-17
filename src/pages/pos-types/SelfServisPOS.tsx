import { Terminal } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";

const SelfServisPOS = () => {
  return (
    <POSTypePage
      title="Self Servis POS Sistemleri ve Komisyon Oranları 2024"
      description="2024 yılı güncel self servis POS sistemleri, komisyon oranları ve karşılaştırmaları. İşletmeniz için en uygun self servis POS çözümünü seçin."
      type="Self-Servis POS"
      Icon={Terminal}
      whatIsContent="Self servis POS sistemleri, müşterilerin kendi başlarına ödeme yapmalarını sağlayan modern ödeme terminalleridir. Bu sistemler, özellikle perakende mağazalar, restoranlar ve hizmet sektöründe operasyonel verimliliği artırır. Personel maliyetlerini düşürürken müşteri deneyimini iyileştirir ve bekleme sürelerini kısaltır."
      advantages={[
        "Personel maliyetlerinde tasarruf",
        "Hızlı işlem süreci",
        "7/24 kesintisiz hizmet",
        "Sıra ve bekleme sürelerinde azalma",
        "Temassız ödeme seçenekleri",
        "Çoklu dil desteği",
        "Kolay kullanıcı arayüzü",
        "Detaylı raporlama özellikleri"
      ]}
    />
  );
};

export default SelfServisPOS;