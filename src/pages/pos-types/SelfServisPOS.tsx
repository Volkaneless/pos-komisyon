import { Terminal } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import { posProviders } from "@/data/posProviders";
import POSCard from "@/components/POSCard";

const SelfServisPOS = () => {
  const filteredProviders = posProviders.filter(
    provider => provider.type === "Self-Servis POS"
  );

  return (
    <>
      <POSTypePage
        title="Self Servis POS Sistemleri ve Komisyon Oranları 2024"
        description="2024 yılı güncel self servis POS sistemleri, komisyon oranları ve karşılaştırmaları. İşletmeniz için en uygun self servis POS çözümünü seçin."
        type="Self-Servis POS"
        Icon={Terminal}
        whatIsContent="Self servis POS sistemleri, müşterilerin kendi başlarına ödeme yapmalarını sağlayan modern ödeme terminalleridir. Bu sistemler, özellikle perakende ve hizmet sektöründe operasyonel verimliliği artırır."
        advantages={[
          "Personel maliyetlerinde tasarruf",
          "Hızlı işlem süreci",
          "7/24 kesintisiz hizmet",
          "Sıra bekleme süresinde azalma",
          "Temassız ödeme seçenekleri",
          "Çoklu dil desteği",
          "Kolay kullanıcı arayüzü",
          "Detaylı raporlama"
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

export default SelfServisPOS;