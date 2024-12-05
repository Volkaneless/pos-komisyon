import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";

const AkbankSanalPOS = () => {
  const provider = posProviders.find(p => p.id === "akbank-sanal")!;
  
  return <POSDetailPage provider={provider} />;
};

export default AkbankSanalPOS;