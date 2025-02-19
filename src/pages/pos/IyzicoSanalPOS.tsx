
import POSDetailPage from "@/components/pos/POSDetailPage";
import { sanalPOSProviders } from "@/data/pos-types/sanalPOS";

const IyzicoSanalPOS = () => {
  const provider = sanalPOSProviders.find(p => p.id === "iyzico-sanal");
  return <POSDetailPage provider={provider!} />;
};

export default IyzicoSanalPOS;
