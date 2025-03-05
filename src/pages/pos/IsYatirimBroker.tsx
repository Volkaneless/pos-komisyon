
import { bankBrokers } from "@/data/pos-types/borsa/bankBrokers";
import POSDetailPage from "@/components/pos/POSDetailPage";
import { useEffect } from "react";

const IsYatirimBroker = () => {
  const broker = bankBrokers.find(b => b.id === "is-yatirim");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!broker) {
    return <div>Broker not found</div>;
  }

  return <POSDetailPage provider={broker} />;
};

export default IsYatirimBroker;
