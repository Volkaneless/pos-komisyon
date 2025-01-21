import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { POSProvider } from "@/types/pos";

interface POSProviderFAQProps {
  provider: POSProvider;
}

const POSProviderFAQ = ({ provider }: POSProviderFAQProps) => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-8">Sıkça Sorulan Sorular</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>{provider.name} Nedir?</AccordionTrigger>
          <AccordionContent>
            {provider.name}, işletmelerin ödemelerini güvenli ve hızlı bir şekilde alabilmeleri için sunulan bir POS çözümüdür. Modern teknoloji altyapısı ve kullanıcı dostu arayüzü ile işletmelerin ihtiyaçlarına yönelik kapsamlı çözümler sunar.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>{provider.name} Komisyon Oranları Nedir?</AccordionTrigger>
          <AccordionContent>
            {provider.name} komisyon oranları işlem hacminize ve sektörünüze göre {provider.commission_rate} arasında değişmektedir. Detaylı bilgi için müşteri temsilcilerimizle iletişime geçebilirsiniz.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>{provider.name} Müşteri Hizmetleri</AccordionTrigger>
          <AccordionContent>
            {provider.name} müşteri hizmetleri 7/24 hizmet vermektedir. Teknik destek, başvuru durumu sorgulama ve genel bilgi alma gibi konularda müşteri hizmetlerimize ulaşabilirsiniz.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>{provider.name} Destek Hattı Var Mı?</AccordionTrigger>
          <AccordionContent>
            Evet, {provider.name} 7/24 destek hattı bulunmaktadır. Teknik sorunlar, işlem soruları ve diğer konularda destek ekibimize ulaşabilirsiniz.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>{provider.name} Kampanyası Var Mı?</AccordionTrigger>
          <AccordionContent>
            {provider.name} düzenli olarak avantajlı kampanyalar sunmaktadır. Mevcut kampanyalar hakkında güncel bilgi almak için müşteri temsilcilerimizle iletişime geçebilir veya web sitemizi ziyaret edebilirsiniz.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>{provider.name} Başvurusu Nasıl Yapılır?</AccordionTrigger>
          <AccordionContent>
            {provider.name} başvurusu için web sitemizden online başvuru yapabilir veya müşteri temsilcilerimizle iletişime geçebilirsiniz. Başvuru için gerekli belgeler: vergi levhası, kimlik fotokopisi ve işletme belgesidir.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger>{provider.name} İptal Nasıl Yapılır?</AccordionTrigger>
          <AccordionContent>
            {provider.name} hizmetinizi iptal etmek için müşteri hizmetlerimizi arayabilir veya en yakın şubemizi ziyaret edebilirsiniz. İptal işlemi için gerekli belgeler ve prosedürler hakkında detaylı bilgi alabilirsiniz.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default POSProviderFAQ;