
import POSDetailPage from "@/components/pos/POSDetailPage";
import MetaTags from "@/components/MetaTags";
import { yazarkasaPOSProviders } from "@/data/pos-types/yazarkasaPOS";

const TEBPOS = () => {
  const provider = yazarkasaPOSProviders.find(p => p.id === "teb-pos");

  if (!provider) {
    return null;
  }

  return (
    <>
      <MetaTags
        title={`TEB POS Komisyon Oranları ${new Date().getFullYear()} | POS Compare`}
        description={`${new Date().getFullYear()} TEB POS komisyon oranları, özellikleri ve detaylı karşılaştırma. İşletmeniz için en uygun TEB POS çözümünü keşfedin.`}
        canonicalPath="/pos/teb-pos"
        priority={20}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default TEBPOS;
