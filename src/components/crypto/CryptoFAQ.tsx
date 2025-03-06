
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CryptoFAQ = () => {
  const faqs = [
    {
      question: "Kripto para borsasında komisyon oranları neye göre belirlenir?",
      answer: "Kripto para borsalarındaki komisyon oranları, genellikle işlem türüne (maker/taker), işlem hacmine ve kullanıcının borsa tokeni tutup tutmadığına göre değişiklik gösterir. Maker emirleri (emir defterinde bekleyen emirler) genellikle daha düşük komisyona sahiptir, çünkü bunlar piyasaya likidite sağlar. Taker emirleri (anında eşleşen emirler) ise likidite tükettiği için daha yüksek komisyona tabidir."
    },
    {
      question: "En düşük komisyon oranlı kripto para borsaları hangileridir?",
      answer: "Binance, OKX ve Bybit gibi büyük global borsalar genelde düşük komisyon oranları sunmaktadır. Özellikle bu borsaların kendi tokenlerini tutarsanız (BNB, OKB gibi), komisyon oranlarınızda indirim elde edebilirsiniz. Ancak sadece komisyon oranlarına bakarak borsa seçmek doğru değildir; güvenlik, likidite ve kullanıcı deneyimi gibi faktörler de göz önünde bulundurulmalıdır."
    },
    {
      question: "Kripto para borsalarında komisyon dışında ne gibi maliyetler vardır?",
      answer: "Kripto para borsalarında işlem komisyonları dışında para yatırma/çekme ücretleri, ağ (blockchain) transfer ücretleri ve bazen de inaktivite ücretleri gibi ek maliyetler olabilir. Özellikle kripto paraları harici cüzdanlara çekerken ağ ücretleri önemli bir maliyet oluşturabilir. Bazı borsalar belirli kripto paralar için ücretsiz çekim imkanı sunabilir."
    },
    {
      question: "Türkiye'de kripto para kullanımı yasal mı?",
      answer: "Türkiye'de kripto paraların alım satımı yasal olmakla birlikte, 16 Nisan 2021'de yürürlüğe giren düzenleme ile kripto varlıkların ödemelerde doğrudan kullanılması yasaklanmıştır. Yani kripto paraları yatırım aracı olarak alıp satabilirsiniz, ancak bunlarla doğrudan mal ve hizmet satın alamazsınız. Ayrıca, kripto para borsaları MASAK (Mali Suçları Araştırma Kurulu) düzenlemelerine tabidir."
    },
    {
      question: "Kripto para borsalarında varlıklarım güvende mi?",
      answer: "Kripto para borsalarındaki güvenlik seviyesi borsadan borsaya değişiklik gösterir. Güvenilir borsalar, müşteri fonlarının çoğunu soğuk depolama (offline) cüzdanlarda tutar, iki faktörlü kimlik doğrulama (2FA) gibi güvenlik önlemleri sunar ve düzenli güvenlik denetimleri yaptırır. Ancak hiçbir borsa %100 güvenli değildir. Bu nedenle, büyük miktarda kripto para için kişisel donanım cüzdanları (hardware wallet) kullanılması tavsiye edilir."
    },
    {
      question: "Hangi kripto para borsası yeni başlayanlar için daha uygundur?",
      answer: "Coinbase, Binance ve yerel olarak Paribu, BtcTürk gibi borsalar kullanıcı dostu arayüzleri ile yeni başlayanlar için iyi seçeneklerdir. Bu borsalar genellikle basit ve sezgisel arayüzler, eğitim materyalleri ve müşteri desteği sunarlar. Ayrıca mobil uygulamaları da kullanım kolaylığı sağlar. Ancak yeni başlayanların düşük miktarlarla başlaması ve riski anlamaları önemlidir."
    }
  ];

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-6">Sık Sorulan Sorular</h2>
      
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
            <AccordionTrigger className="text-left font-medium py-4">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default CryptoFAQ;
