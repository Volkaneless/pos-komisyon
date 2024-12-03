import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";

const PayTRSanalPOS = () => {
  const provider = posProviders.find(p => p.id === "paytr-sanal")!;
  console.log('Rendering PayTRSanalPOS with provider:', provider);
  return <POSDetailPage provider={provider} />;
};

export default PayTRSanalPOS;