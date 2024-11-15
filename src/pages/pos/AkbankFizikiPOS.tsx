import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";

const AkbankFizikiPOS = () => {
  const provider = posProviders.find(p => p.id === "akbank-fiziki")!;
  
  return <POSDetailPage provider={provider} />;
};

export default AkbankFizikiPOS;