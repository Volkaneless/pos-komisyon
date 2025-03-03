
import { Helmet } from "react-helmet";
import DolapCalculator from "@/components/dolap/DolapCalculator";
import CanonicalLink from "@/components/CanonicalLink";
import { getCanonicalUrl } from "@/lib/utils";

const DolapCalculatorPage = () => {
  return (
    <>
      <Helmet>
        <title>Dolap Komisyon Hesaplama & Oranları</title>
        <meta
          name="description"
          content="Dolap satıcıları ve alıcıları için güncel komisyon oranları hesaplama aracı. Dolap'ta satış ve alış yaparken ödeyeceğiniz komisyon tutarlarını hesaplayın."
        />
        <meta 
          name="keywords" 
          content="dolap komisyon hesaplama, dolap komisyon oranları, dolap hizmet bedeli, dolap satıcı komisyonu, dolap alıcı komisyonu" 
        />
        <link rel="canonical" href={getCanonicalUrl("/dolap-komisyon")} />
        <meta property="og:title" content="Dolap Komisyon Hesaplama & Oranları" />
        <meta property="og:description" content="Dolap satıcıları ve alıcıları için güncel komisyon oranları hesaplama aracı." />
        <meta property="og:url" content={getCanonicalUrl("/dolap-komisyon")} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dolap Komisyon Hesaplama & Oranları" />
        <meta name="twitter:description" content="Dolap satıcıları ve alıcıları için güncel komisyon oranları hesaplama aracı." />
      </Helmet>

      <div className="container mx-auto px-4 pt-24 pb-12 min-h-screen">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Dolap Komisyon Hesaplama
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-4">
            Dolap'ta alıcı veya satıcı olarak komisyon tutarlarını hesaplayın
          </p>
          <p className="text-sm md:text-base text-gray-500">
            Satış fiyatını ve rolünüzü girerek Dolap'ın uygulayacağı komisyon tutarını öğrenin.
          </p>
        </div>

        <div className="glass-card rounded-xl p-8 max-w-6xl w-full mx-auto animate-fade-in">
          <DolapCalculator />
        </div>

        <article className="prose prose-lg max-w-4xl mx-auto mt-16 px-4">
          <h2 className="text-2xl font-bold mb-6">Dolap Komisyon Oranları Hakkında Bilmeniz Gerekenler</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <p className="mb-4">
              Dolap, ikinci el kıyafet ve aksesuar alışverişi için Türkiye'nin en popüler platformlarından biridir. 
              Platform, hem satıcılardan hem de alıcılardan belirli oranlarda hizmet bedeli tahsil etmektedir.
            </p>

            <h3 className="text-xl font-semibold mb-4">Satıcılar İçin Hizmet Bedeli</h3>
            <p className="mb-4">
              Dolap'ta satıcı olarak ürünlerinizi satarken, satış tutarınıza göre değişen oranlarda hizmet bedeli ödemeniz gerekmektedir:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 mb-4">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 border">Satış Tutarı</th>
                    <th className="px-4 py-2 border">Hizmet Bedeli</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">0 - 4.999 TL</td>
                    <td className="px-4 py-2 border">%12</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">5.000 TL ve üzeri</td>
                    <td className="px-4 py-2 border">600 TL (sabit)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-4">
              Bu hizmet bedelleri, satıştan elde ettiğiniz gelirden düşülür ve kalan tutar hesabınıza aktarılır.
            </p>

            <h3 className="text-xl font-semibold mb-4">Alıcılar İçin Hizmet Bedeli</h3>
            <p className="mb-4">
              Dolap'ta alıcı olarak da, satın alma tutarınıza göre farklı hizmet bedelleri ödemeniz gerekir:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 mb-4">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 border">Alış Tutarı</th>
                    <th className="px-4 py-2 border">Hizmet Bedeli</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">0 - 149 TL</td>
                    <td className="px-4 py-2 border">9,99 TL (sabit)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">150 - 249 TL</td>
                    <td className="px-4 py-2 border">16,99 TL (sabit)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">250 - 4.999 TL</td>
                    <td className="px-4 py-2 border">%8</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">5.000 TL ve üzeri</td>
                    <td className="px-4 py-2 border">600 TL (sabit)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4">Dolap'ta Alışveriş Yaparken Dikkat Edilmesi Gerekenler</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Satıcı olarak, ürün fiyatlandırmasında komisyon oranlarını göz önünde bulundurun</li>
            <li>Alıcı olarak, ödeyeceğiniz toplam tutarı hesaplarken hizmet bedelini de dahil edin</li>
            <li>Kargo ücretleri genellikle alıcı tarafından karşılanır, ancak kampanya dönemlerinde değişiklik olabilir</li>
            <li>Yüksek fiyatlı ürünlerde (5.000 TL ve üzeri) sabit hizmet bedeli avantaj sağlayabilir</li>
            <li>İade süreçlerinde komisyon iadesi için Dolap'ın güncel politikalarını kontrol edin</li>
          </ul>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <h4 className="text-lg font-semibold mb-4">Önemli Bilgilendirme</h4>
            <p className="text-gray-700">
              Bu hesaplama aracı tahmini sonuçlar sunar. Güncel ve kesin oranlar için Dolap uygulamasını kontrol etmenizi öneririz. 
              Komisyon oranları ve kurallar Dolap tarafından değiştirilebilir.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Sıkça Sorulan Sorular</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Dolap'ta satıcı komisyonu ne kadar?</h4>
                <p>
                  Dolap'ta satıcı olarak 4.999 TL ve altındaki satışlarınızda %12 komisyon ödersiniz. 
                  5.000 TL ve üzerindeki satışlarda ise sabit 600 TL hizmet bedeli alınır.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Dolap'ta alıcı olarak komisyon öder miyim?</h4>
                <p>
                  Evet, Dolap'ta alıcı olarak da hizmet bedeli ödersiniz. 0-149 TL arası alışverişlerde 9,99 TL, 
                  150-249 TL arası alışverişlerde 16,99 TL, 250-4.999 TL arası alışverişlerde %8 komisyon uygulanır. 
                  5.000 TL ve üzeri alışverişlerde ise sabit 600 TL hizmet bedeli alınır.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Dolap komisyonu KDV dahil mi hesaplanır?</h4>
                <p>
                  Dolap komisyonları genellikle satış fiyatı üzerinden hesaplanır. KDV dahil fiyat üzerinden 
                  komisyon hesaplanmaktadır.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Dolap'ta kargo ücreti kim tarafından karşılanır?</h4>
                <p>
                  Dolap'ta kargo ücretleri genellikle alıcı tarafından karşılanır. Ancak Dolap'ın zaman zaman 
                  düzenlediği kampanyalarda kargo ücretleri değişkenlik gösterebilir.
                </p>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>
            Not: Hesaplamalar tahmini değerler içerir. Güncel komisyon oranları için Dolap uygulamasını kontrol ediniz.
          </p>
        </div>
      </div>
    </>
  );
};

export default DolapCalculatorPage;
