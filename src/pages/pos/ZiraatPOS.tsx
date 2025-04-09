
import POSDetailPage from "@/components/pos/POSDetailPage";
import { yazarkasaPOSProviders } from "@/data/pos-types/yazarkasaPOS";
import MetaTags from "@/components/MetaTags";

const ZiraatPOS = () => {
  const provider = yazarkasaPOSProviders.find(p => p.id === "ziraat-pos");

  if (!provider) {
    return null;
  }

  return (
    <>
      <MetaTags
        title="Ziraat POS Komisyon Oranları 2025 | POS Compare"
        description="2025 Ziraat POS komisyon oranları, özellikleri ve detaylı karşılaştırma. İşletmeniz için en uygun Ziraat POS çözümünü keşfedin."
        canonicalPath="/pos/ziraat-pos"
        priority={20}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default ZiraatPOS;
