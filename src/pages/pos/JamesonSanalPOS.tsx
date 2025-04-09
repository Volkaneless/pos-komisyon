
import POSDetailPage from "@/components/pos/POSDetailPage";
import { sanalPOSProviders } from "@/data/pos-types/sanalPOS";
import MetaTags from "@/components/MetaTags";

const JamesonSanalPOS = () => {
  const provider = sanalPOSProviders.find(p => p.id === "jameson-sanal");

  if (!provider) {
    return null;
  }

  return (
    <>
      <MetaTags
        title="Jameson Sanal POS Komisyon Oranları 2025 | POS Compare"
        description="2025 Jameson Sanal POS komisyon oranları, özellikleri ve detaylı karşılaştırma. E-ticaret siteniz için en uygun Jameson Sanal POS çözümünü keşfedin."
        canonicalPath="/pos/jameson-sanal"
        priority={20}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default JamesonSanalPOS;
