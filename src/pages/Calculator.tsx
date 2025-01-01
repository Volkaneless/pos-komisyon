import { Helmet } from "react-helmet";
import Calculator from "../components/Calculator";

const CalculatorPage = () => {
  return (
    <>
      <Helmet>
        <title>POS Komisyon Oranları Hesaplama Programı - 2025</title>
        <meta
          name="description"
          content="2025 yılı güncel POS komisyon oranları hesaplama aracı. Banka POS cihazları için komisyon tutarlarını kolayca hesaplayın. Taksit seçenekleri ve detaylı maliyet analizi."
        />
        <meta 
          name="keywords" 
          content="pos komisyon hesaplama 2025, pos komisyon oranları, pos komisyon hesaplama programı, pos maliyet hesaplama, pos taksit komisyon hesaplama" 
        />
        <link rel="canonical" href="https://poskomisyon.com/calculator" />
        <meta property="og:title" content="POS Komisyon Oranları Hesaplama Programı - 2025" />
        <meta property="og:description" content="2025 yılı güncel POS komisyon oranları hesaplama aracı. Banka POS cihazları için komisyon tutarlarını kolayca hesaplayın." />
        <meta property="og:url" content="https://poskomisyon.com/calculator" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="POS Komisyon Oranları Hesaplama Programı - 2025" />
        <meta name="twitter:description" content="2025 yılı güncel POS komisyon oranları hesaplama aracı. Detaylı maliyet analizi." />
      </Helmet>

      <div className="container mx-auto px-4 pt-24 pb-12 min-h-screen">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            POS Komisyon Oranları Hesaplama Programı
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-4">
            2025 yılı güncel POS komisyon oranlarını hesaplayın, taksit seçeneklerini karşılaştırın
          </p>
          <p className="text-sm md:text-base text-gray-500">
            Banka ve finans kuruluşlarının POS komisyon oranlarını kolayca hesaplayın,
            maliyetlerinizi optimize edin.
          </p>
        </div>

        <Calculator />

        <article className="prose prose-lg max-w-4xl mx-auto mt-16 px-4">
          <h2 className="text-2xl font-bold mb-6">POS Komisyon Oranları Hakkında Detaylı Bilgi</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-4">2025 POS Komisyon Oranları Nasıl Hesaplanır?</h3>
            <p className="mb-4">
              POS komisyon oranları hesaplanırken dikkat edilmesi gereken birçok faktör bulunmaktadır:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>İşlem tutarı ve taksit sayısı</li>
              <li>Banka veya finans kuruluşunun belirlediği komisyon oranı</li>
              <li>Sabit işlem ücretleri</li>
              <li>Aylık/yıllık POS kullanım bedelleri</li>
              <li>Sektöre özel komisyon indirimleri</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Taksitli İşlemler</h3>
              <p>
                Taksitli işlemlerde komisyon oranları genellikle daha yüksektir. 
                Taksit sayısı arttıkça komisyon oranı da artış gösterebilir.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Peşin İşlemler</h3>
              <p>
                Peşin işlemlerde komisyon oranları daha düşüktür ve sabit ücret
                uygulaması daha yaygındır.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <h4 className="text-lg font-semibold mb-4">Önemli Bilgilendirme</h4>
            <p className="text-gray-700">
              Bu hesaplama aracı tahmini sonuçlar sunar. Kesin oranlar için bankanızla iletişime geçmenizi öneririz. 
              Komisyon oranları piyasa koşullarına göre değişiklik gösterebilir.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Sıkça Sorulan Sorular</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">POS komisyon oranı nedir?</h4>
                <p>
                  POS komisyon oranı, kredi kartı ile yapılan işlemlerde bankalar tarafından 
                  işlem tutarı üzerinden alınan hizmet bedelidir.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Komisyon oranları nasıl belirlenir?</h4>
                <p>
                  Komisyon oranları işletmenin cirosu, sektörü, taksit seçenekleri ve 
                  banka ile yapılan anlaşmalara göre belirlenir.
                </p>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>
            Not: Hesaplamalar tahmini değerler içerir. Gerçek komisyon tutarları
            bankanıza ve anlaşmanıza göre değişiklik gösterebilir.
          </p>
        </div>
      </div>
    </>
  );
};

export default CalculatorPage;