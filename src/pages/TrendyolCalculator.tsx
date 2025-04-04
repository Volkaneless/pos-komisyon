import TrendyolCalculator from "@/components/trendyol/TrendyolCalculator";
import MetaTags from "@/components/MetaTags";

const TrendyolCalculatorPage = () => {
  return (
    <>
      <MetaTags
        title="Trendyol Komisyon Hesaplama & Oranları"
        description="Trendyol satıcıları için güncel komisyon oranları hesaplama aracı. Kategori bazlı Trendyol komisyonlarını hesaplayın ve kar marjı analizi yapın."
        keywords="trendyol komisyon hesaplama, trendyol komisyon oranları, trendyol satıcı hesap makinesi, trendyol türkiye komisyonları"
        canonicalPath="/trendyol-komisyon"
        priority={20}
      />
      
      <div className="container mx-auto px-4 pt-24 pb-12 min-h-screen">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Trendyol Komisyon Hesaplama
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-4">
            Trendyol'da satış yaparken kategori bazlı komisyon oranlarını hesaplayın
          </p>
          <p className="text-sm md:text-base text-gray-500">
            Ürün maliyeti, satış fiyatı ve kargo ücretlerini hesaba katarak net kar ve kar marjınızı öğrenin.
          </p>
        </div>

        <div className="glass-card rounded-xl p-8 max-w-6xl w-full mx-auto animate-fade-in">
          <TrendyolCalculator />
        </div>

        <article className="prose prose-lg max-w-4xl mx-auto mt-16 px-4">
          <h2 className="text-2xl font-bold mb-6">Trendyol Komisyon Oranları Hakkında Bilmeniz Gerekenler</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <p className="mb-4">
              Trendyol, Türkiye'nin en büyük e-ticaret platformlarından biridir ve satıcılar için 
              çeşitli kategorilerde komisyon oranları uygulamaktadır. Komisyon oranları, ürünün 
              kategorisine, satıcının performansına ve diğer faktörlere bağlı olarak değişebilir.
            </p>

            <h3 className="text-xl font-semibold mb-4">Trendyol Komisyon Hesaplama Nasıl Yapılır?</h3>
            <p className="mb-4">
              Trendyol'da kazancınızı doğru hesaplamak için komisyon oranları, kargo ücretleri ve 
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
                    <td className="px-4 py-2 border">%12</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Giyim & Moda</td>
                    <td className="px-4 py-2 border">%15</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Kozmetik</td>
                    <td className="px-4 py-2 border">%20</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Ev & Yaşam</td>
                    <td className="px-4 py-2 border">%18</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Kitap & Hobi</td>
                    <td className="px-4 py-2 border">%10</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Süpermarket</td>
                    <td className="px-4 py-2 border">%8</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold mb-4">Trendyol'da Satış Yaparken Dikkat Edilmesi Gerekenler</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Kategori seçiminin doğru yapılması komisyon oranlarını etkiler</li>
              <li>Ürün fiyatlandırmasında KDV oranlarını doğru hesaplayın</li>
              <li>Kargo anlaşmalarını kontrol edin ve uygun kargo seçeneğini belirleyin</li>
              <li>Satıcı puanınız yükseldikçe bazı kategorilerde indirimli komisyon oranları elde edebilirsiniz</li>
              <li>Kampanya dönemlerinde komisyon oranlarında değişiklikler olabilir</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <h4 className="text-lg font-semibold mb-4">Önemli Bilgilendirme</h4>
            <p className="text-gray-700">
              Bu hesaplama aracı tahmini sonuçlar sunar. Güncel ve kesin oranlar için Trendyol Satıcı Paneli'ni kontrol etmenizi öneririz. 
              Komisyon oranları ve kurallar Trendyol tarafından değiştirilebilir.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Sıkça Sorulan Sorular</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Trendyol'da komisyon oranları nasıl belirlenir?</h4>
                <p>
                  Trendyol komisyon oranları öncelikle ürün kategorisine göre belirlenir. Bazı durumlarda 
                  satıcı performansı ve özel anlaşmalar da komisyon oranlarını etkileyebilir.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Trendyol'da en düşük ve en yüksek komisyon oranları nedir?</h4>
                <p>
                  Trendyol'da komisyon oranları genellikle %8 ile %20 arasında değişmektedir. En düşük 
                  komisyon oranı süpermarket kategorisinde, en yüksek komisyon oranısı ise kozmetik kategorisinde uygulanır.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Trendyol komisyon oranları KDV dahil mi hesaplanır?</h4>
                <p>
                  Trendyol komisyon oranları genellikle KDV hariç satış fiyatı üzerinden hesaplanır. 
                  Ancak hesaplama yaparken KDV dahil veya hariç olma durumunu dikkate almanız önemlidir.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Trendyol'da kargo ücreti kim tarafından karşılanır?</h4>
                <p>
                  Trendyol'da kargo ücretleri satış modeline göre değişiklik gösterir. Satıcı veya alıcı 
                  tarafından karşılanabilir. Doğru hesaplama için kargo ücretinin kim tarafından karşılandığını bilmek önemlidir.
                </p>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>
            Not: Hesaplamalar tahmini değerler içerir. Güncel komisyon oranları için Trendyol Satıcı Paneli'ni kontrol ediniz.
          </p>
        </div>
      </div>
    </>
  );
};

export default TrendyolCalculatorPage;
