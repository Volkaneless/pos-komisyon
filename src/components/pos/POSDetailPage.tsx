import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info, CheckCircle2, HelpCircle, Phone, FileText, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { POSProvider } from "@/types/pos";

interface POSDetailPageProps {
  provider: POSProvider;
}

const POSDetailPage = ({ provider }: POSDetailPageProps) => {
  const currentYear = new Date().getFullYear();
  const pageTitle = `${provider.name} Komisyon Oranları & ${provider.name} Destek Hattı`;
  const pageDescription = `${currentYear} ${provider.name} komisyon oranları: ${provider.type} için ${provider.commission_rate} komisyon oranı ve ${provider.monthly_fee} aylık ücret. Güncel ${provider.name} başvuru şartları, destek hattı ve detaylı bilgiler.`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`https://poskomisyon.com/pos/${provider.id}`} />
      </Helmet>
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <img src={provider.logo} alt={provider.name} className="w-16 h-16 object-contain" />
              <h1 className="font-semibold text-2xl">{provider.name}</h1>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary-hover">
              Hemen Başvur
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div>
              <p className="text-gray-500 mb-2">POS Türü</p>
              <p className="font-medium text-lg">{provider.type}</p>
            </div>
            <div>
              <p className="text-gray-500 mb-2">Aidat Ödemesi</p>
              <p className="font-medium text-lg">{provider.monthly_fee}</p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p className="text-gray-500 mb-2">Komisyon Oranı</p>
                <Info className="w-4 h-4 text-gray-400" />
              </div>
              <p className="font-medium text-lg">{provider.commission_rate}</p>
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
            <TabsTrigger 
              value="support" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0"
            >
              Destek Hattı
            </TabsTrigger>
            <TabsTrigger 
              value="requirements" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0"
            >
              Başvuru Şartları
            </TabsTrigger>
            <TabsTrigger 
              value="fees" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0"
            >
              Ücretler
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

          <TabsContent value="support" className="mt-12">
            <Card className="border-none shadow-none mb-12">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">7/24 Destek Hattı</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 border rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <Phone className="w-6 h-6 text-primary" />
                      <h4 className="font-medium">Teknik Destek</h4>
                    </div>
                    <p className="text-gray-600 mb-2">0850 XXX XX XX</p>
                    <p className="text-sm text-gray-500">7/24 teknik destek hattımız arıza ve sorunlarınız için hizmetinizdedir.</p>
                  </div>
                  <div className="p-6 border rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <Phone className="w-6 h-6 text-primary" />
                      <h4 className="font-medium">Müşteri Hizmetleri</h4>
                    </div>
                    <p className="text-gray-600 mb-2">0850 XXX XX XX</p>
                    <p className="text-sm text-gray-500">Genel bilgi ve başvuru süreçleri için müşteri hizmetlerimiz size yardımcı olacaktır.</p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="requirements" className="mt-12">
            <Card className="border-none shadow-none mb-12">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Başvuru Şartları ve Gerekli Belgeler</h3>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium mb-1">Vergi Levhası</p>
                      <p className="text-gray-600">Güncel vergi levhanızın fotokopisi</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium mb-1">Kimlik Fotokopisi</p>
                      <p className="text-gray-600">İşletme sahibinin kimlik fotokopisi</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium mb-1">İmza Sirküleri</p>
                      <p className="text-gray-600">Şirket imza sirkülerinin fotokopisi</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="fees" className="mt-12">
            <Card className="border-none shadow-none mb-12">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">POS Ücretleri ve Maliyetler</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 border rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <CreditCard className="w-6 h-6 text-primary" />
                      <h4 className="font-medium">Aylık POS Ücreti</h4>
                    </div>
                    <p className="text-xl font-semibold text-primary mb-2">{provider.monthly_fee}</p>
                    <p className="text-sm text-gray-500">POS cihazı için aylık sabit ücret</p>
                  </div>
                  <div className="p-6 border rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <CreditCard className="w-6 h-6 text-primary" />
                      <h4 className="font-medium">Komisyon Oranı</h4>
                    </div>
                    <p className="text-xl font-semibold text-primary mb-2">{provider.commission_rate}</p>
                    <p className="text-sm text-gray-500">Her işlem için alınan komisyon oranı</p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default POSDetailPage;