import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="max-w-3xl mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Sıkça Sorulan Sorular</h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Sanal POS Komisyon Oranları Nedir?</AccordionTrigger>
          <AccordionContent>
            Sanal POS komisyon oranları, online ödemelerde işlem başına alınan hizmet bedelidir. Bu oranlar genellikle %0.49 ile %2.69 arasında değişmektedir. Komisyon oranları, işlem hacmi, sektör ve anlaşmalı banka gibi faktörlere göre farklılık gösterebilir.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>En Uygun Sanal POS Komisyon Oranları Hangileri?</AccordionTrigger>
          <AccordionContent>
            En uygun sanal POS komisyon oranları Vallet (%0.49), PayTR (%0.59) ve Tosla İşim (%0.99) gibi fintech firmalarında bulunmaktadır. Bu oranlar işlem hacminize ve sektörünüze göre özel olarak düşürülebilir.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Sanal POS Ücretleri Ne Kadar?</AccordionTrigger>
          <AccordionContent>
            Sanal POS ücretleri genellikle aylık sabit ücret ve işlem başına komisyon olarak ikiye ayrılır. Günümüzde birçok firma aylık sabit ücret almadan, sadece işlem başına komisyon alarak hizmet vermektedir. İşlem komisyonları ortalama %0.49 ile %2.69 arasında değişmektedir.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>En Düşük Komisyonlu Sanal POS Hangisi?</AccordionTrigger>
          <AccordionContent>
            2025 yılı itibarıyla en düşük komisyonlu sanal POS hizmeti Vallet tarafından %0.49 oranıyla sunulmaktadır. Bunu PayTR (%0.59) ve Tosla İşim (%0.99) takip etmektedir. Bu oranlar işlem hacminize göre daha da düşürülebilir.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Sanal POS Firmaları Karşılaştırma Nasıl Yapılır?</AccordionTrigger>
          <AccordionContent>
            Sanal POS firmaları karşılaştırılırken komisyon oranları, taksit imkanları, teknik altyapı, entegrasyon kolaylığı, müşteri hizmetleri kalitesi ve ek özellikler gibi kriterlere bakılmalıdır. Ayrıca firmaların referansları ve pazar deneyimleri de önemli faktörlerdir.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>Sanal POS Taksit Oranları Ne Kadar?</AccordionTrigger>
          <AccordionContent>
            Sanal POS taksit oranları, taksit sayısına ve anlaşmalı bankaya göre değişiklik gösterir. Genel olarak 2-3 taksit için ek komisyon alınmazken, 6 taksit için %1-2, 9 taksit için %2-3, 12 taksit için %3-4 ek komisyon uygulanmaktadır.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger>Sanal POS Çözümleri Nedir?</AccordionTrigger>
          <AccordionContent>
            Sanal POS çözümleri, e-ticaret sitelerinde online ödeme almayı sağlayan sistemlerdir. API entegrasyonu, hazır modüller, link ile ödeme, QR kod ile ödeme gibi farklı seçenekler sunar. Ayrıca abonelik yönetimi, otomatik ödeme ve pazaryeri çözümleri gibi özel ihtiyaçlara yönelik çözümler de mevcuttur.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8">
          <AccordionTrigger>Sanal POS Maliyeti Ne Kadar?</AccordionTrigger>
          <AccordionContent>
            Sanal POS maliyeti, seçilen hizmet sağlayıcıya göre değişir. Çoğu firma kurulum ve aylık sabit ücret almadan, sadece işlem başına komisyon alır. İşlem komisyonları %0.49 ile %2.69 arasında değişmektedir. Bazı firmalar ek olarak kurulum ücreti veya aylık sabit ücret talep edebilir.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-9">
          <AccordionTrigger>Banka Sanal POS Komisyon Oranları Nedir?</AccordionTrigger>
          <AccordionContent>
            Banka sanal POS komisyon oranları genellikle %1.79 ile %2.69 arasında değişmektedir. Örneğin, Akbank %1.79, Garanti Bankası %2.09 komisyon oranı sunmaktadır. Bu oranlar işlem hacmi ve sektöre göre değişiklik gösterebilir, ayrıca özel anlaşmalarla daha uygun oranlar alınabilir.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;