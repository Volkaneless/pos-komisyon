
import POSDetailPage from "@/components/pos/POSDetailPage";
import { sanalPOSProviders } from "@/data/pos-types/sanalPOS";
import MetaTags from "@/components/MetaTags";

const ParamSanalPOS = () => {
  const provider = sanalPOSProviders.find(p => p.id === "param-sanal");

  if (!provider) {
    return null;
  }

  return (
    <>
      <MetaTags
        title={`Param Sanal POS Komisyon Oranları ${new Date().getFullYear()} | POS Komisyon`}
        description={`${new Date().getFullYear()} Param Sanal POS komisyon oranları, özellikleri ve detaylı karşılaştırma. E-ticaret siteniz için en uygun Param Sanal POS çözümünü keşfedin.`}
        canonicalPath="/pos/param-sanal"
        priority={20}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Param Sanal POS",
          "description": `Param Sanal POS komisyon oranları ve detaylı bilgiler. ${new Date().getFullYear()} güncel bilgileri.`
        }}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default ParamSanalPOS;
