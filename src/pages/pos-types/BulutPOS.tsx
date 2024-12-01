import { Cloud } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import { posProviders } from "@/data/posProviders";
import POSCard from "@/components/POSCard";

const BulutPOS = () => {
  const filteredProviders = posProviders.filter(
    provider => provider.type === "Bulut POS"
  );

  return (
    <>
      <POSTypePage
        title="Bulut POS Sistemleri ve Komisyon Oranları 2024"
        description="2024 yılı güncel bulut tabanlı POS sistemleri, komisyon oranları ve karşılaştırmaları. İşletmeniz için en uygun bulut POS çözümünü seçin."
        type="Bulut POS"
        Icon={Cloud}
        whatIsContent="Bulut POS sistemleri, tüm işlem ve verilerin bulut üzerinde saklandığı modern ödeme çözümleridir. Bu sistemler, işletmelere her yerden erişim ve otomatik yedekleme gibi avantajlar sağlar."
        advantages={[
          "Her yerden erişim imkanı",
          "Otomatik yedekleme",
          "Anlık güncellemeler",
          "Düşük donanım maliyeti",
          "Ölçeklenebilir sistem",
          "Entegre analitik araçları",
          "Çoklu şube yönetimi",
          "API desteği"
        ]}
      />

      <div className="container mx-auto px-4 pb-16">
        <div className="grid gap-8">
          {filteredProviders.map((provider) => (
            <POSCard key={provider.id} {...provider} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BulutPOS;