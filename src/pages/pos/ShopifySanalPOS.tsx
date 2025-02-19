
import POSDetailPage from "@/components/pos/POSDetailPage";
import { sanalPOSProviders } from "@/data/pos-types/sanalPOS";

const ShopifySanalPOS = () => {
  const provider = sanalPOSProviders.find(p => p.id === "shopify-sanal");
  return <POSDetailPage provider={provider!} />;
};

export default ShopifySanalPOS;
