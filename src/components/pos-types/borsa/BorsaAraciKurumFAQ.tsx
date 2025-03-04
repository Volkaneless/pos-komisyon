
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const BorsaAraciKurumFAQ = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Sık Sorulan Sorular</h2>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Borsa aracı kurumu seçerken nelere dikkat etmeliyim?</AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-700">
              Borsa aracı kurumu seçerken komisyon oranları, işlem platformunun kullanım kolaylığı, müşteri hizmetleri kalitesi, eğitim ve analiz desteği, mobil uygulama özellikleri ve kurumun güvenilirliği gibi faktörleri değerlendirmelisiniz. Ayrıca, yatırım stratejinize uygun ek hizmetler sunan kurumları tercih etmek avantajlı olacaktır.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Borsa komisyon oranları nasıl hesaplanır?</AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-700">
              Borsa komisyon oranları genellikle işlem tutarının belirli bir yüzdesi olarak hesaplanır. Komisyon hesaplaması, işlem tutarı × komisyon oranı formülü ile yapılır. Bazı aracı kurumlar sabit komisyon, bazıları ise kademeli komisyon yapısı uygulayabilir. Ayrıca BSMV gibi vergi ve harçlar da toplam maliyete eklenir.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>En düşük komisyon oranlı aracı kurumlar hangileridir?</AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-700">
              En düşük komisyon oranları genellikle dijital aracı kurumlarda bulunur. Midas, Slayz, Piapiri gibi yeni nesil aracı kurumlar düşük komisyon oranları sunmaktadır. Ancak komisyon dışında sunulan hizmetler de önemlidir, sadece düşük komisyona bakarak karar vermemeniz önerilir.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Borsa aracı kurumları arasında hesap taşıma işlemi nasıl yapılır?</AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-700">
              Hesap taşıma işlemi için yeni aracı kuruma başvurmanız ve hesap açmanız gerekir. Ardından virman formu doldurarak mevcut aracı kurumunuzdaki hisselerinizi yeni hesabınıza aktarabilirsiniz. Bu süreç elektronik olarak 1-3 iş günü içinde tamamlanır. Bazı aracı kurumlar bu süreçte yardımcı olabilir ve teşvik olarak komisyon indirimleri sunabilir.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Yurt dışı borsalarda işlem yapmak için neler gereklidir?</AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-700">
              Yurt dışı borsalarda işlem yapmak için uluslararası piyasalara erişim sağlayan bir aracı kurum hesabına ihtiyacınız vardır. Bu aracı kurumlar genellikle W-8BEN formu gibi ek belgeleri doldurmanızı ister. Ayrıca döviz çevrimi ve uluslararası para transferi için ek maliyetler söz konusu olabilir. Günümüzde Midas, Piapiri gibi platformlar yurt dışı borsalara kolay erişim sağlamaktadır.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default BorsaAraciKurumFAQ;
