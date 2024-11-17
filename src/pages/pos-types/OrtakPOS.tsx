import { CreditCard } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";

const OrtakPOS = () => {
  return (
    <POSTypePage
      title="Ortak POS Sistemleri ve Komisyon Oranları 2024"
      description="2024 yılı güncel ortak POS sistemleri, komisyon oranları ve karşılaştırmaları. İşletmeniz için en uygun ortak POS çözümünü seçin."
      type="Ortak POS"
      Icon={CreditCard}
      whatIsContent="Ortak POS sistemleri, tek bir cihaz üzerinden birden fazla bankanın kartlarını kabul edebilen gelişmiş ödeme çözümleridir. Bu sistemler, işletmelere farklı bankalarla çalışma esnekliği sağlarken, tek bir cihazla tüm işlemleri yönetme imkanı sunar. Ortak POS'lar, özellikle çoklu banka ile çalışan işletmeler için ideal bir çözümdür."
      advantages={[
        "Tek cihazda çoklu banka desteği",
        "Optimize edilmiş işletme maliyetleri",
        "Basitleştirilmiş mutabakat süreçleri",
        "Merkezi yönetim paneli",
        "Entegre raporlama sistemi",
        "Farklı kartlarla uyumlu altyapı",
        "Esnek taksit seçenekleri",
        "Kolay banka entegrasyonu"
      ]}
    />
  );
};

export default OrtakPOS;