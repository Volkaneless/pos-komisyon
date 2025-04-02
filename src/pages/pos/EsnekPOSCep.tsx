
import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";
import MetaTags from "@/components/MetaTags";

const EsnekPOSCep = () => {
  const provider = posProviders.find(p => p.id === "esnekpos-cep")!;
  
  return (
    <>
      <MetaTags
        title={`${provider.name} Komisyon Oranları 2025 | POS Compare`}
        description={`${provider.name} güncel komisyon oranları, özellikleri ve başvuru şartları. En uygun POS çözümünü kolayca bulun.`}
        keywords={`${provider.name.toLowerCase()}, ${provider.type.toLowerCase()}, komisyon oranları, pos karşılaştırma`}
        canonicalPath={`/pos/${provider.id}`}
        priority={20}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default EsnekPOSCep;
