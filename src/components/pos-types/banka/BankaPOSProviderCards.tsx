
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, DollarSign, Calendar, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import type { POSProvider } from "@/types/pos";

interface BankaPOSProviderCardsProps {
  providers?: POSProvider[];
}

const BankaPOSProviderCards = ({ providers }: BankaPOSProviderCardsProps) => {
  // Eğer providers prop'u verilmediyse, varsayılan provider'ları kullan
  const defaultProviders = providers || [
    // Default providers data burada olacak - gerektiğinde eklenebilir
  ];

  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-8 text-center">En Çok Tercih Edilen Banka POS Çözümleri</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {defaultProviders.slice(0, 6).map(provider => (
          <Card key={provider.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-32 relative">
                  <img 
                    src={provider.logo || "/placeholder.svg"} 
                    alt={provider.name} 
                    className="h-full object-contain" 
                  />
                </div>
                <Tag className="text-primary w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium mb-2">{provider.name}</h3>
              <div className="flex items-center mb-1">
                <DollarSign className="w-4 h-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-700">Komisyon: %{provider.commission_rate}</span>
              </div>
              <div className="flex items-center mb-4">
                <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-700">Aylık Ücret: {provider.monthly_fee}</span>
              </div>
              <div className="space-y-2 mb-4">
                {provider.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="w-full mt-2">
                <Link to={`/pos/${provider.id}`}>Detayları Gör</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button variant="outline" asChild>
          <Link to="/calculator">Komisyon Hesapla</Link>
        </Button>
      </div>
    </section>
  );
};

export default BankaPOSProviderCards;
