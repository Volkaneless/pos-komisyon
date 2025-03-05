
import { 
  borsaAraciKurumProviders 
} from "@/data/pos-types/borsaAraciKurum";
import DigitalBrokersList from "./DigitalBrokersList";
import BankBrokersList from "./BankBrokersList";
import BrokerCard from "./BrokerCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BorsaAraciKurumProviderCards = () => {
  // Separate brokers by type
  const digitalBrokers = borsaAraciKurumProviders.filter(broker => 
    broker.id.includes("midas") || 
    broker.id.includes("matriks") || 
    broker.id.includes("piapiri") ||
    broker.id.includes("forinvest") ||
    broker.id.includes("slayz")
  );
  
  const bankBrokers = borsaAraciKurumProviders.filter(broker => 
    broker.id.includes("is-yatirim") ||
    broker.id.includes("garanti") ||
    broker.id.includes("ziraat") ||
    broker.id.includes("vakif") ||
    broker.id.includes("halk") ||
    broker.id.includes("yapi-kredi")
  );

  const otherBrokers = borsaAraciKurumProviders.filter(broker => 
    !digitalBrokers.includes(broker) && !bankBrokers.includes(broker)
  );
  
  const [viewAll, setViewAll] = useState(false);
  
  return (
    <div>
      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">Tüm Aracı Kurumlar</TabsTrigger>
          <TabsTrigger value="digital">Dijital Aracı Kurumlar</TabsTrigger>
          <TabsTrigger value="bank">Banka Aracı Kurumlar</TabsTrigger>
          <TabsTrigger value="other">Bağımsız Aracı Kurumlar</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-6">
          <DigitalBrokersList brokers={digitalBrokers} />
          <BankBrokersList brokers={bankBrokers} />
          
          {otherBrokers.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Bağımsız Aracı Kurumlar</h2>
              <div className="space-y-6 mb-12">
                {otherBrokers.slice(0, viewAll ? otherBrokers.length : 5).map((provider) => (
                  <BrokerCard key={provider.id} provider={provider} />
                ))}
              </div>
              
              {otherBrokers.length > 5 && !viewAll && (
                <div className="flex justify-center mb-8">
                  <Button 
                    onClick={() => setViewAll(true)}
                    variant="outline"
                  >
                    Tüm Aracı Kurumları Göster
                  </Button>
                </div>
              )}
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="digital" className="mt-6">
          <DigitalBrokersList brokers={digitalBrokers} />
        </TabsContent>
        
        <TabsContent value="bank" className="mt-6">
          <BankBrokersList brokers={bankBrokers} />
        </TabsContent>
        
        <TabsContent value="other" className="mt-6">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Bağımsız Aracı Kurumlar</h2>
            <div className="space-y-6 mb-12">
              {otherBrokers.map((provider) => (
                <BrokerCard key={provider.id} provider={provider} />
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BorsaAraciKurumProviderCards;
