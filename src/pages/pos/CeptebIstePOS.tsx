import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";

const CeptebIstePOS = () => {
  const provider = posProviders.find(p => p.id === "cepteb-iste")!;
  console.log('Rendering CeptebIstePOS with provider:', provider);
  return <POSDetailPage provider={provider} />;
};

export default CeptebIstePOS;