import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";

const PayTRNeoPOS = () => {
  const provider = posProviders.find(p => p.id === "paytr-neopos")!;
  
  return <POSDetailPage provider={provider} />;
};

export default PayTRNeoPOS;