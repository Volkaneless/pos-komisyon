import CompoundInterestCalculator from "@/components/compound-interest/CompoundInterestCalculator";
import EnhancedMetaTags from "@/components/SEO/EnhancedMetaTags";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CompoundInterestCalculatorPage = () => {
  return (
    <>
      <EnhancedMetaTags
        title="Bileşik Faiz Hesaplama | Bileşik Getiri Hesaplama Formülü"
        description="Bileşik faiz hesaplama aracı ile yatırımlarınızın geleceğini planlayın. Günlük, aylık ve yıllık bileşik faiz hesaplama formülleri, örnekler ve bankalar hakkında detaylı bilgi."
        keywords="bileşik faiz hesaplama, bileşik faiz formülü, bileşik getiri hesaplama, günlük bileşik faiz, aylık bileşik faiz, yıllık bileşik faiz, bileşik faiz veren bankalar"
        canonicalPath="/bilesik-faiz-hesaplama"
        ogType="website"
        schemaType="WebSite"
        
      />
      
      <div className="container mx-auto px-4 pt-24 pb-12 min-h-screen">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Bileşik Faiz Hesaplama | Bileşik Getiri Hesaplama Formülü
          </h1>
          <div className="text-lg md:text-xl text-gray-600 mb-4 text-left">
            <p>
              Bileşik faiz, yatırımlarınızın hem ana para hem de elde edilen faiz üzerinden tekrar faiz kazanmasını sağlayan güçlü bir finansal araçtır. Bu sayfada, bileşik faiz nedir sorusunun yanıtından başlayarak bileşik faiz hesaplama formülü, bileşik getiri örnekleri, aylık, yıllık ve günlük bileşik faiz hesaplama yöntemleri gibi tüm detaylara ulaşabilirsiniz. Ayrıca bileşik faiz hesaplama aracı ile yatırımlarınızı kolayca analiz edebilirsiniz.
            </p>
          </div>
        </div>

        <div className="glass-card rounded-xl p-8 max-w-6xl w-full mx-auto animate-fade-in mb-16">
          <CompoundInterestCalculator />
        </div>

        <article className="prose prose-lg max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Bileşik Faiz Nedir?</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <p className="mb-4">
              Bileşik faiz, yatırımcının ana parasının yanı sıra önceki dönemlerde kazanılan faizlerin de faiz getirmesi prensibine dayanan bir hesaplama yöntemidir. Basit faizden farklı olarak, bileşik faizde kazanılan faizler ana paraya eklenerek bir sonraki dönemde faiz hesaplama tabanını genişletir.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Bileşik Faiz ile Basit Faiz Arasındaki Fark</h3>
            <p className="mb-4">
              Basit faizde sadece ana para üzerinden faiz hesaplanırken, bileşik faizde kazanılan faizler de ana paraya eklenerek "faiz üzerine faiz" etkisi yaratılır. Bu durum uzun vadede önemli farklar oluşturur ve Einstein'ın "evrenin en güçlü kuvveti" olarak nitelendirdiği bir finansal güçtür.
            </p>

            <h3 className="text-xl font-semibold mb-4">Finansal Büyümedeki Rolü</h3>
            <p className="mb-4">
              Bileşik faiz, uzun vadeli finansal planlamada kritik rol oynar. Yatırım, mevduat, borsa ve emeklilik planlamasında bileşik faiz etkisini anlamak, doğru kararlar vermenin temelini oluşturur.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6">Bileşik Faiz Hesaplama Formülü</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-4">Genel Formül</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="font-mono text-lg text-center">FV = PV × (1 + r)^n</p>
              <p className="text-sm text-gray-600 mt-2">
                FV: Gelecek Değer, PV: Şimdiki Değer, r: Faiz Oranı, n: Dönem Sayısı
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4">Aylık Bileşik Faiz Hesaplama Formülü</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="font-mono">FV = PV × (1 + r/12)^(12×t)</p>
              <p className="text-sm text-gray-600 mt-2">
                Aylık bileşik faiz hesaplamasında faiz oranı 12'ye bölünür ve dönem sayısı 12 ile çarpılır.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4">Günlük Bileşik Faiz Hesaplama Formülü</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="font-mono">FV = PV × (1 + r/365)^(365×t)</p>
              <p className="text-sm text-gray-600 mt-2">
                Günlük bileşik faiz en hızlı büyüme sağlayan yöntemdir ancak pratikte nadiren uygulanır.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4">Yıllık Bileşik Faiz Hesaplama Formülü</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="font-mono">FV = PV × (1 + r)^t</p>
              <p className="text-sm text-gray-600 mt-2">
                En yaygın kullanılan bileşik faiz hesaplama yöntemidir.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Bileşik Faiz Örnekleri</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-4">10.000 TL ile Yıllık %20 Faizle 5 Yılda Ne Kadar Kazanırım?</h3>
            <p className="mb-4">
              10.000 TL ana para ile yıllık %20 bileşik faizle 5 yıl sonunda:
              FV = 10.000 × (1 + 0.20)^5 = 10.000 × 2.49 = 24.900 TL
              Toplam kazanç: 14.900 TL
            </p>

            <h3 className="text-xl font-semibold mb-4">Aylık 1.000 TL Ek Yatırımla 10 Yılda Toplam Getiri</h3>
            <p className="mb-4">
              Ana para 50.000 TL, aylık 1.000 TL ek yatırım, yıllık %15 bileşik faizle 10 yıl sonunda yaklaşık 400.000 TL'ye ulaşabilirsiniz. Bu bileşik faiz hesaplama örneği, düzenli yatırımın gücünü gösterir.
            </p>

            <h3 className="text-xl font-semibold mb-4">Borsa Bileşik Getiri ile Uzun Vadeli Kazanç Örneği</h3>
            <p className="mb-4">
              Borsada 10 yıllık bileşik faiz hesaplama ile ortalama %12 yıllık getiri sağlayan bir portföy, 100.000 TL'yi 310.000 TL'ye çıkarabilir. Borsa bileşik getiri, sabırlı yatırımcılar için en etkili zenginlik yaratma yollarından biridir.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6">Bileşik Faiz Veren Bankalar</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <p className="mb-4">
              Türkiye'de bazı bankalar bileşik mevduat faizi hesaplama sistemi sunmaktadır. Bileşik faiz veren bankalar arasında özel bankalar ve katılım bankaları öne çıkmaktadır.
            </p>

            <h3 className="text-xl font-semibold mb-4">Mevduat Örnekleri</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Uzun vadeli mevduat hesapları (1 yıl ve üzeri)</li>
              <li>Biriktirme mevduatları</li>
              <li>Emeklilik bireysel emeklilik sistemleri</li>
              <li>Yatırım fonları ve borsa yatırımları</li>
            </ul>

            <p className="mb-4">
              Bileşik mevduat faizi hesaplama konusunda bankanızdan detaylı bilgi almanız önerilir.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6">Basit Faizden Bileşik Faize Dönüştürme</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-4">Basit Faiz ile Bileşik Faiz Farkı</h3>
            <p className="mb-4">
              Basit faiz hesaplama sadece ana para üzerinden yapılırken, bileşik faizde kazanılan faizler de hesaplamaya dahil edilir. Bu fark zaman içinde katlanarak büyür.
            </p>

            <h3 className="text-xl font-semibold mb-4">Dönüştürme Formülü</h3>
            <p className="mb-4">
              Aylık faizi yıllık bileşik faize çevirme formülü: (1 + aylık_faiz)^12 - 1
              Örneğin aylık %2 faiz, yıllık %26.8 bileşik faize eşittir.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6">Sıkça Sorulan Sorular</h2>
          
          <Accordion type="single" collapsible className="w-full mb-8">
            <AccordionItem value="item-1">
              <AccordionTrigger>Bileşik faiz nasıl hesaplanır?</AccordionTrigger>
              <AccordionContent>
                Bileşik faiz hesaplaması FV = PV × (1 + r)^n formülü ile yapılır. Ana paranız (PV), faiz oranı (r) ve süre (n) değerlerini formüle yerleştirerek gelecekteki değeri (FV) bulabilirsiniz. Online bileşik faiz hesaplama araçları bu işlemi kolaylaştırır.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Bileşik faiz formülü nedir?</AccordionTrigger>
              <AccordionContent>
                Bileşik faiz hesaplama formülü matematiksel olarak FV = PV × (1 + r)^n şeklindedir. Bu formülde FV gelecek değeri, PV şimdiki değeri, r dönem faiz oranını, n dönem sayısını ifade eder. Günlük, aylık veya yıllık bileşik faiz için dönem sayısı değişir.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Bileşik faiz ile basit faiz farkı nedir?</AccordionTrigger>
              <AccordionContent>
                Basit faizde sadece ana para faiz getirir, kazanılan faizler ana paraya eklenmez. Bileşik faizde ise kazanılan faizler ana paraya eklenerek sonraki dönemlerde de faiz kazanır. Bu "faiz üzerine faiz" etkisi uzun vadede büyük farklar yaratır.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Günlük bileşik faiz nasıl hesaplanır?</AccordionTrigger>
              <AccordionContent>
                Günlük bileşik faiz hesaplamasında yıllık faiz oranı 365'e bölünür ve dönem sayısı gün cinsinden hesaplanır. Formül: FV = PV × (1 + r/365)^(365×t) şeklindedir. Günlük bileşik faiz en hızlı büyüme sağlar ancak pratikte nadiren uygulanır.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Aylık bileşik faiz hesaplamasında nelere dikkat edilmeli?</AccordionTrigger>
              <AccordionContent>
                Aylık bileşik faiz hesaplamasında yıllık faiz oranının 12'ye bölünmesi ve dönem sayısının ay cinsinden hesaplanması gerekir. Ayrıca bankaların aylık faiz ödeme tarihleri, komisyon ücretleri ve vergi kesintileri gibi faktörler de dikkate alınmalıdır.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Bileşik faiz yatırım getirisine nasıl etki eder?</AccordionTrigger>
              <AccordionContent>
                Bileşik faiz, uzun vadeli yatırımlarda kazancın katlanarak büyümesini sağlar. İlk yıllarda etkisi az hissedilirken, zaman geçtikçe "kar topu" etkisi yaratır. 10 yıllık bileşik faiz hesaplama ile bile küçük miktarlar büyük meblağlara dönüşebilir.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>Yatırım yaparken hangi dönem aralığı en avantajlıdır?</AccordionTrigger>
              <AccordionContent>
                Bileşik faiz etkisinden maksimum faydalanmak için minimum 5-10 yıllık yatırım dönemi önerilir. Dönem uzadıkça bileşik faizin gücü artar. Emeklilik planlaması için 20-30 yıllık dönemler ideal sonuçlar verir.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>Bileşik faiz hesaplama araçları güvenilir mi?</AccordionTrigger>
              <AccordionContent>
                Online bileşik faiz hesaplama araçları matematiksel formüllere dayandığı için genellikle güvenilirdir. Ancak gerçek yatırım getirileri piyasa koşullarına göre değişebilir. Vergi, komisyon ve enflasyon gibi faktörleri ayrıca hesaplamanız gerekir.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger>Mevduat faizinde bileşik getiri mümkün mü?</AccordionTrigger>
              <AccordionContent>
                Türkiye'de bileşik mevduat faizi hesaplama sistemi sunan bankalar mevcuttur. Özellikle uzun vadeli mevduat hesapları ve bireysel emeklilik sistemlerinde bileşik faiz uygulanabilir. Bankanızdan bileşik faiz veren mevduat seçeneklerini öğrenebilirsiniz.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger>10 yıllık bileşik faizle nasıl büyüme sağlanır?</AccordionTrigger>
              <AccordionContent>
                10 yıllık bileşik faiz hesaplama ile %10 yıllık getiri sağlayan bir yatırım, ana parayı 2.6 katına çıkarır. Düzenli aylık katkılarla bu oran daha da artar. Borsa yatırımları, gayrimenkul ve uzun vadeli fonlar 10 yıllık dönemde önemli bileşik getiri sağlayabilir.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <h2 className="text-2xl font-bold mb-6">Sonuç – Neden Bileşik Faiz Hesaplamasını Bilmelisiniz?</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="mb-4">
              Bileşik faiz hesaplama, uzun vadeli finansal planlamada kritik öneme sahiptir. Küçük miktarların zamanla nasıl büyüyeceğini anlamak, doğru yatırım kararları vermenin temelidir.
            </p>
            
            <h3 className="text-lg font-semibold mb-4">Uygulama Alanları:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Emeklilik planlaması ve bireysel emeklilik sistemi</li>
              <li>Çocuk eğitimi için birikim planları</li>
              <li>Pasif gelir hedefleri ve finansal bağımsızlık</li>
              <li>Borsa yatırımları ve uzun vadeli portföy yönetimi</li>
              <li>Gayrimenkul yatırımları ve değer artışı hesaplamaları</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg mt-8">
            <h4 className="text-lg font-semibold mb-4">Önemli Uyarı</h4>
            <p className="text-gray-700">
              Bu bileşik faiz hesaplama aracı tahmini sonuçlar sunar. Gerçek yatırım getirileri piyasa koşulları, enflasyon, vergi ve komisyon ücretlerine göre değişebilir. Yatırım kararlarınızı vermeden önce finansal danışmanınıza başvurmanız önerilir.
            </p>
          </div>
        </article>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>
            Not: Hesaplamalar tahmini değerler içerir. Gerçek yatırım getirileri piyasa koşullarına göre değişebilir.
          </p>
        </div>
      </div>
    </>
  );
};

export default CompoundInterestCalculatorPage;