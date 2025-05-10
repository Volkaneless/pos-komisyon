
import POSDetailPage from "@/components/pos/POSDetailPage";
import { sanalPOSProviders } from "@/data/pos-types/sanalPOS";
import MetaTags from "@/components/MetaTags";

const ParamPOSSanal = () => {
  const provider = sanalPOSProviders.find(p => p.id === "parampos-sanal");

  if (!provider) {
    return null;
  }

  return (
    <>
      <MetaTags
        title={`ParamPOS Komisyon Oranları ${new Date().getFullYear()}`}
        description={`${new Date().getFullYear()} ParamPOS komisyon oranları, özellikleri ve detaylı karşılaştırma. E-ticaret siteniz için en uygun ParamPOS çözümünü keşfedin.`}
        canonicalPath="/pos/parampos-sanal"
        priority={20}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "ParamPOS",
          "description": `ParamPOS komisyon oranları ve detaylı bilgiler. ${new Date().getFullYear()} güncel bilgileri.`
        }}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default ParamPOSSanal;
