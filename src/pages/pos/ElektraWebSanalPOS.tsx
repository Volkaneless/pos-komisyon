
import POSDetailPage from "@/components/pos/POSDetailPage";
import { sanalPOSProviders } from "@/data/pos-types/sanalPOS";
import MetaTags from "@/components/MetaTags";

const ElektraWebSanalPOS = () => {
  const provider = sanalPOSProviders.find(p => p.id === "elektraweb-sanal");

  if (!provider) {
    return null;
  }

  return (
    <>
      <MetaTags
        title="ElektraWeb Sanal POS Komisyon Oranları 2025"
        description="2025 ElektraWeb Sanal POS komisyon oranları, özellikleri ve detaylı karşılaştırma. E-ticaret siteniz için en uygun ElektraWeb Sanal POS çözümünü keşfedin."
        canonicalPath="/pos/elektraweb-sanal"
        priority={20}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default ElektraWebSanalPOS;
