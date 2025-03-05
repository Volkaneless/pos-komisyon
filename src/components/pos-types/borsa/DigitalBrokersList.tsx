
import type { POSProvider } from "@/types/pos";
import BrokerCard from "./BrokerCard";

interface DigitalBrokersListProps {
  brokers: POSProvider[];
}

const DigitalBrokersList = ({ brokers }: DigitalBrokersListProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Dijital Aracı Kurumlar</h2>
      <div className="space-y-6 mb-12">
        {brokers.map((provider) => (
          <BrokerCard key={provider.id} provider={provider} />
        ))}
      </div>
    </div>
  );
};

export default DigitalBrokersList;
