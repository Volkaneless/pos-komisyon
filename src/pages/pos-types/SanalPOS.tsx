import { Computer } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";

const SanalPOS = () => {
  return (
    <POSTypePage
      title="Sanal POS Sistemleri ve Komisyon Oranları 2024"
      description="2024 yılı güncel sanal POS sistemleri, komisyon oranları ve karşılaştırmaları. E-ticaret siteniz için en uygun sanal POS çözümünü seçin."
      type="Sanal POS"
      Icon={Computer}
      whatIsContent="Sanal POS sistemleri, e-ticaret siteleri ve dijital işletmeler için tasarlanmış online ödeme çözümleridir. Bu sistemler, işletmelerin internet üzerinden güvenli bir şekilde kredi kartı ödemesi almalarını sağlar. Modern sanal POS'lar, çoklu ödeme seçenekleri, taksit imkanları ve gelişmiş güvenlik özellikleri sunar."
      advantages={[
        "7/24 kesintisiz online ödeme alabilme",
        "Düşük işletme maliyeti ve kolay entegrasyon",
        "Gelişmiş dolandırıcılık önleme sistemleri",
        "Çoklu ödeme yöntemi desteği",
        "Taksitli satış imkanı",
        "Otomatik ödeme ve abonelik sistemleri",
        "Detaylı raporlama ve analiz araçları",
        "PCI DSS uyumlu güvenlik altyapısı"
      ]}
    />
  );
};

export default SanalPOS;