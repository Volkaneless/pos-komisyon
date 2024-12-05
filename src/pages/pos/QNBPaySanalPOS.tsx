import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";

const QNBPaySanalPOS = () => {
  const provider = posProviders.find(p => p.id === "qnbpay-sanal")!;
  console.log('Rendering QNBPaySanalPOS with provider:', provider);
  return <POSDetailPage provider={provider} />;
};

export default QNBPaySanalPOS;