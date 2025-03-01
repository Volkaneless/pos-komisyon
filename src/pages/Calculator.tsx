
import { Helmet } from "react-helmet";
import CalculatorComponent from "../components/Calculator";

const Calculator = () => {
  return (
    <>
      <Helmet>
        <title>POS Komisyon Hesaplayıcı | POS Komisyon Oranı Hesaplama</title>
        <meta name="description" content="POS komisyon oranı hesaplama aracı ile işlem tutarınıza göre ödeyeceğiniz POS komisyon ücretini hesaplayın. Banka ve ödeme kuruluşlarının güncel oranları." />
        <link rel="canonical" href="https://poskomisyon.com/calculator" />
      </Helmet>

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">POS Komisyon Hesaplayıcı</h1>
          <CalculatorComponent />
        </div>
      </div>
    </>
  );
};

export default Calculator;
