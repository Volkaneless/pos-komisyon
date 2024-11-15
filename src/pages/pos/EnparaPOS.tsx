import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";

const EnparaPOS = () => {
  const provider = posProviders.find(p => p.id === "enpara-pos")!;
  
  return <POSDetailPage provider={provider} />;
};

export default EnparaPOS;