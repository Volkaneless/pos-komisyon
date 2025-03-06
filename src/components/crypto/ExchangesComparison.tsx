
import { cryptoExchanges, turkishExchanges, internationalExchanges } from "@/data/cryptoExchanges";
import ExchangeCard from "./ExchangeCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ExchangesComparison = () => {
  const [viewAll, setViewAll] = useState(false);
  
  return (
    <div>
      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">Tüm Borsalar</TabsTrigger>
          <TabsTrigger value="turkish">Türk Borsaları</TabsTrigger>
          <TabsTrigger value="international">Uluslararası Borsalar</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-6">
          <div className="space-y-6">
            {cryptoExchanges.slice(0, viewAll ? cryptoExchanges.length : 5).map((exchange) => (
              <ExchangeCard key={exchange.id} exchange={exchange} />
            ))}
          </div>
          
          {cryptoExchanges.length > 5 && !viewAll && (
            <div className="flex justify-center mt-8">
              <Button 
                onClick={() => setViewAll(true)}
                variant="outline"
              >
                Tüm Borsaları Göster
              </Button>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="turkish" className="mt-6">
          <div className="space-y-6">
            {turkishExchanges.map((exchange) => (
              <ExchangeCard key={exchange.id} exchange={exchange} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="international" className="mt-6">
          <div className="space-y-6">
            {internationalExchanges.map((exchange) => (
              <ExchangeCard key={exchange.id} exchange={exchange} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ExchangesComparison;
