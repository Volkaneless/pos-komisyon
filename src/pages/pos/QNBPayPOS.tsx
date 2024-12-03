import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";

const QNBPayPOS = () => {
  const provider = posProviders.find(p => p.id === "qnbpay-pos")!;
  console.log('Rendering QNBPayPOS with provider:', provider);
  return <POSDetailPage provider={provider} />;
};

export default QNBPayPOS;