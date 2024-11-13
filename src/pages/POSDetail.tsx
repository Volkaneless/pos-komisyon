import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info, CheckCircle2, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { posProviders } from "../data/posProviders";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const POSDetail = () => {
  const { id } = useParams();
  const pos = posProviders.find(p => p.id === id);

  if (!pos) {
    return <div className="container mx-auto px-4 pt-24">POS bulunamadı</div>;
  }

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="glass-card rounded-2xl p-8 mb-12">
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

        <TabsContent value="explanation" className="mt-12">
          <Card className="border-none shadow-none mb-12">
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

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              Sıkça Sorulan Sorular
            </h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Başvuru için gerekli belgeler nelerdir?</AccordionTrigger>
                <AccordionContent>
                  Başvuru için vergi levhanız, işletme sahibinin kimlik fotokopisi ve işletmenizin faaliyet belgesi gerekmektedir.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Başvuru sonrası POS kurulumu ne kadar sürer?</AccordionTrigger>
                <AccordionContent>
                  Başvurunuz onaylandıktan sonra ortalama 2-3 iş günü içerisinde POS kurulumu gerçekleştirilir.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </TabsContent>

        <TabsContent value="commissions" className="mt-12">
          <Card className="border-none shadow-none mb-12">
            <p className="text-gray-600">Tek çekim haricindeki diğer komisyon oranlarını başvuru adımında görüntüleyebilirsiniz.</p>
          </Card>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              Komisyonlar Hakkında SSS
            </h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Taksitli işlemlerde komisyon oranı değişir mi?</AccordionTrigger>
                <AccordionContent>
                  Evet, taksit sayısına göre komisyon oranları farklılık gösterebilir. Detaylı bilgi için müşteri temsilcinizle görüşebilirsiniz.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Komisyon oranları sabit midir?</AccordionTrigger>
                <AccordionContent>
                  Komisyon oranları piyasa koşullarına göre değişiklik gösterebilir. Güncel oranlar için başvuru sırasında bilgilendirileceksiniz.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </TabsContent>

        <TabsContent value="features" className="mt-12">
          <Card className="border-none shadow-none mb-12">
            <div className="space-y-4">
              {pos.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                  <p className="text-gray-600">{feature}</p>
                </div>
              ))}
            </div>
          </Card>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              Özellikler Hakkında SSS
            </h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>POS cihazı arızalanırsa ne yapmalıyım?</AccordionTrigger>
                <AccordionContent>
                  Teknik destek hattımızı arayarak arıza kaydı oluşturabilirsiniz. En kısa sürede teknik ekibimiz sorununuzla ilgilenecektir.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Yeni özellikler eklenebilir mi?</AccordionTrigger>
                <AccordionContent>
                  Evet, ihtiyaçlarınıza göre ek özellikler ve hizmetler talep edebilirsiniz. Müşteri temsilcinizle görüşerek detaylı bilgi alabilirsiniz.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default POSDetail;