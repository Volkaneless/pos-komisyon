import { CreditCard } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";

const DovizPOS = () => {
  return (
    <POSTypePage
      title="Döviz POS Sistemleri ve Komisyon Oranları 2024"
      description="2024 yılı güncel döviz POS sistemleri, komisyon oranları ve karşılaştırmaları. Yurtdışı satışlar için en uygun döviz POS çözümünü seçin."
      type="Döviz POS"
      Icon={CreditCard}
      whatIsContent="Döviz POS sistemleri, işletmelerin yabancı para birimleri üzerinden ödeme almasını sağlayan özel ödeme çözümleridir. Bu sistemler, özellikle turizm sektörü, ihracat yapan firmalar ve uluslararası e-ticaret işletmeleri için tasarlanmıştır. Döviz POS'lar sayesinde işletmeler, farklı para birimlerinde ödeme kabul edebilir ve kur riskini minimize edebilirler."
      advantages={[
        "Çoklu döviz desteği ile farklı para birimlerinde ödeme alma imkanı",
        "Anlık ve rekabetçi döviz kurları ile işlem yapabilme",
        "Yabancı kartlarla uyumlu altyapı",
        "Otomatik kur çevrimi ve hesaplama",
        "Döviz bazlı satış raporlaması",
        "Yurtdışı müşteriler için kolay ödeme deneyimi",
        "Kur riskine karşı koruma",
        "Uluslararası ticaret için optimize edilmiş çözümler"
      ]}
    />
  );
};

export default DovizPOS;