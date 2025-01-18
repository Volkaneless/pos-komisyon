import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CepPOSFAQ = () => {
  return (
    <div className="max-w-3xl mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Sıkça Sorulan Sorular</h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Cep POS Nedir?</AccordionTrigger>
          <AccordionContent>
            Cep POS, akıllı telefonları ödeme terminaline dönüştüren yenilikçi bir ödeme çözümüdür. Bluetooth kart okuyucu veya NFC teknolojisi ile kredi kartı ödemelerini güvenle almanızı sağlar. Ek donanım maliyeti olmadan, mevcut akıllı telefonunuzu POS cihazına dönüştürebilirsiniz.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Cep POS Komisyon Oranları Ne Kadar?</AccordionTrigger>
          <AccordionContent>
            Cep POS komisyon oranları genellikle %1.49 ile %2.99 arasında değişmektedir. Bu oranlar işlem hacminize ve kullandığınız hizmet sağlayıcıya göre farklılık gösterebilir. Bazı firmalar aylık sabit ücret almazken, bazıları ek hizmetler için ücret talep edebilir.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Cep POS Güvenli mi?</AccordionTrigger>
          <AccordionContent>
            Evet, Cep POS sistemleri son derece güvenlidir. Tüm işlemler SSL şifreleme ile korunur ve PCI DSS standartlarına uyumludur. Kart bilgileri cihazda saklanmaz ve her işlem için özel güvenlik protokolleri uygulanır.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Cep POS Kurulumu Nasıl Yapılır?</AccordionTrigger>
          <AccordionContent>
            Cep POS kurulumu oldukça basittir. İlgili uygulamayı App Store veya Google Play'den indirip, hesap oluşturmanız yeterlidir. Gerekli evrakları yükledikten sonra hesabınız onaylanır ve hemen kullanmaya başlayabilirsiniz.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Hangi Telefonlar Cep POS Olarak Kullanılabilir?</AccordionTrigger>
          <AccordionContent>
            Android 6.0 ve üzeri veya iOS 11 ve üzeri işletim sistemine sahip akıllı telefonlar Cep POS olarak kullanılabilir. NFC özellikli telefonlar temassız ödemeleri de kabul edebilir. Bluetooth kart okuyucu ile tüm akıllı telefonlar uyumludur.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>Cep POS ile Taksitli Satış Yapılabilir mi?</AccordionTrigger>
          <AccordionContent>
            Evet, Cep POS sistemleri ile taksitli satış yapabilirsiniz. Genellikle 2-12 ay arası taksit seçenekleri sunulur. Taksit komisyonları banka ve hizmet sağlayıcıya göre değişiklik gösterir.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger>Cep POS Başvurusu Nasıl Yapılır?</AccordionTrigger>
          <AccordionContent>
            Cep POS başvurusu için seçtiğiniz hizmet sağlayıcının web sitesinden veya mobil uygulamasından başvuru yapabilirsiniz. Vergi levhası, kimlik fotokopisi ve banka hesap bilgileri gibi temel evraklar gereklidir. Başvuru süreci genellikle 1-2 iş günü içinde tamamlanır.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CepPOSFAQ;