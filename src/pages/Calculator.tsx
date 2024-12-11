import { Helmet } from "react-helmet";
import Calculator from "../components/Calculator";

const CalculatorPage = () => {
  return (
    <>
      <Helmet>
        <title>POS Komisyon Hesaplama Aracı 2024 | Ücretsiz Hesaplayıcı</title>
        <meta
          name="description"
          content="POS komisyon hesaplama aracı ile işlem tutarı ve komisyon oranına göre ödeyeceğiniz tutarı kolayca hesaplayın. Güncel POS komisyon oranları ve detaylı bilgiler."
        />
        <meta name="keywords" content="pos komisyon hesaplama, pos hesaplayıcı, pos komisyon oranı hesaplama, pos maliyet hesaplama, pos ücret hesaplama" />
        <link rel="canonical" href="https://poskomisyon.com/calculator" />
      </Helmet>

      <div className="container mx-auto px-4 pt-24 pb-12 min-h-screen flex flex-col items-center">
        <div className="text-center mb-12 max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">POS Komisyon Oranları Hesaplama</h1>
          <p className="text-xl text-gray-600 mb-4">
            İşlem tutarı ve komisyon oranına göre ödeyeceğiniz POS komisyon tutarını hesaplayın
          </p>
          <p className="text-sm text-gray-500">
            POS komisyon hesaplama, günlük POS işlemlerinizden kaynaklanan komisyon
            tutarlarını hesaplamanıza yardımcı olur. Ayrıca aylık ve yıllık
            tahminler sunar.
          </p>
        </div>

        <Calculator />

        <article className="prose prose-lg max-w-4xl mx-auto mt-16 px-4">
          <h2 className="text-2xl font-bold mb-6">POS Komisyon Oranları Hakkında Detaylı Bilgi</h2>
          
          <p className="mb-4">
            POS komisyon oranları, işletmelerin kredi kartı ve banka kartı işlemlerinde ödedikleri ücretleri ifade eder. Bu oranlar, işletmenin büyüklüğü, aylık işlem hacmi ve tercih edilen ödeme yöntemlerine göre değişiklik gösterebilir.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">POS Komisyon Oranlarını Etkileyen Faktörler</h3>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">İşletmenin aylık ciro miktarı</li>
            <li className="mb-2">Tercih edilen banka veya finans kuruluşu</li>
            <li className="mb-2">POS cihazı türü (Fiziksel, Sanal, Mobil)</li>
            <li className="mb-2">Taksit seçenekleri ve vadeleri</li>
            <li className="mb-2">Sektörel özellikler ve risk faktörleri</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">Komisyon Hesaplama Önemli Noktalar</h3>
          <p className="mb-4">
            POS komisyon oranlarını hesaplarken dikkat edilmesi gereken bazı önemli noktalar bulunmaktadır:
          </p>
          <ol className="list-decimal pl-6 mb-6">
            <li className="mb-2">
              <strong>Sabit Ücretler:</strong> Bazı bankalar, komisyon oranına ek olarak sabit işlem ücreti talep edebilir.
            </li>
            <li className="mb-2">
              <strong>Taksit Farkları:</strong> Taksitli işlemlerde komisyon oranları genellikle daha yüksektir.
            </li>
            <li className="mb-2">
              <strong>Sektörel Farklılıklar:</strong> Farklı sektörlerde faaliyet gösteren işletmeler için farklı oranlar uygulanabilir.
            </li>
          </ol>

          <h3 className="text-xl font-semibold mt-8 mb-4">Nasıl Tasarruf Sağlanır?</h3>
          <p className="mb-4">
            İşletmeler, POS komisyon oranlarında tasarruf sağlamak için şu adımları izleyebilir:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Farklı bankaların tekliflerini karşılaştırma</li>
            <li className="mb-2">İşlem hacmine göre özel anlaşmalar yapma</li>
            <li className="mb-2">Alternatif ödeme yöntemlerini değerlendirme</li>
            <li className="mb-2">Taksit seçeneklerini optimize etme</li>
          </ul>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <h4 className="text-lg font-semibold mb-4">Önemli Not</h4>
            <p className="text-gray-700">
              Bu hesaplama aracı tahmini sonuçlar sunar. Kesin oranlar için bankanızla iletişime geçmenizi öneririz. Komisyon oranları piyasa koşullarına göre değişiklik gösterebilir.
            </p>
          </div>
        </article>

        <div className="mt-12 text-center max-w-2xl text-sm text-gray-500">
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
