
import { Helmet } from "react-helmet";
import N11Calculator from "@/components/n11/N11Calculator";
import CanonicalLink from "@/components/CanonicalLink";
import { getCanonicalUrl } from "@/lib/utils";

const N11CalculatorPage = () => {
  return (
    <>
      <Helmet>
        <title>n11 Komisyon Hesaplama & Oranları</title>
        <meta
          name="description"
          content="n11 satıcıları için güncel komisyon oranları hesaplama aracı. Kategori bazlı n11 komisyonlarını hesaplayın, kar marjı analizi yapın ve satış stratejinizi belirleyin."
        />
        <meta 
          name="keywords" 
          content="n11 komisyon hesaplama, n11 komisyon oranları, n11 kar hesaplama, n11 satıcı hesap makinesi, e-ticaret komisyon hesaplama" 
        />
        <link rel="canonical" href={getCanonicalUrl("/n11-komisyon")} />
        <meta property="og:title" content="n11 Komisyon Hesaplama & Oranları" />
        <meta property="og:description" content="n11 satıcıları için güncel komisyon oranları hesaplama aracı." />
        <meta property="og:url" content={getCanonicalUrl("/n11-komisyon")} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="n11 Komisyon Hesaplama & Oranları" />
        <meta name="twitter:description" content="n11 satıcıları için güncel komisyon oranları hesaplama aracı." />
      </Helmet>

      <div className="container mx-auto px-4 pt-24 pb-12 min-h-screen">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            n11 Komisyon Hesaplama
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-4">
            n11'de satış yaparken kategori bazlı komisyon oranlarını hesaplayın
          </p>
          <p className="text-sm md:text-base text-gray-500">
            Ürün maliyeti, satış fiyatı ve kargo ücretlerini girerek net kar ve kar marjınızı hesaplayın.
          </p>
        </div>

        <div className="glass-card rounded-xl p-8 max-w-6xl w-full mx-auto animate-fade-in">
          <N11Calculator />
        </div>

        <article className="prose prose-lg max-w-4xl mx-auto mt-16 px-4">
          <h2 className="text-2xl font-bold mb-6">n11 Komisyon Oranları Hakkında Bilmeniz Gerekenler</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <p className="mb-4">
              n11, Türkiye'nin önde gelen e-ticaret platformlarından biridir ve satıcılar için 
              çeşitli kategorilerde komisyon oranları uygulamaktadır. Komisyon oranları, ürünün 
              kategorisine, satıcının performansına ve diğer faktörlere bağlı olarak değişebilir.
            </p>

            <h3 className="text-xl font-semibold mb-4">n11 Komisyon Hesaplama Nasıl Yapılır?</h3>
            <p className="mb-4">
              n11'de kazancınızı doğru hesaplamak için komisyon oranları, kargo ücretleri ve 
              ürün maliyetlerini dikkate almalısınız. İşte temel formül:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="font-mono">Net Kar = Satış Fiyatı - (Komisyon + Ürün Maliyeti + Kargo Ücreti)</p>
            </div>

            <h3 className="text-xl font-semibold mb-4">Popüler Kategorilerin Komisyon Oranları</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 mb-4">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 border">Kategori</th>
                    <th className="px-4 py-2 border">Komisyon Oranı</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">Elektronik</td>
                    <td className="px-4 py-2 border">%14</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Moda & Giyim</td>
                    <td className="px-4 py-2 border">%18</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Kozmetik</td>
                    <td className="px-4 py-2 border">%16</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Ev & Yaşam</td>
                    <td className="px-4 py-2 border">%15</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Kitap & Kırtasiye</td>
                    <td className="px-4 py-2 border">%12</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Süpermarket</td>
                    <td className="px-4 py-2 border">%11</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold mb-4">n11'de Satış Yaparken Dikkat Edilmesi Gerekenler</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Kategori seçiminizi doğru yapmanız, komisyon oranlarınızı etkiler</li>
              <li>Ürün fiyatlandırmasında KDV oranlarını doğru hesaplamanız önemlidir</li>
              <li>n11 Jet kargo seçeneğini kullanarak kargo maliyetlerinizi optimize edebilirsiniz</li>
              <li>Mağaza puanınız yükseldikçe çeşitli avantajlar elde edebilirsiniz</li>
              <li>n11 Pro üyeliği ile daha düşük komisyon oranlarından yararlanabilirsiniz</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <h4 className="text-lg font-semibold mb-4">Önemli Bilgilendirme</h4>
            <p className="text-gray-700">
              Bu hesaplama aracı tahmini sonuçlar sunar. Güncel ve kesin oranlar için n11 Satıcı Paneli'ni kontrol etmenizi öneririz. 
              Komisyon oranları ve kurallar n11 tarafından değiştirilebilir.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Sıkça Sorulan Sorular</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">n11'de komisyon oranları nasıl belirlenir?</h4>
                <p>
                  n11 komisyon oranları öncelikle ürün kategorisine göre belirlenir. Bazı durumlarda 
                  satıcı performansı, n11 Pro üyeliği ve özel anlaşmalar da komisyon oranlarını etkileyebilir.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">n11'de satış yapmak için ek maliyetler var mı?</h4>
                <p>
                  n11'de satış yapmanın temel maliyeti komisyon oranlarıdır. Bunun dışında, n11 Pro üyeliği 
                  gibi ücretli hizmetler de mevcuttur. Ayrıca kargo maliyetleri de satıcı tarafından karşılanabilir.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">n11 komisyon oranları KDV dahil mi hesaplanır?</h4>
                <p>
                  n11 komisyon oranları genellikle KDV hariç satış fiyatı üzerinden hesaplanır. 
                  Ancak hesaplama yaparken KDV dahil veya hariç olma durumunu dikkate almanız önemlidir.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">n11'de ödeme ve transfer süreleri nasıldır?</h4>
                <p>
                  n11, ürünün müşteriye teslim edilmesini takiben belirli bir süre sonra ödemeleri satıcı 
                  hesabına aktarır. Bu süre genellikle 1-2 hafta arasında değişebilir ve satıcı performansına göre farklılık gösterebilir.
                </p>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>
            Not: Hesaplamalar tahmini değerler içerir. Güncel komisyon oranları için n11 Satıcı Paneli'ni kontrol ediniz.
          </p>
        </div>
      </div>
    </>
  );
};

export default N11CalculatorPage;
