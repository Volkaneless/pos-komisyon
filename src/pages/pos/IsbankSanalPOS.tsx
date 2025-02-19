
import POSDetailPage from "@/components/pos/POSDetailPage";
import { bankaPOSProviders } from "@/data/pos-types/bankaPOS";

const IsbankSanalPOS = () => {
  const provider = bankaPOSProviders.find(p => p.id === "isbank-sanal-pos");
  return <POSDetailPage provider={provider!} />;
};

export default IsbankSanalPOS;
