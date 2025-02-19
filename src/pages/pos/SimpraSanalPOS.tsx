
import POSDetailPage from "@/components/pos/POSDetailPage";
import { sanalPOSProviders } from "@/data/pos-types/sanalPOS";

const SimpraSanalPOS = () => {
  const provider = sanalPOSProviders.find(p => p.id === "simpra-sanal");
  return <POSDetailPage provider={provider!} />;
};

export default SimpraSanalPOS;
