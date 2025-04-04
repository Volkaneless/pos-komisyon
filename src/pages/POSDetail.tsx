
import { useParams } from "react-router-dom";
import { posProviders } from "../data/posProviders";
import POSDetailPage from "@/components/pos/POSDetailPage";
import MetaTags from "@/components/MetaTags";

const POSDetail = () => {
  const { id } = useParams();
  const provider = posProviders.find(p => p.id === id);

  if (!provider) {
    return <div className="container mx-auto px-4 pt-24">POS bulunamadı</div>;
  }

  return (
    <>
      <MetaTags
        title={`${provider.name} POS ${new Date().getFullYear()} Komisyon Oranları | POS Compare`}
        description={`${new Date().getFullYear()} ${provider.name} POS komisyon oranları, özellikleri ve detaylı karşılaştırma. İşletmeniz için en uygun ${provider.name} POS çözümünü keşfedin.`}
        canonicalPath={`/pos/${provider.id}`}
        priority={20}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default POSDetail;
