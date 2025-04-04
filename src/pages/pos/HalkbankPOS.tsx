
import POSDetailPage from "@/components/pos/POSDetailPage";
import MetaTags from "@/components/MetaTags";
import { yazarkasaPOSProviders } from "@/data/pos-types/yazarkasaPOS";

const HalkbankPOS = () => {
  const provider = yazarkasaPOSProviders.find(p => p.id === "halkbank-pos");

  if (!provider) {
    return null;
  }

  return (
    <>
      <MetaTags
        title={`Halkbank POS Komisyon Oranları ${new Date().getFullYear()} | POS Compare`}
        description={`${new Date().getFullYear()} Halkbank POS komisyon oranları, özellikleri ve detaylı karşılaştırma. İşletmeniz için en uygun Halkbank POS çözümünü keşfedin.`}
        canonicalPath="/pos/halkbank-pos"
        priority={20}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default HalkbankPOS;
