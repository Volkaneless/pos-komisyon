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
          <AccordionTrigger>Yazar kasa POS cihazı almak zorunlu mu?</AccordionTrigger>
          <AccordionContent>
            Evet, belirli iş kollarında faaliyet gösteren işletmeler için yazar kasa POS cihazı kullanımı yasal bir zorunluluktur. Detaylı bilgi için vergi dairenize danışabilirsiniz.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Yazar kasa POS cihazı için aylık ücret ödemem gerekiyor mu?</AccordionTrigger>
          <AccordionContent>
            Bu durum seçtiğiniz bankaya ve POS çözümüne göre değişiklik gösterir. Bazı bankalar aylık sabit ücret alırken, bazıları sadece işlem başına komisyon almaktadır.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Yazar kasa POS cihazı arızalandığında ne yapmalıyım?</AccordionTrigger>
          <AccordionContent>
            Cihazınızın arızalanması durumunda öncelikle yetkili servis veya bankanızın teknik destek hattını aramalısınız. Geçici çözüm olarak yedek bir cihaz talep edebilirsiniz.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Yazar kasa POS cihazı için vergi indirimi var mı?</AccordionTrigger>
          <AccordionContent>
            Evet, yazar kasa POS cihazı alımları için KDV indirimi ve bazı durumlarda vergi avantajları bulunmaktadır. Güncel teşvikler için mali müşavirinize danışmanızı öneririz.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Taksitli satış yapabilir miyim?</AccordionTrigger>
          <AccordionContent>
            Evet, yazar kasa POS cihazları ile taksitli satış yapabilirsiniz. Taksit seçenekleri ve komisyon oranları bankalara göre farklılık gösterebilir.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;