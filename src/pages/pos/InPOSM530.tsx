
import POSDetailPage from "@/components/pos/POSDetailPage";
import { sanalPOSProviders } from "@/data/pos-types/sanalPOS";
import MetaTags from "@/components/MetaTags";

const InPOSM530 = () => {
  const provider = sanalPOSProviders.find(p => p.id === "inpos-m530-sanal");

  if (!provider) {
    return null;
  }

  return (
    <>
      <MetaTags
        title={`inPOS m530 Komisyon Oranları ${new Date().getFullYear()}`}
        description={`${new Date().getFullYear()} inPOS m530 komisyon oranları, özellikleri ve detaylı karşılaştırma. E-ticaret siteniz için en uygun inPOS m530 çözümünü keşfedin.`}
        canonicalPath="/pos/inpos-m530-sanal"
        priority={20}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "inPOS m530",
          "description": `inPOS m530 komisyon oranları ve detaylı bilgiler. ${new Date().getFullYear()} güncel bilgileri.`
        }}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default InPOSM530;
