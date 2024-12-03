import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";

const ValletMobilPOS = () => {
  const provider = posProviders.find(p => p.id === "vallet-mobil")!;
  console.log('Rendering ValletMobilPOS with provider:', provider);
  return <POSDetailPage provider={provider} />;
};

export default ValletMobilPOS;