import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { posProviders } from "../data/posProviders";
import { Card } from "@/components/ui/card";

const POSDetail = () => {
  const { id } = useParams();
  const pos = posProviders.find(p => p.id === id);

  if (!pos) {
    return <div className="container mx-auto px-4 pt-24">POS bulunamadı</div>;
  }

  return (
    <div className="container mx-auto px-4 pt-24">
      <div className="glass-card rounded-2xl p-8 mb-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <img src={pos.logo} alt={pos.name} className="w-16 h-16 object-contain" />
            <h1 className="font-semibold text-2xl">{pos.name}</h1>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary-hover">
            Hemen Başvur
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div>
            <p className="text-gray-500 mb-2">POS Türü</p>
            <p className="font-medium text-lg">{pos.type}</p>
          </div>
          <div>
            <p className="text-gray-500 mb-2">Aidat Ödemesi</p>
            <p className="font-medium text-lg">{pos.monthlyFee}</p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p className="text-gray-500 mb-2">Komisyon Oranı</p>
              <Info className="w-4 h-4 text-gray-400" />
            </div>
            <p className="font-medium text-lg">{pos.commissionRate}</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="explanation" className="w-full">
        <TabsList className="w-full justify-start border-b rounded-none bg-transparent space-x-8">
          <TabsTrigger 
            value="explanation" 
            className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0"
          >
            Açıklama
          </TabsTrigger>
          <TabsTrigger 
            value="commissions" 
            className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0"
          >
            Komisyon Oranları
          </TabsTrigger>
          <TabsTrigger 
            value="features" 
            className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0"
          >
            Özellikler
          </TabsTrigger>
        </TabsList>

        <TabsContent value="explanation" className="mt-8">
          <Card className="border-none shadow-none">
            <div className="space-y-6 text-gray-600">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                <p>30 Nisan 2025 tarihine kadar her ay güncel sürpriz komisyon oranlarından faydalanın!</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                <p>İlk POS'unuzu {pos.name}'den almak istiyorsanız öncelikle belli bir süre diğer işlemleriniz (ödemeler, transferler, mevduat hesapları vb.) için kullanmanız gerekmektedir.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                <p>POS başvurunuzun değerlendirmeye alınabilmesi için mevcutta herhangi bir bankanın POS'unu aktif bir şekilde kullanıyor olmanız gerekmektedir.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                <p>Kampanya, henüz müşterisi olmayan firmalar için geçerlidir.</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="commissions" className="mt-8">
          <Card className="border-none shadow-none">
            <p className="text-gray-600">Tek çekim haricindeki diğer komisyon oranlarını başvuru adımında görüntüleyebilirsiniz.</p>
          </Card>
        </TabsContent>

        <TabsContent value="features" className="mt-8">
          <Card className="border-none shadow-none">
            <div className="space-y-4">
              {pos.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                  <p className="text-gray-600">{feature}</p>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default POSDetail;