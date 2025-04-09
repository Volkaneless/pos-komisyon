
import POSDetailPage from "@/components/pos/POSDetailPage";
import { yazarkasaPOSProviders } from "@/data/pos-types/yazarkasaPOS";
import MetaTags from "@/components/MetaTags";

const IngenicoPOS = () => {
  const provider = yazarkasaPOSProviders.find(p => p.id === "ingenico-pos");

  if (!provider) {
    return null;
  }

  return (
    <>
      <MetaTags
        title="Ingenico POS Komisyon Oranları 2025 | POS Compare"
        description="2025 Ingenico POS komisyon oranları, özellikleri ve detaylı karşılaştırma. İşletmeniz için en uygun Ingenico POS çözümünü keşfedin."
        canonicalPath="/pos/ingenico-pos"
        priority={20}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default IngenicoPOS;
