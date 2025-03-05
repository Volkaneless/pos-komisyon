
import { 
  borsaAraciKurumProviders 
} from "@/data/pos-types/borsaAraciKurum";
import DigitalBrokersList from "./DigitalBrokersList";
import BankBrokersList from "./BankBrokersList";

const BorsaAraciKurumProviderCards = () => {
  // Separate digital brokers from bank brokers
  const digitalBrokers = borsaAraciKurumProviders.slice(0, 5);
  const bankBrokers = borsaAraciKurumProviders.slice(5);
  
  return (
    <div>
      <DigitalBrokersList brokers={digitalBrokers} />
      <BankBrokersList brokers={bankBrokers} />
    </div>
  );
};

export default BorsaAraciKurumProviderCards;
