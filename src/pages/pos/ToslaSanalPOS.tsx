import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";

const ToslaSanalPOS = () => {
  const provider = posProviders.find(p => p.id === "tosla-sanal")!;
  
  return <POSDetailPage provider={provider} />;
};

export default ToslaSanalPOS;