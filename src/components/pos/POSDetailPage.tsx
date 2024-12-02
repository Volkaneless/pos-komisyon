import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Phone, FileText, CreditCard } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import POSHeader from "./POSHeader";
import POSInfo from "./POSInfo";
import type { POSProvider } from "@/types/pos";

interface POSDetailPageProps {
  provider: POSProvider;
}

const POSDetailPage = ({ provider }: POSDetailPageProps) => {
  if (!provider) {
    return (
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-2xl font-bold">POS sağlayıcı bulunamadı</h1>
      </div>
    );
  }

  const currentYear = new Date().getFullYear();
  const pageTitle = `${provider.name} Komisyon Oranları & ${provider.name} Destek Hattı`;
  const pageDescription = `${currentYear} ${provider.name} komisyon oranları: ${provider.type} için ${provider.commission_rate} komisyon oranı ve ${provider.monthly_fee} aylık ücret. Güncel ${provider.name} başvuru şartları, destek hattı ve detaylı bilgiler.`;

  console.log('Rendering POSDetailPage for provider:', provider);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`https://poskomisyon.com/pos/${provider.id}`} />
      </Helmet>
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="glass-card rounded-2xl p-8 mb-12">
          <POSHeader provider={provider} />
          <POSInfo provider={provider} />
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

          <TabsContent value="explanation" className="mt-12">
            <Card className="border-none shadow-none mb-12">
              <div className="space-y-6 text-gray-600">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                  <p>{currentYear} yılı sonuna kadar özel komisyon oranlarından faydalanın!</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                  <p>İlk POS'unuzu {provider.name}'den almak için hemen başvurun, size özel avantajlardan yararlanın.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                  <p>Hızlı başvuru süreci ve kolay kullanım imkanı ile işletmenizi büyütün.</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="commissions" className="mt-12">
            <Card className="border-none shadow-none mb-12">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Komisyon Oranları Detayları</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Tek Çekim İşlemler</h4>
                    <p className="text-gray-600">{provider.commission_rate}</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Taksitli İşlemler</h4>
                    <p className="text-gray-600">Taksit sayısına göre değişkenlik gösterir</p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="features" className="mt-12">
            <Card className="border-none shadow-none mb-12">
              <div className="space-y-4">
                {provider.features.map((feature, index) => (
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
    </>
  );
};

export default POSDetailPage;