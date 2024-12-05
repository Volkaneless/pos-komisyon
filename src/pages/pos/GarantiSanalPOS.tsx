import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";

const GarantiSanalPOS = () => {
  const provider = posProviders.find(p => p.id === "garanti-sanal")!;
  
  return <POSDetailPage provider={provider} />;
};

export default GarantiSanalPOS;