
import POSDetailPage from "@/components/pos/POSDetailPage";
import { bankaPOSProviders } from "@/data/pos-types/bankaPOS";
import MetaTags from "@/components/MetaTags";

const VakifbankSanalPOS = () => {
  const provider = bankaPOSProviders.find(p => p.id === "vakifbank-sanal-pos");
  
  if (!provider) {
    return null;
  }
  
  return (
    <>
      <MetaTags
        title={`Vakıfbank Sanal POS Komisyon Oranları ${new Date().getFullYear()}`}
        description={`${new Date().getFullYear()} Vakıfbank Sanal POS komisyon oranları, özellikleri ve detaylı karşılaştırma. İşletmeniz için en uygun Vakıfbank Sanal POS çözümünü keşfedin.`}
        canonicalPath="/pos/vakifbank-sanal-pos"
        priority={20}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default VakifbankSanalPOS;
