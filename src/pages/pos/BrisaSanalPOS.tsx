
import POSDetailPage from "@/components/pos/POSDetailPage";
import { sanalPOSProviders } from "@/data/pos-types/sanalPOS";
import MetaTags from "@/components/MetaTags";

const BrisaSanalPOS = () => {
  const provider = sanalPOSProviders.find(p => p.id === "brisa-sanal");

  if (!provider) {
    return null;
  }

  return (
    <>
      <MetaTags
        title="Brisa Sanal POS Komisyon Oranları 2025"
        description="2025 Brisa Sanal POS komisyon oranları, özellikleri ve detaylı karşılaştırma. E-ticaret siteniz için en uygun Brisa Sanal POS çözümünü keşfedin."
        canonicalPath="/pos/brisa-sanal"
        priority={20}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default BrisaSanalPOS;
