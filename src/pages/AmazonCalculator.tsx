
import { Helmet } from "react-helmet";
import AmazonCalculator from "@/components/amazon/AmazonCalculator";
import CanonicalLink from "@/components/CanonicalLink";
import { getCanonicalUrl } from "@/lib/utils";

const AmazonCalculatorPage = () => {
  return (
    <>
      <Helmet>
        <title>Amazon Komisyon Hesaplama & Oranları</title>
        <meta
          name="description"
          content="Amazon satıcıları için güncel komisyon oranları hesaplama aracı. Kategori bazlı Amazon komisyonlarını hesaplayın, FBA ücretlerini dahil edin ve kar marjı analizi yapın."
        />
        <meta 
          name="keywords" 
          content="amazon komisyon hesaplama, amazon komisyon oranları, amazon fba hesaplama, amazon satıcı hesap makinesi, amazon türkiye komisyonları" 
        />
        <link rel="canonical" href={getCanonicalUrl("/amazon-komisyon")} />
        <meta property="og:title" content="Amazon Komisyon Hesaplama & Oranları" />
        <meta property="og:description" content="Amazon satıcıları için güncel komisyon oranları hesaplama aracı." />
        <meta property="og:url" content={getCanonicalUrl("/amazon-komisyon")} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Amazon Komisyon Hesaplama & Oranları" />
        <meta name="twitter:description" content="Amazon satıcıları için güncel komisyon oranları hesaplama aracı." />
      </Helmet>
      
      <CanonicalLink path="/amazon-komisyon" />

      <div className="container mx-auto px-4 pt-24 pb-12 min-h-screen">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Amazon Komisyon Hesaplama
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-4">
            Amazon'da satış yaparken kategori bazlı komisyon oranlarını hesaplayın
          </p>
          <p className="text-sm md:text-base text-gray-500">
            Ürün maliyeti, satış fiyatı ve FBA ücretlerini hesaba katarak net kar ve kar marjınızı öğrenin.
          </p>
        </div>

        <div className="glass-card rounded-xl p-8 max-w-6xl w-full mx-auto animate-fade-in">
          <AmazonCalculator />
        </div>

        <article className="prose prose-lg max-w-4xl mx-auto mt-16 px-4">
          <h2 className="text-2xl font-bold mb-6">Amazon Komisyon Oranları Hakkında Bilmeniz Gerekenler</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <p className="mb-4">
              Amazon, dünyanın en büyük e-ticaret platformlarından biridir ve satıcılar için çeşitli 
              kategorilerde komisyon oranları uygulamaktadır. Bu oranlar ürün kategorisine, satıcı planınıza 
              ve FBA (Fulfillment by Amazon) kullanıp kullanmadığınıza göre değişebilir.
            </p>

            <h3 className="text-xl font-semibold mb-4">Amazon Komisyon Hesaplama Nasıl Yapılır?</h3>
            <p className="mb-4">
              Amazon'da kazancınızı doğru hesaplamak için komisyon oranları, FBA ücretleri ve 
              ürün maliyetlerini dikkate almalısınız. İşte temel formül:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="font-mono">Net Kar = Satış Fiyatı - (Referral Ücreti + FBA Ücreti + Ürün Maliyeti)</p>
            </div>

            <h3 className="text-xl font-semibold mb-4">Popüler Kategorilerin Komisyon Oranları</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 mb-4">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 border">Kategori</th>
                    <th className="px-4 py-2 border">Referral Ücreti</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">Elektronik</td>
                    <td className="px-4 py-2 border">%15</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Moda & Giyim</td>
                    <td className="px-4 py-2 border">%17</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Ev & Mutfak</td>
                    <td className="px-4 py-2 border">%15</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Oyuncak & Oyun</td>
                    <td className="px-4 py-2 border">%15</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Güzellik & Kişisel Bakım</td>
                    <td className="px-4 py-2 border">%15</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Kitap</td>
                    <td className="px-4 py-2 border">%15</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold mb-4">Amazon FBA Nedir?</h3>
            <p className="mb-4">
              FBA (Fulfillment by Amazon), Amazon'un depolama, paketleme, kargo ve müşteri hizmetleri 
              hizmetini üstlendiği bir programdır. Bu program ile ürünlerinizi Amazon depolarına gönderir, 
              Amazon ise ürünlerinizin depolanması, paketlenmesi ve kargoya verilmesi işlemlerini üstlenir.
            </p>

            <h3 className="text-xl font-semibold mb-4">Amazon'da Satış Yaparken Dikkat Edilmesi Gerekenler</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Kategori seçiminizi doğru yapmanız, referral ücretlerinizi etkiler</li>
              <li>FBA kullanımı, kar marjınızı düşürebilir ancak operasyonel yükünüzü azaltır</li>
              <li>Amazon'da aylık satıcı hesap ücretleri bulunmaktadır (Profesyonel Satıcı Planı)</li>
              <li>Depolama ücretlerinin mevsimsel olarak değişebileceğini unutmayın</li>
              <li>Amazon Prime programına katılım, satışlarınızı artırabilir ancak gereksinimleri vardır</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <h4 className="text-lg font-semibold mb-4">Önemli Bilgilendirme</h4>
            <p className="text-gray-700">
              Bu hesaplama aracı tahmini sonuçlar sunar. Güncel ve kesin oranlar için Amazon Seller Central'ı kontrol etmenizi öneririz. 
              Komisyon oranları ve FBA ücretleri Amazon tarafından değiştirilebilir.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Sıkça Sorulan Sorular</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Amazon'da satış yapmak için ne tür bir hesaba ihtiyacım var?</h4>
                <p>
                  Amazon'da iki tür satıcı hesabı bulunmaktadır: Bireysel Satıcı (ürün başına ücretlendirme) 
                  ve Profesyonel Satıcı (aylık sabit ücret). Aylık 40'tan fazla ürün satmayı planlıyorsanız 
                  Profesyonel Satıcı Planı daha avantajlıdır.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Amazon FBA kullanmak zorunlu mudur?</h4>
                <p>
                  Hayır, FBA kullanımı zorunlu değildir. FBM (Fulfillment by Merchant) olarak bilinen, 
                  ürünlerin satıcı tarafından depolanıp gönderildiği bir model de mevcuttur. Ancak FBA, 
                  lojistik süreçleri kolaylaştırır ve Prime uygunluğu sağlar.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Amazon hangi durumlarda ek ücretler alır?</h4>
                <p>
                  Uzun süre depolama, büyük ve ağır ürünler, tehlikeli maddeler, sezonsal depolama gibi 
                  durumlarda ek ücretler söz konusu olabilir. Ayrıca, reklam ve promosyon hizmetleri için 
                  de ekstra ücretler ödemeniz gerekebilir.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Amazon'da ödeme ve transfer süreleri nasıldır?</h4>
                <p>
                  Amazon genellikle 14 günlük ödeme döngüsü ile çalışır. Ürünün teslimatından ve müşteri 
                  memnuniyetinin sağlanmasından sonra, bir sonraki ödeme döneminde bakiyeniz hesabınıza aktarılır.
                </p>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>
            Not: Hesaplamalar tahmini değerler içerir. Güncel komisyon oranları için Amazon Seller Central'ı kontrol ediniz.
          </p>
        </div>
      </div>
    </>
  );
};

export default AmazonCalculatorPage;
