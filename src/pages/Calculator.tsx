import Calculator from "../components/Calculator";

const CalculatorPage = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-12 min-h-screen flex flex-col items-center">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          POS Komisyon Hesaplayıcı
        </h1>
        <p className="text-xl text-gray-600">
          İşlem tutarı ve komisyon oranına göre ödeyeceğiniz tutarı hesaplayın
        </p>
      </div>

      <Calculator />
    </div>
  );
};

export default CalculatorPage;