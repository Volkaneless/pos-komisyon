import { Smartphone } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import { posProviders } from "@/data/posProviders";
import POSCard from "@/components/POSCard";

const MobilPOS = () => {
  const filteredProviders = posProviders.filter(
    provider => provider.type === "Mobil POS"
  );

  return (
    <>
      <POSTypePage
        title="Mobil POS Sistemleri ve Komisyon Oranları 2024"
        description="2024 yılı güncel mobil POS sistemleri, komisyon oranları ve karşılaştırmaları. İşletmeniz için en uygun mobil POS çözümünü seçin."
        type="Mobil POS"
        Icon={Smartphone}
        whatIsContent="Mobil POS sistemleri, hareket halindeyken ödeme almanızı sağlayan taşınabilir ödeme terminalleridir. Özellikle eve teslimat hizmetleri ve sahada çalışan işletmeler için ideal bir çözümdür."
        advantages={[
          "Tam mobilite",
          "Kablosuz bağlantı",
          "Uzun pil ömrü",
          "Kompakt tasarım",
          "Entegre yazıcı seçeneği",
          "GPS takibi",
          "Offline çalışabilme",
          "Hızlı şarj"
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

export default MobilPOS;