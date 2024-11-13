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
          <AccordionTrigger>POS başvurusu nasıl yapılır?</AccordionTrigger>
          <AccordionContent>
            POS başvurusu yapmak için ilgilendiğiniz POS çözümünün "Hemen Başvur" butonuna tıklayarak başvuru formunu doldurabilirsiniz.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>POS cihazı için aylık ücret ödemem gerekiyor mu?</AccordionTrigger>
          <AccordionContent>
            Bu durum seçtiğiniz POS çözümüne göre değişiklik gösterir. Bazı bankalar aylık sabit ücret alırken, bazıları herhangi bir ücret talep etmemektedir.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Komisyon oranları nasıl belirleniyor?</AccordionTrigger>
          <AccordionContent>
            Komisyon oranları, işletmenizin aylık ciro hacmi, sektörünüz ve tercih ettiğiniz banka/finans kuruluşuna göre değişiklik gösterebilir.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Taksitli satış yapabilir miyim?</AccordionTrigger>
          <AccordionContent>
            Evet, birçok POS çözümü taksitli satış imkanı sunmaktadır. Taksit seçenekleri ve komisyon oranları bankalara göre farklılık gösterebilir.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;