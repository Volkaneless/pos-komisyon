import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";

const EnparaMobilPOS = () => {
  const provider = posProviders.find(p => p.id === "enpara-mobil")!;
  console.log('Rendering EnparaMobilPOS with provider:', provider);
  return <POSDetailPage provider={provider} />;
};

export default EnparaMobilPOS;