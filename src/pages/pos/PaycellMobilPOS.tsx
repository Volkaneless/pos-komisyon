import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";

const PaycellMobilPOS = () => {
  const provider = posProviders.find(p => p.id === "paycell-mobil")!;
  console.log('Rendering PaycellMobilPOS with provider:', provider);
  return <POSDetailPage provider={provider} />;
};

export default PaycellMobilPOS;