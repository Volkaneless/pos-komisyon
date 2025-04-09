
import POSDetailPage from "@/components/pos/POSDetailPage";
import { yazarkasaPOSProviders } from "@/data/pos-types/yazarkasaPOS";
import MetaTags from "@/components/MetaTags";

const BekoPOS = () => {
  const provider = yazarkasaPOSProviders.find(p => p.id === "beko-pos");

  if (!provider) {
    return null;
  }

  return (
    <>
      <MetaTags
        title="Beko Yazar Kasa POS Komisyon Oranları 2025 | POS Compare"
        description="2025 Beko Yazar Kasa POS komisyon oranları, özellikleri ve detaylı karşılaştırma. İşletmeniz için en uygun Beko POS çözümünü keşfedin."
        canonicalPath="/pos/beko-pos"
        priority={20}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default BekoPOS;
