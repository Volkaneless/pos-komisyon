import { Terminal, Tag, DollarSign, Calendar, CheckCircle, Settings } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import FAQ from "@/components/FAQ";
import LatestBlogPosts from "@/components/pos/LatestBlogPosts";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { yazarkasaPOSProviders } from "@/data/pos-types/yazarkasaPOS";
import { Link } from "react-router-dom";
import MetaTags from "@/components/MetaTags";
import POSFilterSidebar from "@/components/POSFilterSidebar";
import POSCard from "@/components/POSCard";
import { useState } from "react";

interface FilterState {
  providers: string[];
  commissionRanges: string[];
  monthlyFeeRanges: string[];
  features: string[];
}

const YazarkasaPOS = () => {
  const currentYear = new Date().getFullYear();
  const [filteredProviders, setFilteredProviders] = useState(yazarkasaPOSProviders);

  const applyFilters = (filters: FilterState) => {
    let filtered = yazarkasaPOSProviders;

    if (filters.providers.length > 0) {
      filtered = filtered.filter(provider => 
        filters.providers.some(filterProvider => 
          provider.name.includes(filterProvider)
        )
      );
    }

    if (filters.commissionRanges.length > 0) {
      filtered = filtered.filter(provider => {
        const rate = parseFloat(provider.commission_rate.replace(',', '.'));
        return filters.commissionRanges.some(range => {
          if (range === "0-1") return rate >= 0 && rate <= 1;
          if (range === "1-2") return rate > 1 && rate <= 2;
          if (range === "2-3") return rate > 2 && rate <= 3;
          if (range === "3+") return rate > 3;
          return false;
        });
      });
    }

    if (filters.monthlyFeeRanges.length > 0) {
      filtered = filtered.filter(provider => {
        const fee = provider.monthly_fee;
        return filters.monthlyFeeRanges.some(range => {
          if (range === "0") return fee.includes("0") || fee.includes("Ücretsiz");
          if (range === "0-100") {
            const feeNum = parseInt(fee.replace(/\D/g, ''));
            return feeNum >= 0 && feeNum <= 100;
          }
          if (range === "100-200") {
            const feeNum = parseInt(fee.replace(/\D/g, ''));
            return feeNum > 100 && feeNum <= 200;
          }
          if (range === "200+") {
            const feeNum = parseInt(fee.replace(/\D/g, ''));
            return feeNum > 200;
          }
          return false;
        });
      });
    }

    if (filters.features.length > 0) {
      filtered = filtered.filter(provider =>
        filters.features.some(feature =>
          provider.features.includes(feature)
        )
      );
    }

    setFilteredProviders(filtered);
  };

  return (
    <>
      <MetaTags 
        title={`Yazar Kasa POS Cihazı Komisyon Oranları | ÖKC POS Fiyatları ${currentYear}`} 
        description={`Yazar kasa POS cihazları, ÖKC entegreli POS sistemleri ve komisyon oranları hakkında detaylı bilgi alın. ${currentYear} yılı güncel fiyatlar ve özellikler.`} 
        keywords={`yazar kasa pos, ökc pos, yeni nesil yazar kasa, entegre pos cihazı, yazarkasa pos fiyatları, ${currentYear} pos cihazları, yazarkasa komisyon oranları`} 
        canonicalPath="/pos-types/yazarkasa" 
        priority={20} 
      />
      
      <POSTypePage 
        title={`Yazar Kasa POS Cihazı Komisyon Oranları ${currentYear}`}
        description={`En son teknoloji yazar kasa POS cihazlarını karşılaştırın, size en uygun ÖKC POS çözümünü bulun. ${currentYear} güncel bilgiler ve fiyatlar.`} 
        type="Yazar Kasa (ÖKC) POS" 
        Icon={Terminal} 
        whatIsContent={`Yazar kasa POS cihazları (ÖKC POS), geleneksel yazar kasalar ile ödeme sistemlerinin bir araya getirildiği entegre cihazlardır. ${currentYear} yılında işletmeler için zorunlu olan bu cihazlar, hem fiş/fatura kesme işlemlerini hem de kredi kartı ile ödeme alma işlemlerini tek bir cihaz üzerinden gerçekleştirebilmenizi sağlar.`} 
        advantages={["Çift fonksiyonlu kullanım (hem yazar kasa hem POS)", "Yasal gerekliliklere uygunluk", "Tek cihazla çoklu işlem yapabilme", "Stok ve satış takibi entegrasyonu", "Mali raporlamalarda kolaylık"]} 
        breadcrumbPath="/pos-types/yazarkasa"
      />

      <div className="container mx-auto px-4">
        <div className="flex gap-8">
          <div className="w-80 flex-shrink-0 hidden lg:block">
            <div className="bg-white rounded-lg border p-6 sticky top-4">
              <POSFilterSidebar
                providers={yazarkasaPOSProviders}
                onFilter={applyFilters}
              />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">
                  Yazar Kasa POS Çözümleri ({filteredProviders.length})
                </h2>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {filteredProviders.map(provider => (
                  <POSCard key={provider.id} {...provider} />
                ))}
              </div>

              {filteredProviders.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">Seçilen kriterlere uygun POS bulunamadı.</p>
                </div>
              )}
            </div>

            {/* Hero Section with CTA */}
            <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 my-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="md:w-3/5">
                  <h2 className="text-3xl font-bold mb-4">Yazar Kasa POS Çözümleri</h2>
                  <p className="text-gray-600 mb-6">
                    İşletmeniz için en uygun yazar kasa POS cihazını seçmek, maliyetlerinizi düşürürken işlemlerinizi de kolaylaştırır. 
                    {currentYear} yılında güncel komisyon oranları ve cihaz özellikleriyle karşılaştırma yapın.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild>
                      <a href="#karsilastirma">Cihazları Karşılaştır</a>
                    </Button>
                    <Button variant="outline">
                      <a href="#komisyon-oranlari">Komisyon Oranları</a>
                    </Button>
                  </div>
                </div>
                <div className="md:w-2/5">
                  <img src="/lovable-uploads/94b76f85-f46d-4697-9e85-37175b139351.png" alt="Yazar Kasa POS Cihazı" className="rounded-lg shadow-lg max-h-64 mx-auto" />
                </div>
              </div>
            </section>

            {/* Top Provider Cards */}
            <section id="karsilastirma" className="my-12">
              <h2 className="text-3xl font-bold mb-8 text-center">En Çok Tercih Edilen Yazar Kasa POS Cihazları</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {filteredProviders.slice(0, 6).map(provider => <Card key={provider.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-12 w-32 relative">
                          <img src={provider.logo || "/placeholder.svg"} alt={provider.name} className="h-full object-contain" />
                        </div>
                        <Tag className="text-primary w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-medium mb-2">{provider.name}</h3>
                      <div className="flex items-center mb-1">
                        <DollarSign className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm text-gray-700">Komisyon: {provider.commission_rate}</span>
                      </div>
                      <div className="flex items-center mb-4">
                        <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm text-gray-700">Aylık Ücret: {provider.monthly_fee}</span>
                      </div>
                      <div className="space-y-2 mb-4">
                        {provider.features.slice(0, 3).map((feature, idx) => <div key={idx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-primary mr-2" />
                            <span className="text-sm">{feature}</span>
                          </div>)}
                      </div>
                      <Button asChild className="w-full mt-2">
                        <Link to={`/pos/${provider.id}`}>Detayları Gör</Link>
                      </Button>
                    </CardContent>
                  </Card>)}
              </div>
              <div className="text-center mt-8">
                <Button variant="outline" asChild>
                  <Link to="/calculator">Komisyon Hesapla</Link>
                </Button>
              </div>
            </section>

            <div className="prose prose-lg max-w-4xl mx-auto mt-16">
              <h2 id="komisyon-oranlari" className="text-3xl font-bold mb-6">Yazar Kasa (ÖKC) POS Komisyon Oranları - {currentYear}</h2>
              
              <h3 className="text-2xl font-semibold mb-4">Yazar Kasa POS Nedir?</h3>
              <p className="text-gray-600 mb-6">
                Yazar kasa POS cihazları, satış işlemlerini ve mali kayıtları tek bir cihaz üzerinden yönetmenizi sağlayan entegre sistemlerdir. 
                Özellikle perakende sektöründe yaygın olarak kullanılan bu cihazlar, yasal gereklilikleri karşılarken modern ödeme çözümlerini de sunar.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Yazar Kasa POS Komisyon Oranları - {currentYear}</h3>
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2">İşlem Tipi</th>
                      <th className="border border-gray-300 px-4 py-2">Komisyon Oranı</th>
                      <th className="border border-gray-300 px-4 py-2">Açıklama</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Peşin</td>
                      <td className="border border-gray-300 px-4 py-2">%0,45 - %1,95</td>
                      <td className="border border-gray-300 px-4 py-2">En düşük komisyonlu seçenek</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">3 Taksit</td>
                      <td className="border border-gray-300 px-4 py-2">%1,75 - %3,25</td>
                      <td className="border border-gray-300 px-4 py-2">Orta vadeli taksit seçeneği</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">6 Taksit</td>
                      <td className="border border-gray-300 px-4 py-2">%2,95 - %4,45</td>
                      <td className="border border-gray-300 px-4 py-2">Yaygın tercih edilen taksit seçeneği</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">9 Taksit</td>
                      <td className="border border-gray-300 px-4 py-2">%3,95 - %5,45</td>
                      <td className="border border-gray-300 px-4 py-2">Uzun vadeli ödeme seçeneği</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Kurulum ve Entegrasyon</h3>
              <p className="text-gray-600 mb-6">
                Yazar kasa POS kurulumu için izlemeniz gereken adımlar:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Gerekli belgelerin hazırlanması ve başvuru</li>
                <li>Mali mühür ve sertifika işlemleri</li>
                <li>Cihaz kurulumu ve aktivasyonu</li>
                <li>Personel eğitimi ve kullanım talimatları</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4">Yasal Gereklilikler</h3>
              <p className="text-gray-600 mb-6">
                Yeni nesil ÖKC (Ödeme Kaydedici Cihaz) kullanımı yasal bir zorunluluktur. 
                Bu cihazlar GİB (Gelir İdaresi Başkanlığı) ile entegre çalışır ve günlük Z raporlarını otomatik olarak iletir.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Bakım ve Destek</h3>
              <p className="text-gray-600 mb-6">
                Yazar kasa POS cihazları için düzenli bakım ve teknik destek hizmetleri sunulmaktadır:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>7/24 teknik destek hizmeti</li>
                <li>Periyodik bakım ve güncelleme</li>
                <li>Arıza durumunda yerinde servis</li>
                <li>Yazılım güncellemeleri ve yeni özellik desteği</li>
              </ul>
            </div>

            {/* Yazarkasa POS Türleri */}
            <section className="my-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Yazar Kasa POS Türleri</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <Settings className="w-8 h-8 text-primary mr-4" />
                      <h3 className="text-xl font-semibold">Banka Yazar Kasa POS</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Bankalar tarafından sağlanan, resmi fatura kesme ve ödeme alma işlemlerini birleştiren entegre cihazlar. 
                      Genellikle güvenilir altyapı ve banka güvencesi sunarlar.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm">Banka güvencesi</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm">Entegre çözümler</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm">7/24 teknik destek</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <Settings className="w-8 h-8 text-primary mr-4" />
                      <h3 className="text-xl font-semibold">Marka Yazar Kasa POS</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Beko, Hugin, Ingenico gibi özel markalar tarafından üretilen, çeşitli bankalarla entegre çalışabilen cihazlar. 
                      Esnek kullanım seçenekleri sunarlar.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm">Çoklu banka entegrasyonu</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm">Modern tasarım</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm">Kullanım kolaylığı</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* En Sık Sorulan Sorular */}
            <section className="my-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Yazar Kasa POS Hakkında SSS</h2>
              <div className="bg-white rounded-xl shadow-md p-8">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Yazar Kasa POS cihazı almak zorunlu mu?</AccordionTrigger>
                    <AccordionContent>
                      Evet, Türkiye'de belirli bir ciro üzerindeki işletmeler için yeni nesil ödeme kaydedici cihaz (ÖKC) kullanmak yasal bir zorunluluktur. Bu cihazlar, mali verilerin güvenli şekilde saklanması ve raporlanması için Gelir İdaresi Başkanlığı'nın şartlarına uygun olarak tasarlanmıştır.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Yazar Kasa POS cihazı alırken nelere dikkat edilmeli?</AccordionTrigger>
                    <AccordionContent>
                      Cihaz alırken komisyon oranları, aylık sabit ücretler, teknik destek hizmetleri, cihazın garantisi, banka entegrasyonları ve iş modelinize uygun özelliklere sahip olup olmadığı kontrol edilmelidir. Ayrıca GİB onaylı olduğundan emin olunmalıdır.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Yazar Kasa POS cihazı nasıl bağlanır?</AccordionTrigger>
                    <AccordionContent>
                      Modern yazar kasa POS cihazları genellikle Wi-Fi, 3G/4G veya Ethernet bağlantıları ile internete bağlanabilir. Kurulum için genellikle yetkili servis desteği alınması önerilir. Cihazın bağlantısı yapıldıktan sonra, gerekli yazılım güncellemeleri ve aktivasyon işlemleri gerçekleştirilir.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Komisyon oranları nasıl belirlenir?</AccordionTrigger>
                    <AccordionContent>
                      Yazar kasa POS cihazlarında komisyon oranları, işlem tipine (peşin, taksitli), kullanılan kart türüne (kredi kartı, banka kartı) ve anlaşma yapılan bankaya göre değişiklik gösterebilir. İşletmenizin hacmine göre özel anlaşmalar yapılabilir.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>POS cihazımın arızalanması durumunda ne yapmalıyım?</AccordionTrigger>
                    <AccordionContent>
                      Cihazınız arızalandığında öncelikle anlaşmalı olduğunuz bankanın veya cihaz sağlayıcının teknik destek hattını aramalısınız. Çoğu durumda uzaktan destek ile sorun çözülebilir. Çözülememesi halinde, yerinde servis desteği talep edilebilir veya cihazın yetkili servise gönderilmesi gerekebilir.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </section>

            {/* Call to Action */}
            <section className="my-16 bg-primary text-white rounded-xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">İşletmeniz İçin En Uygun Yazar Kasa POS'u Bulun</h2>
              <p className="mb-6 max-w-2xl mx-auto">
                Ücretsiz danışmanlık hizmetimizden yararlanın, ihtiyaçlarınıza özel POS çözümlerini keşfedin ve komisyon oranlarını karşılaştırın.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <a href="#karsilastirma">POS Karşılaştır</a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-white" asChild>
                  <Link to="/calculator">Komisyon Hesapla</Link>
                </Button>
              </div>
            </section>

            <FAQ />
            
            <section className="my-16">
              <h2 className="text-2xl font-bold mb-6">Yazar Kasa POS ile İlgili Makaleler</h2>
              <LatestBlogPosts />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default YazarkasaPOS;
