
import { Card } from "@/components/ui/card";
import { borsaAraciKurumProviders } from "@/data/pos-types/borsaAraciKurum";

const BorsaAraciKurumProviderCards = () => {
  // Separate digital brokers from bank brokers
  const digitalBrokers = borsaAraciKurumProviders.slice(0, 5);
  const bankBrokers = borsaAraciKurumProviders.slice(5);
  
  return (
    <div>
      <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 mt-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Dijital Aracı Kurumlar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {digitalBrokers.map((provider) => (
            <Card key={provider.id} className="p-4 bg-white hover:shadow-lg transition-shadow">
              <img 
                src={provider.logo} 
                alt={provider.name} 
                className="h-12 object-contain mb-4" 
              />
              <h3 className="font-semibold text-gray-800 mb-2">{provider.name}</h3>
              <p className="text-sm text-gray-600 mb-2">Komisyon: {provider.commission_rate}</p>
              <p className="text-sm text-primary font-medium">{provider.monthly_fee}</p>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 mt-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Banka Aracı Kurumlar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bankBrokers.map((provider) => (
            <Card key={provider.id} className="p-4 bg-white hover:shadow-lg transition-shadow">
              <img 
                src={provider.logo} 
                alt={provider.name} 
                className="h-12 object-contain mb-4" 
              />
              <h3 className="font-semibold text-gray-800 mb-2">{provider.name}</h3>
              <p className="text-sm text-gray-600 mb-2">Komisyon: {provider.commission_rate}</p>
              <p className="text-sm text-primary font-medium">{provider.monthly_fee}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BorsaAraciKurumProviderCards;
