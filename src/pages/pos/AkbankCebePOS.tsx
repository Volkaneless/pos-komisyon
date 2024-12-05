import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";

const AkbankCebePOS = () => {
  const provider = posProviders.find(p => p.id === "akbank-cebe")!;
  console.log('Rendering AkbankCebePOS with provider:', provider);
  return <POSDetailPage provider={provider} />;
};

export default AkbankCebePOS;