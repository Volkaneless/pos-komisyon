import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";

const MokaSanalPOS = () => {
  const provider = posProviders.find(p => p.id === "moka-sanal")!;
  
  return <POSDetailPage provider={provider} />;
};

export default MokaSanalPOS;