
import POSDetailPage from "@/components/pos/POSDetailPage";
import MetaTags from "@/components/MetaTags";
import { posProviders } from "@/data/posProviders";

const EnparaPOS = () => {
  const provider = posProviders.find(p => p.id === "enpara-pos");
  
  if (!provider) {
    return null;
  }
  
  return (
    <>
      <MetaTags
        title={`Enpara POS Komisyon Oranları ${new Date().getFullYear()} | POS Compare`}
        description={`${new Date().getFullYear()} Enpara POS komisyon oranları, özellikleri ve detaylı karşılaştırma. İşletmeniz için en uygun Enpara POS çözümünü keşfedin.`}
        canonicalPath="/pos/enpara-pos"
        priority={20}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default EnparaPOS;
