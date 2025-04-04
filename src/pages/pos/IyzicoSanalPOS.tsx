
import POSDetailPage from "@/components/pos/POSDetailPage";
import MetaTags from "@/components/MetaTags";
import { sanalPOSProviders } from "@/data/pos-types/sanalPOS";

const IyzicoSanalPOS = () => {
  const provider = sanalPOSProviders.find(p => p.id === "iyzico-sanal");
  
  if (!provider) {
    return null;
  }
  
  return (
    <>
      <MetaTags
        title={`Iyzico Sanal POS Komisyon Oranları ${new Date().getFullYear()} | POS Compare`}
        description={`${new Date().getFullYear()} Iyzico Sanal POS komisyon oranları, özellikleri ve detaylı karşılaştırma. E-ticaret siteniz için en uygun Iyzico Sanal POS çözümünü keşfedin.`}
        canonicalPath="/pos/iyzico-sanal-pos"
        priority={20}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default IyzicoSanalPOS;
