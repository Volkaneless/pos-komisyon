import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";

const IsbankAnindaPOS = () => {
  const provider = posProviders.find(p => p.id === "isbank-aninda")!;
  
  return <POSDetailPage provider={provider} />;
};

export default IsbankAnindaPOS;