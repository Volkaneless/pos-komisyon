
import type { POSProvider } from "@/types/pos";
import BrokerCard from "./BrokerCard";

interface BankBrokersListProps {
  brokers: POSProvider[];
}

const BankBrokersList = ({ brokers }: BankBrokersListProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Banka Aracı Kurumlar</h2>
      <div className="space-y-6">
        {brokers.map((provider) => (
          <BrokerCard key={provider.id} provider={provider} />
        ))}
      </div>
    </div>
  );
};

export default BankBrokersList;
