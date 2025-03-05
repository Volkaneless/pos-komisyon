
import { digitalBrokers } from "@/data/pos-types/borsa/digitalBrokers";
import POSDetailPage from "@/components/pos/POSDetailPage";
import { useEffect } from "react";

const MatriksBroker = () => {
  const broker = digitalBrokers.find(b => b.id === "matriks");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!broker) {
    return <div>Broker not found</div>;
  }

  return <POSDetailPage provider={broker} />;
};

export default MatriksBroker;
