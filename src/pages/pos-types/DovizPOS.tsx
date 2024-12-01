import { CreditCard } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import { posProviders } from "@/data/posProviders";
import POSCard from "@/components/POSCard";

const DovizPOS = () => {
  const filteredProviders = posProviders.filter(
    provider => provider.type === "Döviz POS"
  );

  return (
    <>
      <POSTypePage
        title="Döviz POS Sistemleri ve Komisyon Oranları 2024"
        description="2024 yılı güncel döviz POS sistemleri, komisyon oranları ve karşılaştırmaları. İşletmeniz için en uygun döviz POS çözümünü seçin."
        type="Döviz POS"
        Icon={CreditCard}
        whatIsContent="Döviz POS sistemleri, işletmelerin yabancı para birimleri üzerinden ödeme almasını sağlayan özel ödeme çözümleridir. Bu sistemler, özellikle turizm sektörü ve uluslararası ticaret yapan işletmeler için idealdir."
        advantages={[
          "Çoklu döviz desteği",
          "Anlık ve rekabetçi döviz kurları",
          "Yabancı kartlarla uyumlu altyapı",
          "Otomatik kur çevrimi",
          "Döviz bazlı raporlama",
          "Uluslararası ödeme desteği",
          "Kur riski yönetimi",
          "24/7 müşteri desteği"
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

export default DovizPOS;