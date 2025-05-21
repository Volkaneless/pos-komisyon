
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Sıkça Sorulan Sorular</h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>POS cihazı komisyon oranları nasıl belirlenir?</AccordionTrigger>
              <AccordionContent>
                POS cihazı komisyon oranları, bankanın politikası, işletmenin cirosu, sektörü, taksit seçenekleri ve pazarlık gücüne göre belirlenir. Genellikle peşin işlemlerde %0.75-1.90, taksitli işlemlerde taksit sayısına göre %1.50-6.00 arasında değişebilir.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>En düşük komisyon oranlı POS hangisidir?</AccordionTrigger>
              <AccordionContent>
                En düşük komisyon oranlı POS'lar genellikle yüksek cirolu işletmelere özel anlaşmalar ile sunulan çözümler veya bazı FinTech şirketlerinin sunduğu yeni nesil POS çözümleridir. İşletme tipinize ve ihtiyaçlarınıza göre en uygun seçenek değişiklik gösterebilir.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>POS cihazı için hangi belgeler gereklidir?</AccordionTrigger>
              <AccordionContent>
                POS başvurusu için genellikle işletme sahiplerinin kimlik fotokopileri, vergi levhası, imza sirküleri, ticaret sicil gazetesi, kira kontratı veya tapu fotokopisi ve işletme hesap cüzdanı fotokopisi gereklidir. Bazı durumlarda son 3 aylık hesap hareketleri de istenebilir.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>POS başvurusu ne kadar sürede sonuçlanır?</AccordionTrigger>
              <AccordionContent>
                POS başvurusu genellikle tüm belgelerin eksiksiz teslim edilmesi durumunda 2-5 iş günü içerisinde sonuçlanır. Bazı bankalar aynı gün içinde bile kurulum yapabilirken, yoğun dönemlerde bu süre uzayabilir.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>Taksitli satış yapmak için ne gerekiyor?</AccordionTrigger>
              <AccordionContent>
                Taksitli satış yapabilmek için bankayla yapılan POS sözleşmesinde taksit seçeneğinin bulunması gerekiyor. Ayrıca sektörünüze bağlı olarak yasal taksit sınırlamalarına dikkat etmek zorunludur. Taksitli satışlarda komisyon oranları daha yüksek olacaktır.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger>Aylık POS kullanım ücreti ne kadardır?</AccordionTrigger>
              <AccordionContent>
                Aylık POS kullanım ücretleri bankadan bankaya değişmekle birlikte, genellikle aylık 100-300 TL arasındadır. Bazı bankalar belirli bir ciro taahhüdü karşılığında bu ücreti almayabilir veya indirim yapabilir.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7">
              <AccordionTrigger>POS cihazı arızalandığında ne yapmalıyım?</AccordionTrigger>
              <AccordionContent>
                POS cihazı arızalandığında ilk olarak banka müşteri hizmetlerini aramanız gerekir. Teknik destek ekibi uzaktan çözüm bulamadığı durumlarda yerinde servis desteği veya cihaz değişimi sağlanacaktır.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-8">
              <AccordionTrigger>Farklı bankalardan birden fazla POS cihazı alabilir miyim?</AccordionTrigger>
              <AccordionContent>
                Evet, işletmeniz farklı bankalardan birden fazla POS cihazı alabilir. Ancak her banka için ayrı başvuru yapmanız ve ayrı sözleşme imzalamanız gerekecektir. Çoklu POS kullanımı işletme maliyetlerini artırabilir.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
