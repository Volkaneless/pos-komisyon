
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
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-b border-gray-200">
        <AccordionTrigger className="py-5 text-left font-medium text-gray-800 hover:text-primary hover:no-underline">
          {provider.name} Nedir?
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 pt-1 pb-5">
          {provider.name}, işletmelerin ödemelerini güvenli ve hızlı bir şekilde alabilmeleri için sunulan bir POS çözümüdür. Modern teknoloji altyapısı ve kullanıcı dostu arayüzü ile işletmelerin ihtiyaçlarına yönelik kapsamlı çözümler sunar.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="border-b border-gray-200">
        <AccordionTrigger className="py-5 text-left font-medium text-gray-800 hover:text-primary hover:no-underline">
          {provider.name} Komisyon Oranları Nedir?
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 pt-1 pb-5">
          {provider.name} komisyon oranları işlem hacminize ve sektörünüze göre {provider.commission_rate} arasında değişmektedir. Detaylı bilgi için müşteri temsilcilerimizle iletişime geçebilirsiniz.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" className="border-b border-gray-200">
        <AccordionTrigger className="py-5 text-left font-medium text-gray-800 hover:text-primary hover:no-underline">
          {provider.name} Müşteri Hizmetleri
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 pt-1 pb-5">
          {provider.name} müşteri hizmetleri 7/24 hizmet vermektedir. Teknik destek, başvuru durumu sorgulama ve genel bilgi alma gibi konularda müşteri hizmetlerimize ulaşabilirsiniz.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4" className="border-b border-gray-200">
        <AccordionTrigger className="py-5 text-left font-medium text-gray-800 hover:text-primary hover:no-underline">
          {provider.name} Destek Hattı Var Mı?
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 pt-1 pb-5">
          Evet, {provider.name} 7/24 destek hattı bulunmaktadır. Teknik sorunlar, işlem soruları ve diğer konularda destek ekibimize ulaşabilirsiniz.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5" className="border-b border-gray-200">
        <AccordionTrigger className="py-5 text-left font-medium text-gray-800 hover:text-primary hover:no-underline">
          {provider.name} Kampanyası Var Mı?
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 pt-1 pb-5">
          {provider.name} düzenli olarak avantajlı kampanyalar sunmaktadır. Mevcut kampanyalar hakkında güncel bilgi almak için müşteri temsilcilerimizle iletişime geçebilir veya web sitemizi ziyaret edebilirsiniz.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6" className="border-b border-gray-200">
        <AccordionTrigger className="py-5 text-left font-medium text-gray-800 hover:text-primary hover:no-underline">
          {provider.name} Başvurusu Nasıl Yapılır?
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 pt-1 pb-5">
          {provider.name} başvurusu için web sitemizden online başvuru yapabilir veya müşteri temsilcilerimizle iletişime geçebilirsiniz. Başvuru için gerekli belgeler: vergi levhası, kimlik fotokopisi ve işletme belgesidir.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-7" className="border-b border-gray-200">
        <AccordionTrigger className="py-5 text-left font-medium text-gray-800 hover:text-primary hover:no-underline">
          {provider.name} İptal Nasıl Yapılır?
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 pt-1 pb-5">
          {provider.name} hizmetinizi iptal etmek için müşteri hizmetlerimizi arayabilir veya en yakın şubemizi ziyaret edebilirsiniz. İptal işlemi için gerekli belgeler ve prosedürler hakkında detaylı bilgi alabilirsiniz.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default POSProviderFAQ;
