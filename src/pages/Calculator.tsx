import Calculator from "../components/Calculator";
import { Helmet } from "react-helmet";

const CalculatorPage = () => {
  return (
    <>
      <Helmet>
        <title>POS Komisyon Hesaplayıcı | Ücretsiz POS Komisyon Hesaplama</title>
        <meta name="description" content="Ücretsiz POS komisyon hesaplama aracımız ile işlem tutarı ve komisyon oranına göre ödeyeceğiniz tutarı kolayca hesaplayın." />
        <link rel="canonical" href="https://poskomisyon.com/calculator" />
      </Helmet>

      <div className="container mx-auto px-4 pt-24 pb-12 min-h-screen flex flex-col items-center">
        <div className="text-center mb-12 max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">POS Komisyon Hesaplayıcı</h1>
          <p className="text-xl text-gray-600 mb-4">
            İşlem tutarı ve komisyon oranına göre ödeyeceğiniz tutarı hesaplayın
          </p>
          <p className="text-sm text-gray-500">
            Bu hesaplayıcı, günlük POS işlemlerinizden kaynaklanan komisyon
            tutarlarını hesaplamanıza yardımcı olur. Ayrıca aylık ve yıllık
            tahminler sunar.
          </p>
        </div>

        <Calculator />

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
