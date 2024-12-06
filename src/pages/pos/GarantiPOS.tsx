import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";

const GarantiPOS = () => {
  const provider = posProviders.find(p => p.id === "garanti-pos")!;
  console.log('Rendering GarantiPOS with provider:', provider);
  return <POSDetailPage provider={provider} />;
};

export default GarantiPOS;