
import { Helmet } from "react-helmet";
import { 
  Calculator, 
  Receipt, 
  CreditCard, 
  PiggyBank, 
  HelpCircle, 
  ShieldCheck 
} from "lucide-react";
import { Card } from "@/components/ui/card";
import CanonicalLink from "@/components/CanonicalLink";

const ShopierPage = () => {
  return (
    <>
      <Helmet>
        <title>Shopier Komisyon Oranları | Shopier Komisyon Hesaplama</title>
        <meta 
          name="description" 
          content="Shopier komisyon oranları ve ücretleri hakkında güncel bilgiler. Shopier komisyonunuzu hesaplayın, banka ve sanal POS komisyonlarıyla karşılaştırın."
        />
      </Helmet>
      <CanonicalLink path="/shopier-komisyon" includeHome={true} />

      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Shopier Komisyon Oranları</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Shopier ödeme sistemi komisyon oranları hakkında güncel bilgilere ulaşın ve 
            komisyon hesaplayıcı ile maliyetlerinizi önceden planlayın.
          </p>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-primary/10 to-purple-100 rounded-xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Shopier Nedir?</h2>
              <p className="text-gray-700 mb-4">
                Shopier, Türkiye'nin önde gelen ödeme sistemlerinden biridir. E-ticaret sitesi olmayan 
                işletmelere ve bireysel satıcılara, sosyal medya üzerinden ürün satışı yapma imkanı 
                sunan kolay bir çözümdür.
              </p>
              <p className="text-gray-700 mb-4">
                Komisyon oranları, ticari hacminize ve tercih ettiğiniz ödeme yöntemlerine 
                göre değişiklik gösterebilir.
              </p>
              <div className="mt-6">
                <a 
                  href="#calculator" 
                  className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Komisyon Hesapla
                </a>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center text-primary">
                  <CreditCard size={64} className="mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Online Ödeme Çözümü</h3>
                  <p className="text-gray-600">Hızlı, güvenli ve kullanımı kolay</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Commission Rates */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Shopier Komisyon Oranları (2024)</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 border-l-4 border-l-primary">
              <div className="flex items-center mb-4">
                <CreditCard className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold">Kredi Kartı</h3>
              </div>
              <p className="text-gray-600 mb-2">Tek Çekim</p>
              <p className="text-2xl font-bold text-primary">%2.9 + 0.49 TL</p>
              <p className="text-sm text-gray-500 mt-2">*ilave vergiler hariç</p>
            </Card>
            
            <Card className="p-6 border-l-4 border-l-purple-500">
              <div className="flex items-center mb-4">
                <Receipt className="h-6 w-6 text-purple-500 mr-2" />
                <h3 className="text-xl font-semibold">Taksitli Ödeme</h3>
              </div>
              <p className="text-gray-600 mb-2">2-12 Taksit</p>
              <p className="text-2xl font-bold text-purple-500">%3.4 + 0.49 TL</p>
              <p className="text-sm text-gray-500 mt-2">*ilave vergiler hariç</p>
            </Card>
            
            <Card className="p-6 border-l-4 border-l-blue-500">
              <div className="flex items-center mb-4">
                <PiggyBank className="h-6 w-6 text-blue-500 mr-2" />
                <h3 className="text-xl font-semibold">Havale/EFT</h3>
              </div>
              <p className="text-gray-600 mb-2">Banka Transferi</p>
              <p className="text-2xl font-bold text-blue-500">%1.9 + 0.49 TL</p>
              <p className="text-sm text-gray-500 mt-2">*ilave vergiler hariç</p>
            </Card>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Komisyon Detayları</h3>
            <p className="mb-3">
              Shopier komisyon oranları, satış tutarlarınıza ve ödeme türlerine göre farklılık gösterir. 
              Yukarıdaki oranlara ek olarak, aşağıdaki bilgileri de dikkate almanız önemlidir:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Komisyon oranlarına %18 KDV eklenir.</li>
              <li>Sabit ücret her işlem için bir kez alınır.</li>
              <li>Aylık 100.000 TL üzeri satış hacmine ulaşan işletmeler için özel oranlar sunulabilir.</li>
              <li>Uluslararası kartlar için farklı komisyon oranları uygulanabilir.</li>
              <li>Taksitli işlemlerde, taksit sayısına göre komisyon oranları değişebilir.</li>
            </ul>
          </div>
        </div>

        {/* Calculator Section */}
        <div id="calculator" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Shopier Komisyon Hesaplayıcı</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4">
              Shopier komisyon hesaplayıcımız ile satış tutarınıza göre ödeyeceğiniz komisyon tutarını hesaplayabilirsiniz.
              Daha detaylı hesaplamalar için <a href="/calculator" className="text-primary hover:underline">POS komisyon hesaplayıcımızı</a> kullanabilirsiniz.
            </p>
            <div className="text-center py-10">
              <Calculator size={48} className="mx-auto text-primary mb-4" />
              <p className="text-lg font-medium">Detaylı hesaplama yapmak için:</p>
              <a 
                href="/calculator" 
                className="inline-block mt-4 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Komisyon Hesaplayıcıya Git
              </a>
            </div>
          </div>
        </div>

        {/* Comparison with other payment systems */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Shopier ve Diğer Ödeme Sistemleri Karşılaştırması</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 px-4 text-left font-semibold border-b">Ödeme Sistemi</th>
                  <th className="py-3 px-4 text-left font-semibold border-b">Tek Çekim</th>
                  <th className="py-3 px-4 text-left font-semibold border-b">Taksitli İşlem</th>
                  <th className="py-3 px-4 text-left font-semibold border-b">Sabit Ücret</th>
                  <th className="py-3 px-4 text-left font-semibold border-b">Para Çekme</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Shopier</td>
                  <td className="py-3 px-4">%2.9</td>
                  <td className="py-3 px-4">%3.4</td>
                  <td className="py-3 px-4">0.49 TL</td>
                  <td className="py-3 px-4">24 saat</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="py-3 px-4 font-medium">iyzico</td>
                  <td className="py-3 px-4">%2.9</td>
                  <td className="py-3 px-4">%3.25</td>
                  <td className="py-3 px-4">0.50 TL</td>
                  <td className="py-3 px-4">24-48 saat</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">PayTR</td>
                  <td className="py-3 px-4">%2.8</td>
                  <td className="py-3 px-4">%3.5</td>
                  <td className="py-3 px-4">0.45 TL</td>
                  <td className="py-3 px-4">24 saat</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="py-3 px-4 font-medium">Sanal POS (Banka)</td>
                  <td className="py-3 px-4">%1.9-2.5</td>
                  <td className="py-3 px-4">%2.5-3.5</td>
                  <td className="py-3 px-4">0-0.25 TL</td>
                  <td className="py-3 px-4">Anında</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-4 text-sm text-gray-600">
            *Oranlar değişiklik gösterebilir. En güncel bilgiler için ödeme kuruluşlarının resmi web sitelerini ziyaret ediniz.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Sıkça Sorulan Sorular</h2>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Shopier nasıl çalışır?</h3>
                  <p className="text-gray-600">
                    Shopier, ürün veya hizmet satmak isteyen kişilerin sosyal medya üzerinden satış yapabilmelerini sağlayan bir 
                    ödeme altyapısıdır. Satıcı, ürün için bir ödeme linki oluşturur, bu linki müşterisiyle paylaşır ve müşteri de bu link üzerinden 
                    ödeme yapar. Shopier, ödemeyi alır, komisyonunu keser ve kalan tutar satıcının hesabına aktarılır.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-5">
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Shopier'de para çekme süresi ne kadardır?</h3>
                  <p className="text-gray-600">
                    Shopier'de para çekme işlemleri genellikle 24 saat içinde gerçekleşir. İşlem yoğunluğu veya banka tatilleri gibi durumlarda 
                    bu süre uzayabilir. Otomatik para çekme sistemi ile belirli bir bakiye eşiğine ulaştığınızda otomatik olarak para çekme 
                    işlemi başlatılabilir.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-5">
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Shopier'i kimler kullanabilir?</h3>
                  <p className="text-gray-600">
                    Shopier, bireysel satıcılardan kurumsal işletmelere kadar herkesin kullanabileceği bir ödeme sistemidir. 
                    Özellikle e-ticaret sitesi olmayan ve sosyal medya üzerinden satış yapmak isteyen kişiler için idealdir. 
                    Kullanmak için 18 yaşından büyük olmak ve geçerli bir TC kimlik numarasına sahip olmak gerekir.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-5">
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Shopier kullanmanın avantajları nelerdir?</h3>
                  <p className="text-gray-600">
                    Shopier kullanmanın başlıca avantajları: 
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>E-ticaret sitesi olmadan online satış yapabilme imkanı</li>
                      <li>Hızlı ve kolay kurulum</li>
                      <li>Mobil uyumlu ödeme sayfaları</li>
                      <li>Güvenli ödeme altyapısı</li>
                      <li>Taksitli satış imkanı</li>
                      <li>24 saat para çekme imkanı</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/10 p-8 rounded-xl text-center">
          <div className="flex justify-center mb-4">
            <ShieldCheck className="h-12 w-12 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-3">En Uygun POS Çözümünü Bulun</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Shopier dışında diğer POS ve ödeme sistemleri hakkında bilgi edinmek ve işletmeniz için en uygun çözümü bulmak ister misiniz?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/pos-types/sanal" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Sanal POS Çözümleri
            </a>
            <a href="/calculator" className="bg-white text-primary border border-primary px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Komisyon Hesaplayıcı
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopierPage;
