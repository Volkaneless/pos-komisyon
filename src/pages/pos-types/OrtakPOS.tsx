import { CreditCard } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import { posProviders } from "@/data/posProviders";
import POSCard from "@/components/POSCard";

const OrtakPOS = () => {
  const filteredProviders = posProviders.filter(
    provider => provider.type === "Ortak POS"
  );

  return (
    <>
      <POSTypePage
        title="Ortak POS Sistemleri ve Komisyon Oranları 2024"
        description="2024 yılı güncel ortak POS sistemleri, komisyon oranları ve karşılaştırmaları. İşletmeniz için en uygun ortak POS çözümünü seçin."
        type="Ortak POS"
        Icon={CreditCard}
        whatIsContent="Ortak POS sistemleri, tek bir cihaz üzerinden birden fazla bankanın kartlarını kabul edebilen gelişmiş ödeme çözümleridir. Bu sistemler, işletmelere farklı bankalarla çalışma esnekliği sağlarken, tek bir cihazla tüm işlemleri yönetme imkanı sunar."
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

export default OrtakPOS;