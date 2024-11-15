import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";

const PaycellSanalPOS = () => {
  const provider = posProviders.find(p => p.id === "paycell-sanal")!;
  
  return <POSDetailPage provider={provider} />;
};

export default PaycellSanalPOS;